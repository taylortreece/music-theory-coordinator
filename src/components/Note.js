import React from 'react'

class Note extends React.Component {
    constructor() {
        super();
        this.state = {
            position: 4,
            url: ''
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.note.name}</p>
            </div>
        )
    }
}

export default Note;