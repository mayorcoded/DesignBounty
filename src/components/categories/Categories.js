import React from 'react';
import PropTypes from 'prop-types';

const Categories = (props) => (
    
    <div className="section category-section solid-blue-bg">
        <div className="inner">
            <div className="container">
                <h1 className="light">Browse Categories</h1>
                <div className="category-grid">
                    <div className="category-row flex no-wrap space-between items-center">
                        <div className="item">
                            <img src={"images/category-icon01.png"} alt="category-icon" className="img-responsive"/>
                                <h4>Finance</h4>
                                <p className="light">4286 Jobs</p>
                        </div> 
                        <div className="item">
                            <img src={"images/category-icon02.png"} alt="category-icon" className="img-responsive"/>
                                <h4>Construction</h4>
                                <p className="light">452 Jobs</p>
                        </div> 
                        <div className="item">
                            <img src={"images/category-icon03.png"} alt="category-icon" className="img-responsive"/>
                                <h4>Logistics</h4>
                                <p className="light">1867 Jobs</p>
                        </div> 
                        <div className="item">
                            <img src={"images/category-icon04.png"} alt="category-icon" className="img-responsive"/>
                                <h4>Art/Design</h4>
                                <p className="light">3094 jobs</p>
                        </div> 
                        <div className="item">
                            <img src={"images/category-icon05.png"} alt="category-icon" className="img-responsive"/>
                                <h4>Sales/Marketing</h4>
                                <p className="light">2955 jobs</p>
                        </div> 
                    </div>

                    <div className="category-row flex no-wrap space-between items-center">
                        <div className="item">
                            <img src={"images/category-icon06.png"} alt="category-icon" className="img-responsive"/>
                                <h4>Science</h4>
                                <p className="light">470 Jobs</p>
                        </div> 
                        <div className="item">
                            <img src={"images/category-icon07.png"} alt="category-icon" className="img-responsive"/>
                                <h4>Technologies</h4>
                                <p className="light">4536 Jobs</p>
                        </div> 
                        <div className="item">
                            <img src={"images/category-icon08.png"} alt="category-icon" className="img-responsive"/>
                                <h4>Healthcare</h4>
                                <p className="light">2619 Jobs</p>
                        </div> 
                        <div className="item">
                            <img src={"images/category-icon09.png"} alt="category-icon" className="img-responsive"/>
                                <h4>Education/Training</h4>
                                <p className="light">1132 jobs</p>
                        </div> 
                        <div className="item">
                            <img src={"images/category-icon10.png"} alt="category-icon" className="img-responsive"/>
                                <h4>Food Services</h4>
                                <p className="light">757 jobs</p>
                        </div> 
                    </div> 
                </div>	
            </div> 
        </div> 
        <div className="background-text">
            <h1>Categories</h1>
        </div> 
    </div> 

);

export default Categories;