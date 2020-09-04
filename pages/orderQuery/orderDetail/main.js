//require("../../../static/js/manifest"), require("../../../static/js/vendor"), require("../../../static/js/pages/orderQuery/orderDetail/main");
var API = require('../../../utils/api.js')

var app = getApp();


Page({
  data: {
    loanNo: "",
    loanTradeDetail: {},
    repayPlanList: [
      {}
    ],
    contractBox: !1,
    contractUrl: [],
    isShowWithhold: !0
  },
  onLoad: function (val) {
    wx.setNavigationBarTitle({
      title: '订单详情'
    });
    this.init(val)
  },
  init(val) {
    API.request('/order/getOderDetail', {
      orderNo: val.orderNo
    }, 'get', (res) => {
      this.setData({
        loanTradeDetail: res.data
      })
    })
  }
});