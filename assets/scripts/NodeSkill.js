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
var n = t("UIMgr"),
s = t("Config"),
c = cc._decorator,
l = c.ccclass,
u = (c.property,
function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.skillId = -1,
        e
    }
    return i(e, t),
    e.prototype.onLoad = function() {},
    e.prototype.start = function() {},
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.node.on(cc.Node.EventType.TOUCH_END,
        function() {
            n.UIMgr.getInstance().openUI(s.UIID.UISkillInfo, -1, t.skillId)
        })
    },
    e.prototype.initData = function(t) {
        this.skillId = t,
        this.registerBtnEvent()
    },
    r([l], e)
} (cc.Component));
o.default = u