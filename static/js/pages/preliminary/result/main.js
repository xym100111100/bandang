global.webpackJsonp([ 15 ], {
    "/8YR": function(t, a, e) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("5nAL"), i = e.n(n), o = e("oIF7");
        new i.a(o.a).$mount();
    },
    "9T7m": function(t, a, e) {
        var n = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "container"
                }, [ e("ul", {
                    staticClass: "listBox"
                }, [ e("li", [ e("p", {
                    staticClass: "title"
                }, [ t._v("姓名:") ]), t._v(" "), e("p", {
                    staticClass: "infoValue"
                }, [ t._v(t._s(t.cardInfo.realName)) ]) ], 1), t._v(" "), e("li", [ e("p", {
                    staticClass: "title"
                }, [ t._v("身份证号:") ]), t._v(" "), e("p", {
                    staticClass: "infoValue"
                }, [ t._v(t._s(t.cardInfo.idCardNumber)) ]) ], 1), t._v(" "), e("li", [ e("p", {
                    staticClass: "title"
                }, [ t._v("手机号:") ]), t._v(" "), e("p", {
                    staticClass: "infoValue"
                }, [ t._v(t._s(t.cardInfo.mobile)) ]) ], 1), t._v(" "), e("li", [ e("p", {
                    staticClass: "title"
                }, [ t._v("是否加急:") ]), t._v(" "), e("p", {
                    staticClass: "switchLab"
                }, [ e("switch", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        change: t.bindSwitchChange
                    }
                }) ]) ], 1) ], 1), t._v(" "), e("button", {
                    staticClass: "publicBtn baseInfo",
                    attrs: {
                        type: "default",
                        eventid: "1"
                    },
                    on: {
                        click: t.jumpNext
                    }
                }, [ t._v("确认") ]) ], 1);
            },
            staticRenderFns: []
        };
        a.a = n;
    },
    deo5: function(t, a, e) {
        var n = e("b92S");
        a.a = {
            data: function() {
                return {
                    cardInfo: {
                        realName: "",
                        idCardNumber: "",
                        mobile: ""
                    },
                    urgent: !1
                };
            },
            onShow: function() {
                var t = this;
                wx.getStorage({
                    key: "CONMON_DATA",
                    success: function(a) {
                        var e = a.data, n = e.cardInfo;
                        t.cardInfo.idCardNumber = n.idCardNumber, t.cardInfo.realName = n.realName, t.cardInfo.mobile = e.mobile;
                    }
                });
            },
            onLoad: function(t) {
                wx.setNavigationBarTitle({
                    title: "提交"
                }), this.urgent = !1;
            },
            mounted: function() {},
            methods: {
                bindSwitchChange: function(t) {
                    this.urgent = t.target.value;
                },
                jumpNext: function() {
                    var t = this;
                    wx.getStorage({
                        key: "USER_INFO",
                        success: function(a) {
                            a.data && n.j.preauth({
                                userId: JSON.parse(a.data).userId,
                                name: t.cardInfo.realName,
                                idCard: t.cardInfo.idCardNumber,
                                urgent: t.urgent,
                                bdUserId: t.$root.$mp.query.bdUserId,
                                partnerNo: t.$root.$mp.query.partnerNo
                            }).then(function(t) {
                                console.log(t), t.succ ? JSON.parse(t.desData).creditResult.creditState && wx.showModal({
                                    title: "提交成功",
                                    content: "登记成功,请耐心等待",
                                    confirmText: "继续登记",
                                    cancelText: "查看状态",
                                    confirmColor: "#FFC800",
                                    success: function(t) {
                                        t.confirm ? wx.navigateBack({
                                            delta: 2
                                        }) : t.cancel && wx.switchTab({
                                            url: "/pages/home/main",
                                            success: function() {
                                                wx.navigateTo({
                                                    url: "/pages/preliminary_list/main"
                                                });
                                            }
                                        });
                                    }
                                }) : wx.showToast({
                                    title: t.message,
                                    icon: "none",
                                    duration: 3e3
                                });
                            }).catch(function(t) {});
                        },
                        fail: function() {
                            wx.showToast({
                                title: "重新登录",
                                icon: "none",
                                duration: 3e3
                            });
                        }
                    });
                }
            },
            created: function() {}
        };
    },
    hner: function(t, a) {},
    oIF7: function(t, a, e) {
        var n = e("deo5"), i = e("9T7m"), o = e("ybqe")(n.a, i.a, function(t) {
            e("hner");
        }, "data-v-2ca2ff1b", null);
        a.a = o.exports;
    }
}, [ "/8YR" ]);