// pages/login/parent/parent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    code: '',
    countdown: 0,
    btnText: '获取验证码'
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

  onPhoneInput(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  onCodeInput(e) {
    this.setData({
      code: e.detail.value
    })
  },

  getCode() {
    if (this.data.countdown > 0) return
    if (!this.data.phone || !/^1\d{10}$/.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      })
      return
    }

    // 发送验证码
    let countdown = 60
    this.setData({ countdown })
    const timer = setInterval(() => {
      countdown--
      if (countdown <= 0) {
        clearInterval(timer)
        this.setData({
          countdown: 0,
          btnText: '获取验证码'
        })
      } else {
        this.setData({
          countdown,
          btnText: `${countdown}s后重新获取`
        })
      }
    }, 1000)
  },

  onLogin() {
    if (!this.data.phone || !this.data.code) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }

    // 这里添加登录逻辑
    wx.showLoading({
      title: '登录中...'
    })

    // 模拟登录
    setTimeout(() => {
      wx.hideLoading()
      wx.setStorageSync('userInfo', {
        nickName: '张三家长',
        role: '家长',
        avatarUrl: '/images/avatar/default.png'
      })
      wx.navigateBack()
    }, 1500)
  }
})