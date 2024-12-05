// index.js
Page({
  data: {
    bannerList: [
      { 
        id: 1, 
        imageUrl: 'https://via.placeholder.com/750x360/FF9800/ffffff?text=Banner1' 
      },
      { 
        id: 2, 
        imageUrl: 'https://via.placeholder.com/750x360/4CAF50/ffffff?text=Banner2' 
      },
      { 
        id: 3, 
        imageUrl: 'https://via.placeholder.com/750x360/2196F3/ffffff?text=Banner3' 
      }
    ],
    gridList: [
      {
        id: 1,
        type: 'homework',
        name: '作业',
        icon: 'https://via.placeholder.com/80/FF9800/ffffff?text=作业'
      },
      {
        id: 2,
        type: 'score',
        name: '成绩',
        icon: 'https://via.placeholder.com/80/4CAF50/ffffff?text=成绩'
      },
      {
        id: 3,
        type: 'schedule',
        name: '课表',
        icon: 'https://via.placeholder.com/80/2196F3/ffffff?text=课表'
      },
      {
        id: 4,
        type: 'leave',
        name: '请假',
        icon: 'https://via.placeholder.com/80/9C27B0/ffffff?text=请假'
      },
      {
        id: 5,
        type: 'club',
        name: '社团活动',
        icon: 'https://via.placeholder.com/80/FF5722/ffffff?text=社团'
      },
      {
        id: 6,
        type: 'repair',
        name: '宿舍报修',
        icon: 'https://via.placeholder.com/80/795548/ffffff?text=报修'
      },
      {
        id: 7,
        type: 'rules',
        name: '校规校纪',
        icon: 'https://via.placeholder.com/80/607D8B/ffffff?text=校规'
      },
      {
        id: 8,
        type: 'feedback',
        name: '意见反馈',
        icon: 'https://via.placeholder.com/80/009688/ffffff?text=反馈'
      }
    ],
    newsList: [
      {
        id: 1,
        title: '学校举办2024年春季运动会',
        cover: 'https://via.placeholder.com/200x140/FF9800/ffffff?text=运动会',
        date: '2024-03-20'
      },
      {
        id: 2,
        title: '我校学生在市级比赛中获得佳绩',
        cover: 'https://via.placeholder.com/200x140/4CAF50/ffffff?text=比赛',
        date: '2024-03-19'
      }
    ]
  },

  onLoad() {
    // 移除 getNewsList 调用，因为我们现在使用静态数据
  },

  onBannerTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/news/detail?id=${id}`
    })
  },

  onGridTap(e) {
    const type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: `/pages/function/${type}/${type}`
    })
  },

  onNewsTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/news/detail?id=${id}`
    })
  }
})
