import {combineReducers} from 'redux';
import auth from './auth'
import searchPrograms from './searchPrograms';

export const reducers = combineReducers({
    auth, 
    searchPrograms,
});