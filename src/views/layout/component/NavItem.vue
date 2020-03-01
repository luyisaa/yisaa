<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleClickHandle" :isActive="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <screenfull class="screenfull"></screenfull>
  </el-menu>
</template>
<script>
  import { mapGetters } from 'vuex';
  import Breadcrumb from '@/components/Breadcrumb';
  import Hamburger from '@/components/Hamburger';
  import Screenfull from '@/components/screenfull'
  export default {
    components: {
      Breadcrumb,
      Hamburger,
      Screenfull
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'name',
        'avatar'
      ])
    },
    methods: {
      toggleClickHandle() {
        this.$store.dispatch('toggleSidebar');
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .navbar{
    width: 100%;
    height 50px
    line-height 50px
    display inline-block
    .hamburger-container{
      line-height: 58px
      height: 50px
      float: left
      padding: 0 10px
    }
    .screenfull{
      float right
      right 50px
      line-height: 58px
      height: 50px
      width:50px
    }
  }

</style>
