//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    msgCode:"",
    openid:""

  },
  sendTo:function(){
    var openid = this.data.openid
    wx.navigateTo({
      url:"/pages/sendMsg/sendMsg?openid=" + openid
    })
  },
  handleMsgCode:function(e){
   // console.log('input------>',e);
   var value = e.detail.value;
    if(value.length && value.length == 6){
      console.log('send!!',this.data.openid)
      app.HttpService.querySMS({
        openId:this.data.openid,
        code:value
      }).then(res =>{
        console.log('res------->',res)
        if(res.code == 200 && res.data.length>0){
          const msg = res.data[0].text;
          console.log('msg------->',msg);
          wx.navigateTo({
            url:"/pages/readMsg/readMsg?msg=" + msg
          })
        }  
      }).catch(err =>{
        console.log(err)
        const errMsg = err.data.message;
        wx.showToast({
          icon:'none',
          title: errMsg,
          duration: 3000
      });
      })
    }
  },
  onLoad: function () {
    app.userInfoReadyCallback = (openid) => {
      this.setData({
        openid:openid
      })
      console.log(openid);
    }
  },
  onShow: function () {
    this.setData({
      msgCode:""
    })
  },
});