import React from 'react'

const Banner = ({ instrument }) => {
    return (
        <img key={instrument} src={`${instrument}.jpg`} alt={`${instrument}`}/>
    )
}

export default Banner;