import React from 'react'

class Chords extends React.Component {

    onComponentDidMount() {
    }

    render() {
        return (
            <ul>
                {this.props.scale.chords.map(chord => (
                <li 
                    key={chord.name}
                    style={{
                    display: 'block', 
                    float: 'left', 
                    textDecoration: 'none', 
                    width: '12%',
                    border: 'solid',
                    marginTop: '2%',
                    marginLeft: '2%',
                    textAlign: 'center',
                    }}
                >
                {chord.name}
                </li>))}
            </ul>
            )
        }
    }
            
export default Chords;