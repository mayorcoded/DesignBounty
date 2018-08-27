import React from 'react';
import PropTypes from 'prop-types';

const Teaser = (props) => (
    <div className="section cta-section parallax text-center" style={{backgroundImage: `url('images/background02.jpg')`}}>
        <div className="inner">
            <div className="container">
                <h2>Looking for design bounties</h2>
                <p className="large light">Join thousands of bounty hunters and earn from your designs</p>
                <div className="cta-button">
                    <a href={"post-resume-form.html"} className="button">Get started now</a>
                </div>
            </div>
        </div>
    </div>
);

export default Teaser;