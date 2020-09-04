global.webpackJsonp([ 22 ], {
    "9gdn": function(e, t, n) {
        var a = n("b92S");
        n("eNCn"), t.a = {
            data: function() {
                return {
                    imageUrl: "/static/images/share_bg.png",
                    accessToken: ""
                };
            },
            mounted: function(e) {
                this.getAccessToken();
            },
            methods: {
                getAccessToken: function() {
                    var e = this;
                    a.i.wxQrcode({
                        page: "/pages/preliminary/authentication/main",
                        partnerNo: "1232"
                    }).then(function(t) {
                        console.log(t);
                        var n = JSON.parse(t.desData);
                        t.succ ? (console.log(t), e.accessToken = n.accessToken, wx.request({
                            url: "https://api.weixin.qq.com/wxa/getwxacode?access_token=" + e.accessToken,
                            data: {
                                path: ""
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/json"
                            },
                            success: function(e) {
                                console.log(e.data);
                            },
                            fail: function(e) {
                                console.log("isFail");
                            }
                        })) : wx.showToast({
                            title: t.message,
                            icon: "success",
                            duration: 2e3,
                            mask: !0
                        });
                    }).catch(function(e) {
                        console.log(e);
                    });
                },
                previewImage: function(e) {
                    wx.previewImage({
                        current: this.imageUrl,
                        urls: [ this.imageUrl ],
                        success: function() {
                            console.log(e.target.dataset.src);
                        }
                    });
                }
            },
            onShareAppMessage: function(e) {
                return "button" === e.from && console.log(e.target), {
                    title: "邀请您进行身份验证",
                    path: "/pages/preliminary/phoneAuth/main?id=1",
                    imageUrl: "/static/images/share_img.png"
                };
            }
        };
    },
    DUQS: function(e, t, n) {
        var a = n("9gdn"), s = n("uLlK"), i = n("ybqe")(a.a, s.a, function(e) {
            n("tps0");
        }, null, null);
        t.a = i.exports;
    },
    H1wV: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("5nAL"), s = n.n(a), i = n("DUQS");
        new s.a(i.a).$mount();
    },
    tps0: function(e, t) {},
    uLlK: function(e, t, n) {
        var a = {
            render: function() {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {
                    staticClass: "invitation-page"
                }, [ t("img", {
                    attrs: {
                        src: this.imageUrl,
                        "data-src": this.imageUrl,
                        alt: "",
                        eventid: "0"
                    },
                    on: {
                        click: this.previewImage
                    }
                }) ]);
            },
            staticRenderFns: []
        };
        t.a = a;
    }
}, [ "H1wV" ]);