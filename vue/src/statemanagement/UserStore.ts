import { createStore } from "vuex";
import API from '../axios';
const UserStore = createStore({
    state()
    {
        return {
            token:null
        }
    },
    mutations:{
        setToken(state,token) {
            state.token = token;
        }
    },
    actions:{
        AUTHENTICATE(context,credentials)
        {
          API.get('sanctum/csrf-cookie').then((res:Object) => {
                API.post('api/login',credentials)
                .then((res) => {
                    if(res && res.status == 200)
                    {
                        console.log("login");
                    }
                }).catch((error) => {
                    return Promise.reject(error);
                })
          })
        }
    }
});

export default UserStore;