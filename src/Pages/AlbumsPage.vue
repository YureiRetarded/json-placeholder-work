<template>
    <albums-list :albums="albums"/>
</template>
<script>
import AlbumsList from "@/components/AlbumsList"
export default {
    components:{
        AlbumsList
    },
    data(){
        return{
            
        }
    },
    props:{
        albums:{
            type:Array,
            required:true
        }
    }
}
</script>
<style>
    
</style>