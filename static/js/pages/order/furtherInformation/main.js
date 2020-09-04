global.webpackJsonp([ 21 ], {
    "7uxb": function(t, n) {},
    a7Yh: function(t, n, a) {
        var e = a("mvHQ"), o = a.n(e), i = a("//Fk"), s = a.n(i), l = a("Gu7T"), c = a.n(l), u = a("woOf"), r = a.n(u), p = a("E8ny"), h = (a("IcnI"), 
        a("b92S"));
        n.a = {
            name: "information",
            data: function() {
                return {
                    clientNo: "",
                    loanNo: "",
                    attachmentType: "",
                    attachmentName: "",
                    loanAttachment: [],
                    uploadImgList: [],
                    uploadList: [],
                    showBottomPopup: !1,
                    deleteSrc: "/static/images/delete_img.png",
                    holedImg: "/static/images/imgHoled.png",
                    btnFlag: !1
                };
            },
            onShow: function() {
                wx.setNavigationBarTitle({
                    title: "补充资料"
                });
            },
            onLoad: function(t) {
                this.clientNo = t.clientNo, this.loanNo = t.loanNo, this.init(t.loanNo);
            },
            onUnload: function() {
                r()(this.$data, this.$options.data());
            },
            mounted: function() {},
            methods: {
                init: function(t) {
                    var n = this;
                    h.h.fileList({
                        loanNo: t
                    }).then(function(t) {
                        var a = JSON.parse(t.desData);
                        t.succ ? (n.loanAttachment = a.loanAttachment, console.log(a.loanAttachment)) : n.alertContent(t.message ? t.message : "数据异常");
                    }).catch(function(t) {
                        n.alertContent("网络出了个小差");
                    });
                },
                handleRemove: function(t, n) {
                    var a = this;
                    console.log(t), t.attachmentType ? h.h.loantradeAttachDelete({
                        clientNo: this.clientNo,
                        loanNo: this.loanNo,
                        attachmentType: t.attachmentType,
                        attachmentUris: [ t.imgPath ]
                    }).then(function(t) {
                        t.succ && (a.uploadImgList.splice(n, 1), a.init(a.loanNo), a.alertContent("图片删除成功"));
                    }).catch(function(t) {
                        a.alertContent("网络出了个小差");
                    }) : this.uploadImgList.splice(n, 1);
                },
                alertContent: function(t) {
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                },
                showPop: function(t) {
                    console.log(t), this.attachmentType = t.type, this.attachmentName = t.typeName, 
                    this.showBottomPopup = !0, this.uploadImgList = t.urlList.map(function(n) {
                        return {
                            url: n.fullUrl,
                            imgPath: n.imgPath,
                            origin: "server",
                            attachmentType: t.type
                        };
                    }), this.uploadList.length = 0;
                },
                showPopNone: function(t) {
                    this.attachmentType = t.type, this.attachmentName = t.typeName, this.uploadImgList = [], 
                    this.uploadList.length = 0, this.btnFlag = !1, this.choseImg();
                },
                choseImg: function() {
                    var t = this;
                    wx.chooseImage({
                        sizeType: [ "original", "compressed" ],
                        sourceType: [ "album", "camera" ],
                        success: function(n) {
                            t.showBottomPopup = !0;
                            var a = n.tempFilePaths.map(function(t) {
                                return {
                                    url: t,
                                    origin: "device"
                                };
                            });
                            t.uploadImgList = [].concat(c()(t.uploadImgList), c()(a)), t.uploadImgList.length > 20 && (t.alertContent("最多只能上传20张,超出出的图片不会上传"), 
                            t.uploadImgList = t.uploadImgList.slice(0, 20));
                        }
                    });
                },
                upLoadimgMore: function(t, n) {
                    var a = this, e = p.a.prod;
                    return new s.a(function(i, s) {
                        var l = "";
                        wx.uploadFile({
                            url: e + "/picUpload.do",
                            filePath: t,
                            name: "file",
                            formData: null,
                            success: function(t) {
                                if (200 == t.statusCode) {
                                    var e = JSON.parse(t.data);
                                    console.log(e), e.succ ? i({
                                        filePath: e.filePath,
                                        previewUrl: e.previewUrl,
                                        percent: l
                                    }) : s();
                                } else s(), a.alertContent("图片" + n + "上传失败");
                            },
                            fail: function(t) {
                                s(), a.alertContent(o()(t));
                            }
                        }).onProgressUpdate(function(t) {
                            l = t.progress;
                        });
                    });
                },
                postImg: function() {
                    var t = this;
                    if (!this.btnFlag) {
                        this.btnFlag = !0;
                        try {
                            var n = this.uploadImgList.filter(function(t) {
                                return "device" == t.origin;
                            });
                            if (0 == n.length) return this.btnFlag = !1, void this.alertContent("您没有新添加的图片哦~");
                            if (0 == this.uploadImgList.length) return this.btnFlag = !1, void this.alertContent("请添加图片");
                            console.log(n, "fliterWhich");
                            for (var a = [], e = 0; e < n.length; e++) a.push(this.upLoadimgMore(n[e].url, e));
                            s.a.all(a).then(function(n) {
                                t.btnFlag = !1, t.uploadList = n, t.uploadImgList.length = 0;
                            }).then(function() {
                                h.h.saveFile({
                                    loanNo: t.loanNo,
                                    clientNo: t.clientNo,
                                    attachmentType: t.attachmentType,
                                    attachmentUris: t.uploadList.map(function(t) {
                                        return t.filePath;
                                    })
                                }).then(function(n) {
                                    t.btnFlag = !1, JSON.parse(n.desData), n.succ ? (t.showBottomPopup = !1, t.alertContent("保存成功"), 
                                    t.init(t.loanNo), t.uploadList.length = 0) : t.alertContent(n.message ? n.message : "数据异常");
                                }).catch(function(n) {
                                    t.btnFlag = !1, t.alertContent("网络出了个小差");
                                });
                            }).catch(function(n) {
                                t.btnFlag = !1, t.alertContent(n);
                            });
                        } catch (t) {
                            this.alertContent(o()(t));
                        }
                    }
                }
            }
        };
    },
    aGhx: function(t, n, a) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var e = a("5nAL"), o = a.n(e), i = a("qT1y");
        new o.a(i.a).$mount();
    },
    h8Ra: function(t, n, a) {
        var e = {
            render: function() {
                var t = this, n = t.$createElement, a = t._self._c || n;
                return a("div", {
                    staticClass: "information"
                }, [ a("ul", {
                    staticClass: "img_list"
                }, t._l(t.loanAttachment, function(n, e) {
                    return a("li", {
                        key: e
                    }, [ a("div", {
                        staticClass: "img_box"
                    }, [ a("image", {
                        attrs: {
                            mode: "widthFix",
                            src: n.urlList[0] ? n.urlList[0].fullUrl : t.holedImg,
                            width: "100%"
                        }
                    }) ]), t._v(" "), n.urlList && 0 == n.urlList.length ? a("div", {
                        staticClass: "up_class",
                        attrs: {
                            eventid: "1-" + e
                        },
                        on: {
                            click: function(a) {
                                t.showPopNone(n);
                            }
                        }
                    }) : a("div", {
                        staticClass: "up_class",
                        attrs: {
                            eventid: "0-" + e
                        },
                        on: {
                            click: function(a) {
                                t.showPop(n);
                            }
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "img_info"
                    }, [ a("p", {
                        staticClass: "img_title"
                    }, [ t._v(t._s(n.typeName)) ]), t._v(" "), a("p", [ a("span", [ t._v(t._s(n.urlCount)) ]), t._v(" "), n.urlList && n.urlList.length > 0 ? a("span", [ t._v("编辑") ]) : t._e() ]) ], 1) ]);
                })), t._v(" "), a("div", {
                    class: {
                        "pupopBottomShow pupopBottom": t.showBottomPopup,
                        pupopBottom: !t.showBottomPopup
                    }
                }, [ a("div", {
                    staticClass: "pupopBottom__mask",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(n) {
                            t.showBottomPopup = !1;
                        }
                    }
                }), t._v(" "), a("div", {
                    staticClass: "pupopBottom__container"
                }, [ a("div", {
                    staticClass: "pupop_b"
                }, [ a("div", {
                    staticClass: "pupopHeader"
                }, [ a("text", [ t._v(t._s(t.attachmentName)) ]), t._v(" "), a("image", {
                    attrs: {
                        src: "/static/images/preliminary/close.png",
                        eventid: "3"
                    },
                    on: {
                        click: function(n) {
                            t.showBottomPopup = !1;
                        }
                    }
                }) ]) ]), t._v(" "), a("div", {
                    staticClass: "listBox"
                }, [ a("ul", {
                    staticClass: "up_img_list"
                }, [ t._l(t.uploadImgList, function(n, e) {
                    return a("li", {
                        key: e,
                        staticClass: "previewList"
                    }, [ a("image", {
                        attrs: {
                            mode: "aspectFit",
                            src: n.url
                        }
                    }), t._v(" "), a("image", {
                        staticClass: "deleteImg",
                        attrs: {
                            src: t.deleteSrc,
                            eventid: "4-" + e
                        },
                        on: {
                            click: function(a) {
                                t.handleRemove(n, e);
                            }
                        }
                    }), t._v(" "), a("p", {
                        style: {
                            width: t.uploadList[e] && t.uploadList[e].percent + "%"
                        }
                    }) ], 1);
                }), t._v(" "), t.uploadImgList.length < 20 ? a("li", {
                    staticClass: "add_pic",
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        click: t.choseImg
                    }
                }, [ a("image", {
                    attrs: {
                        mode: "aspectFit",
                        src: "/static/images/uploadImg.png"
                    }
                }) ]) : t._e() ], 2), t._v(" "), a("div", [ a("div", {
                    staticClass: "upBtn",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: t.postImg
                    }
                }, [ t._v("上传") ]) ]) ], 1) ]) ]) ], 1);
            },
            staticRenderFns: []
        };
        n.a = e;
    },
    qT1y: function(t, n, a) {
        var e = a("a7Yh"), o = a("h8Ra"), i = a("ybqe")(e.a, o.a, function(t) {
            a("7uxb");
        }, "data-v-20f4f28e", null);
        n.a = i.exports;
    }
}, [ "aGhx" ]);