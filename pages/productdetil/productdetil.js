// pages/productdetil/productdetil.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{
      type:["简介","列表","评论"],
      children:[
        {
          title:"【课程介绍】",
          content:"星火式记忆法--由熟词和词根记忆生词，10倍速提高单词记忆能力，词网、词族、单词动画助记，背单词不枯燥。乱序记忆，让你的单词不再从A背到Z",
          type:"简介"
        },
        {
          title:"第一讲 act",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"试听"
        },
        {
          title:"第二讲 adapt and adopt",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"试听"
        },
        {
          title:"第三讲 art and craft",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"付费"
        },
        {
          title:"第四讲 assist",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"付费"
        },
        {
          title:"第五讲 attract",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"付费"
        },
        {
          title:"第六讲 ball",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"付费"
        },
        {
          title:"第七讲 break",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"付费"
        },
        {
          title:"第八讲 bump",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"付费"
        },
        {
          title:"第九讲 call",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"付费"
        },
        {
          title:"第十讲 capital and escape",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"付费"
        },
        {
          title:"第十一讲 car",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"付费"
        },
        {
          title:"第十二讲 care",
          type:"列表",
          time:"14:32",
          number:"1000",
          pay:"付费"
        },
        {
          img:"../../images/13.jpg",
          name:"夹断的哈",
          time:"2020-04-15",
          content:"有买这个课的吗，可以一起评课吗？",
          number:1,
          type:"评论"
        },
        {
          img:"../../images/13.jpg",
          name:"sadak",
          time:"2020-02-05",
          content:"太卡了",
          number:1,
          type:"评论"
        },
        {
          img:"../../images/13.jpg",
          name:"赵先生",
          time:"2019-11-15",
          content:"拼",
          number:1,
          type:"评论"
        }
      ]
    },
    title:"",
    imgsrc:"",
    clickNumber:0,
    price:"",
    isShow:"codeBoxActive"
  },
  openCodeBox:function (e) {
    this.setData({
      isShow:""
    })
  },
  closeCodeBox:function (e) {
    this.setData({
      isShow:"codeBoxActive"
    })
  },
  openPlayer:function (e) {
    let str=JSON.stringify(e.currentTarget.dataset.list);
    wx.navigateTo({
      url: '../playerPage/playerPage?list='+str,
    })
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
    let str=JSON.parse(options.title)
    console.log(str);
    
    this.setData({
      title:str.title,
      imgsrc:str.url,
      price:str.price
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