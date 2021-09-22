
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
            data
        }))
    }
}
