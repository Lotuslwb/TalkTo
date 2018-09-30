const app = getApp();

Page({
    data:{
        message:""
    },
    switchTo:function(){
        wx.navigateTo({
            url:"/pages/sendMsg/sendMsg"
          })
    },

    onLoad:function(options){
        this.setData({
            message:options.msg
        })
    }

})