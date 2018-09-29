//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    msgCode:""

  },
  sendTo:function(){
    wx.navigateTo({
      url:"/pages/sendMsg/sendMsg"
    })
  },
  handleMsgCode:function(e){
   // console.log('input------>',e);
   var value = e.detail.value;
    if(value.length && value.length == 6){
      console.log('send!!')
      wx.navigateTo({
        url:"/pages/readMsg/readMsg"
      })

    }
  },
  onLoad: function () {
    app.userInfoReadyCallback = (openid) => {
      console.log(openid);
    }
  },
  onShow: function () {
    this.setData({
      msgCode:""
    })
  },
});