import React from 'react'
import CreateUser from './CreateUser'
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
                        {this.props.songs === [] ?
                        <h1>Hello</h1> :
                        <CreateUser />
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