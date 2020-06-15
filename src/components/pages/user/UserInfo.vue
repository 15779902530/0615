<template>
<div>
    <h1>用户信息{{tip}}页面</h1>
    <el-breadcrumb separator='>'>
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>
             <a href="#/user">用户列表</a>
         </el-breadcrumb-item>
          <el-breadcrumb-item> 用户添加</el-breadcrumb-item>
    </el-breadcrumb> 
    <el-form  
    :model="info"
    :rules='rules'
    ref="userForm" 
    class="demo-ruleForm">
        <el-form-item label="账号" prop="name">
            <el-input type="text" v-model="info.name" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="phone">
            <el-input type="text" v-model="info.phone"></el-input>
        </el-form-item>
        <el-form-item label="是否设置为管理员">
            <el-switch v-model="info.status"></el-switch>
        </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="submitInfo('userForm')">提交</el-button>
            <el-button type="primary" @click="$router.push('/user')">返回</el-button>
        </el-form-item>
        </el-form>
</div>
        
</template>
<script>
export default {
    mounted(){  
        //用户编码  
        let uid=this.$route.params.uid;
        if(uid){
            this.tip="修改";
           this.info=this.users.find(item=>{         
            return item.id==uid;
            })
        }         
    },
    data(){
        return{
            tip:'添加',
             info:{
                name:'',
                pwd:'',
                status:true
            },
            rules:{
                name:[
                    {required:true,message:"用户名不能为空",trigger:'blur'}
                ],
                pwd:[{
                     required:true,message:"密码不能为空"
                }]
            }
           
        }
    },
    methods:{
        submitInfo(formName){
            this.$refs[formName].validate((valid)=>{
                 if(valid){
                                                      
                }
            })
        }
    }
}
</script>
<style  scoped>
h1{
    margin: 28px 0;
}
.el-input{
    width:50%;
    float: left;
}

</style>
