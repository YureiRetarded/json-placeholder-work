<template>
    <div class="col">
        <div @click="$router.push('/PhotosPage/'+photo.id)" class="card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img class="photo__small" :src="photo.thumbnailUrl">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        {{photo.title}}
                    </div>
                </div>
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
<style scoped>
</style>