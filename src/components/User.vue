<template>
    <div class="col">
        <div class="card">
            <div @click="$router.push('/UsersPage/'+user.id)" class="card-body">
                <h4 class="card-title post-title">{{user.name}}</h4>
                <h6 class="sub-title user-name" >{{user.email}}</h6>
                <h6 class="sub-title user-name" >{{user.phone}}</h6>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        user:{
            type:Object,
            required:true
        }
    }
}
</script>
<style scoped>
    .card{
        cursor: pointer;
    }
</style>