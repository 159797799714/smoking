<template>
  <view class="topBar" :style="{'padding-top': statusBarHeight + 'px' }">
    <view v-if="!isindex" class="p-re title t-c col-f" :style="{'font-size': fontSize + 'px'}">
      <text v-if="title">{{title}}</text>
      <view class="title-cover">
        <slot />
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      isindex: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      },
    },
    data () {
      return {
        
      }
    },
    computed: {
      statusBarHeight () {
        return this.$store.state.statusBarHeight
      },
      fontSize () {
        return this.$store.state.fontSize
      }
    },
    methods: {
      goBack() {
        uni.navigateBack({
          delta: 1
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title{
    height: 44px;
    &>text{
      line-height: 44px;
    }
  }
  .title-cover{
    position: absolute;
    top: 0;
    left: 0;
    line-height: 44px;
  }
</style>
