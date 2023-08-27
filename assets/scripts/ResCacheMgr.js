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
o.ResCacheMgr = void 0;
var r = t("BaseMgr"),
n = t("TimeUtils"),
s = t("UIUtils"),
c = t("ResourceMgr"),
l = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.temporaryCache = [],
        e.permanentCache = [],
        e.isStartDecRef = !1,
        e.assetsLifeTime = 5,
        e.permanentCacheKeyMap = new Map,
        e.depsdeps = [],
        e
    }
    return i(e, t),
    e.getInstance = function() {
        return null == this.instance && (this.instance = new e),
        this.instance
    },
    e.prototype.init = function() {
        this.startDecRef()
    },
    e.prototype.startDecRef = function() {
        this.isStartDecRef || (this.isStartDecRef = !0, s.UIUtils.schedule(this.autoRelease, this, 1))
    },
    e.prototype.autoRelease = function() {
        for (var t = n.TimeUtils.GetTimeBySecond(), e = 0; e < this.temporaryCache.length; e++) {
            var o = this.temporaryCache[e];
            if (o && t - o.releaseTime >= o.cacheTime) {
                if (o.defCount <= 0) continue;
                for (var a = o.defCount,
                i = 0; i < a; i++) if (o.asset.decRef(), o.asset.refCount <= 0) {
                    this.temporaryCache.splice(e, 1),
                    e--,
                    o.defCount = 0;
                    break
                }
                o.asset.refCount > 0 && (o.releaseTime = n.TimeUtils.GetTimeBySecond() + 86400)
            } else o && 0 == o.asset.refCount && (this.temporaryCache.splice(e, 1), e--, o.defCount = 0)
        }
    },
    e.prototype.refreshTime = function(t) {
        for (var e = n.TimeUtils.GetTimeBySecond(), o = 0; o < t.length; o++) for (var a = 0; a < this.temporaryCache.length; a++) {
            var i = t[o],
            r = this.temporaryCache[a];
            if (i.cachekey == r.cachekey && i.type == r.type) {
                this.temporaryCache[a].releaseTime = e,
                this.temporaryCache[a].defCount += i.defCount,
                this.temporaryCache[a].canRelease = !1;
                break
            }
        }
    },
    e.prototype.addAssets = function(t, e) {
        if (t && t.asset) {
            var o = e ? this.temporaryCache: this.permanentCache,
            a = this.isExistKey(t.cachekey, t.type, o); - 1 == a ? o.push(t) : o[a] = t
        }
    },
    e.prototype.addAssetKeyToMap = function(t, e, o, a) {
        var i = this.permanentCacheKeyMap.get(t),
        r = new c.ResCacheKey(e, o, a);
        if (i && i.length > 0) i.push(r);
        else {
            var n = [];
            n.push(r),
            this.permanentCacheKeyMap.set(t, n)
        }
    },
    e.prototype.releaseAssetsFromMap = function(t) {
        var e = this.permanentCacheKeyMap.get(t);
        if (e && e.length > 0) for (var o = 0; o < e.length; o++) for (var a = 0; a < this.permanentCache.length; a++) {
            var i = this.permanentCache[a];
            if (i && i.cachekey == e[o].cachekey && i.type == e[o].type) {
                i.asset.decRef(),
                i.asset.refCount <= 0 && (this.permanentCache.splice(a, 1), a--);
                break
            }
        }
    },
    e.prototype.getAssets = function(t, e, o) {
        var a = "";
        o && (a = cc.js.getClassName(o));
        var i, r = n.TimeUtils.GetTimeBySecond(),
        s = r + 86400,
        c = t + "/" + e,
        l = this.isExistKey(c, a, this.temporaryCache),
        u = this.isExistKey(c, a, this.permanentCache),
        p = null,
        g = null;
        return - 1 != l && (this.temporaryCache[l].releaseTime = s, this.temporaryCache[l].createTime = r, this.temporaryCache[l].canRelease = !0, (i = this.temporaryCache[l].asset) && i.refCount > 0 && (p = this.temporaryCache[l])),
        -1 != u && (this.permanentCache[u].releaseTime = s, this.permanentCache[u].createTime = r, this.permanentCache[u].canRelease = !0, (i = this.permanentCache[u].asset) && i.refCount > 0 && (g = this.permanentCache[u])),
        p || g || null
    },
    e.prototype.isExistKey = function(t, e, o) {
        for (var a = 0; a < o.length; a++) {
            var i = o[a];
            if (i && i.cachekey == t && i.type == e) return a
        }
        return - 1
    },
    e.prototype.visitAsset = function(t, e) {
        if (t._uuid) e.push(t._uuid);
        else if (t instanceof cc.SpriteFrame) {
            var o, a = t;
            a._original ? (o = a._original._texture) && e.push(o._uuid) : (o = a.getTexture()) && e.push(o._uuid)
        }
    },
    e.prototype.visitComponent = function(t, e) {
        for (var o = Object.getOwnPropertyNames(t), a = 0; a < o.length; a++) {
            var i = o[a];
            if ("node" !== i && "__eventTargets" !== i) {
                var r = t[i];
                if (r instanceof cc.NodePool) this.visitNodePool(r, e);
                else if ("object" == typeof r && r) if (Array.isArray(r)) for (var n = 0; n < r.length; n++)(c = r[n]) instanceof cc.Asset && this.visitAsset(c, e);
                else if (r.constructor && r.constructor !== Object) r instanceof cc.Asset && this.visitAsset(r, e);
                else {
                    var s = Object.getOwnPropertyNames(r);
                    for (n = 0; n < s.length; n++) {
                        var c; (c = r[s[n]]) instanceof cc.Asset && this.visitAsset(c, e)
                    }
                }
            }
        }
    },
    e.prototype.visitNode = function(t, e) {
        for (var o = 0; o < t._components.length; o++) this.visitComponent(t._components[o], e);
        for (o = 0; o < t._children.length; o++) this.visitNode(t._children[o], e)
    },
    e.prototype.visitNodePool = function(t, e) {
        for (var o = t._pool,
        a = 0; a < o.length; a++) {
            var i = o[a];
            this.visitNode(i, e)
        }
    },
    e.instance = null,
    e
} (r.default);
o.ResCacheMgr = l