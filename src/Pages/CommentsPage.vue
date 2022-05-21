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
            
        }
    },
    props:{
        comments:{
            type:Array,
            required:true
        }
    }
}
</script>
<style>
    
</style>