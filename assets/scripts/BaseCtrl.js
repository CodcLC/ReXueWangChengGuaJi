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
}),
r = this && this.__decorate ||
function(t, e, o, a) {
    var i, r = arguments.length,
    n = r < 3 ? e: null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, a);
    else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (n = (r < 3 ? i(n) : r > 3 ? i(e, o, n) : i(e, o)) || n);
    return r > 3 && n && Object.defineProperty(e, o, n),
    n
};
Object.defineProperty(o, "__esModule", {
    value: !0
});
var n = t("EventMgr"),
s = t("ResCacheMgr"),
c = t("ResourceMgr"),
l = cc._decorator,
u = l.ccclass,
p = l.property,
g = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.cache = !1,
        e.resArray = [],
        e.eventList = [],
        e.isDestroy = !1,
        e
    }
    return i(e, t),
    e.prototype.onLoad = function() {},
    e.prototype.addEvent = function(t, e) {
        n.EventMgr.getInstance().on(t, this, e);
        var o = new Map;
        o.set(t, e),
        this.eventList.push(o)
    },
    e.prototype.sendEvent = function(t, e, o, a, i, r) {
        n.EventMgr.getInstance().emit(t, e, o, a, i, r)
    },
    e.prototype.loadSpriteFrame = function(t, e, o, a, i) {
        var r = this;
        void 0 === a && (a = !0),
        void 0 === i && (i = 10),
        c.ResourceMgr.getInstance().loadSpriteframe(t, e,
        function(i) {
            a && r.addRes(t, e, cc.SpriteFrame),
            r.isDestroy || o(i)
        },
        a, i)
    },
    e.prototype.loadRemoteSpriteFrame = function(t, e, o, a) {
        var i = this;
        void 0 === o && (o = !0),
        void 0 === a && (a = 10),
        c.ResourceMgr.getInstance().loadRemoteSpriteFrame(t,
        function(a) {
            o && i.addRes("", t, cc.SpriteFrame),
            i.isDestroy || e(a)
        },
        o, a)
    },
    e.prototype.loadPrefab = function(t, e, o, a, i) {
        var r = this;
        void 0 === a && (a = !0),
        void 0 === i && (i = 10),
        c.ResourceMgr.getInstance().loadRes(t, e, cc.Prefab,
        function(i) {
            a && r.addRes(t, e, cc.Prefab),
            r.isDestroy || o(i)
        },
        a, i)
    },
    e.prototype.loadTexture2D = function(t, e, o, a, i) {
        var r = this;
        void 0 === a && (a = !0),
        void 0 === i && (i = 10),
        c.ResourceMgr.getInstance().loadRes(t, e, cc.Texture2D,
        function(i) {
            a && r.addRes(t, e, cc.Texture2D),
            r.isDestroy || o(i)
        },
        a, i)
    },
    e.prototype.loadResFromBundle = function(t, e, o, a, i, r) {
        var n = this;
        void 0 === i && (i = !0),
        void 0 === r && (r = 10),
        c.ResourceMgr.getInstance().loadRes(t, e, o,
        function(r) {
            i && n.addRes(t, e, o),
            n.isDestroy || a(r)
        },
        i, r)
    },
    e.prototype.loadFromRes = function(t, e, o, a) {
        var i = this;
        void 0 === a && (a = 10),
        c.ResourceMgr.getInstance().loadFromRes(t, e,
        function(a) {
            i.addRes("", t, e),
            i.isDestroy || o(a)
        })
    },
    e.prototype.addRes = function(t, e, o) {
        if (this.resArray) {
            var a = s.ResCacheMgr.getInstance().isExistKey(t + "/" + e, o.name, this.resArray);
            if ( - 1 != a) this.resArray[a].defCount || (this.resArray[a].defCount = 0),
            this.resArray[a].defCount++;
            else {
                var i = new c.ResCacheKey(t, e, o);
                this.resArray.push(i)
            }
        }
    },
    e.prototype.release = function() { ! this.cache && this.resArray && (s.ResCacheMgr.getInstance().refreshTime(this.resArray), this.resArray = [])
    },
    e.prototype.setListenerUI = function() {},
    e.prototype.onDestroy = function() {
        var t = this;
        if (this.eventList && this.eventList.length > 0) {
            for (var e = 0; e < this.eventList.length; e++) this.eventList[e].forEach(function(e, o) {
                n.EventMgr.getInstance().off(o, t, e)
            });
            this.eventList = null
        }
        this.isDestroy = !0,
        this.release()
    },
    r([p({
        displayName: "是否需要缓存资源"
    })], e.prototype, "cache", void 0),
    r([u], e)
} (cc.Component);
o.default = g