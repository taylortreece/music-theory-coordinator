

export default function songReducer(state = {
    chords: [],
}, action) {

    switch(action.type) {
        case "ADD_CHORD": 
        console.log(state)
        return state

        case "REMOVE_CHORD":

        return state
    

    default:
        return state
    }
}