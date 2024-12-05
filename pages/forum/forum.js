// pages/forum/forum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList: [
      {
        id: 1,
        title: '关于开展春季运动会的通知',
        content: '为丰富校园文化生活，增强学生体质...',
        author: '体育组',
        time: '2024-03-20',
        comments: 5
      },
      {
        id: 2,
        title: '家长交流：如何培养孩子的学习兴趣',
        content: '每个孩子都有自己的学习特点...',
        author: '匿名用户',
        time: '2024-03-19',
        comments: 8
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

  onPostTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/forum/post-detail/post-detail?id=${id}`
    })
  },

  onNewPost() {
    wx.navigateTo({
      url: '/pages/forum/new-post/new-post'
    })
  }
})