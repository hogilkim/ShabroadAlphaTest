import {handleActions} from 'redux-actions';
import * as api from '../api/api';


const GET_ALL_PROGRAMS = 'searchPrograms/GET_ALL_PROGRAMS'
const GET_PROGRAM = 'searchPrograms/GET_PROGRAM'
const GET_PROGRAMS_BY_SEARCH = 'searchPrograms/GET_PROGRAMS_BY_SEARCH'
const START_LOADING = 'searchPrograms/START_LOADING'
const END_LOADING = 'searchPrograms/END_LOADING'
const SEARCH_PROGRAMS_BY_ACADEMY_ID = 'searchPrograms/SEARCH_PROGRAMS_BY_ACADEMY_ID'

export const searchProgramsByAcademyId = (page) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.searchProgramsByAcademyId(page);
        dispatch({type: SEARCH_PROGRAMS_BY_ACADEMY_ID, payload:data})
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message);
    }
}

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
        dispatch({type: GET_PROGRAM, payload: data})
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message);
    }
}

const initialState = {
    programs:[], currentPage: 0, numberOfPages: 0, isLoading: true, program: {}
}

const programsReducer = handleActions( 
    {
        [START_LOADING]: (state)=>({
            ...state, isLoading: true
        }),
        [END_LOADING]: (state, action)=>({
            ...state, isLoading: false
        }),
        [GET_ALL_PROGRAMS]: (state, action)=>({
            ...state, 
            programs: action.payload.data, 
            currentPage: action.payload.currentPage, 
            numberOfPages: action.payload.numberOfPages
        }),
        [GET_PROGRAMS_BY_SEARCH]: (state, action)=>({
            ...state, programs: action.payload.data
        }),
        [GET_PROGRAM]: (state, action)=>({
            ...state, program: action.payload
        }),
        [SEARCH_PROGRAMS_BY_ACADEMY_ID]: (state, action) => ({
            ...state,
            programs: action.payload.data
        })
        
    },
    initialState

);

export default programsReducer