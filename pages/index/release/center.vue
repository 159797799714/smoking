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
      if(this.time % 2 !== 0) {
        uni.switchTab({
          url: '../index'
        })
      } else {
        uni.reLaunch({
          url: 'release'
        })
      }
      this.time += 1
      console.log('进来了', this.time)
      // uni.switchTab({
      //   url: '../index'
      // })
    }
  }
</script>

<style lang="scss" scoped>

</style>
