import React from 'react'
import '../css/Selectors.css'

const Selector = ({ id, handleOnChange, options, name, value, style  }) => {
    return (
        <select style={style} id={id} className='selector' onChange={(event) => handleOnChange(event)} name={name} value={value}>
            {options.map(option => (<option key={option}>{option}</option>))}
        </select>
    )
}

export default Selector;