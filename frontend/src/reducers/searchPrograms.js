import {GET_ALL_PROGRAMS, GET_PROGRAMS_BY_SEARCH, GET_PROGRAM, START_LOADING, END_LOADING} from '../constants/actionTypes';

// const DefaultState = {
//     data: []
// }

const programsReducer = (state= {programs:[], currentPage: 0, numberOfPages: 0, isLoading: true, program: {}}, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true}
        case END_LOADING:
            return {...state, isLoading: false}
        case GET_ALL_PROGRAMS:
            return {...state, 
                programs: action.payload.data, 
                currentPage: action.payload.currentPage, 
                numberOfPages: action.payload.numberOfPages
            };
        case GET_PROGRAMS_BY_SEARCH:
            return {...state, programs: action.payload.data};
        case GET_PROGRAM:
            console.log("reducer", action.payload);
            return {...state, program: action.payload};
        default:
            return state;
    }
};

export default programsReducer