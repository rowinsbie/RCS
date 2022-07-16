<template>
    <div class="card">
        <div class="card-body">
            <h3>Add User</h3>
            <hr>
            <form method="POST">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" name="name" class="form-control" id="name" />
                </div>
                <div class="form-group mt-4">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" id="email" />
                </div>
                <div class="form-group mt-4">
                <label for="nominated">Nominated Password</label>
                <input type="password" name="password" class="form-control" id="password" />
                </div>
                   <div class="form-group mt-4">
                <label for="confirmed">Confirmed Password</label>
                <input type="password" name="confirmed_password" class="form-control" id="confirmed_password" />
                </div>
                <div class="form-group mt-4">
                    <select name="role" id="role" class="form-control">
                        <option value="">Select Role</option>
                    </select>
                </div>
                 <div class="form-group mt-4">
                    <button class="form-control btn btn-primary">Create User</button>
                 </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>