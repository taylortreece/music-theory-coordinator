import React from 'react';
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Note from './Note';
import { addChord } from '../actions/song'


class Chord extends React.Component {
    
    onHandleClick = () => {
        this.props.addChord(this.props.chord)
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
                <Card.Header>{this.props.chord.name.replace("_", " ")}</Card.Header>
                    {this.props.chord.notes.map(note => (
                    <ListGroup variant="flush" key={note.id}>
                        <ListGroup.Item>
                            <Note note={note} />
                        </ListGroup.Item>
                    </ListGroup>
                    ))}
                <Card.Footer>
                    <Button onClick={this.onHandleClick} variant="outline-success">Add</Button>
                </Card.Footer>
            </Card>
        )
    }
}

export default connect(null, { addChord })(Chord);