import React from 'react' 
import { connect } from 'react-redux'
import Chord from '../components/Chord'
import { v4 as uuidv4 } from 'uuid'
import { removeChord } from '../actions/song'
import '../css/SongField.css'

class SongField extends React.Component {
    onHandleClick = (chord) => {
        this.props.removeChord(chord)
    }

    render() {
        return (
            <div>
                <div className="songField" style={{minHeight:'300px'}}>
                    {this.props.chords.map((chord,) => (
                        <Chord 
                            key={uuidv4()} 
                            chord={chord}
                            buttonAction="remove"
                            variant="outline-danger"
                            action={this.onHandleClick}
                        />
                    ))}
                </div>
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