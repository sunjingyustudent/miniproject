// 在线陪练
Page({
    data: {
        headImage: 'http://test001.pnlyy.com/linewechatclass/dd40317367fef6021dacdc55cca867eb',
        infoImage: 'http://test001.pnlyy.com/linewechatclass/48dc7a9ceab65019b9a6d8b12c034173',
        parentImage: 'http://test001.pnlyy.com/linewechatclass/a5519b2a26f495c44343de6f8891234f',
        introImage: 'http://test001.pnlyy.com/linewechatclass/6ae864559d9758e8f22acdfbd8140b44',
        parentVideo: 'http://o7ex1jsur.bkt.clouddn.com/web.mp4',
        videoStatus: !1,        // 视频显示状态
    },
    onLoad: function () {},
    onReady: function() {},
    // 该页面不需要下拉刷新
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    onShareAppMessage: function () {
        return {
            title: '自定义转发标题',
            path: ''
        }
    },
    videoShow: function () {
        this.setData({videoStatus: !!1});
    }
})
