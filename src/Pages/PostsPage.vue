<template>
    <post-list :posts="posts"/>
</template>
<script>
import PostsList from '@/components/PostsList'
export default {
    components:{
        PostsList
    },
    data(){
        return{
            
        }
    },
    props:{
        posts:{
            type:Array,
            required:true
        }
    }
}
</script>
<style>
    
</style>