var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.OppoManager = void 0;
var a = function() {
    function t() {
        this.hasAd = !0,
        this.hasBanner = !0,
        this.hasInsertAd = !0,
        this.hasVideoAd = !0,
        this.hasShare = !1,
        this.BannerAd = null,
        this.showBannerTime = 0,
        this.showVideoTime = 0,
        this.BannerAdHight = 0,
        this.BannerAdWight = 0,
        this.stub = "",
        this.isShowBanner = !1,
        this.nativeAd = null,
        this.currentAdId = 1,
        this.canShowBanner = !1,
        this.gamePortalAd = null,
        this.isSupportGamePortalAd = !0,
        this.VideoMap = new Map
    }
    return t.prototype.closeNativeAd = function() {},
    t.prototype.hasVerify = function() {
        return ! 1
    },
    t.prototype.toAppStore = function() {},
    t.prototype.addNotify = function() {},
    t.prototype.needDouyVefiy = function() {},
    t.prototype.interVefiy = function() {},
    t.prototype.showNative = function() {},
    t.prototype.hideNative = function() {},
    t.prototype.showInterNative = function() {},
    t.prototype.hideInterNative = function() {},
    t.prototype.canShowBtnMore = function() {
        return ! 0
    },
    t.prototype.canShowEnergyForverVersion = function() {
        return ! 0
    },
    t.prototype.showFloatIconAd = function() {},
    t.prototype.hideFloatIconAd = function() {},
    t.prototype.canCare = function() {
        return ! 1
    },
    t.prototype.addShortcut = function() {},
    t.prototype.checkShortcut = function() {},
    t.prototype.shareImg = function() {},
    t.prototype.getUserInfo = function(t) {
        t(null, null)
    },
    t.prototype.videoCallback = function() {},
    t.prototype.canShare = function() {
        return ! 1
    },
    t.prototype.initTrack = function() {},
    t.prototype.goToSuperXiuXian = function() {},
    t.prototype.showBlockAd = function() {},
    t.prototype.hideBlockAd = function() {},
    t.prototype.youmengTrack = function() {},
    t.prototype.initNativeAd = function(t, e) {
        var o = this,
        a = function(t) {
            console.log("原生广告加载", t.adList),
            e && e(t.adList),
            t.adList[0] && o.nativeAd.reportAdShow({
                adId: t.adList[0].adId
            })
        },
        i = function(t) {
            console.log("原生广告加载失败", t),
            e && e(null)
        };
        this.nativeAd && (this.nativeAd.offLoad(a), this.nativeAd.offError(i), this.nativeAd.destroy(), this.nativeAd = null),
        this.nativeAd = qg.createNativeAd({
            adUnitId: "311595"
        }),
        this.nativeAd.onError(i),
        this.nativeAd.onLoad(a),
        this.nativeAd.load()
    },
    t.prototype.showNativeAd = function(t) {
        this.nativeAd && this.nativeAd.reportAdClick({
            adId: t
        })
    },
    t.prototype.shareVideo = function() {},
    t.prototype.initSdk = function() {
        var t = this,
        e = qg.createRewardedVideoAd({
            adUnitId: "319268"
        });
        this.VideoMap.set(1, e);
        var o = qg.getSystemInfoSync(),
        a = o.screenWidth;
        o.platformVersionCode >= 1051 && (this.BannerAd = qg.createBannerAd({
            adUnitId: "319288",
            style: {
                left: 0,
                top: 0,
                width: a
            }
        }), this.BannerAd.onResize(function(e) {
            console.log(e.width, e.height),
            t.BannerAdHight = e.height,
            t.BannerAdWight = e.width,
            t.BannerAd.style.top = o.screenHeight - t.BannerAdHight,
            t.BannerAd.style.left = o.screenWidth / 2 - t.BannerAdWight / 2 + 50
        }), this.BannerAd.onError(function() {}), this.BannerAd.onLoad(function() {})),
        o.platformVersionCode >= 1076 ? this.gameBannerAd = qg.createGameBannerAd({
            adUnitId: "319303"
        }) : console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API"),
        setTimeout(function() {
            t.canShowBanner = !0
        },
        6e4),
        o.platformVersionCode >= 1076 ? (this.isSupportGamePortalAd = !0, this.gamePortalAd = qg.createGamePortalAd({
            adUnitId: "319306"
        })) : (this.isSupportGamePortalAd = !1, console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API"))
    },
    t.prototype.login = function() {},
    t.prototype.pay = function() {},
    t.prototype.share = function() {},
    t.prototype.showGamePortalAd = function(t, e) {
        if (this.isSupportGamePortalAd || !e) {
            var o = this;
            null != o.showGamePortalAd ? (o.gamePortalAd.onLoad(function() {
                o.gamePortalAd.show().then(function() {}).
                catch(function(t) {
                    e && e("暂无内容,请稍后再试"),
                    console.log("show fail1 with:" + t.errCode + "," + t.errMsg)
                })
            }), o.gamePortalAd.load().then(function() {}).
            catch(function(t) {
                e && e("暂无内容,请稍后再试"),
                console.log("load fail with:" + t.errCode + "," + t.errMsg)
            })) : e && e(null)
        } else e(null)
    },
    t.prototype.showBanner = function(t) {
        var e = this;
        if (this.gameBannerAd && "ADResult" == t) this.gameBannerAd.show().then(function() {
            console.log("show success")
        }).
        catch(function(t) {
            console.log("show fail with:" + t.errCode + "," + t.errMsg),
            null != e.BannerAd && e.canShowBanner && e.BannerAd.show().then(function() {}).
            catch(function(t) {
                console.log("banner广告展示失败", JSON.stringify(t))
            })
        });
        else {
            if (null == e.BannerAd) return;
            e.canShowBanner && e.BannerAd.show().then(function() {}).
            catch(function(t) {
                console.log("banner广告展示失败", JSON.stringify(t))
            })
        }
    },
    t.prototype.hideBanner = function() {
        this.gameBannerAd && this.gameBannerAd.hide().then(function() {
            console.log("hide success")
        }).
        catch(function(t) {
            console.log("hide fail with:" + t.errCode + "," + t.errMsg)
        }),
        null != this.BannerAd && this.BannerAd.hide()
    },
    t.prototype.showInsertAd = function(t, e) {
        e && e()
    },
    t.prototype.showVideoAd = function(t, e, o) {
        var a = this.VideoMap.get(1);
        a.load();
        var i = function() {
            a.show(),
            a.offLoad(i)
        };
        a.onLoad(i);
        var r = function() {
            o("暂时没有广告，请稍后再试"),
            a.offError(r)
        };
        a.onError(r);
        var n = function(t) {
            t && t.isEnded ? e && e() : o("播放中途退出，无游戏奖励"),
            a.offClose(n),
            a.offError(r),
            a.offLoad(i)
        };
        a.onClose(n)
    },
    t.prototype.homeToBackgroud = function() {},
    t.prototype.backgroudToHome = function() {},
    t.prototype.openNotify = function() {},
    t.prototype.registerNotify = function() {},
    t.prototype.deleteNotify = function() {},
    t.prototype.otherFun = function(t, e) {
        qg.hasShortcutInstalled({
            success: function(t) {
                0 == t && qg.installShortcut({
                    success: function() {
                        e && e(!0)
                    },
                    fail: function() {},
                    complete: function() {}
                })
            },
            fail: function() {
                e && e(!1)
            },
            complete: function() {}
        })
    },
    t.prototype.shark = function(t) {
        1 == t ? qg.vibrateLong({
            success: function() {},
            fail: function() {},
            complete: function() {}
        }) : qg.vibrateShort({
            success: function() {},
            fail: function() {},
            complete: function() {}
        })
    },
    t.prototype.getInvertTime = function() {
        return 0
    },
    t.prototype.recordVideo = function() {},
    t.prototype.stopRecorderManager = function() {},
    t.prototype.setLanguage = function() {
        return null
    },
    t.prototype.showPushApp = function(t, e, o) {
        o && o()
    },
    t.prototype.exit = function(t, e, o) {
        o && o()
    },
    t
} ();
o.OppoManager = a