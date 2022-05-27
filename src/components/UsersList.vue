<template>
    <div class="container">
        <div class="row row-cols-1 gy-3">
        <user v-for="user in users"
        :user="user"
        :key="user.id"
        />
    </div>
    </div>
</template>
<script>
import User from "@/components/User"
export default {
    components:{
        User
    },
    props:{
        users:{
            type:Array,
            required:true
        }
    }
}
</script>
<style>
    
</style>