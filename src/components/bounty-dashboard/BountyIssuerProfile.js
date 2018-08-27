import React from 'react';

class BountyIssuerProfile extends React.Component {

    render() {
        const profile = this.props.profile;
        if(this.props.profile.company) {
            return (

                <div id="profile" className="tab-pane fade in active show">
                    <div className="profile-badge"><h6>Profile</h6></div>
                    <div className="profile-wrapper">

                        <div className="profile-info profile-section flex no-column no-wrap">
                            <div className="profile-picture">
                                <img src={"images/company-logo-jumbo01.jpg"} alt="company-logo"
                                     className="img-responsive"/>
                            </div>

                            <div className="profile-meta">
                                <h4 className="dark">{profile.company.name}</h4>
                                <div className="profile-contact flex items-center no-wrap no-column">
                                    <h6 className="contact-phone">{profile.company.address}</h6>
                                    <h6 className="contact-email">{profile.company.email}</h6>
                                </div>
                            </div>

                        </div>

                        <div className="divider"></div>

                        <div className="profile-about profile-section">
                            <h3 className="dark profile-title">About company</h3>
                            <p>{profile.company.description}</p>
                        </div>

                    </div>
                </div>
            );
        }
        return null;
    }
}


export default BountyIssuerProfile;