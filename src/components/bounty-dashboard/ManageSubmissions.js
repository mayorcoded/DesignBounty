import React from 'react';
import ManageSubmissionItem from "./items/ManageSubmissionItem";

class ManageSubmissions extends React.Component {

    updateFulfilmentStatus = (fulfilmentId, status) => {
        this.props.updateFulfilmentStatus(fulfilmentId,status);
    };

    render(){
        const fulfilments = this.props.fulfilments;

        return (
            <div id="manage-applications-employer" className="tab-pane fade in">
                <h3 className="tab-pane-title">Manage applications</h3>
                <div className="candidate-applications-list-wrapper" style={{height: `300px`, overflowY: `scroll`}}>

                    <ul className="candidate-applications-table-headings flex items-center no-column no-wrap list-unstyled">
                        <li className="candidate-name-cell candidate-cell"><h6>Fulfiler</h6></li>
                        <li className="candidate-job-cell candidate-cell"><h6>Bounty Title</h6></li>
                        <li className="candidate-resume-cell"><h6>Submission Link</h6></li>
                        <li className="candidate-actions-cell"><h6>Actions</h6></li>
                    </ul>
                    {
                        Object.keys(fulfilments).map(key=>
                            <ManageSubmissionItem key={key}
                                                  fulfilment={fulfilments[key]}
                                                  updateFulfilmentStatus={this.updateFulfilmentStatus}
                                                  fulfilmentId={fulfilments[key].fulfilmentId}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default ManageSubmissions;