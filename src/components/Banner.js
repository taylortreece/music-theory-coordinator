import React from 'react'

const Banner = ({ instrument, style }) => {
    return (
        <img 
            key={instrument} 
            src={`${instrument}.png`} 
            alt={`${instrument}`} 
        />
    )
}

export default Banner;