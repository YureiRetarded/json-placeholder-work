<template>
    <div class="comment__wrapper">
        <div class="comment__data">
            <div class="comment__title">{{comment.name}}</div>
            <div class="comment__body">{{comment.body}}</div>
        </div>
        <div class="comment__user">{{comment.email}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        comment:{
            type:Object,
            required:true
        }
    }
}
</script>
<style scoped>
    .comment__wrapper{
        color: #CDD1C4;
        margin-bottom: 10px;
        padding: 10px;
        border: 3px solid #CDD1C4;
        border-radius: 5px;
        margin: 10px;
    }
    .comment__data{

    }
    .comment__title{
        font-size:30px;
    }
    .comment__body{
        margin-top: 5px;
        font-size:20px;
    }
    .comment__user{
        text-align: end;
        font-size: 20px;
    }
</style>