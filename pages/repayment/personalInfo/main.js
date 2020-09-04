// require("../../../static/js/manifest"), require("../../../static/js/vendor"), require("../../../static/js/pages/repayment/personalInfo/main");

var API = require('../../../utils/api')

var app = getApp();


Page({
  data: {
    clientDetail: {},
    isShowLayer: !1,
    mobile: "22222",
    standbyPhone: "18278038374"
  },
  onLoad: function (val) {

    wx.setNavigationBarTitle({
      title: '客户信息'
    });
    this.init(val)
  },
  init(val) {
    API.request('/order/getcClientDetail', {
      userNo: val.clientNo
    }, 'get', (res) => {
       this.setData({
         clientDetail:res.data
       }) 
    })
  }
});