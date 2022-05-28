<template>
<div class="container">
    <div class="row g-3" >
        <photo
            v-for="photo in photos"
            :photo="photo"
            :key="photo.id"
        />
    </div>
</div>
    
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