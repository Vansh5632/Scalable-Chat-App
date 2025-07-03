import  Env from './env';

export const BASE_URL = Env.BACKEND_URL;
export const API_URL = `${BASE_URL}/api/v1`;
export const LOGIN_URL = `${API_URL}/auth/login`;


