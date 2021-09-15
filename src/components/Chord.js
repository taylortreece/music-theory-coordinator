import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Note from './Note';


const Chord = ({ chord }) => {
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
            <Card.Header>{chord.name.replace("_", " ")}</Card.Header>
                {chord.notes.map(note => (
                <ListGroup variant="flush" key={note.id}>
                    <ListGroup.Item>
                        <Note note={note} />
                    </ListGroup.Item>
                </ListGroup>
                ))}
            <Card.Footer>
                <Button onClick={() => console.log("Hello, World")} variant="outline-success">Add</Button>
            </Card.Footer>
        </Card>
    )
}

export default Chord;