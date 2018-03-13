// import httpRequest from '../../../service/httpActions';
import httpRequest from '../../../service/rconfig';
// 模拟数据
const myReward = (curPage = 1) => {
    let code = 3001;
    let msg = '';
    if (curPage > 2) {
        code = 3999;
        msg = '最后一页没数据';
    }
    return {
        "code":code,
        "msg":msg,
        "data":{
            "drew_income":0,
            "store_income":2640,
            "incomeinfo":[
                {
                    "id": curPage+"1",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"2",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"3",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"4",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"5",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"6",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"7",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"8",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"9",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"10",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"11",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"12",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"13",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"14",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                },
                {
                    "id": curPage+"15",
                    "studentName":"渠道小程序测....",
                    "money":"88.00",
                    "comment":"体验课一节",
                    "status":"8"
                }
            ],
            "page":{"curPage":curPage,"pageSize":15,"totalPage":2,"totalRow":"30"}}}
}

const defaultData = {
    curPage: 0,                                             // 当前页码
    pageSize: 15,                                           // 每页数据条数
    totalPage: 0,                                           // 总页数
    totalRow: '',                                           // 总条数
    drewIncome: 0,                                          // 可提现金额
    storeIncome: 0,                                         // 累计提现金额
    incomeList: [],                                         // 收益明细列表
}
Page({
    data: {
        unionId: '',
        drewIncomeIcon: '../../../image/icon/left_money.png',   // 可提现图标
        storeIncomeIcon: '../../../image/icon/right_money.png', //  累计提现图标
        canLoadMore: !!1,                                       // 是否可以加载更多
        isRefresh: !1,                                          // 表示是否刷新状态，通过此属性可关闭刷新操作
        hasData: !!1,
        qrcodeImage: 'http://test001.pnlyy.com/linewechatclass/493a5ddbbedf494781ba8a4cb924c329',
        ...defaultData,
    },
    onLoad: function () {
        this.setData({unionId: getApp().globalData.unionId});
    },
    onReady: function() {
        this.loadMore();
        this.fetchBanner();
    },
    onPullDownRefresh: function () {
        this.refresh();
    },
    onReachBottom: function () {
        this.data.hasData && this.loadMore();
    },

    /**
     * 加载奖励数据
     * @param  {Number} [curPage=1] [页码]
     * @return {[type]}
     */
    loadReward: function (curPage = 1) {
        wx.showLoading({
            title: "数据加载中",
            mask: true,
        });

        let _data_ = this.data;
        let params = {unionid: _data_.unionId, curPage: curPage, pageSize: _data_.pageSize};

        // 模拟请求数据
        // setTimeout(() => {
        //     let { code, data: { drew_income, store_income, incomeinfo, page: { curPage, pageSize, totalPage, totalRow } }, msg } = myReward(this.data.curPage);
        //
        //     if (code === 3001) { // 请求返回无数据
        //         this.setData({incomeList: [], hasData: !1});
        //         wx.hideLoading();
        //     } else if (code === 3999) { // 最后一页
        //         wx.hideLoading();
        //         this.setData({canLoadMore: !1, hasData: !!1});
        //         wx.showToast({
        //             title: msg,
        //             duration: 2000
        //         });
        //     } else if (code === 200) { // 请求数据成功
        //         if (this.data.isRefresh) { // 如果是刷新请求，则关闭刷新动态效果
        //             wx.stopPullDownRefresh();
        //         } else {    // 否则合并数据
        //             incomeinfo = [...this.data.incomeList, ...incomeinfo];
        //         }
        //         this.setData({
        //             hasData: !!1,
        //             incomeList: incomeinfo,
        //             curPage: curPage,
        //             pageSize: pageSize,
        //             totalPage: totalPage,
        //             totalRow: totalRow,
        //             drewIncome: drew_income,
        //             storeIncome: store_income,
        //         });
        //         wx.hideLoading();   // 关闭加载特效
        //     }
        // }, 1000);

        // 实际请求方法，预留
        httpRequest.getMyReward({
            params,
            success: res => {
                wx.hideLoading();
                let { code, data, msg } = res.data;
                if (code === 3001) {
                    this.setData({...defaultData, canLoadMore: !!1, hasData: !1});
                } else if (code === 3999) {
                    this.setData({canLoadMore: !1, hasData: !!1});
                    wx.showToast({
                        title: msg,
                        duration: 2000
                    })
                } else if (code === 200) {
                    let incomeList = [...this.data.incomeList, ...data.incomeinfo];
                    if (this.data.isRefresh) {
                        incomeList = data.incomeinfo;
                    }

                    this.setData({
                        incomeList,
                        drewIncome: data.drew_income,
                        storeIncome: data.store_income,
                        ...data.page,
                        hasData: !!1, isRefresh: !1
                    });
                }
            },
            fail: err => {
                wx.hideLoading();
                console.log(err);
            }
        });
    },
    // 获取二维码图
    fetchBanner: function () {
        httpRequest.getKefuBanner({
            params: {unionid: this.data.unionId},
            success: res => {
                let { code, data, msg } = res.data;
                if (code === 3003) {    // 无数据
                    this.setData({qrcodeImage: defaultData.qrcodeImage});
                } if (code === 200) {  // 返回数据
                    this.setData({qrcodeImage: data.banner});
                }
            },
            fail: err => console.error(err)
        });
    },
    /**
     * 重新加载
     * @return {[type]}
     */
    refresh: function () {
        this.setData({curPage: 1, canLoadMore: !!1, isRefresh: !!1});
        this.loadReward(1);
        wx.stopPullDownRefresh();
    },
    /**
     * 加载更多
     * @return {[type]}
     */
    loadMore: function () {
        this.setData({isRefresh: !1});
        this.loadReward(++this.data.curPage);
    },
})
