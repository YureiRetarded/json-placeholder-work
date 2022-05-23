<template>
    <div class="post__wrapper">
        <div class="post__data">
            <div class="post__title"
            @click="$router.push('/PostsPage/'+post.id)"
            >{{post.title}}</div>
            <div class="post__body">{{post.body}}</div>
        </div>
        <div class="post__user">{{user_name}}</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            user_name:''
        }
    },
    props:{
        post:{
            type:Object,
            required:true
        }
    },
    methods:{
        async fetchUserName(userid){
            try{
                let PathString='https://jsonplaceholder.typicode.com/users?id='
                PathString=PathString+userid
                const responce = await axios.get(PathString)
                let user=responce.data
                this.user_name=user[0].name
            }
            catch{
                this.user_name='user not found'
            }
            
        }
    },
    created(){
        this.fetchUserName(this.post.userId)
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
        cursor: pointer;
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