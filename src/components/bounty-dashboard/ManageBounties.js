import React from 'react';
import ManageBountyItem from "./items/ManageBountyItem";

class ManageBounties extends React.Component{
    render(){
        const bounties = this.props.bounties;
        return (
            <div id="manage-jobs" className="tab-pane fade in">
                <h3 className="tab-pane-title">Manage Bounties</h3>
                <div className="posted-jobs-list-wrapper" style={{height: `300px`, overflowY: `scroll`}}>
                    <ul className="posted-jobs-table-headings flex items-center no-column list-unstyled">
                        <li className="posted-job-title-cell"><h6>Name</h6></li>
                        <li className="posted-job-type-cell"><h6 style={{marginLeft:`-40px`}}>Bounty Stage</h6></li>
                        <li className="posted-job-candidates-cell"><h6 style={{marginLeft:`-30px`}}>Submissions</h6></li>
                        <li className="posted-job-featured-cell"><h6 style={{marginLeft:`-40px`}}>Deadline</h6></li>
                    </ul>
                    {
                        Object.keys(bounties).map(key => <ManageBountyItem key={key} bounty={bounties[key]}/>)
                    }
                </div>
            </div>
        );
    }
}

export default ManageBounties;