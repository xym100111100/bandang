global.webpackJsonp([ 7 ], {
    "6bRL": function(t, e) {
        Date.prototype.format = function(t) {
            var e = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            for (var n in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), 
            e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
            return t;
        };
    },
    "7BO2": function(t, e) {},
    M93x: function(t, e, n) {
        var a = n("Mw+1"), o = n("ybqe")(a.a, null, function(t) {
            n("7BO2");
        }, null, null);
        e.a = o.exports;
    },
    "Mw+1": function(t, e, n) {
        e.a = {
            onLaunch: function() {
                var t = wx.getUpdateManager();
                t.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function(e) {
                            e.confirm && (wx.setStorage({
                                key: "WECHAT_AUTH_TOKEN",
                                data: ""
                            }), t.applyUpdate());
                        }
                    });
                }), t.onUpdateFailed(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本下载失败",
                        showCancel: !1
                    });
                });
            }
        };
    },
    NHnr: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n("5nAL"), o = n.n(a), i = n("M93x"), s = n("YmDg"), c = (n.n(s), n("6bRL")), g = (n.n(c), 
        n("IcnI"));
        o.a.config.productionTip = !1, i.a.mpType = "app", o.a.prototype.$store = g.a, new o.a(i.a).$mount(), 
        e.default = {
            config: {
                pages: [ "^pages/login/main" ],
                window: {
                    backgroundTextStyle: "light",
                    navigationBarBackgroundColor: "#fff",
                    navigationBarTitleText: "移动办单工具",
                    navigationBarTextStyle: "black"
                },
                tabBar: {
                    color: "#a0a0a0",
                    selectedColor: "#468cee",
                    backgroundColor: "#ffffff",
                    borderStyle: "black",
                    list: [ {
                        selectedIconPath: "static/images/home-1.png",
                        iconPath: "static/images/home.png",
                        pagePath: "pages/home/main",
                        text: "功能区"
                    }, {
                        selectedIconPath: "static/images/mine-1.png",
                        iconPath: "static/images/mine.png",
                        pagePath: "pages/personalCenter/main",
                        text: "我的"
                    } ]
                }
            }
        };
    },
    YmDg: function(t, e) {}
}, [ "NHnr" ]);