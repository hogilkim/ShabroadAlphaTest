import {GET_ALL_PROGRAMS, GET_PROGRAMS_BY_SEARCH} from '../constants/actionTypes';

// const DefaultState = {
//     data: []
// }

const programsReducer = (state= {programs:[], currentPage: 0, numberOfPages: 0}, action) => {
    switch(action.type) {
        case GET_ALL_PROGRAMS:
            return {...state, 
                programs: action.payload.data, 
                currentPage: action.payload.currentPage, 
                numberOfPages: action.payload.numberOfPages
            };
        case GET_PROGRAMS_BY_SEARCH:
            return {...state, programs: action.payload.data};
        default:
            return state;
    }
};

export default programsReducer