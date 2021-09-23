import React from 'react'

const UserSong = ({ song, handleOnClick, handleOnDblClick }) => {
    return (
        <div>
            <p onClick={() => handleOnDblClick(song)}>x</p>
            <h1 onClick={() => handleOnClick(song)} onDblClick={()=> handleOnDblClick(song)}>{song.name}</h1>
        </div>
        
    )
}

export default UserSong;