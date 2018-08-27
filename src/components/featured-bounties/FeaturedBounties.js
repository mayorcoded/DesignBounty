import React from 'react';
import PropTypes from 'prop-types';
import BountyTable from "../bounty/BountyTable";


class FeaturedBounties extends React.Component{

    render(){
        return (

            <div className="section featured-jobs-section">
                <div className="inner">
                    <div className="container">
                        <div className="section-top-content flex items-center">
                            <h1>Featured Bounties</h1>
                            <a href={"#0"}>View all bounties<i className="ion-ios-arrow-thin-right"></i></a>
                        </div>

                        <BountyTable/>

                    </div>
                </div>
            </div>

        );
    }
}

export default FeaturedBounties;