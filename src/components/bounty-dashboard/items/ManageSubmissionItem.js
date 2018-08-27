import React from 'react';

class ManageSubmissionItem extends React.Component {

    acceptFulfilment = () => {
        console.log('Accepted');
        this.props.updateFulfilmentStatus(this.props.fulfilmentId, 'Accepted');
    };

    rejectFulfilment = () => {
        console.log('Rejected');
        this.props.updateFulfilmentStatus(this.props.fulfilmentId, 'Rejected');
    };

    setFulfilmentStatus = () => {
        const status = this.props.fulfilment.status;
        const action = {
            Accepted: 'Accepted',
            Rejected: 'Rejected',
            Pending: 'Pending',
            "": (
                <div>
                    <i onMouseDown={this.acceptFulfilment} className="ion-ios-checkmark-empty approve-icon"> </i>
                    <i onMouseDown={this.rejectFulfilment} className="ion-ios-close-empty trash-icon"> </i>
                </div>
            )
        };

        return action[status];
    };

    render(){
        const fulfilment = this.props.fulfilment.fulfilment;

        return(
            <div className="candidate-applications-wrapper">

                <div className="candidate-application flex no-wrap no-column items-center list-unstyled">
                    <div className="candidate-name-cell candidate-cell flex items-center no-column no-wrap">
                        <div className="cell-mobile-label">
                            <h6>Name</h6>
                        </div>

                        <div className="candidate-cell-inner flex items-center no-column no-wrap">
                            <div className="candidate-img">
                                <img src={"images/company-logo06.jpg"} alt="candidate-image" className="img-responsive"/>
                            </div>

                            <div className="cell-text no-column">
                                <h4>{fulfilment.fulfilmentData.firstName}{' '}{fulfilment.fulfilmentData.lastName}</h4>
                                <p>{fulfilment.fulfilmentData.fulfillerAddress}</p>
                            </div>
                        </div>
                    </div>


                    <div className="candidate-job-cell candidate-cell flex no-column no-wrap">
                        <div className="cell-mobile-label">
                            <h6>Job</h6>
                        </div>

                        <div className="candidate-cell-inner flex no-column no-wrap">
                            <p>{fulfilment.fulfilmentData.bountyTitle}</p>
                        </div>
                    </div>


                    <div className="candidate-resume-cell candidate-cell flex no-column no-wrap">
                        <div className="cell-mobile-label">
                            <h6>Resume</h6>
                        </div>

                        <div className="candidate-cell-inner flex no-column no-wrap">
                            <p>{fulfilment.fulfilmentUrl}</p>
                        </div>
                    </div>


                    <div
                        className="candidate-actions-cell candidate-cell flex items-center no-wrap no-column no-wrap">
                        <div className="cell-mobile-label">
                            <h6>Actions</h6>
                        </div>

                        <div className="candidate-cell-inner flex no-column no-wrap">
                            {this.setFulfilmentStatus()}
                        </div>
                    </div>
                </div>

                <div className="divider"> </div>
            </div>
        );
    }
}

export default ManageSubmissionItem;