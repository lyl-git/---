// pages/movie/movie.js
Page({
  data: {
      obj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载进程提示.好的用户体验
    wx.showLoading({
      title: '再等等',
    })
    console.log(options.id)
    var id=options.id
    var that=this
    wx.request({
      url: 'http://127.0.0.1:5000/v2/movie/subject/'+id, //仅为示例，并非真实的接口地址
      success(res) {
        // console.log(res.data)
        that.setData({
          obj: res.data
        })
        console.log('初始数据',that.data.obj)
      }
    })
    //接受到数据后停止显示加载
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})