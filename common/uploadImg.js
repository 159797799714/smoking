import store from '../store/index.js'
import API from '../api/config.js'

export default function(imgInfo) {
  let params = {
    'wxapp_id': '10001',
    // token: store.state.token
    token: 'cd3f5492377469fe601f173dwewe'
  }
  let promise = new Promise(function(resolve, reject) {
    uni.uploadFile({
      url: API.conductApi + 'ax.upload/image', //仅为示例，非真实的接口地址
      filePath: imgInfo,
      name: 'iFile',
      formData: params,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
  return promise
}
