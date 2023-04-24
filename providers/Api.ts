import axios, { AxiosInstance } from 'axios';


const api: AxiosInstance = axios.create({
  
  baseURL: process.env.API_BASE_URL,
  headers:{
    Authorization: '',
    'Content-type': 'application/json',

  }


})

console.log(process.env.API_BASE_URL)


export default api;
