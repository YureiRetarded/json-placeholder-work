<template>
  <navbar class="navbar"></navbar>
  <div class="container content">
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
.content{
  margin-top: 70px;
}


</style>
