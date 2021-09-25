import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Note from './Note';

const Chord = ({ chord, buttonAction, variant, action }) => {
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
                    {chord.name.replace("_", " ")}
                </Card.Header>
                
                {chord.notes.map(note => (
                    <ListGroup variant="flush" key={note.id}>
                        <ListGroup.Item>
                            <Note 
                            note={note} 
                            buttonAction={buttonAction} 
                            />
                        </ListGroup.Item>
                    </ListGroup>
                ))}
                
                <Card.Footer>
                    <Button 
                    onClick={() => action(chord)} 
                    variant={variant}
                    >
                        {buttonAction}
                    </Button>
                </Card.Footer>
            </Card>
        )
    }

export default Chord;