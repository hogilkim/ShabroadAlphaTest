import {GET_ALL_PROGRAMS} from '../constants/actionTypes'

export default (state=[], action) => {
    switch(action.type) {
        case GET_ALL_PROGRAMS:
            return action.payload;
        default:
            return state;
    }
};