<template>
  <div class="login-container">
    <div class="video-container">
      <div :style="fixStyle" class="filter"></div>
      <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
        <source :src="PATH_TO_MP4" type="video/mp4"/>
        浏览器不支持 video 标签，建议升级浏览器。
        <source :src="PATH_TO_WEBM" type="video/webm"/>
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="poster hidden" v-if="!vedioCanPlay">
        <img :style="fixStyle" :src="PATH_TO_JPEG" alt="">
      </div>
      <div class="model-group">
        <el-form ref="accountForm" :model="accountForm" :rules="accountRules" class="demo-ruleForm" label-position="left">
          <el-form-item class="inputClass" prop="userName">

          <el-input type="text" prefix-icon="iconfont icon-icon" name="userName" v-model="accountForm.userName"
                    placeholder="用户名">
          </el-input>
          </el-form-item>
          <el-form-item class="inputClass" prop="password">

          <el-input type="text" prefix-icon="iconfont icon-mima" name="password" v-model="accountForm.password"
                    placeholder="密码">
          </el-input>
          
          </el-form-item>
          <!-- <el-form-item class="inputClass" prop="email">
        
          <el-input type="text" prefix-icon="iconfont icon-youxiang" name="email" v-model="accountForm.email"
                    placeholder="邮箱">
          </el-input>
         
          </el-form-item>
          <el-form-item class="inputClass" prop="phone">
      
          <el-input type="text" prefix-icon="iconfont icon-dianhua" name="phone" v-model="accountForm.phone"
                    placeholder="电话">
          </el-input>
          
          </el-form-item>
          <el-form-item class="inputClass" prop="identity">
        
          <el-input type="text" prefix-icon="iconfont icon-shenfenzheng" name="identity" v-model="accountForm.identity"
                    placeholder="身份证号">
          </el-input>
          
          </el-form-item> -->
        <!-- 注册按钮 -->
        <el-form-item class="inputClass">
          <div class="reClass" style="display: inline-block">
            <a @click="handleLogin">注册</a>
          </div>
          <div class="reClass" style="display: inline-block; margin-left:30px;">
            <a @click="handleLogin">登录</a>
          </div>
        </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import '../../common/iconfont/iconfont.css';
  import {checkSpecialWord, checkIdentityNumber, checkPhone, checkEmailAddress} from '../../common/validate/validateFun.js'
  export default {
    name: 'login',
    data() {
      // const validateUsername = (rule, value, callback) => {
      //   if (!isvalidUsername(value)) {
      //     callback(new Error('Please enter the correct user name'))
      //   } else {
      //     callback()
      //   }
      // }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      return {
        vedioCanPlay: false,
        fixStyle: '',
        PATH_TO_MP4: require('./file/The-mirage.mp4'),
        PATH_TO_WEBM: require('./file/The-mirage.webm'),
        PATH_TO_JPEG: require('./file/The-mirage.jpg'),
        loading: false,
        accountForm: {},
        accountRules: {
          userName: [
            { required: true, trigger: 'blur', validator: checkSpecialWord },
            {max: 50, message: '最多输入50个字符', trigger: 'blur'},
          ],
          password: [{require: true, trigger: 'blur', validator: validatePassword}],
          email: [
            {require: true, trigger: 'blur', validator: checkEmailAddress}
            ],
          phone: [
            {require: true, trigger: 'blur', validator: checkPhone}
            ],
          identity: [
            {require: true, trigger: 'blur', validator: checkIdentityNumber}
            ],
        }
      }
    },
    methods: {
      canplay() {
        this.vedioCanPlay = true
      },
      handleLogin () {
        this.$refs.accountForm.validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store.dispatch('LoginByUsername', this.accountForm).then(() => {
              this.loading = false;
              this.$router.push({path: '/'});
              // this.$router.push({path: '/layout'});
            }).catch((err) => {
              console.log(err);
              this.loading = false;
              // 模拟通过，实际情况是异常处理
              // this.$store.commit('SET_TOKEN', '123456');
              // this.$router.push({path: '/layout'});
              // this.$router.push({path: '/'});
            });
          }
        })
      }
    },
    mounted: function() {
      var that = this;
      window.onresize = () => {
        const windowWidth = document.body.clientWidth
        const windowHeight = document.body.clientHeight
        const windowAspectRatio = windowHeight / windowWidth
        let videoWidth
        let videoHeight
        if (windowAspectRatio < 0.5625) {
          videoWidth = windowWidth
          videoHeight = videoWidth * 0.5625
          that.fixStyle = {
            height: windowWidth * 0.5625 + 'px',
            width: windowWidth + 'px',
            'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
            'margin-left': 'initial',
            'backgroundSize': 'cover'
          }
        } else {
          videoHeight = windowHeight
          videoWidth = videoHeight / 0.5625
          that.fixStyle = {
            height: windowHeight + 'px',
            width: windowHeight / 0.5625 + 'px',
            'margin-left': (windowWidth - videoWidth) / 2 + 'px',
            'margin-bottom': 'initial',
            'backgroundSize': 'cover'
          }
        }
      }
      window.onresize();
    }
  }
