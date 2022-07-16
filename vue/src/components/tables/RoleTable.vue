<template>
    <div class="card">
        <div class="card-body">
                <h3>Role List</h3>
                <hr />
                <div class=" table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr v-for="(data) in getRoles" :key="data.id">
                                <td>{{data.role_name}}</td>
                                 <td>{{data.description}}</td>
                                 <td style="display:flex">
                                  <Edit :data="data" />
                                    <Delete :role_id="data.id" />
                                   
                                 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
</template>
<script>
import RoleStore from './../../statemanagement/RoleStore';
import Delete from '../buttons/Roles/Delete.vue';
import Edit from '../buttons/Roles/Edit.vue';

export default {
    components:{
        Delete,
        Edit
    },
    mounted()
    {
       
       RoleStore.dispatch("getRoles");
    },
    computed:{
        getRoles()
        {
            return RoleStore.getters.showRoles;
        }
    }
}
</script>