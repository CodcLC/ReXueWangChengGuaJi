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
s = t("CardMgr"),
c = cc._decorator,
l = c.ccclass,
u = c.property,
p = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.IDname = null,
        e.IDcard = null,
        e.btnStart = null,
        e
    }
    return i(e, t),
    e.prototype.init = function(t) {
        this.cb = t
    },
    e.prototype.start = function() {
        var t = this;
        this.btnStart.on(cc.Node.EventType.TOUCH_END,
        function() {
            s.default.getInstance().vifyCardId(t.IDname.string, t.IDcard.string,
            function(e) {
                e && (t.closeUI(), t.cb && t.cb())
            })
        })
    },
    r([u(cc.EditBox)], e.prototype, "IDname", void 0),
    r([u(cc.EditBox)], e.prototype, "IDcard", void 0),
    r([u(cc.Node)], e.prototype, "btnStart", void 0),
    r([l], e)
} (n.default);
o.default = p