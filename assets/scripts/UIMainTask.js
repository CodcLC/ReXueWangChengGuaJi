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
}),
o.UIMainTask = void 0;
var n = t("BaseUI"),
s = t("ResourceMgr"),
c = t("SdkMgr"),
l = t("UIMgr"),
u = t("Config"),
p = t("TrackDataEvent"),
g = t("DataMgr"),
d = t("GoodsManager"),
h = t("PlayerMgr"),
f = t("TimeMgr"),
m = cc._decorator,
y = m.ccclass,
v = m.property,
I = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.spBar = null,
        e.labTaskProgress = null,
        e.labTaskDec = null,
        e.btnGet = null,
        e.btnVideoGet = null,
        e.btnGoto = null,
        e.btnClose = null,
        e.rewardItem = null,
        e.curTaskId = 1,
        e
    }
    return i(e, t),
    e.prototype.start = function() {
        this.registerBtnEvent(),
        this.initData(),
        this.initView()
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.btnClose.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.closeView()
        }),
        this.btnGoto.on(cc.Node.EventType.TOUCH_END,
        function() {
            var e = h.PlayerMgr.getInstance().getMainTaskData().getCurrentId(),
            o = g.DataMgr.getInstance().getMission(e);
            if (u.UIID.UIHome != o.JumpRoute) {
                var a = u.UIID.UIHomeNew;
                u.UIID.UIOnlineReward == o.JumpRoute ? f.TimeMgr.getInstance().time_online < 60 ? l.UIMgr.getInstance().openUI(u.UIID.UITips, -1, "还未获得奖励") : l.UIMgr.getInstance().openUI(u.UIID.UIOnlineReward, -1) : (u.UIID.UIMysticalShop != o.JumpRoute && l.UIMgr.getInstance().closeById(a), l.UIMgr.getInstance().openUI(o.JumpRoute, -1))
            }
            t.closeView()
        }),
        this.btnGet.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.curTaskId <= 30 && h.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.mainlinetask_X, t.curTaskId),
            h.PlayerMgr.getInstance().getMainTaskData().addTaskId(),
            t.getReward(),
            t.closeView()
        }),
        this.btnVideoGet.on(cc.Node.EventType.TOUCH_END,
        function() {
            c.SdkMgr.getInstance().playVideo(1,
            function() {
                t.curTaskId <= 30 && h.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.mainlinetask_X, t.curTaskId),
                h.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.task_doubleaward),
                h.PlayerMgr.getInstance().getMainTaskData().addTaskId(),
                t.getReward(!0),
                t.closeView()
            })
        })
    },
    e.prototype.initData = function() {
        this.curTaskId = h.PlayerMgr.getInstance().getMainTaskData().getCurrentId()
    },
    e.prototype.initView = function() {
        this.refreshView(),
        this.initRewardView()
    },
    e.prototype.refreshView = function() {
        var t = g.DataMgr.getInstance().getMission(this.curTaskId);
        if (t) {
            this.labTaskDec.string = "" + t.Desc1 + t.TaskParameter + t.Desc2,
            this.spBar.fillRange = h.PlayerMgr.getInstance().getMainTaskData().getCurrentParameter() / t.TaskParameter,
            this.labTaskProgress.string = h.PlayerMgr.getInstance().getMainTaskData().getCurrentParameter() + "/" + t.TaskParameter;
            var e = h.PlayerMgr.getInstance().getMainTaskData().getCurrentState();
            this.btnGoto.active = !e,
            this.btnGet.active = e,
            this.btnVideoGet.active = e
        }
    },
    e.prototype.initRewardView = function() {
        var t, e = this,
        o = h.PlayerMgr.getInstance().getMainTaskData().getCurrentId(),
        a = g.DataMgr.getInstance().getMission(o),
        i = g.DataMgr.getInstance().getGoodsCfg(a.RewardType);
        switch (s.ResourceMgr.getInstance().loadSpriteframe(i.bundleQuality, i.iconQuality,
        function(t) {
            e.rewardItem.getChildByName("SpIconBg").getComponent(cc.Sprite).spriteFrame = t
        }), this.rewardItem.getChildByName("LabIconName").getComponent(cc.Label).string = i.goodsName + "x" + a.RewardNum, this.rewardItem.getChildByName("LabIconName").color = d.default.getInstance().seleColor(i.goodsQualityId), i.goodsType) {
            case "gold":
            case "inGot":
            case "power":
                t = g.DataMgr.getInstance().getGoodsCfg(a.RewardType),
            s.ResourceMgr.getInstance().loadSpriteframe(t.bundle, t.goodsGameIcon,
            function(t) {
                e.rewardItem.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t
            });
        }
    },
    e.prototype.getReward = function(t) {
        void 0 === t && (t = !1);
        var e = h.PlayerMgr.getInstance().getMainTaskData().getCurrentId(),
        o = g.DataMgr.getInstance().getMission(e),
        a = g.DataMgr.getInstance().getGoodsCfg(o.RewardType),
        i = h.PlayerMgr.getInstance().geUserData(),
        r = t ? 2 * o.RewardNum: o.RewardNum;
        switch (a.goodsType) {
            case "gold":
                i.addGoldNum(r),
            l.UIMgr.getInstance().openUI(u.UIID.UITips, -1, "成功领取 金币x" + r);
            break;
            case "inGot":
                i.addInGotNum(r),
            l.UIMgr.getInstance().openUI(u.UIID.UITips, -1, "成功领取 元宝x" + r);
            break;
            case "power":
                i.addPowerNum(r),
            l.UIMgr.getInstance().openUI(u.UIID.UITips, -1, "成功领取 体力x" + r);
        }
    },
    e.prototype.closeView = function() {
        this.closeUI()
    },
    r([v({
        type: cc.Sprite,
        displayName: ""
    })], e.prototype, "spBar", void 0),
    r([v({
        type: cc.Label,
        displayName: ""
    })], e.prototype, "labTaskProgress", void 0),
    r([v({
        type: cc.Label,
        displayName: ""
    })], e.prototype, "labTaskDec", void 0),
    r([v({
        type: cc.Node,
        displayName: ""
    })], e.prototype, "btnGet", void 0),
    r([v({
        type: cc.Node,
        displayName: ""
    })], e.prototype, "btnVideoGet", void 0),
    r([v({
        type: cc.Node,
        displayName: ""
    })], e.prototype, "btnGoto", void 0),
    r([v({
        type: cc.Node,
        displayName: ""
    })], e.prototype, "btnClose", void 0),
    r([v(cc.Node)], e.prototype, "rewardItem", void 0),
    r([y("UIMainTask")], e)
} (n.default);
o.UIMainTask = I