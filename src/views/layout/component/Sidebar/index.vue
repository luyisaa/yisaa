<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
    <side-bar-item v-for="route in permission_routers" :key="route.name" :item="route" :base-path="route.path"></side-bar-item>
    </el-menu>
  </el-scrollbar>
</template>
<script>
  import { mapGetters } from 'vuex';
  import SideBarItem from './SideBarItem';
export default {
  components: {
    SideBarItem
  },
  computed:{
    ...mapGetters([
    'permission_routers',
    'sidebar'
  ]),
    isCollapse () {
      return !this.sidebar.opened;
    }
  }
}
</script>
