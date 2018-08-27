import React from 'react';
import PropTypes from 'prop-types';

const BountyTableHeader = (props) => (

    <div className="table-header">
        <div className="table-cells flex">
            <div className="job-title-cell"><h6>Job title / Company name</h6></div>
            <div className="job-type-cell"><h6>Stage</h6></div>
            <div className="location-cell"><h6>Issuer Address</h6></div>
            <div className="expired-date-cell"><h6>Deadline</h6></div>
            <div className="salary-cell"><h6>Amount</h6></div>
        </div>
    </div>
);

export default BountyTableHeader;