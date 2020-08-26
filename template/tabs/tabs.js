// template/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    clickNumber:0,
    product:[]
  },


  //点击上方文字  切换
  centerTap:function(e) {
    var curr = e.currentTarget.dataset.curr     
                
    this.setData({
        clickNumber: curr
    })
  },
  changeSwipe:function(e) {
    var type =
      e.detail.current;
    this.setData({
      clickNumber: type
    });
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    let tabs=JSON.parse(options.product)
    this.setData({
      list:tabs
    })
    
    wx.setNavigationBarTitle({
      title: tabs.title
    })
  },
  openProductDetil:function (e) {
    let str=JSON.stringify(e.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../../pages/productdetil/productdetil?title='+str,
    })
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