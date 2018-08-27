import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) =>(
    <div className="section hero-section transparent" style={{backgroundImage: `url('images/background01.jpg')`}}>
        <div className="inner">
            <div className="container">
                <div className="job-search-form">
                    <h2>Over<span>1000<sup>+</sup></span>design bounties are waiting for you</h2>
                    <form className="form-inline flex">
                        <div className="form-group">
                            <div className="form-group-inner">
                                <input type="text" className="form-control" id="input-field-1"
                                       placeholder="job title / Keywords / company name"/>
                                    <i className="ion-ios-briefcase-outline"></i>
                            </div>
                        </div>

                        <button type="submit" className="button"><i className="ion-ios-search-strong"></i></button>
                    </form>
                    <div className="keywords flex">
                        <h4 className="self-center">Popular Keywords:</h4>
                        <a href={"#0"} className="button item-center">Bounties</a>
                        <a href={"#0"} className="button item-center">Designs</a>
                        <a href={"#0"} className="button item-center">Payout</a>
                    </div>

                </div>

            </div>

            <div className="features-bar">
                <div className="container">
                    <div className="features-bar-inner flex space-between">
                        <div className="features-box self-center">
                            <h3>FIND DESIGN BOUNTIES</h3>
                        </div>

                        <div className="features-box-icon flex no-wrap">
                            <img src="images/feature-icon01.png" alt="cup-icon" className="img-responsive self-center"/>
                                <div className="content self-center">
                                    <h3>GET PAID FOR YOUR DESIGNS</h3>
                                </div>
                        </div>

                        <div className="features-box-icon flex no-wrap">
                            <img src="images/feature-icon02.png" alt="cup-icon" className="img-responsive self-center"/>
                                <div className="content self-center">
                                    <h3>2,500+ BOUNTY HUNTERS</h3>
                                </div>
                        </div>

                        <div className="user-profile-icon self-center">
                            <img src="images/profile-icon01.png" alt="profile-icon"
                                 className="img-responsive self-center"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default Hero;