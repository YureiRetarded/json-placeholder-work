<template>
    <div class="album__wrapper">
        <div
        @click="$router.push('/AlbumsPage/'+album.id)" 
        class="album__title">{{album.title}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        album:{
            type:Object,
            required:true
        }
    }
}
</script>
<style scoped>
.album__wrapper{
 
}
.album__title{
    font-size: 30px;
    color: #CDD1C4;
    cursor: pointer;
    display: inline-block;
}
</style>