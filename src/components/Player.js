import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import * as Tone from 'tone'

class Player extends React.Component {
    
    play = () => {
        let notes = [
            {position: 4, url: 'A4.mp3', name: 'A', urlName: 'A4', id: 10},
            {position: 4, url: 'C4.mp3', name: 'C', urlName: 'C4', id: 1},
            {position: 4, url: 'E4.mp3', name: 'E', urlName: 'E4', id: 5}
        ]

        const sampler = new Tone.Sampler({
            urls: {
                'A4': 'A4.mp3',
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination();
        
        Tone.loaded().then(() => {
            sampler.triggerAttackRelease(["B4", "C5", "E3"], 4);
        })
        
        // const synth = new Tone.Synth().toDestination();

        // const now = Tone.now()
        // synth.triggerAttackRelease(notes[0]['urlName'], "8n", now)
        // synth.triggerAttackRelease(notes[1]['urlName'], "8n", now + 0.5)
        // synth.triggerAttackRelease(notes[2]['urlName'], "8n", now + 1)
    }

    render() {
        console.log(this.props.chords)
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