import { createStore } from "vuex";
import API from '../axios';
import router from "../router";
const UserStore = createStore({
    state()
    {
        return {
            token:localStorage.getItem('token'),
            isCredentialValid:true
        }
    },
    mutations:{
        setToken(state,token) {
            state.token = token
        },
        isCredentialsValid(state,status)
        {
            state.isCredentialValid = status;
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
                        router.push({
                            name:'homepage'
                        });
                    }
                }).catch((error) => {
                    if(error.response.status === 422)
                    {
                        context.commit('isCredentialsValid',false);
                    };
                    return Promise.reject(error);
                })
               
          })
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
        }
    }
});

export default UserStore;