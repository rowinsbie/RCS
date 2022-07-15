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
          <router-link class="nav-link" to="users">Users</router-link>
        </li>
        <li class="nav-item">
                  <router-link class="nav-link" to="users">Roles</router-link>

        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
   mounted()
   {
    console.log("yesh")
   }
}
</script>