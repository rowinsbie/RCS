<template>
  <div class="card">
    <div class="card-body">
    <h2>Sign In </h2>
    <hr>
      <form method="POST" >
        <div class="form-group mt-3">
        <label for="email">Email</label>
            <input v-model="credentials.email" type="email" id="email" name="email" class="form-control" />
        </div>
          <div class="form-group mt-3">
        <label for="password">Password</label>
            <input v-model="credentials.password" type="password" id="password" name="password" class="form-control" />
        </div>
          <div class="form-group mt-3">
           <button v-on:click="SIGN_IN()" class="btn btn-primary form-control" type="button">Continue</button>
        </div>
        <div v-if="!isCredentialsCorrect" class="form-group mt-4 text-center">
              <span class="badge bg-danger">Email or Password is incorrect</span>
        </div>
    </form>
    </div>
  </div>
</template>
<script>
import UserStore from '../../statemanagement/UserStore';
export default {
  data()
  {
    return {
      credentials:{
        email:null,
        password:null
      },
      
    }
  },
    methods:{
        SIGN_IN()
        {
          UserStore.dispatch('AUTHENTICATE',this.credentials);
        }
    },
    computed:{
      isLoggedIn()
      {
        return UserStore.getters.isAuth;
      },
      isCredentialsCorrect()
      {
        return UserStore.getters.credentialsValidity;
      }
    }
}
</script>