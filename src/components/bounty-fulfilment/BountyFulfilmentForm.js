import React from 'react';

class BountyFulfilmentForm extends React.Component {

    handleChange = (event) => {
        this.props.updateFulfilment(event.currentTarget.name, event.currentTarget.value)
    };

    render(){
        return (
            <form action="#" method="post" id="post-resume-form" className="post-resume-form multisteps-form">
                <fieldset>
                    <h2 className="form-title text-center dark">Submit Fulfilment</h2>
                    <h3 className="step-title text-center dark">Step 1: General Information</h3>

                    <ul className="steps-progress-bar flex space-between items-center no-column no-wrap list-unstyled">
                        <li><span>1</span></li>
                        <li><span> </span></li>
                        <li><span>2</span></li>
                    </ul>

                    <div className="form-inner">

                        <div className="form-fields-wrapper">
                            <h4 className="form-fields-title dark">Fulfilment info</h4>
                            <div className="form-group-wrapper flex space-between items-center">
                                <div className="form-group">
                                    <p className="label">First name</p>
                                    <input type="text"
                                           id="candidate-first-name"
                                           name="firstName"
                                           value={this.props.firstName}
                                           onChange={this.handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <p className="label">Last name</p>
                                    <input type="text"
                                           id="candidate-last-name"
                                           name="lastName"
                                           value={this.props.lastName}
                                           onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group-wrapper flex space-between items-center">
                                <div className="form-group">
                                    <p className="label">Email</p>
                                    <input type="email"
                                           id="candidate-email"
                                           name="email"
                                           value={this.props.email}
                                           onChange={this.handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <p className="label">Address<sup>*</sup></p>
                                    <input type="text"
                                           id="candidate-address"
                                           name="address"
                                           value={this.props.fulfillerAddress}
                                           readOnly={true}
                                    />
                                </div>
                            </div>

                            <div className="form-group-wrapper flex space-between items-center">
                                <div className="form-group">
                                    <p className="label">Your design url</p>
                                    <input type="email"
                                           id="candidate-email"
                                           name="fulfilmentUrl"
                                           value={this.props.fulfilmentUrl}
                                           onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="divider"> </div>

                        <div className="button-wrapper text-center">
                            <button type="button" className="button next">Go to step 2</button>
                        </div>

                    </div>

                </fieldset>


                <fieldset>
                    <h2 className="form-title text-center dark">Submit Fulfilment</h2>
                    <h3 className="step-title text-center dark">Step 2: Review Fulfilment</h3>

                    <ul className="steps-progress-bar flex space-between items-center no-column no-wrap list-unstyled">
                        <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                        <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                        <li className="active"><span>2</span></li>
                    </ul>


                    <div className="form-inner">
                        <div className="profile-badge"><h6>Fulfilment Details</h6></div>
                        <div className="profile-wrapper">

                            <div className="profile-info profile-section flex no-column no-wrap">
                                <div className="profile-picture">
                                    <img src="images/candidate-big01.jpg" alt="candidate-picture"
                                         className="img-responsive"/>
                                </div>

                                <div className="profile-meta">
                                    <h4 className="dark">{this.props.firstName}{' '}{this.props.lastName}</h4>
                                    <div className="profile-contact flex items-center no-wrap no-column">
                                        <h6 className="contact-phone">{this.props.fulfillerAddress}</h6>
                                        <h6 className="contact-email">{this.props.email}</h6>
                                    </div>

                                </div>

                            </div>


                            <div className="divider"></div>

                            <div className="profile-about profile-section">
                                <h3 className="dark profile-title">Details<span><i className="ion-edit"></i></span>
                                </h3>
                                <p>{this.props.fulfilmentUrl}</p>
                            </div>

                        </div>


                        <div className="divider"></div>

                        <div className="button-wrapper text-center">
                            <button type="button" className="button previous">Back</button>{' '}
                            <button type="button" className="button next" onClick={this.props.submitFulfilment}>Submit</button>
                        </div>

                    </div>

                </fieldset>

                <fieldset>
                    <h2 className="form-title text-center dark">Post resume</h2>
                    <h3 className="step-title text-center dark">You've successfully posted your resume</h3>

                    <ul className="steps-progress-bar flex space-between items-center no-column no-wrap list-unstyled">
                        <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                        <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                        <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                    </ul>


                    <div className="form-inner">
                        {this.props.notificationMessage}
                    </div>

                </fieldset>
            </form>
        );
    }
}

export default BountyFulfilmentForm;