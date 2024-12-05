Page({
  data: {
    selectedRole: 'teacher',
    username: '',
    password: ''
  },

  selectRole(e) {
    const role = e.currentTarget.dataset.role
    this.setData({ selectedRole: role })
  },

  onUsernameInput(e) {
    this.setData({ username: e.detail.value })
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value })
  },

  login() {
    const { selectedRole, username, password } = this.data
    
    if (!username || !password) {
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
        nickName: username,
        role: selectedRole
      })
      wx.navigateBack({ delta: 1 })
    }, 1500)
  }
}) 