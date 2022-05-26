<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    <div class="container">
        <div class="navbar-brand" @click="$router.push('/')">
            <img src="@/assets/logo.svg" width="30" height="30">
        </div>
        <div class=" navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <div @click="$router.push('/PostsPage')" class="nav-link active">Posts</div>
        </li>
        <li class="nav-item">
          <div @click="$router.push('/UsersPage')" class="nav-link active">Users</div>
        </li>
      </ul>
    </div>
    </div>
</nav>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped >
.navbar-brand{
    cursor: pointer;
    
}
.nav-item{
        cursor: pointer;
}
</style>