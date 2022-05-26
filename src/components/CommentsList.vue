<template>
    
    <div class="container">
        <div class="row row-cols-1 gy-3">
        <comment 
        v-for="comment in comments"
        :comment="comment"
        :key="comment.id"
    />
    </div>
    </div>
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