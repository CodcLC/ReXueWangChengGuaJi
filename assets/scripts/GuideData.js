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
o.GuideData = void 0;
var r = t("BaseData"),
n = t("Config"),
s = function() {
    this.currentId = 1
},
c = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.ecrypt = !1,
        e.gameKey = n.GameConfig.AppCacheName + "guide",
        e.endId = 20,
        e.putGuideNum = 0,
        e
    }
    return i(e, t),
    e.prototype.initAbTypeData = function() {
        this.endId = 20,
        this.putGuideNum = 0
    },
    e.prototype.createData = function() {
        return this.data = new s,
        this.saveData(),
        this.data
    },
    e.prototype.getCurrentId = function() {
        return this.data.currentId
    },
    e.prototype.setCurrentId = function(t) {
        this.data.currentId = t
    },
    e.prototype.addCurrentId = function(t, e) {
        void 0 === t && (t = !0),
        void 0 === e && (e = 1),
        this.data.currentId += e,
        t && this.saveData()
    },
    e.prototype.getGuideEnd = function() {
        return this.data.currentId >= this.endId
    },
    e
} (r.BaseData);
o.GuideData = c