// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedType: 'teacher',
    account: '',
    password: '',
    rememberPassword: false,
    autoLogin: false,
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
    // 获取本地存储的登录信息
    const loginInfo = wx.getStorageSync('loginInfo')
    if (loginInfo) {
      this.setData({
        selectedType: loginInfo.type,
        rememberPassword: loginInfo.rememberPassword,
        autoLogin: loginInfo.autoLogin
      })

      if (loginInfo.rememberPassword) {
        this.setData({
          account: loginInfo.account,
          password: loginInfo.password
        })
      }

      // 如果开启了自动登录，直接登录
      if (loginInfo.autoLogin) {
        this.onLogin()
      }
    }
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
   * 用户点击右上角分
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
    const { selectedType, account, password, rememberPassword, autoLogin } = this.data
    
    // 验证输入
    if (!account || !password) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }

    // 验证账号密码
    if (account !== 'admin' || password !== '123') {
      wx.showToast({
        title: '账号或密码错误',
        icon: 'none'
      })
      return
    }

    wx.showLoading({
      title: '登录中...'
    })

    // 模拟登录成功
    setTimeout(() => {
      wx.hideLoading()
      
      // 保存用户信息到本地
      const userInfo = {
        account: account,
        type: selectedType,
        role: this.getRoleName(selectedType),
        name: this.getDefaultName(selectedType)
      }
      wx.setStorageSync('userInfo', userInfo)

      // 保存登录信息
      if (rememberPassword) {
        wx.setStorageSync('loginInfo', {
          type: selectedType,
          account,
          password,
          rememberPassword,
          autoLogin
        })
      } else {
        wx.removeStorageSync('loginInfo')
      }

      // 根据用户类型跳转到不同页面
      this.navigateByUserType(selectedType)
    }, 1000)
  },

  // 获取角色名称
  getRoleName(type) {
    switch(type) {
      case 'teacher': return '老师'
      case 'parent': return '家长'
      case 'student': return '学生'
      default: return ''
    }
  },

  // 获取默认用户名
  getDefaultName(type) {
    switch(type) {
      case 'teacher': return '张老师'
      case 'parent': return '李家长'
      case 'student': return '王同学'
      default: return ''
    }
  },

  // 根据用户��型跳转页面
  navigateByUserType(type) {
    let url = '/pages/index/index'  // 默认首页
    
    switch(type) {
      case 'teacher':
        // 老师跳转到班级管理页面
        url = '/pages/class/class'
        break
      case 'parent':
        // 家长跳转到学生信息页面
        url = '/pages/student/info'
        break
      case 'student':
        // 学生跳转到课程表页面
        url = '/pages/schedule/schedule'
        break
    }

    wx.switchTab({
      url,
      success: () => {
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        })
      }
    })
  },

  // 切换记住密码
  onRememberPasswordChange(e) {
    this.setData({
      rememberPassword: e.detail.value
    })
  },

  // 切换自动登录
  onAutoLoginChange(e) {
    this.setData({
      autoLogin: e.detail.value,
      rememberPassword: e.detail.value // 自动登录必须记住密码
    })
  },

  onLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除自动登录
          const loginInfo = wx.getStorageSync('loginInfo')
          if (loginInfo) {
            loginInfo.autoLogin = false
            wx.setStorageSync('loginInfo', loginInfo)
          }
          
          // 清除用户信息
          wx.removeStorageSync('userInfo')
          
          // 跳转到登录页
          wx.reLaunch({
            url: '/pages/profile/profile'
          })
        }
      }
    })
  }
})