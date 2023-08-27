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
s = t("AudioMgr"),
c = t("EventMgr"),
l = t("ResourceMgr"),
u = t("SdkMgr"),
p = t("UIMgr"),
g = t("TimeUtils"),
d = t("Utils"),
h = t("Main"),
f = t("Config"),
m = t("TrackDataEvent"),
y = t("DataMgr"),
v = t("EquipMgr"),
I = t("GameMgr"),
k = t("GoodsManager"),
C = t("PlayerMgr"),
S = t("RedDotMgr"),
M = t("RoleMgr"),
_ = t("TaskMgr"),
b = t("TipsMgr"),
D = t("NodeEquip"),
T = t("NodeWearEquip"),
N = t("UIGuide"),
w = cc._decorator,
B = w.ccclass,
P = w.property,
E = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.NodeUp = null,
        e.NodeWearEquip = null,
        e.NodeEquip = null,
        e.NodeBagItem = null,
        e.LabPageNum = null,
        e.NodeCenter = null,
        e.LayoutEquipPre = null,
        e.LayoutSuitPre = null,
        e.NodeWearEquipParent = null,
        e.NodeSuit = null,
        e.LayoutEquip = null,
        e.LayoutSuit = null,
        e.BtnSuitClose = null,
        e.BtnBack = null,
        e.BtnSellQuick = null,
        e.BtnReloadingQuick = null,
        e.BtnSalutation = null,
        e.BtnSuitInfo = null,
        e.BtnUnlockBag = null,
        e.NodeUnlockBag = null,
        e.NodeLockBag = null,
        e.SpSalutation = null,
        e.LabFightNum = null,
        e.LabAtkNum = null,
        e.LabHpNum = null,
        e.PageViewBag = null,
        e.ContentBag = null,
        e.Indicator = null,
        e.LabBagCount = null,
        e.LayerTouch = null,
        e.curPageIndex = 0,
        e.curBagIndexCount = 100,
        e.nodePageList = [],
        e.nodeBagItemList = [],
        e.nodeEquipItemList = [],
        e.dataEquipItemList = [],
        e.indexBagList = [],
        e.isLoadEnd = !1,
        e
    }
    return i(e, t),
    e.prototype.onLoad = function() {
        h.default.instance.controlPetShow(!1),
        this.registerEvent()
    },
    e.prototype.start = function() {
        h.default.instance.destroyPlayer_Home(!0),
        this.registerBtnEvent(),
        this.controlHomeSalutation(),
        c.EventMgr.getInstance().emit(f.EventName.ShowUITop, !1),
        this.initData(),
        this.initView(),
        this.refreshRedDot(),
        this.detectionBagOver(),
        this.guideShow()
    },
    e.prototype.guideShow = function() {
        var t = this,
        e = C.PlayerMgr.getInstance().getGuideData();
        if (!e.getGuideEnd()) {
            var o = e.getCurrentId();
            if (o == 9 + e.putGuideNum)(a = new N.GuildCfg).tipstring = "<color=#ff6b1b>高品质装备</color>和<color=#ff6b1b>装备强化</color>是最重要的<color=#ff6b1b>战力来源</color>噢~",
            a.yDec = -150,
            a.isWeek = !0,
            a.showHand = !1,
            a.callBack = function() {
                t.scheduleOnce(function() {
                    t.guideShow()
                },
                .2)
            },
            this.openUICallBack(f.UIID.UIGuide,
            function() {
                e.addCurrentId()
            },
            a);
            else if (o == 10 + e.putGuideNum) {
                var a; (a = new N.GuildCfg).distNode = this.BtnReloadingQuick,
                a.tipstring = "刚刚虽然没出什么极品，但是凑合先用着吧!\n<color=#ff6b1b>一键换装</color>可以快速穿戴装备噢",
                a.yDec = 0,
                this.openUICallBack(f.UIID.UIGuide,
                function() {
                    e.addCurrentId()
                },
                a)
            } else o == 11 + e.putGuideNum && this.scheduleOnce(function() {
                t.isOpenTouch(!1);
                var o = new N.GuildCfg;
                o.distNode = t.BtnBack,
                o.tipstring = "很棒！<color=#ff6b1b>战斗力</color>大幅度提升了噢！\n现在去看看刚获得的<color=#ff6b1b>技能</color>吧",
                o.yDec = -150,
                t.openUICallBack(f.UIID.UIGuide,
                function() {
                    e.addCurrentId()
                },
                o)
            },
            2)
        }
    },
    e.prototype.isOpenTouch = function(t) {
        void 0 === t && (t = !1),
        this.LayerTouch.active = t
    },
    e.prototype.detectionBagOver = function() {
        k.default.getInstance().isOverEquipBagForIndex() && p.UIMgr.getInstance().openUI(f.UIID.UINotBagIndex, -1, f.UIID.UIEquip)
    },
    e.prototype.controlHomeSalutation = function() {
        h.default.instance.controlWearSalutation(!1)
    },
    e.prototype.refreshRedDot = function() {
        S.default.getInstance().equipForRedDot(this.BtnReloadingQuick.getChildByName("SpRedDot"))
    },
    e.prototype.refreshWearEquipRedDot = function() {},
    e.prototype.registerEvent = function() {
        this.addEvent(f.EventName.RefreshEquipViewInfo, this.loadPlayerInfo),
        this.addEvent(f.EventName.RefreshBagIndexCount, this.loadBagIndexCount),
        this.addEvent(f.EventName.WearEquip, this.wearEquip),
        this.addEvent(f.EventName.UnloadEquip, this.unloadEquip),
        this.addEvent(f.EventName.SellEquip, this.sellEquip),
        this.addEvent(f.EventName.ReplaceEquip, this.replaceEquip),
        this.addEvent(f.EventName.SellQuickEquip, this.sellQuick),
        this.addEvent(f.EventName.UnlockEquip, this.unlockEquip),
        this.addEvent(f.EventName.RefreshSalutation, this.refreshSalutation),
        this.addEvent(f.EventName.RefreshSalutationRedDot, this.refreshSalutationRedDot),
        this.addEvent(f.EventName.EquipGuideShow, this.guideShow)
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnBack.on(cc.Node.EventType.TOUCH_END,
        function() {
            C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.guide11),
            I.default.getInstance().openHomeUI(),
            t.closeUI()
        }),
        this.BtnSalutation.on(cc.Node.EventType.TOUCH_END,
        function() {
            C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.click_equip_title),
            p.UIMgr.getInstance().openUI(f.UIID.UISalutation, -1)
        }),
        this.BtnSuitInfo.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.loadSuitView(!t.LayoutSuit.active)
        }),
        this.BtnSuitClose.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.loadSuitView(!1)
        }),
        this.BtnSellQuick.on(cc.Node.EventType.TOUCH_END,
        function() {
            C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.click_equip_quicksale),
            p.UIMgr.getInstance().openUI(f.UIID.UISellView, -1, f.UIID.UIEquip)
        }),
        this.BtnReloadingQuick.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.isLoadEnd ? (C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.guide10), t.reloadingQuick(), t.refreshRedDot(), c.EventMgr.getInstance().emit(f.EventName.RefreshRedDot, !0, !1, !1, !1, !1)) : t.scheduleOnce(function() {
                t.isLoadEnd = !0
            },
            1);
            var e = C.PlayerMgr.getInstance().getGuideData();
            e.getGuideEnd() || (e.getCurrentId() == 11 + e.putGuideNum && t.isOpenTouch(!0), t.guideShow())
        }),
        this.BtnUnlockBag.on(cc.Node.EventType.TOUCH_END,
        function() {
            var e = g.TimeUtils.GetTimeBySecond(),
            o = g.TimeUtils.GetTimeByHours2();
            u.SdkMgr.getInstance().playVideo(1,
            function() {
                var a = g.TimeUtils.GetTimeBySecond(),
                i = g.TimeUtils.GetTimeByHours2();
                C.PlayerMgr.getInstance().getTrackData().testTrackTime("equipvacancy", o, i, e, a),
                C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.equipvacancy),
                C.PlayerMgr.getInstance().getTrackData().youmengTrackNew("equipvacancy_b"),
                t.userData.addbagIndexCount(),
                t.refreshNodeBagIndex(),
                t.loadBagIndexCount()
            })
        })
    },
    e.prototype.initData = function() {
        this.userData = C.PlayerMgr.getInstance().geUserData(),
        this.initCurPage()
    },
    e.prototype.initCurPage = function() {
        this.curPageIndex = this.PageViewBag.getCurrentPageIndex()
    },
    e.prototype.initView = function() {
        this.initCurrency(),
        this.refreshSalutation(),
        this.loadPlayerEquipIndex(),
        this.loadSuitView(),
        this.loadPlayerInfo(),
        this.loadBagIndexCount(),
        this.loadPageNum(),
        this.loadBagPage(),
        this.refreshNodeBagIndex()
    },
    e.prototype.refreshNodeBagIndex = function() {
        var t = this.NodeBagItem.getContentSize().height,
        e = Math.floor(this.userData.getBagIndexCount() / 18);
        if (this.curPageIndex == e) {
            var o = 0,
            a = 0,
            i = 3,
            r = this.userData.getBagIndexCount() % 18;
            r >= 0 && r < 6 ? (o = 1, a = .5, i = 2) : r >= 6 && r < 11 ? (o = 0, a = 1, i = 1) : (o = -1, a = 0, i = 0);
            var n = this.PageViewBag.node.y + o * (t + 17);
            if (this.NodeUnlockBag.position = cc.v3(0, n), 0 == a) this.NodeLockBag.position = cc.v3(0, 2e3);
            else {
                var s = this.PageViewBag.node.y - a * t - 17 * a;
                this.NodeLockBag.position = cc.v3(0, s);
                var c = i * t + 17 * (i - 1);
                this.NodeLockBag.setContentSize(cc.size(735, c))
            }
        } else if (this.curPageIndex > e) {
            this.NodeUnlockBag.position = cc.v3(0, 2e3),
            this.NodeLockBag.position = cc.v3(0, this.PageViewBag.node.y);
            var l = 3 * t + 34;
            this.NodeLockBag.setContentSize(cc.size(735, l))
        } else this.NodeUnlockBag.position = cc.v3(0, 2e3),
        this.NodeLockBag.position = cc.v3(0, 2e3)
    },
    e.prototype.initCurrency = function() {
        var t = this;
        this.loadPrefab("prefabs", "widget/NodeCurrency",
        function(e) {
            cc.instantiate(e).parent = t.NodeUp
        })
    },
    e.prototype.loadPlayerEquipIndex = function() {
        var t = cc.instantiate(this.LayoutEquipPre);
        t.parent = this.NodeWearEquipParent,
        this.LayoutEquip = t,
        this.loadPlayerWearEquip()
    },
    e.prototype.loadPlayerWearEquip = function() {
        for (var t = v.default.getInstance().getWearEquipList(), e = 0; e < t.length; e++) t[e] && this.addPlayerEquipForType(t[e].type, t[e])
    },
    e.prototype.loadSuitView = function(t) {
        if (void 0 === t && (t = !1), !cc.isValid(this.LayoutSuit)) {
            var e = cc.instantiate(this.LayoutSuitPre);
            e.parent = this.NodeSuit,
            e.position = cc.v3(0, -78),
            e.zIndex = -1,
            this.LayoutSuit = e
        }
        this.LayoutSuit.active = t,
        this.BtnSuitClose.active = t,
        this.refreshSuitView()
    },
    e.prototype.refreshSuitView = function() {
        for (var t = v.default.getInstance().getAllSuitList(), e = 0, o = this.LayoutSuit.getChildByName("LayoutSuitProp1"), a = 0; a < t.length; a++) if (! (t[a].count < 2)) {
            e++;
            var i = this.LayoutSuit.getChildByName("LayoutSuitProp" + e);
            cc.isValid(i) || ((i = cc.instantiate(o)).name = "LayoutSuitProp" + e, i.parent = this.LayoutSuit);
            var r = y.DataMgr.getInstance().getEquipSuitCfg(t[a].id);
            i.getChildByName("LabSuitName").getComponent(cc.Label).string = r.suitName + "：";
            var n = d.Utils.getTabelArr(r.suit2Prop),
            s = d.Utils.getTabelArr(r.suit4Prop),
            c = d.Utils.getTabelArr(r.suit6Prop),
            l = v.default.getInstance().getPropNameForPropType(Number(n[0])),
            u = v.default.getInstance().getPropNameForPropType(Number(s[0])),
            p = v.default.getInstance().getPropNameForPropType(Number(c[0])),
            g = i.getChildByName("LayoutProp");
            g.getChildByName("LabSuit2Prop").getComponent(cc.RichText).string = "（2）" + l + "<color = #fce445>+" + n[1] + "%</color>",
            g.getChildByName("LabSuit4Prop").getComponent(cc.RichText).string = "（4）" + u + "<color = #fce445>+" + s[1] + "%</color>",
            g.getChildByName("LabSuit6Prop").getComponent(cc.RichText).string = "（6）" + p + "<color = #fce445>+" + c[1] + "%</color>";
            var h = [!1, !1, !1];
            t[a].count >= 2 && t[a].count < 4 ? (h = [!0, !1, !1], i.setContentSize(cc.size(455, 35))) : t[a].count >= 4 && t[a].count < 6 ? (h = [!0, !0, !1], i.setContentSize(cc.size(455, 70))) : t[a].count >= 6 && (h = [!0, !0, !0], i.setContentSize(cc.size(455, 100))),
            g.getChildByName("LabSuit2Prop").active = h[0],
            g.getChildByName("LabSuit4Prop").active = h[1],
            g.getChildByName("LabSuit6Prop").active = h[2]
        }
        this.LayoutSuit.getChildByName("LabSuitTitle").active = 0 != e,
        this.LayoutSuit.getChildByName("LayoutSuitProp1").active = 0 != e,
        this.LayoutSuit.getChildByName("LabNotSuit").active = 0 == e;
        for (a = 2; a <= 3; a++) {
            i = this.LayoutSuit.getChildByName("LayoutSuitProp" + a);
            cc.isValid(i) && a > e && (console.log("node：", i), i.destroy())
        }
    },
    e.prototype.loadPlayerInfo = function() {
        var t = M.default.getInstance().curFightNumForPlayer,
        e = M.default.getInstance().getPlayerFightNum();
        t != e && b.default.getInstance().playFightnChangTips(this.node, cc.v3(0, 450), t, e),
        this.LabFightNum.string = "战力：" + e,
        _.default.getInstance().upFightNumForTask(e);
        var o = M.default.getInstance().getPlayerPro(),
        a = Math.floor((o.attack_min + o.attack_max) / 2);
        this.LabAtkNum.string = "<color=#ffffff>攻击力：</c><color=#ffe380>" + a + "</color>",
        this.LabHpNum.string = "<color=#ffffff>血量上限：</c><color=#ffe380>" + o.hp_total + "</color>"
    },
    e.prototype.loadPageNum = function() {
        if (this.nodePageList || (this.nodePageList = []), this.nodePageList.length > 0) for (var t = 0; t < this.nodePageList.length; t++) cc.isValid(this.nodePageList[t]) && (this.curPageIndex == t ? this.nodePageList[t].color = cc.color(191, 108, 0) : this.nodePageList[t].color = cc.color(255, 255, 255));
        else for (t = 0; t < this.Indicator.childrenCount; t++) if (cc.isValid(this.Indicator.children[t])) {
            var e = cc.instantiate(this.LabPageNum);
            e.parent = this.Indicator.children[t],
            e.position = cc.Vec3.ZERO,
            e.getComponent(cc.Label).string = "" + (t + 1),
            this.curPageIndex == t && (e.color = cc.color(191, 108, 0)),
            this.nodePageList.push(e)
        }
    },
    e.prototype.loadBagPage = function() {
        for (var t = v.default.getInstance().getOwnedEquipList(), e = 0; e < 8; e++) {
            var o = this.ContentBag.children[e];
            this.loadBagItem(o, !1, e, t)
        }
    },
    e.prototype.loadBagItem = function(t, e, o, a) {
        for (var i = this,
        r = function(e) {
            n.scheduleOnce(function() {
                var r = cc.instantiate(i.NodeBagItem);
                r.parent = t,
                r.position = cc.Vec3.ZERO,
                i.nodeBagItemList.push(r);
                var n = e + 18 * o;
                a.length > n && (i.loadEquipToBag(n, r, a[n]), n == v.default.getInstance().getOwnedEquipCount() - 1 && (i.isLoadEnd = !0))
            },
            .02 * (e + 18 * o))
        },
        n = this, s = 0; s < 18; s++) r(s)
    },
    e.prototype.loadEquipToBag = function(t, e, o) {
        var a = cc.instantiate(this.NodeEquip);
        a.parent = e,
        v.default.getInstance().playEffForQuality(a, o.quality),
        a.getComponent(D.default).initData(t, o, f.UIID.UIEquip);
        var i = y.DataMgr.getInstance().getEquipCfg(o.id);
        this.loadSpriteFrame(i.bundleQuality, i.iconQuality,
        function(t) {
            a.getComponent(cc.Sprite).spriteFrame = t
        }),
        this.loadSpriteFrame(i.bundle, i.equipIcon,
        function(t) {
            a.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t
        }),
        o.strengthenLv > 0 ? (a.getChildByName("LabStrengthenLv").active = !0, a.getChildByName("LabStrengthenLv").getComponent(cc.Label).string = "+" + o.strengthenLv) : a.getChildByName("LabStrengthenLv").active = !1,
        a.getChildByName("SpLock").active = !o.isUnlock;
        var r = C.PlayerMgr.getInstance().getAbType();
        if ("D" == r || "B" == r) {
            var n = o.starLevel ? o.starLevel: 0;
            if (n > 0) {
                var s = a.getChildByName("NodeStar");
                s.active = !0;
                for (var c = 0; c < s.childrenCount; c++) n > c ? cc.isValid(s.children[c]) && (s.children[c].getChildByName("SpStar").active = !0) : cc.isValid(s.children[c]) && (s.children[c].getChildByName("SpStar").active = !1)
            }
        }
        this.nodeEquipItemList.length > t ? (this.nodeEquipItemList[t] = a, this.dataEquipItemList[t] = o) : (this.nodeEquipItemList.push(a), this.dataEquipItemList.push(o))
    },
    e.prototype.setVisibleForBagItem = function() {
        for (var t = 0; t < 8; t++) {
            var e = this.ContentBag.children[t],
            o = !1;
            if (this.curPageIndex == t || this.curPageIndex - 1 == t || this.curPageIndex + 1 == t) {
                o = !0;
                for (var a = 0; a < 18; a++) {
                    e.children[a].opacity = o ? 255 : 0
                }
            }
        }
    },
    e.prototype.callbackPageView = function() {
        C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.click_equip_slide),
        this.initCurPage(),
        this.loadPageNum(),
        this.refreshNodeBagIndex()
    },
    e.prototype.loadBagIndexCount = function() {
        var t = v.default.getInstance().getOwnedEquipCount();
        this.curBagIndexCount = this.userData.getBagIndexCount(),
        this.LabBagCount.string = "（" + t + "/" + this.curBagIndexCount + "）"
    },
    e.prototype.destroyBagItemforIndex = function(t) {
        if (this.nodeBagItemList && !(t >= this.nodeBagItemList.length || t < 0)) {
            var e = this.nodeBagItemList[t].children[0];
            cc.isValid(e) && (e.destroy(), t < this.nodeEquipItemList.length && (this.nodeEquipItemList[t] = null, this.dataEquipItemList[t] = null))
        }
    },
    e.prototype.addBagItemForIndex = function(t, e) {
        if (void 0 === e && (e = null), this.nodeBagItemList && t) {
            var o = e;
            null == o && (o = this.nodeEquipItemList.length, this.indexBagList && this.indexBagList.length > 0 && (o = this.indexBagList[0], this.indexBagList.splice(0, 1)));
            var a = this.nodeBagItemList[o];
            cc.isValid(a) && this.loadEquipToBag(o, a, t)
        }
    },
    e.prototype.destroyPlayerEquipForType = function(t) {
        var e = this.LayoutEquip.getChildByName("NodeEquip" + t);
        cc.isValid(e) && cc.isValid(e.children[0]) && e.children[0].destroy()
    },
    e.prototype.addPlayerEquipForType = function(t, e) {
        if (e) {
            var o = this.LayoutEquip.getChildByName("NodeEquip" + t);
            if (cc.isValid(o)) {
                var a = cc.instantiate(this.NodeWearEquip);
                a.parent = o,
                a.position = cc.Vec3.ZERO;
                var i = y.DataMgr.getInstance().getEquipCfg(e.id);
                this.loadSpriteFrame(i.bundleQuality, i.iconQuality,
                function(t) {
                    a.getComponent(cc.Sprite).spriteFrame = t
                }),
                this.loadSpriteFrame(i.bundle, i.equipIcon,
                function(t) {
                    a.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t
                }),
                e.strengthenLv > 0 ? (a.getChildByName("LabStrengthenLv").active = !0, a.getChildByName("LabStrengthenLv").getComponent(cc.Label).string = "+" + e.strengthenLv) : a.getChildByName("LabStrengthenLv").active = !1;
                var r = C.PlayerMgr.getInstance().getAbType();
                if ("D" == r || "B" == r) {
                    var n = e.starLevel ? e.starLevel: 0;
                    if (n > 0) {
                        var s = a.getChildByName("NodeStar");
                        s.active = !0;
                        for (var c = 0; c < s.childrenCount; c++) n > c ? cc.isValid(s.children[c]) && (s.children[c].getChildByName("SpStar").active = !0) : cc.isValid(s.children[c]) && (s.children[c].getChildByName("SpStar").active = !1)
                    }
                }
                v.default.getInstance().playEffForQuality(a, e.quality);
                var l = v.default.getInstance().getWearEquipData(t);
                a.getComponent(T.default).initData( - 1, l, f.UIID.UIEquip);
                var u = 0;
                if ("D" == r || "B" == r) {
                    var p = y.DataMgr.getInstance().getEquipCfg(e.id),
                    g = d.Utils.getTabelArr1(p.consume),
                    h = e.strengthenLv;
                    h < p.strengthenMaxLv && (u = Number(g[Math.floor(h / 10)][1]))
                } else u = y.DataMgr.getInstance().getEquipStrengthenCfg1(i.strengthenStartId, e.strengthenLv).consume;
                var m;
                m = C.PlayerMgr.getInstance().geUserData().getGoldNum() >= u,
                a.getChildByName("SpRedDot").active = m
            }
        }
    },
    e.prototype.refreshIndexBagList = function(t, e) {
        void 0 === e && (e = !0),
        this.indexBagList.push(t),
        this.indexBagList.sort(function(t, e) {
            return t - e
        })
    },
    e.prototype.wearEquip = function(t, e) {
        this.destroyBagItemforIndex(t),
        this.loadBagIndexCount(),
        this.addPlayerEquipForType(e.type, e),
        this.refreshIndexBagList(t),
        this.loadPlayerInfo(),
        this.refreshRedDot(),
        s.AudioMgr.getInstance().playEffect(f.AudioId.Sound_WearEquip)
    },
    e.prototype.unloadEquip = function(t) {
        this.destroyPlayerEquipForType(t.type),
        this.loadBagIndexCount(),
        this.addBagItemForIndex(t),
        this.loadPlayerInfo(),
        this.refreshRedDot(),
        this.detectionBagOver(),
        s.AudioMgr.getInstance().playEffect(f.AudioId.Sound_WearEquip)
    },
    e.prototype.sellEquip = function(t) {
        this.destroyBagItemforIndex(t),
        this.loadBagIndexCount(),
        this.refreshIndexBagList(t),
        this.refreshRedDot(),
        s.AudioMgr.getInstance().playEffect(f.AudioId.Sound_SellEquip)
    },
    e.prototype.replaceEquip = function(t, e, o) {
        this.destroyPlayerEquipForType(e.type),
        this.addPlayerEquipForType(o.type, o),
        this.destroyBagItemforIndex(t),
        this.addBagItemForIndex(e, t),
        this.loadPlayerInfo(),
        this.refreshRedDot(),
        s.AudioMgr.getInstance().playEffect(f.AudioId.Sound_WearEquip)
    },
    e.prototype.sellQuick = function(t) {
        var e = this,
        o = t;
        if (o && !(o.length <= 0)) {
            for (var a = 0,
            i = 0; i < this.nodeEquipItemList.length; i++) if (cc.isValid(this.nodeEquipItemList[i] && this.dataEquipItemList[i]) && this.dataEquipItemList[i].isUnlock) {
                var r = y.DataMgr.getInstance().getEquipCfg(this.dataEquipItemList[i].id),
                n = 0,
                s = C.PlayerMgr.getInstance().getAbType();
                n = "D" == s || "B" == s ? v.default.getInstance().getEquipSellValue(this.dataEquipItemList[i].id, this.dataEquipItemList[i].type, this.dataEquipItemList[i].IDCard, this.dataEquipItemList[i]) : y.DataMgr.getInstance().getEquipStrengthenCfg1(r.strengthenStartId, this.dataEquipItemList[i].strengthenLv).sellPrice;
                for (var c = !1,
                l = 0; l < o.length; l++) if (r.qualityId == o[l]) {
                    a += n,
                    c = !0;
                    break
                }
                c && v.default.getInstance().sellEquip(i, this.dataEquipItemList[i])
            }
            a > 0 && (this.refreshRedDot(), C.PlayerMgr.getInstance().geUserData().addGoldNum(a), p.UIMgr.getInstance().openUI(f.UIID.UITips, -1, "出售成功，获得" + a + "金币"), this.scheduleOnce(function() {
                e.sortEquip()
            }))
        }
    },
    e.prototype.reloadingQuick = function() {
        for (var t = this,
        e = !1,
        o = 1; o <= 6; o++) {
            for (var a = 0,
            i = 0,
            r = null,
            n = 0; n < this.dataEquipItemList.length; n++) if (this.dataEquipItemList[n] && o == this.dataEquipItemList[n].type) {
                var s = 0;
                a < (s = "D" == (c = C.PlayerMgr.getInstance().getAbType()) || "B" == c ? v.default.getInstance().getEquipFightForId(this.dataEquipItemList[n].id, !1, this.dataEquipItemList[n].type, this.dataEquipItemList[n].IDCard, this.dataEquipItemList[n]) : y.DataMgr.getInstance().getEquipStrengthenCfg(this.dataEquipItemList[n].id, this.dataEquipItemList[n].strengthenLv).fightNum) && (a = s, i = n, r = this.dataEquipItemList[n])
            }
            if (r) if (v.default.getInstance().isExistEquipForType(o)) {
                var c, l = v.default.getInstance().getWearEquipData(o);
                s = 0,
                (s = "D" == (c = C.PlayerMgr.getInstance().getAbType()) || "B" == c ? v.default.getInstance().getEquipFightForId(l.id, !1, l.type, l.IDCard, l) : y.DataMgr.getInstance().getEquipStrengthenCfg(l.id, l.strengthenLv).fightNum) < a && (v.default.getInstance().replaceEquip(i, l, r), e = !0)
            } else v.default.getInstance().wearEquip(i, r),
            e = !0;
            6 == o && (e ? p.UIMgr.getInstance().openUI(f.UIID.UITips, -1, "换装成功") : p.UIMgr.getInstance().openUI(f.UIID.UITips, -1, "没有可更换的装备"))
        }
        this.scheduleOnce(function() {
            t.sortEquip()
        })
    },
    e.prototype.sortEquip = function() {
        for (var t = 0; t < this.nodeEquipItemList.length; t++) {
            var e = this.indexBagList[0];
            e < t && cc.isValid(this.nodeEquipItemList[t]) && (this.nodeEquipItemList[t].parent = this.nodeBagItemList[e], this.nodeEquipItemList[e] = this.nodeEquipItemList[t], this.nodeEquipItemList[e].getComponent(D.default).refresData(e, this.dataEquipItemList[t]), this.nodeEquipItemList[t] = null, this.dataEquipItemList[e] = this.dataEquipItemList[t], this.dataEquipItemList[t] = null, this.indexBagList[0] = t, this.indexBagList.sort(function(t, e) {
                return t - e
            }))
        }
    },
    e.prototype.unlockEquip = function(t, e) {
        if (this.nodeBagItemList && !(t >= this.nodeBagItemList.length || t < 0)) {
            var o = this.nodeBagItemList[t].children[0];
            cc.isValid(o) && (o.getComponent(D.default).refresData(t, e), o.getChildByName("SpLock").active = !e.isUnlock)
        }
    },
    e.prototype.refreshSalutation = function() {
        var t = this;
        this.SpSalutation.childrenCount > 0 ? this.loadSalutation(this.SpSalutation.getChildByName("NodeSalutation")) : this.loadPrefab("prefabs", "widget/NodeSalutation",
        function(e) {
            var o = cc.instantiate(e);
            o.parent = t.SpSalutation,
            t.loadSalutation(o)
        })
    },
    e.prototype.loadSalutation = function(t) {
        var e = this.userData.getWearSalutationId();
        if (! (e < 1)) {
            var o = y.DataMgr.getInstance().getSalutation(e);
            l.ResourceMgr.getInstance().loadSpriteframe(o.titleBundle, o.ResourcesRoute,
            function(e) {
                t.getComponent(cc.Sprite).spriteFrame = e
            });
            var a = t.getComponent(cc.Animation);
            l.ResourceMgr.getInstance().loadRes(o.AnimBundle, o.AnimName, cc.AnimationClip,
            function(t) {
                a.addClip(t),
                a.play(o.AnimName).repeatCount = 1e5
            }),
            t.getChildByName("SpUpdate").active = this.userData.getIsNewSalutation()
        }
    },
    e.prototype.refreshSalutationRedDot = function() {
        this.SpSalutation.getChildByName("NodeSalutation").getChildByName("SpUpdate").active = this.userData.getIsNewSalutation()
    },
    r([P(cc.Node)], e.prototype, "NodeUp", void 0),
    r([P({
        type: cc.Prefab,
        tooltip: "玩家装备预制"
    })], e.prototype, "NodeWearEquip", void 0),
    r([P({
        type: cc.Prefab,
        tooltip: "装备预制"
    })], e.prototype, "NodeEquip", void 0),
    r([P({
        type: cc.Node,
        tooltip: "背包空壳item"
    })], e.prototype, "NodeBagItem", void 0),
    r([P({
        type: cc.Node,
        tooltip: "背包页数标签"
    })], e.prototype, "LabPageNum", void 0),
    r([P(cc.Node)], e.prototype, "NodeCenter", void 0),
    r([P({
        type: cc.Prefab,
        tooltip: "玩家装备坑位预制"
    })], e.prototype, "LayoutEquipPre", void 0),
    r([P({
        type: cc.Prefab,
        tooltip: "套装预制"
    })], e.prototype, "LayoutSuitPre", void 0),
    r([P(cc.Node)], e.prototype, "NodeWearEquipParent", void 0),
    r([P(cc.Node)], e.prototype, "NodeSuit", void 0),
    r([P(cc.Node)], e.prototype, "BtnSuitClose", void 0),
    r([P(cc.Node)], e.prototype, "BtnBack", void 0),
    r([P(cc.Node)], e.prototype, "BtnSellQuick", void 0),
    r([P(cc.Node)], e.prototype, "BtnReloadingQuick", void 0),
    r([P(cc.Node)], e.prototype, "BtnSalutation", void 0),
    r([P(cc.Node)], e.prototype, "BtnSuitInfo", void 0),
    r([P(cc.Node)], e.prototype, "BtnUnlockBag", void 0),
    r([P({
        type: cc.Node,
        tooltip: "解锁槽位"
    })], e.prototype, "NodeUnlockBag", void 0),
    r([P({
        type: cc.Node,
        tooltip: "未解锁槽位"
    })], e.prototype, "NodeLockBag", void 0),
    r([P({
        type: cc.Node,
        tooltip: "称号节点"
    })], e.prototype, "SpSalutation", void 0),
    r([P(cc.Label)], e.prototype, "LabFightNum", void 0),
    r([P(cc.RichText)], e.prototype, "LabAtkNum", void 0),
    r([P(cc.RichText)], e.prototype, "LabHpNum", void 0),
    r([P(cc.PageView)], e.prototype, "PageViewBag", void 0),
    r([P(cc.Node)], e.prototype, "ContentBag", void 0),
    r([P(cc.Node)], e.prototype, "Indicator", void 0),
    r([P(cc.Label)], e.prototype, "LabBagCount", void 0),
    r([P({
        type: cc.Node,
        tooltip: "防触摸层"
    })], e.prototype, "LayerTouch", void 0),
    r([B], e)
} (n.default);
o.default = E