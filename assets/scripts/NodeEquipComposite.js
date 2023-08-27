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
s = t("UIMgr"),
c = t("Config"),
l = t("EquipMgr"),
u = t("PlayerMgr"),
p = cc._decorator,
g = p.ccclass,
d = (p.property,
function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.uiView = c.UIID.UIEquip,
        e.curBagIndex = 1,
        e.equipData = null,
        e
    }
    return i(e, t),
    e.prototype.start = function() {},
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.node.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.node.getChildByName("SpMask").active || (t.equipData.starLevel >= 5 ? s.UIMgr.getInstance().openUI(c.UIID.UITips, -1, "该装备已达到最大星级") : n.EventMgr.getInstance().emit(c.EventName.PlaceCompositeEquip, t.curBagIndex, t.equipData))
        })
    },
    e.prototype.initData = function(t, e, o) {
        this.curBagIndex = t,
        this.equipData = e,
        this.uiView = o,
        this.registerBtnEvent(),
        this.equipHCForRedDot()
    },
    e.prototype.refresData = function(t, e) {
        this.curBagIndex = t,
        this.equipData = e
    },
    e.prototype.equipHCForRedDot = function() {
        var t = u.PlayerMgr.getInstance().getAbType();
        if ("D" == t || "B" == t) {
            for (var e = !1,
            o = l.default.getInstance().getOwmedEquipForEquipType(this.equipData.type), a = 0; a < o.length; a++) if (o[a].IDCard != this.equipData.IDCard && o[a].id == this.equipData.id && o[a].type == this.equipData.type && o[a].starLevel == this.equipData.starLevel) {
                e = !0;
                break
            }
            this.node.getChildByName("SpRedDot").active = e
        }
    },
    r([g], e)
} (cc.Component));
o.default = d