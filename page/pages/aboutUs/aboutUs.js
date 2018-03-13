import httpRequest from '../../../service/rconfig';
// 关于我们
const defaultData = {
    qrcodeImage: 'http://test001.pnlyy.com/linewechatclass/493a5ddbbedf494781ba8a4cb924c329',
}
Page({
    data: {
        unionId: '',
        headImage: 'http://test001.pnlyy.com/linewechatclass/dd40317367fef6021dacdc55cca867eb',
        infoImage: 'http://test001.pnlyy.com/linewechatclass/a366fdbf4711ce8c0f40f4ef6aeff4d4',
        artistImage: 'http://test001.pnlyy.com/linewechatclass/1bfb6bbfa479bf9552f927408fbc768d',
        serviceImage: 'http://test001.pnlyy.com/linewechatclass/2f0322deb74df0df4f0c84dfba06067e',
        ...defaultData
    },
    onLoad: function () {
        this.setData({
            unionId: getApp().globalData.unionId
        })
    },
    onReady: function() {
        this.fetchBanner();
    },
    // 该页面不需要下拉刷新
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    // 获取二维码图
    fetchBanner: function () {
        httpRequest.getKefuBanner({
            params: {unionid: this.data.unionId},
            success: res => {
                let { code, data, msg } = res.data;
                if (code === 3003) {    // 无数据
                    this.setData({...defaultData});
                } if (code === 200) {  // 返回数据
                    this.setData({qrcodeImage: data.banner});
                }
            },
            fail: err => console.error(err)
        });
    }
})
