import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:8000'})

export const login = (loginData) => api.post('/user/login', loginData);
export const signup = (signupData) => api.post('/user/signup', signupData);
export const activation = (activationData) => api.post('/user/activation', activationData);
export const forgetPassword = (email) => api.post('/user/forgetPassword', email);
export const resetPassword = (resetData) => api.put('/user/resetPassword', resetData);

export const getAllPrograms = (page)=>api.get(`/getPrograms?page=${page}`);
export const searchPrograms = (searchOptions) => api.get(`/searchPrograms?hashtags=${searchOptions.hashtags||'none'}&city=${searchOptions.city||'none'}`);
export const getProgram = (id) => api.get(`/program/${id}`);
export const searchProgramsByAcademyId = (id)=> api.get(`/programsByAcademyId/${id}`);

export const searchAcademies = (city)=> api.get(`/searchAcademies?city=${city}`);
export const getAcademy = (id)=>api.get(`/academy/${id}`);