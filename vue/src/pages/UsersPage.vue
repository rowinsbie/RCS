<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mt-4">
                <add-user />
            </div>
        </div>
    </div>
</template>
<script>
import AddUser from '../components/forms/AddUser.vue';
export default {
    components:{
        AddUser
    }
}
</script>