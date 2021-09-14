import React from 'react'
import { connect } from 'react-redux'
import { getKey } from '../actions/keys'

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
            instrument: 'Piano',
            type: 'Major',
            name: 'C',
            scale: 'Ionian',
        };
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.getKey({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    render() {
        console.log(this.props.key)
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <Banner 
                                instrument={this.state.instrument}
                                style={{transform: "scaleX(-1)"}}
                            />
                            <Selector 
                                handleOnChange={this.handleOnChange}
                                options={['Piano', 'Guitar',  'Violin']}
                                name='instrument'
                                />
                        </Row>
                    </Col>
                    <Col xs={7} lg={7}>
                        <Row>
                            <Col>
                                <Selector 
                                    handleOnChange={this.handleOnChange}
                                    options={['Major', 'minor']}
                                    name="type" 
                                />
                            </Col>
                            <Col>
                                <Selector 
                                    handleOnChange={this.handleOnChange}
                                    options={["Keys 1", "Keys 2", "Keys 3"]}
                                    name="name" />
                            </Col>
                            <Col>
                                <Selector name="scale" 
                                    handleOnChange={this.handleOnChange}
                                    options={['Ionian', 'Dorian', 'Phrygian']}
                                    name="scale" 
                                />
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
                            <Banner 
                                instrument={this.state.instrument}
                            />
                            <h1>Your Songs:</h1>
                            <UserSongs />
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        key: state.key
    }
}

export default connect(mapStateToProps, { getKey })(SongWorkshop);