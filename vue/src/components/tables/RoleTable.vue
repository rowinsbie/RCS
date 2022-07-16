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
                                 <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
</template>
<script>
import RoleStore from './../../statemanagement/RoleStore';
export default {
    
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