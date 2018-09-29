const app = getApp();

Page({
    data:{
        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: 0,
    },
    bindCountryCodeChange: function(e){
        console.log('picker country code 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryCodeIndex: e.detail.value
        })
    },

})