import React, { Component } from 'react';

class MyNewComponent extends Component {
    render() {
        return(
            <div>
                {this.props.someText}
                We are in MyNewComponent!
            </div>
        )
    }
}

export default MyNewComponent;