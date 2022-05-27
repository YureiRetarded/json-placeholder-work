<template>
    <button
        type="button" 
        class="list-group-item list-group-item-action">
        <div
        @click="$router.push('/AlbumsPage/'+album.id)" 
        class="album__title">{{album.title}}
        </div>
    </button >
    
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
.album__title{
    font-size: 30px;
    color: #000;
    cursor: pointer;
    display: inline-block;
}
</style>