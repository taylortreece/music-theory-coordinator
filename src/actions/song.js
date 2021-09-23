
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
    return (dispatch) => {
        fetch('http://localhost:3001/songs', 
        {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            },
        method: 'POST',
        body: JSON.stringify(song)
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: "SAVE_SONG",
            song,
            message: data
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
