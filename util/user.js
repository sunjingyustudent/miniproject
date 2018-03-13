export function getUserInfo() {
   return wx.getStorageSync('userInfo')||{};
}

export default getUserInfo;