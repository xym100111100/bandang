global.webpackJsonp([ 10 ], {
    QGim: function(t, e) {},
    Wjm8: function(t, e, a) {
        var s = a("WkAV"), n = a("zNVI"), i = a("ybqe")(s.a, n.a, function(t) {
            a("QGim");
        }, "data-v-86fd53a2", null);
        e.a = i.exports;
    },
    WkAV: function(t, e, a) {
        var s = a("woOf"), n = a.n(s), i = a("A3UG"), l = a("b92S");
        e.a = {
            data: function() {
                return {
                    clientDetail: {},
                    isShowLayer: !1,
                    mobile: "",
                    standbyPhone: ""
                };
            },
            onShow: function() {
                wx.setNavigationBarTitle({
                    title: "客户信息"
                });
            },
            onLoad: function(t) {
                n()(this.$data, this.$options.data()), this.clientNo = t.clientNo, this.init(t.clientNo);
            },
            components: {
                DialogComponent: i.a
            },
            mounted: function() {},
            methods: {
                callPhone: function(t) {
                    wx.makePhoneCall({
                        phoneNumber: t
                    });
                },
                onOk: function() {
                    console.log(this.mobile), "" == this.mobile ? this.alertContent("手机号码不能为空") : (this.upDatePhone(this.mobile), 
                    this.isShowLayer = !1);
                },
                onCancel: function() {
                    this.isShowLayer = !1;
                },
                eidtTel: function() {
                    this.isShowLayer = !0;
                },
                alertContent: function(t) {
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                },
                init: function(t) {
                    var e = this;
                    l.c.repayClientDetail({
                        clientNo: t
                    }).then(function(t) {
                        var a = JSON.parse(t.desData);
                        t.succ ? (e.clientDetail = a.clientDetail, e.standbyPhone = a.clientDetail.alternativePhone) : e.alertContent(t.message ? t.message : "数据异常");
                    }).catch(function(t) {
                        e.alertContent("网络出了个小差");
                    });
                },
                upDatePhone: function(t) {
                    var e = this;
                    l.c.clientSpareContactsSave({
                        clientNo: this.clientNo,
                        clientName: this.clientDetail.clientName,
                        sparePhone: t
                    }).then(function(t) {
                        var a = JSON.parse(t.desData);
                        t.succ ? a.saveState && (e.alertContent("保存成功"), e.standbyPhone = e.mobile) : e.alertContent(t.message ? t.message : "数据异常");
                    }).catch(function(t) {
                        e.alertContent("网络出了个小差");
                    });
                }
            }
        };
    },
    h28g: function(t, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = a("5nAL"), n = a.n(s), i = a("Wjm8");
        new n.a(i.a).$mount();
    },
    zNVI: function(t, e, a) {
        var s = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "personalInfo"
                }, [ a("h2", [ t._v("基础信息") ]), t._v(" "), a("div", {
                    staticClass: "baseInfo"
                }, [ a("p", {
                    staticClass: "cellLayout"
                }, [ a("span", {
                    staticClass: "title"
                }, [ t._v("姓名") ]), a("text", {
                    staticClass: "info",
                    attrs: {
                        selectable: "true"
                    }
                }, [ t._v(t._s(t.clientDetail.clientName)) ]) ]), t._v(" "), a("p", {
                    staticClass: "cellLayout"
                }, [ a("span", {
                    staticClass: "title"
                }, [ t._v("年龄") ]), a("text", {
                    staticClass: "info",
                    attrs: {
                        selectable: "true"
                    }
                }, [ t._v(t._s(t.clientDetail.age)) ]) ]), t._v(" "), a("p", {
                    staticClass: "cellLayout"
                }, [ a("span", {
                    staticClass: "title"
                }, [ t._v("手机号码") ]), a("text", {
                    staticClass: "info",
                    attrs: {
                        selectable: "true",
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            t.callPhone(t.clientDetail.phone);
                        }
                    }
                }, [ t._v(t._s(t.clientDetail.phone)) ]) ]), t._v(" "), a("p", {
                    staticClass: "cellLayout"
                }, [ a("span", {
                    staticClass: "title"
                }, [ t._v("身份证号码") ]), a("text", {
                    staticClass: "info",
                    attrs: {
                        selectable: "true"
                    }
                }, [ t._v(t._s(t.clientDetail.certNo)) ]) ]), t._v(" "), a("p", {
                    staticClass: "cellLayout"
                }, [ a("span", {
                    staticClass: "title"
                }, [ t._v("联系地址") ]), a("text", {
                    staticClass: "info",
                    attrs: {
                        selectable: "true"
                    }
                }, [ t._v(t._s(t.clientDetail.address)) ]) ]), t._v(" "), a("p", {
                    staticClass: "cellLayout"
                }, [ a("span", {
                    staticClass: "title"
                }, [ t._v("工作行业") ]), a("text", {
                    staticClass: "info",
                    attrs: {
                        selectable: "true"
                    }
                }, [ t._v(t._s(t.clientDetail.workIndustryName)) ]) ]) ], 1), t._v(" "), a("h2", [ t._v("紧急联系人信息") ]), t._v(" "), a("div", {
                    staticClass: "warnLinkman"
                }, [ a("ul", t._l(t.clientDetail.contracts, function(e, s) {
                    return a("li", {
                        key: e.contractName
                    }, [ a("p", {
                        staticClass: "cellLayout"
                    }, [ a("span", {
                        staticClass: "title indexName"
                    }, [ t._v("联系人" + t._s(s + 1)) ]) ]), t._v(" "), a("p", {
                        staticClass: "cellLayout"
                    }, [ a("span", {
                        staticClass: "title"
                    }, [ t._v("联系人姓名") ]), a("span", {
                        staticClass: "info"
                    }, [ t._v(t._s(e.contractName)) ]) ]), t._v(" "), a("p", {
                        staticClass: "cellLayout"
                    }, [ a("span", {
                        staticClass: "title"
                    }, [ t._v("关系") ]), a("span", {
                        staticClass: "info"
                    }, [ t._v(t._s(e.contractRelation)) ]) ]), t._v(" "), a("p", {
                        staticClass: "cellLayout"
                    }, [ a("span", {
                        staticClass: "title"
                    }, [ t._v("联系电话") ]), a("span", {
                        staticClass: "info",
                        attrs: {
                            eventid: "1-" + s
                        },
                        on: {
                            click: function(a) {
                                t.callPhone(e.contractPhone);
                            }
                        }
                    }, [ t._v(t._s(e.contractPhone)) ]) ]) ], 1);
                })) ], 1), t._v(" "), a("h2", [ t._v("本人备用") ]), t._v(" "), a("div", {
                    staticClass: "personalTel"
                }, [ a("span", {
                    staticClass: "telView",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(e) {
                            t.callPhone(t.standbyPhone);
                        }
                    }
                }, [ t._v(t._s(t.standbyPhone)) ]), t._v(" "), a("span", {
                    staticClass: "eidtBtn",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: t.eidtTel
                    }
                }, [ t._v("修改") ]) ]), t._v(" "), a("DialogComponent", {
                    attrs: {
                        isShowHeader: !1,
                        "is-show": t.isShowLayer,
                        eventid: "5",
                        mpcomid: "0"
                    },
                    on: {
                        "on-ok": t.onOk,
                        "on-cancel": t.onCancel
                    }
                }, [ a("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.mobile,
                        expression: "mobile"
                    } ],
                    staticClass: "telIstBox",
                    attrs: {
                        placeholder: "请输入手机号码",
                        maxlength: "11",
                        type: "number",
                        eventid: "4"
                    },
                    domProps: {
                        value: t.mobile
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.mobile = e.target.value);
                        }
                    }
                }) ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = s;
    }
}, [ "h28g" ]);