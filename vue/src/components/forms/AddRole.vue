<template>
    <div class="card">
        <div class="card-body">
            <h3>Add Role</h3>
            <hr>
            <form method="POST">
                <div class="form-group">
                <label for="role">Role</label>
                    <input type="text" id="role_name" name="role_name" class="form-control" />
                </div>
                <div class="form-group">
                <label for="desc">Description</label>
                    <textarea name="desc" id="desc" class="form-control" cols="30" rows="5"></textarea>
                </div>
                <div class="form-group mt-3">
                    <button class="btn btn-primary form-control" type="button">Add Role</button>
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