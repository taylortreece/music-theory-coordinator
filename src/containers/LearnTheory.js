import React from 'react'

class LearnTheory extends React.Component {
    constructor() {
        super();
        this.state = {
            test: 'Hello, world. It is time to learn Music Theory.'
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

export default LearnTheory;