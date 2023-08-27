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
c = t("PoolMgr"),
l = t("ResourceMgr"),
u = t("TweenMgr"),
p = t("UIMgr"),
g = t("Config"),
d = t("TrackDataEvent"),
h = t("DataMgr"),
f = t("GameMgr"),
m = t("GoodsManager"),
y = t("PlayerMgr"),
v = t("NodeUISkillBook"),
I = t("UIGuide"),
k = cc._decorator,
C = k.ccclass,
S = k.property,
M = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.SpSkillBookIconArr = [],
        e.LabNotGet = null,
        e.NodeUp = null,
        e.LabOwnedNum = null,
        e.ScrollViewSkillBook = null,
        e.viewSkillBook = null,
        e.LayoutSkillBook = null,
        e.LayoutOwnedSkillBookLayout = null,
        e.LayoutNotGetSkillBookLayout = null,
        e.LayerTouch = null,
        e.BtnBack = null,
        e.BtnBox = null,
        e.curViewContentH = 945,
        e.loadCount = 0,
        e.abType = "A",
        e.itemHeight = 234,
        e
    }
    return i(e, t),
    e.prototype.onLoad = function() {
        this.registerEvent(),
        m.default.getInstance().initOwnedSkillBookData()
    },
    e.prototype.initAbTypeData = function() {
        this.abType = y.PlayerMgr.getInstance().getTrackData().getAbType(),
        this.itemHeight = 256,
        this.LayoutOwnedSkillBookLayout.getComponent(cc.Layout).paddingLeft = 30,
        this.LayoutOwnedSkillBookLayout.getComponent(cc.Layout).paddingRight = 16,
        this.LayoutOwnedSkillBookLayout.getComponent(cc.Layout).spacingX = 54,
        this.LayoutOwnedSkillBookLayout.getComponent(cc.Layout).spacingY = 20,
        this.LayoutNotGetSkillBookLayout.getComponent(cc.Layout).paddingLeft = 30,
        this.LayoutNotGetSkillBookLayout.getComponent(cc.Layout).paddingRight = 16,
        this.LayoutNotGetSkillBookLayout.getComponent(cc.Layout).spacingX = 54,
        this.LayoutNotGetSkillBookLayout.getComponent(cc.Layout).spacingY = 20
    },
    e.prototype.start = function() {
        this.initAbTypeData(),
        this.registerBtnEvent(),
        s.EventMgr.getInstance().emit(g.EventName.ShowUITop, !1),
        this.initViewContent(),
        this.playBoxAnim(),
        this.initData(),
        this.initView(),
        this.guideShow()
    },
    e.prototype.initViewContent = function() {
        this.curViewContentH = cc.winSize.height - 335 - 54 + 354,
        console.log("this.curViewContentH：", this.curViewContentH)
    },
    e.prototype.playBoxAnim = function() {
        u.TweenMgr.getInstance().playHeartAni(this.BtnBox)
    },
    e.prototype.guideShow = function() {
        var t = this,
        e = y.PlayerMgr.getInstance().getGuideData();
        if (!e.getGuideEnd()) {
            var o = e.getCurrentId();
            if (o == 13 + e.putGuideNum) this.isOpenTouch(!0),
            this.scheduleOnce(function() {
                t.ScrollViewSkillBook.scrollToPercentVertical(.85);
                for (var o = new I.GuildCfg,
                a = null,
                i = 0; i < t.LayoutOwnedSkillBookLayout.childrenCount; i++) {
                    var r = t.LayoutOwnedSkillBookLayout.children[i];
                    if (r.getComponent(v.default) && 16 == r.getComponent(v.default).skillBookId) {
                        a = r;
                        break
                    }
                }
                o.distNode = a,
                o.tipstring = "只有<color=#ff6b1b>已获得的技能书</color>，才会在关卡中<color=#ff6b1b>出现</color>噢！刚刚获得了一本<color=#ff6b1b>【基础剑术】</color>，现在来<color=#ff6b1b>升级</color>看看吧",
                o.yDec = 200,
                t.openUICallBack(g.UIID.UIGuide,
                function() {
                    t.isOpenTouch(!1),
                    e.addCurrentId()
                },
                o)
            },
            .5);
            else if (o == 15 + e.putGuideNum) {
                var a = new I.GuildCfg;
                a.distNode = this.BtnBox,
                a.tipstring = "非常棒，刚刚剩一点<color=#ff6b1b>元宝</color>，快去<color=#ff6b1b>商城</color>看看有什么好货吧！",
                a.yDec = -150,
                this.openUICallBack(g.UIID.UIGuide,
                function() {
                    e.addCurrentId()
                },
                a)
            }
        }
    },
    e.prototype.isOpenTouch = function(t) {
        void 0 === t && (t = !1),
        this.LayerTouch.active = t
    },
    e.prototype.registerEvent = function() {
        this.addEvent(g.EventName.SkillBookGuideShow, this.guideShow)
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnBack.on(cc.Node.EventType.TOUCH_END,
        function() {
            f.default.getInstance().openHomeUI(),
            t.closeView()
        }),
        this.BtnBox.on(cc.Node.EventType.TOUCH_END,
        function() {
            y.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.guide16),
            p.UIMgr.getInstance().openUI(g.UIID.UIShop, -1),
            t.closeView()
        })
    },
    e.prototype.initData = function() {},
    e.prototype.initView = function() {
        this.initCurrency(),
        this.initSkillBookOwnedCount(),
        this.initOwnedSkillBook()
    },
    e.prototype.initCurrency = function() {
        var t = this;
        this.loadPrefab("prefabs", "widget/NodeCurrency",
        function(e) {
            cc.instantiate(e).parent = t.NodeUp
        })
    },
    e.prototype.initSkillBookOwnedCount = function() {
        var t = h.DataMgr.getInstance().getSkillBookCfg(),
        e = m.default.getInstance().skillBookOwnedForQuality;
        this.LabOwnedNum.string = "(" + e.length + "/" + t.length + ")"
    },
    e.prototype.initOwnedSkillBook = function() {
        for (var t = this,
        e = m.default.getInstance().skillBookOwnedForQuality, o = e.length, a = function(a) {
            var r = .02;
            i.loadCount >= 20 && (r = 0),
            i.scheduleOnce(function() {
                var i = c.PoolMgr.getInstance().getNode("NodeUISkillBookNew");
                i ? (i.parent = t.LayoutOwnedSkillBookLayout, i.opacity = 255, i.position = cc.v3(), t.loadCount += 1, t.loadSkillBookItem(i, e[a], !0), a == o - 1 && t.initNotGetSkillBook()) : (console.log("动态加载技能书"), l.ResourceMgr.getInstance().loadRes("prefabs", "widget/NodeUISkillBook", cc.Prefab,
                function(r) { (i = cc.instantiate(r)).parent = t.LayoutOwnedSkillBookLayout,
                    i.opacity = 255,
                    i.position = cc.v3(),
                    t.loadCount += 1,
                    t.loadSkillBookItem(i, e[a], !0),
                    a == o - 1 && t.initNotGetSkillBook()
                }))
            },
            a * r)
        },
        i = this, r = 0; r < o; r++) a(r)
    },
    e.prototype.initNotGetSkillBook = function() {
        var t = this,
        e = (m.default.getInstance().skillBookOwnedForQuality, m.default.getInstance().skillBookNotGetForQuality),
        o = e.length;
        o <= 0 && (this.LabNotGet.active = !0, this.LayoutNotGetSkillBookLayout.getComponent(cc.Layout).updateLayout(), this.scrollViewEvent_SkillBook());
        for (var a = function(a) {
            var r = .02;
            i.loadCount >= 20 && (r = 0),
            i.scheduleOnce(function() {
                var i = c.PoolMgr.getInstance().getNode("NodeUISkillBookNew");
                i ? (i.parent = t.LayoutNotGetSkillBookLayout, i.opacity = 255, i.position = cc.v3(), t.loadCount += 1, t.loadSkillBookItem(i, e[a], !1), a == o - 1 && (t.LayoutNotGetSkillBookLayout.getComponent(cc.Layout).updateLayout(), t.scrollViewEvent_SkillBook())) : l.ResourceMgr.getInstance().loadRes("prefabs", "widget/NodeUISkillBook", cc.Prefab,
                function(r) { (i = cc.instantiate(r)).parent = t.LayoutNotGetSkillBookLayout,
                    i.opacity = 255,
                    i.position = cc.v3(),
                    t.loadCount += 1,
                    t.loadSkillBookItem(i, e[a], !1),
                    a == o - 1 && (t.LayoutNotGetSkillBookLayout.getComponent(cc.Layout).updateLayout(), t.scrollViewEvent_SkillBook())
                }),
                0 == a && (t.LabNotGet.active = !0)
            },
            a * r)
        },
        i = this, r = 0; r < o; r++) a(r)
    },
    e.prototype.loadSkillBookItem = function(t, e, o) {
        if (cc.isValid(t)) {
            t.getComponent(v.default).initData(e, g.UIID.UISkillBook);
            var a = h.DataMgr.getInstance().getSkillBook(e),
            i = h.DataMgr.getInstance().getSkillQuality(a.qualityId);
            this.loadSpriteFrame("iconImg", a.SkillIcon,
            function(e) {
                t.getChildByName("SpSkillBook").getComponent(cc.Sprite).spriteFrame = e
            }),
            this.loadSpriteFrame(i.bundle, i.iconImg2,
            function(e) {
                t.getChildByName("SpNameBg").getComponent(cc.Sprite).spriteFrame = e
            }),
            t.getChildByName("LabName").getComponent(cc.Label).string = a.name,
            t.getChildByName("LabSkilllName").getComponent(cc.Label).string = a.name;
            var r = h.DataMgr.getInstance().getFetter(a.fetterId1),
            n = h.DataMgr.getInstance().getFetter(a.fetterId2);
            t.getChildByName("LabFetter1").getComponent(cc.Label).string = "" + r.name,
            this.loadSpriteFrame(r.bundle, r.iconImg,
            function(e) {
                t.getChildByName("SpFetter1").getComponent(cc.Sprite).spriteFrame = e
            }),
            t.getChildByName("LabFetter2").getComponent(cc.Label).string = "" + n.name,
            this.loadSpriteFrame(n.bundle, n.iconImg,
            function(e) {
                t.getChildByName("SpFetter2").getComponent(cc.Sprite).spriteFrame = e
            }),
            t.getChildByName("SpMask").active = !o;
            var s = y.PlayerMgr.getInstance().geUserData().getSkillBookForId(e),
            c = h.DataMgr.getInstance().getSkillBookLevelCfg1(a.StartLevelID, s.level),
            l = t.getChildByName("SpBarBg"),
            u = c.ConsumeSkillBookNum,
            p = s.iCount / u;
            l.getChildByName("SpBar").getComponent(cc.Sprite).fillRange = p >= 1 ? 1 : p,
            l.getChildByName("SpUp").active = p >= 1,
            l.getChildByName("LabLv").getComponent(cc.Label).string = "Lv." + s.level,
            s.level >= a.MaxLevel ? l.getChildByName("LabBar").getComponent(cc.Label).string = "MAX": l.getChildByName("LabBar").getComponent(cc.Label).string = s.iCount + "/" + c.ConsumeSkillBookNum
        }
    },
    e.prototype.scrollViewEvent_SkillBook = function() {
        for (var t = this.ScrollViewSkillBook.node.getContentSize().height, e = this.itemHeight / 2, o = -t - e, a = this.LayoutOwnedSkillBookLayout.getContentSize().height, i = 0; i < this.LayoutOwnedSkillBookLayout.childrenCount; i++) {
            var r = this.LayoutOwnedSkillBookLayout.children[i];
            this.visibleRank_SkillBook(r, o, e)
        }
        for (i = 0; i < this.LayoutNotGetSkillBookLayout.childrenCount; i++) r = this.LayoutNotGetSkillBookLayout.children[i],
        this.visibleRank_SkillBook(r, o, e, a)
    },
    e.prototype.visibleRank_SkillBook = function(t, e, o, a) {
        void 0 === a && (a = 0);
        var i = t.y + t.parent.y;
        i + this.LayoutSkillBook.y > e && i + this.LayoutSkillBook.y < o ? t.opacity = 255 : t.opacity = 0
    },
    e.prototype.recycleSkillBook = function(t) {
        cc.isValid(t) && c.PoolMgr.getInstance().freeNode(t.name, t)
    },
    e.prototype.destroySkillBook = function() {
        for (var t = 0; t < this.LayoutOwnedSkillBookLayout.childrenCount; t++) this.initSkillBookProp(this.LayoutOwnedSkillBookLayout.children[t]),
        this.recycleSkillBook(this.LayoutOwnedSkillBookLayout.children[t]);
        for (t = 0; t < this.LayoutNotGetSkillBookLayout.childrenCount; t++) this.initSkillBookProp(this.LayoutNotGetSkillBookLayout.children[t]),
        this.recycleSkillBook(this.LayoutNotGetSkillBookLayout.children[t])
    },
    e.prototype.initSkillBookProp = function() {},
    e.prototype.closeView = function() {
        this.destroySkillBook(),
        this.closeUI()
    },
    r([S(cc.SpriteFrame)], e.prototype, "SpSkillBookIconArr", void 0),
    r([S({
        type: cc.Node,
        tooltip: "未获得的技能书标题"
    })], e.prototype, "LabNotGet", void 0),
    r([S(cc.Node)], e.prototype, "NodeUp", void 0),
    r([S(cc.Label)], e.prototype, "LabOwnedNum", void 0),
    r([S(cc.ScrollView)], e.prototype, "ScrollViewSkillBook", void 0),
    r([S(cc.Node)], e.prototype, "viewSkillBook", void 0),
    r([S(cc.Node)], e.prototype, "LayoutSkillBook", void 0),
    r([S(cc.Node)], e.prototype, "LayoutOwnedSkillBookLayout", void 0),
    r([S(cc.Node)], e.prototype, "LayoutNotGetSkillBookLayout", void 0),
    r([S(cc.Node)], e.prototype, "LayerTouch", void 0),
    r([S(cc.Node)], e.prototype, "BtnBack", void 0),
    r([S(cc.Node)], e.prototype, "BtnBox", void 0),
    r([C], e)
} (n.default);
o.default = M