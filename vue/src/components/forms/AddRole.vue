<template>
    <div class="card">
        <div class="card-body">
            <h3>Add Role </h3>
            <hr>
            <form method="POST">
                <div class="form-group">
                <label for="role">Role </label>
                    <input v-model="role_name" type="text" id="role_name" name="role_name" class="form-control" />
                    <span class="text-danger" v-if="getErrors.role_name">{{getErrors['role_name'][0]}}</span>
                </div>
                <div class="form-group">
                <label for="desc">Description</label>
                    <textarea v-model="description" name="desc" id="desc" class="form-control" cols="30" rows="5"></textarea>
                                        <span class="text-danger" v-if="getErrors.description">{{getErrors['description'][0]}}</span>

                </div>
                <div class="form-group mt-3">
                    <button v-on:click="createRole()" class="btn btn-primary form-control" type="button">Add Role</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import RoleStore from '../../statemanagement/RoleStore';
export default {
    data() {
        return {
            
                role_name:null,
                description:null,
            
        }
    },
    methods:{
        createRole()
        {
            RoleStore.dispatch('createNewRole',{
                role_name:this.role_name,
                description:this.description
            });
        },
       
    },
     computed:{
            getErrors()
            {
                return RoleStore.getters.getErrors;
            }
        }
}
</script>