<template>
  <div class="card">
    <div class="card-body">
    <h2>Sign In</h2>
    <hr>
      <form method="POST" >
        <div class="form-group mt-3">
        <label for="email">Email</label>
            <input type="email" id="email" name="email" class="form-control" />
        </div>
          <div class="form-group mt-3">
        <label for="password">Password</label>
            <input type="password" id="password" name="password" class="form-control" />
        </div>
          <div class="form-group mt-3">
           <button class="btn btn-primary form-control" type="button">Continue</button>
        </div>
    </form>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>