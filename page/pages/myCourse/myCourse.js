// import httpRequest from '../../../service/httpActions';
import httpRequest from '../../../service/rconfig';
// 模拟请求数据
const courseData = {
    "code":3001,
    "msg":'',
    "data":{
        "recently":[
            {
                "id":"12",
                "title":"艺述·经典--钢琴家郝宏图讲解<肖邦练习曲>",
                "class_time":"2017-11-23 10:34:00",
                "teacher_name":"李白",
                "is_back":"0",
                "icon":"http://test001.pnlyy.com/linewechatclass/e6284cc51d86363b1ce76faaa5d6009b",
                "counts":"2"
            },
            {
                "id":"123",
                "title":"艺述·经典--钢琴家郝宏图讲解<肖邦练习曲>",
                "class_time":"2017-11-23 10:34:00",
                "teacher_name":"李白",
                "is_back":"0",
                "icon":"http://test001.pnlyy.com/linewechatclass/e6284cc51d86363b1ce76faaa5d6009b",
                "counts":"2"
            }
        ],
        "back":[
            {
                "id":"322",
                "title":"7钢琴家冯页主讲：如何指导学生演奏肖邦圆舞曲",
                "class_time":"2017-09-28 10:40:00",
                "teacher_name":"陈洁",
                "is_back":"1",
                "icon":"http://test001.pnlyy.com/linewechatclass/7bbc274da20563655d937ba8f0d1abef",
                "counts":"2"
            }
        ]
    }
}
const defaultData = {
    backCourse: [],                                         // 回顾课程列表
    recentlyCourse: [],                                     // 直播课程列表
    hasData: !!1,           // 是否有数据，用于控制状态页面显示
}
Page({
    data: {
        unionId: wx.getStorageSync('unionId'),
        timeIcon: '../../../image/icon/time.png',               // 图标
        personIcon: '../../../image/icon/personnum.png',        // 图标
        ...defaultData,
    },
    onLoad: function () {},
    onReady: function() {
        this.refresh();
    },
    onPullDownRefresh: function () {
        this.refresh();
    },
    onReachBottom: function () {},
    /**
     * 加载课程列表
     * @return {[type]}             [description]
     */
    loadCourse: function () {
        wx.showLoading({
            title: "数据加载中",
            mask: true,
        });
        let _data_ = this.data;
        let params = {unionid: _data_.unionId};
        // 模拟请求数据
        // setTimeout(() => {
        //     let { code, data: { back, recently } } = courseData;
        //     if (code === 3001) {    // 无数据
        //         this.setData({backCourse: [], recentlyCourse: [], hasData: !1});
        //         wx.hideLoading();
        //     } else if (code === 200) { // 返回数据
        //         if (this.data.isRefresh) {  // 如果是刷新请求则关闭刷新
        //             wx.stopPullDownRefresh();
        //         } else {     // 否则合并数据
        //             back = [...this.data.backCourse, ...back];
        //             recently = [...this.data.recentlyCourse, ...recently];
        //         }
        //         this.setData({
        //             hasData: !!1,
        //             backCourse: back,
        //             recentlyCourse: recently,
        //         });
        //         wx.hideLoading();
        //     }
        // }, 1000);

        httpRequest.getMyCourse({
            params,
            success: res => {
                let { code, data, msg } = res.data;

                if (code === 3001) {    // 无数据
                    this.setData({...defaultData, hasData: !1});
                } else if (code === 200) {
                    this.setData({
                        backCourse: data.back,
                        recentlyCourse: data.recently,
                    });
                }
                wx.hideLoading();
            },
            fail: err => {
                wx.hideLoading();
                console.error(err)
            }
        });
    },

    /**
     * 重新加载课程列表
     * @return {[type]} [description]
     */
    refresh: function () {
        this.loadCourse();
        wx.stopPullDownRefresh();
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
        }));
    }
})
