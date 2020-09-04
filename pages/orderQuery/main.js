//require("../../static/js/manifest"), require("../../static/js/vendor"), require("../../static/js/pages/orderQuery/main");
var API = require('../../utils/api.js')

var app = getApp();


Page({
  data: {
    isShow: !0,
    pageNumber: 1,
    pageSize: 10,
    listData: [],
    keywords: "",
    operatorDesc: "",
    hasNextPage: !0,
    noneFlag: !0,
    showModal: !1,
    showModalLending: !1,
    loanNo: ""
  },
  onLoad: function (a) {
    wx.setNavigationBarTitle({
      title: '订单查询'
    });
    this.init()
  },
  init() {
    console.log(app.globalData)
    API.request('/order/getOderList', {
      adminUserNo: app.globalData.me.adminUserNo
    }, 'get', (res) => {
      this.setData({
        listData: res.data
      })
    })
  }
});