import API from "./axios";


export default function Interceptor()
{
        API.interceptors.request.use(request => {
              return request;
        },
        error => {
           return Promise.reject(error);
        });


        API.interceptors.response.use(response => {
            if(response.status == 401 || !localStorage.getItem('token'))
            {
                console.log('unauthorized');
                localStorage.clear();
            }
            return response;
        },error => {
            return Promise.reject(error);
        });

        
}