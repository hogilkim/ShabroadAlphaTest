import * as api from '../api/api';
import {GET_ALL_PROGRAMS, GET_PROGRAMS_BY_SEARCH, GET_PROGRAM, START_LOADING, END_LOADING} from '../constants/actionTypes'
// Action Creaters

export const getAllPrograms = (page) => async (dispatch) => {

    try {
        dispatch({type: START_LOADING});
        const {data} = await api.getAllPrograms(page);
        
        dispatch({type: GET_ALL_PROGRAMS, payload: data})
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message);
    }
}

export const getProgramsBySearch = (searchOptions)=> async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.searchPrograms(searchOptions);

        dispatch({type: GET_PROGRAMS_BY_SEARCH, payload: data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message);
    }
}

export const getProgram = (id) => async(dispatch)=>{
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.getProgram(id);
        console.log("action: ", data)
        dispatch({type: GET_PROGRAM, payload: data})
        dispatch({type: END_LOADING});
    } catch (error) {
        
    }
}