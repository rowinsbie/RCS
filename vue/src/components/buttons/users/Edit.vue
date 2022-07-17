<template>
  <div>
    <vue-final-modal :attach="false" v-model="showModal" name="edit">
      <div class="container pt-5">
        <div class="row">
          <div class="col-lg-4 offset-md-4">
            <div class="card">
              <div class="card-body">
                <h3>Edit</h3>
                <hr />
                <form method="POST">
                  <div class="form-group">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      class="form-control"
                      :placeholder="data.fullname"
                      v-model="fullname"
                    />
                    <span class="text-danger" v-if="errors.fullname">{{
                      errors.fullname[0]
                    }}</span>
                  </div>
                  <div class="form-group mt-4">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                      :placeholder="data.email"
                      v-model="email"
                    />
                    <span class="text-danger" v-if="errors.email">{{
                      errors.email[0]
                    }}</span>
                  </div>
                  <div class="form-group mt-4">
                  <label for="role">Role</label>
                    <select
                      id="role_id"
                      name="role_id"
                      v-model="role_id"
                      class="form-control"
                    >
                      <option value="">Select Role</option>
                      <option
                        v-for="value in getRoles"
                        :key="value.id"
                        :value="value.id"
                      >
                        {{ value.role_name }}
                      </option>
                    </select>
                    <span class="text-danger" v-if="errors.role_id">{{
                      errors.role_id[0]
                    }}</span>
                  </div>
                  <div class="form-group mt-4">
                    <button
                      type="button"
                      @click="updateUser()"
                      class="btn btn-primary"
                    >
                      Update
                    </button>
                    <button class="btn border" @click="close()" type="button">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </vue-final-modal>
    <button class="btn btn-primary" @click="openEdit">Edit</button>
  </div>
</template>
<script>
import { $vfm, VueFinalModal, ModalsContainer } from "vue-final-modal";
import UserStore from "../../../statemanagement/UserStore";
import RoleStore from "../../../statemanagement/RoleStore";

export default {
  components: {
    VueFinalModal,
    ModalsContainer,
  },
  props: ["data"],
  data() {
    return {
      showModal: false,
      fullname: this.data.fullname,
      email: this.data.email,
      role_id: this.data.role_id,
    };
  },
  mounted() {
    RoleStore.dispatch("getRoles");
  },
  methods: {
    updateUser() {
      UserStore.dispatch("UPDATE_USER", {
        id: this.data.id,
        fullname: this.fullname,
        email: this.email,
        role_id: this.role_id,
      });
    },
    openEdit() {
      $vfm.show("edit");
    },
    close() {
      $vfm.hide("edit");
    },
  },
  computed: {
    errors() {
      return UserStore.getters.getUpdateErrors;
    },
    getRoles() {
      return RoleStore.getters.showRoles;
    },
  },
};
</script>