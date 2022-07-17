<template>
    <div class="card">
        <div class="card-body">
                <h3>User List </h3>
                <hr />
                <div class=" table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr v-for="(data) in UserList" :key="data.id">
                                <td>{{data.fullname}}</td>
                                 <td>{{data.email}}</td>
                                 <td style="display:flex">
                                  
                                   
                                 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
</template>
<script>

import UserStore from './../../statemanagement/UserStore';
export default {
    components:{
       
    },
    mounted()
    {
       UserStore.dispatch('GET_USERS_LIST');
       
    },
    computed:{
        UserList()
        {
            return UserStore.getters.userList;
        }
    }
}
</script>