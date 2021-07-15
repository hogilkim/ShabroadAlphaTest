import {LOGIN, SIGNUP, ACTIVATION, FORGETPASSWORD, RESETPASSWORD} from '../constants/actionTypes'
import * as api from '../api/api';

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
        const {data} = await api.
        dispatch({type: RESETPASSWORD, data});
    } catch (error) {
        
    }
}