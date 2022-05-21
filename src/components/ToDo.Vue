<template>
    <div>
        {{todo}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        todo:{
            type:Object,
            required:true
        }
    }
}
</script>
<style>
    
</style>