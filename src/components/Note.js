import { connect } from 'react-redux'
import React from 'react'

class Note extends React.Component {
    constructor() {
        super();
        this.state = {
            position: 4,
            url: '.mp3'
        }
    }

    parseNoteName = (note) => {
        const noteNames = note.name.split('/')
        if (this.props.chosenKey.name[1] === ('♯') || this.props.chosenKey.name[1] === ('♭')) {
            return noteNames.filter(name => (name[1] === this.props.chosenKey.name[1] || name.length === 1))[0]
        } else {
            return noteNames[0]
        }
    }

    componentDidMount() {
        this.setState({
            url: `${this.parseNoteName(this.props.note)} + ${this.state.position}.mp3`
        })
    }

    render() {
        return (
            <div>
                <p>{this.parseNoteName(this.props.note)}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chosenKey: state.keyReducer.chosenKey
    }
}

export default connect(mapStateToProps)(Note);