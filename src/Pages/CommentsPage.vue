<template>
    <comments-list :comments="comments"/>
</template>
<script>
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
                this.comments = responce
            }
            catch(e){
                alert(e)
            }

        }
    }
}
</script>
<style>
    
</style>