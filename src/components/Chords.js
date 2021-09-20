import React from 'react'
import { connect } from 'react-redux'
import { addChord } from '../actions/song'
import Chord from './Chord'

class Chords extends React.Component {

    onHandleClick = (chord) => {
        this.props.addChord(chord)
    }

    createNoteName = (chord) => {
        chord.notes.forEach(note => {
            let name;

            const noteNames = note.name.split('/')

            if (this.props.chosenKey.name[1] === ('♯') || this.props.chosenKey.name[1] === ('♭')) {
                name = noteNames.filter(name => (name[1] === this.props.chosenKey.name[1] || name.length === 1))[0] + "4"
                note.urlName = name.replace('♯', 's')
            } else {
                note.urlName = noteNames[0] + "4"
            }
        })
    }

    render() {
        return (
            this.props.scale.chords.map(chord => { 
                this.createNoteName(chord)
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