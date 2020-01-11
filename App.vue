<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
      // #ifdef APP-PLUS
      // 锁定屏幕方向
      plus.screen.lockOrientation('portrait-primary') //锁定
      //#endif
      
      let that = this
      // 获取设备状态栏高度
      
      uni.getSystemInfo({
        success: function (res) {
          that.$store.commit('setHeight', res)
        }
      })
      
      // 商家判断0为普通用户 1为商家
      let is_merchant= uni.getStorageSync('is_merchant')
      console.log(is_merchant)
      if(is_merchant > 0) {
        uni.reLaunch({
          url: '/pages/partner/index'
        })
      }
		},
		onShow: function() {
			// 步数授权，记录步数
      uni.authorize({
        scope: 'scope.werun',
        success(res) {
          wx.getWeRunData({
            success (res) {
              // 拿 encryptedData 到开发者后台解密开放数据
              const encryptedData = res.encryptedData
              // 或拿 cloudID 通过云调用直接获取开放数据
              const iv = res.iv
              uni.setStorage({key: 'encryptedData',data: encryptedData})
              uni.setStorage({key: 'iv',data: iv})
            }
          })
        }
      })
		},
		onHide: function() {
			console.log('App Hide')
		},
    onTabItemTap: function(e) {
      var san = e.index
      console.log('点击了底部', san)
    }
	}
</script>

<style>
  page{
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #131313;
   }
</style>
