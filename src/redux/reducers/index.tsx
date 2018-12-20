import { combineReducers } from 'redux'
import {databaseReducer} from './database_reducers'

const name = "veli"
export default combineReducers({
    databaseReducer
});