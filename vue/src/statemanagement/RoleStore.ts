import { createStore } from "vuex";
import API from '../axios';
import router from "../router";
const RoleStore = createStore({
    state()
    {
        return {
            Roles:[]
        }
    },
    mutations:{
        setRoles(state,roles)
        {
            state.Roles = roles;
        }
    },
    actions:{
        getRoles(contex)
        {
            API.get('api/role').then(res => {
                console.log(res);
                if(res &&  res.data)
                {
                    contex.commit('setRoles',res.data);
                }
            }).catch(error => {
                
                return Promise.reject(error);
            });
        }
    },
    getters:{
        showRoles(state)
        {
            return state.Roles;
        }
    }

});

export default RoleStore;