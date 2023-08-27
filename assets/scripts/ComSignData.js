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
o.ComSignData = void 0;
var r = t("BaseData"),
n = t("EventMgr"),
s = t("TimeUtils"),
c = t("Config"),
l = t("CommonCfg"),
u = function() {
    this.lastSignTime = -1,
    this.firstLoginTime = -1,
    this.firstLoginDayTime = -1
},
p = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.ecrypt = !1,
        e.gameKey = c.GameConfig.AppCacheName + "sign",
        e.curentDay = 1,
        e.redshowing = !1,
        e.canSign = !1,
        e
    }
    return i(e, t),
    e.prototype.createData = function() {
        return this.data = new u,
        this.data.firstLoginTime = s.TimeUtils.GetTimeBySecond(),
        this.data.firstLoginDayTime = s.TimeUtils.dayStart(),
        this.data.alredyIdx = [],
        this.curentDay = 1,
        this.saveData(),
        this.data
    },
    e.prototype.initData = function(t) {
        if (!t) {
            var e = s.TimeUtils.overDay(this.data.firstLoginDayTime);
            e <= 0 && (e = 0),
            this.curentDay = e + 1
        }
    },
    e.prototype.getCurentDay = function() {
        return this.curentDay
    },
    e.prototype.getAlredySign = function() {
        return this.data.alredyIdx
    },
    e.prototype.checkIsSigned = function(t) {
        for (var e = 0; e < this.data.alredyIdx.length; e++) if (t == this.data.alredyIdx[e]) return ! 0;
        return ! 1
    },
    e.prototype.checkReissue = function(t) {
        return t < this.curentDay
    },
    e.prototype.checkCanSign = function(t) {
        return t == this.curentDay
    },
    e.prototype.startSign = function(t) {
        this.data.alredyIdx.push(t),
        this.data.lastSignTime = s.TimeUtils.GetTimeBySecond(),
        this.saveData(),
        this.checkShowRed()
    },
    e.prototype.checkTodyCanSign = function() {
        if (this.data.alredyIdx.length >= 7) return ! 1;
        for (var t = 1; t < this.curentDay; t++) if (!this.checkIsSigned(t)) return ! 0;
        if (this.data.lastSignTime > 10 && s.TimeUtils.compareIsToday(this.data.lastSignTime)) {
            for (t = 0; t < this.data.alredyIdx.length; t++) if (this.curentDay == this.data.alredyIdx[t]) return ! 1;
            return ! 0
        }
        return this.checkCanSign(this.curentDay)
    },
    e.prototype.checkShowRed = function() {
        var t = this.checkTodyCanSign();
        t ? this.redshowing || (this.redshowing = !0, n.EventMgr.getInstance().emit(l.CommonEventName.RefreshSignRed, !0)) : this.redshowing && (this.redshowing = !1, n.EventMgr.getInstance().emit(l.CommonEventName.RefreshSignRed, !1)),
        this.canSign = t
    },
    e.prototype.getCanSigned = function() {
        return this.canSign
    },
    e
} (r.BaseData);
o.ComSignData = p