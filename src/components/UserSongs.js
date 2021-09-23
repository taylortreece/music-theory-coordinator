import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchSongs } from '../actions/song'
import { connect } from 'react-redux'
import UserSong from './UserSong'


class UserSongs extends React.Component {

    componentDidMount() {
        this.props.fetchSongs()
    }

    handleOnClick = (song) => {
        console.log(song.name)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {
                        this.props.songs.length > 0 ?
                        this.props.songs.map(song => (
                            <UserSong 
                            song={song}
                            handleOnClick={this.handleOnClick} />
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

export default connect(mapStateToProps, { fetchSongs })(UserSongs);