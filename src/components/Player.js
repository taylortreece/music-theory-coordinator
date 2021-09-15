import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import * as Tone from 'tone'

class Player extends React.Component {
    
    play = () => {
        // const synth = new Tone.Synth().toDestination();
        // const now = Tone.now()
        // // trigger the attack immediately
        // synth.triggerAttack([this.props.chords[0].updatesNotes[0].name], now)
        // // wait one second before triggering the release
        // synth.triggerRelease(now + 1)
    }

    render() {
        return (
            <Button onClick={this.play}>Play</Button>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        song: state.songReducer,
        chords: state.songReducer.chords
    }
}

export default connect(mapStateToProps)(Player);