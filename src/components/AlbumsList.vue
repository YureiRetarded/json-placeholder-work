<template>
    <div class="list-group">
      <album 
        v-for="album in albums"
        :album="album"
        :key="album.id"
    />
    </div>
</template>
<script>
import Album from '@/components/Album'
export default {
    components:{
        Album
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
<style scoped lang="scss">
    
</style>