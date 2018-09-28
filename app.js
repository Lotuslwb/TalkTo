//app.js
import WxValidate from './plugins/wx-validate/WxValidate'
import WxService from './plugins/wx-service/WxService'
import HttpResource from './helpers/HttpResource'
import HttpService from './helpers/HttpService'
import __config from './etc/config'

App({
  onLaunch() {
    // this.login();
  },
  onShow() {
    console.log('ApponShow');
  },
  onHide() {

  },
  login() {
  
    this.WxService.login()
      .then(data => {
        var code = data.code;
        console.log(code);
        this.HttpService.getuserinfobycode({
          code
        }).then(data => {
          userinfo = data.data;
          this.WxService.setStorage({
            key: "userinfo",
            data: userinfo
          }).then((res) => {
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          });
        })
      })
  },
  globalData: {
    userInfo: null,
    currentRole: ['admin']
  },
  renderImage(path) {
    if (!path) return ''
    if (path.indexOf('http') !== -1) return path
    return `${this.__config.domain}${path}`
  },
  WxValidate: (rules, messages) => new WxValidate(rules, messages),
  HttpResource: (url, paramDefaults, actions, options) => new HttpResource(url, paramDefaults, actions, options).init(),
  HttpService: new HttpService({
    baseURL: __config.basePath,
  }),
  WxService: new WxService,
  __config,
})