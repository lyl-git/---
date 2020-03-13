// pages/lists/lists.js
Page({
  data: {
      title:'',
      subjects:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //接受来自index.wxml点击后的传值
    console.log(options.path)
    //提示加载,用户体验效果
    var path=options.path
      wx.showLoading({
        title: '再等等',
      })
    //保留this指向
    var that = this
      wx.request({
        url: 'http://127.0.0.1:5000/v2/movie/'+path, //仅为示例，并非真实的接口地址
        success(res) {
          // console.log(res.data)
          that.setData({
            subjects: res.data.subjects,
            title: res.data.title
          })
          console.log(that.data.title)
          console.log(that.data.subjects)
        },
      })
    //接受到数据后停止显示加载
    setTimeout(function() {
      wx.hideLoading()
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})