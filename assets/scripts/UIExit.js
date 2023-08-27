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
var n = t("BaseUI"),
s = t("Appcfg"),
c = t("EventMgr"),
l = t("UIMgr"),
u = t("CacheUtils"),
p = t("Config"),
g = cc._decorator,
d = g.ccclass,
h = g.property,
f = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.sceneName = "Main",
        e.label = null,
        e.again = null,
        e.btnClose = null,
        e.text = "hello",
        e
    }
    return i(e, t),
    e.prototype.onLoad = function() {
        c.EventMgr.getInstance().off(s.BaseEventName.GoGame, this, this.goGame)
    },
    e.prototype.start = function() {
        null == u.CacheUtils.getData(p.GameConfig.AppCacheName + "gddsmnq") ? (u.CacheUtils.saveData(p.GameConfig.AppCacheName + "gddsmnq", "1"), this.btnClose.x = 0, this.again.active = !1) : this.again.active = !0,
        this.btnClose.on(cc.Node.EventType.TOUCH_END,
        function() {
            cc.game.end()
        }),
        this.goGame()
    },
    e.prototype.goGame = function() {
        var t = this;
        this.again.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.closeUI(),
            l.UIMgr.getInstance().openUI(p.UIID.UIRealName, -1,
            function() {
                cc.director.loadScene("Main")
            })
        })
    },
    r([h(cc.Label)], e.prototype, "label", void 0),
    r([h(cc.Node)], e.prototype, "again", void 0),
    r([h(cc.Node)], e.prototype, "btnClose", void 0),
    r([h], e.prototype, "text", void 0),
    r([d], e)
} (n.default);
o.default = f