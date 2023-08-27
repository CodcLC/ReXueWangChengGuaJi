var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.CommonBrige = void 0;
var a = t("LogMgr"),
i = function() {
    function t() {}
    return t.Instance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.setGameBrige = function(t) {
        this.gameIpml = t
    },
    t.prototype.subGoodsNum = function(t, e) {
        if (this.gameIpml) return this.gameIpml.subGoodsNum(t, e);
        a.LogMgr.getInstance().error("游戏没有实现接口：", "subGoodsNum")
    },
    t.prototype.addReward = function(t, e, o) {
        this.gameIpml ? this.gameIpml.addComReward(t, e, o) : a.LogMgr.getInstance().error("游戏没有实现接口：", "addReward")
    },
    t
} ();
o.CommonBrige = i