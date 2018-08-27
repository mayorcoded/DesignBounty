import React from 'react';
import {ContractData} from 'drizzle-react-components';

const BountyListStatistics = (props) => (

    <div className="left-side">
        <div className="statistics-widget-wrapper jobs-widget">
            <h6>Overall statistics</h6>
            <div className="statistics-widget flex no-column no-wrap">
                <div className="left-side-inner">
                    <h2 className="dark">
                        <ContractData contract="StandardBounties" method="getNumBounties"/>
                    </h2>
                    <h5>Bounties Created</h5>
                </div>
            </div>

            <div className="statistics-widget flex no-column no-wrap">
                <div className="left-side-inner">
                    <h2 className="dark">
                        <ContractData contract="StandardBounties" method="totalFulfilments"/>
                    </h2>
                    <h5>Designs Submitted</h5>
                </div>
            </div>
        </div>
    </div>

);

export default BountyListStatistics;