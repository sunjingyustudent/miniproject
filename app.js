const openIdUrl = require('./config').openIdUrl
const user=require('util/user');
import { ToastPannel } from './page/component/toast/toast'
import requestConfig from './service/rconfig';
App({
  ToastPannel,
  onLaunch: function () {
    const _this = this;
    
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let params ={
          code: res.code
        }
        requestConfig.getOpenid(
        {
          params: params,
          success: function (res) {
            console.log(res);
            wx.setStorageSync('unionId', res.data.unionid);
            _this.globalData.unionId = res.data.unionid;
            //获取用户信息
            wx.getUserInfo({
              success: function (res) {
                wx.setStorageSync('userInfo', res.userInfo);
                _this.globalData.userInfo = res.userInfo;
              },
              fail: function () {
                console.log('获取用户信息失败')
              }
            });
          },
          fail: function () {

          },
        });
      }
    });
    // console.log('App Launch');

  },
  onShow: function () {
    // console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    openid: null,
    currentCourseId: '',  // 当前课程id
    studentId: 96447,   // 当前学生id
    unionId: '',        // 当前用户id
    userInfo: {},       // 当前用户信息
  },
  // lazy loading openid
  getUserOpenId: function(callback) {
    var self = this

    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      wx.login({
        success: function(data) {
          wx.request({
            url: openIdUrl,
            data: {
              code: data.code
            },
            success: function(res) {
              console.log('拉取openid成功', res)
              self.globalData.openid = res.data.openid
              callback(null, self.globalData.openid)
            },
            fail: function(res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
              callback(res)
            }
          })
        },
        fail: function(err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
          callback(err)
        }
      })
    }
  }
})
