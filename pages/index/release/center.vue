<template>
  <view></view>
</template>

<script>
  export default {
    data () {
      return {
        time: 0
      }
    },
    onTabItemTap(item) {
      let token= uni.getStorageSync('token')
      if(this.time % 2 !== 0) {
        uni.switchTab({
          url: '../index'
        })
      } else if(!token && this.time % 2 === 0) {
        uni.reLaunch({
          url: '../../login/login'
        })
      } else {
        uni.reLaunch({
          url: 'release'
        })
      }
      this.time += 1
    }
  }
</script>

<style lang="scss" scoped>

</style>
