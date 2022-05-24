<template>
    <div>
        <div class="photo__title">{{photo.title}}</div>
        <div class="photo__container">
             <img class="photo__image" :src="photo.url">
        </div>
       
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
    .photo__title {
        text-align: center;
        font-size: 50px;
    }
    .photo__container{
        display: flex;
        justify-content: center;
    }
    .photo__image {
        width: 600px;
        height: 600px;
    }
</style>