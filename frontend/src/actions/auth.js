import {LOGIN, SIGNUP} from '../constants/actionTypes'
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

export const ReduxSignup = (signupData, history) => async(dispatch) => {
    try {
        const {data} = await api.signup(signupData);
        console.log("actions:", signupData);
        dispatch({ type: SIGNUP, data})

        // history.push('/login')
    } catch (error) {
        console.log(error);
    }
}