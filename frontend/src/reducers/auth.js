import { LOGIN, SIGNUP, ACTIVATION, FORGETPASSWORD, RESETPASSWORD } from "../constants/actionTypes";
import {authenticate} from "../helpers/auth"

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case LOGIN:
            // localStorage.setItem('user', JSON.stringify({ ...action?.data}));
            console.log("reducer: ", action);
            authenticate(action);
            return {...state, authData: action?.data};
        
        case SIGNUP:
            console.log("reducer:", state);
            return {...state, authData: action?.data};
        case ACTIVATION:
            console.log("reducer: ", state);
            return {...state, authData: action?.data};
        case FORGETPASSWORD:
            console.log("reducer: ", state);
            return {...state, authData: action?.data};
        case RESETPASSWORD:
            console.log("reducer: ", state);
            return {...state, authData: action?.data};
        default:
            return state;
    }
};

export default authReducer;

