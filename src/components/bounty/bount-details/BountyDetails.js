import React from 'react';
import BountyListHeader from "../bounty-list/BountyListHeader";
import BountyDetailsStatistics from "./BountyDetailsStatistics";
import PropTypes from 'prop-types';
import BountyInfo from "./BountyInfo";



class BountyDetails extends React.Component{

    constructor(props, context){
        super(props);
        this.contracts = context.drizzle.contracts;
    }

    state = {
        bounty: {

        }
    };

    fetchBountyFromIpfs = (ipfsHash) => {
        const ipfsUrl = `https://gateway.ipfs.io/ipfs/${ipfsHash}`;
        fetch(ipfsUrl)
            .then(res => res.json())
            .then((bounty)=>{
                this.setBounty(bounty);
            }, (error) => {
                console.log(error);
            });
    };

    getIpfsHashFromContract = async (bountyId) => {
        const ipfsHash = await this.contracts.StandardBounties.methods.getBountyData(bountyId).call({from: this.props.accounts[0]});
        return ipfsHash;
    };

    setBounty = (bounty) => {
        this.setState({
            bounty:bounty
        })
    };

    componentDidMount(){
        const bountyId = Number.parseInt(this.props.match.params.bountyId);
        if(Number.isInteger(bountyId)){
            this.getIpfsHashFromContract(bountyId).then((ipfsHash) => {
                this.fetchBountyFromIpfs(ipfsHash);
            });
        }else {
            console.log('is not integer');
        }
    }

    render(){
        if(this.state.bounty.issue) {
            return (
                <div>
                    <BountyListHeader title={'Bounty'} summary={this.state.bounty.issue.title}/>
                    <div className="section jobs-details-section">
                        <div className="container-fluid">
                            <div className="jobs-details-wrapper flex no-wrap">
                                <BountyDetailsStatistics/>
                                <BountyInfo bounty={this.state.bounty} bountyId={this.props.match.params.bountyId}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

BountyDetails.contextTypes = {
    drizzle: PropTypes.object
};

export default BountyDetails;