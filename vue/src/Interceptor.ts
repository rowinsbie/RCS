import API from "./axios";
import UserStore from "./statemanagement/UserStore";
const RedirectIfUnauthorized = (status:number) => {
    if(status === 401)
    {
        localStorage.clear();
        location.href = "/login";
    }
}

export default function Interceptor()
{
        API.interceptors.request.use(request => {
          
              return request;
        },
        error => {
            if(error.response.status)
            {
                RedirectIfUnauthorized(error.response.status);
            }
           return Promise.reject(error);
        });


        API.interceptors.response.use(response => {
           
            return response;
        },error => {
          
            if(error.response.status)
            {
                RedirectIfUnauthorized(error.response.status);
            }
            return Promise.reject(error);
        });

        
}