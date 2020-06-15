<template>
<div>
    <el-breadcrumb separator='>'>
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>
             <a href="#/menu">菜单列表</a>
         </el-breadcrumb-item>
          <el-breadcrumb-item> 菜单添加</el-breadcrumb-item>
    </el-breadcrumb>  
    <el-form 
    :model="info" 
    label-width="100px" 
    :rules="rules"
    ref="menuForm">
        <el-form-item label="菜单名称" prop="title">
            <el-input type="text" v-model="info.title"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" prop="pid">
            <el-select v-model="info.pid" placeholder="请选择">
                <el-option value="">请选择</el-option>
                <el-option value="0" label="顶级菜单">顶级菜单</el-option>
                <el-option value="1" label="系统设置">系统设置</el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="菜单图标">
            <el-input v-model="info.icon"></el-input>
        </el-form-item>
         <el-form-item label="菜单地址">
            <el-input v-model="info.address"></el-input>
        </el-form-item>
        <el-form-item label="状态">
            <el-switch v-model="info.status"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitInfo('menuForm')">提交</el-button>
            <el-button type="primary" @click="$router.push('/menu')">返回</el-button>
        </el-form-item>
        </el-form>
     
</div>
        
</template>
<script>
export default {
    data(){
        return{
             info:{
                title:'',
                pid:'',
                icon:'',
                address:'',
                status:true
            }, 
            rules:{
                title:[
                    {required:true,message:"菜单名称不能为空",trigger:'blur'},
                    { min:1,max:20,message:'菜单名称长度不符合要求' }
                ],
                pid:[
                    {
                        required:true,message:"请选择上级菜单"
                    }
                ]
            }       
        }   
    },
    methods:{
        submitInfo(formName){
            this.$refs[formName].validate((valid)=>{
                if(valid){
                    console.log(this.info);                                    
                }
            })

        }
    }
}
</script>
<style  scoped>

.el-input{
    width:50%;
    float: left;
}
.el-form{
    text-align: left;
}
</style>