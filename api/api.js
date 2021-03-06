
export default {
  uploadImage: 'upload/image',                                         // 图片上传
  login: 'ax.user/login',                                              // 登录
  decryptByMobile: 'axapp.center/decryptByMobile',                     // 微信授权解密手机号
  mobileBind: 'axapp.center/mobileBind',                               // 授权绑定手机号
  sendcode: 'axapp.center/sendcode',                                   // 发送验证码
  bindByMobile: 'axapp.center/bindByMobile',                           // 用户验证码绑定手机
  
  // 首页文章
  homebanners: 'axumi.homebanner/gethomebanners',                      // 首页轮播图列表
  recomList: 'axumi.article/recomList',                                // 发现文章列表
  focusList: 'axumi.article/focusList',                                // 关注文章列表
  newList: 'axumi.article/list',                                       // 最新文章列表
  
  // 话题
  myThemes: 'axumi.category/myThemes',                                 // 我已添加的话题
  addMyTheme: 'axumi.category/addMyTheme',                             // 添加话题
  cancleMyTheme: 'axumi.category/rmMyTheme',                           // 取消已添加话题
  themeList: 'axumi.category/themeList',                               // 所有话题列表
  themeByArticleList: 'axumi.category/themeByArticleList',             // 话题详情
  
  // 文章
  articleRelease: 'axumi.article/release',                             // 文章发布
  topicAllList: 'axumi.category/allList',                              // 文章话题列表
  articleDetail: 'axumi.article/detail',                               // 文章详情
  articleDelete: 'axumi.article/delete',                               // 文章删除
  articleAddComment: 'axumi.article/addcomments',                      // 文章评论
  articleLike: 'axumi.article/like',                                   // 文章点赞
  articleunLike: 'axumi.article/unLike',                               // 文章取消点赞
  articleCollect: 'axumi.article/collection',                          // 文章收藏
  articleunCollect: 'axumi.article/unCollection',                      // 文章取消收藏
  articleShare: 'axumi.article/articleShare',                          // 文章分享回调
  
  articleFocus: 'axumi.article/focus',                                 // 文章用户关注
  articleunFocus: 'axumi.article/unFocus',                             // 文章用户取消关注
  
  commentreply: 'axumi.article/commentreply',                          // 评论回复
  commentLike: 'axumi.article/commentlike',                            // 评论点赞
  commentUnlike: 'axumi.article/commentunlike',                        // 评论取消点赞
  commentReplyLike: 'axumi.article/commentreplylike',                  // 评论回复点赞
  commentreplyunlike: 'axumi.article/commentreplyunlike',              // 评论回复取消点赞
  
  // 门店
  axstoreLists: 'axstore.shop/lists',                                  // 店铺列表
  axstoreDetail: 'axstore.shop/detail',                                // 查看门店详情
  axhomeBanners: 'axstore.homebanner/gethomebanners',                  // 门店首页轮播图
  storeLists: 'axstore.group/lists',                                   // 门店QQ群列表
  groupDetail: 'axstore.group/detail',                                 // 根据id获取群详情
  
  // 积分
  integralIndex: 'ax.goods/goodsList',                                 // 积分--商城（产品列表）首页
  goodDetail: 'ax.goods/detail',                                       // 商品详情
  buyNow: 'ax.order/buyNow',                                           // 兑换商品
  buyNowinventory: 'ax.order/buyNowinventory',                         // 点击兑换--库存与积分检测接口
  integralLogs: 'axapp.center/integralLogs',                           // 用户积分明细
  lists: 'axapp.center/lists',                                         // 商品兑换记录---订单列表
  userIntegralDetails: 'axapp.center/userIntegralDetails',             // 积分总额-当日已获得积分--每日最高可获得积分
  userIntegralDetailsByDay: 'axapp.center/userIntegralDetailsByDay',   // 查看当日积分获得详情(获得积分)
  userExperienceDetailsByDay: 'axapp.center/userExperienceDetailsByDay',// 查看当日经验获得详情(获得经验)
  userExperienceDetails: 'axapp.center/userExperienceDetails',         // 会员等级--用户当前总经验---当日已获得经验--每日最高可获得经验
  
  
  orderDetail: 'axuser.order/detail',                                  // 订单详情
  
  
  clockInPage: 'axumi.article/clockInPage',                            // 打卡页面
  signIn: 'axapp.center/signIn',                                       // 签到
  setpCount: 'ax.user_stepcount/add',                                  // 获取--记录步数数据
  getFootCount: 'ax.user_stepcount/stepCountPage',                     // 用户步数页面数据
  receiveIntegral: 'ax.user_stepcount/receiveIntegral',                // 步数领取积分
  
  // 个人中心
  userInfo: 'axapp.center/userHomePage',                               // 我的首页个人信息
  
  // 优惠券
  couponCenter: 'ax.coupon/couponCenter',                              // 领券中心
  couponBanners: 'ax.coupon/gethomebanners',                           // 领券中心轮播图
  myCoupon: 'axuser.coupon/lists',                                     // 我的优惠券
  receiveCoupon: 'axuser.coupon/receive',                              // 领取优惠券
  couponDetail: 'axuser.coupon/couponDetails',                         // 优惠券详情
  
  // 设置
  getUserInfo: 'axapp.center/getuserinfo',                             // 设置中个人信息
  editInfo: 'axapp.center/modifypersonalinfo',                         // 修改个人信息
  editSign: 'axapp.center/modifyWxUserInfo',                           // 修改个性签名
  
  // 地址
  addressLists: 'ax.address/lists',                                    // 地址列表
  addressDetail: 'ax.address/detail',                                  // 地址详情
  addAddress: 'ax.address/add',                                        // 添加新地址
  editAddress: 'ax.address/edit',                                      // 修改地址
  setDefault: 'ax.address/setDefault',                                 // 设置默认地址
  delAddress: 'ax.address/delete',                                     // 删除地址
  setTags: 'ax.address/setTags',                                       // 用户设置地址标签
  tagsList: 'ax.address/tagsList',                                     // 用户地址标签列表
  editTags: 'ax.address/editTags',                                     // 编辑修改地址标签
  
  // 协议
  agreementList: 'axagree.agreement_category/list',                    // 协议分类
  getAgreeContentById: 'axagree.agreement_category/getContentById',    // 通过分类ID获取协议内容
  
  // 商家
  merchantsPage: 'ax.merchants/merchantsPage',                         // 商家首页
  userCouponDetails: 'ax.merchants/userCouponDetails',                 // 商家扫码获取用户优惠券信息
  confirmUseCoupon: 'ax.merchants/confirmUseCoupon',                   // 确认使用
  useCouponList: 'ax.merchants/useCouponList',                         // 商家--优惠券兑换记录
  couponStatistics: 'ax.merchants/couponStatistics',                   // 使用统计
  
}

