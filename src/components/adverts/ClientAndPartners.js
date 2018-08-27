import React from 'react';
import PropTypes from 'prop-types';

const ClientAndPartners = (props) => (

    <div className="section clients-section solid-grey-bg">
        <div className="inner">
            <div className="container">
                <h1 className="section-title">Clients & Partners</h1>
                <div className="logo-grid">
                    <div className="logo-grid-row flex space-between">
                        <div className="logo-item flex">
                            <img src={"images/client-logo01.png"} alt="client-company-logo" className="img-responsive self-center"/>
                        </div> 
                        <div className="logo-item flex">
                            <img src={"images/client-logo02.png"} alt="client-company-logo" className="img-responsive self-center"/>
                        </div> 
                        <div className="logo-item flex">
                            <img src={"images/client-logo03.png"} alt="client-company-logo" className="img-responsive self-center"/>
                        </div> 
                        <div className="logo-item flex">
                            <img src={"images/client-logo04.png"} alt="client-company-logo" className="img-responsive self-center"/>
                        </div> 
                        <div className="logo-item flex">
                            <img src={"images/client-logo05.png"} alt="client-company-logo" className="img-responsive self-center"/>
                        </div> 
                        <div className="logo-item flex">
                            <img src={"images/client-logo06.png"} alt="client-company-logo" className="img-responsive self-center"/>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
);

export default ClientAndPartners;