//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isRuleShow: true,
    textMenu: "隐藏"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // test按钮
  test: function () {
    console.log('test');
    console.log(wx.getSystemInfoSync());
  },
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: '15227867593',
      success: function () {
        console.log("拨打电话成功。")
      },
      fail: function () {
        console.log("拨打失败。")
      }
    })
  },
  num: function () {
    wx.addPhoneContact({
      firstName: '磊',
      lastName: '张',
      mobilePhoneNumber: '18888888888',
      weChatNumber: '',
      addressStreet: '福永',
    })
  },
  gotoMenu: function () {
    console.log('gotoMenu')
    this.setData({
      isRuleShow: this.data.isRuleShow ? false : true,
      textMenu: this.data.isRuleShow ? "显示" : "隐藏"
    })
  },
  gotoNext: function () {
    wx.navigateTo({
      url: '../map/map',
    })
  },
  // close: function(){

  // },
  onShareAppMessage: function () {
    console.log('111')
    return {
      title: '高手',
      desc: '没错我就是高手',
      path: '/page/user?id=123'
    }
  }


})
