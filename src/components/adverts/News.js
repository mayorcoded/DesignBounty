import React from 'react';
import PropTypes from 'prop-types';

const News = (props) => (

    <div className="section Latest-news-section">
        <div className="inner">
            <div className="container">
                <div className="section-top-content flex items-center">
                    <h1>Latest News</h1>
                    <a href={"blog-list.html"} >View all news<i className="ion-ios-arrow-thin-right"></i></a>
                </div>
                <div className="news-grid">
                    <div className="news-grid-row flex space-between">
                        <div className="news-item">
                            <img src={"images/news-grid01.jpg"} alt="news-thumbnail" className="img-responsive"/>
                                <div className="news-content">
                                    <div className="news-meta flex no-column">
                                        <h6><a href={"#0"} className="news-author">Nancy watson</a></h6>
                                        <h6 className="publish-date">20.02.2017</h6>
                                        <h6><a href={"#0"} className="comment-count">5 comments</a></h6>
                                    </div>
                                    <h3 className="news-title">Tips to write an impressive resume online for beginner</h3>
                                    <p className="news-excerpt">Morbi ac eros feugiat, lacinia elit ut, elementum turpis. Curabitur justo sapien tempus.</p>
                                    <a href={"blog-single-fullwidth-image.html"} className="button">Read More</a>
                                </div>
                        </div>

                    </div>  
                </div> 
            </div> 
        </div> 
    </div> 
);

export default News;