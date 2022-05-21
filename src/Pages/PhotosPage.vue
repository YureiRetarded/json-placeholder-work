<template>
    <photos-list :photos="photos"/>
</template>
<script>
import PhotosList from '@/components/PhotosList'
export default {
    components:{
        PhotosList
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