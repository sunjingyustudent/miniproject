// import httpActions from '../../../service/httpActions';
import httpRequest from '../../../service/rconfig';
// 模拟请求数据
const popShareData = (curPage = 1) => {
    let code = 200;
    let msg = '';
    if (curPage > 2) {
        code = 3999;
        msg = '最后一页没数据';
    }
    return {
        "code":code,
        "msg":msg,
        "data":{
            "count":"2",
            "class_id":571,
            "shareinfo":[
                {
                    id: curPage+'1',
                    "share_time":"1小时",
                    "wechat_name":"原振侠",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjs4iaeW3ic2LRdv0an5xejbHBXn0rT0tblYAP5maJODeZbuoKmjQaDUAicNcrB1RB5iarbzic5yqTDicKm/0"
                },
                {
                    id: curPage+'2',
                    "share_time":"6小时",
                    "wechat_name":"哒哒",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjj5lAibGQr3f2icOTeQIWBYTicp6SVHSwNqwIVmkQLTYy74jXibTsLbwtWjCLutpYyRhzqElGeTfeiccz/0"
                },
                {
                    id: curPage+'3',
                    "share_time":"1小时",
                    "wechat_name":"原振侠",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjs4iaeW3ic2LRdv0an5xejbHBXn0rT0tblYAP5maJODeZbuoKmjQaDUAicNcrB1RB5iarbzic5yqTDicKm/0"
                },
                {
                    id: curPage+'4',
                    "share_time":"6小时",
                    "wechat_name":"哒哒",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjj5lAibGQr3f2icOTeQIWBYTicp6SVHSwNqwIVmkQLTYy74jXibTsLbwtWjCLutpYyRhzqElGeTfeiccz/0"
                },
                {
                    id: curPage+'5',
                    "share_time":"1小时",
                    "wechat_name":"原振侠",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjs4iaeW3ic2LRdv0an5xejbHBXn0rT0tblYAP5maJODeZbuoKmjQaDUAicNcrB1RB5iarbzic5yqTDicKm/0"
                },
                {
                    id: curPage+'6',
                    "share_time":"6小时",
                    "wechat_name":"哒哒",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjj5lAibGQr3f2icOTeQIWBYTicp6SVHSwNqwIVmkQLTYy74jXibTsLbwtWjCLutpYyRhzqElGeTfeiccz/0"
                },
                {
                    id: curPage+'7',
                    "share_time":"1小时",
                    "wechat_name":"原振侠",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjs4iaeW3ic2LRdv0an5xejbHBXn0rT0tblYAP5maJODeZbuoKmjQaDUAicNcrB1RB5iarbzic5yqTDicKm/0"
                },
                {
                    id: curPage+'8',
                    "share_time":"6小时",
                    "wechat_name":"哒哒",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjj5lAibGQr3f2icOTeQIWBYTicp6SVHSwNqwIVmkQLTYy74jXibTsLbwtWjCLutpYyRhzqElGeTfeiccz/0"
                },
                {
                    id: curPage+'9',
                    "share_time":"1小时",
                    "wechat_name":"原振侠",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjs4iaeW3ic2LRdv0an5xejbHBXn0rT0tblYAP5maJODeZbuoKmjQaDUAicNcrB1RB5iarbzic5yqTDicKm/0"
                },
                {
                    id: curPage+'10',
                    "share_time":"6小时",
                    "wechat_name":"哒哒",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjj5lAibGQr3f2icOTeQIWBYTicp6SVHSwNqwIVmkQLTYy74jXibTsLbwtWjCLutpYyRhzqElGeTfeiccz/0"
                },
                {
                    id: curPage+'11',
                    "share_time":"1小时",
                    "wechat_name":"原振侠",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjs4iaeW3ic2LRdv0an5xejbHBXn0rT0tblYAP5maJODeZbuoKmjQaDUAicNcrB1RB5iarbzic5yqTDicKm/0"
                },
                {
                    id: curPage+'12',
                    "share_time":"6小时",
                    "wechat_name":"哒哒",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjj5lAibGQr3f2icOTeQIWBYTicp6SVHSwNqwIVmkQLTYy74jXibTsLbwtWjCLutpYyRhzqElGeTfeiccz/0"
                },
                {
                    id: curPage+'13',
                    "share_time":"1小时",
                    "wechat_name":"原振侠",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjs4iaeW3ic2LRdv0an5xejbHBXn0rT0tblYAP5maJODeZbuoKmjQaDUAicNcrB1RB5iarbzic5yqTDicKm/0"
                },
                {
                    id: curPage+'14',
                    "share_time":"6小时",
                    "wechat_name":"哒哒",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjj5lAibGQr3f2icOTeQIWBYTicp6SVHSwNqwIVmkQLTYy74jXibTsLbwtWjCLutpYyRhzqElGeTfeiccz/0"
                },
                {
                    id: curPage+'15',
                    "share_time":"1小时",
                    "wechat_name":"原振侠",
                    "head":"http://wx.qlogo.cn/mmopen/FZ5JpzYlf5ZSjtcXcQaOjs4iaeW3ic2LRdv0an5xejbHBXn0rT0tblYAP5maJODeZbuoKmjQaDUAicNcrB1RB5iarbzic5yqTDicKm/0"
                }
            ],
            "page":{"curPage":curPage,"pageSize":15,"totalPage":2,"totalRow":"30"}
        }
    }

}

