import React from 'react';

const BountyListJobSummary = (props) => (

    <div className="bookmarked-jobs-list-wrapper on-listing-page">
        <div className="bookmarked-job-wrapper">
            <div className="bookmarked-job flex no-wrap no-column ">
                <div className="job-company-icon">
                    <img src={"images/company-logo-big01.jpg"} alt="company-icon" className="img-responsive"/>
                </div>

                <div className="bookmarked-job-info">
                    <h4 className="dark flex no-column">{props.bounty.issue.title}<a className="button full-time">{props.bounty.issue.stage}</a></h4>
                    <h5>{props.bounty.persona.company.name}</h5>
                    <p>{props.bounty.issue.description}</p>
                    <div className="bookmarked-job-info-bottom flex space-between items-center no-column no-wrap">
                        <div className="bookmarked-job-meta flex items-center no-wrap no-column">
                            <h6 className="bookmarked-job-category">Art/Design</h6>
                            <h6 className="candidate-location">{props.bounty.issue.issuer}</h6>
                            <h6 className="hourly-rate">{props.bounty.issue.amount} {' '} {(props.bounty.issue.payoutType.token)?'DBT':'WEI'}</h6>
                        </div>

                        <div className="right-side-bookmarked-job-meta flex items-center no-column no-wrap">

                            <a href={`/bounties/list/${props.bountyId}`} className="button">more details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default BountyListJobSummary;