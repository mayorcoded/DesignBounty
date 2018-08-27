import React from 'react';

class BountyInfo extends React.Component{

    setStage = (stage) => {
        const stages = {
            active: (
                <li>
                    <a className="button button-sm full-time">ACTIVE</a>
                </li>
            ),
            dead: (
                <li>
                    <a className="button button-sm g-plus-btn">DEAD</a>
                </li>
            ),
            draft: (
                <li>
                    <a className="button button-sm facebook-btn">DRAFT</a>
                </li>
            )
        };

        return stages[stage];
    };

    render(){
        const bounty = this.props.bounty;

        return (
            <div className="right-side-wrapper">
                <div className="right-side-top">
                    <h6><span><i className="ion-ios-arrow-left"></i></span>Back to <a
                        href={'/bounties/list'}>BOUNTIES</a></h6>
                    <div className="right-side-top-inner flex no-wrap">

                        <div className="job-post-wrapper">
                            <div className="job-post-top flex no-column no-wrap">
                                <div className="job-post-top-left">
                                    <img src={"images/company-logo-big01.jpg"} alt="company-logo" className="img-responsive"/>
                                </div>

                                <div className="job-post-top-right">
                                    <h4 className="dark">{bounty.issue.title}</h4>
                                    <h5>{bounty.persona.company.name}</h5>
                                    <div className="job-post-meta flex items-center no-column no-wrap">
                                        <div
                                            className="bookmarked-job-meta flex items-center no-wrap no-column">
                                            <h6 className="bookmarked-job-category">Design</h6>
                                            <h6 className="candidate-location">{bounty.issue.deadline}</h6>
                                            <h6 className="hourly-rate">
                                                {bounty.issue.amount}{' '}{(bounty.issue.payoutType.token)?'DBT':'WEI'}
                                            </h6>
                                        </div>
                                        <h6 className="full-time">{bounty.issue.category}</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="divider"> </div>

                            <div className="job-post-bottom">
                                <h4 className="dark">Job Description</h4>
                                <p>{bounty.issue.description}</p>

                                <br/>
                                <div className="divider"> </div>
                                <br/>

                                <div className="job-post-share flex space-between items-center no-wrap">
                                    <div className="job-post-share-left flex items-center no-wrap">
                                        <h6>Bounty Stage:</h6>

                                        <ul className="social-share flex no-wrap no-column list-unstyled">
                                            {this.setStage(bounty.issue.stage)}
                                        </ul>

                                    </div>

                                </div>
                            </div>


                        </div>


                        <div className="right-side-inner">
                            <div className="image-item">
                                <img src="images/company02.jpg" alt="company-office-images" className="img-responsive"/>
                            </div>
                            <div className="job-post-company-info">
                                <h5 className="dark">SAMPLE IMAGE</h5>
                            </div>


                            <div className="apply-for-job">
                                <p className="divider-text text-center"><span>Design Bounty </span>
                                </p>
                                <div className="apply-btn-group flex space-center items-center no-column no-wrap">

                                    {/*<a href={'/post-bounty'}>
                                        <button type="button" className="button linkedln-btn">Edit Bounty</button>
                                    </a>*/}
                                </div>

                            </div>

                            <div className="system-login text-center">
                                <h6>Completed this bounty?</h6>
                                <a href={`/fulfil/bounty/${this.props.bountyId}`}>
                                    <button type="submit" className="button">Submit Your Design</button>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default BountyInfo;