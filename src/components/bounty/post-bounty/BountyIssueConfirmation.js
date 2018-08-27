import React from 'react';

class BountyIssueConfirmation extends  React.Component {
    render(){
        return (
            <fieldset>
                <h2 className="form-title text-center dark">Post a Job</h2>
                <h3 className="step-title text-center dark">You've successfully posted a job</h3>

                <ul className="steps-progress-bar flex space-between items-center no-column no-wrap list-unstyled">
                    <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                    <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                    <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                    <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                </ul>

                <div className="form-inner">
                    {this.props.notificationMessage}
                </div>
            </fieldset>
        );
    }
}

export default BountyIssueConfirmation;