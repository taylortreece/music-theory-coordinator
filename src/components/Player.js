import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import * as Tone from 'tone'

class Player extends React.Component {

    
    play = () => {
        this.props.chords.forEach(chord => {
            let notes = chord.notes.map(note => (note.urlName))
            let timer;

            setTimeout(() => {
                const sampler = new Tone.Sampler({
                    urls: {
                        "C4": "C4.mp3",
                    },
                    release: 1,
                    baseUrl: "https://tonejs.github.io/audio/salamander/",
                }).toDestination();
                
                Tone.loaded().then(() => {
                    sampler.triggerAttackRelease(notes, 4);
                })

                timer = 500
            }, timer)
        })
    }

    render() {
        return (
            <Button onClick={this.play}>Play</Button>
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