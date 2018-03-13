
Page({
    data: {
        headImage: 'http://test001.pnlyy.com/linewechatclass/dd40317367fef6021dacdc55cca867eb',
        bannerImage: 'http://test001.pnlyy.com/linewechatclass/dd9790ea23f598c1c9efda0b883c4cb1',
        ext1Image: 'http://test001.pnlyy.com/linewechatclass/3c5b602d953a81c5108d22383c697849',
        ext2Image: 'http://test001.pnlyy.com/linewechatclass/6be4d6195d3c64a2c4f618dd2bca8c5a',
        ext3Image: 'http://test001.pnlyy.com/linewechatclass/313e897b2401b7092ac0c65699bef0dc',
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
