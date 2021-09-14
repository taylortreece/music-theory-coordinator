import React from 'react'

class OtherResources extends React.Component {
    constructor() {
        super();
        this.state = {
            test: 'Hello, world. Check out these other resources for learning Music Theory.'
        };
    }

    render() {
        return (
            <div>
                {this.state.test}
            </div>
        )
    }
}

export default OtherResources;