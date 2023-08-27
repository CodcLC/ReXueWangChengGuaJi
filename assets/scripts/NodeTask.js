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
var n = t("AudioMgr"),
s = t("EventMgr"),
c = t("ResourceMgr"),
l = t("SdkMgr"),
u = t("TweenMgr"),
p = t("UIMgr"),
g = t("Config"),
d = t("DataMgr"),
h = t("EffectMgr"),
f = t("GoodsManager"),
m = t("PlayerMgr"),
y = t("TaskMgr"),
v = t("TimeMgr"),
I = cc._decorator,
k = I.ccclass,
C = I.property,
S = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.SpNotGet = null,
        e.SpCanGet = null,
        e.SpCompleted = null,
        e.BtnNotGet = null,
        e.BtnGet = null,
        e
    }
    return i(e, t),
    e.prototype.onLoad = function() {},
    e.prototype.start = function() {
        this.playAnim()
    },
    e.prototype.playAnim = function() {
        u.TweenMgr.getInstance().newHeartAnim(this.BtnGet)
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnNotGet.on(cc.Node.EventType.TOUCH_END,
        function() {
            if (t.BtnNotGet.getComponent(cc.Button).interactable && (l.SdkMgr.getInstance().hideBanner(), p.UIMgr.getInstance().closeById(g.UIID.UITask), g.UIID.UIHome != t.taskCfg.JumpRoute)) {
                var e = g.UIID.UIHomeNew;
                g.UIID.UIOnlineReward == t.taskCfg.JumpRoute ? v.TimeMgr.getInstance().time_online < 60 ? p.UIMgr.getInstance().openUI(g.UIID.UITips, -1, "还未获得奖励") : p.UIMgr.getInstance().openUI(g.UIID.UIOnlineReward, -1) : (g.UIID.UIMysticalShop != t.taskCfg.JumpRoute && p.UIMgr.getInstance().closeById(e), p.UIMgr.getInstance().openUI(t.taskCfg.JumpRoute, -1))
            }
        }),
        this.BtnGet.on(cc.Node.EventType.TOUCH_END,
        function() {
            if (t.playEffForTaskGet(), m.PlayerMgr.getInstance().geUserData().addCompletedTaskCount(), t.getReward(), null == t.taskCfg.NextTask) t.SpCompleted.active = !0,
            t.BtnGet.active = !1,
            t.BtnNotGet.active = !1,
            t.taskData.state = -1,
            t.node.zIndex = -t.taskData.state,
            t.goOutAnimForTask(t.node,
            function() {
                t.node.position = cc.v3()
            }),
            y.default.getInstance().refreshTaskDataForState(t.taskData),
            t.node.getComponent(cc.Sprite).spriteFrame = 1 == t.taskData.state ? t.SpCanGet: t.SpNotGet;
            else {
                var e = d.DataMgr.getInstance().getTaskCfgForId(t.taskCfg.NextTask, t.taskCfg.Type);
                8 == e.Type && y.default.getInstance().wearEquipQualityForTask(e.ID);
                var o = 0;
                y.default.getInstance().taskNeedCountList[t.taskData.type - 1] >= e.TaskParameter && (o = 1);
                var a = {
                    id: e.ID,
                    type: e.Type,
                    state: o,
                    needCount: e.TaskParameter
                };
                t.refreshData(e, a),
                t.goOutAnimForTask(t.node,
                function() {
                    1 == a.state ? t.enterAnimForTask(t.node) : t.node.position = cc.v3()
                }),
                y.default.getInstance().refreshTaskData(a),
                t.refreshTaskView()
            }
            n.AudioMgr.getInstance().playEffect(g.AudioId.Sound_Upgrade),
            s.EventMgr.getInstance().emit(g.EventName.RefreshRedDot, !0, !1, !1, !1, !0),
            m.PlayerMgr.getInstance().geUserData().autoAddSalutation()
        })
    },
    e.prototype.enterAnimForTask = function(t) {
        cc.isValid(t) && (t.x = -650, cc.tween(t).to(.2, {
            position: cc.v3()
        }).start())
    },
    e.prototype.goOutAnimForTask = function(t, e) {
        void 0 === e && (e = function() {}),
        cc.isValid(t) && (t.x = 0, cc.tween(t).to(.1, {
            x: 650
        }).call(function() {
            e && e()
        }).start())
    },
    e.prototype.playEffForTaskGet = function() {
        h.default.playEffectForEffId(g.EnumEffID.EffTaskGet, this.node.parent.parent, this.node)
    },
    e.prototype.initData = function(t, e) {
        this.taskCfg = t,
        this.taskData = e,
        this.registerBtnEvent()
    },
    e.prototype.refreshData = function(t, e) {
        this.taskCfg = t,
        this.taskData = e
    },
    e.prototype.initView = function() {},
    e.prototype.refreshTaskView = function() {
        var t = this;
        this.node.zIndex = -this.taskData.state,
        this.node.getComponent(cc.Sprite).spriteFrame = 1 == this.taskData.state ? this.SpCanGet: this.SpNotGet;
        var e = d.DataMgr.getInstance().getGoodsCfg(this.taskCfg.RewardType);
        c.ResourceMgr.getInstance().loadSpriteframe(e.bundleQuality, e.iconQuality,
        function(e) {
            t.node.getChildByName("SpIconBg").getComponent(cc.Sprite).spriteFrame = e
        }),
        c.ResourceMgr.getInstance().loadSpriteframe(e.bundle, e.goodsICon,
        function(e) {
            t.node.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = e
        }),
        this.node.getChildByName("LabRewardNum").getComponent(cc.Label).string = "" + this.taskCfg.RewardNum;
        var o = this.node.getChildByName("LayoutDec");
        if (this.taskCfg.Desc1 && (o.getChildByName("LabTaskDec1").active = !0, o.getChildByName("LabTaskDec1").getComponent(cc.Label).string = this.taskCfg.Desc1), 8 == this.taskCfg.Type) {
            var a = "白色及以上";
            switch (this.taskCfg.TaskParameterType) {
                case 1:
                    a = "白色及以上";
                break;
                case 2:
                    a = "绿色及以上";
                break;
                case 3:
                    a = "蓝色及以上";
                break;
                case 4:
                    a = "紫色及以上";
                break;
                case 5:
                    a = "橙色及以上";
            }
            o.getChildByName("LabTaskDec2").getComponent(cc.Label).string = "" + a
        } else o.getChildByName("LabTaskDec2").getComponent(cc.Label).string = "" + this.taskCfg.TaskParameter;
        this.taskCfg.Desc2 && (o.getChildByName("LabTaskDec3").active = !0, o.getChildByName("LabTaskDec3").getComponent(cc.Label).string = this.taskCfg.Desc2);
        var i = y.default.getInstance().taskNeedCountList[this.taskData.type - 1];
        switch (this.node.getChildByName("SpBar").getComponent(cc.Sprite).fillRange = i / this.taskCfg.TaskParameter, this.node.getChildByName("LabTaskNum").getComponent(cc.Label).string = i + "/" + this.taskCfg.TaskParameter, this.taskData.state) {
            case 0:
                this.taskState(!0, !1, !1);
            var r = this.node.getChildByName("BtnNotGet").getChildByName("LabNotGet").getComponent(cc.Label);
            null == this.taskCfg.JumpRoute ? (r.string = "未完成", this.node.getChildByName("BtnNotGet").getComponent(cc.Button).interactable = !1) : r.string = "前往";
            break;
            case 1:
                this.taskState(!1, !0, !1);
            break;
            case - 1 : this.taskState(!1, !1, !0);
        }
    },
    e.prototype.taskState = function(t, e, o) {
        this.node.getChildByName("BtnNotGet").active = t,
        this.node.getChildByName("BtnGet").active = e,
        this.node.getChildByName("SpCompleted").active = o
    },
    e.prototype.getReward = function() {
        var t = d.DataMgr.getInstance().getGoodsCfg(this.taskCfg.RewardType),
        e = m.PlayerMgr.getInstance().geUserData(),
        o = f.default.getInstance().getColorForQuality(t.goodsQualityId);
        switch (t.goodsType) {
            case "gold":
                e.addGoldNum(this.taskCfg.RewardNum),
            p.UIMgr.getInstance().openUI(g.UIID.UITips, -1, "成功领取 <color = #" + o + ">金币</c>x" + this.taskCfg.RewardNum);
            break;
            case "inGot":
                e.addInGotNum(this.taskCfg.RewardNum),
            p.UIMgr.getInstance().openUI(g.UIID.UITips, -1, "成功领取 <color = #" + o + ">元宝</c>x" + this.taskCfg.RewardNum);
            break;
            case "power":
                e.addPowerNum(this.taskCfg.RewardNum),
            p.UIMgr.getInstance().openUI(g.UIID.UITips, -1, "成功领取 <color = #" + o + ">体力</c>x" + this.taskCfg.RewardNum);
        }
    },
    r([C(cc.SpriteFrame)], e.prototype, "SpNotGet", void 0),
    r([C(cc.SpriteFrame)], e.prototype, "SpCanGet", void 0),
    r([C(cc.Node)], e.prototype, "SpCompleted", void 0),
    r([C(cc.Node)], e.prototype, "BtnNotGet", void 0),
    r([C(cc.Node)], e.prototype, "BtnGet", void 0),
    r([k], e)
} (cc.Component);
o.default = S