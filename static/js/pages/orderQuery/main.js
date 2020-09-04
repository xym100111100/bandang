global.webpackJsonp([ 3 ], {
    "0Xlm": function(t, e, a) {
        var n = a("woOf"), o = a.n(n);
        e.a = {
            data: function() {
                return {
                    autoWidth: ""
                };
            },
            props: {
                dataSource: {
                    type: Object,
                    default: null
                }
            },
            onUnload: function() {
                o()(this.$data, this.$options.data());
            },
            onShow: function() {},
            mounted: function() {},
            methods: {
                dataChange: function(t) {
                    var e = JSON.parse(t);
                    return console.log(e), e;
                },
                personalInfo: function(t) {
                    wx.navigateTo({
                        url: "/pages/repayment/personalInfo/main?clientNo=" + t.clientNo
                    });
                },
                orderDetail: function(t) {
                    wx.navigateTo({
                        url: "/pages/orderQuery/orderDetail/main?loanNo=" + t.loanNo
                    });
                }
            }
        };
    },
    "53m4": function(t, e, a) {
        var n = a("0Xlm"), o = a("k0sM"), s = a("ybqe")(n.a, o.a, function(t) {
            a("mDyt");
        }, "data-v-1b76ebe9", null);
        e.a = s.exports;
    },
    Bkxn: function(t, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a("5nAL"), o = a.n(n), s = a("kUkx");
        new o.a(s.a).$mount();
    },
    "Dwo+": function(t, e) {},
    UPOJ: function(t, e, a) {
        var n = a("Dd8w"), o = a.n(n), s = a("NYxO"), i = a("IgYJ"), r = a("/54S"), c = a("53m4"), l = a("b92S");
        e.a = {
            data: function() {
                return {
                    isShow: !0,
                    pageNumber: 1,
                    pageSize: 10,
                    listData: [],
                    selectList: [ {
                        key: "1",
                        name: "手机号"
                    }, {
                        key: "2",
                        name: "姓名"
                    }, {
                        key: "3",
                        name: "项目名称"
                    } ],
                    keywords: "",
                    qryType: "",
                    hasNextPage: !0,
                    listNone: !1
                };
            },
            components: {
                QueryList: c.a,
                nonePage: r.a,
                SearchBox: i.a
            },
            computed: o()({}, Object(s.b)({
                prodData: function(t) {
                    return t.product.prodData;
                }
            })),
            onLoad: function() {
                var t = this;
                wx.getStorage({
                    key: "WECHAT_AUTH_USERID",
                    success: function(e) {
                        e.data && (t.keywords = e.data, t.resetData(), t.qryType = "", t.getList("4"));
                    }
                });
                var e = this.prodData.prodName;
                wx.setNavigationBarTitle({
                    title: e + "订单查询"
                });
            },
            methods: {
                alertContent: function(t) {
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                },
                resetData: function() {
                    this.pageNumber = 1, this.listData.length = 0;
                },
                goSearch: function(t) {
                    t.value.target.value ? (this.qryType = t.key, this.keywords = t.value.target.value, 
                    this.resetData(), this.getList()) : this.alertContent("搜索条件不能为空");
                },
                timeoutSpin: function() {
                    wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
                },
                updateFile: function(t) {
                    wx.navigateTo({
                        url: "/pages/order/furtherInformation/main?loanNo=" + t.loanNo
                    });
                },
                getList: function(t) {
                    var e = this;
                    l.b.queryLoanList({
                        qryType: t || this.qryType,
                        keywords: this.keywords,
                        pageNumber: this.pageNumber,
                        pageSize: this.pageSize
                    }).then(function(t) {
                        var a = JSON.parse(t.desData);
                        if (console.log(a), a.loanTradeList) {
                            console.log(e.listData);
                            try {
                                e.listData = e.listData.concat(a.loanTradeList.map(function(t) {
                                    return {
                                        customerName: t.customerName || "",
                                        tenderName: t.tenderName || "",
                                        certNo: t.certNo || "",
                                        greenLoan: t.greenLoan || "",
                                        orderList: [ {
                                            orderDate: t.orderDate || "",
                                            bdName: t.bdName || "",
                                            bdArea: t.bdArea || "",
                                            mobile: t.mobile || "",
                                            clientNo: t.clientNo || "",
                                            loanNo: t.loanNo || "",
                                            currBdOrder: t.currBdOrder || ""
                                        } ]
                                    };
                                }));
                            } catch (t) {
                                console.log(t);
                            }
                            0 == e.listData.length ? e.listNone = !0 : e.listNone = !1, e.hasNextPage = a.hasNextPage;
                        } else e.listNone = !0;
                        e.timeoutSpin();
                    }).catch(function(t) {
                        e.timeoutSpin();
                    });
                }
            },
            onPullDownRefresh: function() {
                wx.showNavigationBarLoading(), this.goSearch();
            },
            onReachBottom: function() {
                this.listData.length < this.pageSize || (this.hasNextPage ? (this.pageNumber = this.pageNumber + 1, 
                this.getList(this.qryType || "4")) : wx.showToast({
                    title: "没有更多了",
                    icon: "none",
                    duration: 2e3
                }));
            }
        };
    },
    acfR: function(t, e, a) {
        var n = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "order-query-page"
                }, [ a("SearchBox", {
                    attrs: {
                        defalutKey: "1",
                        selectList: t.selectList,
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        selectValue: t.goSearch
                    }
                }), t._v(" "), a("div", t._l(t.listData, function(t, e) {
                    return a("QueryList", {
                        key: t.customerName,
                        attrs: {
                            dataSource: t,
                            mpcomid: "1-" + e
                        }
                    });
                })), t._v(" "), t.listNone ? a("none-page", {
                    attrs: {
                        mpcomid: "2"
                    }
                }) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    k0sM: function(t, e, a) {
        var n = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "orderQueryBox"
                }, [ a("div", {
                    staticClass: "nameBox flex-between"
                }, [ a("p", [ a("span", [ t._v(t._s(t.dataSource.tenderName || "--")) ]) ]), t._v(" "), a("p", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: t.dataSource.greenLoan,
                        expression: "dataSource.greenLoan"
                    } ],
                    staticClass: "gree-icon"
                }, [ t._v("绿") ]) ], 1), t._v(" "), t._m(0), t._v(" "), a("ul", t._l(t.dataSource.orderList, function(e, n) {
                    return a("li", {
                        key: n
                    }, [ a("p", {
                        staticClass: "time"
                    }, [ t._v(t._s(e.orderDate || "--")) ]), t._v(" "), a("div", {
                        staticClass: "bdBox"
                    }, [ a("p", {
                        staticClass: "flexLayout"
                    }, [ a("span", [ t._v("客户名称") ]), t._v(" "), a("span", [ t._v(t._s(t.dataSource.customerName)) ]) ]), t._v(" "), a("p", {
                        staticClass: "flexLayout"
                    }, [ a("span", [ t._v("客户手机号") ]), t._v(" "), a("span", [ t._v(t._s(e.mobile)) ]) ]), t._v(" "), a("p", {
                        staticClass: "flexLayout"
                    }, [ a("span", [ t._v("客户经理") ]), t._v(" "), a("span", [ t._v(t._s(e.bdName)) ]) ]) ], 1), t._v(" "), e.currBdOrder ? a("div", {
                        staticClass: "actBtnBox"
                    }, [ a("p", {
                        staticClass: "btnStyle",
                        attrs: {
                            eventid: "0-" + n
                        },
                        on: {
                            click: function(a) {
                                t.personalInfo(e);
                            }
                        }
                    }, [ t._v("客户信息") ]), t._v(" "), a("p", {
                        staticClass: "btnStyle btnL",
                        attrs: {
                            eventid: "1-" + n
                        },
                        on: {
                            click: function(a) {
                                t.orderDetail(e);
                            }
                        }
                    }, [ t._v("订单详情") ]) ], 1) : t._e() ], 1);
                })) ], 1);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "cutOffRule"
                }, [ e("span", {
                    staticClass: "leftCricular"
                }), this._v(" "), e("span", {
                    staticClass: "rightCricular"
                }) ]);
            } ]
        };
        e.a = n;
    },
    kUkx: function(t, e, a) {
        var n = a("UPOJ"), o = a("acfR"), s = a("ybqe")(n.a, o.a, function(t) {
            a("Dwo+");
        }, "data-v-3b176c1f", null);
        e.a = s.exports;
    },
    mDyt: function(t, e) {}
}, [ "Bkxn" ]);