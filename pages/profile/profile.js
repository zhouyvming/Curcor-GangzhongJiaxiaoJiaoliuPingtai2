// pages/profile/profile.js
Page({
  data: {
    userInfo: null,
    stats: {
      posts: 0,    // 发布数初始值为0
      collects: 0, // 收藏数初始值为0
      likes: 0     // 获赞数初始值为0
    }
  },

  onShow() {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({ userInfo })
    }
  },

  // 跳转到登录页面
  goToLogin() {
    console.log('点击登录按钮')
    wx.navigateTo({
      url: '/pages/login/index/index',
      success: () => {
        console.log('跳转成功')
      },
      fail: (err) => {
        console.error('跳转失败：', err)
        wx.showToast({
          title: '跳转失败',
          icon: 'none'
        })
      }
    })
  }
})