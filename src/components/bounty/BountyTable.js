import React from 'react';
import BountyTableHeader from './BountyTableHeader';
import BountySummary from "./BountySummary";
import BountyTableFooter from "./BountyTableFooter";
import PropTypes from 'prop-types';

class BountyTable extends React.Component{

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

        fetch(ipfsUrl)
            .then(res => res.json())
            .then((bounties)=>{

                for(let address in bounties){
                    bounties[address].forEach((bounty)=> {
                        bountyDetails[bounty.issue.bountyId] = bounty;
                    });

                }

                this.setBounties(bountyDetails);

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

    render(){
        const bounties = this.state.bounties;
        let show = 1;
        return (
            <div className="jobs-table">
                <BountyTableHeader/>
                {
                    Object.keys(bounties).map(key => {if(show === 6)return; show++;  return <BountySummary key={key} bounty={bounties[key]} bountyId={key}/> })
                }
                <BountyTableFooter/>
            </div>
        );
    }
}

BountyTable.contextTypes = {
    drizzle: PropTypes.object
};
export default BountyTable;