// 默认数据
const defaultData = {
    curPage: 0,                                         // 当前页码，默认值0
    pageSize: 15,                                       // 每页条数
    totalPage: 0,                                       // 总页数
    totalRow: '',                                       // 数据总条数
    count: 0,                                           // 分享数量
    shareInfo: [],                                      // 分享数据列表
    canLoadMore: !!1,
    isRefresh: !1,                                      // 表示是否刷新状态，通过此属性可关闭刷新操作
}

Page({
    data: {
        unionId: '',
        classId: '',                                        // 课程id
        fireIcon: '../../../image/icon/fire.png',           // 图标
        hasData: !!1,                                       // 是否有数据，用于控制状态页面显示
        ...defaultData,
    },
    onLoad: function (options) {
        // 获取课程id
        this.setData({
            classId: options.classId,
            unionId: getApp().globalData.unionId
        });
    },
    onReady: function() {
        this.loadMore();
    },
    onPullDownRefresh: function () {
        this.refresh();
    },
    onReachBottom: function () {
        this.data.hasData && this.loadMore();
    },
    onShareAppMessage: function () {
        return {
            title: '自定义转发标题',
            path: ''
        }
    },
    /**
     * 加载课程列表
     * @param  {Number} [curPage=1] 页码
     * @return {[type]}             [description]
     */
    load: function (curPage = 1) {
        wx.showLoading({
            title: "数据加载中",
            mask: true,
        });
        let _data_ = this.data;
        let params = {unionid: _data_.unionId, curPage: curPage, pageSize: _data_.pageSize, classid: _data_.classId};
        // 模拟请求数据
        // setTimeout(() => {
        //     let { code, data: { class_id, count, shareinfo, page: { curPage, pageSize, totalPage, totalRow } }, msg } = popShareData(this.data.curPage);
        //     if (code === 3001) {    // 无数据
        //         this.setData({...defaultData, hasData: !1});
        //         wx.hideLoading();
        //     } else if (code === 3999) {     // 最后一页
        //         wx.hideLoading();
        //         this.setData({canLoadMore: !1, hasData: !!1});
        //         wx.showToast({
        //             title: msg,
        //             duration: 2000
        //         });
        //     }  else if (code === 200) { // 返回数据
        //         if (this.data.isRefresh) {  // 如果是刷新请求则关闭刷新
        //             wx.stopPullDownRefresh();
        //         } else {     // 否则合并数据
        //             shareinfo = [...this.data.shareInfo, ...shareinfo];
        //         }
        //         // shareinfo = shareinfo.map((v, i) => ({...v, id: i}));   // 当数据里无唯一标识符，则添加一个
        //         this.setData({
        //             hasData: !!1,
        //             shareInfo: shareinfo,
        //             count,
        //             curPage,
        //             pageSize,
        //             totalPage,
        //             totalRow,
        //         });
        //         wx.hideLoading();
        //     }
        // }, 1000);

        httpRequest.getShareList({
            params,
            success: res => {
                wx.hideLoading();
                let { code, data, msg } = res.data;
                if (code === 3001) {    // 无数据
                    this.setData({...defaultData, hasData: !1});
                } else if (code === 3999) {     // 最后一页
                    this.setData({hasData: !!1});
                    wx.showToast({
                        title: msg,
                        duration: 2000
                    });
                } else if (code === 200) { // 返回数据
                    let shareInfo = [...this.data.shareInfo, ...data.shareinfo];
                    if (this.data.isRefresh) {  // 如果是刷新请求则关闭刷新
                        // wx.stopPullDownRefresh();
                        shareInfo = data.shareinfo;
                    }
                    this.setData({
                        hasData: !!1,
                        isRefresh: !1,
                        shareInfo,
                        count: data.count,
                        ...data.page,
                    });
                }
            },
            fail: err => {
                wx.hideLoading();
                console.error(err);
            }
        });
    },
    /**
     * 重新加载课程列表
     * @return {[type]}
     */
    refresh: function () {
        this.setData({curPage: 1, canLoadMore: !!1, isRefresh: !!1});
        this.load(1);
        wx.stopPullDownRefresh();
    },
    /**
     * 加载更多课程
     * @return {[type]} [description]
     */
    loadMore: function () {
        // let _data_ = this.data;
        // let params = {curPage: ++_data_.curPage, pageSize: _data_.pageSize, classid: _data_.classId};
        this.setData({isRefresh: !1});
        this.load(++this.data.curPage);
    },
})
