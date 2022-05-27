<template>
    <div class="container">
        <div class="row row-cols-1 gy-3">
            <post
                v-for="post in posts"
                :post="post"
                :key="post.id"
            />
        </div>
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
<style scoped>
    
</style>