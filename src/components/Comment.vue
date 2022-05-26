<template>
    <div class="col">
        <div class="card">
             <div class="card-header">{{comment.email}}</div>
            <div class="card-body">
                <h5 class="card-title">{{comment.name}}</h5>
                <p class="card-text">{{comment.body}}</p>
                
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
        comment:{
            type:Object,
            required:true
        }
    }
}
</script>
<style scoped>
</style>