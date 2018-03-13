// import httpRequest from '../../../service/httpActions';
import httpRequest from '../../../service/rconfig';
// 模拟请求数据
const studentDetail = (curPage = 1) => {
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
            "studentinfo":{
                "nick":"渠道小程序N",
                "name": '',
                "id":"96447",
                "head": ''
            },
            "classinfo":[
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"8183"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"81123"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"21334"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"123"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"423"
                },

                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"818232"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"3s23"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"sad2"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"s2s"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"d3f"
                },

                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"8ag183"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"81ssd123"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"2sd1334"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"12sd3"
                },
                {
                    "classid":"56977",
                    "time_class":"2017-11-22 10:00:00",
                    "name":"体验课",
                    "record_id":curPage+"422s3"
                }
            ],
            "page":{"curPage":curPage,"pageSize":15,"totalPage":2,"totalRow":"30"}
        }
    }
}

const feedbackData = {
    "code":200,
    "msg":'',
    "data": {}
}
// 默认数据
const defaultData = {
    nick: '',               // 昵称
    name: '',               // 名字
    head: 'http://webchannel.dev.pnlyy.com/static/img/moren.png',               // 头像路径
    curPage: 0,             // 当前页码，默认值0
    pageSize: 15,           // 每页条数
    totalPage: 0,           // 总页数
    totalRow: '',           // 数据总条数
    classInfo: [],          // 数据列表
    canLoadMore: !!1,       // 是否可以加载更多数据
    isRefresh: !1,          // 表示是否刷新状态，通过此属性可关闭刷新操作
}
Page({
    data: {
        unionId: '',
        studentId: '',       // 学生id
        studentIcon: '../../../image/icon/studentname.png',     // 学生图标
        wxIcon: '../../../image/icon/wechat.png',           // 微信图标
        extendIcon: '../../../image/icon/extend.png',       // 详情图标
        popupActived: !1,                             // popup显示状态
        focusStatus: !1,            // 自动聚焦状态
        hasData: !!1,
        feedbackData: '',
        ...defaultData,
    },
    onLoad: function (options) {
        this.setData({
            studentId: options.studentId,
            unionId: getApp().globalData.unionId
        })
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
     * 加载数据
     * @param  {Number} [curPage=1] [页码]
     * @return {[type]}
     */
    loadClassInfo: function (curPage = 1) {
        wx.showLoading({
            title: "数据加载中",
            mask: true,
        });
        let _data_ = this.data;
        let params = {unionid: _data_.unionId, curPage: curPage, pageSize: _data_.pageSize, studentid: _data_.studentId};
        // 模拟请求数据
        // setTimeout(() => {
        //     let { code, data: { classinfo, studentinfo: { nick, name, id, head }, page: { curPage, pageSize, totalPage, totalRow } }, msg } = studentDetail(this.data.curPage);
        //     if (code === 3001) {    // 无数据
        //         this.setData({...defaultData, hasData: !1});
        //         wx.hideLoading();
        //     } else if (code === 3999) { // 最后一页
        //         wx.hideLoading();
        //         this.setData({canLoadMore: !1, hasData: !!1});    // 这里设置禁止加载更多操作
        //         wx.showToast({
        //             title: msg,
        //             duration: 2000
        //         });
        //     } else if (code === 200) {  // 返回数据
        //         if (this.data.isRefresh) {  // 如果是刷新请求则关闭刷新
        //             wx.stopPullDownRefresh();
        //         } else {    // 否则合并数据
        //             classinfo = [...this.data.classInfo, ...classinfo];
        //         }
        //         head = head ? head : this.data.head;
        //         // 更新数据
        //         this.setData({
        //             hasData: !!1,
        //             nick, name, id, head, curPage, pageSize, totalPage, totalRow,
        //             classInfo: classinfo
        //         });
        //         // 关闭加载状态
        //         wx.hideLoading();
        //     }
        // }, 1000);

        httpRequest.getStudentSelfClass({
            params,
            success: res => {
                wx.hideLoading();
                let { code, data, msg } = res.data;
                if (code === 3001) {    // 无数据
                    this.setData({...defaultData, canLoadMore: !!1, hasData: !1});
                } else if (code === 3999) { // 最后一页
                    this.setData({canLoadMore: !1, hasData: !!1});
                    wx.showToast({
                        title: msg,
                        duration: 2000
                    });
                } else if (code === 200) {  // 返回数据
                    let classInfo = [...this.data.classInfo, ...data.classinfo];
                    if (this.data.isRefresh) {
                        classInfo = data.classinfo;
                    }
                    this.setData({classInfo, ...data.page, ...data.studentinfo, hasData: !!1, isRefresh: !1});
                }
            },
            fail: err => {
                wx.hideLoading();
                console.error(err);
            }
        });
    },
    /**
     * 重新加载
     * @return {[type]}
     */
    refresh: function () {
        this.setData({curPage: 1, canLoadMore: !!1, isRefresh: !!1});
        this.loadClassInfo(1);
        wx.stopPullDownRefresh();
    },
    /**
     * 加载更多
     * @return {[type]} [description]
     */
    loadMore: function () {
        // 关闭刷新状态
        this.setData({isRefresh: !1});
        this.loadClassInfo(++this.data.curPage);
    },
    /**
     * 打开反馈表单
     * @return {[type]}
     */
    feedbackShow: function () {
        this.setData({
            popupActived: !!1,
            // popupClassList: 'popup entered',
            focusStatus: !!1
        });
    },
    feedbackHide: function () {
        this.setData({
            popupActived: !1,
            focusStatus: !1
        });
    },
    formReset: function () {
        console.log(arguments)
    },
    /**
     * 发送反馈信息
     * @param  {[type]} e [事件对象]
     * @return {[type]}   [description]
     */
    formSubmit: function (e) {
        const value = e.detail.value.feedback.trim();
        if (value) {
            wx.showLoading({
                title: "提交中...",
                mask: true,
            });
            let _data_ = this.data;
            let params = {unionid: _data_.unionId, studentid: _data_.studentId, feedback: value};
            // 模拟请求数据
            // setTimeout(() => {
            //     wx.hideLoading();
            //     if (code === 4003) {    // 提交失败
            //         wx.showToast({
            //             title: '提交失败',
            //             duration: 2000
            //         });
            //     } else if (code === 200) {  // 提交成功
            //         this.setData({
            //             popupActived: !1,
            //         });
            //         wx.showToast({
            //             title: '提交成功',
            //             duration: 2000
            //         });
            //     }
            // }, 1000);

            httpRequest.getStudentSelfClass({
                params,
                success: res => {
                    wx.hideLoading();
                    let { code, data, msg } = res.data;
                    if (code === 4003) {    // 无数据
                        wx.showToast({
                            title: '提交失败',
                            duration: 2000
                        });
                    } else if (code === 200) {  // 返回数据
                        this.setData({
                            popupActived: !1,
                        });
                        wx.showToast({
                            title: '提交成功',
                            duration: 2000
                        });
                    }
                },
                fail: err => {
                    wx.hideLoading();
                    console.error(err);
                }
            });
        } else {
            wx.showToast({
                title: '内容不能为空',
                duration: 1000
            });
        }
    }
})
