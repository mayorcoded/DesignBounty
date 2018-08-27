import React from 'react';
import BountyTable from "../bounty/BountyTable";


class LatestBounties extends React.Component{

    render(){
        return (
            <div className="section featured-jobs-section">
                <div className="inner">
                    <div className="container">
                        <div className="section-top-content flex items-center">
                            <h1>Latest Bounties</h1>
                            <a href={"/bounties/list"}>View all bounties<i className="ion-ios-arrow-thin-right"> </i></a>
                        </div>
                        <BountyTable account={this.props.account}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default LatestBounties;