import React from 'react'

const UserSong = ({ song, handleOnClick }) => {
    return (
        <h1 onClick={() => handleOnClick(song)}>{song.name}</h1>
    )
}

export default UserSong;