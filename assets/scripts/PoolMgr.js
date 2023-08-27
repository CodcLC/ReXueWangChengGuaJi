var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.PoolMgr = o.PoolNode = void 0;
var a = function() {
    function t() {
        this._isReady = !1,
        this._createCount = 0,
        this._warterMark = 50,
        this._node = null,
        this._nodes = new cc.NodePool
    }
    return t.prototype.init = function(t, e) {
        this._node = t,
        this._isReady = !0;
        for (var o = 0; o < e; o++) {
            var a = cc.instantiate(t);
            this._createCount++,
            this._nodes.put(a)
        }
    },
    t.prototype.getNode = function() {
        return this._nodes.size() > 0 ? this._nodes.get() : (this._createCount++, cc.instantiate(this._node))
    },
    t.prototype.freeNode = function(t) {
        t && cc.isValid(t) ? this._warterMark < this._nodes.size() ? (this._createCount--, t.destroy()) : this._nodes.put(t) : this._createCount--
    },
    t.prototype.setWaterMark = function(t) {
        this._warterMark = t
    },
    t.prototype.destory = function() {
        this._createCount -= this._nodes.size();
        for (var t = 0; t < this._nodes.size(); t++) {
            var e = this._nodes.get(t);
            e && e.destroy()
        }
        this._nodes.clear()
    },
    t
} ();
o.PoolNode = a;
var i = function() {
    function t() {
        this.poolMap = new Map
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.creatrePool = function(t, e, o) {
        if (void 0 === o && (o = 1), this.poolMap.has(t)) {
            var i = this.poolMap.get(t);
            i.destory(),
            i = null
        }
        var r = new a;
        e && r.init(e, o),
        this.poolMap.set(t, r)
    },
    t.prototype.getNode = function(t) {
        return this.poolMap.has(t) ? this.poolMap.get(t).getNode() : null
    },
    t.prototype.freeNode = function(t, e) {
        this.poolMap.has(t) ? this.poolMap.get(t).freeNode(e) : e.destroy()
    },
    t.prototype.clearPool = function(t) {
        this.poolMap.has(t) && (this.poolMap.get(t).destory(), this.poolMap.delete(t))
    },
    t.instance = null,
    t
} ();
o.PoolMgr = i