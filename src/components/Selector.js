import React from 'react'

const Selector = ({ options }) => {
    return (
        <select>
            {options.map(option => (<option key={option}>{option}</option>))}
        </select>
    )
}

export default Selector;