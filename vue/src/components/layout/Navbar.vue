<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="#">RCS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="homepage">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="users">Users</router-link>
        </li>
        <li class="nav-item">
                  <router-link class="nav-link" to="roles">Roles</router-link>

        </li>
        <li class="nav-item">
         <LogOut />
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import LogOut from './../buttons/LogOut.vue';
export default {
    components:{
        LogOut
    },
   mounted()
   {
    console.log("yesh")
   }
}
</script>