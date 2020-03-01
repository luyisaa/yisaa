<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in routerList" :key="item.path" v-if="item.meta.title">
        <!--<span>{{item.meta.title}}</span>-->
        <router-link :to="item.redirect || item.path">{{generateTitle(item.meta.title)}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script>
  import { generateTitle } from '@/utils/i18n';
  export default {
    name: 'breadcrumb',
    data() {
      return {
        routerList: null
      }
    },
    watch: {
      // $route:  'getBreadcrumb'
      $route() {
        this.getBreadcrumb();
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      generateTitle,
      getBreadcrumb () {
        let matched = this.$route.matched.filter(item => item.name);
        if (matched.length > 0 && matched[0] && matched[0].name != 'dashboard') {
          matched = [{path: '/dashboard', meta: {title: 'dashboard'}}].concat(matched);
        }
        this.routerList = matched;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;

  }
</style>
