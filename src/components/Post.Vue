<template>
    <div class="post__wrapper">
        <div class="post__data">
            <div class="post__title">{{post.title}}</div>
            <div class="post__body">{{post.body}}</div>
        </div>
        <div class="post__user">Пользователь: {{post.userId}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        post:{
            type:Object,
            required:true
        }
    }
}
</script>
<style scoped>
    .post__wrapper{
        color: #CDD1C4;
        margin-bottom: 10px;
        padding: 10px;
        border: 3px solid #CDD1C4;
        border-radius: 5px;
        margin: 10px;
    }
    .post__data{

    }
    .post__title{
        font-size:40px;
    }
    .post__body{
        margin-top: 5px;
        font-size:30px;
    }
    .post__user{
        text-align: end;
        font-size: 20px;
    }
</style>