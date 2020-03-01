<template>
  <div v-if="!item.hidden && item.children" class="side-wrapper">
    <router-link v-if="hasOneShowingChild(item.children) && !onlyOneChild.child && !item.alwaysShow" :to="resolvePath(onlyOneChild.path)">
      <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
        <i v-if="onlyOneChild.meta&&onlyOneChild.meta.icon" :class="onlyOneChild.meta.icon"></i>
        <span v-if="onlyOneChild.meta&&onlyOneChild.meta.title" slot="title">{{onlyOneChild.meta.title}}</span>
      </el-menu-item>
    </router-link>
    <el-submenu v-else :index="item.name || item.path">
      <template slot="title">
        <i v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></i>
        <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
      </template>
      <template v-for="child in item.children">
        <side-bar-item :is-nest="true" class="nest-menu" v-if="!child.hidden && child.children&&child.children.length>0" :key="child.name" :item="child" :base-path="resolvePath(child.path)"></side-bar-item>

        <router-link v-else :to="resolvePath(child.path)" :key="child.name">
          <el-menu-item :index="resolvePath(child.path)">
            <i v-if="!child.hidden&&child.meta&&child.meta.icon" :class="child.meta.icon"></i>
            <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
          </el-menu-item>
        </router-link>
      </template>
    </el-submenu>
  </div>
</template>
<script>
  import path from 'path';
  // import { generateTitle } from '@/utils/i18n'
  export default {
    name: 'sideBarItem',
    props: {
      // route object
      item: {
        type: Object,
        required: true
      },
      isNest: {
        type: Boolean,
        default: false
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        onlyOneChild: null
      }
    },
    methods: {
      // generateTitle,
      hasOneShowingChild (children) {
        // 过滤出需要展示（hidden=false）的菜单项
        const showingChildren = children.filter(child => {
          if(child.hidden) {
            return false;
          } else {
            this.onlyOneChild = child;
            return true;
          }
        });
        if (showingChildren.length === 1) return true;
        return false;
      },
      resolvePath(...paths) {
        return path.resolve(this.basePath, ...paths);
      }
    }
  }
</script>
<style scoped>

</style>
