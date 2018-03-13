// var API_URL = 'http://channelwx-test.pnlyy.com/api/course/get-course-list'

var requestHandler = {
    params:{},
    success: function(res){
        // success
        return res;
    },
    fail: function() {
        // fail
    },
}

function request(method,url,requestHandler) {
    //注意：可以对params加密等处理
    var params = requestHandler.params;

    wx.request({
      url: url,
      data: params,
      method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}, // 设置请求的 header
      success: function(res){
        requestHandler.success(res)
      },
      fail: function() {
        requestHandler.fail()
      },
      complete: function() {
        // complete
      }
    })
}

export default  request
