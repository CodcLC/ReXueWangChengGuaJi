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
s = t("BaseButton"),
c = t("SdkMgr"),
l = t("TweenMgr"),
u = t("UIMgr"),
p = t("Utils"),
g = t("Main"),
d = t("Config"),
h = t("TrackDataEvent"),
f = t("DataMgr"),
m = t("EquipMgr"),
y = t("PlayerMgr"),
v = t("NodeEquipComposite"),
I = cc._decorator,
k = I.ccclass,
C = I.property,
S = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.BtnBack = null,
        e.BtnComposite = null,
        e.NodeComposite = null,
        e.NodeCompositeEquip = null,
        e.NodeEquip = null,
        e.NodeInfo = null,
        e.PrefabEquip = null,
        e.NodeBagItem = null,
        e.LabPageNum = null,
        e.PageViewBag = null,
        e.ContentBag = null,
        e.Indicator = null,
        e.NodeEFf_HC = null,
        e.NodeCost = null,
        e.LabCost = null,
        e.NodeVideo = null,
        e.LayoutProp = null,
        e.LayoutNodeProp = null,
        e.LabName = null,
        e.curPageIndex = 0,
        e.curBagIndexCount = 100,
        e.nodePageList = [],
        e.nodeBagItemList = [],
        e.nodeEquipItemList = [],
        e.dataEquipItemList = [],
        e.introductionEquipData = null,
        e.equipCompositeList = [],
        e.isLoadEnd = !1,
        e.lookVideoCount = 0,
        e.curBagList = [],
        e
    }
    return i(e, t),
    e.prototype.init = function(t) {
        this.introductionEquipData = t
    },
    e.prototype.onLoad = function() {
        this.registerEvent()
    },
    e.prototype.start = function() {
        g.default.instance.destroyPlayer_Home(),
        this.registerBtnEvent(),
        this.initData(),
        this.initView(),
        this.LayoutProp.destroyAllChildren(),
        this.scheduleOnce(this.changeNodeInfo)
    },
    e.prototype.registerEvent = function() {
        this.addEvent(d.EventName.PlaceCompositeEquip, this.recognitionCompositeList)
    },
    e.prototype.initData = function() {
        this.equipCompositeList.length = 3
    },
    e.prototype.initView = function() {
        this.loadPageNum(),
        this.initCompositeView()
    },
    e.prototype.initCurPage = function() {
        this.curPageIndex = this.PageViewBag.getCurrentPageIndex()
    },
    e.prototype.jumpCurPage = function() {
        this.PageViewBag.setCurrentPageIndex(0),
        this.curPageIndex = this.PageViewBag.getCurrentPageIndex()
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnBack.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.lookVideoCount > 0 ? u.UIMgr.getInstance().openUI(d.UIID.UIGeneralWindow1, -1, "", "<color = #000000>切换装备或退出界面\n当前视频进度将</c><color = #ff0000>不予保存</c>噢！", null,
            function() {
                u.UIMgr.getInstance().openUI(d.UIID.UIEquip, -1),
                t.closeView()
            },
            null) : (u.UIMgr.getInstance().openUI(d.UIID.UIEquip, -1), t.closeView())
        }),
        this.BtnComposite.on(cc.Node.EventType.TOUCH_END,
        function() {
            if (t.BtnComposite.getComponent(s.BaseButton).interactable) if (t.isFullForCompositeIndex()) {
                var e = t.equipCompositeList[0].starLevel ? t.equipCompositeList[0].starLevel: 0,
                o = f.DataMgr.getInstance().getEquipStarCfg(t.equipCompositeList[0].id, e).consume;
                if (y.PlayerMgr.getInstance().geUserData().subGoldNum(o)) {
                    y.PlayerMgr.getInstance().getTrackData().getCountHC() < 10 && (y.PlayerMgr.getInstance().getTrackData().addCountHC(), y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.refine_time_X, y.PlayerMgr.getInstance().getTrackData().getCountHC())),
                    y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.refine_equip_X, t.equipCompositeList[0].id),
                    y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.refine_equip_lv_X, e + 1);
                    var a, i = m.default.getInstance().getEquipSellValue_QH(t.equipCompositeList[0].id, t.equipCompositeList[0].type, t.equipCompositeList[0].IDCard, t.equipCompositeList[0]) + m.default.getInstance().getEquipSellValue_QH(t.equipCompositeList[1].id, t.equipCompositeList[1].type, t.equipCompositeList[1].IDCard, t.equipCompositeList[1]) + m.default.getInstance().getEquipSellValue_QH(t.equipCompositeList[2].id, t.equipCompositeList[2].type, t.equipCompositeList[2].IDCard, t.equipCompositeList[2]);
                    if (t.equipCompositeList[0].isWear) {
                        var r = y.PlayerMgr.getInstance().geUserData().getEquipIDCard();
                        a = {
                            id: t.equipCompositeList[0].id,
                            type: t.equipCompositeList[0].type,
                            quality: t.equipCompositeList[0].quality,
                            strengthenLv: 0,
                            isUnlock: t.equipCompositeList[0].isUnlock,
                            isWear: t.equipCompositeList[0].isWear,
                            videoCount: 0,
                            IDCard: r,
                            starLevel: e + 1
                        },
                        y.PlayerMgr.getInstance().geUserData().setEquip(a, !1),
                        y.PlayerMgr.getInstance().geUserData().abandonEquip(t.equipCompositeList[1]),
                        y.PlayerMgr.getInstance().geUserData().abandonEquip(t.equipCompositeList[2])
                    } else t.equipCompositeList[1].isWear ? (r = y.PlayerMgr.getInstance().geUserData().getEquipIDCard(), a = {
                        id: t.equipCompositeList[1].id,
                        type: t.equipCompositeList[1].type,
                        quality: t.equipCompositeList[1].quality,
                        strengthenLv: 0,
                        isUnlock: t.equipCompositeList[1].isUnlock,
                        isWear: !1,
                        videoCount: 0,
                        IDCard: r,
                        starLevel: e + 1
                    },
                    y.PlayerMgr.getInstance().geUserData().setEquip(a, !1), y.PlayerMgr.getInstance().geUserData().abandonEquip(t.equipCompositeList[0]), y.PlayerMgr.getInstance().geUserData().abandonEquip(t.equipCompositeList[2])) : t.equipCompositeList[2].isWear ? (r = y.PlayerMgr.getInstance().geUserData().getEquipIDCard(), a = {
                        id: t.equipCompositeList[2].id,
                        type: t.equipCompositeList[2].type,
                        quality: t.equipCompositeList[2].quality,
                        strengthenLv: 0,
                        isUnlock: t.equipCompositeList[2].isUnlock,
                        isWear: !1,
                        videoCount: 0,
                        IDCard: r,
                        starLevel: e + 1
                    },
                    y.PlayerMgr.getInstance().geUserData().setEquip(a, !1), y.PlayerMgr.getInstance().geUserData().unloadEquip(t.equipCompositeList[2]), y.PlayerMgr.getInstance().geUserData().abandonEquip(t.equipCompositeList[0]), y.PlayerMgr.getInstance().geUserData().abandonEquip(t.equipCompositeList[1])) : t.equipCompositeList[0].isWear || t.equipCompositeList[1].isWear || t.equipCompositeList[2].isWear || (r = y.PlayerMgr.getInstance().geUserData().getEquipIDCard(), a = {
                        id: t.equipCompositeList[0].id,
                        type: t.equipCompositeList[0].type,
                        quality: t.equipCompositeList[0].quality,
                        strengthenLv: 0,
                        isUnlock: t.equipCompositeList[0].isUnlock,
                        isWear: t.equipCompositeList[0].isWear,
                        videoCount: 0,
                        IDCard: r,
                        starLevel: e + 1
                    },
                    y.PlayerMgr.getInstance().geUserData().addEquip(a), y.PlayerMgr.getInstance().geUserData().abandonEquip(t.equipCompositeList[0]), y.PlayerMgr.getInstance().geUserData().abandonEquip(t.equipCompositeList[1]), y.PlayerMgr.getInstance().geUserData().abandonEquip(t.equipCompositeList[2]), t.addBagItemForIndex(a));
                    t.playHCEff(function() {
                        u.UIMgr.getInstance().openUI(d.UIID.UICompositeEnd, -1, a,
                        function() {
                            i > 0 && (y.PlayerMgr.getInstance().geUserData().addGoldNum(i), u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "合成成功，返回强化消耗 金币x" + i))
                        })
                    }),
                    t.clearCompositeIndex(),
                    t.clearCompositeData(),
                    t.introductionEquipData = null,
                    t.hideNodeInfo(),
                    t.filtrateEquip(null),
                    t.loadBagPage(t.curBagList),
                    t.refreshBtnState(!1)
                }
            } else u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "请添加合成装备")
        });
        for (var e = function(e) {
            var a = o.NodeComposite.getChildByName("NodeCompositeEquip" + e);
            cc.isValid(a) && a.on(cc.Node.EventType.TOUCH_END,
            function() {
                if (0 == e) {
                    t.introductionEquipData = null,
                    t.hideNodeInfo();
                    var o = t.NodeComposite.getChildByName("NodeCompositeEquip0"),
                    i = t.NodeComposite.getChildByName("NodeCompositeEquip1"),
                    r = t.NodeComposite.getChildByName("NodeCompositeEquip2"),
                    n = t.equipCompositeList[0];
                    t.equipCompositeList[0] = null;
                    var s = t.equipCompositeList[1];
                    t.equipCompositeList[1] = null;
                    var c = t.equipCompositeList[2];
                    return t.equipCompositeList[2] = null,
                    t.refreshBtnState(!1),
                    cc.isValid(o.getChildByName("NodeEquip")) && o.getChildByName("NodeEquip").destroy(),
                    cc.isValid(i.getChildByName("NodeEquip")) && i.getChildByName("NodeEquip").destroy(),
                    cc.isValid(r.getChildByName("NodeEquip")) && r.getChildByName("NodeEquip").destroy(),
                    void(t.isNullForCompositeIndex() ? (t.refreshVideoState(!1), cc.isValid(t.NodeCompositeEquip.getChildByName("NodeEquip")) && t.NodeCompositeEquip.getChildByName("NodeEquip").destroy(), t.filtrateEquip(null), t.loadBagPage(t.curBagList)) : (t.refreshVideoState(!0), t.addBagItemForIndex(n), t.addBagItemForIndex(s), t.addBagItemForIndex(c)))
                }
                if (t.equipCompositeList[e]) if (t.lookVideoCount > 0) u.UIMgr.getInstance().openUI(d.UIID.UIGeneralWindow1, -1, "", "<color = #000000>切换装备或退出界面\n当前视频进度将</c><color = #ff0000>不予保存</c>噢！", null,
                function() {
                    var o = t.equipCompositeList[e];
                    t.equipCompositeList[e] = null,
                    cc.isValid(a.getChildByName("NodeEquip")) && a.getChildByName("NodeEquip").destroy(),
                    t.refreshBtnState(!1),
                    t.isNullForCompositeIndex() ? (t.refreshVideoState(!1), cc.isValid(t.NodeCompositeEquip.getChildByName("NodeEquip")) && t.NodeCompositeEquip.getChildByName("NodeEquip").destroy(), t.filtrateEquip(null), t.loadBagPage(t.curBagList)) : (t.refreshVideoState(!0), t.addBagItemForIndex(o))
                },
                null);
                else {
                    var l = t.equipCompositeList[e];
                    t.equipCompositeList[e] = null,
                    cc.isValid(a.getChildByName("NodeEquip")) && a.getChildByName("NodeEquip").destroy(),
                    t.refreshBtnState(!1),
                    t.isNullForCompositeIndex() ? (t.refreshVideoState(!1), cc.isValid(t.NodeCompositeEquip.getChildByName("NodeEquip")) && t.NodeCompositeEquip.getChildByName("NodeEquip").destroy(), t.filtrateEquip(null), t.loadBagPage(t.curBagList)) : (t.refreshVideoState(!0), t.addBagItemForIndex(l))
                }
            })
        },
        o = this, a = 0; a < 3; a++) e(a);
        this.NodeVideo.on(cc.Node.EventType.TOUCH_END,
        function() {
            c.SdkMgr.getInstance().playVideo(1,
            function() {
                if (y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.refine_getequip), t.lookVideoCount += 1, t.refreshVideoState(!0), t.lookVideoCount >= t.getNeedVideoCount()) {
                    t.NodeVideo.active = !1;
                    for (var e = void 0,
                    o = 0; o < t.equipCompositeList.length; o++) if (t.equipCompositeList[o]) {
                        e = {
                            id: t.equipCompositeList[o].id,
                            type: t.equipCompositeList[o].type,
                            quality: t.equipCompositeList[o].quality,
                            strengthenLv: 0,
                            isUnlock: !0,
                            isWear: !1,
                            videoCount: 0,
                            IDCard: y.PlayerMgr.getInstance().geUserData().getEquipIDCard(),
                            starLevel: t.equipCompositeList[o].starLevel
                        };
                        break
                    }
                    e ? (y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.refine_equip_get_X, e.id), t.lookVideoCount = 0, y.PlayerMgr.getInstance().geUserData().addEquip(e), t.addToCompositeIndex(e), t.refreshBtnState(!0)) : t.lookVideoCount -= 1
                }
            })
        })
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
    e.prototype.refreshBtnState = function(t) {
        this.NodeCost.active = t,
        this.BtnComposite.getComponent(s.BaseButton).interactable = t,
        t && this.refreshHCCost()
    },
    e.prototype.refreshHCCost = function() {
        for (var t, e = 0; e < this.equipCompositeList.length; e++) if (this.equipCompositeList[e]) {
            t = this.equipCompositeList[e];
            break
        }
        this.LabCost.string = t ? f.DataMgr.getInstance().getEquipStarCfg(t.id, t.starLevel).consume.toString() : "0"
    },
    e.prototype.refreshVideoState = function(t) {
        if (this.NodeVideo.active = t, t) {
            for (var e = 1,
            o = 0; o < this.equipCompositeList.length; o++) if (!this.equipCompositeList[o]) {
                e = o;
                break
            }
            var a = this.NodeComposite.getChildByName("NodeCompositeEquip" + e),
            i = p.Utils.posTransform(a.parent, a.getPosition(), this.NodeVideo.parent);
            this.NodeVideo.setPosition(i),
            this.refreshLookVideoCount()
        } else this.lookVideoCount = 0
    },
    e.prototype.getNeedVideoCount = function() {
        for (var t, e = 0; e < this.equipCompositeList.length; e++) if (this.equipCompositeList[e]) {
            t = this.equipCompositeList[e];
            break
        }
        return f.DataMgr.getInstance().getEquipStarCfg(t.id, t.starLevel).AdvertisementNum
    },
    e.prototype.refreshLookVideoCount = function() {
        var t = this.getNeedVideoCount();
        t || (this.NodeVideo.active = !1),
        this.NodeVideo.getChildByName("LabVideo").getComponent(cc.Label).string = this.lookVideoCount + "/" + t
    },
    e.prototype.recognitionCompositeList = function(t, e) {
        var o = this;
        if (this.isLoadEnd) if (this.lookVideoCount > 0) u.UIMgr.getInstance().openUI(d.UIID.UIGeneralWindow1, -1, "", "<color = #000000>切换装备或退出界面\n当前视频进度将</c><color = #ff0000>不予保存</c>噢！", null,
        function() {
            o.isFullForCompositeIndex() ? u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "合成栏已满") : (o.destroyBagItemforIndex(t), o.isNullForCompositeIndex() && (o.jumpCurPage(), o.filtrateEquip(e), o.loadBagPage(o.curBagList)), o.addToCompositeIndex(e))
        },
        null);
        else {
            if (this.isFullForCompositeIndex()) return void u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "合成栏已满");
            this.destroyBagItemforIndex(t),
            this.isNullForCompositeIndex() && (this.jumpCurPage(), this.filtrateEquip(e), this.loadBagPage(this.curBagList)),
            this.addToCompositeIndex(e)
        }
    },
    e.prototype.initCompositeView = function() {
        this.addToCompositeIndex(this.introductionEquipData),
        this.filtrateEquip(this.introductionEquipData),
        this.loadBagPage(this.curBagList)
    },
    e.prototype.loadBagPage = function(t) {
        this.clearEquipAndData();
        for (var e = t,
        o = 0; o < 8; o++) {
            var a = this.ContentBag.children[o];
            this.loadBagItem(a, !1, o, e)
        }
    },
    e.prototype.loadBagItem = function(t, e, o, a) {
        var i = this; (!a || a.length <= 0) && (this.isLoadEnd = !0);
        for (var r = function(e) {
            n.scheduleOnce(function() {
                var r = e + 18 * o,
                n = null;
                cc.isValid(i.nodeBagItemList[r]) ? n = i.nodeBagItemList[r] : ((n = cc.instantiate(i.NodeBagItem)).parent = t, n.position = cc.Vec3.ZERO, i.nodeBagItemList.push(n)),
                a.length > r && (i.loadEquipToBag(r, n, a[r]), r == i.curBagList.length - 1 && (i.isLoadEnd = !0))
            },
            .01 * (e + 18 * o))
        },
        n = this, s = 0; s < 18; s++) r(s)
    },
    e.prototype.loadEquipToBag = function(t, e, o) {
        var a = cc.instantiate(this.PrefabEquip);
        a.parent = e,
        m.default.getInstance().playEffForQuality(a, o.quality),
        a.getComponent(v.default).initData(t, o, d.UIID.UIEquip);
        var i = f.DataMgr.getInstance().getEquipCfg(o.id);
        this.loadSpriteFrame(i.bundleQuality, i.iconQuality,
        function(t) {
            a.getComponent(cc.Sprite).spriteFrame = t
        }),
        this.loadSpriteFrame(i.bundle, i.equipIcon,
        function(t) {
            a.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t
        }),
        o.strengthenLv > 0 ? (a.getChildByName("LabStrengthenLv").active = !0, a.getChildByName("LabStrengthenLv").getComponent(cc.Label).string = "+" + o.strengthenLv) : a.getChildByName("LabStrengthenLv").active = !1;
        var r = o.starLevel ? o.starLevel: 0;
        if (r > 0) {
            var n = a.getChildByName("NodeStar");
            n.active = !0;
            for (var s = 0; s < n.childrenCount; s++) r > s ? cc.isValid(n.children[s]) && (n.children[s].getChildByName("SpStar").active = !0) : cc.isValid(n.children[s]) && (n.children[s].getChildByName("SpStar").active = !1)
        }
        this.isNullForCompositeIndex() || this.getCompositeEquipQualityNum(o) && this.getCompositeEquipStarNum2(o) || (a.getChildByName("SpMask").active = !0),
        this.nodeEquipItemList.length > t ? (this.nodeEquipItemList[t] = a, this.dataEquipItemList[t] = o) : (this.nodeEquipItemList.push(a), this.dataEquipItemList.push(o))
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
            if (null == o) {
                o = this.nodeEquipItemList.length;
                for (var a = 0; a < this.nodeEquipItemList.length; a++) if (!this.nodeEquipItemList[a]) {
                    o = a;
                    break
                }
            }
            var i = this.nodeBagItemList[o];
            cc.isValid(i) && this.loadEquipToBag(o, i, t)
        }
    },
    e.prototype.addToCompositeIndex = function(t) {
        if (t) {
            for (var e = -1,
            o = 0; o < this.equipCompositeList.length; o++) if (!this.equipCompositeList[o]) {
                0 == o && (this.introductionEquipData = t, this.LayoutProp.destroyAllChildren(), this.scheduleOnce(this.changeNodeInfo), this.scheduleOnce(this.showNodeInfo)),
                this.equipCompositeList[o] = t,
                e = o;
                break
            }
            if ( - 1 != e) {
                var a = this.NodeComposite.getChildByName("NodeCompositeEquip" + e),
                i = f.DataMgr.getInstance().getEquipCfg(t.id),
                r = cc.instantiate(this.NodeEquip);
                a.addChild(r),
                this.loadSpriteFrame(i.bundleQuality, i.iconQuality,
                function(t) {
                    r.getComponent(cc.Sprite).spriteFrame = t
                }),
                this.loadSpriteFrame(i.bundle, i.equipIcon,
                function(t) {
                    r.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t
                }),
                t.strengthenLv > 0 ? (r.getChildByName("LabStrengthenLv").active = !0, r.getChildByName("LabStrengthenLv").getComponent(cc.Label).string = "+" + t.strengthenLv) : r.getChildByName("LabStrengthenLv").active = !1;
                var n = t.starLevel ? t.starLevel: 0;
                if (n > 0) for ((c = r.getChildByName("NodeStar")).active = !0, o = 0; o < c.childrenCount; o++) n > o ? cc.isValid(c.children[o]) && (c.children[o].getChildByName("SpStar").active = !0) : cc.isValid(c.children[o]) && (c.children[o].getChildByName("SpStar").active = !1);
                if (!cc.isValid(this.NodeCompositeEquip.getChildByName("NodeEquip"))) {
                    var s = cc.instantiate(this.NodeEquip);
                    this.NodeCompositeEquip.addChild(s),
                    this.loadSpriteFrame(i.bundleQuality, i.iconQuality,
                    function(t) {
                        s.getComponent(cc.Sprite).spriteFrame = t
                    }),
                    this.loadSpriteFrame(i.bundle, i.equipIcon,
                    function(t) {
                        s.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t
                    });
                    var c, u = t.starLevel ? t.starLevel + 1 : 1;
                    if (u > 0) for ((c = s.getChildByName("NodeStar")).active = !0, o = 0; o < c.childrenCount; o++) u > o ? cc.isValid(c.children[o]) && (c.children[o].getChildByName("SpStar").active = !0, u == o + 1 && l.TweenMgr.getInstance().playBlinkAnim(c.children[o].getChildByName("SpStar"))) : cc.isValid(c.children[o]) && (c.children[o].getChildByName("SpStar").active = !1)
                }
                this.isFullForCompositeIndex() ? (this.refreshBtnState(!0), this.refreshVideoState(!1)) : (this.refreshBtnState(!1), this.refreshVideoState(!0))
            }
        }
    },
    e.prototype.clearEquipAndData = function() {
        this.isLoadEnd = !1;
        for (var t = 0; t < this.nodeBagItemList.length; t++) cc.isValid(this.nodeBagItemList[t]) && this.nodeBagItemList[t].childrenCount > 0 && this.nodeBagItemList[t].children[0].destroy();
        this.nodeEquipItemList = [],
        this.dataEquipItemList = []
    },
    e.prototype.filtrateEquip = function(t) {
        if (this.curBagList = [], t) {
            var e = m.default.getInstance().getOwmedEquipForQualityId(t.quality),
            o = [],
            a = [];
            for (r = 0; r < e.length; r++) e[r].quality == t.quality ? e[r].IDCard != t.IDCard && (o.push(e[r]), o.sort(function(t, e) {
                return t.starLevel - e.starLevel
            })) : a.push(e[r]);
            for (this.curBagList = o, r = 0; r < a.length; r++) this.curBagList.push(a[r])
        } else {
            for (var i = m.default.getInstance().getOwnedEquipList(), r = 0; r < i.length; r++) this.curBagList.push(i[r]);
            this.curBagList.sort(function(t, e) {
                return e.quality - t.quality
            })
        }
    },
    e.prototype.getCompositeEquipStarNum = function(t) {
        for (var e = !1,
        o = 0; o < this.equipCompositeList.length; o++) if (this.equipCompositeList[o]) {
            t.id == this.equipCompositeList[o].id && t.starLevel == this.equipCompositeList[o].starLevel && (e = !0);
            break
        }
        return e
    },
    e.prototype.getCompositeEquipStarNum2 = function(t) {
        for (var e = !1,
        o = 0; o < this.equipCompositeList.length; o++) if (this.equipCompositeList[o]) {
            t.starLevel == this.equipCompositeList[o].starLevel && (e = !0);
            break
        }
        return e
    },
    e.prototype.getCompositeEquipQualityNum = function(t) {
        for (var e = !1,
        o = 0; o < this.equipCompositeList.length; o++) if (this.equipCompositeList[o]) {
            t.quality == this.equipCompositeList[o].quality && (e = !0);
            break
        }
        return e
    },
    e.prototype.isFullForCompositeIndex = function() {
        for (var t = !0,
        e = 0; e < this.equipCompositeList.length; e++) if (!this.equipCompositeList[e]) {
            t = !1;
            break
        }
        return t
    },
    e.prototype.isNullForCompositeIndex = function() {
        for (var t = !0,
        e = 0; e < this.equipCompositeList.length; e++) this.equipCompositeList[e] && (t = !1);
        return t
    },
    e.prototype.clearCompositeIndex = function() {
        for (var t = 0; t < this.NodeComposite.childrenCount; t++) cc.isValid(this.NodeComposite.children[t].getChildByName("NodeEquip")) && this.NodeComposite.children[t].getChildByName("NodeEquip").destroy()
    },
    e.prototype.clearCompositeData = function() {
        for (var t = 0; t < this.equipCompositeList.length; t++) this.equipCompositeList[t] = null
    },
    e.prototype.playHCEff = function(t) {
        var e = this;
        this.NodeEFf_HC.node.active = !0,
        this.NodeEFf_HC.getComponent(sp.Skeleton).setAnimation(0, "ani1", !1),
        this.NodeEFf_HC.getComponent(sp.Skeleton).setCompleteListener(function() {
            e.NodeEFf_HC.node.active = !1,
            t && t()
        })
    },
    e.prototype.callbackPageView = function() {
        this.initCurPage(),
        this.loadPageNum()
    },
    e.prototype.closeView = function() {
        this.closeUI()
    },
    e.prototype.showNodeInfo = function() {
        this.NodeInfo.active = !0
    },
    e.prototype.hideNodeInfo = function() {
        this.NodeInfo.active = !1
    },
    e.prototype.changeNodeInfo = function() {
        var t = f.DataMgr.getInstance().getEquipCfg(this.introductionEquipData.id);
        if (this.LabName.string = t.equipName, t.LvAtk) {
            var e = p.Utils.getTabelArr(t.atk),
            o = p.Utils.getTabelArr(t.LvAtk),
            a = ["0", "0"];
            if (this.introductionEquipData.starLevel && this.introductionEquipData.starLevel > 0) {
                var i = f.DataMgr.getInstance().getEquipStarCfg(this.introductionEquipData.id, this.introductionEquipData.starLevel);
                a = p.Utils.getTabelArr(i.atk)
            }
            var r = Number(e[0]) + Number(o[0]) * this.introductionEquipData.strengthenLv + Number(a[0]),
            n = Number(e[1]) + Number(o[1]) * this.introductionEquipData.strengthenLv + Number(a[1]),
            s = this.LayoutProp.getChildByName("LayoutProp1");
            cc.isValid(s) || ((s = cc.instantiate(this.LayoutNodeProp)).parent = this.LayoutProp, s.name = "LayoutProp1");
            var c = n - r;
            s.getChildByName("LabProp").getComponent(cc.RichText).string = "<color=#ffffff>攻击力：</c><color=#3bacf3>" + r + "~" + n + "</color>",
            this.loadPropChange(8, s, c)
        }
        if (t.LvHp) {
            var l = this.introductionEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.introductionEquipData.id, this.introductionEquipData.starLevel).hp: 0;
            this.addPropNode(9, t.hp + t.LvHp * this.introductionEquipData.strengthenLv + l)
        }
        t.atkSpeed && (l = this.introductionEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.introductionEquipData.id, this.introductionEquipData.starLevel).atkSpeed: 0, this.addPropNode(3, t.atkSpeed + l)),
        t.atkCrazyProb && (l = this.introductionEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.introductionEquipData.id, this.introductionEquipData.starLevel).atkCrazyProb: 0, this.addPropNode(4, t.atkCrazyProb + l)),
        t.atkCrazyHurt && (l = this.introductionEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.introductionEquipData.id, this.introductionEquipData.starLevel).atkCrazyHurt: 0, this.addPropNode(5, t.atkCrazyHurt + l)),
        t.subHurt && (l = this.introductionEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.introductionEquipData.id, this.introductionEquipData.starLevel).subHurt: 0, this.addPropNode(6, t.subHurt + l)),
        t.dodgeHurtProb && (l = this.introductionEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.introductionEquipData.id, this.introductionEquipData.starLevel).dodgeHurtProb: 0, this.addPropNode(7, t.dodgeHurtProb + l))
    },
    e.prototype.addPropNode = function(t, e) {
        var o = this.LayoutProp.getChildByName("LayoutProp" + t);
        cc.isValid(o) || ((o = cc.instantiate(this.LayoutNodeProp)).parent = this.LayoutProp, o.name = "LayoutProp" + t);
        var a = m.default.getInstance().getPropNameForPropType(t);
        o.getChildByName("LabProp").getComponent(cc.RichText).string = "<color=#ffffff>" + a + "：</c><color=#3bacf3>" + e + m.default.getInstance().getPropPercent(t) + "</color>",
        this.loadPropChange(t, o, e)
    },
    e.prototype.loadPropChange = function(t, e, o) {
        var a = e.getChildByName("SpChange"),
        i = e.getChildByName("LabChange");
        if (cc.isValid(a) && cc.isValid(i)) {
            var r = 0,
            n = f.DataMgr.getInstance().getEquipStarCfg(this.introductionEquipData.id, this.introductionEquipData.starLevel);
            if (8 == t) {
                var s = p.Utils.getTabelArr(n.atk);
                r = (Number(s[1]) + Number(s[0])) / 2 - 0
            } else 9 == t ? r = n.hp - 0 : 3 == t ? r = n.atkSpeed - 0 : 4 == t ? r = n.atkCrazyProb - 0 : 5 == t ? r = n.atkCrazyHurt - 0 : 6 == t ? r = n.subHurt - 0 : 7 == t && (r = n.dodgeHurtProb - 0);
            0 == r ? (a.active = !1, i.active = !1) : (i.color = r > 0 ? cc.color(64, 220, 47) : cc.color(246, 47, 0), i.getComponent(cc.Label).string = 8 == t ? Math.ceil(o) + "~" + Math.ceil(r + o) : "" + Math.ceil(Math.abs(r + o)))
        } else console.log("不存在！！！")
    },
    r([C(cc.Node)], e.prototype, "BtnBack", void 0),
    r([C(cc.Node)], e.prototype, "BtnComposite", void 0),
    r([C({
        type: cc.Node,
        tooltip: "装备合成节点"
    })], e.prototype, "NodeComposite", void 0),
    r([C({
        type: cc.Node,
        tooltip: "装备合成位"
    })], e.prototype, "NodeCompositeEquip", void 0),
    r([C({
        type: cc.Node,
        tooltip: "合成装备"
    })], e.prototype, "NodeEquip", void 0),
    r([C({
        type: cc.Node,
        tooltip: "装备信息"
    })], e.prototype, "NodeInfo", void 0),
    r([C({
        type: cc.Prefab,
        tooltip: "装备预制"
    })], e.prototype, "PrefabEquip", void 0),
    r([C({
        type: cc.Node,
        tooltip: "背包空壳item"
    })], e.prototype, "NodeBagItem", void 0),
    r([C({
        type: cc.Node,
        tooltip: "背包页数标签"
    })], e.prototype, "LabPageNum", void 0),
    r([C(cc.PageView)], e.prototype, "PageViewBag", void 0),
    r([C(cc.Node)], e.prototype, "ContentBag", void 0),
    r([C(cc.Node)], e.prototype, "Indicator", void 0),
    r([C(sp.Skeleton)], e.prototype, "NodeEFf_HC", void 0),
    r([C(cc.Node)], e.prototype, "NodeCost", void 0),
    r([C(cc.Label)], e.prototype, "LabCost", void 0),
    r([C(cc.Node)], e.prototype, "NodeVideo", void 0),
    r([C(cc.Node)], e.prototype, "LayoutProp", void 0),
    r([C(cc.Node)], e.prototype, "LayoutNodeProp", void 0),
    r([C(cc.Label)], e.prototype, "LabName", void 0),
    r([k], e)
} (n.default);
o.default = S