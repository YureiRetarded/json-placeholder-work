<template>
    <div class="col">
        <div @click="$router.push('/PhotosPage/'+photo.id)" class="card h-100 w-100" >
            <img :src="photo.thumbnailUrl" class="card-image-top">
            <div class="card-body">
                <h6 class="card-title">{{photo.title}}</h6>
            </div>
        </div>
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
<style scoped lang="scss">
.col{
    display: flex;
    justify-content: center;
}
.card{
    max-width: 13rem;
    min-width: 13rem;
}
</style>