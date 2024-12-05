// 教师班级管理页面
Page({
  data: {
    classList: [
      {
        name: '高一(1)班',
        studentCount: 45,
        notices: [
          { title: '期中考试安排', date: '2024-03-20' }
        ],
        homework: [
          { subject: '语文', content: '背诵《静夜思》', deadline: '今天 22:00' }
        ]
      }
    ]
  }
}) 