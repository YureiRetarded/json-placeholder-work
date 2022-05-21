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
            todos:[]
        }
    },
    methods:{
        async fetchTodos(){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/todos')
                this.todos = responce
            }
            catch(e){
                alert(e)
            }

        }
    }
}
</script>
<style>
    
</style>