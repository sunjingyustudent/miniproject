/**/
import httpRequest from '../api/http';


const httpActions = {
	/**
	 * [获取课程分类]
	 * @param  {[Object|String]} params   [请求参数]
	 * @param  {[Function]} success  [成功回调]
	 * @param  {[Function]} fail     [失败回调]
	 * @param  {[Function]} complete [完成回调]
	 * @return {[Object]}          [requestTask]
	 */
	getClassify: (params, success, fail, complete) => httpRequest({
			url: '/api/course/get-classify', params, success, fail, complete,
		}),
    // 获取我的课程
	getMyCourse: (params, success, fail, complete) => httpRequest({
			url: '/api/course/my-course-list', params, success, fail, complete,
		}),
	// 获取最近直播课列表
	getCourseList: (params, success, fail, complete) => httpRequest({
			url: '/api/course/get-course-list', params, success, fail, complete
		}),
	// 获取用户客服名片
	getKefucard: (params, success, fail, complete) => httpRequest({
			url: '/api/about/us', params, success, fail, complete,
		}),
	// 获取微信配置
	getWxJsConfig: (params, success, fail, complete) => httpRequest({
			url: '/api/other/jsconfig', params, success, fail, complete,
		}),
	// 获取我的奖励列表
	getMyReward: (params, success, fail, complete) => httpRequest({
			url: '/api/user/get-my-harvest', params, success, fail, complete,
		}),
	// 直播详情页面
	getClassShow: (params, success, fail, complete) => httpRequest({
			url: '/api/course/show-live-detail', params, success, fail, complete,
		}),
	// 获取直播课人气
	getClassRenqi: (params, success, fail, complete) => httpRequest({
			url: '/api/course/get-share-list', params, success, fail, complete,
		}),
	// 添加分享记录
	addShareRecord: (params, success, fail, complete) => httpRequest({
			url: '/api/course/share-course', params, success, fail, complete,
		}),
	// 立即体现
	drawMyMoney: (params, success, fail, complete) => httpRequest({
			url: '/api/user/draw-my-money', params, success, fail, complete,
		}),
	// 获取客服名片
	getKefuqQrcode: (params, success, fail, complete) => httpRequest({
			url: '/api/other/get-kefuqrcode', params, success, fail, complete,
		}),
	// 月月奖不停
	getMyActive: (params, success, fail, complete) => httpRequest({
			url: '/api/user/month-month-active', params, success, fail, complete,
		}),
	// 月月奖不停，获取活动红包
	getActiveRedPackage: (params, success, fail, complete) => httpRequest({
			url: '/api/user/get-task-reward', params, success, fail, complete, method: 'post'
		}),
	// 我要推荐
	getRecommend: (params, success, fail, complete) => httpRequest({
			url: '/api/user/go-recommend', params, success, fail, complete,
		}),
	// 分享页面
	getSharePage: (params, success, fail, complete) => httpRequest({
			url: '/api/other/share-page', params, success, fail, complete,
		}),
	// 获取我推荐的学生
	getMyStudent: (params, success, fail, complete) => httpRequest({
			url: '/api/user/all-student-class', params, success, fail, complete,
		}),
	// 获取我学生的陪练情况
	getStudentClassList: (params, success, fail, complete) => httpRequest({
			url: '/api/user/student-self-class', params, success, fail, complete,
		}),
	// 添加意见反馈
	addFeedBack: (params, success, fail, complete) => httpRequest({
			url: '/api/user/add-channel-feedback', params, success, fail, complete,
		}),
	// 获取未上体验课名单
	getNoExList: (params, success, fail, complete) => httpRequest({
			url: '/api/user/student-not-experience', params, success, fail, complete,
		}),
	// 进荔枝微课数据汇总
	addInterRecord: (params, success, fail, complete) => httpRequest({
			url: '/api/other/add-course-into-statistics', params, success, fail, complete, method: 'post',
		}),
	// 获取感恩节活动
	getThanksgivingActive: (params, success, fail, complete) => httpRequest({
			url: '/api/user/thanksgiving-day-active', params, success, fail, complete,
		}),
	// 获取感恩节奖励
	getThanksgivingAward: (params, success, fail, complete) => httpRequest({
			url: '/api/user/go-thanksgiving-message', params, success, fail, complete,
		}),
}
export default httpActions;
