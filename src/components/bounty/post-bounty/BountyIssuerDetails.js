import React from 'react';

class BountyIssuerDetails extends React.Component {

    handleDetailsChange = (event) => {
        const updatedDetails = {
            ...this.props.persona,
        };

        if(event.currentTarget.name.indexOf('.') === -1){
            updatedDetails[event.currentTarget.name] = event.currentTarget.value;
        }else {
            const property = event.currentTarget.name.split('.')[1];
            updatedDetails['company'][property] = event.currentTarget.value;
        }

        this.props.updatePersona(updatedDetails);
    };

    render(){

        const persona = this.props.persona;

        return (
            <fieldset>
                <h2 className="form-title text-center dark">Post a Job</h2>
                <h3 className="step-title text-center dark">Step 2: Enter your details</h3>

                <ul className="steps-progress-bar flex space-between items-center no-column no-wrap list-unstyled">
                    <li className="active"><span><i className="ion-ios-checkmark-empty"> </i></span></li>
                    <li className="sub-active"><span>2</span></li>
                    <li><span>3</span></li>
                    <li><span>4</span></li>
                </ul>


                <div className="form-inner">
                    <div className="divider"> </div>
                    <div className="form-fields-wrapper">
                        <h4 className="form-fields-title dark">Issuer Details</h4>
                        <div className="form-group-wrapper flex space-between items-center">
                            <div className="form-group">
                                <p className="label">First Name</p>
                                <input type="text"
                                       id="employer-contact-name"
                                       name="firstName"
                                       required=""
                                       value={persona.firstName}
                                       onChange={this.handleDetailsChange}
                                />
                            </div>

                            <div className="form-group">
                                <p className="label">Last Name</p>
                                <input type="email"
                                       id="employer-contact-email"
                                       name="lastName"
                                       placeholder=""
                                       required=""
                                       value={persona.lastName}
                                       onChange={this.handleDetailsChange}
                                />
                            </div>

                        </div>

                        <div className="form-group-wrapper flex space-between items-center">
                            <div className="form-group">
                                <p className="label">Username<sup>*</sup></p>
                                <input type="text"
                                       id="employer-username"
                                       name="username"
                                       placeholder=""
                                       required=""
                                       value={persona.username}
                                       onChange={this.handleDetailsChange}
                                />
                            </div>

                            <div className="form-group">
                                <p className="label">Email<sup>*</sup></p>
                                <input type="email"
                                       id="employer-email"
                                       name="email"
                                       placeholder=""
                                       required=""
                                       value={persona.email}
                                       onChange={this.handleDetailsChange}
                                />
                            </div>

                            <div className="form-group">
                                <p className="label">Issuer Address</p>
                                <input type="text"
                                       id="employer-company-address"
                                       name="address"
                                       placeholder=""
                                       required=""
                                       value={persona.address}
                                       onChange={this.handleDetailsChange}
                                       readOnly={true}
                                />
                            </div>

                        </div>

                    </div>

                    <div className="divider"> </div>

                    <div className="form-fields-wrapper">
                        <h4 className="form-fields-title dark">Company Info</h4>
                        <div className="form-group-wrapper flex space-between items-center">
                            <div className="form-group">
                                <p className="label">Company name</p>
                                <input type="text"
                                       id="employer-company-name"
                                       name="company.name"
                                       placeholder=""
                                       required=""
                                       value={persona.company.name}
                                       onChange={this.handleDetailsChange}
                                />
                            </div>

                            <div className="form-group">
                                <p className="label">Address</p>
                                <input type="text"
                                       id="employer-company-address"
                                       name="company.address"
                                       placeholder=""
                                       required=""
                                       value={persona.company.address}
                                       onChange={this.handleDetailsChange}
                                       readOnly={true}
                                />
                            </div>
                        </div>

                        <div className="form-group-wrapper flex space-between items-center">
                            <div className="form-group">
                                <p className="label">Phone Number<sup>*</sup></p>
                                <input type="text"
                                       id="employer-company-number"
                                       name="company.phone"
                                       placeholder=""
                                       required=""
                                       value={persona.company.phone}
                                       onChange={this.handleDetailsChange}
                                />
                            </div>

                            <div className="form-group">
                                <p className="label">Email<sup>*</sup></p>
                                <input type="email"
                                       id="employer-company-email"
                                       name="company.email"
                                       placeholder=""
                                       required=""
                                       value={persona.company.email}
                                       onChange={this.handleDetailsChange}
                                />
                            </div>
                        </div>

                        <div className="form-group-wrapper">
                            <div className="form-group upload-company-logo">
                                <p className="label">Company logo<span>(Maximum file size: 5MB)</span></p>
                                <label htmlFor="company-logo-upload"
                                       className="flex space-between items-center no-column no-wrap">
                                    <span>Upload your logo</span>
                                    <span><i className="ion-ios-folder-outline"> </i>Browse image</span>
                                </label>
                                <input type="file"
                                       name="company-logo-upload"
                                       id="company.logo"
                                       value={persona.company.logo}
                                       onChange={this.handleDetailsChange}
                                />
                            </div>

                        </div>

                        <div className="form-group-wrapper">
                            <div className="form-group">
                                <p className="label">Website<span>(optional)</span></p>
                                <input type="text"
                                       id="employer-company-site"
                                       name="company.website"
                                       placeholder="" required=""
                                       value={persona.company.website}
                                       onChange={this.handleDetailsChange}
                                />
                            </div>

                        </div>

                        <div className="form-group-wrapper">
                            <div className="form-group">
                                <p className="label">Company description<span>(optional)</span></p>
                                <textarea name="company.description"
                                          id="employer-company-desc"
                                          required=""
                                          rows="6"
                                          placeholder=""
                                          value={persona.company.description}
                                          onChange={this.handleDetailsChange}
                                />
                            </div>

                        </div>

                    </div>


                    <div className="divider"> </div>

                    <div className="button-wrapper text-center">
                        <button type="button" className="button previous">Back</button> {' '}
                        <button type="button" className="button next">Go to step 3</button>
                    </div>

                </div>

            </fieldset>
        );
    }
}

export default BountyIssuerDetails;