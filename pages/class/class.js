// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dutyInfo: {
      week: '第12周',
      dutyClass: '高一(1)班',
      members: ['张三', '李四', '王五']
    },
    homework: [
      {
        subject: '语文',
        content: '完成课本P89习题1-5',
        deadline: '今天 22:00'
      },
      {
        subject: '数学',
        content: '完成几何证明题练习',
        deadline: '明天 12:00'
      }
    ],
    courses: [
      {
        time: '第一节 08:00-08:45',
        subject: '语文',
        teacher: '王老师',
        room: '301'
      },
      {
        time: '第二节 08:55-09:40',
        subject: '数学',
        teacher: '李老师',
        room: '301'
      }
    ],
    classMembers: {
      teachers: [
        { name: '张主任', role: '班主任' },
        { name: '李老师', role: '数学老师' },
        { name: '王老师', role: '语文老师' }
      ],
      students: [
        { name: '张三', role: '班长' },
        { name: '李四', role: '学习委员' },
        { name: '王五', role: '体育委员' }
      ]
    }
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

  }
})