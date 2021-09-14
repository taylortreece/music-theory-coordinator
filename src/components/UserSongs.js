import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class UserSongs extends React.Component {
    constructor() {
        super();
        this.state = {
            list: ['Hello, World', 'Love Potion #9', 'Mombo #5']
        };
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {this.state.list.map(song => (<h3 style={{
                            lineHeight: '2em'
                        }}>{song}</h3>))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserSongs;