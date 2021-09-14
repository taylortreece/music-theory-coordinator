import React from 'react'

const Banner = ({ instrument, style }) => {
    return (
        <img key={instrument} src={`${instrument}.jpg`} alt={`${instrument}`} style={style}/>
    )
}

export default Banner;