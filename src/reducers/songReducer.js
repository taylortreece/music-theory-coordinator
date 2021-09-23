import { v4 as uuidv4 } from 'uuid'

export default function songReducer(state = {
    chords: [],
    songs: []
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
            songs: [...state.songs],
            chords: state.chords.filter(chord => (chord.songChordId !== action.chord.songChordId))
        }

        case "SAVE_SONG":
        return {
            ...state, 
            chords: [...state.chords], 
            songs: [...state.songs, action.song.song]
        }

        case "FETCH_SONGS":
        return {
            ...state, 
            chords: [...state.chords], 
            songs: action.songs
        }

    default:
        return state
    }
}