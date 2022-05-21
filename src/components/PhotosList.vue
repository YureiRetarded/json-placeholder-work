<template>
    <photo
    v-for="photo in photos"
    :photo="photo"
    :key="photo.id"
    />
</template>
<script>
import Photo from "@/components/Photo"
export default {
    components:{
        Photo
    },
    data(){
        return{
            
        }
    },
    props:{
        photos:{
            type:Array,
            required:true
        }
    }
}
</script>
<style>
    
</style>