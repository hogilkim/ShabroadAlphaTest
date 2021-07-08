import { LOGIN, SIGNUP } from "../constants/actionTypes";

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));

            return {...state, authData: action?.data};
        
        case SIGNUP:
            console.log("reducer:", state);
            return {...state, authData: action?.data};
        default:
            return state;
    }
};

export default authReducer;

