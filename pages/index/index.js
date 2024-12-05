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
        name: '作业', 
        icon: 'https://via.placeholder.com/80/FF9800/ffffff?text=作业', 
        type: 'homework' 
      },
      { 
        id: 2, 
        name: '成绩', 
        icon: 'https://via.placeholder.com/80/4CAF50/ffffff?text=成绩', 
        type: 'score' 
      },
      { 
        id: 3, 
        name: '课表', 
        icon: 'https://via.placeholder.com/80/2196F3/ffffff?text=课表', 
        type: 'schedule' 
      },
      { 
        id: 4, 
        name: '请假', 
        icon: 'https://via.placeholder.com/80/9C27B0/ffffff?text=请假', 
        type: 'leave' 
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
