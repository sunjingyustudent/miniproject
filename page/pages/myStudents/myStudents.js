// import httpRequest from '../../../service/httpActions';
import httpRequest from '../../../service/rconfig';
// 模拟请求数据
const myStudentsData = (curPage = 1) => {
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
            "classinfo":[
                {
                    "time_class":"2017-11-22",
                    "counts":"1",
                    "student_id":curPage+"964s47",
                    "nick":"渠道小程序N"
                },
                {
                    "time_class":"2017-11-21",
                    "counts":"1",
                    "student_id":curPage+"96a445",
                    "nick":"渠道小程序测...."
                },
                {
                    "time_class":"2017-11-20",
                    "counts":"1",
                    "student_id":curPage+"964s05",
                    "nick":"crm测试1...."
                },
                {
                    "time_class":"2017-11-14",
                    "counts":"1",
                    "student_id":curPage+"96351a",
                    "nick":"测试哒哒"
                },
                {
                    "time_class":"2017-10-20",
                    "counts":"1",
                    "student_id":curPage+"9s64019",
                    "nick":"crm测试1...."
                },
                {
                    "time_class":"2017-11-22",
                    "counts":"1",
                    "student_id":curPage+"964ss47",
                    "nick":"渠道小程序N"
                },
                {
                    "time_class":"2017-11-21",
                    "counts":"1",
                    "student_id":curPage+"96ad445",
                    "nick":"渠道小程序测...."
                },
                {
                    "time_class":"2017-11-20",
                    "counts":"1",
                    "student_id":curPage+"964s0s5",
                    "nick":"crm测试1...."
                },
                {
                    "time_class":"2017-11-14",
                    "counts":"1",
                    "student_id":curPage+"96351sa",
                    "nick":"测试哒哒"
                },
                {
                    "time_class":"2017-10-20",
                    "counts":"1",
                    "student_id":curPage+"964019s",
                    "nick":"crm测试1...."
                },
                {
                    "time_class":"2017-11-22",
                    "counts":"1",
                    "student_id":curPage+"9ss64s47",
                    "nick":"渠道小程序N"
                },
                {
                    "time_class":"2017-11-21",
                    "counts":"1",
                    "student_id":curPage+"96sada445",
                    "nick":"渠道小程序测...."
                },
                {
                    "time_class":"2017-11-20",
                    "counts":"1",
                    "student_id":curPage+"96as4s05",
                    "nick":"crm测试1...."
                },
                {
                    "time_class":"2017-11-14",
                    "counts":"1",
                    "student_id":curPage+"9635ss1a",
                    "nick":"测试哒哒"
                },
                {
                    "time_class":"2017-10-20",
                    "counts":"1",
                    "student_id":curPage+"96401219",
                    "nick":"crm测试1...."
                },
                {
                    "time_class":"2017-11-22",
                    "counts":"1",
                    "student_id":curPage+"96124s47",
                    "nick":"渠道小程序N"
                },
                {
                    "time_class":"2017-11-21",
                    "counts":"1",
                    "student_id":curPage+"96aasd1445",
                    "nick":"渠道小程序测...."
                },
                {
                    "time_class":"2017-11-20",
                    "counts":"1",
                    "student_id":curPage+"964shf05",
                    "nick":"crm测试1...."
                },
            ],
            "page":{"curPage":curPage,"pageSize":15,"totalPage":2,"totalRow":"18"}
        }
    }

}

// 默认数据
const defaultData = {
    curPage: 0,                                         // 当前页码，默认值0
    pageSize: 15,                                       // 每页条数
    totalPage: 0,                                       // 总页数
    totalRow: '',                                       // 数据总条数
    classInfo: [],                                      // 所有我的学生课程列表
    canLoadMore: !!1,                                   // 表示是否刷新状态，通过此属性可关闭刷新操作
    isRefresh: !1,
}

Page({
    data: {
        unionId: '',
        extendIcon: '../../../image/icon/extend.png',       // 详情图标
        classId: '',                                        // 课程id
        hasData: !!1,                                       // 是否有数据，用于控制状态页面显示
        ...defaultData
    },
    onLoad: function () {
        this.setData({unionId: getApp().globalData.unionId});
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
    /**
     * 加载课程列表
     * @param  {Number} [curPage=1] [description]
     * @return {[type]}             [description]
     */
    loadStudents: function (curPage = 1) {
        wx.showLoading({
            title: "数据加载中",
            mask: true,
        });
        let _data_ = this.data;
        let params = {unionid: _data_.unionId, curPage: curPage, pageSize: _data_.pageSize};
        // 模拟请求数据
        // setTimeout(() => {
        //     let { code, data: { classinfo, page: { curPage, pageSize, totalPage, totalRow } }, msg } = myStudentsData(this.data.curPage);
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
        //         let classInfo = [...this.data.classInfo, ...data.classinfo];
        //         if (this.data.isRefresh) {  // 如果是刷新请求则关闭刷新
        //             classinfo = data.classinfo;
        //         }
        //         this.setData({
        //             hasData: !!1,
        //             classInfo,
        //             ...data.page,
        //         });
        //         wx.hideLoading();
        //     }
        // }, 1000);

        httpRequest.getMyStudent({
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
                    if (this.data.isRefresh) {  // 如果是刷新请求则关闭刷新
                        classInfo = data.classinfo;
                    }
                    this.setData({classInfo, ...data.page, hasData: !!1, isRefresh: !1});
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
        this.loadStudents(1);
        wx.stopPullDownRefresh();
    },
    /**
     * 加载更多课程
     * @return {[type]}
     */
    loadMore: function () {
        this.setData({isRefresh: !1});
        this.loadStudents(++this.data.curPage);

    },
    /**
     * 点击查看学生陪练详情
     * @param  {[type]} event [事件对象]
     * @return {[type]}       [description]
     */
    showStudentDetail: function (event) {
        let studentId = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../studentDetail/studentDetail?studentId='+studentId
        })
    }
})
