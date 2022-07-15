<script>
import Navbar from './components/layout/Navbar.vue';
import UserStore from './statemanagement/UserStore';
export default {
  components:{
    Navbar
  },
  computed:{
    isLoggedIn()
    {
      return UserStore.getters.isAuth;
    }
  }
}
</script>

<template>
<div>
<Navbar v-if="isLoggedIn" />
  <router-view></router-view>
</div>
</template>

<style>

</style>
