<template>
    <div class="container">
         <post
        v-for="post in posts"
        :post="post"
        :key="post.id"
    />
    </div>
   
</template>
<script>
import Post from '@/components/Post'
export default {
    components:{
        Post
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