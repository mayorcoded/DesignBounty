import React from 'react';

const Header = (props) => (
    <header>
        <div className="container clearfix">
            <div className="header-inner flex space-between items-center">
                <div className="left">
                    <div className="logo">
                        <a href={"/"} ><img src={"images/new-logo.png"} alt={"Dounty"} className="img-responsive"/></a>
                    </div>
                </div>

                <div className="right flex space-between no-column items-center">
                    <div className="navigation">
                        <nav className="main-nav">
                            <ul className="list-unstyled">
                                <li className="active"><a href={"/"}>Home</a></li>
                                <li><a href={"/bounties/list"}>Bounties</a></li>
                            </ul>
                        </nav>
                        <a href={"#"} className="responsive-menu-open"><i className="ion-navicon"> </i></a>
                    </div>

                    <div className="button-group-merged flex no-column">
                        <a href={"/post-bounty"} className="button">POST A BOUNTY</a>
                        <a href={"/dashboard"} className="button"  >DASHBOARD</a>
                    </div>

                </div>
            </div>
        </div>
    </header>
);

export default Header;