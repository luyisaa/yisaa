import router from './router';
import store from './vuex';
import { Message } from 'element-ui';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from "./utils/auth";

NProgress.configure({ minimum: 0.1, showSpinner: true});

  function haspermission(roles, permissionRoles) {
    if(roles.indexOf('admin') >= 0) return true;  // admin permission passed directly
    if(!permissionRoles) return true;
    return roles.some(role => permissionRoles.indexOf(role) >= 0);
  };
 const whiteList = ['/login', '/authredirect']; // no redirect whitelist
 router.beforeEach((to, from, next) => {
   NProgress.start()
   if(getToken()) {
     if (to.path === '/login') {
       next({path: '/dashboard'})
       NProgress.done();
     } else {
       if (store.getters.roles.length === 0) {   // 判断当前用户是否已拉取完用户信息user_info;
         store.dispatch('GetUserInfo').then((res) => {  // 拉取user_info信息
            const roles = res.data.roles;   // note: roles must be a array! such as: ['editor','develop']
            store.dispatch('GenerateRoutes', { roles }).then(res => {   // 获取当前角色的路由信息，根据roles权限获取当前用户可访问的路由表
              router.addRoutes(store.getters.addRouters);  // 动态添加路由表
              next({...to, replace: true})  // hack方法，确保addRoutes已完成，set the replace: true so the navigation will not leave a history record
            })
         }).catch(err => {
           store.dispatch('FedLogOut').then(res => {
             Message.error(err || '登录失败，请重新登录')
             next({path: '/login'});
           })
         })
       } else {
         // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
          if(haspermission(store.getters.roles, to.meta.roles)) {
            next()
          } else {
            next({path: '/401', replace: true, query: { noGoBack: true }})
          }
         // 可删 ↑
       }
     }
   } else {
      // next()
     if (whiteList.indexOf(to.path) !== -1) {   // 在免登陆白名单，直接进入
       next();
     } else {
        next({path: '/login'});  // 否则全部重定向到登录页
        NProgress.done();  // if current page is login will not trigger afterEach hook, so manually handle it
     }
   }
 });

 router.afterEach(() => {
   NProgress.done();
 })



