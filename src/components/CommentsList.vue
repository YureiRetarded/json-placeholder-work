<template>
    <comment 
        v-for="comment in comments"
        :comment="comment"
        :key="comment.id"
    />
</template>
<script>
import Comment from '@/components/Comment'
export default {
    components:{
        Comment
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