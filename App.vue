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
          console.log(res)
          that.$store.commit('setHeight', res)
          // .statusBarHeight
        }
      })
		},
		onShow: function() {
			console.log('App Show')
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
