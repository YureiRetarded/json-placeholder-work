<template>
    <to-do
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
    />
</template>
<script>
import ToDo from '@/components/ToDo'
export default {
    components:{
        ToDo
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