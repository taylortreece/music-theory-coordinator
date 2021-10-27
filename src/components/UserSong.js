import React from 'react'
import '../css/SongList.css'
import Button from 'react-bootstrap/Button';


const UserSong = ({ song, handleOnClick, handleOnDeleteClick }) => {
    return (
        <div className="song-list-item">
            <h1 className="song-title" onClick={() => handleOnClick(song)}>{song.name}
            <Button className="delete-marker" variant="danger" onClick={() => handleOnDeleteClick(song)}>x</Button>
            </h1>
        </div>
    )
}

export default UserSong;