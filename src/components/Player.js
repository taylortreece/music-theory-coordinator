import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import * as Tone from 'tone'
import '../css/SongField.css'

class Player extends React.Component {

    startSong = () => {
        let counter = 0
        this.props.chords.forEach(chord => {
            let notes = chord.notes.map(note => (note.urlName))
            this.play(notes, counter)

            // change bpm: change counter+= in startSong
            counter += 1000
        })
    }
    
    play = (notes, counter) => {
        setTimeout(() => {
            const sampler = new Tone.Sampler({
            urls: {
                "C4": "C4.mp3",
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination()

        Tone.loaded().then(() => {
            sampler.triggerAttack(notes, Tone.now())

            // change length of release: change + 1 in triggerRelease
            sampler.triggerRelease(notes, Tone.now() + 1);
        })
        }, counter)
    }

    render() {
        return (
            <Button 
                className="playButton" 
                onMouseUp={this.startSong} 
                onTouchStart={this.startSong}
                onTouchEnd={this.startSong}
            >
                Play
            </Button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        song: state.songReducer,
        chords: state.songReducer.chords
    }
}

export default connect(mapStateToProps)(Player);