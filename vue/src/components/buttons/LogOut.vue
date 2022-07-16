<template>
    <div>
        <button v-on:click="LogOut" class="btn btn-danger">Log Out</button>
    </div>
</template>
<script>
import UserStore from '../../statemanagement/UserStore';
export default {
   methods:{
        LogOut()
        {
            UserStore.dispatch('LOG_OUT');
        }
   }
}
</script>