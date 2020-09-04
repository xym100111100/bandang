global.webpackJsonp([ 13 ], {
    "3J0u": function(t, e) {},
    Hnzs: function(t, e, a) {
        var n = a("Gu7T"), s = a.n(n), i = a("//Fk"), o = a.n(i), r = a("woOf"), c = a.n(r), l = a("Dd8w"), u = a.n(l), p = a("E8ny"), m = (a("IcnI"), 
        a("b92S")), d = a("NYxO");
        e.a = {
            data: function() {
                return {
                    repaySourseList: [ {} ],
                    copyBankInfo: {
                        bankAccount: "",
                        bankNameShow: "",
                        clientNo: "",
                        openBankCode: "",
                        openBankName: "",
                        ownerIdNo: "",
                        ownerMobile: "",
                        ownerName: ""
                    },
                    settleIndex: 0,
                    paymentIndex: 0,
                    time: new Date().toLocaleDateString().replace(/[/]/g, "-"),
                    settleType: [ "银行卡代扣", "线下转账" ],
                    settleTypeValue: [ "AUTO_BANK", "OFFLINE" ],
                    paymentType: [ "自有资金", "亲朋代偿", "担保人代偿" ],
                    paymentTypeValue: [ "COM", "RF", "WP" ],
                    nextImgSrc: "/static/images/next.png",
                    uploadImgList: [],
                    uploadImgListAll: [],
                    withholdMoney: "",
                    otherMoney: "",
                    remarkText: "",
                    paddingBottom: !1,
                    repayPlan: "",
                    isLoop: !0,
                    mustUp: !0,
                    receiverBankInfo: {},
                    uploadImgListBat: ""
                };
            },
            computed: u()({}, Object(d.b)({
                repayData: function(t) {
                    return t.repay.repayData;
                }
            })),
            components: {},
            mounted: function() {
                this.$store.commit("CLEAR_INFO"), c()(this.$data, this.$options.data()), this.repayInit();
            },
            methods: {
                initrecorder: function() {
                    this.$store.commit("SET_ACCOUNT_OWNERNAME_DFT", this.receiverBankInfo.bankCustomerName), 
                    this.$store.commit("SET_ACCOUNT_BANKACCOUNT_DFT", this.receiverBankInfo.bankCardNo), 
                    this.$store.commit("SET_ACCOUNT_BANKNAME_DFT", this.receiverBankInfo.bankCardName);
                },
                lookAccountInfor: function(t) {
                    var e = "";
                    if (e = "company" == t ? "/pages/repayment/account/main?type=company" : "/pages/repayment/account/main?type=personal", 
                    "银行卡代扣" == this.repaySourseList[this.settleIndex].name) return !1;
                    wx.navigateTo({
                        url: e
                    });
                },
                paymentTypeChange: function(t) {
                    this.paymentIndex = t.target.value;
                },
                bindPickerChange: function(t) {
                    console.log(t.target.value), this.settleIndex = t.target.value, "银行卡代扣" == this.repaySourseList[this.settleIndex].name ? this.mustUp = !0 : this.mustUp = !1, 
                    this.repayInit();
                },
                repayInit: function() {
                    var t = this;
                    m.c.repayWithholdAccount({
                        repaymentOrderPaySource: this.repaySourseList[this.settleIndex].value || "",
                        loanTradeNo: this.repayData.repaymentObj.loanTradeOrderNo,
                        clientNo: this.repayData.repaymentObj.clientNo,
                        replayPlanNo: this.repayData.repaymentObj.replayPlanNo
                    }).then(function(e) {
                        if (e.succ) {
                            var a = JSON.parse(e.desData), n = a.bankCard;
                            t.receiverBankInfo = a.receiverBankInfo, t.repaySourseList = a.repaySourse.repaySourseList, 
                            t.initrecorder(), t.repayPlan = a.repayPlan, t.$store.dispatch("setAccountData", n);
                        } else t.alertContent(e.message ? e.message : "数据异常"), t.$store.commit("CLEAR_INFO");
                    }).catch(function(e) {
                        t.alertContent("网络出了个小差"), t.$store.commit("CLEAR_INFO");
                    });
                },
                submitInfor: function() {
                    return isNaN(this.otherMoney) || isNaN(this.withholdMoney) ? (this.alertContent("请输入正确的数字!"), 
                    !1) : 0 == Number(this.withholdMoney) ? (this.alertContent("扣款金额不能为空!"), !1) : void this.uploadWithholdInfor();
                },
                uploadWithholdInfor: function() {
                    var t = this;
                    if (this.mustUp || 0 != this.uploadImgList.length) if (0 != this.uploadImgList.length) {
                        wx.showLoading({
                            title: "加载中",
                            mask: !0
                        });
                        for (var e = [], a = 0; a < this.uploadImgList.length; a++) e.push(this.upLoadimgMore(this.uploadImgList[a], a));
                        o.a.all(e).then(function(e) {
                            console.log(e), wx.hideLoading(), t.postMsg(e);
                        }).catch(function(e) {
                            t.alertContent("图片上传失败");
                        });
                    } else this.postMsg(""); else this.alertContent("请上传凭证!");
                },
                postMsg: function(t) {
                    var e = this;
                    m.c.repayWithholdCreate({
                        repayAmount: Number(this.withholdMoney),
                        planNo: this.repayData.repaymentObj.replayPlanNo,
                        loanTradeNo: this.repayData.repaymentObj.loanTradeOrderNo,
                        clientNo: this.repayData.repaymentObj.clientNo,
                        otherAmount: Number(this.otherMoney),
                        repayMode: this.paymentTypeValue[this.paymentIndex],
                        settleType: this.repaySourseList[this.settleIndex].value,
                        memo: this.remarkText,
                        fromBankCardNo: this.repayData.accountData.bankAccount,
                        fromBankCardName: this.repayData.accountData.bankNameShow,
                        fromBankCustomerName: this.repayData.accountData.ownerName,
                        toBankCardNo: this.repayData.defalutAccountData.bankAccount,
                        toBankCardName: this.repayData.defalutAccountData.bankNameShow,
                        toBankCustomerName: this.repayData.defalutAccountData.ownerName,
                        voucherFilePath: t ? t.map(function(t) {
                            return t.filePath;
                        }).join(";") : ""
                    }).then(function(t) {
                        t.succ ? (e.repayList = JSON.parse(t.desData).withholdNo, wx.showModal({
                            title: "提示",
                            content: "扣款单创建成功",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm && wx.navigateBack();
                            }
                        })) : e.alertContent(t.message ? t.message : "数据异常");
                    }).catch(function(t) {
                        e.alertContent("网络出了个小差");
                    });
                },
                choseImg: function() {
                    var t = this;
                    this.uploadImgList, wx.chooseImage({
                        count: 9,
                        sizeType: [ "original", "compressed" ],
                        sourceType: [ "album", "camera" ],
                        success: function(e) {
                            t.uploadImgList = [].concat(s()(t.uploadImgList), s()(e.tempFilePaths)), t.uploadImgList.length > 9 && (t.uploadImgList = t.uploadImgList.slice(0, 9)), 
                            t.uploadImgListAll.length = 0;
                        }
                    });
                },
                upLoadimgMore: function(t, e) {
                    var a = this, n = p.a.prod;
                    return new o.a(function(s, i) {
                        wx.uploadFile({
                            url: n + "/withholdVoucherUpload.do",
                            filePath: t,
                            name: "file",
                            formData: null,
                            success: function(t) {
                                if (200 == t.statusCode) {
                                    var n = JSON.parse(t.data);
                                    n.succ ? s({
                                        filePath: n.filePath,
                                        previewUrl: n.previewUrl
                                    }) : i();
                                } else i(), a.alertContent("图片" + e + "上传失败");
                            },
                            fail: function(t) {
                                i(), a.alertContent("上传失败");
                            }
                        });
                    });
                },
                deleteIconFn: function(t) {
                    this.uploadImgList.splice(t, 1), this.uploadImgListAll.splice(t, 1);
                },
                alertContent: function(t) {
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                },
                callPhone: function(t) {
                    wx.makePhoneCall({
                        phoneNumber: t
                    });
                }
            }
        };
    },
    UihT: function(t, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a("5nAL"), s = a.n(n), i = a("olTW");
        new s.a(i.a).$mount(), e.default = {
            config: {
                navigationBarTitleText: "新增扣款单"
            }
        };
    },
    WKkC: function(t, e, a) {
        var n = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "BWPage"
                }, [ a("div", {
                    staticClass: "BWPageTitle"
                }, [ t._v("\n        如需提前还款、减免罚息，请先与总部还款管理岗联系：\n        "), a("span", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            t.callPhone("18969908554");
                        }
                    }
                }, [ t._v("18969908554") ]), t._v(" ，查账请联系结算\n        "), a("span", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.callPhone("17757170720");
                        }
                    }
                }, [ t._v("17757170720") ]) ]), t._v(" "), a("div", {
                    staticClass: "BWPageLists"
                }, [ a("div", {
                    staticClass: "BWPageList"
                }, [ t._v(t._s(t.repayData.repaymentObj.customerName) + " " + t._s(t.repayData.repaymentObj.currentPeriod) + "/" + t._s(t.repayData.repaymentObj.totalPeriod) + "期") ]), t._v(" "), a("picker", {
                    staticClass: "BWPageList",
                    attrs: {
                        "range-key": "name",
                        value: t.settleIndex,
                        range: t.repaySourseList,
                        eventid: "2"
                    },
                    on: {
                        change: t.bindPickerChange
                    }
                }, [ a("div", {
                    staticClass: "BWPageListLeft"
                }, [ t._v("还款类型") ]), t._v(" "), a("div", {
                    staticClass: "BWPageListRight"
                }, [ a("span", [ t._v(t._s(t.repaySourseList[t.settleIndex].name || "")) ]), t._v(" "), a("image", {
                    staticClass: "rightIcom",
                    attrs: {
                        src: t.nextImgSrc
                    }
                }) ]) ]), t._v(" "), a("picker", {
                    staticClass: "BWPageList",
                    attrs: {
                        value: t.paymentIndex,
                        range: t.paymentType,
                        eventid: "3"
                    },
                    on: {
                        change: t.paymentTypeChange
                    }
                }, [ a("div", {
                    staticClass: "BWPageListLeft"
                }, [ t._v("资金类型") ]), t._v(" "), a("div", {
                    staticClass: "BWPageListRight"
                }, [ a("span", [ t._v(t._s(t.paymentType[t.paymentIndex])) ]), t._v(" "), a("image", {
                    staticClass: "rightIcom",
                    attrs: {
                        src: t.nextImgSrc
                    }
                }) ]) ]), t._v(" "), a("div", {
                    staticClass: "BWPageList receivablesList",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: function(e) {
                            t.lookAccountInfor("company");
                        }
                    }
                }, [ a("div", {
                    staticClass: "BWPageListLeft receivables"
                }, [ t._v("收款人") ]), t._v(" "), a("div", {
                    staticClass: "BWPageListRight receivablesInfor"
                }, [ a("div", {
                    staticClass: "receivablesInforDetails"
                }, [ t._v("\n                    " + t._s(t.repayData.defalutAccountData.ownerName) + "\n                    "), a("br"), t._v(" " + t._s(t.repayData.defalutAccountData.bankNameShow) + " " + t._s(t.repayData.defalutAccountData.bankAccount) + "\n                ") ], 1), t._v(" "), "银行卡代扣" !== t.repaySourseList[t.settleIndex].name ? a("image", {
                    staticClass: "rightIcom receivablesIcon",
                    attrs: {
                        src: t.nextImgSrc
                    }
                }) : t._e() ]) ]), t._v(" "), a("div", {
                    staticClass: "BWPageList receivablesList",
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        click: function(e) {
                            t.lookAccountInfor("personal");
                        }
                    }
                }, [ a("div", {
                    staticClass: "BWPageListLeft receivables"
                }, [ t._v("付款人") ]), t._v(" "), a("div", {
                    staticClass: "BWPageListRight receivablesInfor"
                }, [ a("div", {
                    staticClass: "receivablesInforDetails"
                }, [ t._v("\n                    " + t._s(t.repayData.accountData.ownerName) + "\n                    "), a("br"), t._v(" " + t._s(t.repayData.accountData.bankNameShow) + " " + t._s(t.repayData.accountData.bankAccount) + "\n                ") ], 1), t._v(" "), "银行卡代扣" !== t.repaySourseList[t.settleIndex].name ? a("image", {
                    staticClass: "rightIcom receivablesIcon",
                    attrs: {
                        src: t.nextImgSrc
                    }
                }) : t._e() ]) ]), t._v(" "), a("div", {
                    staticClass: "BWPageMoneyTige"
                }, [ t._v("\n            需还金额:\n            "), a("span", [ t._v(t._s(t.repayPlan.amountNeedPay) + "元") ]), t._v("\n            (需还金额 = 应还 - 已还 - 扣款中 - 审核中 - 项目余额)\n        ") ]), t._v(" "), a("div", {
                    staticClass: "BWPageList"
                }, [ a("div", {
                    staticClass: "BWPageListLeft"
                }, [ t._v("扣款金额(元)") ]), t._v(" "), a("div", {
                    staticClass: "BWPageListRight clearInput"
                }, [ a("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.withholdMoney,
                        expression: "withholdMoney"
                    } ],
                    staticClass: "ListRightInput",
                    attrs: {
                        type: "digit",
                        placeholder: "请输入大于0的数字金额",
                        eventid: "6"
                    },
                    domProps: {
                        value: t.withholdMoney
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.withholdMoney = e.target.value);
                        }
                    }
                }), t._v(" "), "" != t.withholdMoney ? a("div", {
                    staticClass: "clearBox",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        click: function(e) {
                            t.withholdMoney = "";
                        }
                    }
                }, [ a("img", {
                    attrs: {
                        src: "/static/images/clear.png",
                        alt: ""
                    }
                }) ]) : t._e() ]) ]), t._v(" "), a("div", {
                    staticClass: "BWPageList"
                }, [ a("div", {
                    staticClass: "BWPageListLeft"
                }, [ t._v("部分金额另有他用(元)") ]), t._v(" "), a("div", {
                    staticClass: "BWPageListRight clearInput"
                }, [ a("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.otherMoney,
                        expression: "otherMoney"
                    } ],
                    staticClass: "ListRightInput",
                    attrs: {
                        type: "digit",
                        placeholder: "请输入另有他用金额",
                        eventid: "8"
                    },
                    domProps: {
                        value: t.otherMoney
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.otherMoney = e.target.value);
                        }
                    }
                }), t._v(" "), "" != t.otherMoney ? a("div", {
                    staticClass: "clearBox",
                    attrs: {
                        eventid: "9"
                    },
                    on: {
                        click: function(e) {
                            t.otherMoney = "";
                        }
                    }
                }, [ a("img", {
                    attrs: {
                        src: "/static/images/clear.png",
                        alt: ""
                    }
                }) ]) : t._e() ]) ]) ], 1), t._v(" "), a("div", {
                    staticClass: "uploanSite"
                }, [ a("h2", {
                    staticClass: "uploanSiteTitle"
                }, [ t._v("上传凭证") ]), t._v(" "), a("div", {
                    staticClass: "imgShowList"
                }, [ t._l(t.uploadImgList, function(e, n) {
                    return a("div", {
                        key: n,
                        staticClass: "imgSite"
                    }, [ a("icon", {
                        staticClass: "imgSiteDeleteIcon",
                        attrs: {
                            type: "clear",
                            eventid: "10-" + n
                        },
                        on: {
                            click: function(e) {
                                t.deleteIconFn(n);
                            }
                        }
                    }), t._v(" "), a("image", {
                        staticClass: "img",
                        attrs: {
                            src: e
                        }
                    }) ], 1);
                }), t._v(" "), t.uploadImgList.length < 9 ? a("div", {
                    staticClass: "imgSite uploanImgText",
                    attrs: {
                        eventid: "11"
                    },
                    on: {
                        click: t.choseImg
                    }
                }, [ a("img", {
                    attrs: {
                        src: "/static/images/uploadImg.png",
                        alt: ""
                    }
                }) ]) : t._e() ], 2) ], 1), t._v(" "), a("div", {
                    staticClass: "remarksSite"
                }, [ a("h2", {
                    staticClass: "remarksSiteTitle"
                }, [ t._v("备注") ]), t._v(" "), a("div", {
                    staticClass: "remarkTextInput",
                    class: {
                        paddingBottom: t.paddingBottom
                    }
                }, [ a("textarea", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.remarkText,
                        expression: "remarkText"
                    } ],
                    staticClass: "remarksTextarea",
                    attrs: {
                        "cursor-spacing": "280",
                        placeholder: "捎句话给结算吧",
                        eventid: "12"
                    },
                    domProps: {
                        value: t.remarkText
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.remarkText = e.target.value);
                        }
                    }
                }) ]) ], 1), t._v(" "), a("button", {
                    staticClass: "tureFootBtn",
                    attrs: {
                        eventid: "13"
                    },
                    on: {
                        click: t.submitInfor
                    }
                }, [ t._v("确定") ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    olTW: function(t, e, a) {
        var n = a("Hnzs"), s = a("WKkC"), i = a("ybqe")(n.a, s.a, function(t) {
            a("3J0u");
        }, "data-v-a4bc7cb0", null);
        e.a = i.exports;
    }
}, [ "UihT" ]);