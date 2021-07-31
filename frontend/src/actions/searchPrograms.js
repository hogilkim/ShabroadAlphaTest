import * as api from '../api/api';
import {GET_ALL_PROGRAMS, GET_PROGRAMS_BY_SEARCH} from '../constants/actionTypes'
// Action Creaters

export const getAllPrograms = (page) => async (dispatch) => {

    try {
        const {data} = await api.getAllPrograms(page);
        
        dispatch({type: GET_ALL_PROGRAMS, payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const getProgramsBySearch = (searchOptions)=> async(dispatch)=>{
    try {
        const {data} = await api.searchPrograms(searchOptions);

        dispatch({type: GET_PROGRAMS_BY_SEARCH, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}