import React from 'react';
import BountyFulfilmentForm from "./BountyFulfilmentForm";
import $ from "jquery";
import PropTypes from 'prop-types';
import notify from '../../util/notification';
import Ipfs from "../../util/ipfs";


class BountyFulfilment extends React.Component{

    constructor(props, context){
        super(props);
        this.contracts = context.drizzle.contracts;
    }

    notificationMessage = notify.processing;

    ipfsFulfilments = {

    };

    state = {
        bountyId: '',
        issuerAddress: '',
        status: '',
        fulfilmentHash: '',
        fulfilmentId:'',
        fulfilment: {
            fulfilmentUrl: '',
            bountyId:'',
            fulfilmentData: {
                firstName: '',
                lastName: '',
                email: '',
                fulfillerAddress: this.props.accounts[0],
                bountyTitle: '',
            }
        }
    };

    attachStepEvents = () => {
        let current = 1,current_step,next_step,steps;
        steps = $("fieldset").length;
        $(".next").click(function(){
            current_step = $(this).closest("fieldset");
            next_step = $(this).closest("fieldset").next();
            next_step.show().scrollTop();
            current_step.hide();
        });
        $(".previous").click(function(){
            current_step = $(this).closest("fieldset");
            next_step = $(this).closest("fieldset").prev();
            next_step.show().scrollTop();
            current_step.hide();
        });
    };

    fetchDataFromIpfs = (ipfsHash, callback) => {
        const ipfsUrl = `https://gateway.ipfs.io/ipfs/${ipfsHash}`;
        fetch(ipfsUrl)
            .then(res => res.json())
            .then((data)=>{
                callback(data);
            }, (error) => {
                console.log(error);
            });
    };

    getIpfsHashFromContract = async (bountyId) => {
        const ipfsHash = await this.contracts.StandardBounties.methods.getBountyData(bountyId).call({from: this.props.accounts[0]});
        return ipfsHash;
    };

    getLatestFulfilmentHashFromContract = async () => {
        const ipfsHash = await this.contracts.StandardBounties.methods.latestFulfilmentHash().call({from: this.props.accounts[0]})
        return ipfsHash;
    };

    setBountyId = (bountyId) => {
        this.setState({
            bountyId: bountyId
        });
    };

    setBountyTitle = (bounty) => {
        const title = bounty.issue.title;
        const issuerAddress = bounty.issue.issuer;
        console.log(issuerAddress);

        const fulfilment = {...this.state.fulfilment};
        fulfilment.fulfilmentData.bountyTitle = title;
        this.setState({
            issuerAddress: issuerAddress,
            fulfilment: fulfilment
        });
    };

    setFulfilmentId = (fulfilmentId) => {
        this.setState({
            fulfilmentId: fulfilmentId,
        });
    };

    setFulfilmentHash = (fulfilmentHash) => {
        this.setState({
            fulfilmentHash: fulfilmentHash,
        });
    };

    setIpfsFulfilments = (ipfsFulfilments) => {
        this.ipfsFulfilments = ipfsFulfilments;
    };

    setNotificationMessage = (message) => {
        this.notificationMessage = message;
    };

    setLatestFulfilmentHash = (bountyId, fulfilmentId, ipfsHash) => {
        this.contracts.StandardBounties
            .methods
            .setLatestFulfilmentHash(bountyId,fulfilmentId,ipfsHash)
            .send({from: this.props.accounts[0]})
            .on("receipt", receipt => {
                console.log(receipt);
            });

        this.setNotificationMessage(notify.fulfilmentSubmitted);
    };

    updateFulfilment = (name, value) => {

        const fulfilment = {...this.state.fulfilment};
        if(name === 'fulfilmentUrl'){
            fulfilment[name] = value;
        }else {
            fulfilment.fulfilmentData[name] = value;
        }

        this.setState({
            fulfilment: fulfilment
        });
    };

    updateIpfsFulfilments = (issuerAddress, fulfilment) => {
        console.log(this.ipfsFulfilments);
        if(this.ipfsFulfilments[issuerAddress]){
            this.ipfsFulfilments[issuerAddress].push(fulfilment);
        }else {
            this.ipfsFulfilments[issuerAddress] = [];
            this.ipfsFulfilments[issuerAddress].push(fulfilment);
        }

        console.log(this.ipfsFulfilments);
        return this.ipfsFulfilments;
    };

    submitFulfilment = () => {
        const bountyId = this.state.bountyId;
        let data = this.state.fulfilment.fulfilmentData.fulfilmentHash;

        Ipfs.addDataToIpfs(this.state.fulfilment).then((ipfsHash) =>{
            data = ipfsHash;
            console.log(ipfsHash);
            this.setFulfilmentHash(ipfsHash);

            this.contracts.StandardBounties.methods.fulfillBounty(bountyId, data)
                .send({from: this.props.accounts[0]})
                .on("receipt", (receipt => {
                    this.setNotificationMessage(notify.finalizing);

                    if(receipt.status){
                        const fulfilmentId = receipt.events.BountyFulfilled.returnValues['_fulfillmentId'];
                        this.setFulfilmentId(fulfilmentId);

                        const updatedIpfsFulfilments = this.updateIpfsFulfilments(this.state.issuerAddress,this.state);
                        console.log(updatedIpfsFulfilments);
                        Ipfs.addDataToIpfs(updatedIpfsFulfilments).then(ipfsHash=>{
                            this.setLatestFulfilmentHash(bountyId,fulfilmentId,ipfsHash);
                        });
                    }
                }))
                .on("error", error => {
                    this.setNotificationMessage(notify.failed);
                });
        });
    };

    componentDidMount() {
        const bountyId = Number.parseInt(this.props.match.params.bountyId);
        this.setBountyId(bountyId);

        this.getIpfsHashFromContract(bountyId).then((ipfsHash) => {
            this.fetchDataFromIpfs(ipfsHash, this.setBountyTitle);
        });

        this.getLatestFulfilmentHashFromContract().then((ipfsHash) => {
           if(ipfsHash.length !== 0){
                this.fetchDataFromIpfs(ipfsHash,this.setIpfsFulfilments);
           }else {
               console.log('no ipfs hash yet')
           }
        });

        this.attachStepEvents();
    }

    render(){
        return (
            <div className={'section post-resume-form-section solid-light-grey-bg'}>
                <div className="inner">
                    <div className="container">
                        <BountyFulfilmentForm
                            fulfillerAddress={this.state.fulfilment.fulfilmentData.fulfillerAddress}
                            firstName={this.state.fulfilment.fulfilmentData.firstName}
                            lastName={this.state.fulfilment.fulfilmentData.lastName}
                            email={this.state.fulfilment.fulfilmentData.email}
                            fulfilmentUrl={this.state.fulfilment.fulfilmentUrl}
                            updateFulfilment={this.updateFulfilment}
                            submitFulfilment={this.submitFulfilment}
                            notificationMessage={this.notificationMessage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

BountyFulfilment.contextTypes = {
    drizzle: PropTypes.object
};
export default BountyFulfilment