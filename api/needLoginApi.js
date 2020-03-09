module.exports= [
  'upload/image',
  'axumi.article/release',
  'axumi.article/delete',
  'axumi.article/addcomments',
  'axumi.article/focusList',                                // 关注文章列表
  'axumi.article/like',
  'axumi.article/unLike',
  'axumi.article/collection',
  'axumi.article/unCollection',
  'axumi.article/focus',
  'axumi.article/unFocus',
  'axumi.article/commentreply',
  'axumi.article/commentlike',
  'axumi.article/commentunlike',
  'axumi.article/commentreplylike',
  'axumi.article/commentreplyunlike',
  'ax.order/buyNow',
  'ax.order/buyNowinventory',                             // 点击兑换--库存与积分检测接口
  'axapp.center/integralLogs',                            // 用户积分明细
  'axapp.center/lists',                                   // 商品兑换记录---订单列表
  'axapp.center/userIntegralDetails',                     // 积分总额-当日已获得积分--每日最高可获得积分
  'axapp.center/userIntegralDetailsByDay',                // 查看当日积分获得详情(获得积分)
  'axapp.center/userExperienceDetailsByDay',              // 查看当日经验获得详情(获得经验)
  'axumi.article/clockInPage',                            // 打卡页面
  'axapp.center/signIn',                                  // 签到
  'axapp.center/getuserinfo',                             // 设置中个人信息
  'axumi.category/addMyTheme',                            // 添加话题
  'axumi.category/rmMyTheme',                             // 取消已添加话题
]