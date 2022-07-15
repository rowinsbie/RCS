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
        AUTHENTICATE(context)
        {
          API.get('sanctum/csrf-cookie').then((res:Object) => {
                console.log(res);
          })
        }
    }
});

export default UserStore;