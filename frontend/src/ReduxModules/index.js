import {combineReducers} from 'redux';
import auth from './auth'
import searchPrograms from './searchPrograms';
import searchAcademies from './searchAcademies'

export const reducers = combineReducers({
    auth, 
    searchPrograms,
    searchAcademies,
});