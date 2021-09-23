
export function addChord(chord) {
    return {
        type: "ADD_CHORD",
        chord
    }
}

export function removeChord(chord) {
    return {
        type: "REMOVE_CHORD",
        chord
    }
}

export function selectSong(song) {
    return {
        type: "SELECT_SONG",
        song
    }
}

export function saveSong(song) {
    let appendage = song.id ? `songs/${song.id}` : 'songs'
    let request = song.id ? 'PATCH' : 'POST'

    return (dispatch) => {
        fetch('http://localhost:3001/' + appendage, 
        {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            },
        method: `${request}`,
        body: JSON.stringify(song)
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: "SAVE_SONG",
            songs: data
        }))
    }
}

export function fetchSongs() {
    return (dispatch) => {
        fetch('http://localhost:3001/songs')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'FETCH_SONGS',
            songs: data
        }))
    }
}

export function deleteSong(song) {

    return (dispatch) => {
        fetch(`http://localhost:3001/songs/${song.id}`,
        {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            },
        method: 'DELETE',
        body: JSON.stringify(song)
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: "DELETE_SONG",
            songs: data
        }))
    }
}
