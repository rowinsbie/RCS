import axios,{ AxiosInstance,AxiosRequestConfig } from "axios";

const config:AxiosRequestConfig = {
    baseURL:import.meta.env.VITE_API,
    withCredentials: true,
    headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
    }

}

const API:AxiosInstance = axios.create(config);

export default API;