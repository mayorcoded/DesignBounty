import React from 'react';

class BountyPostDetails extends React.Component {

    handleIssueChange = (event) => {
        const updatedIssue = {
            ...this.props.issue,
            [event.currentTarget.name]: event.currentTarget.value
        };

        this.props.updateIssue(updatedIssue);
    };

    render(){
        const issue = this.props.issue;

        return (
            <fieldset>
                <h2 className="form-title text-center dark">Post a Bounty</h2>
                <h3 className="step-title text-center dark">Step 3: Bounty Details</h3>

                <ul className="steps-progress-bar flex space-between items-center no-column no-wrap list-unstyled">
                    <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                    <li className="active"><span><i className="ion-ios-checkmark-empty"></i></span></li>
                    <li className="sub-active"><span>3</span></li>
                    <li><span>4</span></li>
                </ul>


                <div className="form-inner">

                    <div className="form-fields-wrapper">
                        <h4 className="form-fields-title dark">Bounty Details</h4>
                        <div className="form-group-wrapper">
                            <div className="form-group">
                                <p className="label">Bounty title</p>
                                <input type="text"
                                       id="job-title"
                                       name="title"
                                       placeholder=""
                                       required=""
                                       value={issue.title}
                                       onChange={this.handleIssueChange}
                                />
                            </div>
                        </div>

                        <div className="form-group-wrapper flex space-between items-center">
                            <div className="form-group">
                                <p className="label">Stage</p>
                                <select name={'stage'}
                                        className="form-control"
                                        id="job-type-filter"
                                        value={issue.stage}
                                        onChange={this.handleIssueChange}
                                >
                                    <option value="" disabled=""> </option>
                                    <option value="active">Active</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <p className="label">Category</p>
                                <select name={'category'}
                                        className="form-control"
                                        id="job-category-filter"
                                        value={issue.category}
                                        onChange={this.handleIssueChange}
                                >
                                    <option value="" disabled=""> </option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advance">Advanced</option>
                                </select>
                            </div>
                        </div>


                        <div className="form-group-wrapper">
                            <div className="form-group">
                                <p className="label">description</p>
                                <textarea
                                    name="description"
                                    id="job-desc"
                                    required=""
                                    rows="6"
                                    placeholder=""
                                    value={issue.description}
                                    onChange={this.handleIssueChange}
                                />
                            </div>

                        </div>


                        <div className="form-group-wrapper flex space-between items-center">
                            <div className="form-group">
                                <p className="label">Deadline</p>
                                <input type="datetime-local"
                                       min={(new Date(Date.now())).toISOString().replace('Z','')}
                                       id="job-location"
                                       name="deadline"
                                       placeholder=""
                                       required=""
                                       value={issue.deadline}
                                       onChange={this.handleIssueChange}
                                />
                            </div>

                            <div className="form-group">
                                <p className="label">Fulfilment Amount</p>
                                <input type="number"
                                       min={1}
                                       id="job-salary"
                                       name="amount"
                                       placeholder=""
                                       required=""
                                       value={issue.amount}
                                       onChange={this.handleIssueChange}
                                />
                            </div>
                        </div>

                        <div className="form-group-wrapper">

                            <div className="form-group">
                                <p className="label">Arbiter Address</p>
                                <input type="text"
                                       id="employer-company-address"
                                       name="arbiter"
                                       placeholder=""
                                       required=""
                                       value={issue.arbiter}
                                       onChange={this.handleDetailsChange}
                                       readOnly={true}
                                />
                            </div>

                            <div className="form-group upload-company-logo">
                                <p className="label">SAMPLE IMAGE (Maximum file size: 5MB)<span style={{color:'blue'}}>A sample image will help designers have a better idea of your bounty description </span></p>

                                <label htmlFor="company-logo-upload"
                                       className="flex space-between items-center no-column no-wrap">
                                    <span>Upload an image</span>
                                    <span><i className="ion-ios-folder-outline"> </i>Browse image</span>
                                </label>
                                <input type="file"
                                       name="company-logo-upload"
                                       id="company-logo-upload"
                                       value={issue.image}
                                       onChange={this.handleIssueChange}
                                />
                            </div>

                        </div>

                    </div>

                    <div className="divider"> </div>

                    <div className="button-wrapper text-center">
                        <button type="button" className="button previous">Back</button> {' '}
                        <button type="button" className="button next">Go to step 4</button>
                    </div>

                </div>

            </fieldset>
        );
    }
}

export default BountyPostDetails;