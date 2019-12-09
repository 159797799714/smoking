import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    type: '',
    mobile: '',
    token: '',
    statusBarHeight: 20,    // 状态栏高度
    windowHeight: '',       // 屏幕高度,
    fontSize: 16,           // 默认系统字体大小
  },
  mutations: {
    login(state, userinfo) {
      state.mobile = userinfo.mobile;
      state.token = userinfo.token;
    },
    loginout(state) {
      state.mobile = '';
      state.token = '';
    },
    setToken(state, token) {
      state.token = token
    },
    setHeight(state, res) {
      state.statusBarHeight = res.statusBarHeight
      state.windowHeight = res.windowHeight
      state.fontSize = res.fontSizeSetting
    }
  }
})

export default store
