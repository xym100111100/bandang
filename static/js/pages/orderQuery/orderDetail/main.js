global.webpackJsonp([ 19 ], {
    "691K": function(t, a, e) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("5nAL"), o = e.n(n), i = e("D6fV");
        new o.a(i.a).$mount();
    },
    "7uCV": function(t, a, e) {
        var n = e("woOf"), o = e.n(n), i = e("Dd8w"), l = e.n(i), s = e("BmRJ"), r = e("b92S"), c = e("NYxO");
        a.a = {
            data: function() {
                return {
                    loanNo: "",
                    loanTradeDetail: "",
                    repayPlanList: "",
                    contractBox: !1,
                    contractUrl: [],
                    isShowWithhold: !0
                };
            },
            components: {
                LoanInforList: s.a
            },
            computed: l()({}, Object(c.b)({
                prodData: function(t) {
                    return t.product.prodData;
                }
            })),
            onUnload: function() {
                o()(this.$data, this.$options.data());
            },
            onLoad: function(t) {
                this.loanNo = t.loanNo, this.init(), wx.setNavigationBarTitle({
                    title: "订单详情"
                });
            },
            mounted: function() {},
            methods: {
                alertContent: function(t) {
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                },
                goCount: function() {
                    wx.navigateTo({
                        url: "/pages/repayment/count/main?clientNo=" + this.repayPlanList[0].clientNo + "&replayPlanNo=" + this.repayPlanList[0].replayPlanNo
                    });
                },
                lookDetails: function(t) {
                    this.$store.commit("SET_DETAIL_PAY_INFO", t), wx.navigateTo({
                        url: "/pages/repayment/repaymentPlan/main"
                    });
                },
                lookRepayDetails: function(t) {
                    var a = "/pages/repayment/repaymentDetails/main?replayPlanNo=" + t;
                    wx.navigateTo({
                        url: a
                    });
                },
                buildWithholdBill: function(t) {
                    return "扣款中" == t.repaymentStatus ? (this.alertContent("尚有扣款单扣款中，请勿重复创建"), !1) : "已还" == t.repaymentStatus ? (this.alertContent("已还扣款单，请勿重复创建"), 
                    !1) : (this.$store.commit("SET_DETAIL_PAY_INFO", t), void wx.navigateTo({
                        url: "/pages/repayment/buildWithhold/main"
                    }));
                },
                previewCon: function(t) {
                    var a = this;
                    r.c.loanContractQuery({
                        contractNo: this.loanTradeDetail.contractNO,
                        templateId: t.value,
                        clientNo: this.repayPlanList[0].clientNo
                    }).then(function(t) {
                        var e = JSON.parse(t.desData);
                        if (t.succ) {
                            if (0 == e.contractUrl.length) return void a.alertContent("获取到的合同为空!");
                            a.contractBox = !0, a.contractUrl = e.contractUrl;
                        } else a.alertContent(t.message ? t.message : "数据异常");
                    }).catch(function(t) {
                        a.alertContent("网络出了个小差");
                    });
                },
                init: function() {
                    var t = this;
                    r.c.loantradeRecordDetail({
                        loanTradeNo: this.loanNo
                    }).then(function(a) {
                        var e = JSON.parse(a.desData);
                        a.succ ? (t.isShowWithhold = e.isShowWithhold, t.loanTradeDetail = e.loanTradeDetail, 
                        console.log(t.loanTradeDetail), t.repayPlanList = e.repayPlanList) : t.alertContent(a.message ? a.message : "数据异常");
                    }).catch(function(a) {
                        t.alertContent("网络出了个小差");
                    });
                }
            }
        };
    },
    D6fV: function(t, a, e) {
        var n = e("7uCV"), o = e("hQ7i"), i = e("ybqe")(n.a, o.a, function(t) {
            e("Uijm");
        }, "data-v-1ff94062", null);
        a.a = i.exports;
    },
    Uijm: function(t, a) {},
    hQ7i: function(t, a, e) {
        var n = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", [ e("div", {
                    staticClass: "orderQueryBox"
                }, [ e("div", {
                    staticClass: "nameBox flex-between"
                }, [ e("p", [ e("span", [ t._v(t._s(t.loanTradeDetail.tenderName)) ]) ]), t._v(" "), e("p", {
                    staticClass: "idCard"
                }, [ e("span", [ t._v(t._s(t.loanTradeDetail.orderDate)) ]) ]) ], 1), t._v(" "), t._m(0), t._v(" "), e("ul", [ e("li", [ e("div", {
                    staticClass: "itemBox"
                }, [ e("p", {
                    staticClass: "flexLayout"
                }, [ e("span", [ t._v("医院名称") ]), t._v(" "), e("span", [ t._v(t._s(t.loanTradeDetail.hospital || "--")) ]) ]), t._v(" "), e("p", {
                    staticClass: "flexLayout"
                }, [ e("span", [ t._v("借款金额") ]), t._v(" "), e("span", [ t._v(t._s(t.loanTradeDetail.orderAmount || "0.00")) ]) ]), t._v(" "), e("p", {
                    staticClass: "flexLayout"
                }, [ e("span", [ t._v("借款期限") ]), t._v(" "), e("span", [ t._v(t._s(t.loanTradeDetail.loanTerm || "--")) ]) ]), t._v(" "), e("p", {
                    staticClass: "flexLayout"
                }, [ e("span", [ t._v("还款方式") ]), t._v(" "), e("span", [ t._v(t._s(t.loanTradeDetail.repayWay || "--")) ]) ]), t._v(" "), e("p", {
                    staticClass: "flexLayout"
                }, [ e("span", [ t._v("资金来源") ]), t._v(" "), e("span", [ t._v(t._s(t.loanTradeDetail.fundChannel || "--")) ]) ]), t._v(" "), e("p", {
                    staticClass: "flexLayout"
                }, [ e("span", [ t._v("借款状态") ]), t._v(" "), e("span", [ t._v(t._s(t.loanTradeDetail.longStatusName || "--")) ]) ]), t._v(" "), e("p", {
                    staticClass: "flexLayout"
                }, [ e("span", [ t._v("项目余额(元)") ]), t._v(" "), e("span", [ t._v(t._s(t.loanTradeDetail.orderBalance || "0.00")) ]) ]), t._v(" "), t.repayPlanList ? e("p", {
                    staticClass: "flexLayout"
                }, [ e("span", [ t._v("查看合同") ]), t._v(" "), e("span", t._l(t.loanTradeDetail.contracts, function(a, n) {
                    return e("em", {
                        key: n,
                        attrs: {
                            eventid: "0-" + n
                        },
                        on: {
                            click: function(e) {
                                t.previewCon(a);
                            }
                        }
                    }, [ t._v("《" + t._s(a.name || "--") + "》") ]);
                })) ]) : t._e() ], 1) ]) ], 1), t._v(" "), t.repayPlanList ? e("button", {
                    staticClass: "primary btn",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(a) {
                            t.goCount();
                        }
                    }
                }, [ t._v("还款试算") ]) : t._e() ], 1), t._v(" "), e("div", [ t.repayPlanList ? e("h1", {
                    staticClass: "repayTitle"
                }, [ t._v("还款计划") ]) : t._e(), t._v(" "), t._l(t.repayPlanList, function(a, n) {
                    return e("loan-infor-list", {
                        key: n,
                        attrs: {
                            currentPeriod: a.currentPeriod,
                            repayTime: a.dueDate,
                            amountNeedPay: a.amountNeedPay,
                            tenderBalanceBuckledPay: a.tenderBalanceBuckledPay,
                            totalAmount: a.totalAmount,
                            totalPeriod: a.totalPeriod,
                            amountBackedPay: a.amountBackedPay,
                            isShowWithhold: t.isShowWithhold,
                            status: a.repaymentStatus,
                            eventid: "2-" + n,
                            mpcomid: "0-" + n
                        },
                        on: {
                            lookNewDetail: function(e) {
                                t.lookDetails(a);
                            },
                            lookRepayDetail: function(e) {
                                t.lookRepayDetails(a.replayPlanNo);
                            },
                            buildWithhold: function(e) {
                                t.buildWithholdBill(a);
                            }
                        }
                    });
                }) ], 2), t._v(" "), t.contractBox ? e("div", {
                    staticClass: "hisMask"
                }, [ e("scroll-view", {
                    staticClass: "scrollView",
                    attrs: {
                        "scroll-y": !0
                    }
                }, [ e("div", [ e("img", {
                    staticClass: "close",
                    attrs: {
                        src: "/static/images/preliminary/close.png",
                        eventid: "3"
                    },
                    on: {
                        click: function(a) {
                            t.contractBox = !1;
                        }
                    }
                }), t._v(" "), t._l(t.contractUrl, function(t, a) {
                    return e("image", {
                        key: a,
                        staticStyle: {
                            width: "100%",
                            height: "auto"
                        },
                        attrs: {
                            mode: "widthFix",
                            src: t
                        }
                    });
                }) ], 2) ]) ], 1) : t._e() ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "cutOffRule"
                }, [ a("span", {
                    staticClass: "leftCricular"
                }), this._v(" "), a("span", {
                    staticClass: "rightCricular"
                }) ]);
            } ]
        };
        a.a = n;
    }
}, [ "691K" ]);