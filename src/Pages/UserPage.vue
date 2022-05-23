<template>
    <div>
        {{user}}
    </div>
</template>
<script>
import axios from 'axios'
export default {
 components:{
        
    },
    data(){
        return{
            user_id:0,
            user:[]
        }
    },
    methods:{
        async fetchUser(userId){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/users?id='+userId)
                this.user = responce.data
            }
            catch(e){
                alert(e)
            }

        }
    },
    created(){
        this.user_id=this.$route.params.id
        this.fetchUser(this.user_id);
    } 
}
</script>
<style>
    
</style>