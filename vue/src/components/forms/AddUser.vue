<template>
    <div class="card">
        <div class="card-body">
            <h3>Add User</h3>
            <hr>
            <form method="POST">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" v-model="fullname" name="fullname" class="form-control" id="fullname" />
                <span class="text-danger" v-if="errors.fullname">{{errors.fullname[0]}}</span>
                </div>
                <div class="form-group mt-4">
                <label for="email">Email</label>
                <input v-model="email" type="email" name="email" class="form-control" id="email" />
                                <span class="text-danger" v-if="errors.email">{{errors.email[0]}}</span>

                </div>
                <div class="form-group mt-4">
                <label for="nominated">Nominated Password</label>
                <input v-model="nominated_password" type="password" name="nominated_password" class="form-control" id="nominated_password" />
                <span class="text-danger" v-if="errors.nominated_password">{{errors.nominated_password[0]}}</span>

                </div>
                   <div class="form-group mt-4">
                <label for="confirmed">Confirmed Password</label>
                <input v-model="confirmed_password" type="password" name="confirmed_password" class="form-control" id="confirmed_password" />
                <span class="text-danger" v-if="errors.confirmed_password">{{errors.confirmed_password[0]}}</span>

                </div>
                <div class="form-group mt-4">
                    <select v-model="role_id" name="role" id="role" class="form-control">
                        <option value="">Select Role</option>
                        <option v-for="(data) in roleList" :key="data.id" :value="data.id" >
                            {{data.role_name}}
                        </option>
                    </select>
                <span class="text-danger" v-if="errors.role_id">{{errors.role_id[0]}}</span>

                </div>
                 <div class="form-group mt-4">
                    <button type="button" @click="CreateUser()" class="form-control btn btn-primary">Create User</button>
                 </div>
            </form>
        </div>
    </div>
</template>
<script>
import RoleStore from './../../statemanagement/RoleStore';
import UserStore from './../../statemanagement/UserStore';

export default {
    data()
    {
        return {
            fullname:null,
            email:null,
            nominated_password:null,
            confirmed_password:null,
            role_id:null
        }
    },
    methods:{
        CreateUser()
        {
            UserStore.dispatch('CREATE_USER',{
                fullname:this.fullname,
                email:this.email,
                nominated_password:this.nominated_password,
                confirmed_password:this.confirmed_password,
                role_id:this.role_id
            });
        }
    },
    mounted()
    {
        RoleStore.dispatch('getRoles');
    },
    computed:{
        roleList()
        {
            return RoleStore.getters.showRoles;
        },
        errors()
        {
            return UserStore.getters.getErrors;
        }
    }
}
</script>