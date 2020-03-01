<template>
  <div :class="fullClass" @click="click">
    <span ><i :style="{fontSize:fontSize}" class="iconfont icon-color" :class="isFullscreen? 'iconsuoxiao':'iconfangda'"></i></span>
  </div>
</template>
<script>
  import screenfull from 'screenfull'
  export default {
    name: 'fff',
    props: {
      fullClass: {
        type:String,
        default: () => 'wrapper'
      },
      fontSize: {
        type:String,
        default: () => '16px'
      },
      color: {
        type:String,
        default: () => '#48576a'
      }
    },
    data() {
      return{
        isFullscreen: false
      }
    },
    methods:{
      click(){
        if (!screenfull.enabled) {
          this.$message({
            message: 'you browser can not work',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle()
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .wrapper{
    width: 100%
    height: 100%
    display inline-block
    cursor pointer
    .icon-color{
      color #48576a
      &:hover{
        color #6ca3ff
      }
    }

  }
</style>
