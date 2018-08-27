import React from 'react';
import BountyListHeader from "./BountyListHeader";
import BountyListStatistics from "./BountyListStatistics";
import BountyListJobs from "./BountyListJobs";
import BountyListAdvert from "./BountyListAdvert";

class BountyList extends React.Component {

    render(){
        return(
            <div>
                <BountyListHeader title={'Bounties'} summary={'Showing all bounties'}/>
                <div className="section jobs-listing-section">
                    <div className="container-fluid">
                        <div className="jobs-listing-wrapper flex no-wrap">
                            <BountyListStatistics/>
                            <BountyListJobs/>
                            <BountyListAdvert/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BountyList;