<template>
      <el-aside style="width:150px">
        <!--            
              active-text-color 导航菜单选中后文字颜色
              router            是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
              index             submenu的唯一标识
           -->
         <el-menu
            text-color="#fff"
            active-text-color="#ffd04b"
            background-color="#545c64"
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            router
        >
        <el-menu-item index='/home'>
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>首页</span>
        </template>
        </el-menu-item>
       <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/menu">菜单管理
          </el-menu-item>
          <el-menu-item index="/user">用户管理
          </el-menu-item>
        </el-menu-item-group>      
      </el-submenu>  
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data(){
    return{
      defaultActive:""
    }
  },
  mounted(){
     //页面加载时，控住左侧菜单选中效果
     //把当前路由中的meta的自定义属性赋值给默认选中变量
      this.defaultActive=this.$route.meta.select;   
  },
  watch:{
    $route(newVal){
      this.defaultActive=newVal.meta.select
    }
  }
}
</script>

<style scoped>
  .el-aside {
    background-color: #545c64;
  }
 .el-submenu .el-menu-item{
    min-width: 148px;
}
</style>