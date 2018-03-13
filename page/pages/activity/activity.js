// import httpRequest from '../../../service/httpActions';
import httpRequest from '../../../service/rconfig';
// 模拟请求数据
const monthData = ( { monthNum = 0 } ) => {
    return {
        "code":200,
        "msg":"",
        "data":{
            "teacher_task":{
                "task_num": 8,
                "task_money": monthNum === 0 ? 58 : 88,
                "current_num": monthNum === 0 ? '0' : '2',
                "current_money":null,
                "is_get_reward":0
            },
            "exclass_task":{
                "task_num":3,
                "task_money": monthNum === 0 ? 188 : 120,
                "current_num": monthNum === 0 ? '3' : '0',
                "current_money":null,
                "is_get_reward":0
            }
        }
    }
}
const moneyDaata = ( { monthNum = 0 } ) => {
    return {
        "code":200,
        "msg":"",
        "data":{
            "money": monthNum === 0 ? 188 : 120,
        }
    }
}

const defaultTaskData = {
    task_num: 0,
    task_money: 0,
    current_num: 0,
    current_money: null,
    is_get_reward: 0,
}
// const taskBtn = ['去完成', '领红包'];
// 查询参数
const monthNum = [0, 1];

Page({
    data: {
        unionId: '',
        activeBanner: [
            'http://webchannel.dev.pnlyy.com/static/img/weike-new-banner.48ecb34.png',
            'http://webchannel.dev.pnlyy.com/static/img/class-reward-banner.732a487.png'
        ],               // 广告图
        teacherTask: defaultTaskData,
        exclassTask: defaultTaskData,
        monthNum: 0,        // 查询参数，默认当月 0 当月 1上月
        teacherTaskStatus: 0,      // 微课拉新活动进展状态    -1:未完成 1：完成未领红包 2：已领红包
        exclassTaskStatus: 0,      // 体验达人活动进展状态    -1:未完成 1：完成未领红包 2：已领红包
        activityBtnText: '上月活动',    // 切换活动按钮文字
        isOpenReward: !1,           // 是否打开红包
        money: '0',              // 红包数额, 默认0
    },
    onLoad: function () {
        this.setData({unionId: getApp().globalData.unionId});
    },
    onShow: function () {
        this.load();
    },
    onReady: function() {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    onShareAppMessage: function () {
        return {
            title: '自定义转发标题',
            path: ''
        }
    },
    /**
     * 加载数据
     * @param  {Object} [params={}] [description]
     * @return {[type]}             [description]
     */
    load: function () {
        wx.showLoading({
            title: "数据加载中",
            mask: true,
        });
        let _data_ = this.data;
        let params = {unionid: _data_.unionId, monthNum: _data_.monthNum};
        // 模拟请求数据
        // setTimeout(() => {
        //     let { code, data: { teacher_task, exclass_task } } = monthData(params);
        //     if (code === 200) { // 返回数据
        //         this.setData({
        //             teacherTask: teacher_task,
        //             exclassTask: exclass_task,
        //             teacherTaskStatus: teacher_task.is_get_reward ? 2 : teacher_task.task_num == teacher_task.current_num ? 1 : -1,
        //             exclassTaskStatus: exclass_task.is_get_reward ? 2 : exclass_task.task_num == exclass_task.current_num ? 1 : -1,
        //         });
        //         console.log(exclass_task.is_get_reward ? 2 : exclass_task.task_num == exclass_task.current_num ? 1 : -1)
        //         wx.hideLoading();
        //     }
        // }, 1000);

        httpRequest.getMyActive({
            params,
            success: res => {
                wx.hideLoading();
                let { code, data, msg } = res.data;
                if (code === 3001) {    // 无数据
                    this.setData({teacherTask: defaultTaskData, exclassTask: defaultTaskData});
                } else if (code === 200) {  // 返回数据
                    const { teacher_task, exclass_task } = data;
                    this.setData({
                        teacherTask: teacher_task,
                        exclassTask: exclass_task,
                        teacherTaskStatus: teacher_task.is_get_reward ? 2 : teacher_task.task_num == teacher_task.current_num ? 1 : -1,
                        exclassTaskStatus: exclass_task.is_get_reward ? 2 : exclass_task.task_num == exclass_task.current_num ? 1 : -1,
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
     * [description]
     * @param  {Number} rewardType 领奖类型
     * @return {[type]}            [description]
     */
    getTaskReward: function (rewardType) {
        wx.showLoading({
            title: "数据加载中",
            mask: true,
        });
        // 模拟请求数据
        setTimeout(() => {
            let { code, data: { money }, msg } = moneyDaata({monthNum: this.data.monthNum});
            if (code === 200) { // 返回数据
                this.setData({
                    money,
                    isOpenReward: !!1,
                    teacherTaskStatus: rewardType === 1 ? 2 : this.data.teacherTaskStatus,
                    exclassTaskStatus: rewardType === 2 ? 2 : this.data.exclassTaskStatus
                });
                wx.hideLoading();
            }
        }, 1000);
        // httpActions.getActiveRedPackage(params, res => {
        //     let { code, data: { money }, msg } = res.data;
        //
        //     if (code === 3007) {    // 已领取红包
        //
        //     } else if (code === 3008) { // 没有完成任务
        //
        //     } else if (code === 4003) { // 插入数据失败
        //         wx.showToast({
        //             title: msg,
        //             duration: 2000
        //         });
        //     } else if (code === 200) {  // 返回数据
        //
        //         this.setData({
        //             money
        //         });
        //     }
        //     wx.hideLoading();
        // }, err => {
        //     wx.hideLoading();
        //     console.log(err)
        // });
    },
    /**
     * 点击事件：
     * 1、如任务状态未完成，则跳转到近期课程去完成任务；
     * 2、如已完成但还未领红包，则请求红包接口；
     */
    todoTeacherTask: function () {
        const { teacherTaskStatus } = this.data;
        if (teacherTaskStatus === -1) {
            wx.navigateTo({
                url: '../recently/recently',
            });
        } else if (teacherTaskStatus === 1) {
            this.getTaskReward(1);
        }
    },
    todoExclassTask: function () {
        const { exclassTaskStatus } = this.data;
        if (exclassTaskStatus === -1) {
            wx.navigateTo({
                url: '../recently/recently',
            });
        } else if (exclassTaskStatus === 1) {
            this.getTaskReward(2);
        }
    },
    /**
     * 关闭红包界面
     */
    closeReward: function () {
        this.setData({isOpenReward: !1});
    },
    /**
     * 本月和上月活动切换
     */
    switchMonthActivity: function () {
        let monthNum = this.data.monthNum;
        this.setData({
            monthNum: monthNum === 0 ? 1 : 0,
            activityBtnText: monthNum === 0 ? '下月活动' : '上月活动',
        });
        this.load({monthNum: this.data.monthNum});
    }

})
