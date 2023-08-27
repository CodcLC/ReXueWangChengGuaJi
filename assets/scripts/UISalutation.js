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
s = t("UIMgr"),
c = t("Utils"),
l = t("Main"),
u = t("Config"),
p = t("DataMgr"),
g = t("EquipMgr"),
d = t("PlayerMgr"),
h = t("TipsMgr"),
f = cc._decorator,
m = f.ccclass,
y = f.property,
v = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.SpNotGet = null,
        e.SpGet = null,
        e.SpWear = null,
        e.NodeSalutation = null,
        e.contentSalutation = null,
        e.BtnBack = null,
        e.BtnWear = null,
        e.SpSalutation = null,
        e.LabDec = null,
        e.LabProp1 = null,
        e.LabProp2 = null,
        e.LayoutBtn = null,
        e.curTurnView = u.UIID.UIHome,
        e.allSalutationArr = [],
        e.curSeleIndex = 0,
        e
    }
    return i(e, t),
    e.prototype.init = function(t) {
        this.curTurnView = t || u.UIID.UIHome
    },
    e.prototype.onLoad = function() {},
    e.prototype.start = function() {
        this.registerBtnEvent(),
        this.initData(),
        this.initView()
    },
    e.prototype.initData = function() {
        this.refreshTitleSave()
    },
    e.prototype.refreshTitleSave = function() {
        d.PlayerMgr.getInstance().geUserData().autoAddSalutation(),
        d.PlayerMgr.getInstance().geUserData().setIsNewSalutation(!1),
        this.sendEvent(u.EventName.RefreshSalutationRedDot)
    },
    e.prototype.initView = function() {
        this.loadSalutationItem(),
        this.refreshSalutationView(this.curSeleIndex)
    },
    e.prototype.refreshSalutationView = function(t) {
        var e = this,
        o = t + 1,
        a = d.PlayerMgr.getInstance().geUserData(),
        i = p.DataMgr.getInstance().getSalutation(o);
        this.loadSpriteFrame(i.titleBundle, i.ResourcesRoute,
        function(t) {
            e.SpSalutation.getComponent(cc.Sprite).spriteFrame = t
        });
        var r = this.SpSalutation.getComponent(cc.Animation);
        this.loadResFromBundle(i.AnimBundle, i.AnimName, cc.AnimationClip,
        function(t) {
            r.addClip(t),
            r.play(i.AnimName).repeatCount = 1e5
        });
        var n = i.Desc.replace("%s", "" + a.getCompletedTaskCount());
        this.LabDec.string = n;
        var s = c.Utils.getTabelArr(i.TitleAttribute1);
        this.LabProp1.string = g.default.getInstance().getPropNameForPropType(Number(s[0])) + "：" + Number(s[1]) + g.default.getInstance().getPropPercent(Number(s[0]));
        var l = c.Utils.getTabelArr(i.TitleAttribute2);
        this.LabProp2.string = g.default.getInstance().getPropNameForPropType(Number(l[0])) + "：" + Number(l[1]) + g.default.getInstance().getPropPercent(Number(l[0]));
        var u = a.isExistSalutation(o),
        h = a.getWearSalutationId() == o;
        this.BtnWear.getComponent(cc.Button).interactable = !!u && !h
    },
    e.prototype.loadSalutationItem = function() {
        for (var t = this,
        e = d.PlayerMgr.getInstance().geUserData(), o = p.DataMgr.getInstance().getSalutationCfg(), a = function(a) {
            var r = cc.instantiate(i.NodeSalutation);
            r.parent = i.contentSalutation,
            i.allSalutationArr.push(r),
            a == i.curSeleIndex && (r.getChildByName("SpSele").active = !0);
            var n = a + 1,
            s = r.getChildByName("SpState").getComponent(cc.Sprite);
            e.getWearSalutationId() == n ? s.spriteFrame = i.SpWear: e.isExistSalutation(n) ? s.spriteFrame = i.SpGet: s.spriteFrame = i.SpNotGet,
            i.loadSpriteFrame(o[a].titleBundle, o[a].ResourcesRoute,
            function(t) {
                r.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t
            });
            var c = r.getChildByName("SpIcon").getComponent(cc.Animation);
            i.loadResFromBundle(o[a].AnimBundle, o[a].AnimName, cc.AnimationClip,
            function(t) {
                c.addClip(t),
                c.play(o[a].AnimName).repeatCount = 1e5
            }),
            r.on(cc.Node.EventType.TOUCH_END,
            function() {
                t.refreshSalutation(a)
            })
        },
        i = this, r = 0; r < o.length; r++) a(r)
    },
    e.prototype.refreshSalutation = function(t) {
        if (t != this.curSeleIndex) {
            this.curSeleIndex = t;
            for (var e = 0; e < this.allSalutationArr.length; e++) cc.isValid(this.allSalutationArr[e]) && (t == e ? (this.allSalutationArr[e].getChildByName("SpSele").active = !0, this.refreshSalutationView(t)) : this.allSalutationArr[e].getChildByName("SpSele").active = !1)
        }
    },
    e.prototype.refreshSalutation1 = function(t) {
        var e = d.PlayerMgr.getInstance().geUserData();
        this.curSeleIndex = t;
        for (var o = 0; o < this.allSalutationArr.length; o++) if (cc.isValid(this.allSalutationArr[o])) {
            var a = this.allSalutationArr[o].getChildByName("SpState").getComponent(cc.Sprite);
            e.getWearSalutationId() == o + 1 ? a.spriteFrame = this.SpWear: e.isExistSalutation(o + 1) ? a.spriteFrame = this.SpGet: a.spriteFrame = this.SpNotGet
        }
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnBack.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.closeView()
        }),
        this.BtnWear.on(cc.Node.EventType.TOUCH_END,
        function() {
            if (t.BtnWear.getComponent(cc.Button).interactable) {
                t.BtnWear.getComponent(cc.Button).interactable = !1;
                var e = t.curSeleIndex + 1;
                d.PlayerMgr.getInstance().geUserData().setWearSalutation(e),
                t.refreshSalutation1(t.curSeleIndex),
                h.default.getInstance().playFightTips(t.node),
                s.UIMgr.getInstance().openUI(u.UIID.UITips, u.UIID.UISalutation, "穿戴称号成功"),
                l.default.instance.refreshWearSalutation(),
                t.sendEvent(u.EventName.RefreshSalutation),
                t.sendEvent(u.EventName.RefreshEquipViewInfo)
            }
        })
    },
    e.prototype.closeView = function() {
        this.closeUI()
    },
    r([y(cc.SpriteFrame)], e.prototype, "SpNotGet", void 0),
    r([y(cc.SpriteFrame)], e.prototype, "SpGet", void 0),
    r([y(cc.SpriteFrame)], e.prototype, "SpWear", void 0),
    r([y(cc.Node)], e.prototype, "NodeSalutation", void 0),
    r([y(cc.Node)], e.prototype, "contentSalutation", void 0),
    r([y(cc.Node)], e.prototype, "BtnBack", void 0),
    r([y(cc.Node)], e.prototype, "BtnWear", void 0),
    r([y(cc.Node)], e.prototype, "SpSalutation", void 0),
    r([y(cc.RichText)], e.prototype, "LabDec", void 0),
    r([y(cc.Label)], e.prototype, "LabProp1", void 0),
    r([y(cc.Label)], e.prototype, "LabProp2", void 0),
    r([y(cc.Node)], e.prototype, "LayoutBtn", void 0),
    r([m], e)
} (n.default);
o.default = v