import { createStore } from "vuex";

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
            
        }
    }
});