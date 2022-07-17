<script  lang="ts">
import UserStore from "../statemanagement/UserStore";
import UserCard from '../components/user/UserCard.vue';
export default {
  components:{
    UserCard
  },
  mounted() {
    UserStore.dispatch("GET_USER");
  },
  computed: {
    UserData() {
      return UserStore.getters.getUserData;
    },
  },
};
</script>

<template>
<div class="container">
  <div class="row">
    <div class="col-lg-4">
      <UserCard class="mt-4" :user="UserData" />
    </div>
  </div>
</div>
</template>

<style scoped>
</style>
