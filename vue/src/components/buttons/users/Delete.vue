<template>
  <button type="button" v-on:click="deleteUser()" class="btn border">
    Delete
  </button>
</template>
<script>
import Swal from "sweetalert2";
import UserStore from '../../../statemanagement/UserStore';
export default {
  props:['user_id'],
  methods: {
    deleteUser() {
      Swal.fire({
        title: "Do you want to delete the User?",
        showDenyButton: true,
        confirmButtonText: "Yes, Delete",
        icon:"question"
      }).then((result) => {
       
        if (result.isConfirmed) {
          UserStore.dispatch('DELETE_USER',this.user_id);

        } 
      });
    },
  },
};
</script>