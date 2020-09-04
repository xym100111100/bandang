global.webpackJsonp([ 26 ], {
    Akcg: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("5nAL"), s = i.n(n), o = i("p55o");
        new s.a(o.a).$mount(), e.default = {
            config: {
                enablePullDownRefresh: !0,
                backgroundTextStyle: "dark"
            }
        };
    },
    Lnym: function(t, e) {},
    VPyC: function(t, e, i) {
        var n = i("//Fk"), s = i.n(n), o = i("woOf"), a = i.n(o), c = i("Dd8w"), r = i.n(c), u = i("NYxO"), l = i("A3UG"), d = i("/54S"), h = i("9PHb"), g = i("b92S");
        e.a = {
            data: function() {
                return {
                    rejectModal: !1,
                    customerName: "",
                    auditReason: "",
                    prodCode: wx.getStorageSync("RESOURCE_PROD_CODE"),
                    creditListType: 0,
                    isShow: !0,
                    pageNumber: 1,
                    pageSize: 10,
                    listData: [],
                    keywords: "",
                    hasNextPage: !0,
                    isNone: !0,
                    isShowGreenChannel: !0,
                    boxFlag: !1,
                    creditSourceList: [],
                    currentData: "",
                    currentIndex: "",
                    clientItem: "",
                    needClientSourceCount: 0,
                    source: 0,
                    tabList: [ {
                        name: "普通",
                        value: 0
                    }, {
                        name: "辅助",
                        value: 1
                    } ]
                };
            },
            components: {
                OrderList: h.a,
                nonePage: d.a,
                DialogComponent: l.a
            },
            onShow: function() {
                this.getList("search");
            },
            computed: r()({}, Object(u.b)({
                prodData: function(t) {
                    return t.product.prodData;
                }
            })),
            onLoad: function(t) {
                console.log("load"), a()(this.$data, this.$options.data());
                var e = this.prodData.prodName;
                this.source = t.source || 0, wx.setNavigationBarTitle({
                    title: e + "授信列表"
                });
            },
            methods: {
                tabChange: function(t) {
                    this.creditListType = t, this.source = 0, this.resetData(), this.getList("search");
                },
                alertContent: function(t) {
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                },
                choseSource: function(t) {
                    var e = this;
                    this.currentData = t, this.creditSourceList.map(function(t) {
                        e.$set(t, "flag", !1);
                    }), this.$set(t, "flag", !0);
                },
                showSourceList: function() {
                    this.source = 1, this.keywords = "", this.getList("search");
                },
                getCreditSourceListConfig: function() {
                    var t = this;
                    return new s.a(function(e, i) {
                        try {
                            g.j.creditSourceListConfig({}).then(function(i) {
                                var n = JSON.parse(i.desData);
                                if (i.succ) {
                                    var s = (n || {}).creditSourceList;
                                    t.creditSourceList = s, e();
                                }
                            }).catch(function(e) {
                                console.log(e), t.alertContent("网络出了个小差");
                            });
                        } catch (t) {
                            console.log(t);
                        }
                    });
                },
                showModalBox: function(t, e) {
                    var i = this;
                    this.currentData = "", t.clientSource || (this.clientItem = t, console.log(t), this.getCreditSourceListConfig().then(function() {
                        i.currentIndex = e, i.boxFlag = !0;
                    }));
                },
                onCancel: function() {
                    this.boxFlag = !1;
                },
                onOk: function() {
                    var t = this;
                    if (this.currentData) {
                        var e = (this.currentData || {}).value, i = (this.clientItem || {}).creditNo;
                        g.j.creditSourceUpdate({
                            creditNO: i,
                            clientSource: e
                        }).then(function(e) {
                            e.succ && (t.$set(t.listData[t.currentIndex], "clientSource", t.currentData.name), 
                            t.boxFlag = !1, t.getList("search"));
                        }).catch(function(e) {
                            t.alertContent("网络出了个小差");
                        });
                    } else this.alertContent("请选择渠道来源");
                },
                resetData: function() {
                    this.pageNumber = 1, this.listData.length = 0;
                },
                goSearch: function(t) {
                    this.keywords = t ? t.target.value : "", this.source = 0, this.resetData(), this.getList("search");
                },
                timeoutSpin: function() {
                    wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
                },
                getList: function(t) {
                    var e = this;
                    console.log("this.source", this.source), g.e.creditList({
                        keywords: this.keywords,
                        pageNumber: this.pageNumber,
                        pageSize: this.pageSize,
                        creditSourceTag: this.source,
                        creditListType: this.creditListType
                    }).then(function(i) {
                        var n = JSON.parse(i.desData), s = (n || {}).needClientSourceCount;
                        n.creditList ? ("search" == t ? (e.listData.length = 0, e.listData = n.creditList) : e.listData = e.listData.concat(n.creditList), 
                        console.log("this.listData", e.listData), e.isShowGreenChannel = n.isShowGreenChannel, 
                        e.hasNextPage = n.hasNextPage, 0 == e.listData.length ? e.isNone = !1 : e.isNone = !0) : "search" == t && (e.isNone = !1), 
                        e.timeoutSpin(), e.needClientSourceCount = s;
                    }).catch(function(t) {
                        e.timeoutSpin();
                    });
                },
                rejectConfirmFn: function() {
                    var t = this;
                    "" != this.auditReason ? g.e.creditStatusUpdate({
                        creditNo: this.creditNo,
                        creditStatus: 2,
                        auditReason: this.auditReason
                    }).then(function(e) {
                        console.log(e, "data"), e.succ && t.goSearch(), t.rejectModal = !1;
                    }).catch(function() {
                        t.rejectModal = !1;
                    }) : this.alertContent("拒绝理由不能为空");
                },
                passRegisterResult: function(t) {
                    var e = this;
                    wx.showModal({
                        title: "温馨提示",
                        content: "客户:" + t.customerName + ",确认通过吗？",
                        confirmText: "确认",
                        success: function(i) {
                            i.confirm && g.e.creditStatusUpdate({
                                creditNo: t.creditNo,
                                creditStatus: 1
                            }).then(function(t) {
                                console.log(t, "data"), t.succ && e.goSearch(), e.rejectModal = !1;
                            }).catch(function() {
                                e.rejectModal = !1;
                            });
                        }
                    });
                },
                rejectRegisterResult: function(t, e) {
                    this.currentIndex = e, this.auditReason = "", this.customerName = t.customerName, 
                    this.creditNo = t.creditNo, this.rejectModal = !0;
                },
                passResult: function(t, e) {
                    var i = this;
                    wx.showModal({
                        title: "温馨提示",
                        content: "确认更改授信结果吗？",
                        confirmText: "确认",
                        success: function(n) {
                            n.confirm && g.e.resultPass({
                                creditNo: t
                            }).then(function(t) {
                                if (console.log(t, "data"), t.succ) {
                                    var n = i.listData[e];
                                    n.creditStatus = "auditing", n.creditStatusDescritpion = "授信处理中", n.showRejectReason = !1, 
                                    n.showPassBtn = !1;
                                }
                            });
                        }
                    });
                }
            },
            onPullDownRefresh: function() {
                wx.showNavigationBarLoading(), this.goSearch();
            },
            onReachBottom: function() {
                this.listData.length < this.pageSize || (this.hasNextPage ? (this.pageNumber = this.pageNumber + 1, 
                this.getList("none")) : wx.showToast({
                    title: "没有更多了",
                    icon: "none",
                    duration: 2e3
                }));
            }
        };
    },
    komA: function(t, e, i) {
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    class: "P1109" === t.prodCode || "P6666" === t.prodCode ? "givingCredit-page minusPd" : "givingCredit-page"
                }, [ i("div", {
                    staticClass: "search-item"
                }, [ i("icon", {
                    staticClass: "search-icon",
                    attrs: {
                        type: "search",
                        size: "17"
                    }
                }), t._v(" "), i("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.keywords,
                        expression: "keywords"
                    } ],
                    attrs: {
                        type: "text",
                        "confirm-type": "search",
                        placeholder: "姓名/手机号",
                        eventid: "0"
                    },
                    domProps: {
                        value: t.keywords
                    },
                    on: {
                        confirm: t.goSearch,
                        input: function(e) {
                            e.target.composing || (t.keywords = e.target.value);
                        }
                    }
                }) ], 1), t._v(" "), t.needClientSourceCount && 0 == t.creditListType ? i("div", {
                    staticClass: "top_tip",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.showSourceList();
                        }
                    }
                }, [ t._v("\n        您有" + t._s(t.needClientSourceCount) + "条未选择渠道来源\n    ") ]) : t._e(), t._v(" "), 0 == t.source && "P1109" != t.prodCode && "P6666" != t.prodCode ? i("div", {
                    staticClass: "home-tab flex"
                }, t._l(t.tabList, function(e, n) {
                    return i("div", {
                        key: e.name,
                        class: t.creditListType == e.value ? "active tab-item flex flex-item-1" : "tab-item flex flex-item-1",
                        attrs: {
                            eventid: "2-" + n
                        },
                        on: {
                            click: function(i) {
                                t.tabChange(e.value);
                            }
                        }
                    }, [ i("span", {
                        staticClass: "item-text"
                    }, [ t._v(t._s(e.name)) ]), t._v(" "), i("span", {
                        staticClass: "item-line"
                    }) ]);
                })) : t._e(), t._v(" "), t.isNone ? i("div", t._l(t.listData, function(e, n) {
                    return i("OrderList", {
                        key: e.creditNo,
                        attrs: {
                            dataSource: e,
                            boxType: "credit",
                            creditListType: t.creditListType,
                            isShowGreenChannel: t.isShowGreenChannel,
                            passRegisterResult: function() {
                                t.passRegisterResult(e);
                            },
                            rejectRegisterResult: function() {
                                t.rejectRegisterResult(e, n);
                            },
                            passResult: function() {
                                t.passResult(e.creditNo, n);
                            },
                            eventid: "3-" + n,
                            mpcomid: "0-" + n
                        },
                        on: {
                            showModalBox: function(i) {
                                t.showModalBox(e, n);
                            }
                        }
                    });
                })) : i("none-page", {
                    attrs: {
                        mpcomid: "1"
                    }
                }), t._v(" "), i("DialogComponent", {
                    attrs: {
                        isShowHeader: !1,
                        "is-show": t.boxFlag,
                        eventid: "5",
                        mpcomid: "2"
                    },
                    on: {
                        "on-ok": t.onOk,
                        "on-cancel": t.onCancel
                    }
                }, [ i("scroll-view", {
                    staticStyle: {
                        height: "150px"
                    },
                    attrs: {
                        "scroll-y": "true"
                    }
                }, t._l(t.creditSourceList, function(e, n) {
                    return i("div", {
                        key: e.key,
                        class: {
                            check_item: !e.flag,
                            "check_item active": e.flag
                        },
                        attrs: {
                            eventid: "4-" + n
                        },
                        on: {
                            click: function(i) {
                                t.choseSource(e);
                            }
                        }
                    }, [ t._v("\n                " + t._s(e.value) + "\n            ") ]);
                })) ], 1), t._v(" "), t.rejectModal ? i("div", {
                    staticClass: "modal-cont"
                }, [ i("div", {
                    staticClass: "contant"
                }, [ i("div", {
                    staticClass: "input-group"
                }, [ i("div", {
                    staticClass: "title"
                }, [ i("p", [ t._v("客户:" + t._s(t.customerName) + ",确认拒绝吗？") ]), t._v(" "), i("p", [ t._v("请不要输入表情或者特殊字符") ]) ], 1), t._v(" "), i("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.auditReason,
                        expression: "auditReason"
                    } ],
                    attrs: {
                        type: "text",
                        placeholder: "请输入拒绝理由",
                        eventid: "6"
                    },
                    domProps: {
                        value: t.auditReason
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.auditReason = e.target.value);
                        }
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "btn-item"
                }, [ i("div", {
                    staticClass: "cancel",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        click: function(e) {
                            t.rejectModal = !1;
                        }
                    }
                }, [ t._v("取消") ]), t._v(" "), i("div", {
                    staticClass: "confirm",
                    attrs: {
                        eventid: "8"
                    },
                    on: {
                        click: t.rejectConfirmFn
                    }
                }, [ t._v("确定") ]) ]) ]) ]) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    p55o: function(t, e, i) {
        var n = i("VPyC"), s = i("komA"), o = i("ybqe")(n.a, s.a, function(t) {
            i("Lnym");
        }, "data-v-5f0bf128", null);
        e.a = o.exports;
    }
}, [ "Akcg" ]);