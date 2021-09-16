

export default function songReducer(state = {
    chords: [],
}, action) {
    switch(action.type) {

        case "ADD_CHORD": 

        return {chords: state.chords.concat(action.chord)}

        case "REMOVE_CHORD":

        return {chords: state.chords.filter(chord => (chord.songChordId !== action.chord.songChordId))}
    

    default:
        return state
    }
}