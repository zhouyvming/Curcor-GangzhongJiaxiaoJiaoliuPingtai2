Page({
  data: {
    notice: null
  },

  onLoad(options) {
    const id = options.id
    // 模拟获取通知详情
    this.setData({
      notice: {
        id,
        title: '关于2024年清明节放假安排的通知',
        content: `各位师生：
根据国家法定节假日规定，现将清明节放假安排通知如下：

1. 放假时间：2024年4月4日至4月6日，共3天
2. 上课时间：4月7日（周日）正常上课
3. 注意事项：
   - 请同学们合理安排假期时间
   - 注意安全，按时返校
   - 做好假期作业

特此通知。`,
        date: '2024-03-20',
        type: '放假通知',
        publisher: '教务处',
        attachments: [
          {
            name: '放假安排表.pdf',
            url: '#'
          }
        ]
      }
    })
  }
}) 