
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

export function updateChord(note) {
    return {
        type: "UPDATE_CHORD",
        note
    }
}
