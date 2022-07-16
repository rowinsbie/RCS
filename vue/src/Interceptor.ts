import API from "./axios";
import UserStore from "./statemanagement/UserStore";

export default function Interceptor()
{
        API.interceptors.request.use(request => {
              return request;
        },
        error => {
           return Promise.reject(error);
        });


        API.interceptors.response.use(response => {
            if(response.status == 401)
            {
                UserStore.dispatch('LOG_OUT');
                localStorage.clear();
            }
            return response;
        },error => {
            return Promise.reject(error);
        });

        
}