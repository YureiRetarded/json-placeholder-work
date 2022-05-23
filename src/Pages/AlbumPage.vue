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
        async fetchPhotos(album_id){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId='+album_id)
                this.photos = responce
            }
            catch(e){
                alert(e)
            }

        }
    },
    created(){
        this.fetchPhotos(this.$route.params.id);
    }
}
</script>
<style>
    
</style>