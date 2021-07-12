import {LOGIN, SIGNUP, ACTIVATION} from '../constants/actionTypes'
import * as api from '../api/api';

export const ReduxLogin = (loginData, history) => async (dispatch) => {
    try {
        const {data} = await api.login(loginData);
        dispatch({type: LOGIN, data})
        history.push('/')
    } catch (error) {
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