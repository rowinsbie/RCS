import { createStore } from "vuex";
import API from '../axios';
import router from "../router";
const RoleStore = createStore({
    state()
    {
        return {
            Roles:[],
            errors:[]
        }
    },
   
    mutations:{
        setRoles(state,roles)
        {
            state.Roles = roles;
        },
        setErrors(state,errors)
        {
            state.errors = errors;
        }
    },
    actions:{
        createNewRole(context,data)
        {
            API.post('api/role',data).then(res => {
                if(res)
                {
                    context.commit('setErrors',[]);
                }

            }).catch(error => {
                context.commit('setErrors',error.response.data.errors)
                return Promise.reject(error);
            });
        },
        getRoles(contex)
        {
            API.get('api/role').then(res => {
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
        },
        getErrors(state)
        {
            return state.errors;
        }
    }

});

export default RoleStore;