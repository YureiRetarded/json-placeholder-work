<template>
  <navbar class="navbar"></navbar>
  <div class="content">
    <router-view></router-view>
  </div>
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
.navbar{
  position: fixed;
  top: 0;
  width: 100%;
}
.content{
  margin-top: 60px;
}


</style>
