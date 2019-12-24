import store from '../store/index.js'
import API from '../api/config.js'

export default function(obj) {
  let params = {
    'wxapp_id': '10001',
    // token: store.state.token
    token: 'cd3f5492377469fe601f173dwewe'
  }
  let data ={...obj.data, ...params}
  let httpDefaultData = {
    url: API.conductApi + obj.url,
    data: data,
    method: obj.method? obj.method : 'GET',
    header: obj.header? obj.header : {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Access-Control-Allow-Origin': '*'}
  }
  let promise = new Promise(function(resolve, reject) {
    uni.request(httpDefaultData).then(
      (res) => {
        let result = res[1]
        if(result.data.code === -1) {
          // 未登录或者登陆失效，重定向到登陆
          uni.reLaunch({
            url: '@/page/login/login'
          })
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
      (response) => {
        reject(response)
      }
    )
  })
  return promise
}
