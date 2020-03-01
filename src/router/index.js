import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login.vue'

Vue.use(Router)
/* Layout */
import Layout from '@/views/layout/Layout'


/** note: submenu only apppear when children.length>=1
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
 **/
export const staticRouter = [
  // {
  //   path: '/',
  //   redirect: {path: '/login'}
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/401',
    component: () => import('@/views/errorPages/401.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPages/404.vue'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboard.vue'),
        meta: {
          title: 'dashboard',
          icon: 'iconfont iconshouye1',
          noCache: true
        }
    }]
  }
];

export default new Router({
 scrollBehavior: () => ({y: 0}),
 routes: staticRouter
});

export const asyncRouterMap = [
  {
    path: '/Components',
    component: Layout,
    redirect: '/Components/Introduction',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'components',
      icon: 'iconfont iconapplications',
      noCache: true
    },
    children: [
      {
        path: 'Introduction',
        name: 'introduction',
        component: () => import('views/components/introduction/index.vue'),
        meta: {
          title: '简介',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'Permission',
        name: 'permission',
        component: () => import('views/components/authority/index.vue'),
        meta: {
          title: '权限',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'Icons',
        name: 'icons',
        component: () => import('views/components/icons/index.vue'),
        meta: {
          title: '图标',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'AvatarUpload',
        name: 'avatar_uploadS',
        component: () => import('views/components/avatarUpload/index.vue'),
        meta: {
          title: '上传头像',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'DropZone',
        name: 'drop_zone',
        component: () => import('views/components/dropZone/index.vue'),
        meta: {
          title: '拖拽上传',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'ImgViewDemo',
        name: 'img_view_Sdemo',
        component: () => import('views/components/imgViewDemo/index.vue'),
        meta: {
          title: '图像处理',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'Sticky',
        name: 'sticky',
        component: () => import('views/components/sticky/index.vue'),
        meta: {
          title: '固定',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'BackToTop',
        name: 'back_to_top',
        component: () => import('views/components/backToTop/index.vue'),
        meta: {
          title: '返回顶部',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'JsonEditor',
        name: 'json_editor',
        component: () => import('views/components/JsonEditor/index.vue'),
        meta: {
          title: 'JSON编辑器',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'Markdown',
        name: 'markdown',
        component: () => import('views/components/markdown/index.vue'),
        meta: {
          title: 'Markdown',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'Tinymce',
        name: 'tinymce',
        component: () => import('views/components/tinymce/index.vue'),
        meta: {
          title: '富文本编辑器',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'Mixins',
        name: 'mixins',
        component: () => import('views/components/mixins/index.vue'),
        meta: {
          title: '小组件',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'CountTo',
        name: 'count_to',
        component: () => import('views/components/countTo/index.vue'),
        meta: {
          title: '计算',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'Dndlist',
        name: 'dndlist',
        component: () => import('views/components/dndlist/index.vue'),
        meta: {
          title: '可拖拽列表',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      },
      {
        path: 'SplitPane',
        name: 'split_pane',
        component: () => import('views/components/splitPane/index.vue'),
        meta: {
          title: '分块',
          icon: 'iconfont iconyingyong2',
          roles: ['admin', 'editor'] // you can set roles in root nav
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];
