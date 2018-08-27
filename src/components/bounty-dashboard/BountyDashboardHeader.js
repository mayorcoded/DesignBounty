import React from 'react';

class BountyDashboardHeader extends React.Component{

    render(){
        const profile = this.props.profile;

        if(profile.company){
            return (
                <div className="section breadcrumb-bar solid-blue-bg">
                    <div className="inner">
                        <div className="container">
                            <div className="breadcrumb-menu flex items-center no-column">
                                <img src={"images/company-logo-big01.jpg"} alt="company-logo" className="img-responsive"/>
                                <div className="breadcrumb-info-dashboard">
                                    <h2>{profile.company.name}</h2>
                                    <h4>{profile.company.address}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default BountyDashboardHeader;