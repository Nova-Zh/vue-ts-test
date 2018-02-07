import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const debug: boolean = process.env.NODE_ENV !== 'production'

// 根信息
// import root from './root'

const VuexStore = new Vuex.Store({
  /**
   * 此处注册的modules默认为第一级模块，无法被动态卸载
   */
  modules: {
    // root
  },
  strict: debug
})
export default VuexStore
