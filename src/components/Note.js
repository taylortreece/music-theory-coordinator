import { connect } from 'react-redux'
import React from 'react'
import '../css/Note.css'

class Note extends React.Component {
    createNoteName = () => {
        let note = this.props.note
        let name;
        const noteNames = note.name.split('/')
        
        if (this.props.chosenKey.name[1] === ('♯') || this.props.chosenKey.name[1] === ('♭')) {
            name = noteNames.filter(name => (name[1] === this.props.chosenKey.name[1] || name.length === 1))[0]
        } else {
            name = noteNames[0]
        }

        return name

    }
    
    render() {
        return (
            <div>
                <h6 className='note'>{this.createNoteName(this.props.note)}</h6>
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