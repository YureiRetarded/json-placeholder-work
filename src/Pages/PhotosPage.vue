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
            photos:[]
        }
    },
    methods:{
       async fetchPhotos(){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/photos')
                this.photos = responce
            }
            catch(e){
                alert(e)
            }

        }
    }
}
</script>
<style>
    
</style>