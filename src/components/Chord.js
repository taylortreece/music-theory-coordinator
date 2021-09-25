import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Note from './Note';
import '../css/Chord.css'

const Chord = ({ chord, buttonAction, variant, action }) => {
  return (
    <Card className="chord-card">  
      <Card.Header>
          {chord.name.replace("_", " ")}
      </Card.Header>
        
      {chord.notes.map(note => (
        <ListGroup 
          variant="flush" 
          key={note.id}>
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