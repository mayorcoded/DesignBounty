import React from 'react';

const notify = {
    processing: (
        <div>
            <h2 className="text-center job-post-success" style={{color:`steelblue`}}>Processing...</h2>
            <p className="text-center">Hang in there, while we process your bounty information! ;).
                Kindly confirm your transaction on Metamask wallet when required.</p>
        </div>
    ),
    finalizing: (
        <div>
            <h2 className="text-center job-post-success" style={{color:`darkseagreen`}}>Finalizing...</h2>
            <p className="text-center">Your bounty is almost ready, just one final confirmation with your Metamask wallet.</p>
        </div>
    ),
    success: (
        <div>
            <h2 className="text-center job-post-success" style={{color:`darkgreen`}}>Congratulations!</h2>
            <p className="text-center">You’ve successfully posted a new bounty. Let’s see who you’re gonna hire.
                Whenever you want to edit your bounty, please go to your <a href={"/dashboard"}>Dashboard</a>> <a href={"/dashboard"}>Manage
                    Bounties</a>. Thank you for using our job board!</p>
        </div>
    ),
    fulfilmentSubmitted: (
        <div>
            <h2 className="text-center job-post-success" style={{color:`darkgreen`}}>Congratulations!</h2>
            <p className="text-center">You’ve successfully submitted your design. Hopefully, the bounty issuer loves our design. ;)
                Thank you for using our platform!
            </p>
            <div className="button-wrapper text-center">
                <button type="button" className="button">Browse Issues</button>
            </div>
        </div>
    ),
    failed: (
        <div>
            <h2 className="text-center job-post-success" style={{color:`red`}}>Transaction Failed!</h2>
            <p className="text-center">You transaction could not be completed</p>
        </div>
    )
};

export default notify;