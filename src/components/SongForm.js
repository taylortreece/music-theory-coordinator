import React from 'react'
import { saveSong } from '../actions/song'
import { connect } from 'react-redux'

class SongForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            songName: '',
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.saveSong({
            key: this.props.chosenKey.name,
            keyType: this.props.chosenKey.key_type,
            scale: this.props.scale.name,
            chords: this.props.chords.map(chord => (chord.id)),
            songName: this.state.songName
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.songName)
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>Song Name:</label>
                <input onChange={this.handleOnChange} type='text' name="songName" value={this.state.songName} placeholder='song name...' />
                <input type='submit' />
            </form>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        chords: state.songReducer.chords,
        scale: state.keyReducer.chosenScale,
        chosenKey: state.keyReducer.chosenKey
    }
}
export default connect(mapStateToProps, { saveSong })(SongForm)