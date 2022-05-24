<template>
    <posts-list :posts="posts"/>
</template>
<script>
import axios from 'axios'
import PostsList from '@/components/PostsList'
export default {
    components:{
        PostsList
    },
    data(){
        return{
            posts:[]
        }
    },
    methods:{
        async fetchPosts(){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts')
                this.posts = responce.data
            }
            catch(e){
            alert(e)
            }

        }
    },
    mounted(){
        this.fetchPosts();
    }
}
</script>
<style>
    
</style>