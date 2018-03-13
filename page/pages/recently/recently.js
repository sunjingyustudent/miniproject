// import httpRequest from '../../../service/httpActions';
import httpRequest from '../../../service/rconfig';
// 模拟请求数据
// const recently = (curPage = 1) => {
//     let code = 200;
//     let msg = '';
//     if (curPage > 2) {
//         code = 3999;
//         msg = '最后一页没数据';
//     }
//     return {
//         "code":code,
//         "msg":msg,
//         "data":{
//             "items":[
//                 {"id":curPage+"571","banner_img":"http://test001.pnlyy.com/linewechatclass/6435a1dfb4b6d925a123037db0dd82c9","icon":"http://test001.pnlyy.com/linewechatclass/e6284cc51d86363b1ce76faaa5d6009b","class_time":"2017-11-23 10:34:00","title":"艺述·经典--钢琴家郝宏图讲解<肖邦练习曲>","teacher_name":"李白","price":"0.10","url":"http://opt-test.pnlyy.com/share","counts":0,"isbook":0},
//                 {"id":curPage+"533","banner_img":"http://test001.pnlyy.com/linewechatclass/80dcaba24a9ce36015fa8dd70453b58b","icon":"http://test001.pnlyy.com/linewechatclass/e8e7613dfdb389188c852cd273b13083","class_time":"2017-11-21 11:30:00","title":"10-7留美钢琴家主讲：如何指导学生演奏肖邦夜曲","teacher_name":"杜甫","price":"0.00","url":"http://admin.pnlyy.com/","counts":0,"isbook":0},
//                 {"id":curPage+"473","banner_img":"http://test001.pnlyy.com/linewechatclass/8ca87deb975a2d53b74df313b9920fbe","icon":"http://test001.pnlyy.com/linewechatclass/99b328446cf51eba52497e11883dde49","class_time":"2017-11-21 12:11:00","title":"15旅德钢琴家主讲8级考级曲：海顿降E大调奏鸣曲教学指导","teacher_name":"陈洁","price":"0.00","url":"http://opt-test.pnlyy.com/share","counts":0,"isbook":0},
//                 {"id":curPage+"541","banner_img":"http://test001.pnlyy.com/linewechatclass/3e14898ebf9aa37a662ac2ffd429f8b8","icon":"http://test001.pnlyy.com/linewechatclass/23927986f823d52fc2ac9684775690be","class_time":"2017-11-21 20:03:00","title":"旅美钢琴家主讲：车尔尼练习曲849深度解析","teacher_name":"李白","price":"1.00","url":"http://opt-test.pnlyy.com/share","counts":0,"isbook":0},
//                 {"id":curPage+"543","banner_img":"http://test001.pnlyy.com/linewechatclass/cceb7d2695dadd6d990f048592d81137","icon":"http://test001.pnlyy.com/linewechatclass/4b0b33d574c455f02b29261527f5e702","class_time":"2017-11-21 20:04:00","title":"钢琴家刘昭智主讲：克列门蒂小奏鸣曲Op.36演奏与教学指导","teacher_name":"李白","price":"11.00","url":"http://opt-test.pnlyy.com/share/index","counts":0,"isbook":0},
//                 {"id":curPage+"575","banner_img":"http://test001.pnlyy.com/linewechatclass/944673c8af05772bac48ce29eb5eee4f","icon":"http://test001.pnlyy.com/linewechatclass/9ebcb3eb8ff2d1333166fb1f8023cb79","class_time":"2017-11-22 18:05:00","title":"Moers国立音乐学院讲师主讲：哈农和勃拉姆斯练指法教学指导","teacher_name":"巴黎","price":"11.00","url":"http://admin.pnlyy.com/","counts":"1","isbook":0},
//                 {"id":curPage+"545","banner_img":"http://test001.pnlyy.com/linewechatclass/cbfa06e75f95955cba78faabcdc16123","icon":"http://test001.pnlyy.com/linewechatclass/31abd50eaff20af9aac2dc491837be13","class_time":"2017-11-22 20:06:00","title":"旅德钢琴家黄翔主讲：如何弹好巴赫三部创意曲","teacher_name":"李白","price":"1.00","url":"http://opt-test.pnlyy.com/share/index","counts":0,"isbook":0},
//                 {"id":curPage+"529","banner_img":"http://test001.pnlyy.com/linewechatclass/c482d3744523f1e8eae662ebe6cae6aa","icon":"http://test001.pnlyy.com/linewechatclass/28790567f501b21b266d8dc441271297","class_time":"2017-11-23 11:06:00","title":"10-5钢琴家张哲主讲：如何指导学生演奏肖邦玛祖卡","teacher_name":"李白","price":"0.00","url":"http://admin.pnlyy.com/","counts":0,"isbook":0},
//                 {"id":curPage+"531","banner_img":"http://test001.pnlyy.com/linewechatclass/669b1a4be4b782d6e4a81e73636806d0","icon":"http://test001.pnlyy.com/linewechatclass/641af0b7781d271d7152d098f7c8b4bc","class_time":"2017-11-23 13:28:00","title":"10-6旅英钢琴家主讲：如何通过音阶琶音训练奠定钢琴演奏技巧基础","teacher_name":"杜甫","price":"0.00","url":"http://admin.pnlyy.com/","counts":0,"isbook":0},
//                 {"id":curPage+"565","banner_img":"http://test001.pnlyy.com/linewechatclass/a0ce793e1650b8fbe0c32c5668280911","icon":"http://test001.pnlyy.com/linewechatclass/3899fd7cf1d283e9d996ae0da36069d7","class_time":"2017-11-23 15:20:00","title":"11-5旅欧钢琴家主讲：如何指导学生正确学习“断奏”","teacher_name":"李白","price":"0.12","url":"http://opt-test.pnlyy.com/share/index","counts":0,"isbook":0}
//             ],
//             "classifyinfo":[],
//             "page":{"curPage":curPage,"pageSize":10,"totalPage":2,"totalRow":"19"}
//         }
//     }
// }

