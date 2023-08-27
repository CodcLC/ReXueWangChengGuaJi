var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.ResourceMgr = o.BundleCache = o.ResCacheKey = o.ResCache = void 0;
var a = t("BasePlatform"),
i = t("ArgsParseUtils"),
r = t("TimeUtils"),
n = t("LogMgr"),
s = t("PlatformManager"),
c = t("ResCacheMgr"),
l = function() {
    function t(t, e, o, a, i, n) {
        this.releaseTime = o,
        this.cacheTime = a,
        this.asset = n,
        this.type = cc.js.getClassName(i),
        this.cachekey = t + "/" + e,
        this.defCount = 0,
        this.lifeTime = 3,
        this.createTime = r.TimeUtils.GetTimeBySecond(),
        this.canRelease = !0
    }
    return t.prototype.setLifeTime = function(t) {
        this.lifeTime = t
    },
    t
} ();
o.ResCache = l;
o.ResCacheKey = function(t, e, o) {
    this.defCount = 0,
    this.type = cc.js.getClassName(o),
    this.cachekey = t + "/" + e,
    this.defCount = 1
};
o.BundleCache = function(t, e, o) {
    this.bundleName = t,
    this.dateTime = e,
    this.cacheTime = o
};
var u = function() {
    function t() {}
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.getBundle = function(t) {
        return cc.assetManager.getBundle(t)
    },
    t.prototype.loadBundle = function(t, e) {
        var o = cc.assetManager.getBundle(t);
        null == o ? cc.assetManager.loadBundle(t,
        function(o, a) {
            o ? n.LogMgr.getInstance().error(t + "bundle load error :" + o) : (n.LogMgr.getInstance().debug("加载bundle:" + t), e(a))
        }) : e(o)
    },
    t.prototype.preloadFromBundle = function(t, e, o) {
        t.preload(e, cc.Asset,
        function(t, e) {
            o && o(t, e)
        })
    },
    t.prototype.preload = function(t, e) {
        var o = cc.assetManager.getBundle(t);
        o ? e && o.preload(e) : cc.assetManager.loadBundle(t,
        function(t, o) {
            t || e && o.preload(e)
        })
    },
    t.prototype.relLoadBundle = function(t, e) {
        for (var o = function(o) {
            var i = t[o];
            a.loadBundle(i,
            function(t) {
                if (e) {
                    var a = e.get(o);
                    t.load(a)
                }
            })
        },
        a = this, i = 0; i < t.length; i++) o(i)
    },
    t.prototype.loadFromRes = function(t, e, o) {
        this.loadRes("resources", t, e, o)
    },
    t.prototype.loadDirFrom = function(t, e) {
        this.loadDir("resources", t, e)
    },
    t.prototype.loadSpriteframe = function() {
        var e = i.ArgsParseUtils._makeloadSpriteFrameResrgs.apply(this, arguments),
        o = e.bundle,
        a = e.path,
        s = e.callback,
        u = e.saveKey,
        p = r.TimeUtils.GetTimeBySecond() + 86400,
        g = c.ResCacheMgr.getInstance().getAssets(o, a, cc.SpriteFrame);
        if (g && g.asset) return g.asset.addRef(),
        g.cacheTime = p,
        void s(g.asset);
        var d = cc.assetManager.getBundle(o),
        h = new l(o, a, p, e.cacheTme, cc.SpriteFrame);
        null == d ? t.getInstance().loadBundle(o,
        function(t) {
            t.load(a, cc.SpriteFrame,
            function(t, i) {
                t ? n.LogMgr.getInstance().error("loadres error path:" + a + "  error:", t.message) : (i.addRef(), h.asset = i, c.ResCacheMgr.getInstance().addAssets(h, e.autoRelese), u && c.ResCacheMgr.getInstance().addAssetKeyToMap(u, o, a, cc.SpriteFrame), s && s(i))
            })
        }) : d.load(a, cc.SpriteFrame,
        function(t, i) {
            t ? n.LogMgr.getInstance().error("loadres error path:" + a + "  error:" + t) : (i.addRef(), h.asset = i, c.ResCacheMgr.getInstance().addAssets(h, e.autoRelese), u && c.ResCacheMgr.getInstance().addAssetKeyToMap(u, o, a, cc.SpriteFrame), s && s(i))
        })
    },
    t.prototype.loadRemoteSpriteFrame = function(t, e, o, i) {
        void 0 === o && (o = !1),
        void 0 === i && (i = 10);
        var n = r.TimeUtils.GetTimeBySecond() + 86400,
        u = c.ResCacheMgr.getInstance().getAssets("", t, cc.Texture2D);
        if (u && u.asset) return u.asset.addRef(),
        void e(u.asset);
        var p = new l("", t, n, i, cc.Texture2D);
        t.startsWith("http") && (s.PlatformManager.currentPlatform == a.Platform.BYTEDANCE ? cc.assetManager.loadRemote(t, {
            ext: ".head"
        },
        function(t, a) {
            if (!t) {
                a.addRef(),
                p.asset = a,
                c.ResCacheMgr.getInstance().addAssets(p, o);
                var i = new cc.SpriteFrame(a);
                e(i)
            }
        }) : cc.assetManager.loadRemote(t,
        function(t, a) {
            if (!t) {
                a.addRef(),
                p.asset = a,
                c.ResCacheMgr.getInstance().addAssets(p, o);
                var i = new cc.SpriteFrame(a);
                e(i)
            }
        }))
    },
    t.prototype.loadRes = function() {
        var e = i.ArgsParseUtils._makeLoadResArgs.apply(this, arguments),
        o = e.bundle,
        a = e.path,
        s = e.type,
        u = e.callback,
        p = e.saveKey;
        if ("cc.Asset" != cc.js.getClassName(s)) {
            var g = r.TimeUtils.GetTimeBySecond() + 86400,
            d = c.ResCacheMgr.getInstance().getAssets(o, a, s);
            if (d && d.asset) return d.asset.addRef(),
            void u(d.asset);
            var h = cc.assetManager.getBundle(o),
            f = new l(o, a, g, e.cacheTme, s);
            null == h ? t.getInstance().loadBundle(o,
            function(t) {
                t.load(a, s,
                function(t, i) {
                    t ? n.LogMgr.getInstance().error("loadres error path:" + a + "  error:", t.message) : (i.addRef(), f.asset = i, c.ResCacheMgr.getInstance().addAssets(f, e.autoRelese), p && c.ResCacheMgr.getInstance().addAssetKeyToMap(p, o, a, s), u && u(i))
                })
            }) : h.load(a, s,
            function(t, i) {
                t ? n.LogMgr.getInstance().error("loadres error path:" + a + "  error:" + t) : (i.addRef(), f.asset = i, c.ResCacheMgr.getInstance().addAssets(f, e.autoRelese), p && c.ResCacheMgr.getInstance().addAssetKeyToMap(p, o, a, s), u && u(i))
            })
        } else console.error("请传入具体资源类型，不能是基类asset,路径:", o + "/" + a)
    },
    t.prototype.loadDir = function(t, e, o) {
        var a = cc.assetManager.getBundle(t);
        null == a ? cc.assetManager.loadBundle(t,
        function(t, a) {
            a.loadDir(e, cc.Asset,
            function(t, a) {
                t ? n.LogMgr.getInstance().error("loadres error path:" + e + "  error:" + t) : o && o(a)
            })
        }) : a.loadDir(e, cc.Asset,
        function(t, a) {
            t ? n.LogMgr.getInstance().error("loadres error path:" + e + "  error:" + t) : o && o(a)
        })
    },
    t.prototype.releaseByBundle = function(t, e) {
        t.release(e)
    },
    t.prototype.releaseByBname = function(t, e) {
        var o = cc.assetManager.getBundle(t);
        o && o.release(e)
    },
    t.prototype.releaseBundle = function(t) {
        var e = cc.assetManager.getBundle(t);
        e && cc.assetManager.removeBundle(e)
    },
    t.instance = null,
    t
} ();
o.ResourceMgr = u