<template>
  <view class="p-30 p-r">
    <view class="t-r">
      <text class="fl col-9 f-30" @click="isMonth = !isMonth">{{year}}年{{month}}月></text>
      <text class="col-9 f-28">使用优惠券：{{info.use_num}}次</text>
    </view>
    
    <view :class=" {'oh b-13': true, 'monthList': !isMonth, 'height-0': isMonth}">
      <view v-for="item in month" :key="item" class="linear-border dis-inline-block b-linear col-f f-36" @click="selectTime(item)">
        <view class="b-13 t-c">{{item + 1}}</view>
      </view>
    </view>
    
    <view class="m-t-15 col-9 f-28 t-r">优惠总金额：{{info.discounts}}元</view>
    <view class="qiun-columns p-re">
      <text class="p-ab title col-9 f-26">金额（元）</text>
      <view class="qiun-charts" >
        <canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" disable-scroll=true @touchstart="touchColumn" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
      </view>
  	</view>
    <view class="f-30 col-9 t-c">使用次数月份对比</view>
    
    <circle :Ring="chartData"></circle>
    <view class="f-30 col-9 t-c">使用次数对比</view>
  </view>
  
</template>

<script>
  //导入库
  import circle from '../components/circle.vue';
  import uCharts from '../components/u-charts/u-charts.js';
  
  var _self;
  var canvaColumn=null;
  	export default {
      components: {
        circle
      },
  		data() {
  			return {
  				cWidth:'',
  				cHeight:'',
  				pixelRatio:1,
  				serverData:'',
          info: '',              // 请求回来的数据
          chartData: '',
          isMonth: true,        // 月份选择显隐
          year: '',
          month: ''
  			}
  		},
  		onLoad() {
  			_self = this;
  			this.cWidth=uni.upx2px(600);
  			this.cHeight=uni.upx2px(430);
        let date= new Date()
        this.year= date.getFullYear()
        this.month= date.getMonth() + 1
        
        this.getServerData()
  		},
  		methods: {
        selectTime(month) {
          let that= this
          that.month= month + 1
          that.getServerData()
          that.isMonth= false
        },
        // 绘制表格
  			getServerData(){
          uni.showLoading({
            title: '数据拉取中'
          })
          let that= this,
            month= that.month > 9? that.month:  '0'+  that.month,
            params= {
              url: that.$api.couponStatistics,
              data: {
                exchange_date: that.year + '-' + month
              }
            };
          that.$httpRequest(params).then(res => {
            let info= res.data.info,
              Column= {
                categories: [],
                series: [{
                  name: '金额',
                  data: []
                }]
              },
              chartData= {
                series: []
              };
            that.info= info
            
            // 柱形图
            let numArr= info.use_contrast.select_m.split('-')
            for(let i=Number(numArr[0]); i< Number(numArr[1]) + 1;i++) {
              let str= i.toString()
              Column.categories.push(str)
              let obj= {
                value: info.use_contrast.list[str]?info.use_contrast.list[str]: 0,
                color: '#5F3CF5'
              }
              Column.series[0].data.push(obj)
            }
            
            _self.showColumn("canvasColumn",Column)
            
            // 圆环形图
            let types= info.use_contrast_types,
              Index= 0,
              colors= ['#545aff', '#06c2ff', '#063dff', '#069aec', '#df12ff', '#9612ff'];
           
            for(let i in types) {
              let obj= {
                name: i,
                data: types[i]
              }
              // 六个以内自定义颜色，往上随机
              if(chartData.series.length < 6) {
                obj.color= colors[Index]
              }
              chartData.series.push(obj)
              Index++
            }
            that.chartData= chartData
          })
          
  			},
  			showColumn(canvasId,chartData){
  				canvaColumn=new uCharts({
  					$this:_self,
  					canvasId: canvasId,
  					type: 'column',
  					legend:{show:false},
  					fontSize:12,
  					background:'#131313',
  					pixelRatio:_self.pixelRatio,
  					animation: true,
  					categories: chartData.categories,
  					series: chartData.series,
  					enableScroll: true,//开启图表拖拽功能
  					xAxis: {
  						disabled: false,
  					  disableGrid: true,
  					  gridColor: '#9900ff',
  					  axisLine: true,
  					  axisLineColor: '#9900ff',
  					  gridEval: 0.2,
  					  fontColor: '#999',
  					  type:'grid',
  					  gridType:'dash',
  					  itemCount: 6,//x轴单屏显示数据的数量，默认为5个
  					  scrollAlign:'left',//滚动条初始位置
  					},
  					yAxis: {
  					  disableGrid: true,
  					  axisLineColor: '#9900ff',
  					  format: (val)=>{return val.toFixed(0)}
  					},
  					dataLabel: true,
  					width: _self.cWidth*_self.pixelRatio,
  					height: _self.cHeight*_self.pixelRatio,
  					extra: {
  						column: {
  							type:'group',
  							width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
  						},
  					  tooltip:{
  					    bgColor:'#666',//主体背景颜色
  					    bgOpacity:0.7,//背景颜色透明度
  					    fontColor:'#FFFFFF',//主体文字颜色
  					    labelBgColor:'#DFE8FF',//标签背景颜色
  					    labelBgOpacity:0.95,//背景颜色透明度
  					    labelFontColor:'#666666'//标签文字颜色
  					  }
  					}
  				});
  				
  			},
  			touchColumn(e){
  				canvaColumn.scrollStart(e);
  			},
        
        moveLineA(e) {
          canvaColumn.scroll(e);
        },
        touchEndLineA(e) {
          canvaColumn.scrollEnd(e);
          //下面是toolTip事件，如果滚动后不需要显示，可不填写
          canvaColumn.showToolTip(e, {
            format: function (item, category) {
              return category + ' ' + item.name + ':' + item.data 
            }
          });
        }
  		}
  	}
</script>

<style lang="scss" scoped>
  page{background:#131313;width: 750upx;overflow-x: hidden;}
  // 折线图样式
  .qiun-padding{padding:2%; width:96%;}
  .qiun-wrap{display:flex; flex-wrap:wrap;}
  .qiun-rows{display:flex; flex-direction:row !important;}
  .qiun-columns{display:flex; flex-direction:column !important;padding: 40upx 0 0 50upx;}
  .title{top: 0; left: 0;}
  .qiun-bg-white{background:#FFFFFF;}
  .qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
  .qiun-charts{width: 600upx; height:430upx;background-color: #131313;}
  .charts{width: 600upx; height:430upx;background-color: #131313;}
  
  // 圆环图
  .monthList{
    width: 100%;
    padding: 0 30upx;
    position: absolute;
    top: 50upx;
    left: 0;
    z-index: 5;
    transition: 200ms;
  }
  .height-0{
    height: 0;
  }
  .linear-border{
    float: left;
    margin: 20upx;
    padding: 2upx;
    height: 70upx;
    width: 70upx;
    border-radius: 100%;
    &>view{
      height: 100%;
      width: 100%;
      line-height: 70upx;
      border-radius: 100%;
    }
  }
  </style>
</style>
