const app = getApp();


Page({

    switchTo:function(){
        wx.navigateTo({
            url:"/pages/sendMsg/sendMsg"
          })
    },
    backTo:function(){
        wx.navigateTo({
            url:"/pages/index/index"
          })
    }

});