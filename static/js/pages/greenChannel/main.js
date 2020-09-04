global.webpackJsonp([ 25 ], {
    "89OZ": function(t, i, e) {
        var a = e("b92S");
        i.a = {
            data: function() {
                return {
                    creditNo: "",
                    priceVal: "",
                    objectArray: [],
                    arr_id: 0,
                    totalPrice: "...",
                    partnerName: "",
                    userId: "",
                    submitFlag: !0,
                    clientNo: ""
                };
            },
            onShow: function() {
                this.arr_id = 0;
            },
            onLoad: function(t) {
                wx.setNavigationBarTitle({
                    title: "绿色通道"
                }), this.creditNo = t.creditNo, this.pageInit();
            },
            methods: {
                check: function() {
                    "" != this.priceVal && this.priceVal > 0 && this.objectArray.length > 0 ? (this.submitFlag = !1, 
                    this.repayLoan()) : this.submitFlag = !0;
                },
                pricFn: function() {
                    console.log(this.priceVal), this.check();
                },
                bindPickerChange: function(t) {
                    console.log(t), console.log("picker发送选择改变，携带值为", t.mp.detail.value), this.arr_id = t.mp.detail.value, 
                    this.check();
                },
                pageInit: function() {
                    var t = this;
                    a.e.channelInit({
                        creditNo: this.creditNo
                    }).then(function(i) {
                        var e = JSON.parse(i.desData);
                        i.succ && (console.log(e), t.partnerName = e.loanCreditModeInitData.partnerName, 
                        t.objectArray = e.loanCreditModeInitData.periodList, t.priceVal = e.loanCreditModeInitData.auditAmount / 100, 
                        t.userId = e.loanCreditModeInitData.userId, t.coopNo = e.loanCreditModeInitData.partnerNo, 
                        t.clientNo = e.loanCreditModeInitData.clientNo, t.check());
                    }).catch(function(t) {});
                },
                repayLoan: function() {
                    var t = this;
                    a.e.repayLoan({
                        clientNo: this.clientNo,
                        coopNo: this.coopNo,
                        loanAmt: this.priceVal,
                        loanLimit: parseInt(this.objectArray[this.arr_id])
                    }).then(function(i) {
                        var e = JSON.parse(i.desData);
                        i.succ && (t.totalPrice = parseFloat(e.loanCalcResult.totalAmount) / 100);
                    });
                },
                submitOrder: function() {
                    a.e.creditmodeSubmit({
                        userId: this.userId,
                        clientNo: this.clientNo,
                        coopNo: this.coopNo,
                        loanAmount: this.priceVal,
                        creditNo: this.creditNo,
                        loanPeriod: parseInt(this.objectArray[this.arr_id])
                    }).then(function(t) {
                        var i = JSON.parse(t.desData);
                        t.succ && (console.log(i), wx.showModal({
                            title: "恭喜",
                            content: "借款创建成功",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm && (console.log("用户点击确定"), wx.navigateTo({
                                    url: "../givingCredit/main"
                                }));
                            }
                        }));
                    });
                }
            }
        };
    },
    LJGA: function(t, i, e) {
        var a = {
            render: function() {
                var t = this, i = t.$createElement, e = t._self._c || i;
                return e("div", {
                    staticClass: "green-channel-page"
                }, [ e("div", {
                    staticClass: "hospital-item"
                }, [ e("div", {
                    staticClass: "hospital-title"
                }, [ e("div", {
                    staticClass: "icon"
                }), t._v(" "), e("p", {
                    staticClass: "title"
                }, [ t._v("合作医院") ]) ], 1), t._v(" "), e("div", {
                    staticClass: "hospital-name"
                }, [ e("p", [ t._v(t._s(t.partnerName)) ]) ], 1) ]), t._v(" "), e("div", {
                    staticClass: "form-group"
                }, [ e("div", {
                    staticClass: "price-input section"
                }, [ e("span", [ t._v("分期金额") ]), t._v(" "), e("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.priceVal,
                        expression: "priceVal"
                    } ],
                    attrs: {
                        type: "digit",
                        placeholder: "请输入分期金额",
                        eventid: "0"
                    },
                    domProps: {
                        value: t.priceVal
                    },
                    on: {
                        blur: t.pricFn,
                        input: function(i) {
                            i.target.composing || (t.priceVal = i.target.value);
                        }
                    }
                }) ]), t._v(" "), e("div", {
                    staticClass: "price-input section"
                }, [ e("span", [ t._v("分期期数") ]), t._v(" "), e("div", {
                    staticClass: "picker"
                }, [ e("picker", {
                    attrs: {
                        value: t.arr_id,
                        range: t.objectArray,
                        eventid: "1"
                    },
                    on: {
                        change: t.bindPickerChange
                    }
                }, [ e("view", {
                    staticClass: "picker"
                }, [ t._v("\n                    " + t._s(t.objectArray[t.arr_id]) + "期\n                    ") ]) ]) ], 1) ]) ]), t._v(" "), e("div", {
                    staticClass: "footer-submit"
                }, [ e("p", [ t._v("每期应还：" + t._s(t.totalPrice)) ]), t._v(" "), e("button", {
                    staticClass: "submit-btn",
                    attrs: {
                        disabled: t.submitFlag,
                        eventid: "2"
                    },
                    on: {
                        click: t.submitOrder
                    }
                }, [ t._v("提交") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        i.a = a;
    },
    Qjeb: function(t, i, e) {
        var a = e("89OZ"), n = e("LJGA"), o = e("ybqe")(a.a, n.a, function(t) {
            e("iSnA");
        }, "data-v-700fdc85", null);
        i.a = o.exports;
    },
    iSnA: function(t, i) {},
    m9NA: function(t, i, e) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = e("5nAL"), n = e.n(a), o = e("Qjeb");
        new n.a(o.a).$mount();
    }
}, [ "m9NA" ]);