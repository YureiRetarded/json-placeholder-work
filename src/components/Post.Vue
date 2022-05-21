<template>
    <div>
        {{post}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        post:{
            type:Object,
            required:true
        }
    }
}
</script>
<style>
    
</style>