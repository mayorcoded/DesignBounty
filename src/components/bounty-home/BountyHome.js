import React from 'react';
import Hero from "../adverts/Hero";
import LatestBounties from "../featured-bounties/LatestBounties";
import Teaser from "../adverts/Teaser";
import ClientAndPartners from "../adverts/ClientAndPartners";
import PropTypes from 'prop-types';



class BountyHome extends React.Component {

    constructor(props, context){
        super(props);
        this.contracts = context.drizzle.contracts;
    }

    render(){

        if(this.props.drizzleStatus.initialized) {

            return (
                <div>
                    <Hero/>
                    <LatestBounties account={this.props.accounts[0]}/>
                    <Teaser/>
                    <ClientAndPartners/>
                </div>
            );
        }
    }
}

BountyHome.contextTypes = {
    drizzle: PropTypes.object
};

export default BountyHome;