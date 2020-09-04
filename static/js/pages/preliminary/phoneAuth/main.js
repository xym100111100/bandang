global.webpackJsonp([ 16 ], {
    "9GxF": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a("5nAL"), o = a.n(i), n = a("Vvm5");
        new o.a(n.a).$mount();
    },
    Vvm5: function(e, t, a) {
        var i = a("gT5z"), o = a("Z0XP"), n = a("ybqe")(i.a, o.a, function(e) {
            a("vwE7");
        }, "data-v-066e9cce", null);
        t.a = n.exports;
    },
    Z0XP: function(e, t, a) {
        var i = {
            render: function() {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "container"
                }, [ a("div", {
                    staticClass: "itemBox"
                }, [ a("form", {
                    attrs: {
                        bindsubmit: "formSubmit",
                        bindreset: "formReset"
                    }
                }, [ a("div", {
                    staticClass: "phone publicItem"
                }, [ a("div", {
                    staticClass: "inputTitle"
                }, [ e._v("手机号码") ]), e._v(" "), a("div", {
                    staticClass: "inputBox"
                }, [ a("image", {
                    attrs: {
                        src: "/static/images/preliminary/mobile.png"
                    }
                }), e._v(" "), a("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: e.mobile,
                        expression: "mobile"
                    } ],
                    attrs: {
                        maxlength: "11",
                        "placeholder-style": "color:#cacaca;",
                        placeholder: "请输入手机号码",
                        type: "number",
                        eventid: "0"
                    },
                    domProps: {
                        value: e.mobile
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.mobile = t.target.value);
                        }
                    }
                }) ]) ]) ]) ], 1), e._v(" "), a("button", {
                    staticClass: "publicBtn baseInfo",
                    attrs: {
                        type: "default",
                        eventid: "1"
                    },
                    on: {
                        click: e.jumpNext
                    }
                }, [ e._v("确认") ]) ], 1);
            },
            staticRenderFns: []
        };
        t.a = i;
    },
    gT5z: function(e, t, a) {
        var i = a("mvHQ"), o = a.n(i), n = a("woOf"), r = a.n(n), s = a("b92S"), c = a("tOtd");
        t.a = {
            data: function() {
                return {
                    mobile: ""
                };
            },
            onUnload: function() {
                r()(this.$data, this.$options.data()), wx.removeStorage({
                    key: "CONMON_DATA"
                });
            },
            onShow: function() {
                r()(this.$data, this.$options.data()), wx.removeStorage({
                    key: "CONMON_DATA"
                });
            },
            onLoad: function(e) {
                console.log(e), wx.setNavigationBarTitle({
                    title: "客户登记"
                });
            },
            methods: {
                jumpNext: function() {
                    var e = this;
                    c.a.mobile(this.mobile) ? s.j.preliminaryLogin({
                        mobile: this.mobile,
                        bdUserId: this.$root.$mp.query.bdUserId,
                        partnerNo: this.$root.$mp.query.partnerNo
                    }).then(function(t) {
                        var a = JSON.parse(t.desData);
                        if (t.succ) if (a.userInfo) wx.setStorage({
                            key: "USER_INFO",
                            data: o()(a.userInfo)
                        }), wx.setStorage({
                            key: "MOBILE",
                            data: e.mobile
                        }), wx.navigateTo({
                            url: "/pages/preliminary/authentication/main?bdUserId=" + e.$root.$mp.query.bdUserId + "&partnerNo=" + e.$root.$mp.query.partnerNo
                        }); else if (a.creditResult) {
                            var i = a.creditResult.bdName ? "此号码之前已在" + (a.creditResult.bdOfficeName + a.creditResult.bdName) + "登记完成，请勿重复提交" : "此号码之前已登记完成，请勿重复提交", n = a.creditResult.bdName ? "此号码之前在" + (a.creditResult.bdOfficeName + a.creditResult.bdName) + "已登记，结果评估中，请稍候" : "此号码之前已登记，结果评估中，请稍候", r = a.creditResult.bdName ? "此号码之前已在" + (a.creditResult.bdOfficeName + a.creditResult.bdName) + "登记失败，请勿重复提交" : "此号码之前登记失败，请勿重复提交";
                            switch (a.creditResult.creditState) {
                              case "REJECTED":
                                wx.showModal({
                                    title: "登记失败",
                                    content: r,
                                    showCancel: !1,
                                    confirmText: "知道了",
                                    confirmColor: "#FFC800"
                                });
                                break;

                              case "AUDITING":
                                wx.showModal({
                                    title: "登记中",
                                    content: n,
                                    showCancel: !1,
                                    confirmText: "知道了",
                                    confirmColor: "#FFC800"
                                });
                                break;

                              case "PASSED":
                                wx.showModal({
                                    title: "登记完成",
                                    content: i,
                                    showCancel: !1,
                                    confirmText: "知道了",
                                    confirmColor: "#FFC800"
                                });
                                break;

                              default:
                                e.callTitle = "提示", e.callMsg = "调用异常";
                            }
                        }
                    }).catch(function(e) {}) : wx.showToast({
                        title: "请输入正确格式的手机号码",
                        icon: "none",
                        duration: 2e3,
                        mask: !0
                    });
                }
            },
            created: function() {}
        };
    },
    vwE7: function(e, t) {}
}, [ "9GxF" ]);