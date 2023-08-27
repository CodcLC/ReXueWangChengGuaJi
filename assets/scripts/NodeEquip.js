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
c = t("Utils"),
l = t("Config"),
u = t("EquipMgr"),
p = t("PlayerMgr"),
g = cc._decorator,
d = g.ccclass,
h = g.property,
f = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.LabStrengthenLv = null,
        e.uiView = l.UIID.UIEquip,
        e.curBagIndex = 1,
        e.equipData = null,
        e
    }
    return i(e, t),
    e.prototype.start = function() {},
    e.prototype.registerEvent = function() {
        n.EventMgr.getInstance().on(l.EventName.RefreshStrengthenLv, this, this.strengthenEquip)
    },
    e.prototype.strengthenEquip = function(t) {
        this.equipData && t && t.id == this.equipData.id && t.type == this.equipData.type && t.IDCard == this.equipData.IDCard && (this.equipData.strengthenLv = t.strengthenLv, this.refreshStrengthenLv())
    },
    e.prototype.refreshStrengthenLv = function() {
        this.equipData.strengthenLv > 0 ? (this.LabStrengthenLv.node.active = !0, this.LabStrengthenLv.string = "+" + this.equipData.strengthenLv) : this.LabStrengthenLv.node.active = !1
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.node.on(cc.Node.EventType.TOUCH_END,
        function() {
            if (console.log("当前点击坑位：", t.curBagIndex), !(p.PlayerMgr.getInstance().geUserData().getBagIndexCount() < t.curBagIndex + 1)) {
                var e = u.default.getInstance().getWearEquipData(t.equipData.type),
                o = c.Utils.posTransform(t.node.parent, t.node.getPosition(), s.UIMgr.getInstance().getUIRoot(t.uiView)),
                a = p.PlayerMgr.getInstance().getAbType(),
                i = "D" == a || "B" == a ? l.UIID.UIEquipInfoNew: l.UIID.UIEquipInfo;
                s.UIMgr.getInstance().openUI(i, -1, e, t.equipData, o, u.EnumEquipInfo.EnumSell, t.curBagIndex)
            }
        })
    },
    e.prototype.initData = function(t, e, o) {
        this.curBagIndex = t,
        this.equipData = e,
        this.uiView = o,
        this.registerEvent(),
        this.registerBtnEvent(),
        this.refreshStrengthenRedDot()
    },
    e.prototype.refresData = function(t, e) {
        this.curBagIndex = t,
        this.equipData = e
    },
    e.prototype.refreshStrengthenRedDot = function() {
        if ("D" == p.PlayerMgr.getInstance().getAbType()) {
            for (var t = !1,
            e = u.default.getInstance().getOwmedEquipForEquipType(this.equipData.type), o = 0; o < e.length; o++) if (e[o].IDCard != this.equipData.IDCard && e[o].id == this.equipData.id && e[o].type == this.equipData.type && e[o].starLevel == this.equipData.starLevel) {
                t = !0;
                break
            }
            this.node.getChildByName("SpRedDot").active = t
        }
    },
    e.prototype.onDestroy = function() {
        n.EventMgr.getInstance().off(l.EventName.RefreshStrengthenLv, this, this.strengthenEquip)
    },
    r([h(cc.Label)], e.prototype, "LabStrengthenLv", void 0),
    r([d], e)
} (cc.Component);
o.default = f