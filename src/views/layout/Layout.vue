<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <nav-item></nav-item>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
  import SideBar from './component/Sidebar';
  import AppMain from  './component/AppMain';
  import NavItem from './component/NavItem';
  import TagsView from  './component/TagsView';
  export default {
    name: 'layout',
    components: {
      SideBar,
      AppMain,
      NavItem,
      TagsView
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar;
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          // device: this.device === 'mobile'
        }
      }
    },
    methods: {
      handleClickOutside () {
        this.$store.dispatch('closeSidebar', {withoutAnimation: false})
      }
    }
  }
</script>
<style rel="stylesheet/css" lang="scss" scoped>
  @import "@/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    width: 100%;
    height: 100%;
    &.mobile.opfenSidebar {
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg{
    background: #ffffff;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    z-index: 0;
  }
</style>