const defaultData = {
    curPage: 0,             // 当前页码，默认值0
    pageSize: 10,           // 每页条数
    totalPage: 0,           // 总页数
    totalRow: '',           // 数据总条数
    isBack: 0,              // 是否回顾课
    classifyid: 0,          // 课程分类，此处设置为0即可
    recentlyItems: [],      // 数据列表
    canLoadMore: !!1,       // 是否可以加载更多数据
    isRefresh: !1,          // 表示是否刷新状态，通过此属性可关闭刷新操作
}
Page({
    data: {
        unionId: '',
        personIcon: '../../../image/icon/personnum.png',        // 图标
        hasData: !!1,           // 是否有数据，用于控制状态页面显示
        ...defaultData
    },
    onLoad: function () {
        this.setData({unionId: getApp().globalData.unionId});
    },
    onReady: function() {
        this.loadMore();
    },
    // 下拉刷新
    onPullDownRefresh: function () {
        this.refresh();
    },
    // 翻到底部加载更多
    onReachBottom: function () {
        this.data.hasData && this.loadMore();
    },
    /**
     * 加载课程列表
     * @param  {Number} [curPage=1] [页码]
     * @return {[type]}             []
     */
    loadCourse: function (curPage = 1) {
        wx.showLoading({
            title: "数据加载中",
            mask: true,
        });
        let _data_ = this.data;
        let params = {unionid: _data_.unionId, curPage: curPage, pageSize: _data_.pageSize, isBack: _data_.isBack, classifyid: _data_.classifyid};
        // 模拟请求数据
        // setTimeout(() => {
        //     let { code, data: { items, page: { curPage, pageSize, totalPage, totalRow } }, msg } = recently(this.data.curPage);
        //     if (code === 3001) {    // 无数据
        //         this.setData({recentlyItems: [], hasData: !1});
        //         wx.hideLoading();
        //     } else if (code === 3999) { // 最后一页
        //         wx.hideLoading();
        //         this.setData({canLoadMore: !1, hasData: !!1});
        //         wx.showToast({
        //             title: msg,
        //             duration: 2000
        //         });
        //     } else if (code === 200) {  // 返回数据
        //         if (this.data.isRefresh) {  // 如果是刷新请求则关闭刷新
        //             wx.stopPullDownRefresh();
        //         } else {    // 否则合并数据
        //             items = [...this.data.recentlyItems, ...items];
        //         }
        //         // 更新数据
        //         this.setData({
        //             hasData: !!1,
        //             recentlyItems: items,
        //             curPage: curPage,
        //             pageSize: pageSize,
        //             totalPage: totalPage,
        //             totalRow: totalRow,
        //         });
        //         // 关闭加载状态
        //         wx.hideLoading();
        //     }
        // }, 1000);

        // 实际请求方法，预留
        httpRequest.getCourseList({
            params,
            success: res => {
                wx.hideLoading();
                let { code, data, msg } = res.data;
                if (code === 3001) {    // 无数据
                    this.setData({...defaultData, canLoadMore: !!1, hasData: !1});
                } else if (code === 3999) { // 最后一页
                    this.setData({canLoadMore: !1, hasData: !!1});
                    wx.showToast({
                        title: res.data.msg,
                        duration: 2000
                    });
                } else if (code === 200) {  // 返回数据
                    let recentlyItems = [...this.data.recentlyItems, ...data.items];
                    if (this.data.isRefresh) {
                        recentlyItems = data.items;
                    }
                    this.setData({recentlyItems, ...data.page, hasData: !!1, isRefresh: !1});
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
     * @return {[type]} [description]
     */
    refresh: function () {
        this.setData({curPage: 1, canLoadMore: !!1, isRefresh: !!1});
        // 开启刷新状态
        this.loadCourse(1);
        wx.stopPullDownRefresh();
    },
    /**
     * 加载更多课程
     * @return {[type]} [description]
     */
    loadMore: function () {
        // 关闭刷新状态
        this.setData({isRefresh: !1});
        this.loadCourse(++this.data.curPage);
    },
    /**
     * 点击课表进入课程详情
     * @param  {[type]} event 事件对象
     * @return {[type]}       [description]
     */
    showDetail: function (event) {
        let classId = event.currentTarget.dataset.id;
        classId && (wx.navigateTo({
            url: '../liveshow/liveshow?classId='+classId,
        }))
    }
})
