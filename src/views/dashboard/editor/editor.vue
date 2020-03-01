<template>
  <div class="dashboard-editor-container">
    <div class="clearfix">
      <pan-thumb style="float: left" :image="avatar">你的权限
        <span class="pan-thumb-info" v-for="item in roles" :key="item">{{item}}</span>
      </pan-thumb>
      <github></github>
      <div class="info-container">
        <span class="display-name">{{name}}</span>
        <span class="second-name">普通编辑dashboard</span>
      </div>
    </div>
    <div>
      <img class="empty-gif" :src="emptyGif"/>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import PanThumb from '@/components/Panthumb/index.vue'
  import Github from '@/components/Github/index.vue'

  export default {
    name: 'editor-dashboard',
    components: {PanThumb, Github},
    data() {
      return {
        emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'avatar',
        'roles'
      ])
    }
  }
</script>
<style scoped lang="stylus">
  .dashboard-editor-container {
    background-color: #e3e3e3;
    /*width 100%;*/
    min-height 100vh
    margin-top -50px
    padding: 100px 60px 0
    .pan-thumb-info {
      font-size: 12px
      font-weight 700
      color: #333
      display block
    }
    .info-container {
      position relative
      margin-left: 190px;
      height: 150px
      line-height 200px
      .display-name {
        position absolute
        font-size 48px
        line-height 48px
        color: #212121
        top: 25px
      }
      .second-name {
        font-size 20px
        padding-top 20px
        display inline-block
      }
    }
    .empty-gif {
      width 45%
      display block
      margin 0 auto
    }
  }
</style>
