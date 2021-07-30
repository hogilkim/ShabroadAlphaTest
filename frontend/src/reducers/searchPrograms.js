import {GET_ALL_PROGRAMS, GET_PROGRAMS_BY_SEARCH} from '../constants/actionTypes';

// const DefaultState = {
//     data: []
// }

const programsReducer = (state=[], action) => {
    switch(action.type) {
        case GET_ALL_PROGRAMS:
            // console.log("reducer: ", action)
            return [
                ...state,
                action.payload
                ];
        case GET_PROGRAMS_BY_SEARCH:
            console.log("reducer GET_PROGRAMS_BY_SEARCH: ", action)
            return [
                ...state, action.payload
            ];
        default:
            return state;
    }
};

export default programsReducer