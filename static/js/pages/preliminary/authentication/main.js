global.webpackJsonp([ 17 ], {
    "8ADJ": function(t, a) {},
    E8nW: function(t, a, e) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var s = e("5nAL"), i = e.n(s), r = e("H8sY");
        new i.a(r.a).$mount();
    },
    H8sY: function(t, a, e) {
        var s = e("Jlhd"), i = e("bltY"), r = e("ybqe")(s.a, i.a, function(t) {
            e("8ADJ");
        }, "data-v-2b3b50b6", null);
        a.a = r.exports;
    },
    Jlhd: function(t, a, e) {
        var s = e("woOf"), i = e.n(s), r = e("E8ny"), o = (e("IcnI"), e("b92S")), n = e("tOtd");
        a.a = {
            data: function() {
                return {
                    showBottomPopup: !1,
                    frontUrl: "",
                    reverseUrl: "",
                    frontUrlShow: "/static/images/preliminary/before.png",
                    reverseUrlShow: "/static/images/preliminary/after.png",
                    cardInfo: {
                        realName: "",
                        idCardNumber: "",
                        validDate: ""
                    }
                };
            },
            onUnload: function() {
                i()(this.$data, this.$options.data());
            },
            mounted: function() {
                wx.setNavigationBarTitle({
                    title: "实名认证"
                });
            },
            methods: {
                getPhoto: function(t) {
                    var a = this;
                    wx.chooseImage({
                        count: 1,
                        sizeType: [ "original", "compressed" ],
                        sourceType: [ "album", "camera" ],
                        success: function(e) {
                            wx.getImageInfo({
                                src: e.tempFilePaths[0],
                                success: function(e) {
                                    console.log(e), a.upload(e, t);
                                }
                            });
                        }
                    });
                },
                upload: function(t, a) {
                    var e = this, s = r.a.prod;
                    wx.uploadFile({
                        url: s + "/picUpload.do",
                        filePath: t.path,
                        name: "image",
                        header: {
                            "Content-Type": "multipart/form-data"
                        },
                        success: function(s) {
                            if (200 == s.statusCode) {
                                var i = JSON.parse(s.data);
                                i.succ ? ("front" == a ? e.frontUrlShow = t.path : e.reverseUrlShow = t.path, "front" == a ? e.frontUrl = i.filePath : e.reverseUrl = i.filePath, 
                                wx.showToast({
                                    title: "上传成功",
                                    duration: 3e3
                                })) : wx.showToast({
                                    title: i.message,
                                    icon: "none",
                                    duration: 3e3
                                });
                            } else wx.showToast({
                                title: "上传失败",
                                icon: "none",
                                duration: 3e3
                            });
                        }
                    });
                },
                goOn: function(t) {
                    var a = this, e = this;
                    "" != this.cardInfo.realName ? n.a.idCard(this.cardInfo.idCardNumber) ? "" != this.cardInfo.validDate ? wx.getStorage({
                        key: "USER_INFO",
                        success: function(s) {
                            s.data && wx.getStorage({
                                key: "MOBILE",
                                success: function(i) {
                                    o.j.authIdCard({
                                        ignorePhoneAuth: t,
                                        phone: i.data,
                                        userId: JSON.parse(s.data).userId,
                                        realName: a.cardInfo.realName,
                                        race: a.cardInfo.race,
                                        address: a.cardInfo.address,
                                        idCardNumber: a.cardInfo.idCardNumber,
                                        birthday: a.cardInfo.birthday,
                                        validDate: a.cardInfo.validDate,
                                        frontImgPath: a.frontUrl,
                                        reverseImgPath: a.reverseUrl,
                                        bdUserId: a.$root.$mp.query.bdUserId,
                                        partnerNo: a.$root.$mp.query.partnerNo
                                    }).then(function(t) {
                                        if (t.succ) {
                                            var s = JSON.parse(t.desData);
                                            s.authResult.authState ? (wx.setStorage({
                                                key: "CONMON_DATA",
                                                data: {
                                                    mobile: i.data,
                                                    cardInfo: {
                                                        realName: a.cardInfo.realName,
                                                        idCardNumber: a.cardInfo.idCardNumber
                                                    }
                                                }
                                            }), wx.navigateTo({
                                                url: "/pages/preliminary/result/main?bdUserId=" + e.$root.$mp.query.bdUserId + "&partnerNo=" + e.$root.$mp.query.partnerNo
                                            })) : 3 == s.authResult.errorType ? wx.showModal({
                                                title: "温馨提示",
                                                content: t.message || s.authResult.message || "实名认证失败",
                                                showCancel: !0,
                                                confirmText: "忽略",
                                                cancelText: "再试试",
                                                cancelColor: "#FFC800",
                                                confirmColor: "#FFC800",
                                                success: function(t) {
                                                    t.confirm && e.goOn(!0);
                                                }
                                            }) : wx.showModal({
                                                title: "温馨提示",
                                                content: t.message || s.authResult.message || "实名认证失败",
                                                showCancel: !1,
                                                confirmText: "再试试",
                                                confirmColor: "#FFC800"
                                            });
                                        } else wx.showToast({
                                            title: t.message || "实名认证失败",
                                            icon: "none",
                                            duration: 3e3
                                        });
                                    }).catch(function(t) {});
                                }
                            });
                        },
                        fail: function() {
                            wx.showToast({
                                title: "重新登录",
                                icon: "none",
                                duration: 3e3
                            });
                        }
                    }) : wx.showToast({
                        title: "身份证有效期不能为空",
                        icon: "none",
                        duration: 2e3
                    }) : wx.showToast({
                        title: "身份证号码不正确",
                        icon: "none",
                        duration: 2e3
                    }) : wx.showToast({
                        title: "姓名不能为空",
                        icon: "none",
                        duration: 2e3
                    });
                },
                sureCardInfo: function() {
                    var t = this;
                    "" != this.frontUrl ? "" != this.reverseUrl ? o.j.idCardOcr({
                        frontImgPath: this.frontUrl,
                        reverseImgPath: this.reverseUrl,
                        bdUserId: this.$root.$mp.query.bdUserId,
                        partnerNo: this.$root.$mp.query.partnerNo
                    }).then(function(a) {
                        if (console.log(a), a.succ) {
                            var e = JSON.parse(a.desData);
                            if (!e.cardInfo.realName) return void wx.showToast({
                                title: "身份证正面有误",
                                icon: "none",
                                duration: 2e3
                            });
                            if (!e.cardInfo.validDate) return void wx.showToast({
                                title: "身份证反面有误",
                                icon: "none",
                                duration: 2e3
                            });
                            t.cardInfo = e.cardInfo, t.showBottomPopup = !t.showBottomPopup;
                        }
                    }).catch(function(t) {}) : wx.showToast({
                        title: "请先上传身份证反面",
                        icon: "none",
                        duration: 2e3
                    }) : wx.showToast({
                        title: "请先上传身份证正面",
                        icon: "none",
                        duration: 2e3
                    });
                }
            }
        };
    },
    bltY: function(t, a, e) {
        var s = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "container"
                }, [ e("div", {
                    staticClass: "headerClass"
                }, [ t._v("请检查您的身份证信息") ]), t._v(" "), e("div", {
                    staticClass: "uploadList"
                }, [ e("div", {
                    staticClass: "uploadListItem before",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(a) {
                            t.getPhoto("front");
                        }
                    }
                }, [ e("image", {
                    attrs: {
                        src: t.frontUrlShow
                    }
                }), t._v(" "), t._m(0) ]), t._v(" "), e("div", {
                    staticClass: "uploadListItem after",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(a) {
                            t.getPhoto("reverse");
                        }
                    }
                }, [ e("image", {
                    attrs: {
                        src: t.reverseUrlShow
                    }
                }), t._v(" "), t._m(1) ]), t._v(" "), t._m(2) ]), t._v(" "), t._m(3), t._v(" "), e("div", {
                    staticClass: "bottomBtn"
                }, [ e("button", {
                    staticClass: "publicBtn baseInfo",
                    attrs: {
                        type: "default",
                        eventid: "2"
                    },
                    on: {
                        click: t.sureCardInfo
                    }
                }, [ t._v("确认") ]) ], 1), t._v(" "), e("div", {
                    class: {
                        "pupopBottomShow pupopBottom": t.showBottomPopup,
                        pupopBottom: !t.showBottomPopup
                    }
                }, [ e("div", {
                    staticClass: "pupopBottom__mask",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(a) {
                            t.showBottomPopup = !1;
                        }
                    }
                }), t._v(" "), e("div", {
                    staticClass: "pupopBottom__container"
                }, [ e("div", {
                    staticClass: "pupop_b"
                }, [ e("div", {
                    staticClass: "pupopHeader"
                }, [ e("text", [ t._v("信息确认") ]), t._v(" "), e("image", {
                    attrs: {
                        src: "/static/images/preliminary/close.png",
                        eventid: "4"
                    },
                    on: {
                        click: function(a) {
                            t.showBottomPopup = !1;
                        }
                    }
                }) ]), t._v(" "), e("div", {
                    staticClass: "pupopCellBox"
                }, [ e("div", {
                    staticClass: "pupopCell"
                }, [ e("div", {
                    staticClass: "lableName"
                }, [ t._v("\n                            姓名\n                        ") ]), t._v(" "), e("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.cardInfo.realName,
                        expression: "cardInfo.realName"
                    } ],
                    staticClass: "lableInfo",
                    attrs: {
                        "placeholder-style": "color:#cacaca;",
                        placeholder: "请输入姓名",
                        type: "text",
                        eventid: "5"
                    },
                    domProps: {
                        value: t.cardInfo.realName
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (t.cardInfo.realName = a.target.value);
                        }
                    }
                }) ]), t._v(" "), e("div", {
                    staticClass: "pupopCell"
                }, [ e("div", {
                    staticClass: "lableName"
                }, [ t._v("\n                            身份证号\n                        ") ]), t._v(" "), e("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.cardInfo.idCardNumber,
                        expression: "cardInfo.idCardNumber"
                    } ],
                    staticClass: "lableInfo",
                    attrs: {
                        "placeholder-style": "color:#cacaca;",
                        placeholder: "请输入身份证号码",
                        type: "text",
                        eventid: "6"
                    },
                    domProps: {
                        value: t.cardInfo.idCardNumber
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (t.cardInfo.idCardNumber = a.target.value);
                        }
                    }
                }) ]), t._v(" "), e("div", {
                    staticClass: "pupopCell"
                }, [ e("div", {
                    staticClass: "lableName"
                }, [ t._v("\n                            身份证有效期\n                        ") ]), t._v(" "), e("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.cardInfo.validDate,
                        expression: "cardInfo.validDate"
                    } ],
                    staticClass: "lableInfo",
                    attrs: {
                        "placeholder-style": "color:#cacaca;",
                        placeholder: "请输入身份证有效期",
                        type: "text",
                        eventid: "7"
                    },
                    domProps: {
                        value: t.cardInfo.validDate
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (t.cardInfo.validDate = a.target.value);
                        }
                    }
                }) ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "idCard"
                }, [ e("div", {
                    staticClass: "idCardBox"
                }, [ e("image", {
                    staticClass: "real",
                    attrs: {
                        src: t.frontUrlShow
                    }
                }), t._v(" "), e("image", {
                    staticClass: "hodle",
                    attrs: {
                        src: "/static/images/preliminary/watermark.png"
                    }
                }) ]), t._v(" "), e("div", {
                    staticClass: "idCardBox"
                }, [ e("image", {
                    staticClass: "real",
                    attrs: {
                        src: t.reverseUrlShow
                    }
                }), t._v(" "), e("image", {
                    staticClass: "hodle",
                    attrs: {
                        src: "/static/images/preliminary/watermark.png"
                    }
                }) ]) ]), t._v(" "), e("div", {
                    staticClass: "bottomBtn"
                }, [ e("button", {
                    staticClass: "publicBtn baseInfo",
                    attrs: {
                        type: "default",
                        eventid: "8"
                    },
                    on: {
                        click: function(a) {
                            t.goOn(!1);
                        }
                    }
                }, [ t._v("我已确认信息无误") ]) ], 1) ]) ]) ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "actionBtn"
                }, [ a("image", {
                    attrs: {
                        src: "/static/images/preliminary/takephoto.png"
                    }
                }), this._v(" "), a("div", {
                    staticClass: "dscInfo"
                }, [ this._v("点击上传正面") ]) ]);
            }, function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "actionBtn"
                }, [ a("image", {
                    attrs: {
                        src: "/static/images/preliminary/takephoto.png"
                    }
                }), this._v(" "), a("div", {
                    staticClass: "dscInfo"
                }, [ this._v("点击上传反面") ]) ]);
            }, function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "line"
                }, [ a("text", {
                    staticClass: "lineText"
                }, [ this._v("拍摄照片要求") ]) ]);
            }, function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "tipList"
                }, [ e("div", {
                    staticClass: "tip"
                }, [ e("image", {
                    staticClass: "picTip",
                    attrs: {
                        src: "/static/images/preliminary/ind_4.png"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "tipInfo"
                }, [ e("image", {
                    staticClass: "right",
                    attrs: {
                        src: "/static/images/preliminary/right.png"
                    }
                }), t._v(" "), e("text", [ t._v("标准拍摄") ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "tip"
                }, [ e("image", {
                    staticClass: "picTip",
                    attrs: {
                        src: "/static/images/preliminary/ind_1.png"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "tipInfo"
                }, [ e("image", {
                    attrs: {
                        src: "/static/images/preliminary/fail.png"
                    }
                }), t._v(" "), e("text", [ t._v("边框缺失") ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "tip"
                }, [ e("image", {
                    staticClass: "picTip",
                    attrs: {
                        src: "/static/images/preliminary/ind_3.png"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "tipInfo"
                }, [ e("image", {
                    attrs: {
                        src: "/static/images/preliminary/fail.png"
                    }
                }), t._v(" "), e("text", [ t._v("照片模糊") ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "tip"
                }, [ e("image", {
                    staticClass: "picTip",
                    attrs: {
                        src: "/static/images/preliminary/ind_2.png"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "tipInfo"
                }, [ e("image", {
                    attrs: {
                        src: "/static/images/preliminary/fail.png"
                    }
                }), t._v(" "), e("text", [ t._v("闪光强烈") ]) ]) ]) ]);
            } ]
        };
        a.a = s;
    }
}, [ "E8nW" ]);