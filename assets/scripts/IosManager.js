var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.IosManager = void 0;
var a = function() {
    function t() {}
    return t.prototype.needDouyVefiy = function() {},
    t.prototype.interVefiy = function() {},
    t.prototype.showNative = function() {},
    t.prototype.hideNative = function() {},
    t.prototype.showInterNative = function() {},
    t.prototype.hideInterNative = function() {},
    t.prototype.showFloatIconAd = function() {},
    t.prototype.hideFloatIconAd = function() {},
    t.prototype.canCare = function() {
        return ! 1
    },
    t.prototype.canShowBtnMore = function() {
        return ! 1
    },
    t.prototype.canShowEnergyForverVersion = function() {
        return ! 0
    },
    t.prototype.hasVerify = function() {
        return ! 1
    },
    t.prototype.initSdk = function(t, e) {
        e && e(null)
    },
    t.prototype.login = function(t, e) {
        e && e(null)
    },
    t.prototype.pay = function(t, e) {
        e && e(null)
    },
    t.prototype.share = function(t, e) {
        e && e(null)
    },
    t.prototype.showBanner = function() {
        jsb.reflection.callStaticMethod("IOS_JSB", "showBannerAd")
    },
    t.prototype.hideBanner = function() {
        jsb.reflection.callStaticMethod("IOS_JSB", "closeBannerAd")
    },
    t.prototype.showInsertAd = function() {
        jsb.reflection.callStaticMethod("IOS_JSB", "showInsertAd")
    },
    t.prototype.showVideoAd = function(t, e, o) {
        this.callback = e,
        this.errorcallback = o,
        window.SDK = this,
        jsb.reflection.callStaticMethod("IOS_JSB", "showVideoAd:", "window.SDK.videoCallback")
    },
    t.prototype.videoCallback = function(t) {
        this.callback && 1 == t ? this.callback(t) : this.errorcallback && -1 == t && this.errorcallback(t)
    },
    t.prototype.toAppStore = function(t) {
        this.appCallback = t,
        window.SDK = this,
        jsb.reflection.callStaticMethod("IOS_JSB", "toAppStore:", "window.SDK.toAppStoreCallback")
    },
    t.prototype.toAppStoreCallback = function(t) {
        this.appCallback && this.appCallback(t)
    },
    t.prototype.otherFun = function(t, e) {
        e && e()
    },
    t.prototype.shark = function(t) {
        t.isLong ? jsb.reflection.callStaticMethod("IOS_JSB", "shark:", 1) : jsb.reflection.callStaticMethod("IOS_JSB", "shark:", 0)
    },
    t.prototype.canShare = function() {
        return ! 1
    },
    t.prototype.recordVideo = function() {},
    t.prototype.shareVideo = function() {},
    t.prototype.stopRecorderManager = function() {},
    t.prototype.setLanguage = function() {
        return "zh"
    },
    t.prototype.initTrack = function() {},
    t.prototype.youmengTrack = function(t, e, o) {
        jsb.reflection.callStaticMethod("IOS_JSB", "onEvent:ab:attributes:", t, e, o)
    },
    t.prototype.openNotify = function() {
        jsb.reflection.callStaticMethod("IOS_JSB", "openNotify")
    },
    t.prototype.addNotify = function(t, e) {
        jsb.reflection.callStaticMethod("IOS_JSB", "addNotify:text:", t + "", e)
    },
    t.prototype.showGamePortalAd = function() {},
    t.prototype.initNativeAd = function() {},
    t.prototype.showNativeAd = function(t) {
        jsb.reflection.callStaticMethod("IOS_JSB", "showNativeAd:", t)
    },
    t.prototype.closeNativeAd = function() {
        jsb.reflection.callStaticMethod("IOS_JSB", "closeNativeAd")
    },
    t.prototype.getUserInfo = function(t) {
        t && t(null)
    },
    t.prototype.shareImg = function() {},
    t.prototype.addShortcut = function() {},
    t.prototype.checkShortcut = function() {},
    t
} ();
o.IosManager = a