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
u = t("DataMgr"),
p = t("EquipMgr"),
g = t("PlayerMgr"),
d = cc._decorator,
h = d.ccclass,
f = d.property,
m = function(t) {
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
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.node.on(cc.Node.EventType.TOUCH_END,
        function() {
            var e = c.Utils.posTransform(t.node.parent, t.node.getPosition(), s.UIMgr.getInstance().getUIRoot(t.uiView)),
            o = g.PlayerMgr.getInstance().getAbType(),
            a = "D" == o || "B" == o ? l.UIID.UIEquipInfoNew: l.UIID.UIEquipInfo;
            s.UIMgr.getInstance().openUI(a, -1, t.equipData, t.equipData, e, p.EnumEquipInfo.EnumStrengthen, t.curBagIndex)
        })
    },
    e.prototype.initData = function(t, e, o) {
        this.curBagIndex = t,
        this.equipData = e,
        this.uiView = o,
        this.registerEvent(),
        this.registerBtnEvent()
    },
    e.prototype.strengthenEquip = function(t) {
        this.equipData && (this.refreshStrengthenRedDot(), t && t.id == this.equipData.id && t.type == this.equipData.type && t.IDCard == this.equipData.IDCard && (this.equipData.strengthenLv = t.strengthenLv, this.refreshStrengthenLv()))
    },
    e.prototype.refreshStrengthenLv = function() {
        this.equipData.strengthenLv > 0 ? (this.LabStrengthenLv.node.active = !0, this.LabStrengthenLv.string = "+" + this.equipData.strengthenLv) : this.LabStrengthenLv.node.active = !1
    },
    e.prototype.refreshStrengthenRedDot = function() {
        var t = 0,
        e = g.PlayerMgr.getInstance().getAbType();
        if ("D" == e || "B" == e) {
            var o = u.DataMgr.getInstance().getEquipCfg(this.equipData.id),
            a = c.Utils.getTabelArr1(o.consume),
            i = this.equipData.strengthenLv;
            i < o.strengthenMaxLv && (t = Number(a[Math.floor(i / 10)][1]))
        } else t = u.DataMgr.getInstance().getEquipStrengthenCfg(this.equipData.id, this.equipData.strengthenLv).consume;
        var r;
        if (r = g.PlayerMgr.getInstance().geUserData().getGoldNum() >= t, this.node.getChildByName("SpRedDot").active = r, !r && ("D" == e || "B" == e)) {
            for (var n = !1,
            s = p.default.getInstance().getOwmedEquipForEquipType(this.equipData.type), l = 0; l < s.length; l++) if (s[l].IDCard != this.equipData.IDCard && s[l].id == this.equipData.id && s[l].type == this.equipData.type && s[l].starLevel == this.equipData.starLevel) {
                n = !0;
                break
            }
            this.node.getChildByName("SpRedDot").active = n
        }
    },
    e.prototype.onDestroy = function() {
        n.EventMgr.getInstance().off(l.EventName.RefreshStrengthenLv, this, this.strengthenEquip)
    },
    r([f(cc.Label)], e.prototype, "LabStrengthenLv", void 0),
    r([h], e)
} (cc.Component);
o.default = m