import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Note from './Note';
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
        //If I decide to to arpeggios, the order of notes cannot change. Try to make this work:
        //
        // updatedNotes: [
        //     ...state.updatedNotes.slice(0, index),
        //     Object.assign({}, note),
        //     ...state.updatedNotes.slice(index + 1)
        // ] 
    }

    updatedChord = () => {
        this.props.chord.updatedNotes = this.state.updatedNotes
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

export default Chord;