var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.ComPlayerMgr = void 0;
var a = t("ComSignData"),
i = function() {
    function t() {
        this.isPreload = !1
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t, this.instance.initData()),
        this.instance
    },
    t.prototype.initData = function() {},
    t.prototype.preload = function(t) {
        this.isPreload || (this.isPreload = !0, this.signData = new a.ComSignData, this.signData.getData(), t && t())
    },
    t.prototype.getSignData = function() {
        return this.signData
    },
    t
} ();
o.ComPlayerMgr = i