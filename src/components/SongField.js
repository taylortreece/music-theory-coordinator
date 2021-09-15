import React from 'react' 
import { connect } from 'react-redux'
import Chord from './Chord'
import { removeChord } from '../actions/song'


class SongField extends React.Component {
    onHandleClick = (chord) => {
        this.props.removeChord(chord)
    }

    // changePosition = (num, action) => {
    //     if (num > 0) {
    //         action === "plus" ? num += 1 : num -= 1
    //     }
    // }

    render() {
        return (
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
                    {this.props.chords.map(chord => (
                        <Chord 
                            key={chord.name + chord.id} 
                            chord={chord}
                            buttonAction="remove"
                            variant="outline-danger"
                            action={this.onHandleClick}
                        />
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