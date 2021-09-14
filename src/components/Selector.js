import React from 'react'

const Selector = ({ handleOnChange, options, name  }) => {
    return (
        <select onChange={(event) => handleOnChange(event)} name={name}>
            {options.map(option => (<option key={option}>{option}</option>))}
        </select>
    )
}

export default Selector;