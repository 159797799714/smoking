import store from '../store/index.js'
import API from '../api/config.js'
import NeedLoginApi from '../api/needLoginApi.js'

// let isLogin= store.state.isLogin        // 是否已经在登录中
export default function(obj) {
  // let isDefault= token ? token === '6d96b9408fe75c9da42fd4d1b9582993': true;  // 是否是默认账号
  
  let token=  uni.getStorageSync('token'),
    isneed= NeedLoginApi.indexOf(obj.url) !== -1      // url是否需要登录才能
  // 不需要登录的接口设置默认token
  if(!isneed && !token) {
    token= 'cd3f5492377469fe601f173dwewe'
  }
  let params = {
    'wxapp_id': '10001',
    token: token
  }
  let data ={...obj.data, ...params}
  let httpDefaultData = {
    url: API.conductApi + obj.url,
    data: data,
    method: obj.method? obj.method : 'GET',
    header: obj.header? obj.header : {'content-type': 'application/json; charset=UTF-8', 'Access-Control-Allow-Origin': '*'}
  }
  let promise = new Promise(function(resolve, reject) {
    uni.request(httpDefaultData).then(
      (res) => {
        uni.hideLoading()
        let result = res[1]
        if(result.data.code === -1) {
          // 未登录或者登陆失效，重定向到登陆)
          console.log('xxxxs', !store.state.isLogin)
          if(!store.state.isLogin) {
            store.commit('redirectLoginPage', {status: true})
            uni.navigateTo({
              url: '/pages/login/login'
            })  
          }
          return
        } else if(result.data.code === 0 && result.data.msg) {
          uni.showToast({
            title: result.data.msg,
            icon: 'none'
          })
        } else {
          resolve(result.data)
        }
      }
    ).catch(
      (err) => {
        uni.hideLoading()
        reject(err)
      }
    )
  })
  return promise
}
