import React from 'react';

const BountyDashboardSidebar = (props) => (
    <div className="left-sidebar-menu">
        <ul className="nav nav-pills nav-stacked">
            <li className="heading">Manage account</li>
            <li className={'active'}><a data-toggle="pill" href={"#profile"}>My Profile</a></li>
            <li className="nav-divider"></li>
            <li className="heading">Manage Activities</li>
            <li><a data-toggle="pill" href="#manage-jobs">Manage Bounties</a></li>
            <li><a data-toggle="pill" href="#manage-applications-employer">Manage Submissions</a></li>
        </ul>
    </div>
);

export default BountyDashboardSidebar;