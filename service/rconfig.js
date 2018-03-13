import request from '../api/request';
/*配置项目地址*/
var devUrl = "http://channelwx-test.pnlyy.com";
var localUrl = "http://channel.com";
var productionUrl = "";
/*要使用的地址*/
var use = localUrl;


/*配置接口请求路径
*/
const requestConfig = {
	//获取unionid等个人信息
	getOpenid:function (params) {
		request("get",use+"/api/mini/get-openid",params);
	},
	//获取课程列表
	getCourseList:function (params) {
		request("post",use+"/api/mini/get-course-list",params);
	},
	//获课程人气列表
	getShareList:function (params) {
		request("get",use+"/api/mini/get-share-list",params);
	},
	//我的课程
	getMyCourse:function (params) {
		request("get",use+"/api/mini/my-course-list",params);
	},
	//直播详情
	getLiveDetail:function (params) {
		request("get",use+"/api/mini/show-live-detail",params);
	},
	//我的奖励
	getMyReward:function (params) {
		request("get",use+"/api/personal/get-my-harvest",params);
	},
	//我学生的陪练单(全部学生)
	getMyStudent:function (params) {
		request("get",use+"/api/personal/all-student-class",params);
	},
	//获取学生个人全部列表
	getStudentSelfClass:function (params) {
		request("get",use+"/api/personal/student-self-class",params);
	},
	//获取客服二维码、(这个是客服传到微信的一个链接kefuid=24)
	//聊天-发送素材-在线培训、家长有话说、公司介绍
	getKefuCode:function (params) {
		request("get",use+"/api/personal/get-kefu-code",params);
	},
	//获取客服banner图(关于我们、推广计划)
	getKefuBanner:function (params) {
		request("get",use+"/api/personal/get-kefu-banner",params);
	},
	//月月奖不停
	getMyActive:function (params) {
		request("get",use+"/api/personal/month-month-active",params);
	},
	//领取红包
	getRedPackage:function (params) {
		request("post",use+"/api/personal/get-task-reward",params);
	},
	//老师添加意见反馈
	addFeedback:function (params) {
		request("post",use+"/api/personal/add-feedback",params);
	},

}

export default requestConfig
