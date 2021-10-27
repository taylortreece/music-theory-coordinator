import React from 'react'
import { connect } from 'react-redux'
import { fetchKey } from '../actions/key'
import Player from '../components/Player'
import { naturalKeyNames, sharpKeyNames, flatKeyNames } from '../data/keyNames'

import Banner from '../components/Banner'
import Selector from '../components/Selector'
import UserSongs from './UserSongs'
import SongField from './SongField'
import Chords from './Chords'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/Chords.css'
import '../css/Selectors.css'

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
           'naturalKeys': naturalKeyNames,
           'sharpKeys': sharpKeyNames,
           'flatKeys': flatKeyNames,
            currentOption: ''
        };
    }

    handleOnClick = (event) => {
        this.setState({
            currentOption: event.target.value
        })
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
                            />
                        </Row>
                    </Col>
                    <Col xs={7} lg={7}>
                        <Row className='selectors'>
                            <Col className='type-selector'>
                                <Selector 
                                    handleOnChange={this.handleKeyChange}
                                    options={['Major', 'minor']}
                                    name="type" 
                                    value={this.props.chosenKey.key_type}
                                />
                            </Col>
                            <Col className='key-buttons'>
                                <Selector 
                                    id="key-selector"
                                    handleOnChange={this.handleKeyChange}
                                    options={this.state[`${this.state.currentOption}`] || naturalKeyNames}
                                    name="name" 
                                    value={this.props.chosenKey.name}
                                />
                                <div style={{marginBottom: '1%'}}>
                                    <Button onClick={event => this.handleOnClick(event)} value="naturalKeys" className="accidental" style={{marginLeft: '7%', marginRight: '2%'}}>Natural</Button>
                                    <Button onClick={event => this.handleOnClick(event)} value="sharpKeys" className="accidental" style={{marginRight: '2%'}}>Sharp</Button>
                                    <Button onClick={event => this.handleOnClick(event)} value="flatKeys" className="accidental" style={{marginRight: '2%'}}>Flat</Button>
                                </div>
                            </Col>
                            <Col className='selector'>
                                <Selector 
                                    size='lg'
                                    handleOnChange={this.handleKeyChange}
                                    options={this.props.chosenKey.scales.map(scale => (scale.scale_type))}
                                    name="scale" 
                                    value={this.props.chosenScale}
                                    style={{marginTop: '-9%'}}
                                />
                            </Col>
                        </Row>
                        <Row className='chords'>
                            <Chords 
                              scale={this.props.chosenKey.scales.filter(scale => 
                              (scale.scale_type === this.props.chosenScale))[0]}
                            />
                        </Row>
                        <Row>
                            <SongField />
                            <Player />
                        </Row>
                    </Col>
                    <Col>
                        <Row>
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
        chosenKey: state.keyReducer.chosenKey,
        chosenScale: state.keyReducer.chosenScale
    }
}

export default connect(mapStateToProps, { fetchKey })(SongWorkshop);