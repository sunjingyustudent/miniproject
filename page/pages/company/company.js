
Page({
    data: {
        headImage: 'http://test001.pnlyy.com/linewechatclass/dd40317367fef6021dacdc55cca867eb',
        infoImage: 'http://test001.pnlyy.com/linewechatclass/2e0422c4808bf2d22796bc3f9668fa7f',
        assessmentImage: 'http://test001.pnlyy.com/linewechatclass/b2d3f3d745e2d5c06059f43a4be8b839',
        adviserImage: 'http://test001.pnlyy.com/linewechatclass/32fc95e34a587d00f690948cfdcd67ef',
        aboutUsImage: 'http://test001.pnlyy.com/linewechatclass/ceb22aaec1ba2a29959967b8167b913d',
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
    }
})
