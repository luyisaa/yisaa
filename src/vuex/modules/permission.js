import {staticRouter, asyncRouterMap} from '@/router';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPromission(roles, route){
  if(route.meta && route.meta.roles) {
    // some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
    // some() 方法会依次执行数组的每个元素：
    // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
    // 如果没有满足条件的元素，则返回false。
    return roles.some(role => route.meta.roles.indexOf(role) >= 0 )
  } else {
    return true;
  }
}

/**
* 递归过滤异步路由表，返回符合用户角色权限的路由表
* @param staticRouter
* @param roles
*/
function filterAsyncRouter(asyncRouterMap, roles) {
  // filter() 过滤出数组中所有符合条件的元素
  // filter()方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。
  const accessedRouter = asyncRouterMap.filter(route => {
    if (hasPromission(roles, route)) {
      if(route.children && route.children.length > 0) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  })
  return accessedRouter;
}

const permission = {
  state: {
    routers: staticRouter,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = staticRouter.concat(routers);
    }
  },
  actions: {
    GenerateRoutes: ({commit}, data) => {
      return new Promise(resolve => {
        const { roles } = data;
        let accessedRouter;
        if (roles.indexOf('admin') >= 0) {
          accessedRouter = asyncRouterMap;
        } else {
          accessedRouter = filterAsyncRouter(asyncRouterMap, roles);
        }
        commit('SET_ROUTERS', accessedRouter);
        resolve()
      })
    }
  }
}
export default permission;
