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
c = t("SdkMgr"),
l = t("UIMgr"),
u = t("TimeUtils"),
p = t("Config"),
g = t("TrackDataEvent"),
d = t("DataMgr"),
h = t("PlayerMgr"),
f = cc._decorator,
m = f.ccclass,
y = f.property,
v = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.SpPower = null,
        e.SpGold = null,
        e.SpInGot = null,
        e.BtnBack = null,
        e.BtnFalse = null,
        e.BtnTrue = null,
        e.LabTitle = null,
        e.SpIcon = null,
        e.LabNum = null,
        e.LayoutBtn = null,
        e.curTurnView = p.UIID.UIHome,
        e.curwindowType = p.GeneralWindowType.GoldWindow,
        e.curGoodsCount = 100,
        e.callback = null,
        e
    }
    return i(e, t),
    e.prototype.init = function(t, e) {
        this.curwindowType = t || p.GeneralWindowType.GoldWindow,
        this.callback = e ||
        function() {}
    },
    e.prototype.onLoad = function() {},
    e.prototype.start = function() {
        this.registerBtnListener(),
        this.initView()
    },
    e.prototype.onClose = function() {},
    e.prototype.initView = function() {
        var t = h.PlayerMgr.getInstance().geUserData().getCurSec();
        switch (this.curwindowType) {
            case p.GeneralWindowType.PowerWindow:
                this.SpIcon.spriteFrame = this.SpPower,
            this.LabTitle.string = "免费体力",
            this.curGoodsCount = d.DataMgr.getInstance().getGoodsCountForType(3),
            this.LabNum.string = "体力x" + this.curGoodsCount;
            break;
            case p.GeneralWindowType.GoldWindow:
                this.SpIcon.spriteFrame = this.SpGold,
            this.LabTitle.string = "免费金币",
            this.curGoodsCount = d.DataMgr.getInstance().getGoodsCountForTypeAndSec(1, t),
            this.LabNum.string = "金币x" + this.curGoodsCount;
            break;
            case p.GeneralWindowType.InGotWindow:
                this.SpIcon.spriteFrame = this.SpInGot,
            this.LabTitle.string = "免费元宝";
            var e = h.PlayerMgr.getInstance().geUserData().getInGotGetCount();
            this.curGoodsCount = d.DataMgr.getInstance().getGoodsCountForTypeAndSec(2, e),
            this.LabNum.string = "元宝x" + this.curGoodsCount;
        }
    },
    e.prototype.registerBtnListener = function() {
        var t = this;
        this.BtnBack.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.closeView()
        }),
        this.BtnFalse.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.closeView()
        }),
        this.BtnTrue.on(cc.Node.EventType.TOUCH_END,
        function() {
            var e = u.TimeUtils.GetTimeBySecond(),
            o = u.TimeUtils.GetTimeByHours2();
            c.SdkMgr.getInstance().playVideo(1,
            function() {
                t.getReward(e, o),
                t.callback && t.callback(),
                t.closeView()
            })
        })
    },
    e.prototype.getReward = function(t, e) {
        var o = u.TimeUtils.GetTimeBySecond(),
        a = u.TimeUtils.GetTimeByHours2();
        switch (this.curwindowType) {
            case p.GeneralWindowType.PowerWindow:
                h.PlayerMgr.getInstance().getTrackData().testTrackTime("strength", e, a, t, o),
            h.PlayerMgr.getInstance().geUserData().addPowerNum(this.curGoodsCount),
            l.UIMgr.getInstance().openUI(p.UIID.UITips, -1, "成功领取 体力x" + this.curGoodsCount),
            h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.strength),
            h.PlayerMgr.getInstance().getTrackData().youmengTrackNew("strength_b");
            break;
            case p.GeneralWindowType.GoldWindow:
                h.PlayerMgr.getInstance().getTrackData().testTrackTime("coin", e, a, t, o),
            h.PlayerMgr.getInstance().geUserData().addGoldNum(this.curGoodsCount),
            l.UIMgr.getInstance().openUI(p.UIID.UITips, -1, "成功领取 金币x" + this.curGoodsCount),
            h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.coin),
            h.PlayerMgr.getInstance().getTrackData().youmengTrackNew("coin_b");
            break;
            case p.GeneralWindowType.InGotWindow:
                h.PlayerMgr.getInstance().getTrackData().testTrackTime("ingot", e, a, t, o),
            h.PlayerMgr.getInstance().geUserData().addInGotNum(this.curGoodsCount),
            l.UIMgr.getInstance().openUI(p.UIID.UITips, -1, "成功领取 元宝x" + this.curGoodsCount),
            h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.ingot),
            h.PlayerMgr.getInstance().getTrackData().youmengTrackNew("ingot_b"),
            h.PlayerMgr.getInstance().geUserData().addInGotGetCount();
        }
        s.EventMgr.getInstance().emit(p.EventName.RefreshStrengthenLv),
        s.EventMgr.getInstance().emit(p.EventName.RefreshShopRedDot)
    },
    e.prototype.closeView = function() {
        this.closeUI()
    },
    r([y(cc.SpriteFrame)], e.prototype, "SpPower", void 0),
    r([y(cc.SpriteFrame)], e.prototype, "SpGold", void 0),
    r([y(cc.SpriteFrame)], e.prototype, "SpInGot", void 0),
    r([y(cc.Node)], e.prototype, "BtnBack", void 0),
    r([y(cc.Node)], e.prototype, "BtnFalse", void 0),
    r([y(cc.Node)], e.prototype, "BtnTrue", void 0),
    r([y(cc.Label)], e.prototype, "LabTitle", void 0),
    r([y(cc.Sprite)], e.prototype, "SpIcon", void 0),
    r([y(cc.Label)], e.prototype, "LabNum", void 0),
    r([y(cc.Node)], e.prototype, "LayoutBtn", void 0),
    r([m], e)
} (n.default);
o.default = v