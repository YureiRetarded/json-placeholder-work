<template>
    <div 
    @click="$router.push('/PhotosPage/'+photo.id)"
    class="photo__wrapper">
        <img class="photo__small" :src="photo.thumbnailUrl">
        <div class="photo__title">{{photo.title}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        photo:{
            type:Object,
            required:true
        }
    }
}
</script>
<style scoped>
    .photo__wrapper{
        display: flex;
        border: 1px solid black;
        margin: 10px;
    }
    .photo__small{
        width: 150px;
        height: 150px;
    }
</style>