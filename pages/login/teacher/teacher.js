// pages/login/teacher/teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacherId: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onTeacherIdInput(e) {
    this.setData({ teacherId: e.detail.value })
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value })
  },

  onLogin() {
    if (!this.data.teacherId || !this.data.password) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }

    wx.showLoading({ title: '登录中...' })

    // 模拟登录
    setTimeout(() => {
      wx.hideLoading()
      wx.setStorageSync('userInfo', {
        nickName: '李老师',
        role: 'teacher',
        teacherId: this.data.teacherId
      })
      wx.navigateBack({ delta: 2 }) // 返回个人中心页面
    }, 1500)
  }
})