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
var n = t("Appcfg"),
s = t("LanguageMgr"),
c = cc._decorator,
l = c.ccclass,
u = c.property,
p = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.en = null,
        e.jp = null,
        e.fz = null,
        e
    }
    return i(e, t),
    e.prototype.start = function() {
        this.en && (this.en.active = !1),
        this.jp && (this.jp.active = !1),
        this.fz && (this.fz.active = !1);
        var t = this.node.getComponent(cc.Sprite);
        s.LanguageMgr.getInstance().getCurrentLanguage() == n.LanguageType.en ? (this.en.active = !0, t && (t.spriteFrame = null)) : s.LanguageMgr.getInstance().getCurrentLanguage() == n.LanguageType.jp ? (this.jp.active = !0, t && (t.spriteFrame = null)) : s.LanguageMgr.getInstance().getCurrentLanguage() == n.LanguageType.zh_tw && this.fz && t && (this.fz.active = !0, t.spriteFrame = null)
    },
    r([u({
        type: cc.Node,
        tooltip: "英文"
    })], e.prototype, "en", void 0),
    r([u({
        type: cc.Node,
        tooltip: "日语"
    })], e.prototype, "jp", void 0),
    r([u({
        type: cc.Node,
        tooltip: "繁体"
    })], e.prototype, "fz", void 0),
    r([l], e)
} (cc.Component);
o.default = p