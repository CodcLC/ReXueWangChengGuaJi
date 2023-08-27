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
c = t("PlatformManager"),
l = t("SdkMgr"),
u = t("UIMgr"),
p = t("TimeUtils"),
g = t("Config"),
d = t("TrackDataEvent"),
h = t("DataMgr"),
f = t("GameMgr"),
m = t("GoodsManager"),
y = t("PlayerMgr"),
v = t("TimeMgr"),
I = cc._decorator,
k = I.ccclass,
C = I.property,
S = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.CostIcon = [],
        e.BtnBack = null,
        e.BtnRefresh = null,
        e.NodeItem = null,
        e.LayoutShop = null,
        e.LabRefreshTime = null,
        e.NodeEff = null,
        e.curItemList = [],
        e
    }
    return i(e, t),
    e.prototype.start = function() {
        this.refreshMysticalShopSaveTime(),
        this.registerEvent(),
        this.registerBtnEvent(),
        this.initView(),
        c.PlatformManager.getInstance().hideBlockAd(2)
    },
    e.prototype.registerEvent = function() {},
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnBack.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.closeView()
        }),
        this.BtnRefresh.on(cc.Node.EventType.TOUCH_END,
        function() {
            l.SdkMgr.getInstance().playVideo(1,
            function() {
                y.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.store_refresh),
                t.refreshItemList()
            })
        })
    },
    e.prototype.refreshMysticalShopSaveTime = function() {
        var t = y.PlayerMgr.getInstance().getMysticalShopData().getLastLoginTime();
        if (y.PlayerMgr.getInstance().getMysticalShopData().refreshLastLoginTime(), 0 != t) {
            var e = y.PlayerMgr.getInstance().getMysticalShopData().getLastLoginTime() - t;
            y.PlayerMgr.getInstance().getMysticalShopData().subMysticalShopTime(e)
        }
    },
    e.prototype.openMysticalShopTimer = function() {
        v.TimeMgr.getInstance().openTimer_MysticalShop()
    },
    e.prototype.refreshTime = function(t) {
        var e = p.TimeUtils.SecondToHours(t);
        t <= 0 && this.refreshItemList(),
        this.LabRefreshTime.string = e
    },
    e.prototype.initView = function() {
        this.initItemLayout()
    },
    e.prototype.initItemLayout = function() {
        var t = this,
        e = y.PlayerMgr.getInstance().getMysticalShopData().getMysticalShopList();
        e.length < 9 && (f.default.getInstance().refreshMysticalShopData(), e = y.PlayerMgr.getInstance().getMysticalShopData().getMysticalShopList());
        for (var o = function(o) {
            var i = cc.instantiate(a.NodeItem);
            i.active = !0,
            i.parent = a.LayoutShop,
            i.position = cc.v3(),
            a.curItemList.push(i);
            var r = h.DataMgr.getInstance().getMysticalShop(e[o].id),
            n = [h.DataMgr.getInstance().getGoodsCfg(r.GoodsID).goodsType, e[o].itemId];
            y.PlayerMgr.getInstance().getMysticalShopData().addMysticalShopList(e[o]),
            a.loadItemList(i, n, r, e[o]),
            i.on(cc.Node.EventType.TOUCH_END,
            function() {
                t.refreshCurItem(o)
            })
        },
        a = this, i = 0; i < 9; i++) o(i)
    },
    e.prototype.loadItemList = function(t, e, o, a) {
        if (e && !(e.length <= 0)) {
            var i = h.DataMgr.getInstance().getGoodsCfg(o.GoodsID);
            switch (this.loadSpriteFrame(i.bundleQuality, i.iconQuality,
            function(e) {
                t.getChildByName("SpIconBg").getComponent(cc.Sprite).spriteFrame = e
            }), t.getChildByName("NodeCost").getChildByName("SpCostIcon").getComponent(cc.Sprite).spriteFrame = this.CostIcon[o.SaleType - 1], 1 == o.SaleType ? (t.getChildByName("NodeCost").getChildByName("LabCostCount").getComponent(cc.Label).string = a.videoCount + "/" + o.SalePrice, t.getChildByName("NodeCost").getChildByName("SpCostIcon").scale = 1) : t.getChildByName("NodeCost").getChildByName("LabCostCount").getComponent(cc.Label).string = "" + o.SalePrice, o.DiscountLabel ? (t.getChildByName("SpDiscount").active = !0, t.getChildByName("SpDiscount").getChildByName("LabDiscount").getComponent(cc.Label).string = o.DiscountLabel + "折") : t.getChildByName("SpDiscount").active = !1, a.isBuy ? (t.getChildByName("SpDiscount").active = !1, t.getChildByName("SpLight").active = !1, t.getChildByName("NodeCost").active = !1) : (t.getChildByName("SpLight").active = !0, t.getChildByName("NodeCost").active = !0), e[0]) {
                case "equip":
                    var r = h.DataMgr.getInstance().getEquipCfg(e[1]);
                this.loadSpriteFrame(r.bundle, r.equipIcon,
                function(e) {
                    t.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = e
                }),
                t.getChildByName("SpIcon").scale = 1,
                t.getChildByName("LabIconName").getComponent(cc.Label).string = r.equipName,
                t.getChildByName("LabIconName").color = m.default.getInstance().seleColor(r.qualityId),
                t.getChildByName("SpItemMask").getChildByName("LabIconNameMask").getComponent(cc.Label).string = r.equipName,
                t.getChildByName("SpItemMask").getChildByName("LabIconNameMask").color = m.default.getInstance().seleColor(r.qualityId),
                a.isBuy ? t.getChildByName("SpItemMask").active = !0 : t.getChildByName("SpItemMask").active = !1,
                t.getChildByName("LabSkillName").active = !1;
                break;
                case "skillBook":
                    var n = h.DataMgr.getInstance().getSkillBook(e[1]);
                h.DataMgr.getInstance().getSkillQuality(n.qualityId),
                this.loadSpriteFrame("iconImg", n.SkillIcon,
                function(e) {
                    t.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = e
                }),
                t.getChildByName("LabSkillName").active = !1,
                t.getChildByName("SpIcon").scale = .75,
                t.getChildByName("LabIconName").getComponent(cc.Label).string = n.name,
                t.getChildByName("LabIconName").color = m.default.getInstance().seleColor(n.qualityId),
                t.getChildByName("SpItemMask").getChildByName("LabIconNameMask").getComponent(cc.Label).string = n.name,
                t.getChildByName("SpItemMask").getChildByName("LabIconNameMask").color = m.default.getInstance().seleColor(n.qualityId),
                a.isBuy ? t.getChildByName("SpItemMask").active = !0 : t.getChildByName("SpItemMask").active = !1,
                t.getChildByName("LabSkillName").getComponent(cc.Label).string = n.name;
            }
        }
    },
    e.prototype.refreshItemList = function() {
        var t = this;
        if (this.saoGuangAnim(), f.default.getInstance().refreshMysticalShopData(), this.curItemList.length <= 0) for (var e = y.PlayerMgr.getInstance().getMysticalShopData().getMysticalShopList(), o = function(o) {
            var i = cc.instantiate(a.NodeItem);
            i.active = !0,
            i.parent = a.LayoutShop,
            i.position = cc.v3(),
            a.curItemList.push(i);
            var r = h.DataMgr.getInstance().getMysticalShop(e[o].id),
            n = [h.DataMgr.getInstance().getGoodsCfg(r.GoodsID).goodsType, e[o].itemId];
            a.loadItemList(i, n, r, e[o]),
            y.PlayerMgr.getInstance().getMysticalShopData().refreshMysticalShopList(o, e[o]),
            i.on(cc.Node.EventType.TOUCH_END,
            function() {
                t.refreshCurItem(o)
            })
        },
        a = this, i = 0; i < 9; i++) o(i);
        else for (e = y.PlayerMgr.getInstance().getMysticalShopData().getMysticalShopList(), i = 0; i < this.curItemList.length; i++) {
            var r = h.DataMgr.getInstance().getMysticalShop(e[i].id),
            n = [h.DataMgr.getInstance().getGoodsCfg(r.GoodsID).goodsType, e[i].itemId];
            y.PlayerMgr.getInstance().getMysticalShopData().addMysticalShopList(e[i]),
            this.loadItemList(this.curItemList[i], n, r, e[i])
        }
    },
    e.prototype.refreshCurItem = function(t) {
        var e = this,
        o = y.PlayerMgr.getInstance().getMysticalShopData().getMysticalShopList()[t];
        if (!o.isBuy) {
            var a = h.DataMgr.getInstance().getMysticalShop(o.id),
            i = h.DataMgr.getInstance().getGoodsCfg(a.GoodsID);
            switch (a.SaleType) {
                case 1:
                    l.SdkMgr.getInstance().playVideo(1,
                function() {
                    "equip" == i.goodsType ? y.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.store_getequip) : y.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.store_getskill);
                    var r = o.videoCount + 1;
                    r >= a.SalePrice ? y.PlayerMgr.getInstance().getMysticalShopData().setMysticalShopList(o.id, !0, r) : (u.UIMgr.getInstance().openUI(g.UIID.UITips, -1, "观看成功，进度+1"), y.PlayerMgr.getInstance().getMysticalShopData().setMysticalShopList(o.id, !1, r)),
                    e.curItemList[t].getChildByName("NodeCost").getChildByName("LabCostCount").getComponent(cc.Label).string = o.videoCount + "/" + a.SalePrice,
                    e.buySuccess(t, i)
                });
                break;
                case 2:
                    y.PlayerMgr.getInstance().geUserData().subGoldNum(a.SalePrice) && y.PlayerMgr.getInstance().getMysticalShopData().setMysticalShopList(o.id, !0),
                this.buySuccess(t, i);
                break;
                case 3:
                    y.PlayerMgr.getInstance().geUserData().subInGotNum(a.SalePrice) && y.PlayerMgr.getInstance().getMysticalShopData().setMysticalShopList(o.id, !0),
                this.buySuccess(t, i);
            }
        }
    },
    e.prototype.buySuccess = function(t, e) {
        var o = y.PlayerMgr.getInstance().getMysticalShopData().getMysticalShopList()[t];
        if (o.isBuy) switch (y.PlayerMgr.getInstance().getTrackData().addCountStore(), y.PlayerMgr.getInstance().getTrackData().getCountStore() <= 10 && y.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.store_time_X, y.PlayerMgr.getInstance().getTrackData().getCountStore()), y.PlayerMgr.getInstance().getMainTaskData().mainTask(4), this.curItemList[t].getChildByName("SpDiscount").active = !1, this.curItemList[t].getChildByName("NodeCost").active = !1, this.curItemList[t].getChildByName("SpLight").active = !1, this.curItemList[t].getChildByName("SpItemMask").active = !0, e.goodsType) {
            case "equip":
                var a = h.DataMgr.getInstance().getEquipCfg(o.itemId);
            y.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.store_quip_X, a.id),
            y.PlayerMgr.getInstance().geUserData().addBaseEquip(a);
            var i = m.default.getInstance().getColorForQuality(a.qualityId);
            u.UIMgr.getInstance().openUI(g.UIID.UITips, -1, "成功获取 <color = #" + i + ">" + a.equipName + "</c>x1"),
            s.EventMgr.getInstance().emit(g.EventName.RefreshRedDot, !0, !1, !1, !0, !1);
            break;
            case "skillBook":
                var r = h.DataMgr.getInstance().getSkillBook(o.itemId);
            y.PlayerMgr.getInstance().getTrackData().youmengTrack(d.TrackId.store_skill_X, r.id),
            y.PlayerMgr.getInstance().geUserData().addSkillBookId(o.itemId),
            i = m.default.getInstance().getColorForQuality(r.qualityId),
            u.UIMgr.getInstance().openUI(g.UIID.UITips, -1, "成功领取 <color = #" + i + ">" + r.name + "</c>x1"),
            s.EventMgr.getInstance().emit(g.EventName.RefreshRedDot, !0, !1, !0, !1, !1);
        } else this.curItemList[t].getChildByName("SpLight").active = !0,
        this.curItemList[t].getChildByName("SpItemMask").active = !1
    },
    e.prototype.saoGuangAnim = function() {
        this.NodeEff.active = !0,
        this.NodeEff.getComponent(sp.Skeleton).setAnimation(0, "saoguang", !1)
    },
    e.prototype.closeView = function() {
        this.closeUI(),
        this.refreshMysticalShopSaveTime(),
        c.PlatformManager.getInstance().showBlockAd(2)
    },
    r([C(cc.SpriteFrame)], e.prototype, "CostIcon", void 0),
    r([C(cc.Node)], e.prototype, "BtnBack", void 0),
    r([C(cc.Node)], e.prototype, "BtnRefresh", void 0),
    r([C(cc.Node)], e.prototype, "NodeItem", void 0),
    r([C(cc.Node)], e.prototype, "LayoutShop", void 0),
    r([C(cc.Label)], e.prototype, "LabRefreshTime", void 0),
    r([C(cc.Node)], e.prototype, "NodeEff", void 0),
    r([k], e)
} (n.default);
o.default = S