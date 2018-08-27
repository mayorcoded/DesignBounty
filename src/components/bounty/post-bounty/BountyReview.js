import React from 'react';

class BountyReview extends React.Component {

    showStage = (stage) => {
        const stages = {
            draft: (
                <li>
                    <a className="button button-sm facebook-btn">DRAFT</a>
                </li>
            ),
            active: (
                <li>
                    <a  className="button button-sm full-time">ACTIVE</a>
                </li>
            ),
            dead: (
                <li>
                    <a className="button button-sm g-plus-btn">DEAD</a>
                </li>
            )
        };

        return stages[stage];
    };

    render(){

        const issue = this.props.issue;
        const persona = this.props.persona;

        return (
            <fieldset>
                <h2 className="form-title text-center dark">Post a Bounty</h2>
                <h3 className="step-title text-center dark">Step 4: Review Bounty Details</h3>

                <ul className="steps-progress-bar flex space-between items-center no-column no-wrap list-unstyled">
                    <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                    <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                    <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                    <li className="sub-active"><span>4</span></li>
                </ul>


                <div className="form-inner">
                    <div className="job-post-wrapper">
                        <div className="job-post-top flex no-column no-wrap">
                            <div className="job-post-top-left">
                                <img src={"images/company-logo-big01.jpg"} alt="company-logo" className="img-responsive"/>
                            </div>

                            <div className="job-post-top-right">
                                <h4 className="dark">{issue.title}</h4>
                                <h5>{persona.company.name}</h5>
                                <div className="job-post-meta flex items-center no-column no-wrap">
                                    <div className="bookmarked-job-meta flex items-center no-wrap no-column">
                                        <h6 className="bookmarked-job-category">DESIGN</h6>{' '}
                                        <h6 className="candidate-location">Deadline: {(new Date(issue.deadline)).toString().split('GMT')[0]}</h6>{' '}
                                        <h6 className="hourly-rate">Amount: {(issue.payoutType.token)?'DBT ':'WEI '}{''}{issue.amount}</h6>{' '}
                                    </div>
                                    <h6 className="full-time">{issue.category}</h6>
                                </div>
                            </div>
                        </div>


                        <div className="divider"> </div>

                        <div className="job-post-bottom">
                            <h4 className="dark">Description</h4>
                            <p>
                                {issue.description}
                            </p>
                            <div className="divider"> </div>

                            <div className="job-post-share flex space-between items-center no-wrap">
                                <div className="job-post-share-left flex items-center no-wrap">
                                    <h6>Bounty Stage:</h6>

                                    <ul className="social-share flex no-wrap no-column list-unstyled">
                                        {this.showStage(issue.stage)}
                                    </ul>
                                </div>
                            </div>
                            <br/>
                        </div>

                    </div>

                    <div className="divider"> </div>

                    <div className="button-wrapper text-center">
                        <button type="button" className="button previous">Back</button> {' '}
                        <button type="button" className="button next" onClick={() => this.props.submitBounty()}>Submit</button>
                    </div>

                </div>

            </fieldset>
        );
    }
}

export default BountyReview;