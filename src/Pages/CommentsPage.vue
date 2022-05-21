<template>
    <comments-list :comments="comments"/>
</template>
<script>
import axios from 'axios'
import CommentsList from "@/components/CommentsList"
export default {
    components:{
        CommentsList
    },
    data(){
        return{
            comments:[]
        }
    },
    methods:{
        async fetchComments(){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/comments')
                this.comments = responce.data
            }
            catch(e){
                alert(e)
            }

        }
    },
    mounted(){
        this.fetchComments();
    }
}
</script>
<style>
    
</style>