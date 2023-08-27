var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.SpineUtils = o.SpineInfo = void 0;
var a = t("ResourceMgr");
o.SpineInfo = function() {};
var i = function() {
    function t() {}
    return t.changePartImgBundle = function(t, e, o, i) {
        var r = this;
        a.ResourceMgr.getInstance().loadRes(i.imgbundle, i.imgPath, cc.Texture2D,
        function(a) {
            if (cc.sys.isNative) {
                var n = new middleware.Texture2D;
                n.setPixelsHigh(a.height),
                n.setPixelsWide(a.width),
                n.setNativeTexture(a.getImpl()),
                t.updateRegion(e, n, i.diffWidth, i.diffHeight, i.offsetX, i.offsetY)
            } else {
                a.handleLoadedTexture(!0);
                var s = r.getAtt(t, e, o),
                c = r.CreateRegion(a, i);
                s.region = c,
                s && (s.setRegion(c), s.updateOffset())
            }
        })
    },
    t.changePartImgTexture = function(t, e, o, a, i) {
        if (a.handleLoadedTexture(!0), cc.sys.isNative) {
            var r = new middleware.Texture2D;
            r.setPixelsHigh(a.height),
            r.setPixelsWide(a.width),
            r.setNativeTexture(a.getImpl()),
            t.updateRegion(e, r, i.diffWidth, i.diffHeight, i.offsetX, i.offsetY)
        } else {
            var n = this.getAtt(t, e, o),
            s = this.CreateRegion(a, i);
            n.region = s,
            n && (n.setRegion(s), this.updateSize(n), n.updateOffset())
        }
    },
    t.getAtt = function(t, e, o) {
        t.findSlot(e);
        var a = t.skeletonData.getRuntimeData(),
        i = a.findSlotIndex(e);
        return a.findSkin("default").getAttachment(i, o)
    },
    t.CreateRegion = function(t, e) {
        var o = new sp.SkeletonTexture;
        o.setRealTexture(t);
        var a = new sp.spine.TextureAtlasPage;
        a.name = t.name,
        a.uWrap = sp.spine.TextureWrap.ClampToEdge,
        a.vWrap = sp.spine.TextureWrap.ClampToEdge,
        a.texture = o,
        a.texture.setWraps(a.uWrap, a.vWrap),
        a.width = t.width,
        a.height = t.height;
        var i = new sp.spine.TextureAtlasRegion;
        return i.page = a,
        i.width = t.width,
        i.height = t.height,
        i.originalWidth = e.diffWidth ? t.width + e.diffWidth: t.width,
        i.originalHeight = e.diffHeight ? t.height + e.diffHeight: t.height,
        i.offsetX = e.offsetX ? e.offsetX: 0,
        i.offsetY = e.offsetY ? e.offsetY: 0,
        i.rotate = !1,
        i.u = 0,
        i.v = 0,
        i.u2 = 1,
        i.v2 = 1,
        i.texture = o,
        i
    },
    t.updateSize = function() {},
    t
} ();
o.SpineUtils = i