global.webpackJsonp([ 24 ], {
    FP3a: function(e, t, a) {
        var r = a("pZ1I"), n = a("bCU3"), o = a("ybqe")(r.a, n.a, function(e) {
            a("K0mt");
        }, null, null);
        t.a = o.exports;
    },
    K0mt: function(e, t) {},
    bCU3: function(e, t, a) {
        var r = {
            render: function() {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "home-page"
                }, [ a("scroll-view", {
                    staticClass: "home-tab",
                    attrs: {
                        "scroll-x": !0,
                        "scroll-with-animation": !0,
                        "scroll-left": e.scrollLeft,
                        "enable-flex": "true"
                    }
                }, [ e.homeList.length > 1 ? a("div", {
                    staticClass: "flex"
                }, e._l(e.homeList, function(t, r) {
                    return a("div", {
                        key: r,
                        staticClass: "tab-item flex",
                        class: e.currentCode == t.resourceCode ? "active" : "",
                        attrs: {
                            "data-id": r,
                            "data-resource": t,
                            eventid: "0-" + r
                        },
                        on: {
                            click: e.changeProdData
                        }
                    }, [ a("span", {
                        staticClass: "item-text"
                    }, [ e._v(e._s(t.resourceName)) ]), e._v(" "), a("span", {
                        staticClass: "item-line"
                    }) ]);
                })) : e._e() ]), e._v(" "), e._l(e.homeList, function(t, r) {
                    return a("div", {
                        key: r,
                        staticClass: "home-list",
                        class: e.currentCode == t.resourceCode ? "show" : ""
                    }, e._l(e.homeList[r].subMenu, function(t, n) {
                        return a("div", {
                            key: n,
                            staticClass: "home-item",
                            attrs: {
                                "data-name": t.resourceCode,
                                eventid: "1-" + r + "-" + n
                            },
                            on: {
                                click: e.hrefUrl
                            }
                        }, [ a("span", {
                            class: [ "home-item-icon", t.resourceCode ]
                        }), e._v(" "), a("p", {
                            staticClass: "hid-font"
                        }, [ e._v(e._s(t.resourceName)) ]) ], 1);
                    }));
                }), e._v(" "), e.isShowQrcode ? a("qrcode", {
                    attrs: {
                        title: "办单二维码",
                        qrBase64: e.qrBase64,
                        eventid: "2",
                        mpcomid: "0"
                    },
                    on: {
                        close: function(t) {
                            e.isShowQrcode = !1;
                        }
                    }
                }) : e._e() ], 2);
            },
            staticRenderFns: []
        };
        t.a = r;
    },
    pZ1I: function(e, t, a) {
        var r = a("3h7X"), n = a("b92S");
        t.a = {
            data: function() {
                return {
                    qrBase64: "",
                    isShowQrcode: !1,
                    homeList: [],
                    currentCode: "",
                    token: "",
                    scrollLeft: null
                };
            },
            components: {
                qrcode: r.a
            },
            onShow: function() {
                wx.showLoading({
                    title: "加载中",
                    mask: !0
                }), this.init();
            },
            onLoad: function() {
                wx.setNavigationBarTitle({
                    title: "移动办单工具"
                });
            },
            methods: {
                init: function() {
                    var e = this;
                    n.f.permissions({}).then(function(t) {
                        if (setTimeout(function() {
                            wx.stopPullDownRefresh();
                        }, 3e3), t.succ) {
                            var a = JSON.parse(t.desData).resource, r = a.length > 0 && a[0] || {};
                            e.homeList = a, e.setProdData(r), e.sourceStateCheck();
                        }
                    }).catch(function(t) {
                        wx.stopPullDownRefresh(), e.disabled = !1;
                    });
                },
                sourceStateCheck: function() {
                    n.j.creditSourceStateCheck({}).then(function(e) {
                        var t = JSON.parse(e.desData).needClientSourceCount;
                        t > 0 && wx.showModal({
                            title: "提示",
                            content: "您还有" + t + "条渠道来源尚未完善，请完善之后再做其他操作",
                            confirmText: "现在就去",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm && wx.navigateTo({
                                    url: "../givingCredit/main?source=1"
                                });
                            }
                        });
                    }).catch(function(e) {
                        console.log(e);
                    });
                },
                changeProdData: function(e) {
                    this.scrollLeft = 60 * (e.currentTarget.dataset.id - 1), this.setProdData(e.currentTarget.dataset.resource);
                },
                setProdData: function(e) {
                    var t = e.resourceCode;
                    this.currentCode = t, wx.setStorage({
                        key: "RESOURCE_PROD_CODE",
                        data: t
                    }), this.$store.dispatch("setProdData", e);
                },
                hrefUrl: function(e) {
                    switch (e.currentTarget.dataset.name) {
                      case "partner":
                        wx.navigateTo({
                            url: "../merchants/main"
                        });
                        break;

                      case "credit":
                        wx.navigateTo({
                            url: "../preliminary_list/main"
                        });
                        break;

                      case "repayment":
                        wx.removeStorage({
                            key: "vuex"
                        }), this.$store.dispatch("setRepayType", "1"), this.$store.dispatch("initDate"), 
                        wx.navigateTo({
                            url: "../repayment/expire/main"
                        });
                        break;

                      case "order":
                        wx.navigateTo({
                            url: "../order/main"
                        });
                        break;

                      case "givingCredit":
                        wx.navigateTo({
                            url: "../givingCredit/main"
                        });
                        break;

                      case "orderQuery":
                        wx.navigateTo({
                            url: "../orderQuery/main"
                        });
                        break;

                      case "claim":
                        wx.navigateTo({
                            url: "../claim/main"
                        });
                        break;

                      case "invite":
                        wx.navigateTo({
                            url: "../inviteList/main"
                        });
                        break;

                      case "makeOrder_mlj":
                        this.showQrcode();
                    }
                },
                showQrcode: function() {
                    var e = this;
                    n.f.getQrcode({
                        productCode: "P1098"
                    }).then(function(t) {
                        if (console.log(t), t.succ) {
                            var a = JSON.parse(t.desData);
                            e.qrBase64 = a.qrBase64, e.isShowQrcode = !0;
                        } else wx.showToast({
                            title: t.message,
                            icon: "none",
                            duration: 2e3,
                            mask: !0
                        });
                    }).catch(function(e) {
                        console.log(e);
                    });
                }
            },
            onPullDownRefresh: function() {
                this.init();
            }
        };
    },
    usrL: function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("5nAL"), n = a.n(r), o = a("FP3a");
        new n.a(o.a).$mount(), t.default = {
            config: {
                enablePullDownRefresh: !0,
                backgroundTextStyle: "dark"
            }
        };
    }
}, [ "usrL" ]);