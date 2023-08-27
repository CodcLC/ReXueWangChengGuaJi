var t = require;
var e = module;
var o = exports;
var a, i = this && this.__extends || (a = function(t, e) {
    return (a = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array &&
    function(t, e) {
        t.__proto__ = e
    } ||
    function(t, e) {
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
    })(t, e)
},
function(t, e) {
    function o() {
        this.constructor = t
    }
    a(t, e),
    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
});
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.TrackData = void 0;
var r = t("BaseData"),
n = t("BasePlatform"),
s = t("HttpMgr"),
c = t("PlatformManager"),
l = t("SdkMgr"),
u = t("TimeUtils"),
p = t("Utils"),
g = t("Config"),
d = t("PlayerMgr"),
h = t("TrackDataEvent"),
f = function() {
    this.abName = null,
    this.isGet = !1,
    this.versionName = null,
    this.appStore = 0,
    this.iCountStore = 0,
    this.iCountHC = 0
},
m = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.ecrypt = !1,
        e.gameKey = g.GameConfig.AppCacheName + "trackdata",
        e.eventCF = {},
        e
    }
    return i(e, t),
    e.prototype.createData = function() {
        return this.data = new f,
        this.data.versionName = this.getVersionConf(),
        this.saveData(),
        this.data
    },
    e.prototype.initData = function() {
        this.eventCF = h.EventCF
    },
    e.prototype.getVersionName = function() {
        return this.data.versionName ? this.data.versionName: this.getVersionConf()
    },
    e.prototype.getVersionConf = function() {
        var t = c.UM_VERSION.versionName,
        e = l.SdkMgr.getInstance().getSwitchVersion(t);
        return e || (e = "1.0.0"),
        String(e)
    },
    e.prototype.getSdkAbName = function(t, e) {
        var o = this;
        null != this.data.abName && this.data.isGet ? e && e(this.data.abName) : this.requestAbName(t,
        function(t) {
            o.data.isGet = !0,
            o.data.abName = null == t ? "C": t,
            e && e(o.data.abName),
            o.saveData()
        })
    },
    e.prototype.setToAppStore = function() {
        this.data.appStore = 1,
        this.saveData()
    },
    e.prototype.getToAppStore = function() {
        return 1 == this.data.appStore
    },
    e.prototype.getAbType = function() {
        return this.data.abName ? this.data.abName: "C"
    },
    e.prototype.requestAbName = function(t, e) {
        var o = this;
        if (t == d.ABTestType.NO_AB && (this.abTestUser = "C"), c.PlatformManager.currentPlatform == n.Platform.EDITOR) {
            var a = window.location.href.split("?abType=");
            if (a.length > 1) this.abTestUser = a[a.length - 1];
            else {
                var i = ["C"];
                t == d.ABTestType.AB_Test ? i = ["A", "B"] : t == d.ABTestType.AD_Test ? i = ["A", "D"] : t == d.ABTestType.ABD_Test && (i = ["A", "B", "D"]);
                var r = p.Utils.randomRang(0, i.length);
                this.abTestUser = i[r]
            }
        }
        t == d.ABTestType.A_fixed || c.PlatformManager.currentPlatform == n.Platform.ANDROID_TAP || c.PlatformManager.currentPlatform == n.Platform.WEB_LINK || c.PlatformManager.currentPlatform == n.Platform.ANDROID_233 || c.PlatformManager.currentPlatform == n.Platform.GOOGLE ? this.abTestUser = "A": t == d.ABTestType.B_fixed ? this.abTestUser = "B": t == d.ABTestType.D_fixed && (this.abTestUser = "D"),
        this.abTestUser ? e(this.abTestUser) : s.HttpMgr.getInstance().httpPost({
            appId: c.PlatformInfo.APP_ID,
            platform: c.PlatformManager.currentPlatform
        },
        function(t) {
            if (null == t) o.abTestUser = "C";
            else {
                var a, i = JSON.parse(t);
                a = 1 == i.data ? ["A", "B", "D"] : 2 == i.data ? ["A"] : 3 == i.data ? ["B"] : 4 == i.data ? ["D"] : 5 == i.data ? ["A", "B"] : 6 == i.data ? ["A", "D"] : 7 == i.data ? ["B", "D"] : ["C"],
                o.abTestUser = a[Math.floor(Math.random() * a.length)]
            }
            e && e(o.abTestUser)
        },
        "https://yuema.sfplay.net:9090/getPlatformInfo2")
    },
    e.prototype.youmengTrack = function(t, e, o) {
        var a = this.eventCF[t],
        i = !0,
        r = a.eventValue;
        if (e && (r += e), o && (r = r + "_" + o), !a.condition || !this.data[a.condition]) {
            if (a.preEvent && !e) {
                if (!this.data[a.preEvent]) return
            } else if (a.preEvent && e && !this.data[a.preEvent + e]) return;
            if (a.onlyOne && this.data[a.eventKey + r] && (i = !1), !(i && a.saveKey && this.data[a.eventKey + a.eventValue])) {
                if (t == h.TrackId.dau) {
                    var n = this.data[a.eventKey + a.eventValue];
                    if (n) {
                        var s = Number(n);
                        if (u.TimeUtils.compareIsToday(s)) return;
                        i = !0
                    } else i = !0
                }
                i && (a.onlyOne && (a.saveKey ? this.data[a.eventKey + a.eventValue] = 1 : this.data[a.eventKey + r] = 1, t == h.TrackId.dau && (this.data[a.eventKey + a.eventValue] = u.TimeUtils.GetTimeBySecond()), this.saveData()), this.data.abName || (this.data.abName = "C", this.saveData()), c.PlatformManager.getInstance().youmengTrack(a.eventKey, "user" + this.data.abName, this.getVersionName() + "_" + r, a.info))
            }
        }
    },
    e.prototype.youmengTrackNew = function() {},
    e.prototype.testTrackTime = function() {},
    e.prototype.getCountStore = function() {
        return null == this.data.iCountStore && (this.data.iCountStore = 0),
        this.data.iCountStore
    },
    e.prototype.addCountStore = function(t) {
        void 0 === t && (t = 1),
        null == this.data.iCountStore && (this.data.iCountStore = 0),
        this.data.iCountStore += t,
        this.saveData()
    },
    e.prototype.getCountHC = function() {
        return null == this.data.iCountHC && (this.data.iCountHC = 0),
        this.data.iCountHC
    },
    e.prototype.addCountHC = function(t) {
        void 0 === t && (t = 1),
        null == this.data.iCountHC && (this.data.iCountHC = 0),
        this.data.iCountHC += t,
        this.saveData()
    },
    e
} (r.BaseData);
o.TrackData = m