<template>
  <div>
    <vue-final-modal
         :attach="false"

      v-model="showModal"
      name="edit"
    >
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
                      id="role_name"
                      name="role_name"
                      class="form-control"
                      :placeholder="data.role_name"
                      v-model="role_name"
                    />
                    <span class="text-danger" v-if="errors.role_name">{{errors.role_name[0]}}</span>
                  </div>
                   <div class="form-group mt-4">
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      class="form-control"
                       :placeholder="data.description"
                       v-model="description"
                    ></textarea>
                    <span class="text-danger" v-if="errors.description">{{errors.description[0]}}</span>

                  </div>
                  <div class="form-group">
                    <button type="button" @click="updateRole()" class="btn btn-primary">Update</button>
                    <button class="btn border" @click="close()" type="button">Cancel</button>
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
import RoleStore from '../../../statemanagement/RoleStore';
export default {
  components: {
    VueFinalModal,
    ModalsContainer,
  },
  props: ["data"],
  data() {
    return {
      showModal: false,
      role_name:null,
      description:null
    };
  },
  methods: {
    updateRole()
    {
        RoleStore.dispatch('updateRole',{
            id:this.data.id,
            role_name:this.role_name,
            description:this.description
        });
        this.close();
    },
    openEdit() {
      $vfm.show("edit");
    },
    close()
    {
$vfm.hide("edit");
    }
  },
  computed:{
    errors()
    {
      return RoleStore.getters.getUpdateErrors;
    }
  }
};
</script>