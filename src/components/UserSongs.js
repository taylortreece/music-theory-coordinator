import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux'


class UserSongs extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {
                        this.props.songs === [] ?
                        <h1>Hello</h1> :
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
        songs: []
    }
}

export default connect(mapStateToProps)(UserSongs);