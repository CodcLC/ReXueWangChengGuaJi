var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.BytedanceManager = void 0;
var a = t("TimeUtils"),
i = t("CacheUtils"),
r = function() {
    function t() {
        var t = this;
        this.videoAd = null,
        this.BannerAd = null,
        this.InterstitialAd = null,
        this.BannerAdHight = 0,
        this.BannerAdWight = 0,
        this.showInsertTime = 0,
        this.isLogin = !1,
        this.videpPath = null,
        this.preTime = -1,
        this.numVideo = 1,
        this.errorFun = function(e, o) {
            o && o.length > 0 ? t.errorCb && t.errorCb(o) : t.errorCb && t.errorCb("暂无广告")
        },
        this.closefunc = function(e) {
            if (e && e.isEnded) {
                var o = !0,
                a = new Date().getTime(); - 1 == t.preTime ? o = !0 : a - t.preTime < 1e4 && (o = !1),
                t.preTime = a,
                o ? t.successCb && (t.successCb(), i.CacheUtils.getData("game_addiction") || 2 != t.numVideo || (t.incidentReturn("game_addiction"), i.CacheUtils.saveData("game_addiction", "true")), t.numVideo++, t.incidentReturn("active_pay")) : t.errorCb && t.errorCb()
            } else t.errorCb && t.errorCb();
            t.videoAd.load()
        },
        this.isLoginByte = !1,
        this.loginState = !1
    }
    return t.prototype.showBlockAd = function() {},
    t.prototype.hideBlockAd = function() {},
    t.prototype.showWxNativeAD = function() {},
    t.prototype.hideWxNativeAD = function() {},
    t.prototype.incidentReturn = function(t) {
        var e, o = this.launchOpt.ad_params; (e = o && o.length > 0 ? JSON.parse(o).clickid: this.launchOpt.query.clickid) && tt.request({
            url: "https://analytics.oceanengine.com/api/v2/conversion",
            data: {
                event_type: t,
                context: {
                    ad: {
                        callback: e
                    }
                },
                timestamp: Date.now()
            },
            header: {
                "content-type": "application/json"
            },
            method: "POST",
            dataType: "JSON",
            responseType: "text",
            success: function(t) {
                console.log("调用成功", t.data)
            },
            fail: function(t) {
                console.log("调用失败", t.errMsg)
            }
        })
    },
    t.prototype.initSdk = function() {
        var t = this;
        tt.login({
            force: !1,
            success: function(e) {
                t.isLogin = e.isLogin,
                console.log("login 调用成功" + e.code + " " + e.anonymousCode)
            },
            fail: function() {
                t.isLogin = !1,
                console.log("login 调用失败")
            }
        }),
        this.systemInfo = tt.getSystemInfoSync(),
        this.launchOpt = tt.getLaunchOptionsSync(),
        i.CacheUtils.getData("activeOnce") || (this.incidentReturn("active"), this.incidentReturn("active_register"), i.CacheUtils.saveData("activeOnce", "true")),
        this.initVieo()
    },
    t.prototype.initVieo = function() {
        var t = this,
        e = this.systemInfo.windowWidth,
        o = this.systemInfo.windowHeight;
        this.videoAd = tt.createRewardedVideoAd({
            adUnitId: "79ke0h1eaami21bhf7"
        }),
        this.videoAd && (this.videoAd.onClose(this.closefunc), this.videoAd.onError(this.errorFun), this.videoAd.load()),
        this.BannerAd = tt.createBannerAd({
            adUnitId: "20d28p599p4h51j3k4",
            style: {
                left: (e - 300) / 2,
                top: 0,
                adIntervals: 30,
                width: 300
            }
        }),
        this.BannerAd.onResize(function(a) {
            console.log(a.width, a.height),
            t.BannerAdHight = a.height,
            t.BannerAdWight = a.width,
            t.BannerAd.style.top = o - t.BannerAdHight,
            t.BannerAd.style.left = (e - t.BannerAdWight) / 2
        }),
        this.BannerAd.onError(function(t) {
            console.log(" banner 广告错误", t.errCode)
        })
    },
    t.prototype.shareVideo = function(t, e) {
        var o = this.videpPath,
        a = this;
        null != o && 0 != o.length && null != o ? tt.shareAppMessage({
            channel: "video",
            query: "",
            templateId: "81f5ada24aigo4hdcd",
            title: "开局一把刀",
            desc: "开局一把刀",
            extra: {
                videoPath: o,
                videoTopics: ["开局一把刀"],
                withVideoId: !0
            },
            success: function() {
                a.videpPath = null,
                tt.showToast({
                    title: "分享视频成功",
                    duration: 2e3,
                    success: function() {},
                    fail: function() {}
                }),
                e && e()
            },
            fail: function() {
                tt.showToast({
                    title: "分享视频失败",
                    duration: 2e3,
                    success: function() {},
                    fail: function() {}
                })
            }
        }) : tt.showToast({
            title: "还没有分享内容",
            duration: 2e3,
            success: function() {},
            fail: function() {}
        })
    },
    t.prototype.shareImg = function(t, e) {
        var o = Math.floor(3 * Math.random());
        tt.shareAppMessage({
            title: ["帮我看看哪个字错了？", "你是逃不过我的眼睛的！", "帮我看看哪一只不是企鹅"][o],
            desc: "",
            imageUrl: "https://game2.sfplay.net/werid_assets/wechat/shareIcon/" + ["1.jpeg", "2.jpeg", "3.jpeg"][o],
            query: "",
            success: function() {
                e && e(),
                console.log("分享成功")
            },
            fail: function() {
                console.log("分享失败")
            }
        })
    },
    t.prototype.checkShortcut = function(t, e) {
        tt.checkShortcut({
            success: function(t) {
                t.status.exist ? e && e(!0) : e && e(!1)
            },
            fail: function() {
                e && e(!0)
            }
        })
    },
    t.prototype.addShortcut = function(t, e) {
        tt.addShortcut({
            success: function() {
                e && e("桌面图标添加成功")
            },
            fail: function() {
                e && e("桌面图标添加失败")
            }
        })
    },
    t.prototype.hasVerify = function() {
        return ! 1
    },
    t.prototype.getUserInfo = function(t) {
        tt.login({
            force: !1,
            success: function() {
                console.log("登录成功"),
                tt.getUserInfo({
                    success: function(e) {
                        "getUserInfo:ok" == e.errMsg ? t(e.userInfo.nickName, e.userInfo.avatarUrl) : t(null, null)
                    },
                    fail: function() {
                        t(null, null)
                    }
                })
            }
        })
    },
    t.prototype.showGamePortalAd = function(t, e) {
        tt.onMoreGamesModalClose(function() {}),
        tt.onNavigateToMiniGameBox(function() {}),
        "ios" !== this.systemInfo.platform && tt.showMoreGamesModal ? tt.showMoreGamesModal({
            appLaunchOptions: [{
                appId: "ttd63da0804905658f02"
            },
            {
                appId: "tt3b934d2ea4ab8a8202"
            },
            {
                appId: "tta7dcd16138e7e202"
            },
            {
                appId: "tt9325e5980c1e8576"
            },
            {
                appId: "ttf1bf87026e84c9f9"
            },
            {
                appId: "tt93c9e5740cf268b9"
            },
            {
                appId: "ttf21484a96d2f6816"
            },
            {
                appId: "tt6a4c1cf1f5761949"
            },
            {
                appId: "tt0c7a7ac793413665"
            },
            {
                appId: "tt914ae7f70e72364302"
            }],
            success: function() {},
            fail: function() {
                e && e("error")
            }
        }) : e && e(null)
    },
    t.prototype.canShare = function() {
        return ! 0
    },
    t.prototype.pauseRecord = function() {
        tt.getGameRecorderManager().pause()
    },
    t.prototype.resumeRecord = function() {
        tt.getGameRecorderManager().resume()
    },
    t.prototype.youmengTrack = function(t, e, o) {
        tt.uma && (e && o ? "userA" == e ? tt.uma.trackEvent(t, {
            userA: o
        }) : "userB" == e ? tt.uma.trackEvent(t, {
            userB: o
        }) : "userD" == e ? tt.uma.trackEvent(t, {
            userD: o
        }) : tt.uma.trackEvent(t, {
            userC: o
        }) : tt.uma.trackEvent(t))
    },
    t.prototype.recordVideo = function() {
        var t = tt.getGameRecorderManager();
        t && (this.videpPath = null, t.onStart(function() {
            console.log("录屏开始")
        }), t.start({
            duration: 300,
            isMarkOpen: !1
        }))
    },
    t.prototype.showVideoAd = function(t, e, o) {
        var a = this;
        if (this.successCb = e, this.errorCb = o, !this.videoAd) return this.initVieo(),
        void this.errorCb("暂无广告");
        this.videoAd.show().then(function() {}).
        catch(function(t) {
            console.log("广告组件出现问题", t),
            a.videoAd.load().then(function() {
                return console.log("手动加载成功"),
                a.videoAd.show()
            })
        })
    },
    t.prototype.setLanguage = function() {
        return ""
    },
    t.prototype.stopRecorderManager = function(t, e) {
        var o = this,
        a = tt.getGameRecorderManager();
        a.onStop(function(t) {
            o.videpPath = t.videoPath,
            e && e(t.videoPath)
        }),
        a.stop()
    },
    t.prototype.getAppName = function() {
        return this.systemInfo.appName
    },
    t.prototype.login = function(t, e) {
        if (this.isLoginByte) e(this.loginState);
        else {
            var o = this;
            tt.login({
                force: !1,
                success: function(t) {
                    o.isLoginByte = !0,
                    o.loginState = t.isLogin,
                    e(t.isLogin)
                }
            })
        }
    },
    t.prototype.pay = function() {},
    t.prototype.showBanner = function() {
        null != this.BannerAd && "XiGua" !== this.systemInfo.appName && this.BannerAd.show()
    },
    t.prototype.hideBanner = function() {
        null == this.BannerAd && "XiGua" !== this.systemInfo.appName || this.BannerAd.hide()
    },
    t.prototype.showInsertAd = function(t, e) {
        var o = this;
        if (a.TimeUtils.GetTimeBySecond() - this.showInsertTime >= 31) {
            var i = this.systemInfo.appName;
            "Toutiao" != i && "Douyin" != i || (this.InterstitialAd && (this.InterstitialAd.destroy(), this.InterstitialAd = null), this.InterstitialAd = tt.createInterstitialAd({
                adUnitId: "b5b23i03ha9k1ij807"
            }), this.InterstitialAd.load().then(function() {
                o.InterstitialAd.show().then(function() {
                    o.showInsertTime = a.TimeUtils.GetTimeBySecond(),
                    e && e()
                }).
                catch(function() {
                    e && e()
                })
            }).
            catch(function() {
                e && e()
            }))
        }
    },
    t.prototype.canCare = function() {
        return "Douyin" == this.systemInfo.appName
    },
    t.prototype.otherFun = function(t, e) {
        "Douyin" == this.systemInfo.appName ? tt.login({
            force: !1,
            success: function(t) {
                console.log("登录成功"),
                t.isLogin ? tt.openAwemeUserProfile ? (tt.openAwemeUserProfile(), setTimeout(function() {
                    e && e()
                },
                3500)) : tt.showToast({
                    title: "暂不支持该功能",
                    duration: 2e3,
                    success: function() {},
                    fail: function() {}
                }) : tt.showToast({
                    title: "请先登录",
                    duration: 2e3,
                    success: function() {},
                    fail: function() {}
                })
            }
        }) : tt.showToast({
            title: "暂不支持该功能",
            duration: 2e3,
            success: function() {},
            fail: function() {}
        })
    },
    t.prototype.homeToBackgroud = function() {},
    t.prototype.backgroudToHome = function() {},
    t.prototype.openNotify = function() {},
    t.prototype.registerNotify = function() {},
    t.prototype.deleteNotify = function() {},
    t.prototype.shark = function(t) {
        1 == t ? tt.vibrateLong() : tt.vibrateShort()
    },
    t.prototype.openShare = function() {},
    t.prototype.compareVersion = function(t, e) {
        t = t.split("."),
        e = e.split(".");
        for (var o = Math.max(t.length, e.length); t.length < o;) t.push("0");
        for (; e.length < o;) e.push("0");
        for (var a = 0; a < o; a++) {
            var i = parseInt(t[a]),
            r = parseInt(e[a]);
            if (i > r) return 1;
            if (i < r) return - 1
        }
        return 0
    },
    t.prototype.share = function(t, e) {
        var o = this.videpPath,
        a = this;
        null != o && 0 != o.length && null != o ? tt.shareAppMessage({
            channel: "video",
            query: "",
            templateId: "81f5ada24aigo4hdcd",
            title: "开局一把刀",
            desc: "开局一把刀",
            extra: {
                videoPath: o,
                videoTopics: ["开局一把刀"],
                withVideoId: !0
            },
            success: function() {
                a.videpPath = null,
                tt.showToast({
                    title: "分享视频成功",
                    duration: 2e3,
                    success: function() {},
                    fail: function() {}
                }),
                e && e()
            },
            fail: function() {
                tt.showToast({
                    title: "分享视频失败",
                    duration: 2e3,
                    success: function() {},
                    fail: function() {}
                })
            }
        }) : tt.showToast({
            title: "还没有分享内容",
            duration: 2e3,
            success: function() {},
            fail: function() {}
        })
    },
    t.prototype.getCode = function() {
        return "134"
    },
    t.prototype.verifyKey = function() {},
    t.prototype.toAppStore = function() {},
    t
} ();
o.BytedanceManager = r