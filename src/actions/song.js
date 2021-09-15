import { v4 as uuidv4 } from 'uuid'

export function addChord(chord) {
    chord.songChordId = uuidv4()
    
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
