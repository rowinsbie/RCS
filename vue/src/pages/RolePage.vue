<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mt-4">
                <add-role />
            </div>
            <div class="col-lg-8 mt-5">
                    <RoleTable />
            </div>
        </div>
    </div>
</template>
<script>
import AddRole from '../components/forms/AddRole.vue';
import RoleTable from '../components/tables/RoleTable.vue';
export default {
    setup() {
        
    },
    components:{
        AddRole,
        RoleTable
    }
}
</script>