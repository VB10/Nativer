import { combineReducers } from 'redux'
import {databaseReducer} from './database_reducers'
import { barReducer } from './bar_reducers'

export default combineReducers({
  databaseReducer,
  barReducer
});