import React from 'react'
import { connect } from 'react-redux'
import { addChord } from '../actions/song'
import Chord from '../components/Chord'

class Chords extends React.Component {

    onHandleClick = (chord) => {
        this.props.addChord(chord)
    }

    createUrlName = (chord) => {
        chord.notes.forEach(note => {
            let num;
            note.id > chord.notes[0].id ? num = 2 : num = 3
            const noteNames = note.name.split('/')
            note.urlName = noteNames[0].replace('♯', '#') + num
        })
    }

    render() {
        return (
            this.props.scale.chords.map(chord => { 
                this.createUrlName(chord)
                return <Chord 
                    className='chord' 
                    id={chord.id} 
                    key={chord.id} 
                    chord={chord}
                    buttonAction="add"
                    variant="outline-success"
                    action={this.onHandleClick}
                    />
               })
            )
        }
    }

    const mapStateToProps = state => {
        return {
            chosenKey: state.keyReducer.chosenKey
        }
    }
            
    export default connect(mapStateToProps, { addChord })(Chords);