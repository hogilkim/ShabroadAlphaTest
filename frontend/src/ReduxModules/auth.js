import {authenticate} from "../helpers/auth"
import * as api from '../api/api';
import {handleActions} from 'redux-actions';


const LOGIN = 'auth/LOGIN';
const SIGNUP = 'auth/SIGNUP'
const ACTIVATION = 'auth/ACTIVATION';
const FORGETPASSWORD = 'auth/FORGETPASSWORD'
const RESETPASSWORD = 'auth/RESETPASSWORD'


export const ReduxLogin = (loginData, setLoginSuccess, history) => async (dispatch) => {
    try {
        const {data} = await api.login(loginData);
        setLoginSuccess(true);
        dispatch({type: LOGIN, data})
        setTimeout(()=>history.push('/'), 2000)
        
    } catch (error) {
        setLoginSuccess(false);
        console.log("failed");
        console.log(error);
    }
}

export const ReduxSignup = (signupData, setSuccess) => async(dispatch) => {
    try {
        const {data} = await api.signup(signupData);
        setSuccess(true);
        console.log("actions:", signupData);
        dispatch({ type: SIGNUP, data})

    } catch (error) {
        console.log(error);
    }
}

export const ReduxActivation = (activationData, setSuccess) => async(dispatch) => {
    try {
        const {data} = await api.activation(activationData);
        setSuccess(true);
        console.log("Activation Action: ", activationData);
        dispatch({type: ACTIVATION, data});
    } catch (error) {
        console.log(error);
    }
}

export const ReduxForgetPassword = (email) => async(dispatch) => {
    try {
        const {data} = await api.forgetPassword(email);
        dispatch({type: FORGETPASSWORD, data});
    } catch (error) {
        console.log(error);
    }
}

export const ReduxResetPassword = (resetData) => async (dispatch) => {
    try {
        const {data} = await api.resetPassword(resetData);
        dispatch({type: RESETPASSWORD, data});
    } catch (error) {
        console.log(error);
    }
}

const initialState = {
    authData: null
}

const authReducer = handleActions(
    {
        [LOGIN] : (state, action)=>{
            authenticate(action);
            return {...state, authData: action?.data}
        },        
        [SIGNUP]: (state, action)=> ({
            ...state, authData: action?.data}),
        [ACTIVATION]: (state, action)=> ({
            ...state, authData: action?.data}),
        [FORGETPASSWORD]: (state, action)=> ({
            ...state, authData: action?.data}),
        [RESETPASSWORD]: (state, action)=> ({
            ...state, authData: action?.data})
    },
    initialState
);

export default authReducer;

