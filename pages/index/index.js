//index.js
//获取应用实例
const app = getApp();

Page({
  data: {

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
    app.HttpService.getList({}).then(data => {
      console.log(data);
    })
  },
  onShow: function () {

  },
});