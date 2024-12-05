// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedType: 'teacher',
    account: '',
    password: '',
    loginButtons: [
      {
        type: 'teacher',
        text: '我是老师',
        color: '#4086F4'
      },
      {
        type: 'parent',
        text: '我是家长',
        color: '#FF5B8F'
      },
      {
        type: 'student',
        text: '我是学生',
        color: '#4CD964'
      }
    ]
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

  onTypeSelect(e) {
    const type = e.currentTarget.dataset.type
    this.setData({ selectedType: type })
  },

  onAccountInput(e) {
    this.setData({ account: e.detail.value })
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value })
  },

  onLogin() {
    const { selectedType, account, password } = this.data
    if (!account || !password) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }

    wx.showLoading({
      title: '登录中...'
    })

    setTimeout(() => {
      wx.hideLoading()
      wx.setStorageSync('userInfo', {
        type: selectedType,
        account: account
      })
      wx.switchTab({
        url: '/pages/index/index'
      })
    }, 1500)
  }
})