//require("../../static/js/manifest"), require("../../static/js/vendor"), require("../../static/js/pages/personalCenter/main");

var API = require('../../utils/api.js')
import {removeToken} from '../../utils/auth'
var app = getApp();


Page({
  data: {
    env: false,
    personalVal: {
      name:'umbrella',
      companyName:'尔莫科技'
    }
  },
  onLoad: function (a) {
    wx.setNavigationBarTitle({
      title: '个人中心'
    });
    this.init()
  },
  init(){
   
  },
  loginOut(){
    removeToken()
    wx.reLaunch({url:'../login/main'})
  }
});