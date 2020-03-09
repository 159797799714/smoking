<template>
  <view class="p-30 content">
    <view class="search">
      <input type="text" value="" class="ipt t-c f-28 col-f" placeholder="请输入感兴趣的文章话题" placeholder-style="color: #ccc; "/>
      <text class="fr t-c text f-30 col-c">搜索</text>
    </view>
    <view>
      <text class="col-c f-32">你可能感兴趣的话题</text>
      <text class="fr f-28 col-f0f">换一批</text>
    </view>
    <view class="topic">
      <view v-for="(item, index) in themes" :key="index" class="topic-item t-c">
        <view class="topic-img">
          <image :src="item.image" mode=""></image>
        </view>
        <view class="m-t-20 f-26 col-c">{{item.name}}</view>
        <view class="m-t-10 f-22 col-9 onelist-hidden">{{item.subtitle}}</view>
        <view class="m-t-15 t-c">
          <text :class="{'add-btn col-f f-28 t-c': true, 'b-90f': item.is_mytheme === 'yes', 'b-9': item.is_mytheme === 'no'}" @click="controlAction(index)">{{item.is_mytheme === 'yes'? '已添加': '添加'}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default{
    data() {
      return {
        themes: ''
      }
    },
    onLoad() {
      this.getThemesList()
    },
    methods: {
      getThemesList() {
        let that= this,
          params= {
            url: that.$api.themeList
          }
        that.$httpRequest(params).then(res => {
          that.themes= res.data.themes
        })
      },
      
      controlAction(index) {
        let that= this,
          isAdd= that.themes[index].is_mytheme === 'yes',
          params= {
            url: isAdd?that.$api.cancleMyTheme: that.$api.addMyTheme,
            data: {
              category_id: that.themes[index].category_id
            }
          }
        that.$httpRequest(params).then(res => {
          if(isAdd) {
            that.themes[index].is_mytheme = 'no'
          } else {
            that.themes[index].is_mytheme = 'yes'
          }
        })
      }
      
    }
  }
  
</script>

<style lang="scss" scoped>
  .content{
    line-height: 1;
    .search{
      padding: 15upx 0 50upx 0;
      .ipt{
        display: inline-block;
        height: 66upx;
        width: calc(100% - 80upx);
        background-color: #333;
      }
      .text{
        width: 80upx;
        line-height: 66upx;
      }
    }
    .topic{
      margin-top: 55upx;
      .topic-item{
        display: inline-block;
        width: 33%;
        margin-bottom: 45upx;
        .topic-img{
          display: inline-block;
          height: 90upx;
          width: 90upx;
          border-radius: 100%;
          overflow: hidden;
          &>image{
            height: 100%;
            width: 100%;
          }
        }
        .add-btn{
          display: inline-block;
          width: 107upx;
          line-height: 40upx;
          border-radius: 20upx;
        }
      }
    }
  }
</style>
