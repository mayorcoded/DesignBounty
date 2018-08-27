import React from 'react';
import {ContractData} from 'drizzle-react-components';
import BountyListJobSummary from "./BountyListJobSummary";
import PropTypes from 'prop-types';

class BountyListJobs extends React.Component {

    constructor(props, context){
        super(props);
        this.contracts = context.drizzle.contracts;
    }

    state = {
        bounties:{

        }
    };


    fetchBountiesFromIpfs = (ipfsHash) => {
        let ipfsUrl = `https://gateway.ipfs.io/ipfs/${ipfsHash}`;
        const bountyDetails = {};
        console.log(ipfsUrl);
        fetch(ipfsUrl)
            .then(res => res.json())
            .then((bounties)=>{

                for(let address in bounties){
                    bounties[address].forEach((bounty)=> {
                        bountyDetails[bounty.issue.bountyId] = bounty;
                    });

                }

                this.setBounties(bountyDetails);
                console.log(this.state.bounties);
            },(error) => {console.log(error);});
    };

    getLatestIpfsHashFromContract = async () => {
        const latestIpfsHash = await this.contracts.StandardBounties
            .methods
            .latestIpfsHash()
            .call({from: this.props.accounts});

        return latestIpfsHash;
    };

    setBounties = (newBounties) => {
        this.setState({
            bounties: newBounties
        });
    };


    componentDidMount(){
        this.getLatestIpfsHashFromContract().then((ipfsHash) => {
            if(ipfsHash.length !== 0){
                this.fetchBountiesFromIpfs(ipfsHash);
            }
        })
    }

    render() {
        const bounties = this.state.bounties;

        return (
            <div className="center-content-wrapper" style={{height: `800px`, overflowY: `scroll`}}>
                <div className="sort-by-wrapper on-listing-page flex space-between items-center no-wrap">
                    <div className="left-side-inner">
                        <h6>Showing <span><ContractData contract="StandardBounties" method="getNumBounties"/></span> design bounties</h6>
                    </div>
                </div>
                {
                    Object.keys(bounties).map(key => <BountyListJobSummary key={key} bounty={bounties[key]} bountyId={key}/>)
                }

            </div>
        );
    }
}

BountyListJobs.contextTypes = {
    drizzle: PropTypes.object
};

export default BountyListJobs;

