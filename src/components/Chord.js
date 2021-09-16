import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Note from './Note';
import { connect } from 'react-redux'
import { updateChord } from '../actions/song'

// import { updateChord } from '../actions/song';


class Chord extends React.Component {

    constructor() {
        super();
        this.state = {
            updatedNotes: []
        }
    }

    updateChordNotes = (note) => {
        this.setState((state) => {
            return { 
                updatedNotes: [
                    ...state.updatedNotes.filter((updatedNote,) => (
                    updatedNote.name !== note.name
                )), note
              ]
            }
        })
    }

    updatedChord = () => {
        this.props.chord.updatedNotes = this.state.updatedNotes;
        return this.props.chord
    }
    
    render() {
        return (
            <Card style={{ 
                display: 'block',
                float: 'left',
                marginTop: '2%',
                marginLeft: '2%',
                width: '15%',
                minWidth: '100px',
                fontSize: '75%'
                }}>
                <Card.Header>
                    {this.props.chord.name.replace("_", " ")}
                </Card.Header>
                {this.props.chord.notes.map(note => (
                    <ListGroup variant="flush" key={note.id}>
                        <ListGroup.Item>
                            <Note 
                            note={note} 
                            buttonAction={this.props.buttonAction} 
                            updateChordNotes={this.updateChordNotes}
                            />
                        </ListGroup.Item>
                    </ListGroup>
                ))}
                <Card.Footer>
                    <Button 
                    onClick={() => this.props.action(this.updatedChord())} 
                    variant={this.props.variant}
                    >
                        {this.props.buttonAction}
                    </Button>
                </Card.Footer>
            </Card>
        )
    }
}

export default connect(null, { updateChord })(Chord);