import { createStore } from "vuex";
import API from '../axios';
import router from "../router";
import Swal from "sweetalert2";

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
        deleteRole({commit,dispatch},id)
        {
            API.delete('api/role/'+id)
            .then(res => {
                if(res && res.status == 200)
                {
                    Swal.fire({
                        title:"Deleted",
                        text:"The role has been deleted successfully",
                        icon:"success"
                    }).then(() => {
                        dispatch('getRoles');
                    });
                }
            }).catch(err => {
                return Promise.reject(err);
            });
        },
        createNewRole({commit,dispatch},data)
        {
            API.post('api/role',data).then(res => {
                if(res && res.status == 200)
                {
                    commit('setErrors',[]);
                    Swal.fire({
                        title:"New Role",
                        text:"A role has been created",
                        icon:"success"
                    }).then(() => {
                        dispatch('getRoles');
                    });
                }

            }).catch(error => {
                commit('setErrors',error.response.data.errors)
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