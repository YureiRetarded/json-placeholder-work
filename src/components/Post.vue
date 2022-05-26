<template>
    <!-- <div class="row"> -->
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h4 @click="$router.push('/PostsPage/'+post.id)" class="card-title post-title">{{post.title}}</h4>
                    <h6 @click="$router.push('/UsersPage/'+post.userId)" class="sub-title user-name" >{{user_name}}</h6>
                    <div class="card-text">{{post.body}}</div>
                </div>
            </div>
        </div>
    <!-- </div> -->
    
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
<style scoped lang="scss">
    .post-title{
        cursor: pointer;
            transition: 0.5s;
            &:hover{
                color: #000;
            }
    }
    .user-name{
        cursor: pointer;
        transition: 0.5s;
        &:hover{
            color: #000;
        }
    }
</style>