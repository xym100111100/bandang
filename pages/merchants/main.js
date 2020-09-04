//require("../../static/js/manifest"), require("../../static/js/vendor"), require("../../static/js/pages/merchants/main");
var API = require('../../utils/api.js')

var app = getApp();


Page({
  data: {
    merchantsList: [{
      iconInfos:{
        text:'商'
      },
      text:'广西南宁美容有限公司',
      partnerNo:1,
      showExpeditedCreditQRCode:true,
      showSupCreditQRCode:true,
      showNormalCreditQRCode:true,
    }],
    searchVal: "",
    searchPlace: "搜索商户名称",
    pageNumber: 1,
    pageSize: 5,
    nonepageFlag: true,
    hasNextPage: !0,
    isShowQrcode: !1,
    qrBase64: "",
    isRefuse: !1,
    isShowCustomerReg: !0,
    qrTitle: "商家二维码"
  },
  onLoad: function (a) {
    wx.setNavigationBarTitle({
      title: '丽人贷商户列表'
    });
    this.init()
  },
  init(){
    
    
  }
});