<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mt-4">
                <add-user />
            </div>
            <div class="col-lg-8 mt-4">
            <UserTable />
            </div>
        </div>
    </div>
</template>
<script>
import AddUser from '../components/forms/AddUser.vue';
import UserTable from '../components/tables/UserTable.vue';
export default {
    components:{
        AddUser,
        UserTable
    }
}
</script>