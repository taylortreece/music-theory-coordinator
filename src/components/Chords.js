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
            let num;

            // chosing proper starting position for notes
            note.id > chord.notes[0].id ? num = 3 : num = 4

            // creating options for notes
            const noteNames = note.name.split('/')
            
            // selecting proper option based on key name. Standard is sharp if key is natural.
            // urlName is also created here. Edit if this necessary when creating audio libraries. 
            if (this.props.chosenKey.name[1] === ('♯') || this.props.chosenKey.name[1] === ('♭')) {
                name = noteNames.filter(name => (name[1] === this.props.chosenKey.name[1] || name.length === 1))[0] + num
                note.urlName = name.includes('♯') ? name.replace('♯', '#') : name.replace('♭', 'b')
            } else {
                note.urlName = noteNames[0] + num
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