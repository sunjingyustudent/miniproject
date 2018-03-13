import config from './config';

const request = ({
    url = '',
    method = 'get',
    dataType = 'json',
    params = null,
    success = f => f,
    fail = f => f,
    complete = f => f,
}, isOutsideLink) => {
        url = isOutsideLink ? url : config.baseURL + url;
        return wx.request({
          url: url, //仅为示例，并非真实的接口地址
          method: method,
          dataType: dataType,
          data: params,
          header: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          success: success,
          fail: fail,
          complete: complete,
      });
    }

export default request;
