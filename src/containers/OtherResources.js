import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/LearnTheory.css'

class OtherResources extends React.Component {
    constructor() {
        super();
        this.state = {
            test: 'Hello, world. Check out these other resources for learning Music Theory.'
        };
    }

    render() {
        return (
        <Container>
            <Row>
                <Col>
                <p className="text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <div className='text'>
                    <a href="https://www.musictheory.net/">https://www.musictheory.net/</a><br /><br />
                    <a href="https://en.wikipedia.org/wiki/Music_theory">https://en.wikipedia.org/wiki/Music_theory</a><br /><br />
                    <a href="https://blog.landr.com/music-theory/">https://blog.landr.com/music-theory/</a><br /><br />
                    <a href="https://www.britannica.com/browse/Music-Theory">https://www.britannica.com/browse/Music-Theory</a><br /><br />
                    <a href="https://2012books.lardbucket.org/pdfs/music-theory.pdf">https://2012books.lardbucket.org/pdfs/music-theory.pdf</a><br /><br />
                </div>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default OtherResources;