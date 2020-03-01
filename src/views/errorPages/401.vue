<template>
  <div class="error-container">
    <el-butten @click="back" icon='arrow-left' class="pan-back-btn">返回</el-butten>
    <el-row>
      <el-col span="12">
        <h1 class="text-jumbo text-jinormous">Oops!</h1>
        图片来源<a href="https://zh.airbnb.com/" target="_blank">airbnb</a> 页面
        <h2>你没有权限访问该页面</h2>
        <h6>如有疑问请联系管理人员</h6>
        <ul class="list-unstyle">
          <li>或者你可以去</li>
          <li class="link-type">
            <router-link to="/dashboard">首页</router-link>
          </li>
          <li class="link-type"><a href="http://element-cn.eleme.io/">随便看看</a></li>
          <li><a @click.prevent="dialogVisible=true" href="#">点我看图</a></li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
    <el-dialog title="随便看" :visible.sync="dialogVisible">
      <img class="pan-img" :src="ewizardClap">
    </el-dialog>
  </div>
</template>
<script>
  import errGif from '@/assets/401_images/401.gif'
  export default {
    name: '401',
    data() {
      return {
        dialogVisible: false,
        errGif: errGif + '?' + new Date(),
        ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646'
      }
    },
    methods: {
      back() {
        if (this.$route.query.noGoBack) {
          this.router.push({path: '/dashboard'})
        } else {
          this.$router.go(-1);
        }
      }
    }
  }
</script>
<style rel="stylesheet/css" lang="scss" scoped>
  .error-container {
    width: 800px;
    margin: 100px auto;
    .pan-back-btn {
      background: #008489;
      color: #fff;
      border: none !important;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
