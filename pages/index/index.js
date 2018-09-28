//index.js
//获取应用实例
const app = getApp();

Page({
  data: {

  },
  onLoad: function () {
    app.HttpService.getList({}).then(data => {
      console.log(data);
    })
  },
  onShow: function () {

  },
});