import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:8000'})

export const login = (loginData) => api.post('/user/login', loginData);
export const signup = (signupData) => api.post('/user/signup', signupData);
export const activation = (activationData) => api.post('/user/activation', activationData);