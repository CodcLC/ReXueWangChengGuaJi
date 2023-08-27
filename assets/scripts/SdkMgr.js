var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.SdkMgr = o.AdType = void 0;
var a, i = t("Config"),
    r = t("AudioMgr"),
    n = t("BasePlatform"),
    s = t("HttpMgr"),
    c = t("LogMgr"),
    l = t("PlatformManager"),
    u = t("UIMgr"),
    p = t("PlayerMgr"),
    g = t("EventMgr"),
    d = t("Appcfg"),
    h = t("TaskMgr");
(function(t) {
    t[t.ReissueSign = 0] = "ReissueSign",
        t[t.FreeLotty = 1] = "FreeLotty",
        t[t.Collection = 2] = "Collection",
        t[t.AdFreeTime = 3] = "AdFreeTime"
})(a = o.AdType || (o.AdType = {}));
var f = function() {
    function t() {}
    return t.getInstance = function() {
            return null == this.instance && (this.instance = new t),
                this.instance
        },
        t.prototype.playVideo = function(t, e, o) {
            void 0 === o && (o = function() {}),
                r.AudioMgr.getInstance().pauseAllMusic(),
                g.EventMgr.getInstance().emit(d.BaseEventName.blocktouch, !1),
                l.PlatformManager.getInstance().showVideoAd("", a.AdFreeTime,
                    function() {
                        g.EventMgr.getInstance().emit(d.BaseEventName.blocktouch, !0),
                            r.AudioMgr.getInstance().resumeAllMusic(),
                            h.default.getInstance().addLookVideoCountForTask(),
                            e && e()
                    },
                    function(t) {
                        o && o(),
                            r.AudioMgr.getInstance().resumeAllMusic(),
                            g.EventMgr.getInstance().emit(d.BaseEventName.blocktouch, !0),
                            c.LogMgr.getInstance().debug("播放广告失败"),
                            t && t.length && u.UIMgr.getInstance().openUI(i.UIID.UITips, -1, t)
                    })
        },
        t.prototype.showInsert = function(t) {
            l.PlatformManager.getInstance().showInsertAd(t,
                function() {})
        },
        t.prototype.showBanner = function(t) {
            l.PlatformManager.getInstance().showBanner(t)
        },
        t.prototype.hideBanner = function() {
            l.PlatformManager.getInstance().hideBanner()
        },
        t.prototype.requestCheckVersion = function(t) {
            t();
            return;
            for (var e = 0,
                    o = 0,
                    a = 0; a < 10 && l.SWCF[a]; a++) o++;
            var i = function(a) {
                    var i = l.SWCF[a];
                    if (!i) return t(), {
                        value: void 0
                    };
                    var n = r.getSwitchVersion(i);
                    n || (n = 0),
                        s.HttpMgr.getInstance().httpPost({
                                appId: i.appId,
                                platform: l.PlatformManager.currentPlatform,
                                version: n
                            },
                            function(a) {
                                i.isRequest = !0,
                                    null == a ? i.res = !0 : 1 == JSON.parse(a).data ? i.res = !0 : i.res = !1,
                                    ++e >= o && t()
                            },
                            "https://yuema.sfplay.net:9090/getPlatformInfo")
                },
                r = this;
            for (a = 0; a < o; a++) {
                var n = i(a);
                if ("object" == typeof n) return n.value
            }
        },
        t.prototype.getCheckVersion = function(t) {
            if (l.PlatformManager.currentPlatform == n.Platform.EDITOR) return !1;
            if (l.PlatformManager.currentPlatform == n.Platform.WEB_LINK) return !1;
            var e = l.SWCF[t];
            return !e || e.res
        },
        t.prototype.getSwitchVersion = function(t) {
            if (!t) return cc.error("开关没有配置,请到在PlatformManager.ts上进行配置"),
                0;
            switch (l.PlatformManager.currentPlatform) {
                case n.Platform.WECHAT:
                    return t.h5_wechat;
                case n.Platform.BYTEDANCE:
                    return t.h5_bytedance;
                case n.Platform.KUAIKAN:
                    return t.h5_kuaikan;
                case n.Platform.OPPO:
                    return t.h5_oppo;
                case n.Platform.VIVO:
                    return t.h5_vivo;
                case n.Platform.QQ:
                    return t.h5_qq;
                case n.Platform.ANDROID_233:
                    return t.android_233;
                case n.Platform.ANDROID_4399:
                    return t.android_4399;
                case n.Platform.ANDROID_VIVO:
                    return t.android_vivo;
                case n.Platform.ANDROID_XIAOMI:
                    return t.android_xiaomi;
                case n.Platform.GOOGLE:
                    return t.android_google;
                case n.Platform.Ios:
                    return t.ios;
                default:
                    return t.h5_baidu;
            }
        },
        t.prototype.hasVerify = function() {
            return l.PlatformManager.getInstance().hasVerify()
        },
        t.prototype.recordScreen = function() {
            l.PlatformManager.getInstance().recordVideo()
        },
        t.prototype.pauseRecord = function() {
            l.PlatformManager.getInstance().pauseRecord()
        },
        t.prototype.restartRecord = function() {
            l.PlatformManager.getInstance().resumeRecord()
        },
        t.prototype.resumeRecord = function() {
            l.PlatformManager.getInstance().resumeRecord()
        },
        t.prototype.shareImg = function(t, e) {
            l.PlatformManager.getInstance().shareImg(t, e)
        },
        t.prototype.share = function(t, e) {
            l.PlatformManager.getInstance().shareVideo(t, e)
        },
        t.prototype.getShare = function() {
            return l.PlatformManager.getInstance().canShare()
        },
        t.prototype.stopRecord = function(t, e) {
            l.PlatformManager.getInstance().stopRecorderManager(t, e)
        },
        t.prototype.openNotify = function() {
            l.PlatformManager.getInstance().openNotify()
        },
        t.prototype.toAppStore = function() {
            p.PlayerMgr.getInstance().getTrackData().getToAppStore() || l.PlatformManager.getInstance().toAppStore(function(t) {
                1 == t && p.PlayerMgr.getInstance().getTrackData().setToAppStore()
            })
        },
        t.prototype.shark = function(t) {
            void 0 === t && (t = 0),
                l.PlatformManager.getInstance().shark(t)
        },
        t.prototype.showWxNativeAD = function(t) {
            l.PlatformManager.getInstance().showWxNativeAD(t)
        },
        t.prototype.hideWxNativeAD = function(t) {
            l.PlatformManager.getInstance().hideWxNativeAD(t)
        },
        t
}();
o.SdkMgr = f