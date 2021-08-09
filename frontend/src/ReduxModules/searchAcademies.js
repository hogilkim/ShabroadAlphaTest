import {handleActions} from 'redux-actions';
import * as api from '../api/api';

const GET_ACADEMIES_BY_SEARCH = 'searchAcademies/GET_ACADEMIES_BY_SEARCH'
const START_LOADING = 'searchAcademies/START_LOADING'
const END_LOADING = 'searchAcademies/END_LOADING'

export const getAcademiesBySearch = (city) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.searchAcademies(city);
        dispatch({type: GET_ACADEMIES_BY_SEARCH, payload:data})
        dispatch({type: END_LOADING})
    } catch (error) {
        console.log(error.message);
    }
}

const initialState = {
    academies: [], isLoading: true, academy:{}
}

const academiesReducer = handleActions(
    {
        [START_LOADING] : (state) => ({
            ...state, isLoading: true
        }),
        [END_LOADING] : (state) => ({
            ...state, isLoading: false
        }),
        [GET_ACADEMIES_BY_SEARCH]: (state, action)=>({
            ...state,
            academies: action.payload.data
        })
    },
    initialState
);

export default academiesReducer