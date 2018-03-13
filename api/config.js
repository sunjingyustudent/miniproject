/*
 * 请求配置
 * @baseURL 请求api地址
 * @headers 头文件设置
 */

import Env from './env';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
}
const baseURL = Env.api;

export default { headers: headers, baseURL: baseURL }
