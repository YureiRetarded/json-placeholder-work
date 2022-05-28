<template>
    <div class="container">
        <div class="title"><h1>{{album_data.title}}</h1></div>
    </div>
    <div class="container">
        <photos-list :photos="photos"/>
    </div>
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
           photos:[],
           album_data:{}
        }
    },
    methods:{
        async fetchPhotos(album_id){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId='+album_id)
                this.photos = responce.data
            }
            catch(e){
                alert(e)
            }

        },
        async fetchAlbum(album_id){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/albums?id='+album_id)
                this.album_data = responce.data[0]
            }
            catch(e){
                alert(e)
            }

        }
    },
    created(){
        this.fetchPhotos(this.$route.params.id);
        this.fetchAlbum(this.$route.params.id);
    }
}
</script>
<style scoped lang="scss">
    .title{
        text-align: center;
        margin-bottom: 40px;
    }
</style>