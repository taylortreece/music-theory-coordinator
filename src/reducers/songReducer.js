import { v4 as uuidv4 } from 'uuid'

export default function songReducer(state = {
    chords: [],
}, action) {
    switch(action.type) {

        case "ADD_CHORD": 

        return {
            ...state,
            chords: [
            ...state.chords, 
            {
                name: action.chord.name,
                songChordId: uuidv4(),
                updatedNotes: action.chord.updatedNotes,
                notes: action.chord.notes
            }
        ]}

        case "UPDATE_CHORD":
           let index = state.chords.findIndex(chord => chord.songChordId === action.chord.songChordId);
        debugger
        return {...state,
            chords: [
                ...state.chords.slice(0, index),
                Object.assign({}, action.chord),
                ...state.chords.slice(index + 1)
            ]
        }

        // return {chords: state.chords.concat(action.chord)}

        case "REMOVE_CHORD":

        return {
            ...state,
            chords: state.chords.filter(chord => (chord.songChordId !== action.chord.songChordId))
        }
    

    default:
        return state
    }
}