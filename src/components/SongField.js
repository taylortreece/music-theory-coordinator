import React from 'react' 
import { connect } from 'react-redux'
import Chord from './Chord'
import { removeChord } from '../actions/song'

import { v4 as uuidv4 } from 'uuid'

class SongField extends React.Component {
    render() {
        return (
            <div className="songField"
                style={{
                border: 'solid',
                width: '100%',
                height: '200px',
                overflow: "auto",
                content: "",
                display:"block"
                }}>
                    {this.props.chords.map(chord => (
                        <Chord key={chord.name + chord.id} id={uuidv4()}chord={chord} />
                    ))}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        chords: state.songReducer.chords
    }
}

export default connect(mapStateToProps, { removeChord })(SongField);