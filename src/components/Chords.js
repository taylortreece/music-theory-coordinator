import React from 'react'
import Chord from './Chord'

class Chords extends React.Component {

    render() {
        return (
            this.props.scale.chords.map(chord => ( 
                <Chord 
                    className='chord' 
                    id={chord.id} 
                    key={chord.id} 
                    chord={chord}/> 
                ))
            )
        }
    }
            
export default Chords;