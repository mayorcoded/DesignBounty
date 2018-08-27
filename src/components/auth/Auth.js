import React from 'react';
import PropTypes from 'prop-types';

class Auth extends React.Component{
    
    render(){
        return (
            
            <div className="modal fade bs-modal-sm" aria-hidden="true" aria-labelledby="myTabContent"  id="login-signup-popup" role="dialog" tabindex="-1">
                <div className="modal-dialog modal-sm login-signup-modal">
                    <div className="modal-content">
                        <div className="popup-tabs">
                            <ul className="nav nav-tabs" id="myTab">
                                <li className=""><a data-toggle="tab" href="#login">login</a></li>
                                <li className="active"><a data-toggle="tab" href="#register">Register</a></li>
                            </ul>
                        </div> 
                        <div className="modal-body">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade" id="login">
                                    <form className="login-form">

                                        <div className="form-group">
                                            <label for="InputEmail1">Your Email *</label>
                                            <input type="email" className="form-control" id="InputEmail1" placeholder="Enter your email"/>
                                        </div>

                                        <div className="form-group">
                                            <label for="InputPassword1">Password *</label>
                                            <input type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
                                        </div>

                                        <div className="checkbox flex space-between">
                                            <div>
                                                <input id="sigin-checkbox" type="checkbox"/>
                                                    <label for="sigin-checkbox">Remember me</label>
                                            </div>
                                            <a href="#0">Lost password?</a>
                                        </div> 

                                        <button type="button" className="button" data-dismiss="modal">Login</button>

                                        <p className="text-center divider-text small"><span>or login using</span></p>

                                        <div className="social-buttons">
                                            <ul className="list-unstyled flex space-between">
                                                <li className="twitter-btn"><a href="#0"><i className="ion-social-twitter"></i></a></li>
                                                <li className="fb-btn"><a href="#0"><i className="ion-social-facebook"></i></a></li>
                                                <li className="g-plus-btn"><a href="#0"><i className="ion-social-googleplus"></i></a></li>
                                            </ul>
                                        </div> 

                                    </form> 
                                </div> 

                                <div className="tab-pane fade active in" id="register">
                                    <form className="signup-form">
                                        <div className="form-group">
                                            <label for="InputEmail1">Your Email *</label>
                                            <input type="email" className="form-control" id="InputEmail2" placeholder="Enter your email"/>
                                        </div>

                                        <div className="form-group">
                                            <label for="InputPassword1">Password *</label>
                                            <input type="password" className="form-control" id="InputPassword2" placeholder="Password"/>
                                        </div>

                                        <div className="form-group">
                                            <label for="InputPassword2">Confirm Password *</label>
                                            <input type="password" className="form-control" id="InputPassword3" placeholder="Password"/>
                                        </div>

                                        <div className="form-group">
                                            <label for="select1">Register as:</label>
                                            <div className="select-wrapper">
                                                <select className="form-control" id="select1">
                                                    <option>Candidate</option>
                                                    <option>Company</option>
                                                </select>
                                            </div> 
                                        </div>

                                        <div className="checkbox">
                                            <input id="signup-checkbox" type="checkbox"/>
                                                <label for="signup-checkbox">I agree with the Terms of Use</label>
                                        </div>

                                        <button type="button" className="button" data-dismiss="modal">Sign Up</button>

                                        <p className="text-center divider-text small"><span>or login using</span></p>

                                        <div className="social-buttons">
                                            <ul className="list-unstyled flex space-between">
                                                <li className="twitter-btn"><a href="#0"><i className="ion-social-twitter"></i></a></li>
                                                <li className="fb-btn"><a href="#0"><i className="ion-social-facebook"></i></a></li>
                                                <li className="g-plus-btn"><a href="#0"><i className="ion-social-googleplus"></i></a></li>
                                            </ul>
                                        </div> 

                                    </form> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        );
    }
}

export default Auth;