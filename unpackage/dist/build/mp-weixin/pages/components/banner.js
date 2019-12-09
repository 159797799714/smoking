(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/banner"],{1999:function(n,t,e){"use strict";e.r(t);var a=e("c8c9"),r=e("251e");for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);e("c4a9"),e("dc1c");var o=e("2877"),c=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"21f32961",null);t["default"]=c.exports},"251e":function(n,t,e){"use strict";e.r(t);var a=e("a0b7"),r=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);t["default"]=r.a},"7d92":function(n,t,e){},a0b7:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"banner",props:{swiperList:Array,searchInfo:{type:String,default:"大家都在搜“森海塞尔”"}},data:function(){return{indicatorDots:!0,autoplay:!0,interval:2e3,duration:1e3,indicatorActiveColor:"#fff"}},methods:{naviget:function(t){var e=t.indexOf("goods_id="),a=t.indexOf("article_id="),r=t.indexOf("luckydraw_id=");console.log(e,a,r),-1===e?-1===a?-1===r||n.navigateTo({url:"../zerodraw/zerodraw?luckydraw_id="+t.slice(13)}):n.navigateTo({url:"../components/shareInfo?article_id="+t.slice(11)}):n.navigateTo({url:"../components/goodDetail?goods_id="+t.slice(9)})}}};t.default=e}).call(this,e("543d")["default"])},c4a9:function(n,t,e){"use strict";var a=e("7d92"),r=e.n(a);r.a},c8c9:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return r})},dc1c:function(n,t,e){"use strict";var a=e("f21e"),r=e.n(a);r.a},f21e:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/components/banner-create-component',
    {
        'pages/components/banner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1999"))
        })
    },
    [['pages/components/banner-create-component']]
]);                
