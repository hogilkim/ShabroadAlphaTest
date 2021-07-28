import {GET_ALL_PROGRAMS} from '../constants/actionTypes'

// const DefaultState = {
//     data: []
// }

export default (state=[], action) => {
    switch(action.type) {
        case GET_ALL_PROGRAMS:
            console.log("reducer: ", action)
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};