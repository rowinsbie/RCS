import { createStore } from "vuex";
import API from '../axios';
import router from "../router";
import Swal from "sweetalert2";

const UserStore = createStore({
    state()
    {
        return {
            token:localStorage.getItem('token'),
            isCredentialValid:true,
            user:[],
            userList:[],
            errors:[],
            updateErrors:[]
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
        },
        setUpdateErrors(state,errors)
        {
            state.updateErrors = errors;
        },
        setUserList(state,data)
        {
            state.userList = data;
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
        GET_USER(context)
        {
            API.get('api/user').then(res => {
                context.commit('setUserData',res.data);
            }).catch(error => {
                return Promise.reject(error);
            })
        },
        LOG_OUT(context)
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
        },
        CREATE_USER({commit,dispatch},data)
        {
            API.post('api/users',data)
            .then(res => {
                console.log(res);
                if(res && res.status == 200)
                {
                    Swal.fire({
                        title:"New User",
                        text:"A new user has been updated",
                        icon:"success"
                    }).then(() => {
                        dispatch('GET_USERS_LIST');
                    });
                }
            }).catch(err => {
                commit("setErrors",err.response.data.errors);
                return Promise.reject(err);
            });
        },
        GET_USERS_LIST(context)
        {
            API.get('api/users').then(res => {
                context.commit('setUserList',res.data.users);
            }).catch(error => {
                return Promise.reject(error);
            })
        },
        UPDATE_USER({commit,dispatch},data)
        {
            API.put(`api/users/${data.id}`,{
                role_id:data.role_id,
                fullname:data.fullname,
                email:data.email,
                
            }).then(res => {
                if(res && res.status == 200)
                {
                    commit('setUpdateErrors',[]);
                    Swal.fire({
                        title:"Updated",
                        text:"A user has been updated",
                        icon:"success"
                    }).then(() => {
                        location.reload();
                    });
                }
                

            }).catch(error => {
                commit('setUpdateErrors',error.response.data.errors)
                return Promise.reject(error);
            });
        },
        DELETE_USER({commit,dispatch},id)
        {
            API.delete(`api/users/${id}`)
            .then(res => {
                if(res && res.status == 200)
                {
                    Swal.fire({
                        title:"Deleted",
                        text:"The user has been deleted",
                        icon:"success"
                    });
                    dispatch('GET_USERS_LIST');
                }
            }).catch(err => {
                return Promise.reject(err);
            });
        }
    },
    getters:{
        isAuth(state)
        {
            return state.token;
        },
        getErrors(state)
        {
            return state.errors;
        },
        getUpdateErrors(state)
        {
            return state.updateErrors;
        },
        credentialsValidity(state)
        {
            return state.isCredentialValid;
        },
        getUserData(state)
        {
            return state.user;
        },
        userList(state)
        {
            return state.userList;
        }
    }
});

export default UserStore;