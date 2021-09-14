import React from 'react'

const Chords = ({ chords }) => {
    return (
        <ul>
            {chords.map(chord => (<li 
                key={chord}
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
                {chord}
            </li>))}
        </ul>
    )
}

export default Chords;