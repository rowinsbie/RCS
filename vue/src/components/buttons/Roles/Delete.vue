<template>
  <button type="button" v-on:click="deleteRole()" class="btn border">
    Delete
  </button>
</template>
<script>
import Swal from "sweetalert2";
import RoleStore from '../../../statemanagement/RoleStore';
export default {
  props:['role_id'],
  methods: {
    deleteRole() {
      Swal.fire({
        title: "Do you want to delete the role?",
        showDenyButton: true,
        confirmButtonText: "Yes, Delete",
        icon:"question"
      }).then((result) => {
       
        if (result.isConfirmed) {
          RoleStore.dispatch('deleteRole',this.role_id);

        } 
      });
    },
  },
};
</script>