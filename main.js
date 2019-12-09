import Vue from 'vue'
import App from './App'
import store from './store'

import api from './api/api.js'
import httpRequest from './common/request.js'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$httpRequest = httpRequest
Vue.prototype.$api = api

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
