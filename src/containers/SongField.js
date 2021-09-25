import React from 'react' 
import { connect } from 'react-redux'
import Chord from '../components/Chord'
import { v4 as uuidv4 } from 'uuid'
import { removeChord } from '../actions/song'
import SongForm from '../components/SongForm'

class SongField extends React.Component {
    onHandleClick = (chord) => {
        this.props.removeChord(chord)
    }

    render() {
        return (
            <div><br />
            { this.props.chords.length > 0 ? 
            <SongForm chords={this.props.chords} handleOnSubmit={this.handleOnSubmit} />
            : null }
                <div className="songField"
                style={{
                backgroundColor: 'white',
                marginTop: '5%',
                border: 'solid',
                width: '100%',
                height: "auto",
                minHeight: '300px',
                overflow: "auto",
                content: "",
                display:"block"
                }}>
                    {this.props.chords.map((chord, idx) => (
                        <Chord 
                            key={uuidv4()} 
                            chord={{...chord}}
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