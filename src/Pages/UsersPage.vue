<template>
    <users-list :users="users"/>
</template>
<script>
import axios from 'axios'
import UsersList from "@/components/UsersList"
export default {
    components:{
        UsersList
    },
    data(){
        return{
            users:[]
        }
    },
    methods:{
        async fetchUsers(){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
                this.users = responce.data
            }
            catch(e){
                alert(e)
            }

        }
    },
    mounted(){
        this.fetchUsers();
    }
}
</script>
<style>
    
</style>