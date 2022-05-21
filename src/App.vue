<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "@/components/Navbar"
export default{
  components:{
    Navbar
  },
  data(){
    return{ 
     
      
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
