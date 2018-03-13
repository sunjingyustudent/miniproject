const user=require('../../../util/user');
import requestConfig from '../../../service/rconfig';

Page({
  data: { // 参与页面渲染的数据
    livebackNav:[],//课程分类
    miniPage:1,//最小页码
    curPage:1,//当前最后页码
    pageSize:10,//分页条数
    LiveBackList:[],//回顾课数组
    classifyid:0,
    scrollFlag:true,
    hasData:!!1,
  },
  //向上滑
  upper: function(e) {
    let _this = this;
    if (_this.data.miniPage == 1) {
      wx.showToast({
        title: '当前为第一页',
        duration: 2000
      });
    } else {
      // _this.data.scrollFlag = true;
      // if (_this.data.scrollFlag) {
      //   let params ={
      //     curPage:_this.data.miniPage-1,
      //     pageSize:_this.data.pageSize,
      //     isBack:1,
      //     classifyid:_this.data.classifyid,
      //     unionid:wx.getStorageSync('unionId')||0,
      //   }
      //   _this.setData({
      //     scrollFlag: false,
      //     miniPage:_this.data.miniPage-1,
      //   });
      //   _this.getData(params);
      // }
    }
  },
  //向下滑
  lower: function(e) {
    let _this = this;
    if (_this.data.scrollFlag) {
      _this.setData({
        scrollFlag: false,
      });
      _this.getData(1);
    }

  },
  getData(type){
    let _this = this;
    wx.showLoading({
      title: '加载中',
    });

    let pageSize = type==1?_this.data.pageSize:_this.data.miniPage;
    
    let params ={
      curPage:_this.data.curPage,
      pageSize:_this.data.pageSize,
      isBack:1,
      classifyid:_this.data.classifyid,
      unionid:wx.getStorageSync('unionId')||0,
    }
    
    requestConfig.getCourseList(
    {
      params: params,
      success: function (res) {
        wx.hideLoading();
        let { code, data, msg } = res.data;
        if(code == 200){
          console.log(data);
          for(let i=0;i<data.items.length;i++){
           data.items[i]["page"] = data.page.curPage;
         }
         _this.setData({
          LiveBackList: [..._this.data.LiveBackList, ...data.items],
          livebackNav:data.classifyinfo,
          curPage :  _this.data.curPage + 1,
          scrollFlag: true,
          hasData:!!1,
        });
       } else if (code == 3001) {
          _this.setData({
            hasData:!1,
            scrollFlag: true,
          });
        } else {
          _this.show("没有数据了");
        }
      },
      fail: function () {
      },
    });
  },
  //页面滚动
  scroll:function(){
  },
  //点击课程分类
  classSort:function(e){
    let _this = this;
    this.data.classifyid = e.currentTarget.dataset.id
    _this.setData({
      classifyid: e.currentTarget.dataset.id,
      LiveBackList:[],
      curPage:1,
    });
    _this.getData();
  },
  //进入直播详情页
  interClass: function (e) {
    let _this = this;
    let classid = e.currentTarget.dataset.id;
    let page = e.currentTarget.dataset.page;
    // wx.setStorageSync('backPage', page);
    wx.navigateTo({
      url: '../liveshow/liveshow?classid='+classid
    })
  },
  onLoad: function () {
    // 页面渲染后 执行
    //
    let app = getApp();
    new app.ToastPannel();
    
    this.lower();
  },
})
