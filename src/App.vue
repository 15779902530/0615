<template>
    <div id="app"> 
       <router-view></router-view>      
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'App',
}
</script>

<style>
    *{
        margin:0;padding:0;
    }
    html,body,#app{
        width:100%;
        height:100%;
    }
    .el-breadcrumb{
        margin-bottom:20px;
    }
</style>


