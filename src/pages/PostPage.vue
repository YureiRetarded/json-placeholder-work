<template>
    <div class="post__wrapper">
        <div class="post__data">
            <div class="post__title">{{post[0].title}}</div>
            <div class="post__body">{{post[0].body}}</div>
        </div>
        <div @click="$router.push('/UsersPage/'+user[0].id)" class="post__user">{{user[0].name}}</div>
    </div>
    <div>
        <comments-list :comments="comments"/>
    </div>
</template>
<script>
import axios from 'axios'
import CommentsList from '@/components/CommentsList'
export default {
 components:{
        CommentsList
    },
    data(){
        return{
            postId:'',
            post:[],
            user:[],
            comments:[],

        }
    },
    methods:{
        async fetchPost(postId){
            try{
                let responce = await axios.get('https://jsonplaceholder.typicode.com/posts?id='+postId)
                this.post = responce.data
                responce = await axios.get('https://jsonplaceholder.typicode.com/users?id='+this.post[0].userId)
                this.user= responce.data
            }
            catch(e){
                alert(e)
            }

        },
        async fetchUser(user_Id){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/users?id='+user_Id)
                this.user = responce.data
            }
            catch(e){
                alert(e)
            }
        },
        async fetchComments(postId){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/comments?postId='+postId)
                this.comments = responce.data
            }
            catch(e){
                alert(e)
            }
        }
    },
    created(){
        this.postId=this.$route.params.id
        this.fetchPost(this.postId);
        this.fetchComments(this.postId);
    } 
}
</script>
<style>
     .post__wrapper{
        color: #CDD1C4;
        margin-bottom: 10px;
        padding: 10px;
        margin: 10px;
        margin-bottom: 50px;
    }
    .post__data{

    }
    .post__title{
        font-size:40px;
        color: #000;
    }
    .post__body{
        margin-top: 5px;
        font-size:30px;
        color: #212529;
    }
    .post__user{
        text-align: end;
        font-size: 20px;
        color: #000;
        cursor: pointer;
    }
</style>