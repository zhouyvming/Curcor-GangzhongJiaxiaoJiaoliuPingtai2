// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeList: [
      {
        id: 1,
        title: '关于2024年清明节放假安排的通知',
        content: '根据国家法定节假日规定，现将清明节放假安排通知如下...',
        date: '2024-03-20',
        type: '放假通知',
        isImportant: true
      },
      {
        id: 2,
        title: '2024年春季校园文化节活动安排',
        content: '为丰富校园文化生活，展示学生才艺，定于4月举办校园文化节...',
        date: '2024-03-19',
        type: '活动通知',
        isImportant: false
      },
      {
        id: 3,
        title: '关于开展校园安全检查的通知',
        content: '为确保校园安全，将于本周开展安全隐患排查...',
        date: '2024-03-18',
        type: '安全通知',
        isImportant: true
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

  onNoticeTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/notice/detail/detail?id=${id}`
    })
  }
})