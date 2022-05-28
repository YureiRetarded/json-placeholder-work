<template>
    <div class="container">
        <div class="photo__title"><h1>{{photo.title}}</h1></div>
        <img class="photo__image" :src="photo.url">
    </div>
</template>
<script>
import axios from 'axios'

export default {
    components:{
        
    },
    data(){
        return{
            photo:[]
        }
    },
    methods:{
       async fetchPhoto(photoId){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/photos?id='+photoId)
                this.photo = responce.data[0]
            }
            catch(e){
                alert(e)
            }
       }
    },
    created(){
        this.fetchPhoto(this.$route.params.id)
    }
}
</script>
<style scoped>
    .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>