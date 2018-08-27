import React, { Component } from 'react'

class Bounties extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Bounties
