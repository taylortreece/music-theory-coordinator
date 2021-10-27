import React from 'react'

const Banner = ({ instrument }) => {
    return (
        <img 
            key={instrument} 
            src={`${instrument}.png`} 
            alt={`${instrument}`} 
        />
    )
}

export default Banner;