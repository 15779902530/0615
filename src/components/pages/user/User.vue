<template>
<div>
    <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
     <el-button type="primary" @click="$router.push('/user/add')">添加</el-button>  
     <el-table
    :data="users"
    border>
    <el-table-column
      prop="username"
      label="账号">
    </el-table-column>
    <el-table-column
      prop="pwd"
      label="密码">
    </el-table-column>
    <el-table-column
      label="是否为管理员">
      <template slot-scope="item">
         <el-switch v-model="item.row.status" active-text="是" inactive-text="否"></el-switch>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template>
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
    </el-table-column>
  </el-table>
</div>
  
</template>
  
<script>
export default {
    methods:{
        toInfo(uid){
            // this.$router.push("/index/user/"+uid)
            this.$router.push({
                name:"yonghu",
                params:{uid}
            })
        },
    },
    data(){
        return{
            users:[{
                    id:10001,
                    username:'yy',
                    pwd:'123456',
                    status:true
                },
                {
                    id:10002,
                    username:'xx',
                    pwd:'654321',
                    status:false
                },
                {
                    id:10003,
                    username:'zz',
                    status:true,
                    pwd:'987654'
                }]
        }
    }
}
</script>
<style scoped>
.add{
    float: left;
}

</style>