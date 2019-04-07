<template>
    <div >
              
              
                <el-row>
                  <el-col :span="24"><div class="grid-content bg-purple-dark">
                          <el-breadcrumb separator="/">
                          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    
                    </div></el-col>
                </el-row>

                <el-row>
                  <el-col :span="8"><div class="grid1-content bg-purple fs">班级数量：10</div></el-col>
                  <el-col :span="8"><div class="grid1-content bg-purple-light fs">学生数量:10</div></el-col>
                  <el-col :span="8"><div class="grid1-content bg-purple fs">发布任务数量:10</div></el-col>
                </el-row>


                <h4 style="margin-top:50px;">教师数量</h4>
                <el-table
             
                  :data="tableData"
                  style="width: 100%"
                  :row-class-name="tableRowClassName" >
                  <el-table-column
                    prop="id"
                    label="用户id"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="iphon"
                    label="手机号">
                  </el-table-column>
                  <el-table-column
                    prop="act"
                    label="身份（超级管理员）">
                  </el-table-column>
                  <el-table-column
                    prop="date"
                    label="加入时间">
                  </el-table-column>
                  <el-table-column
                    prop="classnumber"
                    label="班级数量">
                  </el-table-column>
                   <el-table-column
                    prop="studynumber"
                    label="学生人数">
                  </el-table-column>
                     <el-table-column
                    prop="tasknumber"
                    label="任务数量">
                  </el-table-column>
                  
                  <el-table-column
                    prop="address"
                    label="地址">
                  </el-table-column>
                </el-table>
              <div class="ml">
             
              
                <el-row>
                <el-col :span="12"><div class="grid-content bg-purple "><a href="http://www.superblockly.com/create">Arduino编程</a></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light "><a href="https://www.superblockly.com/scratch3/index.html">Scratch编程</a></div></el-col>
              </el-row>
               <el-row>
                <el-col :span="12"><div class="grid-content bg-purple "><a href="http://www.superblockly.com/mpython/index.html">Python编程</a></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light "><a href="http://www.superblockly.com/coocoo">指令编程</a></div></el-col>
              </el-row>
             </div>
              
              
    </div>
</template>
<script>
 
       export default {
        methods: {
          tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
              return 'warning-row';
            } else if (rowIndex === 3) {
              return 'success-row';
            }
            return '';
          }
        },
    data() {
      return {
        tableData: [{
          id:'1',
          date: '2016-05-02',
          name: '奥松',
          iphon:'15045689455',
          act:'教师',
          address: '上海市普陀区金沙江路 1518 弄',
          classnumber:'6',
          tasknumber:'6',
          studynumber:'7'


        

        }, {
          id:'2',
          date: '2016-05-04',
          name: '王小虎',
           act:'超级管理员',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'3',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id:'4',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
<style scoped>
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
.el-row {
    margin-bottom: 20px;
    
  }
 .el-row:last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #eee;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #fff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    
  }
    .grid1-content {
    border-radius: 4px;
    min-height: 46px;
    
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-breadcrumb {
    line-height: 2.5;
    margin-left: 10px;
  }
  .fs{
    font-size: 18px;
    line-height: 2.5;
    color: #00a2ff;
    font-weight: bold;
    
  }
  h4{
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
    color: #00a2ff;
  }
  .ahref{
    width: 300px;
    height:300px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #00a2ff;
    display: block
}
.ml a{
  text-align: center;
}

</style>





