<template>
  <view class="my-grade">
    <view class="t-c f-44 f-w linear-word">Lv1</view>
    <view class="today-experience m-t-20">
      <view class="f-30 col-f">今日经验
        <text class="f-20 col-6"> (还有80经验可获得）</text>
      </view>
      <view class="progress">
        <view class="progress-color-item" :style="{'width': left + 'px'}"></view>
        <image src="../../static/img/tabbar/index1.png" mode="widthFix"  :style="{'left': left + 'px'}"/>
        <text class="progress-num f-24 col-f"  :style="{'left': left + 'px'}">20</text>
      </view>
    </view>
    
    <view class="more-power">
      <view class="f-30 col-f">经验明细</view>
      <view class="open-menu">
        <view v-for="(item, index) in menuList" :key="index" class="bar f-26 col-9">
          <text class="fl">{{item.name}}</text>
          <text>经验+{{item.num}}</text>
          <text :class="{'fr': true, 'col-f0f': item.doNum === item.shouldNum}">{{item.doNum}}/{{item.shouldNum}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        left: 100,
        menuList:[{
          name: '获得点赞',
          num: 10,
          doNum: 3,
          shouldNum: 3
        }, {
          name: '获得点赞',
          num: 10,
          doNum: 2,
          shouldNum: 4
        }, {
          name: '获得点赞',
          num: 20,
          doNum: 4,
          shouldNum: 4
        }]
      }
    }, 
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  .my-grade{
    height: 100%;
    width: 100%;
    padding: 26upx 30upx 0;
    box-sizing: border-box;
    line-height: 1;
  }
  .linear-word{
    font-family:MStiffHei PRC;
  }
  .today-experience{
    .progress{
      position: relative;
      margin: 40upx 30upx 0;
      width: calc(100% - 60upx);
      height: 11upx;
      border-radius: 4upx;
      border: 1px solid #9933ff;
      .progress-color-item{
        height: 100%;
        background:linear-gradient(-90deg,rgba(12,221,254,1),rgba(66,105,248,1),rgba(146,62,244,1),rgba(236,8,241,1));
      }
      .progress-num{
        position: absolute;
        bottom: -30upx;
        transform: translateX(-12upx);
      }
      &>image{
        position: absolute;
        padding: 0;
        top: -6upx;
        transform: translateX(-12upx);
        height: 25upx;
        width: 25upx;
      }
    }  
  }
  .more-power{
    margin-top: 90upx;
    .open-menu{
      padding: 22upx 60upx 0;
      .bar{
        height: 62upx;
        width: 100%;
        text-align: center;
        line-height: 62upx;
        border-bottom: 1px solid #333;
      }
    }
  }
</style>
