//require("../../static/js/manifest"), require("../../static/js/vendor"), require("../../static/js/pages/home/main");

var API = require('../../utils/api.js')

import {
  getToken
} from "../../utils/auth"
var app = getApp();


Page({
  data: {
    qrBase64: "",
    isShowQrcode: !1,
    homeList: [

    ],
    currentCode: "order",
    token: "",
    scrollLeft: null
  },
  tabChanger(val) {
    this.setData({
      currentCode: val.currentTarget.dataset.resource.resourceCode
    })
  },
  onLoad: function (a) {
    wx.setNavigationBarTitle({
      title: '移动办单工具'
    });

    this.init()
  },
  init() {
    if (!getToken()) {
      wx.reLaunch({
        url: '../login/main'
      })
    }
    API.request('/user/getMenu', {
      cell: this.data.cell
    }, 'get', (res) => {
      this.setData({
        homeList: res.data
      })
    })
  },
  onclickMenu(val){
    let key = val.currentTarget.dataset.name
    switch (key) {
      case 'partner':
        wx.navigateTo({
          url:'../merchants/main'
        })
        break;
      case 'order':
        wx.navigateTo({
          url:'../order/main'
        })
        break;
      case 'orderQuery':
        wx.navigateTo({
          url:'../orderQuery/main'
        })
        break;
      case 'givingCredit':
        wx.navigateTo({
          url:'../givingCredit/main'
        })
        break;
    
      default:
        break;
    }
  }

});