import React from 'react';
import BountyDashboardSidebar from "./BountyDashboardSidebar";
import BountyIssuerProfile from "./BountyIssuerProfile";
import BountyDashboardHeader from "./BountyDashboardHeader";
import ManageBounties from "./ManageBounties";
import ManageSubmissions from "./ManageSubmissions";
import PropTypes from 'prop-types';
import Ipfs from "../../util/ipfs";

class BountyDashboard extends React.Component{

    constructor(props, context){
        super(props);
        this.contracts = context.drizzle.contracts;
    }

    ipfsFulfilment = {

    };

    state = {
        bounties:{

        },
        profile: {

        },
        fulfilments: {

        }
    };


    fetchBountiesFromIpfs = (ipfsHash) => {
        let ipfsUrl = `https://gateway.ipfs.io/ipfs/${ipfsHash}`;
        const bountyDetails = {};

        if(ipfsHash.length !== 0) {
            fetch(ipfsUrl)
                .then(res => res.json())
                .then((bounties) => {
                    if (bounties[this.props.accounts[0]]) {
                        const profile = bounties[this.props.accounts[0]][0].persona;
                        this.setProfile(profile);

                        bounties[this.props.accounts[0]].forEach((bounty) => {
                            bountyDetails[bounty.issue.bountyId] = bounty;
                        });
                    }

                    this.setBounties(bountyDetails);
                }, (error) => {
                    console.log(error);
                });
        }
    };

    fetchFulfilmentsFromIpfs = (ipfsHash) => {
        let ipfsUrl = `https://gateway.ipfs.io/ipfs/${ipfsHash}`;
        const fulfilmentDetails = {};

        if(ipfsHash.length !== 0) {
            fetch(ipfsUrl)
                .then(res => res.json())
                .then((fulfilments) => {
                    this.ipfsFulfilment = fulfilments;

                    if (fulfilments[this.props.accounts[0]]) {
                        fulfilments[this.props.accounts[0]].forEach((fulfilment) => {
                            fulfilmentDetails[fulfilment.fulfilmentId] = fulfilment;
                        });
                    }

                    this.setFulfilments(fulfilmentDetails);

                }, (error) => {
                    console.log(error);
                });
        }
    };

    getLatestFulfilmentHashFromContract = async () => {
        const ipfsHash = await this.contracts.StandardBounties.methods.latestFulfilmentHash().call({from: this.props.accounts[0]});
        return ipfsHash;
    };

    getLatestIpfsHashFromContract = async () => {
        const latestIpfsHash = await this.contracts.StandardBounties
            .methods
            .latestIpfsHash()
            .call({from: this.props.accounts[0]});

        return latestIpfsHash;
    };

    setProfile = (profile) => {
        this.setState({
            profile:profile
        });
    };

    setBounties = (newBounties) => {
        this.setState({
            bounties: newBounties
        });
    };


    setFulfilments = (fulfilments) => {
        this.setState({
            fulfilments: fulfilments
        });
    };

    acceptFulfilment = (fulfilmentId) => {
        let bountyId = this.state.fulfilments[fulfilmentId].bountyId;
        console.log(bountyId);
        this.contracts.StandardBounties
            .methods
            .acceptFulfillment(bountyId, fulfilmentId)
            .send({from: this.props.accounts[0]})
            .on("receipt", receipt => {
                console.log(receipt);
            }).on("error", error => {
                console.log(error);
            });
    };

    updateFulfilmentStatusInIpfs = (fulfilmentId, status) => {
        this.ipfsFulfilment[this.props.accounts[0]].map((fulfilment) => {
            if(fulfilment.fulfilmentId === fulfilmentId){
                fulfilment.status = status;
            }
        });


        let bountyId = this.state.fulfilments[fulfilmentId].bountyId;
        Ipfs.addDataToIpfs(this.ipfsFulfilment).then(ipfsHash => {
            console.log(ipfsHash);
            this.contracts.StandardBounties
                .methods
                .setLatestFulfilmentHash(bountyId, fulfilmentId, ipfsHash)
                .send({from: this.props.accounts[0]})
                .on("receipt", receipt => {
                    console.log(receipt)
                })

        });
    };

    updateFulfilmentStatusInState = (fulfilmentId, status) => {
        const fulfilments = {...this.state.fulfilments};
        fulfilments[fulfilmentId].status = status;
        this.setState({
            fulfilments: fulfilments
        });

        console.log(this.state.fulfilments);
    };

    updateFulfilmentStatus = (fulfilmentId, status) => {
        console.log(status);
        if(status === 'Accepted'){
            this.updateFulfilmentStatusInState(fulfilmentId, 'Pending');
            this.acceptFulfilment(fulfilmentId);
            this.updateFulfilmentStatusInIpfs(fulfilmentId, status);
            this.updateFulfilmentStatusInState(fulfilmentId, status);
        }else {
            this.updateFulfilmentStatusInState(fulfilmentId, 'Pending');
            this.updateFulfilmentStatusInIpfs(fulfilmentId, status);
            this.updateFulfilmentStatusInState(fulfilmentId, status);
        }
        /*this.acceptFulfilment(fulfilmentId);
        this.updateFulfilmentStatusInState(fulfilmentId, status);*/

    };

    componentDidMount(){
        this.getLatestIpfsHashFromContract().then((ipfsHash) => {
            console.log(ipfsHash);
            this.fetchBountiesFromIpfs(ipfsHash);
        });

        this.getLatestFulfilmentHashFromContract().then((ipfsHash) => {
            this.fetchFulfilmentsFromIpfs(ipfsHash);
        });
    }

    render(){

        return (
            <div>
                <BountyDashboardHeader profile={this.state.profile}/>
                <div className="section employer-dashboard-content solid-light-grey-bg">
                    <div className="inner">
                        <div className="container">
                            <div className="employer-dashboard-wrapper flex space-between no-wrap">

                                <BountyDashboardSidebar/>

                                <div className="right-side-content">
                                    <div className="tab-content employer-dashboard">
                                        <BountyIssuerProfile profile={this.state.profile}/>
                                        <ManageBounties bounties={this.state.bounties}/>
                                        <ManageSubmissions
                                            fulfilments={this.state.fulfilments}
                                            updateFulfilmentStatus={this.updateFulfilmentStatus}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

BountyDashboard.contextTypes = {
    drizzle: PropTypes.object
};
export default BountyDashboard;