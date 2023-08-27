var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.VivoManager = void 0;
var a = t("LogMgr"),
i = t("UIMgr"),
r = function() {
    function t() {
        this.showBannerTime = 0,
        this.trackAppKey = "60783df09e4e8b6f6170467b",
        this.showAlert = !0
    }
    return t.prototype.youmengTrack = function() {},
    t.prototype.getCode = function() {
        return "xxx"
    },
    t.prototype.pauseRecord = function() {},
    t.prototype.closeNativeAd = function() {},
    t.prototype.hasVerify = function() {
        return ! 1
    },
    t.prototype.toAppStore = function() {},
    t.prototype.addNotify = function() {},
    t.prototype.openNotify = function() {},
    t.prototype.needDouyVefiy = function() {},
    t.prototype.interVefiy = function() {},
    t.prototype.showNative = function() {},
    t.prototype.hideNative = function() {},
    t.prototype.showInterNative = function() {},
    t.prototype.hideInterNative = function() {},
    t.prototype.canShowBtnMore = function() {},
    t.prototype.canShowEnergyForverVersion = function() {},
    t.prototype.showFloatIconAd = function() {},
    t.prototype.hideFloatIconAd = function() {},
    t.prototype.canCare = function() {
        return ! 1
    },
    t.prototype.addShortcut = function(t, e) {
        qg.installShortcut({
            message: "添加到桌面，方便下次启动",
            success: function() {
                e && e("桌面图标添加成功")
            },
            fail: function() {
                e && e("桌面图标添加失败")
            }
        })
    },
    t.prototype.checkShortcut = function(t, e) {
        e && e(!0)
    },
    t.prototype.shareImg = function() {},
    t.prototype.getUserInfo = function(t) {
        t(null, null)
    },
    t.prototype.showGamePortalAd = function() {
        a.LogMgr.getInstance().debug("更多游戏")
    },
    t.prototype.getAbName = function(t) {
        t("A")
    },
    t.prototype.initTrack = function() {},
    t.prototype.canShare = function() {
        return ! 1
    },
    t.prototype.initSdk = function() {
        this.PlatformInfo = qg.getSystemInfoSync()
    },
    t.prototype.login = function(t, e) {
        e && e()
    },
    t.prototype.pay = function(t, e) {
        e && e()
    },
    t.prototype.share = function(t, e) {
        e && e()
    },
    t.prototype.showBanner = function(t, e) {
        this.PlatformInfo.platformVersionCode >= 1031 ? Date.now() - this.showBannerTime >= 3e3 && this.createBanner() : e && e()
    },
    t.prototype.createBanner = function() {
        null != this.BannerAd && this.hideBanner(),
        this.BannerAd = qg.createBannerAd({
            posId: "78d6063321d943f783ae902f768e489d",
            style: {
                left: 0,
                top: this.PlatformInfo.screenHeight - 170,
                width: this.PlatformInfo.screenWidth,
                height: 170
            }
        });
        var t = Date.now();
        this.showBannerTime = t,
        this.BannerAd.show().then(function() {}).
        catch(function() {}),
        this.BannerAd.onError(function(t) {
            console.log(" banner 广告错误", t.errCode)
        })
    },
    t.prototype.hideBanner = function() {
        null != this.BannerAd && (this.BannerAd.hide(), this.BannerAd.destroy(), this.BannerAd.offError())
    },
    t.prototype.showInsertAd = function(t, e) {
        if (this.PlatformInfo.platformVersionCode >= 1031) {
            console.log("开始显示插屏视频=============>");
            var o = qg.createInterstitialAd({
                posId: "4c653de784624194b1e2b983c28a099b"
            });
            o.load(),
            o.onError(function() {
                o.offError()
            }),
            o.onLoad(function() {
                o.offLoad()
            }),
            o.show().then(function() {
                e && e()
            }).
            catch(function(t) {
                console.log("插屏广告展示失败", JSON.stringify(t))
            })
        } else e && e()
    },
    t.prototype.showVideoAd = function(t, e, o) {
        if (this.PlatformInfo.platformVersionCode >= 1041) {
            var a = qg.createRewardedVideoAd({
                posId: "15597df0c47847a984f70ed087dfba0b"
            });
            a.onError(function() {
                o && o(),
                i.UIMgr.getInstance().openUI(UIID.UITips, -1, "没有广告，请稍后重试"),
                a.offError()
            }),
            a.onLoad(function() {
                a.show().then(function() {}).
                catch(function() {}),
                a.offLoad()
            }),
            a.onClose(function(t) {
                t && t.isEnded ? e && e(!0) : o && o(),
                a.offClose(),
                a.load()
            })
        } else o && o()
    },
    t.prototype.otherFun = function(t, e) {
        e && e()
    },
    t.prototype.shark = function(t) {
        1 == t ? qg.vibrateLong() : qg.vibrateShort()
    },
    t.prototype.recordVideo = function(t, e) {
        e && e()
    },
    t.prototype.shareVideo = function(t, e) {
        e && e()
    },
    t.prototype.stopRecorderManager = function() {},
    t.prototype.setLanguage = function(t, e) {
        return e && e(),
        "zh"
    },
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
        this.nativeAd && (this.nativeAd.offLoad(a), this.nativeAd.offError(i), this.nativeAd = null),
        this.nativeAd = qg.createNativeAd({
            adUnitId: "af3ef7f7104c4742a4eda8e1c3df0199"
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
    t
} ();
o.VivoManager = r