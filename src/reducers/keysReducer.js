import Keys from '../data/Keys'

const initialState = {
    name: 'C',
    type: 'Major'
};


export default function keysReducer(state = initialState, action) {

    switch (action.type) {
       case "GET_KEY": {
           console.log(action)
           return { ...state,
           key: Keys.filter(key => (key === action.key.name + action.key.type))
           }
       }

    default:
        return state
    }
}