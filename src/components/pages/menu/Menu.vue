<template>
    <div>
      <!-- 面包屑导航 -->
     <el-breadcrumb separator='>'>
            <el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>菜单列表</el-breadcrumb-item>
        </el-breadcrumb>
      <el-button type="primary" @click="$router.push('/menu/add')">添加</el-button>  
        <el-table
          :data="menus"
          border
          stripe>
          <el-table-column
            prop="title"
            label="菜单名称">
          </el-table-column>
          <el-table-column
            prop="parentMenu"
            label="上级菜单">
          </el-table-column>
          <el-table-column
          prop="icon"
            label="菜单图标"> 
          </el-table-column>
          <el-table-column
            prop="address"
            label="菜单地址">
          </el-table-column>
            <el-table-column
            label="状态">
      <template slot-scope="item">
        <el-switch v-model="item.row.status"></el-switch>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="180">
        <template>
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
     </el-table-column>
   </el-table>
  </div>
</template>
<style  scoped>


</style>
<script>
export default {
    data(){
        return{
           menus:[
                {
                    title:'系统设置',
                    icon:<i class="el-icon-s-tools"></i>,
                    address:'',
                    parentmenu:'',
                    status:true
                },
                {
                    title:'菜单管理',
                    icon:'',
                    address:'/menu',
                    parentmenu:'系统设置',
                    status:true
                },
                {
                    title:'管理员管理',
                    icon:'',
                    address:'/user',
                    parentmenu:'系统设置',
                    status:false
                }
            ]
           
        }
    }
}
</script>
