import { v4 as uuidv4 } from 'uuid'

export default function songReducer(state = {
    chords: [],
}, action) {
    switch(action.type) {

        case "ADD_CHORD": 
        console.log(action)
        const newChord = {...action.chord, songChordId: uuidv4() }
        return {
            ...state,
            chords: [
            ...state.chords, 
            newChord
        ]}
        
        case "REMOVE_CHORD":

        return {
            ...state,
            chords: state.chords.filter(chord => (chord.songChordId !== action.chord.songChordId))
        }
    

    default:
        return state
    }
}