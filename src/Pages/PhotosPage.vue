<template>
    <photos-list :photos="photos"/>
</template>
<script>
import axios from 'axios'
import PhotosList from '@/components/PhotosList'
export default {
    components:{
        PhotosList
    },
    data(){
        return{
            photos:[]
        }
    },
    methods:{
       async fetchPhotos(){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/photos')
                this.photos = responce.data
            }
            catch(e){
                alert(e)
            }

        }
    },
    mounted(){
        this.fetchPhotos();
    }
}
</script>
<style>
    
</style>