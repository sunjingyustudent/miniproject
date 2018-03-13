import requestConfig from '../../../service/rconfig';
Page({
  data: { // 参与页面渲染的数据
  	showFlag:true,//课程是否未下架(true:课程存在、false:课程已下架)
  	bookCoverFlag:false,//预约遮罩层
  	bookClassbutton:0,//是否预约按钮
  	interclassPage:false,//跳转页面显示
    classId: '',//课程id
    interClassFlag:false,//用户是否点击进入课程
    isTime:0,

    //页面数据显示
    classTitle:'',
    classTime:'',
    classBanner:'',
    classContent:'',
    peopleNum:0,//预约人数
    HeadList:[],
  },
  //预约课程遮罩层
  bookClass: function (e) {
  	this.setData({
  		bookCoverFlag: true,
  	});
  },
  //进入荔枝微课
  interClass:function(e){
    this.setData({
      interclassPage: true,
    });
  },
  //隐藏预约弹窗
  downbook:function(e){
  	this.setData({
  		bookCoverFlag: false,
  	});
  },
  interRenqi:function(e){
    wx.navigateTo({
      url: '../popShare/popShare?classId='+this.data.classId
    })
  },
  //自定义分享
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我们测试',
      path: '/page/pages/sharepage/sharepage',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  //获取课程详情
  getClassInfo(){
    let _this = this;
    wx.showLoading({
      title: '加载中',

    });
    let params ={
      classid:this.data.classId,
      unionid:wx.getStorageSync('unionId')||0,
    }
    requestConfig.getLiveDetail(
    {
      params: params,
      success: function (res) {
        wx.hideLoading();
        console.log(res);
        let { code, data, msg } = res.data;

        _this.setData({
          bookClassbutton:data.is_book,
          classTitle:data.courseinfo.title,
          classTime:data.courseinfo.class_time,
          classBanner:data.courseinfo.banner_img,
          classContent:data.courseinfo.content,
          peopleNum:data.share_count,
          HeadList:data.shareinfo,
          HeadList:[1,2,3],
        });
        console.log(_this.data.HeadList);

      },
      fail: function () {
      },
    });
  },
  onLoad: function (options) {
    // 页面渲染后 执行
    // 获取课程id,赋值classid
    this.setData({
      classId: options.classid
    });
    //调用课程详情
    this.getClassInfo();
  },
})
