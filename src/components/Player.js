import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import * as Tone from 'tone'

class Player extends React.Component {
    
    play = () => {


        const sampler = new Tone.Sampler({
            urls: {
                "C4": "C4.mp3",
                "D#4": "Ds4.mp3",
                "F#4": "Fs4.mp3",
                "A4": "A4.mp3",
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination();
        
        Tone.loaded().then(() => {
            sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
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
        song: state.songReducer
    }
}

export default connect(mapStateToProps)(Player);