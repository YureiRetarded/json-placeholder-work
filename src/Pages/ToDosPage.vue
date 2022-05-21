<template>
    <to-dos-list :todos="todos"/>
</template>
<script>
import ToDosList from "@/components/ToDosList"
export default {
    components:{
        ToDosList
    },
    data(){
        return{
            
        }
    },
    props:{
        todos:{
            type:Array,
            required:true
        }
    }
}
</script>
<style>
    
</style>