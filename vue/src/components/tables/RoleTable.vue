<template>
    <div class="card">
        <div class="card-body">
                <h3>Role List</h3>
                <hr />

        </div>
    </div>
</template>
<script>
import RoleStore from './../../statemanagement/RoleStore';
export default {
    setup() {
        
    },
    mounted()
    {
       RoleStore.dispatch("getRoles");
    }
}
</script>