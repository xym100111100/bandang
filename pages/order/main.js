//require("../../static/js/manifest"), require("../../static/js/vendor"), require("../../static/js/pages/order/main");
var API = require('../../utils/api.js')
var app = getApp();
Page({
  data: {
    isShow: !0,
    pageNumber: 1,
    pageSize: 10,
    listData: [
      {
        dataSource:{
          customerName:'章振',
          certNo:'3623***5935',
          shortDate:'07-18',
          operationTime:10,
          applyItemAmount:1000,
        },
        loanNo:1,
        boxType:'order'
      },
      {
        dataSource:{
          customerName:'aaa',
          certNo:'22',
          shortDate:'07-18',
          operationTime:10
        },
        loanNo:1,
        boxType:'order'
      },
      {
        dataSource:{
          customerName:'aaa',
          certNo:'22',
          shortDate:'07-18',
          operationTime:10
        },
        loanNo:1,
        boxType:'order'
      },
      {
        dataSource:{
          customerName:'aaa',
          certNo:'22',
          shortDate:'07-18',
          operationTime:10
        },
        loanNo:1,
        boxType:'order'
      }
    ],
    keywords: "",
    operatorDesc: "",
    hasNextPage: !0,
    noneFlag: true,
    showModal: !1,
    showModalLending: !1,
    loanNo: ""

  },
  onLoad: function (a) {
    wx.setNavigationBarTitle({
      title: '丽人贷进件管理'
    });
    this.init()
  },
  init() {
    
  }
});