import React from 'react';

const BountyListHeader = (props) => (

    <div className="section breadcrumb-bar solid-blue-bg">
        <div className="inner">
            <div className="container-fluid">
                <p className="breadcrumb-menu">
                    <a href="/"><i className="ion-ios-home"> </i></a>
                    <i className="ion-ios-arrow-right arrow-right"> </i>
                    <a>{props.title}</a>
                </p>
                <h2 className="breadcrumb-title">{props.summary}</h2>
            </div>
        </div>
    </div>

);

export default BountyListHeader;