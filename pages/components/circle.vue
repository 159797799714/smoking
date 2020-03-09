<template>
  <view class="qiun-columns">
    <view class="qiun-title-bar qiun-common-mt">
    </view>
    <view class="qiun-charts">
      <canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
    </view>
  </view>
</template>

<script>
  import uCharts from './u-charts/u-charts.js';
  var _self;
  var canvaRing = null;

  export default {
    props: {
      Ring: {
        type: Object,
        default: () => {
          return  {
            series: []
          }
        }
      }
    },
    data() {
      return {
        cWidth: '',
        cHeight: '',
        pixelRatio: 1,
        serverData: '',
      }
    },
    watch: {
      Ring: {
        deep: true,
        handler: function () {
          this.getServerData()
        }
      }
    },
    beforeMount() {
      _self = this;
      this.cWidth = uni.upx2px(690);
      this.cHeight = uni.upx2px(600);
    },
    methods: {
      getServerData() {
        console.log(_self.Ring)
        //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
        let Ring=  _self.Ring
        Ring.series = _self.Ring.series;
        _self.showRing("canvasRing", Ring)
      },
      showRing(canvasId, chartData) {
        canvaRing = new uCharts({
          $this: _self,
          canvasId: canvasId,
          type: 'ring',
          fontSize: 11,
          legend:{
            show: true,
            fontColor: '#999'
          },
          title: {
            name: '满20减20券',
            color: '#9900ff',
            fontSize: 17 * _self.pixelRatio,
            offsetY: -1 * _self.pixelRatio,
          },
          subtitle: {
            name: '10%',
            color: '#9900ff',
            fontSize: 17 * _self.pixelRatio,
            offsetY: 1 * _self.pixelRatio,
          },
          extra: {
            pie: {
              offsetAngle: -45,
              ringWidth: 28 * _self.pixelRatio,
              labelWidth: 15,
              activeOpacity: 1,
              activeRadius: 5
            }
          },
          background: '#131313',
          pixelRatio: _self.pixelRatio,
          series: chartData.series,
          animation: true,
          width: _self.cWidth * _self.pixelRatio,
          height: _self.cHeight * _self.pixelRatio,
          disablePieStroke: true,
          dataLabel: true,
        });
      },
      touchRing(e) {
        console.log(e)
        canvaRing.showToolTip(e, {
          format: function(item) {
            return item.name + ':' + item.data
          }
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  .qiun-padding {
    padding: 2%;
    width: 96%;
  }

  .qiun-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .qiun-rows {
    display: flex;
    flex-direction: row !important;
  }

  .qiun-columns {
    display: flex;
    flex-direction: column !important;
  }

  .qiun-common-mt {
    margin-top: 10upx;
  }
  .qiun-title-bar {
    width: 96%;
    padding: 10upx 2%;
    flex-wrap: nowrap;
  }

  .qiun-title-dot-light {
    border-left: 10upx solid #0ea391;
    padding-left: 10upx;
    font-size: 32upx;
    color: #000000
  }

  .qiun-charts {
    width: 690upx;
    height: 600upx;
    background-color: #131313;
  }

  .charts {
    width: 690upx;
    height: 600upx;
    background-color: #131313;
  }
</style>
