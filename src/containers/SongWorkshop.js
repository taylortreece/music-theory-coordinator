import React from 'react'
import { connect } from 'react-redux'
import { fetchKey } from '../actions/key'

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
            key: {
                scale: "Ionian",
                type: 'Major',
                name: "C",
            },
            instrument: 'Piano',
        };
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleKeyChange = (event) => {
        this.setState({ key: {
            ...this.state.key, 
            [event.target.name]: event.target.value
            }
        })
        console.log(this.state)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.key !== this.state.key) {
            this.props.fetchKey(this.state.key)
        }
    }

    render() {
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
                                    handleOnChange={this.handleKeyChange}
                                    options={['Major', 'minor']}
                                    name="type" 
                                />
                            </Col>
                            <Col>
                                <Selector 
                                    handleOnChange={this.handleKeyChange}
                                    options={["D", "E", "F", "G", "A", "B", "C"]}
                                    name="name" />
                            </Col>
                            <Col>
                                <Selector 
                                    handleOnChange={this.handleKeyChange}
                                    options={this.props.chosenKey.scales.map(scale => (scale.scale_type))}
                                    name="scale" 
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Chords scale={this.props.chosenKey.scales.filter(scale => (scale.scale_type === this.props.chosenScale))[0]}/>
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
        chosenKey: state.chosenKey,
        chosenScale: state.chosenScale
    }
}

export default connect(mapStateToProps, { fetchKey })(SongWorkshop);