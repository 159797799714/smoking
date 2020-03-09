(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/banner"],{"0fdc":function(e,n,t){"use strict";var a,r=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return r}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return a})},1999:function(e,n,t){"use strict";t.r(n);var a=t("0fdc"),r=t("251e");for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);t("b517");var i,c=t("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"3b0b51d3",null,!1,a["a"],i);n["default"]=u.exports},"251e":function(e,n,t){"use strict";t.r(n);var a=t("b3c3"),r=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=r.a},b3c3:function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"banner",props:{swiperList:Array,borderWidth:{type:String,default:"padding: 1px"}},data:function(){return{indicatorDots:!1,autoplay:!0,interval:5e3,duration:1e3,indicatorActiveColor:"#fff"}},methods:{naviget:function(n){var a=n.indexOf("goods_id="),r=n.indexOf("article_id="),o=n.indexOf("luckydraw_id=");console.log(e(a,r,o," at pages\\components\\banner.vue:40")),-1===a?-1===r?-1===o||t.navigateTo({url:"../zerodraw/zerodraw?luckydraw_id="+n.slice(13)}):t.navigateTo({url:"../components/shareInfo?article_id="+n.slice(11)}):t.navigateTo({url:"../components/goodDetail?goods_id="+n.slice(9)})}}};n.default=a}).call(this,t("0de9")["default"],t("6e42")["default"])},b517:function(e,n,t){"use strict";var a=t("e8e9"),r=t.n(a);r.a},e8e9:function(e,n,t){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/components/banner-create-component',
    {
        'pages/components/banner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("1999"))
        })
    },
    [['pages/components/banner-create-component']]
]);
