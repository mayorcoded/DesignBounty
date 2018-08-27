import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
    
    <div className="section footer transparent" style={{backgroundImage: `url('images/background03.jpg')`}}>
        <div className="container">
            <div className="footer-widgets flex no-column space-between">

            </div>

            <div className="bottom flex space-between items-center">
                <p className="copyright-text small">&copy; 2018 <a href="#">DOUNTY</a>. All Rights Reserved. Built by <a href={"#0"}>Mayowa Tudonu</a>.</p>
                <ul className="list-unstyled copyright-menu flex no-column">
                    <li><a href={"#0"}>Privacy policy</a></li>
                    <li><a href={"#0"}>Terms of service</a></li>
                    <li><a href={"#0"}>Conditions</a></li>
                </ul> 
            </div>

        </div> 
    </div> 
);

export default Footer;