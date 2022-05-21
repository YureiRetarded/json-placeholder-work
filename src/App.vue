<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "@/components/Navbar"
import axios from 'axios'
export default{
  components:{
    Navbar
  },
  data(){
    return{
      posts:[],
      comments:[],
      photos:[],
      albums:[],
      todos:[]
    }
  },
  methods:{
    async fetchPosts(){
      try{
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.posts = responce
      }
      catch(e){
        alert(e)
      }

    },
    async fetchComments(){
      try{
        const responce = await axios.get('https://jsonplaceholder.typicode.com/comments')
        this.comments = responce
      }
      catch(e){
        alert(e)
      }

    },
    async fetchPhotos(){
      try{
        const responce = await axios.get('https://jsonplaceholder.typicode.com/photos')
        this.photos = responce
      }
      catch(e){
        alert(e)
      }

    },
    async fetchAlbums(){
      try{
        const responce = await axios.get('https://jsonplaceholder.typicode.com/albums')
        this.albums = responce
      }
      catch(e){
        alert(e)
      }

    },
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
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  
}

</style>
