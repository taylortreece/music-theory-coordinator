import { combineReducers } from 'redux'
import keyReducer from './keyReducer'
import songReducer from './songReducer'

export default combineReducers({
    keyReducer,
    songReducer
})