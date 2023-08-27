var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.WebLinkManager = void 0;
var a = function() {
    function t() {
        this.infostr = []
    }
    return t.prototype.showBlockAd = function() {},
    t.prototype.hideBlockAd = function() {},
    t.prototype.getCode = function() {
        return ""
    },
    t.prototype.canShare = function() {
        return ! 1
    },
    t.prototype.pauseRecord = function() {},
    t.prototype.resumeRecord = function() {},
    t.prototype.verifyKey = function() {},
    t.prototype.toAppStore = function() {},
    t.prototype.openNotify = function() {},
    t.prototype.shareImg = function() {},
    t.prototype.showWxNativeAD = function() {},
    t.prototype.hideWxNativeAD = function() {},
    t.prototype.hasVerify = function() {
        return ! 1
    },
    t.prototype.youmengTrack = function(t, e, o) {
        cocosAnalytics && ("userA" == e ? cocosAnalytics.CACustomEvent.onSuccess(t, {
            userA: o
        }) : "userB" == e ? cocosAnalytics.CACustomEvent.onSuccess(t, {
            userB: o
        }) : "userD" == e ? cocosAnalytics.CACustomEvent.onSuccess(t, {
            userD: o
        }) : cocosAnalytics.CACustomEvent.onSuccess(t, {
            userC: o
        }))
    },
    t.prototype.initSdk = function(t, e) {
        e && e()
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
        e && e()
    },
    t.prototype.hideBanner = function(t, e) {
        e && e()
    },
    t.prototype.showInsertAd = function(t, e) {
        e && e()
    },
    t.prototype.showVideoAd = function(t, e) {
        e && e()
    },
    t.prototype.otherFun = function(t, e) {
        e && e()
    },
    t.prototype.shark = function(t, e) {
        e && e()
    },
    t.prototype.recordVideo = function(t, e) {
        e && e()
    },
    t.prototype.shareVideo = function(t, e) {
        e && e()
    },
    t.prototype.stopRecorderManager = function(t, e) {
        e && e()
    },
    t.prototype.setLanguage = function(t, e) {
        return e && e(),
        "zh"
    },
    t
} ();
o.WebLinkManager = a