</script>
<style scoped>
  .login-container,
  .video-container {
    position: relative;
    height: 98vh;
    overflow: hidden;
  }

  .video-container .poster img,
  .video-container video {
    z-index: 0;
    position: absolute;
  }

  .video-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
  }
  .model-group {
    margin-top: 10vh;
  }
  .inputClass {
    z-index: 10;
    position: relative;
    height: 40px;
    width: 400px;
    font-size: 15px;
    /*border: 1px solid;*/
    /*border-radius: 20px;*/
    margin: 15px auto;
    /*color: darkgray;*/
    color: tan;
  }
  .userSpan {
    /*1.导入背景图*/
    background-image: url("./file/user.png");
    background-color: transparent;
    background-repeat: no-repeat;
    position: absolute;
    left: 20px;
    top: 8px;
    /*设置背景所在的容器的大小*/
    width: 25px;
    height: 25px;
    /*设置背景的起始位置*/
    /*
     * 注意：
     *      取图像右边的内容，坐标 0 - x
     *      取图像下边的内容，坐标 0 - y
     *
    ️ */
    /*background-position: -125px 0px;*/
  }

  /*精灵图*/
  .passwordSpan {
    /*1.导入背景图*/
    background-image: url(./file/password.png);
    background-color: transparent;
    background-repeat: no-repeat;
    position: absolute;
    left: 20px;
    top: 8px;
    /*设置背景所在的容器的大小*/
    width: 25px;
    height: 25px;
    /*设置背景的起始位置*/
    /*
     * 注意：
     *      取图像右边的内容，坐标 0 - x
     *      取图像下边的内容，坐标 0 - y
     *
    ️ */
    /*background-position: -125px -34px;*/
  }

  /*精灵图*/
  .emailSpan {
    /*1.导入背景图*/
    background-image: url(./file/email.png);
    background-color: transparent;
    background-repeat: no-repeat;
    position: absolute;
    left: 20px;
    top: 8px;
    /*设置背景所在的容器的大小*/
    width: 25px;
    height: 25px;
    /*设置背景的起始位置*/
    /*
     * 注意：
     *      取图像右边的内容，坐标 0 - x
     *      取图像下边的内容，坐标 0 - y
     *
    ️ */
    /*background-position: -85px 0px;*/
  }

  /*精灵图*/
  .phoneSpan {
    /*1.导入背景图*/
    background-image: url(./file/phone.png);
    background-color: transparent;
    background-repeat: no-repeat;
    position: absolute;
    left: 20px;
    top: 8px;
    /*设置背景所在的容器的大小*/
    width: 25px;
    height: 25px;
    /*设置背景的起始位置*/
    /*
     * 注意：
     *      取图像右边的内容，坐标 0 - x
     *      取图像下边的内容，坐标 0 - y
     *
    ️ */
    /*background-position: -85px -115px;*/
  }

  /*精灵图*/
  .identitySpan {
    /*1.导入背景图*/
    background-image: url(./file/identity.png);
    background-color: transparent;
    background-repeat: no-repeat;
    position: absolute;
    left: 20px;
    top: 8px;
    /*设置背景所在的容器的大小*/
    width: 25px;
    height: 25px;
    /*设置背景的起始位置*/
    /*
     * 注意（容器不变，数据是图片移动的方向和大小）：
     *      取图像右边的内容，坐标 0 - x
     *      取图像下边的内容，坐标 0 - y
     *
    ️ */
    /*background-position: -85px -32px;*/
  }
  .inputClass span:first-child {
    position: absolute;
    font-size: 15px;
    top: 9px;
    left:43px;
    padding-left: 10px;
  }

  .reClass {
    position: relative;
    /*border: 1px solid darkgray;*/
    border: 1px solid tan;
    /*background-color: rgb(0,255,255);*/
    /*background-color: #bd884017;*/
    background-color: #966a0838;
    /*width: 250px;*/
    /*margin: auto;*/
    /*height: 50px;*/
    width: 180px;
    margin: auto;
    height: 40px;
    border-radius: 40px;
    text-align: center;
  }
  .reClass a {
    /*去除下划线*/
    text-decoration: none;
    color: white;
    font-size: 20px;
    line-height: 40px;
  }

  .adClass {
    position: relative;
    /*background-image: url(../img/logo.png);*/
    width: 620px;
    height: 114px;
    margin-top: 20px;
    margin: auto;
  }
  .iconfontClass {
    margin: auto 8px;
    font-size: 25px;
  }
</style>
<style>
  .inputClass .el-input__inner {
    -webkit-appearance: none;
    background-color: transparent;
    background-image: none;
    border-radius: 20px;
    border: 1px solid tan;
    /*border: 1px solid darkgray;*/
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /* color: #606266; */
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 40px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  .inputClass .el-input__prefix {
    left: 5px;
    -webkit-transition: all .3s;
    transition: all .3s;
    margin: -1px 8px auto;
    font-size: 25px;
  }
</style>
