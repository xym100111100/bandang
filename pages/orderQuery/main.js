//require("../../static/js/manifest"), require("../../static/js/vendor"), require("../../static/js/pages/orderQuery/main");
var API = require('../../utils/api.js')

var app = getApp();


Page({
  data: {
    isShow: !0,
    pageNumber: 1,
    pageSize: 10,
    listData: [
      {
      dataSource: {
        tenderName: '章振',
        customerName:'张超',
        certNo: '22',
        orderList:[
          {
            orderDate:'2020-01-04',
            mobile:'18278904219',
            bdName:'张经理',
            currBdOrder:true
          }
        ]
      },
      loanNo: 1,
      boxType: 'order'
    }, 
      {
      dataSource: {
        tenderName: '章振',
        customerName:'张超',
        certNo: '22',
        orderList:[
          {
            orderDate:'2020-01-04',
            mobile:'18278904219',
            bdName:'张经理',
            currBdOrder:true
          }
        ]
      },
      loanNo: 1,
      boxType: 'order'
    }, 
      {
      dataSource: {
        tenderName: '章振',
        customerName:'张超',
        certNo: '22',
        orderList:[
          {
            orderDate:'2020-01-04',
            mobile:'18278904219',
            bdName:'张经理',
            currBdOrder:true
          }
        ]
      },
      loanNo: 1,
      boxType: 'order'
    }, 
      {
      dataSource: {
        tenderName: '章振',
        customerName:'张超',
        certNo: '22',
        orderList:[
          {
            orderDate:'2020-01-04',
            mobile:'18278904219',
            bdName:'张经理',
            currBdOrder:true
          }
        ]
      },
      loanNo: 1,
      boxType: 'order'
    }, 
      {
      dataSource: {
        tenderName: '章振',
        customerName:'张超',
        certNo: '22',
        orderList:[
          {
            orderDate:'2020-01-04',
            mobile:'18278904219',
            bdName:'张经理',
            currBdOrder:true
          }
        ]
      },
      loanNo: 1,
      boxType: 'order'
    }, 
  ],
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
    
  }
});