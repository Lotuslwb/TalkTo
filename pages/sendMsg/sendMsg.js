const app = getApp();

Page({
    data:{
        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: 0,
        initCount:0,
        maxCount:120,
        countColor:"#b2b2b2",
        initData:"",
        phoneNumber:""
    },
    bindCountryCodeChange: function(e){
        console.log('picker country code 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryCodeIndex: e.detail.value
        })
    },
    getResult:function(){
        console.log("确认",this.data.phoneNumber)
        console.log(this.checkPhone(this.data.phoneNumber))
        if(this.checkPhone(this.data.phoneNumber)){
            wx.navigateTo({
                url:"/pages/result/result_success"
              })
        }else{
            // wx.showModal({
            //     content: '请输入有效手机号码',
            //     showCancel: false,
            //     success: function (res) {
            //         if (res.confirm) {
            //             console.log('用户点击确定')
            //         }
            //     }
            // });
            wx.showToast({
                icon:'none',
                title: '请输入有效手机号码',
                duration: 3000
            });
        }
    },
    getPhone:function(e){
        var phone = e.detail.value;
        this.setData({
            phoneNumber:phone
        })
    },
    checkPhone:function(num){
        var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
         if (!myreg.test(num)) {
            return false;
        } else {
             return true;
         }

    },
    handleMsg:function(e){
        var text = e.detail.value;
        console.log('text',text.length);
        this.setData({
            initCount:text.length
        })
        if(text.length > 120){
            this.setData({
                countColor:"#FF0000"
            })
        }else{
            this.setData({
                countColor:"#b2b2b2"
            })
        }
        
    },
    onShow: function () {
        this.setData({
          initData:""
        })
      },

})