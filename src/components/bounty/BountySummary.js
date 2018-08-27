import React from 'react';
import PropTypes from 'prop-types';

class BountySummary extends React.Component {

    render(){
        const bounty = this.props.bounty;
        return (

            <a href={`/bounties/list/${this.props.bountyId}`}>
                <div className="table-row">
                    <div className="table-cells flex no-wrap">
                        <div className="cell job-title-cell flex no-column no-wrap">
                            <div className="cell-mobile-label">
                                <h6>Company name</h6>
                            </div>
                            <img src={"images/company-logo01.jpg"} alt="company-logo" className="img-responsive"/>
                                <div className="content">
                                    <h4>{bounty.issue.title}</h4>
                                    <p className="small">{bounty.persona.company.name}</p>
                                </div>
                        </div>
                        <div className="cell job-type-cell flex no-column">
                            <div className="cell-mobile-label">
                                <h6>Stage</h6>
                            </div>
                            <button disabled={true} type="button" className="button full-time">{bounty.issue.stage}</button>
                        </div>
                        <div className="cell location-cell flex no-column no-wrap">
                            <div className="cell-mobile-label">
                                <h6>Issuer Address</h6>
                            </div>
                            <p>{bounty.issue.issuer}</p>
                        </div>
                        <div className="cell expired-date-cell flex no-column no-wrap">
                            <div className="cell-mobile-label">
                                <h6>Deadline</h6>
                            </div>
                            <p>{bounty.issue.deadline}</p>
                        </div>
                        <div className="cell salary-cell flex no-column no-wrap">
                            <div className="cell-mobile-label">
                                <h6>Amount</h6>
                            </div>
                            <p>{bounty.issue.amount}<span>{' '}{(bounty.issue.payoutType.token)?'DBT':'WEI'}</span></p>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export default BountySummary;