// pages/myOrder/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:
      {
        type:["已购买","待付款"],
        product:[
          {
            id:11,
            title:"外研版(3起点)同步课堂(三上)",
            grade:"3年级上册",
            type:"已购买",
            number:"共18期",
            price:"￥99.00",
            url:"https://s1.ax1x.com/2020/08/21/dtmw4J.jpg"
          },
          {
            id:12,
            title:"冀教版(3起点)同步课堂(三上)",
            grade:"3年级上册",
            type:"已购买",
            number:"共19期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dtKKAO.jpg"
          },
          {
            id:13,
            title:"沪教版(3起点)同步课堂(三上)",
            grade:"3年级上册",
            type:"已购买",
            number:"共21期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dtKgbV.jpg"
          },
          {
            id:14,
            title:"北师大版(3起点)同步课堂(三上)",
            grade:"3年级上册",
            type:"已购买",
            number:"共16期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dtM9KI.jpg"
          },
          {
            id:15,
            title:"译林版(3起点)同步课堂(三上)",
            grade:"3年级上册",
            type:"待付款",
            number:"共18期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dtMuMn.jpg"
          },
          {
            id:16,
            title:"北师大版(1起点)同步课堂(三上)",
            grade:"3年级上册",
            type:"待付款",
            number:"共14期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dt3PSg.jpg"
          },
          {
            id:17,
            title:"北京课改版(1起点)同步课堂(三上)",
            grade:"3年级上册",
            type:"待付款",
            number:"共17期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dt3f1g.jpg"
          },
          {
            id:18,
            title:"鲁科版(3起点)同步课堂(三上)",
            grade:"3年级上册",
            type:"待付款",
            number:"共22期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dt3qhT.jpg"
          },
          {
            id:19,
            title:"人教版PEP(三下)同步课堂",
            grade:"3年级下册",
            type:"待付款",
            number:"共24期",
            price:"￥99.00",
            url:"https://s1.ax1x.com/2020/08/21/dt8BCT.jpg"
          },
          {
            id:20,
            title:"外研版(3起点)同步课堂(三下)",
            grade:"3年级下册",
            type:"待付款",
            number:"共21期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dt8tDs.jpg"
          },
          {
            id:21,
            title:"北师大版(3起点)同步课堂(三下)",
            grade:"3年级下册",
            type:"待付款",
            number:"共14期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dt8dU0.jpg"
          },
          {
            id:22,
            title:"译林版(3起点)同步课堂(三下)",
            grade:"3年级下册",
            type:"待付款",
            number:"共13期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dt8Nbn.jpg"
          },
          {
            id:23,
            title:"北师大版(3起点)同步课堂(三下)",
            grade:"3年级下册",
            type:"待付款",
            number:"共8期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dt8aEq.jpg"
          },
          {
            id:24,
            title:"北京课改版(1起点)同步课堂(三下)",
            grade:"3年级下册",
            type:"待付款",
            number:"共21期",
            price:"￥90.00",
            url:"https://s1.ax1x.com/2020/08/21/dt8w5V.jpg"
          }
          
        ]
      },
    clickNumber:0,
  },
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