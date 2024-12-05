// 学生课程表页面
Page({
  data: {
    weekDays: ['一', '二', '三', '四', '五'],
    timeSlots: ['第一节', '第二节', '第三节', '第四节'],
    schedule: [
      // 每天的课程安排
      [
        { subject: '语文', teacher: '张老师', room: '301' },
        { subject: '数学', teacher: '李老师', room: '302' },
        // ...
      ],
      // ...其他天的课程
    ]
  }
}) 