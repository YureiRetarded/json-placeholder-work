<template>
    <albums-list :albums="albums"/>
</template>
<script>
import axios from 'axios'
import AlbumsList from "@/components/AlbumsList"
export default {
    components:{
        AlbumsList
    },
    data(){
        return{
           albums:[] 
        }
    },
    methods:{
        async fetchAlbums(){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/albums')
                this.albums = responce
            }
            catch(e){
                alert(e)
            }

        }
    },
    mounted(){
        this.fetchAlbums();
    }
}
</script>
<style>
    
</style>