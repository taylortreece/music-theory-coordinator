import React from 'react'
import { connect } from 'react-redux'
import { fetchKey } from '../actions/key'
import Player from '../components/Player'
import { naturalKeyNames, sharpKeyNames, flatKeyNames } from '../data/keyNames'

import Selector from '../components/Selector'
import SongField from './SongField'
import Chords from './Chords'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/Chords.css'
import '../css/Selectors.css'
import '../css/SongWorkShop.css'

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
                            <Row className="accidentals">
                                <div style={{marginBottom: '1%'}}>
                                    <Button onClick={event => this.handleOnClick(event)} value="naturalKeys" className="accidental" style={{marginLeft: "0%"}} >Natural</Button>
                                    <Button onClick={event => this.handleOnClick(event)} value="sharpKeys" className="accidental" >Sharp</Button>
                                    <Button onClick={event => this.handleOnClick(event)} value="flatKeys" className="accidental" >Flat</Button>
                                </div>
                            </Row>
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
                            <h3 className="notification" 
                                style={{
                                    backgroundColor: "rgb(159, 240, 159)",
                                    textAlign: "center"
                                }}>Audio on all mobile devices coming soon!</h3>
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