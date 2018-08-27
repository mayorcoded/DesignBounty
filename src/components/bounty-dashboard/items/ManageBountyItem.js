import React from 'react';

class ManageBountyItem extends React.Component{
    render(){
        const bounty = this.props.bounty;
        return (
            <div className="posted-jobs-wrapper">
                <div className="posted-job flex no-wrap no-column items-center list-unstyled active">
                    <div className="posted-job-title-cell posted-job-cell flex items-center no-column no-wrap">
                        <div className="posted-job-cell-inner">
                            <div className="cell-text">
                                <h4>{bounty.issue.title}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="posted-job-type-cell posted-job-cell flex no-column no-wrap">
                        <div className="posted-job-cell-inner flex no-column no-wrap">
                            <button type="button" className="button button-sm freelancer">{bounty.issue.stage}</button>
                        </div>
                    </div>

                    <div className="posted-job-candidates-cell posted-job-cell flex no-column no-wrap">

                        <ul className="list-unstyled posted-job-cell-inner candidates-avatar flex items-center no-wrap no-column">
                            <li className="candidates-total-count">
                                <img src="images/avatar04.jpg" alt="avatar" className="img-responsive"/><span>54+</span>
                            </li>
                        </ul>
                    </div>

                    <div className="posted-job-featured-cell posted-job-cell flex no-column no-wrap">
                        <div className="posted-job-cell-inner flex no-wrap no-column">
                            {bounty.issue.deadline}
                        </div>
                    </div>

                    <div className="posted-job-edit-cell posted-job-cell flex items-center no-wrap no-column no-wrap active">
                        <i className="ion-ios-compose-outline edit-icon"> </i>
                        <i className="ion-ios-trash-outline trash-icon"> </i>
                        <i className="ion-ios-more-outline options-icon"> </i>
                    </div>
                </div>
                <div className="divider"> </div>
            </div>
        );
    }
}

export default ManageBountyItem;