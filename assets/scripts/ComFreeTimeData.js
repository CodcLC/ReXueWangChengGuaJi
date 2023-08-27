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
o.ComFreeTimeData = o.FreeData = void 0;
var r = t("BaseData"),
n = t("Config"),
s = t("ComDataMgr"),
c = function() {
    this.index = 0
};
o.FreeData = c;
var l = function() {},
u = function() {},
p = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.ecrypt = !1,
        e.gameKey = n.GameConfig.AppCacheName + "FreeTime",
        e.currentGoodsIds = [],
        e
    }
    return i(e, t),
    e.prototype.createData = function() {
        this.data = new u,
        this.data.itemData = [];
        for (var t = s.ComDataMgr.getInstance().getAllFreeTimeCfg(), e = 0; e < t.length; e++) {
            var o = t[e],
            a = new c;
            a.id = o.id,
            a.index = 0;
            var i = o.itemIds.split(n.GameConfig.splitNum),
            r = Number(i[0]);
            a.itemId = r;
            var l = s.ComDataMgr.getInstance().getFreeTimeItemById(r);
            a.isTarget = !1,
            a.adNum = 0,
            this.currentGoodsIds.push(l.goodsId),
            a.goodsId = l.goodsId,
            this.data.itemData.push(a)
        }
        return this.checkSame(),
        this.saveData(),
        this.data
    },
    e.prototype.checkSame = function() {
        for (var t = [], e = 0; e < this.data.itemData.length; e++) for (var o = this.data.itemData[e], a = 0; a < t.length; a++) if (t[a] == o.goodsId) {
            var i = this.check(o.id, o.index, o.goodsId, o.index);
            o.index = i.index,
            o.goodsId = i.goodId
        } else t.push(o.goodsId);
        t.splice(0, t.length)
    },
    e.prototype.check = function(t, e, o, a) {
        e++;
        var i = s.ComDataMgr.getInstance().getFreeTimeById(t).itemIds.split(n.GameConfig.splitNum);
        if (e == i.length && (e = 0), a == e) return (r = new l).goodId = o,
        r.index = e,
        r;
        var r, c = s.ComDataMgr.getInstance().getFreeTimeItemById(Number(i[e]));
        if (c.goodsId != o) return (r = new l).goodId = c.goodsId,
        r.index = e,
        r;
        this.check(t, e, o, a)
    },
    e.prototype.changleFreeTimedata = function(t) {
        var e = this.getDataById(t),
        o = s.ComDataMgr.getInstance().getFreeTimeById(t).itemIds.split(n.GameConfig.splitNum),
        a = e.index + 1;
        a >= o.length && (a = 0);
        var i = Number(o[a]);
        e.adNum = 0;
        var r = s.ComDataMgr.getInstance().getFreeTimeItemById(i);
        e.goodsId = r.goodsId,
        e.index = a,
        e.itemId = r.id,
        e.isTarget = !1,
        this.checkSame(),
        this.saveData()
    },
    e.prototype.addAdNum = function(t) {
        var e = this.getDataById(t);
        return e.adNum++,
        this.saveData(),
        e
    },
    e.prototype.addAdNumByData = function(t) {
        return t.adNum += 1,
        this.saveData(),
        t
    },
    e.prototype.initData = function() {},
    e.prototype.getDataById = function(t) {
        for (var e = 0; e < this.data.itemData.length; e++) {
            var o = this.data.itemData[e];
            if (Number(o.id) == t) return o
        }
        return null
    },
    e
} (r.BaseData);
o.ComFreeTimeData = p