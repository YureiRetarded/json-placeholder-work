<template>
    <div class="user__wrapper" @click="$router.push('/UsersPage/'+user.id)">
        <div class="user__name">{{user.name}}</div>
        <div class="user__email">{{user.email}}</div>
        <div class="user__phone">{{user.phone}}</div>
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
    .user__wrapper{
        color: #CDD1C4;
        padding: 10px;
        border: 3px solid #CDD1C4;
        border-radius: 5px;
        margin: 10px;
        cursor: pointer;
    }
</style>