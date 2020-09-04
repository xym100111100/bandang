global.webpackJsonp([ 27 ], {
    "U/2B": function(a, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = e("5nAL"), i = e.n(n), s = e("eORg");
        new i.a(s.a).$mount(), t.default = {
            config: {
                backgroundTextStyle: "dark"
            }
        };
    },
    ZxeR: function(a, t, e) {
        var n = e("woOf"), i = e.n(n), s = e("b92S"), o = e("A3UG"), c = e("IgYJ"), r = e("/54S");
        t.a = {
            name: "",
            components: {
                DialogComponent: o.a,
                SearchBox: c.a,
                nonePage: r.a
            },
            data: function() {
                return {
                    defalutKey: "丽人贷",
                    listNone: !1,
                    hasData: 2,
                    canClaim: !1,
                    nonClaimMsg: "",
                    qurTp: "",
                    keywords: "",
                    orderDetail: {},
                    tipdata: "",
                    isShowLayer: !1,
                    selectList: [ {
                        key: "丽人贷",
                        name: "丽人贷"
                    }, {
                        key: "盈信宝",
                        name: "盈信宝"
                    } ]
                };
            },
            onLoad: function(a) {
                i()(this, this.$options.data());
            },
            methods: {
                alertContent: function(a) {
                    wx.showToast({
                        title: a,
                        icon: "none",
                        duration: 2e3
                    });
                },
                search: function() {
                    var a = this;
                    s.a.MARKETP2PHYORDERDETAIL({
                        tenderName: "" + this.qurTp + this.keywords + "号"
                    }).then(function(t) {
                        var e = JSON.parse(t.desData), n = e.orderDetail, i = e.hasData, s = e.canClaim, o = e.nonClaimMsg;
                        a.hasData = i, a.canClaim = s, a.nonClaimMsg = o, a.listNone = !n, a.orderDetail = n;
                    }).catch(function(a) {});
                },
                claimCheck: function() {
                    var a = this;
                    s.a.MARKETP2PHYCLAIMCHECK({
                        tenderName: "" + this.qurTp + this.keywords + "号"
                    }).then(function(t) {
                        var e = JSON.parse(t.desData), n = e.needClaimConfirm, i = e.claimConfirmMsg;
                        1 == n ? (a.tipdata = i, a.isShowLayer = !0) : a.claim();
                    }).catch(function(a) {});
                },
                claim: function() {
                    var a = this;
                    s.a.MARKETP2PHYDOCLAIM({
                        tenderName: "" + this.qurTp + this.keywords + "号"
                    }).then(function(t) {
                        var e = JSON.parse(t.desData), n = e.claimResult, i = e.claimMsg;
                        a.isShowLayer = !1, 2 == n && a.alertContent(i), a.search();
                    }).catch(function(a) {});
                },
                onOk: function() {
                    this.claim();
                },
                onCancel: function() {
                    this.isShowLayer = !1;
                },
                invite: function() {
                    this.isShowLayer = !0;
                },
                selectValue: function(a) {
                    a.value.target.value ? (this.keywords = a.value.target.value, this.qurTp = a.key, 
                    this.search()) : this.alertContent("搜索条件不能为空");
                },
                action: function(a) {
                    a.keywords ? (this.keywords = a.keywords, this.qurTp = a.key, this.search()) : this.alertContent("搜索条件不能为空");
                }
            }
        };
    },
    bMoW: function(a, t, e) {
        var n = {
            render: function() {
                var a = this, t = a.$createElement, e = a._self._c || t;
                return e("div", {
                    staticClass: "add-user"
                }, [ e("SearchBox", {
                    attrs: {
                        actionName: "搜索",
                        placeholder: "输入项目编号",
                        defalutKey: a.defalutKey,
                        selectList: a.selectList,
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        selectValue: a.selectValue,
                        action: a.action
                    }
                }), a._v(" "), 1 == a.hasData ? e("ul", [ a._l(a.orderDetail, function(t, n) {
                    return e("li", {
                        key: t.name
                    }, [ e("span", {
                        staticClass: "name"
                    }, [ a._v(a._s(t.name)) ]), e("span", [ a._v(a._s(t.value)) ]) ]);
                }), a._v(" "), e("li", {
                    staticClass: "action-btn"
                }, [ e("div", {
                    staticClass: "tip"
                }, [ a.nonClaimMsg ? e("img", {
                    attrs: {
                        src: "/static/images/icon-error.png"
                    }
                }) : a._e(), e("span", [ a._v(a._s(a.nonClaimMsg)) ]) ]), a._v(" "), e("button", {
                    attrs: {
                        disabled: 2 == a.canClaim,
                        eventid: "1"
                    },
                    on: {
                        click: a.claimCheck
                    }
                }, [ a._v("认领") ]) ], 1) ], 2) : a._e(), a._v(" "), e("DialogComponent", {
                    attrs: {
                        topDistance: 20,
                        isShowHeader: !1,
                        "is-show": a.isShowLayer,
                        eventid: "2",
                        mpcomid: "1"
                    },
                    on: {
                        "on-ok": a.onOk,
                        "on-cancel": a.onCancel
                    }
                }, [ e("div", {
                    staticClass: "tip-style"
                }, [ a._v(a._s(a.tipdata)) ]) ]), a._v(" "), a.listNone ? e("none-page", {
                    attrs: {
                        mpcomid: "2"
                    }
                }) : a._e() ], 1);
            },
            staticRenderFns: []
        };
        t.a = n;
    },
    eORg: function(a, t, e) {
        var n = e("ZxeR"), i = e("bMoW"), s = e("ybqe")(n.a, i.a, function(a) {
            e("k8iD");
        }, "data-v-17e39ead", null);
        t.a = s.exports;
    },
    k8iD: function(a, t) {}
}, [ "U/2B" ]);