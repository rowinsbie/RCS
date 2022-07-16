import { createStore } from "vuex";
import API from '../axios';
import router from "../router";
const UserStore = createStore({
    state()
    {
        return {
            token:localStorage.getItem('token'),
            isCredentialValid:true,
            user:[],
            errors:[]
        }
    },
    mutations:{
        setToken(state,token) {
            state.token = token
        },
        isCredentialsValid(state,status)
        {
            state.isCredentialValid = status;
        },
        setUserData(state,data)
        {
            state.user = data;
        },
        setErrors(state,errors)
        {
            state.errors = errors;
        }
    },
    actions:{
        AUTHENTICATE(context,credentials)
        {
          API.get('sanctum/csrf-cookie').then((res) => {
                API.post('api/authenticate',credentials)
                .then((response) => {
                    console.log(response);
                    if(response)
                    {
                        localStorage.setItem('token',response.data.token);
                        context.commit('setToken',response.data.token);
                        location.href = "/homepage";

                    }
                }).catch((error) => {
                    if(error.response.status === 422)
                    {
                        context.commit('isCredentialsValid',false);
                    };
                    return Promise.reject(error);
                })
               
          })
        },
        GET_USERS(context)
        {
            API.get('api/user').then(res => {
                context.commit('setUserData',res.data);
            }).catch(error => {
                return Promise.reject(error);
            })
        },
        LOG_OUT(contex)
        {
            API.post('api/log-out')
            .then(res => {
               if(res && res.status == 200)
               {

                    location.href = "/login";
                
               }
            }).catch(err => {
                console.log(err);
            });

            localStorage.clear();
        }
    },
    getters:{
        isAuth(state)
        {
            return state.token;
        },
        credentialsValidity(state)
        {
            return state.isCredentialValid;
        },
        getUserData(state)
        {
            return state.user;
        }
    }
});

export default UserStore;