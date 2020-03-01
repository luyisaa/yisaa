const tagsView = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEWS: (state, view) => {
      if(state.visitedViews.some(item => item.path === view.path)) return;
      state.visitedViews.push(Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      }))
      if(!view.meta.noCache) {
        state.cachedViews.push(view.name)
      }
    },
    DELETE_VISITED_VIEWS: (state, view) => {
      // entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
      // 迭代对象中数组的索引值作为 key， 数组元素作为 value。
      // for...of 获取不了数组[ 'a', 'b', 'c' ]的index,这里巧妙的利用了数组的entries()方法给数组返回了一个map对象；其作用类似于forEach，forEach可以 arr.forEach((item, i) => {})
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1);
          break;
        }
      }
      for (const i in state.cachedViews) {
        if(i === view.name) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews.splice(index, 1);
          break;
        }
      }
    },
    DEL_OTHERS_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, i+1);
          break;
        }
      }
      for (const i in state.cachedViews) {
        if(i === view.name) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews.splice(index, i+1);
          break;
        }
      }
    },
    DEL_ALL_VIEWS: state => {
      state.visitedViews = [];
      state.cachedViews = [];
    }
  },
  actions: {
    addVisitedViews: ({ commit }, view) => {
      commit('ADD_VISITED_VIEWS', view);
    },
    delVisitedViews: ({ commit, state }, view) => {
      return new Promise((reslove) => {
        commit('DELETE_VISITED_VIEWS', view);
        reslove([...state.visitedViews]);
      })
    },
    delOthersViews: ({ commit, state}, view) => {
      return new Promise((resolve => {
        commit('DEL_OTHERS_VIEWS', view);
        resolve([...state.visitedViews]);
      }))
    },
    delAllViews: ({ commit, state}, view) => {
      return new Promise((resolve => {
        commit('DEL_ALL_VIEWS', view);
        resolve([...state.visitedViews])
      }))
    }
  }
}

export default tagsView;
