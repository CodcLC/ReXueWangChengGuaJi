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
s = t("EventMgr"),
c = t("Utils"),
l = t("Main"),
u = t("Config"),
p = t("DataMgr"),
g = t("GameDataMgr"),
d = t("GoodsManager"),
h = t("PlayerMgr"),
f = cc._decorator,
m = f.ccclass,
y = f.property,
v = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.NodeSkillBookShow = null,
        e.BtnClose = null,
        e.LayoutBg = null,
        e.SpFetterIcon = null,
        e.LabFetterName = null,
        e.LabFetterDec = null,
        e.LayoutSuit1 = null,
        e.LayoutSuit2 = null,
        e.LayoutSuit3 = null,
        e.LayoutSkillBook = null,
        e.curFetterId = 1,
        e.pos = cc.Vec3.ZERO,
        e
    }
    return i(e, t),
    e.prototype.init = function(t, e) {
        this.curFetterId = t || 1,
        this.pos = e || cc.Vec3.ZERO
    },
    e.prototype.start = function() {
        l.default.instance.controlObjectsAnim(!0),
        s.EventMgr.getInstance().emit(u.EventName.ShowUITop, !1),
        this.registerBtnEvent(),
        this.initData(),
        this.initView(),
        this.guideShow()
    },
    e.prototype.guideShow = function() {},
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnClose.on(cc.Node.EventType.TOUCH_END,
        function() {
            console.log("关闭羁绊信息界面"),
            t.closeView(),
            l.default.instance.controlObjectsAnim(!1)
        }),
        this.LayoutBg.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.closeView(),
            l.default.instance.controlObjectsAnim(!1)
        })
    },
    e.prototype.callbackBtnClose = function() {
        console.log("关闭羁绊信息界面"),
        this.closeView(),
        l.default.instance.controlObjectsAnim(!1)
    },
    e.prototype.initData = function() {
        this.curfetterData = p.DataMgr.getInstance().getFetter(this.curFetterId)
    },
    e.prototype.initView = function() {
        this.initLayoutBgPos(),
        this.initFetterInfo(),
        this.initSuitInfo(),
        this.createSkillBook()
    },
    e.prototype.initLayoutBgPos = function() {
        this.pos.x > 0 ? this.pos.y > 0 ? this.LayoutBg.setAnchorPoint(cc.v2(1, 1)) : this.LayoutBg.setAnchorPoint(cc.v2(1, 0)) : this.pos.y > 0 ? this.LayoutBg.setAnchorPoint(cc.v2(0, 1)) : this.LayoutBg.setAnchorPoint(cc.v2(0, 0)),
        this.LayoutBg.position = this.pos
    },
    e.prototype.initFetterInfo = function() {
        var t = this;
        this.loadSpriteFrame(this.curfetterData.bundle, this.curfetterData.iconImg,
        function(e) {
            t.SpFetterIcon.spriteFrame = e
        }),
        this.LabFetterName.string = this.curfetterData.name,
        this.LabFetterDec.string = this.curfetterData.fetterFunDec
    },
    e.prototype.initSuitInfo = function() {
        for (var t = g.default.getInstance().getSuitCountForFetterId(this.curFetterId), e = 1; e <= 3; e++) t == e ? (this["LayoutSuit" + e].getChildByName("LabSuit").color = cc.color(255, 228, 76), this["LayoutSuit" + e].getChildByName("LabSuitDec").color = cc.color(255, 228, 76)) : this["LayoutSuit" + e].opacity = 127;
        var o = c.Utils.getTabelArr(this.curfetterData.fetterCount),
        a = c.Utils.getTabelArr(this.curfetterData.fetterFun);
        this.LayoutSuit1.getChildByName("LabSuit").getComponent(cc.Label).string = "(" + o[0] + ")";
        var i = this.curfetterData.fetterDec;
        i = i.replace("%s", a[0]),
        this.LayoutSuit1.getChildByName("LabSuitDec").getComponent(cc.Label).string = "" + i,
        this.LayoutSuit2.getChildByName("LabSuit").getComponent(cc.Label).string = "(" + o[1] + ")";
        var r = this.curfetterData.fetterDec;
        r = r.replace("%s", a[1]),
        this.LayoutSuit2.getChildByName("LabSuitDec").getComponent(cc.Label).string = "" + r,
        this.LayoutSuit3.getChildByName("LabSuit").getComponent(cc.Label).string = "(" + o[2] + ")";
        var n = this.curfetterData.fetterDec;
        n = n.replace("%s", a[2]),
        this.LayoutSuit3.getChildByName("LabSuitDec").getComponent(cc.Label).string = "" + n
    },
    e.prototype.createSkillBook = function() {
        for (var t = c.Utils.getTabelArr(this.curfetterData.allSkillBookId), e = 0; e < t.length; e++) {
            var o = cc.instantiate(this.NodeSkillBookShow);
            o.parent = this.LayoutSkillBook,
            this.loadSkillBook(o, Number(t[e]))
        }
        this.LayoutSkillBook.getComponent(cc.Layout).updateLayout()
    },
    e.prototype.loadSkillBook = function(t, e) {
        if (cc.isValid(t)) {
            var o = p.DataMgr.getInstance().getSkillBook(e);
            p.DataMgr.getInstance().getSkillQuality(o.qualityId),
            h.PlayerMgr.getInstance().getTrackData().getAbType(),
            this.loadSpriteFrame("iconImg", o.SkillIcon,
            function(e) {
                t.getChildByName("NodeSkillBook").getChildByName("SpSkillBook").getComponent(cc.Sprite).spriteFrame = e
            }),
            t.getChildByName("NodeSkillBook").getChildByName("LabName").active = !1,
            t.getChildByName("NodeSkillBook").getChildByName("SpSkillBook").scale = .6,
            t.getChildByName("NodeSkillBook").getChildByName("LabName").getComponent(cc.Label).string = o.name,
            t.getChildByName("NodeSkillBook").getChildByName("LabSkillBookName").getComponent(cc.Label).string = o.name,
            t.getChildByName("NodeSkillBook").getChildByName("LabSkillBookName").color = d.default.getInstance().seleColor(o.qualityId);
            var a = h.PlayerMgr.getInstance().geUserData().isExistSkillBookId(e);
            t.getChildByName("SpLock").active = -1 == a,
            -1 == g.default.getInstance().isExistSkillBookId(e) ? (t.getChildByName("NodeSkillBook").opacity = 127, t.zIndex = o.qualityId + 5) : t.zIndex = o.qualityId
        }
    },
    e.prototype.closeView = function() {
        this.closeUI()
    },
    r([y(cc.Prefab)], e.prototype, "NodeSkillBookShow", void 0),
    r([y(cc.Node)], e.prototype, "BtnClose", void 0),
    r([y(cc.Node)], e.prototype, "LayoutBg", void 0),
    r([y(cc.Sprite)], e.prototype, "SpFetterIcon", void 0),
    r([y(cc.Label)], e.prototype, "LabFetterName", void 0),
    r([y(cc.Label)], e.prototype, "LabFetterDec", void 0),
    r([y(cc.Node)], e.prototype, "LayoutSuit1", void 0),
    r([y(cc.Node)], e.prototype, "LayoutSuit2", void 0),
    r([y(cc.Node)], e.prototype, "LayoutSuit3", void 0),
    r([y(cc.Node)], e.prototype, "LayoutSkillBook", void 0),
    r([m], e)
} (n.default);
o.default = v