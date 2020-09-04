var API = require('../../utils/api.js')
//require("../../static/js/manifest"), require("../../static/js/vendor"), require("../../static/js/pages/login/main");
var app = getApp();
import {setToken} from '../../utils/auth'

Page({
  data: {
    env: !1,
    disabled: true,
    cell: "",
    verifyCode: "",
    countdownFlag: !1,
    countdownVal: "获取验证码",
    timerFn: null,
    smsCode: "",
    token: "",
    miniVer: '1.4.7',
    btnCodeSecond: 10,
    btnCodeDeny: true,
  },
  onLoad: function (a) {
    wx.setNavigationBarTitle({
      title: '登录'
    });
    this.init()
  },
  btnCodeCountDown: function () {
    this.data.btnCodeSecond > 1 ? (this.data.btnCodeSecond--, this.setData({
      countdownVal: "(" + this.data.btnCodeSecond + ")重新获取"
    }), setTimeout(this.btnCodeCountDown, 1e3)) : this.setData({
      btnCodeSecond: 60,
      btnCodeDeny: true,
      countdownVal: "获取验证码"
    });
  },
  init() {

  },
  handleInput(val) {
    let value = {}
    value[val.target.dataset.eventname] = val.detail.value
    this.setData(
      value
    )
  },
  login() {
    API.request('/login/userLogin', {
      cell: this.data.cell
    }, 'get', (res) => {
      console.log(res)
      setToken(res.data.token)
      wx.switchTab({
        url: "../home/main"
      });

    })


  },
  getAuthCode() {
    if (!this.data.cell) { // 这里后续应该加上十一位的判断
      wx.showToast({
        title: '请填写正确手机号',
        icon: 'none',
      })
      return
    }
    if (!this.data.btnCodeDeny) {
      return
    } else {
      this.setData({
        btnCodeDeny: false,

      })
    }
    this.btnCodeCountDown()
    API.request('/login/getAuthCode', {
      cell: this.data.cell
    }, 'get', (res) => {
        this.setData({
          disabled: false
        })
    })
  },

});