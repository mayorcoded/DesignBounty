import React, { Component } from 'react'
import BountyPayoutType from "./BountyPayoutType";
import BountyIssuerDetails from "./BountyIssuerDetails";
import BountyPostDetails from "./BountyPostDetails";
import BountyReview from "./BountyReview";
import BountyIssueConfirmation from "./BountyIssueConfirmation";
import PropTypes from 'prop-types';
import Ipfs from '../../../util/ipfs';
import notify from '../../../util/notification';
import $ from 'jquery';


class PostBounty extends Component {

    constructor (props,context ){
        super(props);
        this.contracts = context.drizzle.contracts;
        this.web3 = context.drizzle.web3;
        this.setPayoutType = this.setPayoutType.bind(this);
        this.updatePersona = this.updatePersona.bind(this);
        this.updateIssue = this.updateIssue.bind(this);
        this.submitBounty = this.submitBounty.bind(this);
        this.fetchBountiesFromIpfs = this.fetchBountiesFromIpfs.bind(this);
    }

    ipfsBounties = {

    };

    notificationMessage = notify.processing;

    state = {
        persona:{
            firstName: '',
            lastName: '',
            email: '',
            address: this.props.accounts[0],
            username: '',
            company: {
                name: '',
                address: this.props.accounts[0],
                phone: '',
                email: '',
                logo: '',
                website: '',
                description:''
            }
        },
        issue: {
            title: '',
            description: '',
            image:'',
            category:'',
            date: Date.now(),
            issuer: this.props.accounts[0],
            deadline: (new Date(Date.now())).toISOString().replace('Z',''),
            data: '',
            fulfillmentAmount: 0,
            arbiter: this.props.accounts[0],
            amount:1,
            payoutType: {
                ether: false,
                token: false
            },
            tokenContract: 0x0,
            stage: '',
            bountyId:''
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

    fetchBountiesFromIpfs = (ipfsHash) => {
        const ipfsUrl = `https://gateway.ipfs.io/ipfs/${ipfsHash}`;
        fetch(ipfsUrl)
            .then(res => res.json())
            .then((result)=>{
                this.ipfsBounties = result;
                console.log(this.ipfsBounties);
            }, (error) => {
                console.log(error);
            });
    };

    getBounty = () => {
        return this.state;
    };

    getLatestIpfsHashFromContract = async () => {
       const latestIpfsHash = await this.contracts.StandardBounties
           .methods
           .latestIpfsHash()
           .call({from: this.props.accounts[0]});

       return latestIpfsHash;
    };

    setBountyId = (bountyId) => {
        const issue = {...this.state.issue};

        issue.bountyId = bountyId;
        this.setState({issue:issue});
    };

    setBountyData = (bountyData) => {
        const issue = {...this.state.issue};

        issue.data = bountyData;
        this.setState({issue:issue});
    };

    setLatestIpfsHash = (ipfsHash,bountyId) => {
        this.contracts.StandardBounties
            .methods
            .setLatestIpfsHash(ipfsHash, bountyId)
            .send({from: this.props.accounts[0]})
            .on('receipt', function (receipt) {
                console.log(receipt);
        });
        this.setNotificationMessage(notify.success);
    };

    setPayoutType = (type) => {
        const issue = {...this.state.issue};

        //first set both to false
        issue.payoutType.ether = false;
        issue.payoutType.token = false;
        this.setState({
            issue: issue
        });

        //update only the required payout
        issue.payoutType[type] = true;

        this.setState({
            issue: issue
        });
    };


    setNotificationMessage = (message) => {
        this.notificationMessage = message;
    };


    submitBounty = () => {

        const issuer = this.state.issue.issuer;
        const deadline = Date.parse(this.state.issue.deadline);
        const fulfillmentAmount = this.state.issue.amount;
        const arbiter = this.state.issue.arbiter;
        const paysTokens = this.state.issue.payoutType['token'];
        const tokenContract = this.state.issue.tokenContract;
        const value = fulfillmentAmount;

        const updateIpfsBounties = this.updateIpfsBounties;
        const setLatestIpfsHash = this.setLatestIpfsHash;
        const setNotificationMessage = this.setNotificationMessage;
        const setBountyId = this.setBountyId;
        const getBounty = this.getBounty;

        if(this.state.issue.stage === 'draft') {
            Ipfs.addDataToIpfs(this.state).then((ipfsHash) => {
                const data = ipfsHash;
                this.setBountyData(data);

                this.contracts.StandardBounties.methods.issueBounty(
                    issuer,
                    deadline,
                    data,
                    fulfillmentAmount,
                    arbiter,
                    paysTokens,
                    '0x6c6e7f617dbe93bc4c6b3f1dce674c21023c04d3')
                    .send({from: this.props.accounts[0]})
                    .on('receipt', function (receipt) {
                        setNotificationMessage(notify.finalizing);
                        console.log(receipt);
                        if(receipt.status){
                            const bountyId = receipt.events.BountyIssued.returnValues.bountyId;
                            setBountyId(bountyId);

                            const updatedIpfsBounties = updateIpfsBounties(issuer,getBounty());
                            console.log(updatedIpfsBounties);

                            Ipfs.addDataToIpfs(updatedIpfsBounties).then(ipfsHash => {
                                setLatestIpfsHash(ipfsHash, bountyId);
                            })
                        }
                    })
                    .on('error', function () {
                        setNotificationMessage(notify.failed);
                    });
            });

        }else if(this.state.issue.stage === 'active'){

            Ipfs.addDataToIpfs(this.state).then((ipfsHash) => {
                const data = ipfsHash;
                this.setBountyData(data);

                this.contracts.StandardBounties.methods.issueAndActivateBounty(
                    issuer,
                    deadline,
                    data,
                    fulfillmentAmount,
                    arbiter,
                    paysTokens,
                    '0x6c6e7f617dbe93bc4c6b3f1dce674c21023c04d3',
                    value)
                    .send({from: this.props.accounts[0], value: value})
                    .on('receipt', function (receipt) {
                        setNotificationMessage(notify.finalizing);
                        console.log(receipt);
                        if(receipt.status){
                            const bountyId = receipt.events.BountyIssued.returnValues.bountyId;
                            setBountyId(bountyId);

                            const updatedIpfsBounties = updateIpfsBounties(issuer,getBounty());
                            console.log(updatedIpfsBounties);

                            Ipfs.addDataToIpfs(updatedIpfsBounties).then(ipfsHash => {
                                setLatestIpfsHash(ipfsHash, bountyId);
                            })
                        }
                    })
                    .on('error', function () {
                        setNotificationMessage(notify.failed);
                    });
            });
        }
    };

    updatePersona = (updatedPersona) => {
        this.setState({
           persona: updatedPersona
        });
    };

    updateIssue = (updatedIssue) => {
        this.setState({
            issue: updatedIssue
        });
    };

    updateIpfsBounties = (issuerAddress, bounty) => {
        console.log(this.ipfsBounties);
        if(this.ipfsBounties[issuerAddress]){
            this.ipfsBounties[issuerAddress].push(bounty);
        }else {
            this.ipfsBounties[issuerAddress] = [];
            this.ipfsBounties[issuerAddress].push(bounty);
        }

        console.log(this.ipfsBounties);
        return this.ipfsBounties;
    };

    componentDidMount() {
        this.getLatestIpfsHashFromContract().then((ipfsHash)=>{
            if(ipfsHash.length !== 0){
                this.fetchBountiesFromIpfs(ipfsHash);
            }else {
                console.log('no hash yet');
            }
        });
        this.attachStepEvents();
    }

    render(){
        if(this.props.drizzleStatus.initialized) {

            return (
                <div className="section job-post-form-section solid-light-grey-bg">
                    <div className="inner">
                        <div className="container">
                            <form action="#" method="post" id="job-post-form" className="job-post-form multisteps-form">
                                <BountyPayoutType setPayoutType={this.setPayoutType} payoutType={this.state.issue.payoutType}/>
                                <BountyIssuerDetails updatePersona={this.updatePersona} persona={this.state.persona}/>
                                <BountyPostDetails updateIssue={this.updateIssue}  issue={this.state.issue}/>
                                <BountyReview persona={this.state.persona} issue={this.state.issue} submitBounty={this.submitBounty}/>
                                <BountyIssueConfirmation notificationMessage={this.notificationMessage}/>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

PostBounty.contextTypes = {
    drizzle: PropTypes.object
};

export default PostBounty;