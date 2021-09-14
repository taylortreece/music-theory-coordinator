import React from 'react'

const Selector = ({ handleOnChange, options  }) => {
    return (
        <select onChange={(event) => handleOnChange(event)} name='instrument'>
            {options.map(option => (<option key={option}>{option}</option>))}
        </select>
    )
}

export default Selector;