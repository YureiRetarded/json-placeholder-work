<template>
    <div>
        <user v-for="user in users"
        :user="user"
        :key="user.id"
        />
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