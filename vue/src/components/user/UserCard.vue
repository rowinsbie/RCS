<template>
    <div class="card">
        <div class="card-body">
        <h2>User Information</h2>
        <hr>
            <div>
            <span>Name</span>
            <h4>{{user.fullname}}</h4>
            </div>
             <div>
            <span>Email</span>
            <h4>{{user.email}}</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['user']
}
</script>