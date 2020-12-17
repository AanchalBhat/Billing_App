import axios from 'axios';

const BASE_URL =  process.env.API_URL ? process.env.API_URL :'http://localhost:8000/api/v1'

export const Axios = axios.create({
    baseURL: BASE_URL,
})