
Page({
    data: {
        headImage: 'http://test001.pnlyy.com/linewechatclass/dd40317367fef6021dacdc55cca867eb',
        infoImage: 'http://test001.pnlyy.com/linewechatclass/40cbb2ce4aee426808fb9c162f852a07',
        parentImage: 'http://test001.pnlyy.com/linewechatclass/7c77cc358767788632391c3f9d06a537',
        parentVideo: 'http://o7ex1jsur.bkt.clouddn.com/web.mp4',
        pt1Image: 'http://test001.pnlyy.com/linewechatclass/bb3a183cb0b83dcb9b79cee0bc9656b5',
        pt2Image: 'http://test001.pnlyy.com/linewechatclass/66f241954450f723507d6ec9e54c6005',
        pt3Image: 'http://test001.pnlyy.com/linewechatclass/54275e02041b32dc84daa01ab877d19a',
        matchImage: 'http://test001.pnlyy.com/linewechatclass/c08978db17f96bade8accab87d54f8f9',
        approvalImage: 'http://test001.pnlyy.com/linewechatclass/49373170662029091ad9e32068a5f625',
        aboutUsImage: 'http://test001.pnlyy.com/linewechatclass/e34dc1c891529f65aa57f121f1219bb0',
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
