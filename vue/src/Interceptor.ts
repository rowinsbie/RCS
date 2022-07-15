import API from "./axios";


export default function Interceptor()
{
        API.interceptors.request.use(request => {
                console.log(request);
            return request;
        });


        API.interceptors.response.use(response => {
            console.log(response.status);
        });
}