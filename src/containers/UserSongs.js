import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchSongs } from '../actions/song'
import { connect } from 'react-redux'
import UserSong from '../components/UserSong'
import { selectSong } from '../actions/song'
import { deleteSong } from '../actions/song'
import '../css/SongList.css'


class UserSongs extends React.Component {

    componentDidMount() {
        this.props.fetchSongs()
    }

    handleOnClick = (song) => {
        this.props.selectSong(song)
    }

    handleOnDeleteClick = (song) => {
        this.props.deleteSong(song)
    }

    render() {
        return (
            <Container>
                <Row className='songList'>
                    <Col>
                        {
                        this.props.songs.length > 0 ?
                        this.props.songs.map(song => (
                            <UserSong 
                            song={song}
                            handleOnClick={this.handleOnClick}
                            handleOnDeleteClick={this.handleOnDeleteClick} 
                            key={song.id}
                        />
                        )) :
                        <h1>You have no songs</h1>
                    }
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songReducer.songs
    }
}

export default connect(mapStateToProps, { fetchSongs, selectSong, deleteSong })(UserSongs);