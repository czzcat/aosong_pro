<template>
  <div class="home" :style="{height:hei-23+'px'}">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <div class="logo"></div> 
       
        <el-menu
        
          default-active="2"
           :router="true"
          :collapse="isCollapse"
          class="el-menu-admin"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
           <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">课堂首页</span>
           </el-menu-item>
           <el-menu-item index="/classMan">
              <i class="el-icon-menu"></i>
              <span slot="title">班级管理</span>
           </el-menu-item>
           <el-menu-item index="/teacherMan">
              <i class="el-icon-menu"></i>
              <span slot="title">教师管理</span>
           </el-menu-item>
           <el-menu-item index="/studyMan">
              <i class="el-icon-menu"></i>
              <span slot="title">学生管理</span>
           </el-menu-item>
           <el-menu-item index="/taskMan">
              <i class="el-icon-menu"></i>
              <span slot="title">任务管理</span>
           </el-menu-item>
           <el-menu-item index="/resources">
              <i class="el-icon-menu"></i>
              <span slot="title">课程资源</span>
           </el-menu-item>
           <el-menu-item index="/database">
              <i class="el-icon-menu"></i>
              <span slot="title">资料库</span>
           </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>

        <!-- header部分 -->
        <el-header>
          <i class="myicon myicon-menu toggle-btn" @click="toggleCollapse"></i>
          <div class="system-title">云教室后台管理系统</div>
          <div>
            <span class="welcome">
              您好，xxx
            </span>
           
           <el-button type="text" @click="logout">退出</el-button>
          </div>
        </el-header>

        <!-- 中间内容部分 -->
       
         <el-main>
            <router-view></router-view>
         </el-main>
                        
                    
        
      </el-container>
    </el-container>

  </div>
</template>
<script>

export default {
  data () {

    return {
       hei:'',
      isCollapse: false,
      }
  },

  methods: {
    
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    logout () {
      // 清除登录状态，即保存在localStorage中的token
      localStorage.removeItem('mytoken')
      // 跳转到登录页面
      this.$router.push({name: 'login'})
    }
   },
    created(){
      this.hei=  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        console.log(this.hei)

     }
  // mounted () {
  //   let params = {params: {query: '', pagenum: 1, pagesize: 1}}
  //   getUserList(params).then(res => {
  //     console.log(res)
  //   })
  // }
}
</script>
<style lang="scss" scoped>

 .home {

  height: 100%;
  // background-color: #E5E5E5;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64  !important;
  }
  .el-menu-admin el-menu{
    background-color:none;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height:60px;
    background: url(../assets/logo.png);
    background-size: cover;
    
    background-color: white;
  }
  .toggle-btn {
    padding: 0 10px;
    margin-left: -20px;
    font-size: 36px;
    line-height: 60px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #00635a;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome, {
    color: white;
  }
}


</style>

