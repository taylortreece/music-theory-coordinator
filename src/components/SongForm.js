import React from 'react'
import { saveSong } from '../actions/song'
import { connect } from 'react-redux'
import '../css/SongForm.css'

class SongForm extends React.Component {
    constructor() {
        super();
        this.state = {
            songName: '',
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        this.props.saveSong({song: {
            key: this.props.chosenKey.name,
            key_type: this.props.chosenKey.key_type,
            scale: this.props.scale,
            chord_ids: this.props.chords.map(chord => (chord.id)),
            name: this.state.songName || this.props.chosenSong.name
            },
            id: this.props.chosenSong.id
        })

        this.setState({
            songName: ''
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form className='song-form' onSubmit={this.handleOnSubmit}>
                <label className='song-label'>Song Name:</label>
                <input 
                    className='song-input'
                    onChange={this.handleOnChange} 
                    type='text' 
                    name="songName"
                    placeholder={this.props.chosenSong.name} 
                />
                <input type='submit' />
            </form>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        chords: state.songReducer.chords,
        scale: state.keyReducer.chosenScale,
        chosenKey: state.keyReducer.chosenKey,
        chosenSong: state.songReducer.chosenSong
    }
}
export default connect(mapStateToProps, { saveSong })(SongForm)