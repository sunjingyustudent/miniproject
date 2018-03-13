
Page({
  data: { // 参与页面渲染的数据
  	title:'',
  	head:'http://test001.pnlyy.com/linewechatclass/5895a806b927923199e025fbd26261e4',
  	qrcode:'http://test001.pnlyy.com/linewechatclass/098bf2afe0fd668edff0eb68fab9fe7b',
  	name:'小雨测试',
  	poster:'http://test001.pnlyy.com/linewechatclass/979b7ce28bfd3c14624032ed12887345'
  },
  //获取课程分享信息
  getSharePage(){
    console.log("这里调接口呦");
  },
  onLoad: function () {
    // 页面渲染后 执行
    //请求接口
    this.getSharePage();
  },
})