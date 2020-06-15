<template>
<div :style="bg">
<div id="login" >     
         <form class="form-horizontal">
            <h1>后台登录页面</h1>        
            <div class="form-group">
                <label class="control-label col-sm-3">用户名：</label>
                <div class="col-sm-12">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2">密码：</label>
                <div class="col-sm-12">
                    <input type="text" class="form-control" >
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-12">
                    <button type="button" class="btn btn-primary form-control">登录</button>
                </div>
            </div>
        </form>
    </div>
</div>
    
</template>
<style  scoped>
#login{
    width: 500px;
    margin: 0 auto;
    border: 1px solid #d9d9d9;
    border-top: 5px solid #4d7496;
}
h1{
    margin: 20px 0;
    margin-left: 127px;
}
.btn{
     margin-top: 25px;
}
</style>
<script>
export default {
    // 添加背景图
    data(){
        return{
            bg:{
                // backgroundImage: "url(" + require("../assets/image/bg.jpg") + ")",
            }
        }
    }
}
</script>