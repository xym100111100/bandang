global.webpackJsonp([ 20 ], {
    "0wiy": function(t, e, o) {
        var a = o("GqUp"), n = o("3c4a"), i = o("ybqe")(a.a, n.a, function(t) {
            o("X+7j");
        }, "data-v-2e994f3f", null);
        e.a = i.exports;
    },
    "3c4a": function(t, e, o) {
        var a = {
            render: function() {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "order-page"
                }, [ o("div", {
                    staticClass: "search-item"
                }, [ o("icon", {
                    staticClass: "search-icon",
                    attrs: {
                        type: "search",
                        size: "17"
                    }
                }), t._v(" "), o("input", {
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
                }) ], 1), t._v(" "), t.noneFlag ? o("div", t._l(t.listData, function(e, a) {
                    return o("OrderList", {
                        key: e.loanNo,
                        attrs: {
                            dataSource: e,
                            boxType: "order",
                            closeOrder: function() {
                                t.showModalFn(e.loanNo);
                            },
                            auditConfirm: function() {
                                t.showAuditConfirm(e.loanNo);
                            },
                            auditResone: function() {
                                t.showAuditResone(e);
                            },
                            updateFile: function() {
                                t.updateFile(e);
                            },
                            lending: function() {
                                t.lending(e);
                            },
                            eventid: "1-" + a,
                            mpcomid: "0-" + a
                        },
                        on: {
                            updateCurrentData: t.updateCurrentData
                        }
                    });
                })) : o("none-page", {
                    attrs: {
                        mpcomid: "1"
                    }
                }), t._v(" "), t.showModal ? o("div", {
                    staticClass: "modal-cont"
                }, [ o("div", {
                    staticClass: "contant"
                }, [ o("div", {
                    staticClass: "input-group"
                }, [ o("div", {
                    staticClass: "title"
                }, [ o("p", [ t._v("请输入作废理由") ]), t._v(" "), o("p", [ t._v("请不要输入表情或者特殊字符") ]) ], 1), t._v(" "), o("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.operatorDesc,
                        expression: "operatorDesc"
                    } ],
                    attrs: {
                        type: "text",
                        placeholder: "请输入作废理由",
                        eventid: "2"
                    },
                    domProps: {
                        value: t.operatorDesc
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.operatorDesc = e.target.value);
                        }
                    }
                }) ]), t._v(" "), o("div", {
                    staticClass: "btn-item"
                }, [ o("div", {
                    staticClass: "cancel",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: t.cancelFn
                    }
                }, [ t._v("取消") ]), t._v(" "), o("div", {
                    staticClass: "confirm",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: t.confirmFn
                    }
                }, [ t._v("确定") ]) ]) ]) ]) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        e.a = a;
    },
    GqUp: function(t, e, o) {
        var a = o("Dd8w"), n = o.n(a), i = o("NYxO"), s = o("/54S"), r = o("9PHb"), c = o("b92S");
        e.a = {
            data: function() {
                return {
                    isShow: !0,
                    pageNumber: 1,
                    pageSize: 10,
                    listData: [
                        {
                                    dataSource:{
                                      customerName:'章振',
                                      certNo:'22'
                                    },
                                    loanNo:1,
                                    boxType:'order'
                                  },
                    ],
                    keywords: "",
                    operatorDesc: "",
                    hasNextPage: !0,
                    noneFlag: !0,
                    showModal: !1,
                    showModalLending: !1,
                    loanNo: ""
                };
            },
            components: {
                OrderList: r.a,
                nonePage: s.a
            },
            computed: n()({}, Object(i.b)({
                prodData: function(t) {
                    return t.product.prodData;
                }
            })),
            onLoad: function(t) {
                var e = this.prodData.prodName;
                wx.setNavigationBarTitle({
                    title: e + "进件管理"
                }), this.goSearch();
            },
            methods: {
                updateCurrentData: function(t) {
                    var e = this, o = +new Date(t.operationTime);
                    c.h.uodateOpTime({
                        loanNo: t.dataSource.loanNo,
                        operationTime: o / 1e3
                    }).then(function(a) {
                        a.succ && (wx.showToast({
                            title: "成功更新手术时间",
                            icon: "none",
                            duration: 2e3
                        }), e.listData = e.listData.map(function(e) {
                            if (e.loanNo.toString() === t.dataSource.loanNo.toString()) {
                                e.formatDate = t.operationTime, e.operationTime = o;
                                var a = new Date(t.operationTime).getMonth() + 1, n = new Date(t.operationTime).getDate(), i = a <= 9 ? "0" + a : a, s = n <= 9 ? "0" + n : n;
                                e.shortDate = i + "-" + s;
                            }
                            return e;
                        }));
                    });
                },
                resetData: function() {
                    this.pageNumber = 1, this.listData.length = 0;
                },
                goSearch: function(t) {
                    this.keywords = t ? t.target.value : "", this.resetData(), this.getList();
                },
                timeoutSpin: function() {
                    wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
                },
                lending: function(t) {
                    var e = this;
                    wx.showModal({
                        title: "提示",
                        content: "确定放款吗？",
                        success: function(o) {
                            o.confirm ? (console.log("用户点击确定"), c.h.loanOperatorConfirm({
                                loanNo: t.loanNo,
                                operateType: 1
                            }).then(function(t) {
                                JSON.parse(t.desData), t.succ && (wx.showToast({
                                    title: "操作成功",
                                    icon: "none",
                                    duration: 2e3
                                }), e.resetData(), e.getList());
                            })) : o.cancel && console.log("用户点击取消");
                        }
                    });
                },
                updateFile: function(t) {
                    console.log(t), wx.navigateTo({
                        url: "/pages/order/furtherInformation/main?loanNo=" + t.loanNo + "&clientNo=" + t.clientNo
                    });
                },
                showAuditResone: function(t) {
                    console.log(t), wx.showModal({
                        title: "回退原因",
                        content: t.auditDesc,
                        confirmColor: "#468cee",
                        showCancel: !1
                    });
                },
                showAuditConfirm: function(t) {
                    var e = this;
                    wx.showModal({
                        title: "提示",
                        content: "确定要稽核此单吗？",
                        success: function(o) {
                            o.confirm ? (console.log("用户点击确定"), e.auditConfirm(t)) : o.cancel && console.log("用户点击取消");
                        }
                    });
                },
                auditConfirm: function(t) {
                    var e = this;
                    c.h.auditConfirm({
                        loanNo: t
                    }).then(function(t) {
                        JSON.parse(t.desData), t.succ && (e.resetData(), e.getList());
                    });
                },
                cancelFn: function() {
                    this.operatorDesc = "", this.loanNo = "", this.showModal = !1;
                },
                showModalFn: function(t) {
                    this.loanNo = t, this.showModal = !0;
                },
                confirmFn: function() {
                    "" != this.operatorDesc ? this.closeOrder() : wx.showToast({
                        title: "请输入作废理由",
                        icon: "none",
                        duration: 2e3
                    });
                },
                closeOrder: function() {
                    var t = this;
                    c.h.closeOrder({
                        loanNo: this.loanNo,
                        operatorDesc: this.operatorDesc
                    }).then(function(e) {
                        JSON.parse(e.desData), e.succ && (t.operatorDesc = "", t.showModal = !1, t.loanNo = "", 
                        t.resetData(), t.getList());
                    });
                },
                getList: function() {
                    var t = this;
                    c.h.orderList({
                        keywords: this.keywords,
                        pageNumber: this.pageNumber,
                        pageSize: this.pageSize
                    }).then(function(e) {
                        var o = JSON.parse(e.desData);
                        o.loanTradeList && (o.loanTradeList.length && o.loanTradeList.map(function(t) {
                            var e = new Date(1e3 * t.operationTime).getMonth() + 1, o = new Date(1e3 * t.operationTime).getDate(), a = e <= 9 ? "0" + e : e, n = o <= 9 ? "0" + o : o;
                            t.shortDate = a + "-" + n, t.formatDate = new Date(1e3 * t.operationTime).format("yyyy-MM-dd");
                        }), t.listData = t.listData.concat(o.loanTradeList), 0 == t.listData.length ? t.noneFlag = !1 : t.noneFlag = !0, 
                        t.hasNextPage = o.hasNextPage), t.timeoutSpin();
                    }).catch(function(e) {
                        t.timeoutSpin();
                    });
                }
            },
            onPullDownRefresh: function() {
                wx.showNavigationBarLoading(), this.goSearch();
            },
            onReachBottom: function() {
                this.listData.length < this.pageSize || (this.hasNextPage ? (this.pageNumber = this.pageNumber + 1, 
                this.getList()) : wx.showToast({
                    title: "没有更多了",
                    icon: "none",
                    duration: 2e3
                }));
            }
        };
    },
    "X+7j": function(t, e) {},
    fhZZ: function(t, e, o) {
       
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = o("5nAL"), n = o.n(a), i = o("0wiy");
        new n.a(i.a).$mount(), e.default = {
            config: {
                enablePullDownRefresh: !0,
                backgroundTextStyle: "dark"
            }
        };
    }
}, [ "fhZZ" ]);