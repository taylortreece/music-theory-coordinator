import React from 'react'
import Banner from '../components/Banner'
import Selector from '../components/Selector'
import UserSongs from '../components/UserSongs'
import SongField from '../components/SongField'
import Chords from '../components/Chords'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SongWorkshop extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'C',
            type: 'Major',
            scale: 'Ionian',
            instrument: 'Piano'
        };
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(
            event.target.name,
            
        )
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <Banner instrument={this.state.instrument} />
                            <Selector 
                                handleOnChange={this.handleOnChange}
                                options={['Piano', 'Guitar',  'Violin']}
                                />
                        </Row>
                    </Col>
                    <Col xs={7} lg={7}>
                        <Row>
                            <Col>
                                <Selector style={{marginLeft: "auto", marginRight: "auto", display: 'block'}} options={['Major', 'minor']}/>
                            </Col>
                            <Col>
                                <Selector options={["Keys"]}/>
                            </Col>
                            <Col>
                                <Selector options={['Modes']}/>
                            </Col>
                        </Row>
                        <Row>
                            <Chords chords={['C Major', 'd minor', 'e minor', 'F Major', 'G Major', 'a minor', 'b diminished']}/>
                        </Row>
                        <Row>
                            <SongField />
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Banner instrument={this.state.instrument}/>
                            <h1>Your Songs:</h1>
                            <UserSongs />
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default SongWorkshop;