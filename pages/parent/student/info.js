// 家长查看学生信息页面
Page({
  data: {
    studentInfo: {
      name: '张三',
      class: '高一(1)班',
      number: '001',
      attendance: {
        total: 100,
        absent: 0,
        late: 2
      },
      scores: [
        { subject: '语文', score: 95 },
        { subject: '数学', score: 92 }
      ]
    }
  }
}) 