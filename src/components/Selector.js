import React from 'react'

const Selector = ({ handleOnChange, options, name, value  }) => {
    return (
        <select onChange={(event) => handleOnChange(event)} name={name} value={value}>
            {options.map(option => (<option key={option}>{option}</option>))}
        </select>
    )
}

export default Selector;