import React, { Component } from 'react';

class BountyPayoutType extends Component{


    handlePayoutChange = (type) => {
        this.props.setPayoutType(type);
    };

    render(){
        return (
            <fieldset>
                <h2 className="form-title text-center dark">Post a Design Bounty</h2>
                <h3 className="step-title text-center dark">Step 1: Choose your Payout Type</h3>

                <ul className="steps-progress-bar flex space-between items-center no-column no-wrap list-unstyled">
                    <li><span>1</span></li>
                    <li><span>2</span></li>
                    <li><span>3</span></li>
                    <li><span>4</span></li>
                </ul>

                <div className="form-inner">
                    <div className="pricing-plan-field-wrapper">

                        <div className="pricing-plan-field flex no-column no-wrap checkbox">
                            <h6 className="pricing-plan-tag highlighted">ETHER</h6>
                            <div className="right-side">
                                <input onClick={()=>{this.handlePayoutChange('ether')}} checked={this.props.payoutType.ether} id="pricing-plan-checkbox1" type="checkbox"/>
                                    <label htmlFor="pricing-plan-checkbox1">Pay With Ether</label>
                                    <p>Selecting this option to pay out the fulfillment of your bounty in Ether.</p>
                            </div>
                        </div>

                        <div className="divider"> </div>

                        <div className="pricing-plan-field flex no-column no-wrap checkbox">
                            <h6 className="pricing-plan-tag highlighted">ERC-20 TOKEN</h6>
                            <div className="right-side">
                                <input onClick={()=>{this.handlePayoutChange('token')}} checked={this.props.payoutType.token} id="pricing-plan-checkbox2" type="checkbox"/>
                                    <label htmlFor="pricing-plan-checkbox2">Pay with Token</label>
                                    <p>Selecting this option to pay out the fulfillment of your bounty in an ERC-20 custom Token.</p>
                                <br/>
                            </div>
                        </div>

                        <div className="divider"> </div>

                    </div>
                    <div className="button-wrapper text-center">
                        <button type="button" className="button next">Go to step 2</button>
                    </div>

                </div>
            </fieldset>
        );
    }
}

export default BountyPayoutType;