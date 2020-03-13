//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //轮播图数据
    background: ['banner1', 'banner2', 'banner3'],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular:true,
    interval:2000,
    //内容部分数据
    list: [
      { id: 1, name: '正在热映',path:'in_theaters'},
      { id: 2, name: '即将上映', path: 'new_movies' },
      { id: 3, name: 'TOP', path: 'top250' },
    ],
    //sujjects
    subjects: [],
    //title
    title: ''
  },
  //事件处理函数

  onLoad: function () {
  }

})
