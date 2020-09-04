global.webpackJsonp([ 6 ], {
    "7YgM": function(e, t) {
        e.exports = {
            name: "widget",
            version: "1.4.7",
            description: "A Mpvue project",
            author: "changsir <fly53513@sina.com>",
            private: !0,
            scripts: {
                dev: "node build/dev-server.js",
                start: "node build/dev-server.js",
                build: "node build/build.js"
            },
            dependencies: {
                flyio: "^0.5.9",
                mpvue: "1.0.18",
                vuex: "^3.0.1"
            },
            devDependencies: {
                "babel-core": "^6.22.1",
                "babel-loader": "^7.1.1",
                "babel-plugin-transform-runtime": "^6.22.0",
                "babel-preset-env": "^1.3.2",
                "babel-preset-stage-2": "^6.22.0",
                "babel-register": "^6.22.0",
                chalk: "^2.4.0",
                "connect-history-api-fallback": "^1.3.0",
                "copy-webpack-plugin": "^4.5.1",
                "css-loader": "^0.28.11",
                cssnano: "^3.10.0",
                "cz-conventional-changelog": "^3.0.2",
                "eventsource-polyfill": "^0.9.6",
                express: "^4.16.3",
                "extract-text-webpack-plugin": "^3.0.2",
                "file-loader": "^1.1.11",
                "friendly-errors-webpack-plugin": "^1.7.0",
                glob: "^7.1.2",
                "html-webpack-plugin": "^3.2.0",
                "http-proxy-middleware": "^0.18.0",
                "mpvue-loader": "1.0.13",
                "mpvue-template-compiler": "1.0.18",
                "mpvue-webpack-target": "^1.0.0",
                "optimize-css-assets-webpack-plugin": "^3.2.0",
                ora: "^2.0.0",
                portfinder: "^1.0.13",
                "postcss-loader": "^2.1.4",
                "postcss-mpvue-wxss": "^1.0.0",
                prettier: "~1.12.1",
                "px2rpx-loader": "^0.1.10",
                rimraf: "^2.6.0",
                semver: "^5.3.0",
                shelljs: "^0.8.1",
                "uglifyjs-webpack-plugin": "^1.2.5",
                "url-loader": "^1.0.1",
                "vue-style-loader": "^4.1.0",
                "vuex-persist": "^1.2.2",
                webpack: "^3.11.0",
                "webpack-bundle-analyzer": "^2.2.1",
                "webpack-dev-middleware-hard-disk": "^1.12.0",
                "webpack-merge": "^4.1.0",
                "webpack-mpvue-asset-plugin": "^0.0.2"
            },
            engines: {
                node: ">= 4.0.0",
                npm: ">= 3.0.0"
            },
            browserslist: [ "> 1%", "last 2 versions", "not ie <= 8" ],
            config: {
                commitizen: {
                    path: "./node_modules/cz-conventional-changelog"
                }
            }
        };
    },
    GG4c: function(e, t, n) {
        var a = n("sG0b"), i = n("b92S"), o = n("tOtd"), s = n("7YgM");
        t.a = {
            data: function() {
                return {
                    env: !1,
                    disabled: !0,
                    userName: "",
                    verifyCode: "",
                    countdownFlag: !1,
                    countdownVal: "获取验证码",
                    timerFn: null,
                    smsCode: "",
                    token: "",
                    miniVer: s.version,
                    canIUse: wx.canIUse("button.open-type.getUserInfo")
                };
            },
            components: {
                EnvConfig: a.a
            },
            onLoad: function(e) {
                wx.setNavigationBarTitle({
                    title: "登录"
                }), this.userName = "", this.verifyCode = "", wx.getStorage({
                    key: "WECHAT_AUTH_TOKEN",
                    success: function(e) {
                        e.data && wx.switchTab({
                            url: "../home/main"
                        });
                    }
                });
            },
            methods: {
                check: function() {
                    var e = this.userName, t = this.verifyCode;
                    this.disabled = "" === e || "" === t;
                },
                onChangeName: function() {
                    this.check();
                },
                loginFn: function() {
                    var e = this;
                    this.disabled = !0;
                    var t = {
                        mobile: this.userName,
                        verifyCode: this.verifyCode,
                        smsDownCacheCode: this.smsCode
                    };
                    i.g.loginRequest(t).then(function(t) {
                        var n = JSON.parse(t.desData);
                        if (setTimeout(function() {
                            e.disabled = !1;
                        }, 500), 1 != t.succ) return console.log("jinlaile111"), e.toClearInterval(), void wx.showToast({
                            title: t.message,
                            icon: "none",
                            duration: 2e3
                        });
                        wx.showToast({
                            title: "成功",
                            icon: "success",
                            duration: 2e3
                        }), e.toClearInterval(), wx.setStorage({
                            key: "WECHAT_AUTH_TOKEN",
                            data: n.view.loginToken
                        }), wx.setStorage({
                            key: "WECHAT_AUTH_USERID",
                            data: n.view.userId
                        }), e.token = n.view.loginToken, wx.switchTab({
                            url: "../home/main"
                        });
                    }).catch(function(t) {
                        e.disabled = !1;
                    });
                },
                toClearInterval: function() {
                    this.countdownFlag = !1, clearInterval(this.timerFn), this.timerFn = null, this.countdownVal = "获取验证码";
                },
                countdownFn: function(e) {
                    var t = this;
                    o.a.mobile(this.userName) ? i.g.messageSend({
                        mobile: this.userName
                    }).then(function(e) {
                        var n = JSON.parse(e.desData);
                        if (t.smsCode = n.smsDownCacheCode, e.succ) {
                            var a = 60, i = t;
                            i.timerFn || (i.countdownFlag = !0, i.countdownVal = a + "s", i.timerFn = setInterval(function() {
                                a > 0 && a <= 60 ? (a--, i.countdownVal = a + "s") : (i.countdownFlag = !1, clearInterval(i.timerFn), 
                                i.timerFn = null, i.countdownVal = "获取验证码");
                            }, 1e3));
                        }
                    }).catch(function(e) {}) : wx.showToast({
                        title: "请输入正确格式的手机号码",
                        icon: "none",
                        duration: 2e3,
                        mask: !0
                    });
                }
            }
        };
    },
    RmID: function(e, t) {},
    S9PX: function(e, t, n) {
        var a = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "login-page"
                }, [ n("div", {
                    staticClass: "logo-item"
                }, [ n("div", {
                    staticClass: "logo-img"
                }), e._v(" "), n("p", [ e._v("移动办单工具") ]) ], 1), e._v(" "), n("div", {
                    staticClass: "section"
                }, [ n("div", {
                    staticClass: "input-group"
                }, [ n("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: e.userName,
                        expression: "userName"
                    } ],
                    attrs: {
                        type: "tel",
                        maxlength: "11",
                        placeholder: "请输入手机号",
                        eventid: "0"
                    },
                    domProps: {
                        value: e.userName
                    },
                    on: {
                        input: [ function(t) {
                            t.target.composing || (e.userName = t.target.value);
                        }, e.onChangeName ]
                    }
                }) ]), e._v(" "), n("div", {
                    staticClass: "input-group"
                }, [ n("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: e.verifyCode,
                        expression: "verifyCode"
                    } ],
                    staticClass: "smsCode",
                    attrs: {
                        type: "text",
                        placeholder: "请输入验证码",
                        eventid: "1"
                    },
                    domProps: {
                        value: e.verifyCode
                    },
                    on: {
                        input: [ function(t) {
                            t.target.composing || (e.verifyCode = t.target.value);
                        }, e.onChangeName ]
                    }
                }), e._v(" "), n("button", {
                    staticClass: "code-btn",
                    attrs: {
                        disabled: e.countdownFlag,
                        eventid: "2"
                    },
                    on: {
                        click: e.countdownFn
                    }
                }, [ e._v(e._s(e.countdownVal)) ]) ], 1), e._v(" "), n("div", {
                    staticClass: "btn-area"
                }, [ n("button", {
                    attrs: {
                        type: "primary",
                        size: "primarySize",
                        disabled: e.disabled,
                        eventid: "3"
                    },
                    on: {
                        click: e.loginFn
                    }
                }, [ e._v("登录") ]) ], 1), e._v(" "), n("p", {
                    staticClass: "versionOn"
                }, [ e._v("当前版本:" + e._s(e.miniVer)) ]), e._v(" "), e.env ? n("EnvConfig", {
                    attrs: {
                        mpcomid: "0"
                    }
                }) : e._e() ], 1) ]);
            },
            staticRenderFns: []
        };
        t.a = a;
    },
    jT7l: function(e, t, n) {
        var a = n("GG4c"), i = n("S9PX"), o = n("ybqe")(a.a, i.a, function(e) {
            n("RmID");
        }, null, null);
        t.a = o.exports;
    },
    uvAE: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("5nAL"), i = n.n(a), o = n("jT7l");
        new i.a(o.a).$mount();
    }
}, [ "uvAE" ]);