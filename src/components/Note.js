import React from 'react'

class Note extends React.Component {
    constructor() {
        super();
        this.state = {
            position: 4
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