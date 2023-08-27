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
var n = t("CommonCfg"),
s = t("ComPlayerMgr"),
c = t("BasePlatform"),
l = t("BaseUI"),
u = t("EventMgr"),
p = t("PlatformManager"),
g = t("ResCacheMgr"),
d = t("ResourceMgr"),
h = t("TweenMgr"),
f = t("UIMgr"),
m = t("TimeUtils"),
y = t("Main"),
v = t("Config"),
I = t("TrackDataEvent"),
k = t("DataMgr"),
C = t("EquipMgr"),
S = t("PlayerMgr"),
M = t("RedDotMgr"),
_ = t("RoleMgr"),
b = t("TaskMgr"),
D = t("TimeMgr"),
T = t("UIGuide"),
N = cc._decorator,
w = N.ccclass,
B = N.property,
P = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.SpNotGet = null,
        e.SpCanGet = null,
        e.SpEnoughGet = null,
        e.BtnSkill = null,
        e.BtnEquip = null,
        e.BtnShop = null,
        e.BtnSign = null,
        e.BtnTask = null,
        e.BtnSetting = null,
        e.BtnOnHook = null,
        e.BtnStartGame = null,
        e.BtnAddEquip = null,
        e.BtnMysticalShop = null,
        e.LabOnHook = null,
        e.LabSec = null,
        e.LabEarn = null,
        e.LabRecommend = null,
        e.SpPower = null,
        e.LabFightNum = null,
        e.btnBecoming = null,
        e.NodeMQTask = null,
        e.LayerTouch = null,
        e.SpLight = null,
        e.curSec = 1,
        e.curLevel = 1,
        e.powerPos = null,
        e.curCanGetState = 0,
        e.isGameToBack = !0,
        e.abType = "A",
        e
    }
    return i(e, t),
    e.prototype.onLoad = function() {
        this.initAbTypeData(),
        this.setSaveData_B()
    },
    e.prototype.initAbTypeData = function() {
        this.abType = S.PlayerMgr.getInstance().getTrackData().getAbType()
    },
    e.prototype.start = function() {
        var t = this;
        y.default.instance.destroyPlayer_Home(!0),
        this.registerEvent(),
        this.registerBtnEvent(),
        this.createPlayerShow(),
        this.guideShow(),
        this.playAnim(),
        this.controlHomeSalutation(),
        u.EventMgr.getInstance().emit(v.EventName.ShowUITop, !0),
        this.initPowerPos(),
        this.loadResExample(),
        this.initData(),
        this.initSignData(),
        this.initView(),
        this.refreshRedDot(),
        this.testUIView(),
        p.PlatformManager.currentPlatform != c.Platform.ANDROID_TAP && p.PlatformManager.currentPlatform != c.Platform.ANDROID_233 || (this.btnBecoming.active = !0, this.btnBecoming.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.openUI(v.UIID.UIBecoming)
        })),
        p.PlatformManager.getInstance().showBlockAd(2)
    },
    e.prototype.setSaveData_B = function() {
        if ("B" == this.abType) {
            var t = S.PlayerMgr.getInstance().geUserData();
            t.getOwnedEquipList().forEach(function(t) {
                t.forEach(function(t) {
                    var e = k.DataMgr.getInstance().getEquipCfg(t.id).strengthenMaxLv;
                    t.strengthenLv > e && (t.strengthenLv = e)
                })
            }),
            t.getWearEquipList().forEach(function(t) {
                var e = k.DataMgr.getInstance().getEquipCfg(t.id).strengthenMaxLv;
                t.strengthenLv > e && (t.strengthenLv = e)
            }),
            t.selfSaveData()
        }
    },
    e.prototype.testUIView = function() {
        f.UIMgr.getInstance().getUIRoot(v.UIID.UIGame) && f.UIMgr.getInstance().closeById(v.UIID.UIGame),
        f.UIMgr.getInstance().getUIRoot(v.UIID.UIDrawCard) && f.UIMgr.getInstance().closeById(v.UIID.UIDrawCard),
        f.UIMgr.getInstance().getUIRoot(v.UIID.UISettle) && f.UIMgr.getInstance().closeById(v.UIID.UISettle)
    },
    e.prototype.playAnim = function() {
        h.TweenMgr.getInstance().playLightAni(this.SpLight)
    },
    e.prototype.controlHomeSalutation = function() {
        y.default.instance.controlWearSalutation(!0)
    },
    e.prototype.guideShow = function() {
        var t = S.PlayerMgr.getInstance().getGuideData();
        if (!t.getGuideEnd()) {
            var e = t.getCurrentId();
            if (1 == e)(o = new T.GuildCfg).distNode = this.BtnStartGame,
            o.tipstring = "小子，前方就是<color=#ff6b1b>骷髅洞窟</color>了！让我看看你的本事吧！",
            o.yDec = -150,
            this.openUICallBack(v.UIID.UIGuide,
            function() {
                t.addCurrentId()
            },
            o);
            else if (e == 8 + t.putGuideNum)(o = new T.GuildCfg).distNode = this.BtnEquip,
            o.tipstring = "虽然没有爆裁决，但起码出了<color=#ff6b1b>装备</color>和<color=#ff6b1b>技能</color>，现在先去<color=#ff6b1b>穿戴装备</color>吧",
            o.yDec = -150,
            this.openUICallBack(v.UIID.UIGuide,
            function() {
                t.addCurrentId()
            },
            o);
            else if (e == 12 + t.putGuideNum) {
                var o; (o = new T.GuildCfg).distNode = this.BtnSkill,
                o.yDec = -150,
                this.openUICallBack(v.UIID.UIGuide,
                function() {
                    t.addCurrentId()
                },
                o)
            }
        }
    },
    e.prototype.refreshRedDot = function(t, e, o, a, i) {
        void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === o && (o = !0),
        void 0 === a && (a = !0),
        void 0 === i && (i = !0),
        t && M.default.getInstance().taskForRedDot(this.BtnTask.getChildByName("SpRedDot")),
        e && M.default.getInstance().onHookForRedDot(this.BtnOnHook.getChildByName("SpRedDot")),
        o && M.default.getInstance().skillBookForRedDot(this.BtnSkill.getChildByName("SpRedDot")),
        a && M.default.getInstance().equipForRedDot(this.BtnEquip.getChildByName("SpRedDot")),
        i && M.default.getInstance().shopForRedDot(this.BtnShop.getChildByName("SpRedDot"))
    },
    e.prototype.registerEvent = function() {
        this.addEvent(v.EventName.RefreshOnlineTime, this.refreshOnlineTime),
        this.addEvent(v.EventName.RefreshRedDot, this.refreshRedDot)
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnAddEquip.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.addEquipTest(),
            t.BtnAddEquip.active = !1
        }),
        this.BtnStartGame.on(cc.Node.EventType.TOUCH_END,
        function() {
            var e = Number(k.DataMgr.getInstance().getParamsCfgForSingle(v.EnumParams.LevelCostPowerNum).value);
            S.PlayerMgr.getInstance().geUserData().subPowerNum(e, t.powerPos,
            function() {
                t.startGame(),
                y.default.instance.startGame(),
                b.default.getInstance().costPowerForTask(5)
            })
        }),
        this.BtnSkill.on(cc.Node.EventType.TOUCH_END,
        function() {
            S.PlayerMgr.getInstance().getTrackData().youmengTrack(I.TrackId.guide12),
            t.closeView(),
            f.UIMgr.getInstance().openUI(v.UIID.UISkillBook, -1)
        }),
        this.BtnEquip.on(cc.Node.EventType.TOUCH_END,
        function() {
            S.PlayerMgr.getInstance().getTrackData().youmengTrack(I.TrackId.guide9),
            t.closeView(),
            f.UIMgr.getInstance().openUI(v.UIID.UIEquip, -1)
        }),
        this.BtnShop.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.closeView(),
            f.UIMgr.getInstance().openUI(v.UIID.UIShop, -1)
        }),
        this.BtnSign.on(cc.Node.EventType.TOUCH_END,
        function() {
            S.PlayerMgr.getInstance().getTrackData().youmengTrack(I.TrackId.click_signin),
            f.UIMgr.getInstance().openUI(n.ComUIID.UISign, -1)
        }),
        this.BtnTask.on(cc.Node.EventType.TOUCH_END,
        function() {
            S.PlayerMgr.getInstance().getTrackData().youmengTrack(I.TrackId.click_task),
            f.UIMgr.getInstance().openUI(v.UIID.UITask, -1)
        }),
        this.BtnSetting.on(cc.Node.EventType.TOUCH_END,
        function() {
            f.UIMgr.getInstance().openUI(v.UIID.UISetting, -1, v.UIID.UIHome)
        }),
        this.BtnOnHook.on(cc.Node.EventType.TOUCH_END,
        function() {
            D.TimeMgr.getInstance().time_online < 60 ? f.UIMgr.getInstance().openUI(v.UIID.UITips, -1, "还未获得奖励") : f.UIMgr.getInstance().openUI(v.UIID.UIOnlineReward, -1)
        }),
        this.BtnMysticalShop.on(cc.Node.EventType.TOUCH_END,
        function() {
            S.PlayerMgr.getInstance().getTrackData().youmengTrack(I.TrackId.click_store),
            f.UIMgr.getInstance().openUI(v.UIID.UIMysticalShop, -1)
        }),
        this.NodeMQTask.on(cc.Node.EventType.TOUCH_END,
        function() {
            S.PlayerMgr.getInstance().getTrackData().youmengTrack(I.TrackId.click_mainlinetask),
            f.UIMgr.getInstance().openUI(v.UIID.UIMainTask, -1)
        })
    },
    e.prototype.initPowerPos = function() {
        var t = this;
        this.scheduleOnce(function() {
            var e = t.SpPower.parent.convertToWorldSpaceAR(t.SpPower.getPosition());
            t.powerPos = t.node.convertToNodeSpaceAR(e)
        },
        .5)
    },
    e.prototype.initData = function() {
        this.userData = S.PlayerMgr.getInstance().geUserData(),
        this.userData.setCurGameMultiply(1),
        this.curSec = this.userData.getCurSec(),
        this.secData = k.DataMgr.getInstance().getSecCfg(this.curSec)
    },
    e.prototype.initSignData = function() {
        if (S.PlayerMgr.getInstance().getGuideData().getGuideEnd() || this.userData.getCurSec() > 2) {
            var t = s.ComPlayerMgr.getInstance().getSignData();
            t.checkShowRed(),
            t.getCanSigned() && this.scheduleOnce(function() {
                f.UIMgr.getInstance().openUI(n.ComUIID.UISign, -1),
                y.default.instance.firstGame = !1
            },
            .1)
        }
    },
    e.prototype.initView = function() {
        this.isCanAddEquip(),
        this.initCurSecFightNum(),
        this.initSecInfo(),
        this.refreshOnlineTime(D.TimeMgr.getInstance().time_online),
        this.loadPlayerInfo()
    },
    e.prototype.loadPlayerInfo = function() {
        var t = _.default.getInstance().getPlayerFightNum();
        this.LabFightNum.string = "" + t
    },
    e.prototype.refreshOnlineTime = function(t) {
        this.LabOnHook.string = m.TimeUtils.SecondToHours(t),
        this.refreshOnHookBox(t)
    },
    e.prototype.refreshOnHookBox = function(t) {
        var e = this.SpNotGet,
        o = 60 * Number(k.DataMgr.getInstance().getParamsCfgForSingle(v.EnumParams.OnHookMaxTime).value);
        t >= 60 && t < o ? e = this.SpCanGet: t >= o && (e = this.SpEnoughGet),
        this.BtnOnHook.getComponent(cc.Sprite).spriteFrame = e
    },
    e.prototype.initCurSecFightNum = function() {
        this.LabRecommend.string = "（推荐战力：" + this.secData.RecommendFightNum + "）"
    },
    e.prototype.isOpenTouch = function(t) {
        void 0 === t && (t = !1),
        this.LayerTouch.active = t
    },
    e.prototype.isCanAddEquip = function() {},
    e.prototype.initSecInfo = function() {
        this.curSec = this.userData.getCurSec(),
        this.secData = k.DataMgr.getInstance().getSecCfg(this.curSec),
        this.LabSec.string = this.secData.secDec + "：" + this.secData.name,
        this.LabEarn.string = "" + this.secData.HangUpDesc
    },
    e.prototype.startGame = function() {
        this.closeView()
    },
    e.prototype.createPlayerShow = function() {
        y.default.instance.createPlayer_Home();
        var t = S.PlayerMgr.getInstance().geUserData();
        S.PlayerMgr.getInstance().getGuideData().getGuideEnd() && t.getCurSec() >= 2 ? y.default.instance.createPet() : t.getCurSec() >= 3 && y.default.instance.createPet()
    },
    e.prototype.destroyPlayerShow = function() {
        y.default.instance.destroyPlayer_Home()
    },
    e.prototype.closeView = function() {
        this.closeUI(),
        p.PlatformManager.getInstance().hideBlockAd(2)
    },
    e.prototype.loadResExample = function() {
        var t = this;
        this.loadSpriteFrame("comimgs", "goods/dog",
        function() {}),
        this.loadResFromBundle("comimgs", "goods/dog", cc.SpriteFrame,
        function() {}),
        this.loadResFromBundle("comimgs", "goods/dog", cc.SpriteFrame,
        function() {},
        !0, 15),
        d.ResourceMgr.getInstance().loadSpriteframe("comimgs", "goods/dog",
        function() {
            t.isclose
        },
        "UICacheExmaple"),
        d.ResourceMgr.getInstance().loadRes("prefabs", "ui/UIHome", cc.Prefab,
        function() {
            t.isclose
        },
        "UICacheExmaple"),
        g.ResCacheMgr.getInstance().releaseAssetsFromMap("UICacheExmaple")
    },
    e.prototype.addEquipTest = function() {
        for (var t = k.DataMgr.getInstance().getAllEquipCfg(), e = [], o = 1; o <= t.length; o++) {
            var a = k.DataMgr.getInstance().getEquipCfg(o),
            i = {
                id: a.id,
                strengthenLv: 0,
                type: a.equipType,
                quality: a.qualityId,
                isUnlock: !0,
                isWear: !1,
                videoCount: 0,
                IDCard: this.userData.getEquipIDCard(),
                starLevel: 0
            };
            e.push(i)
        }
        C.default.getInstance().addManyEquip(e),
        console.log("装备添加成功@@@")
    },
    r([B(cc.SpriteFrame)], e.prototype, "SpNotGet", void 0),
    r([B(cc.SpriteFrame)], e.prototype, "SpCanGet", void 0),
    r([B(cc.SpriteFrame)], e.prototype, "SpEnoughGet", void 0),
    r([B(cc.Node)], e.prototype, "BtnSkill", void 0),
    r([B(cc.Node)], e.prototype, "BtnEquip", void 0),
    r([B(cc.Node)], e.prototype, "BtnShop", void 0),
    r([B(cc.Node)], e.prototype, "BtnSign", void 0),
    r([B(cc.Node)], e.prototype, "BtnTask", void 0),
    r([B(cc.Node)], e.prototype, "BtnSetting", void 0),
    r([B(cc.Node)], e.prototype, "BtnOnHook", void 0),
    r([B(cc.Node)], e.prototype, "BtnStartGame", void 0),
    r([B(cc.Node)], e.prototype, "BtnAddEquip", void 0),
    r([B(cc.Node)], e.prototype, "BtnMysticalShop", void 0),
    r([B(cc.Label)], e.prototype, "LabOnHook", void 0),
    r([B(cc.Label)], e.prototype, "LabSec", void 0),
    r([B(cc.Label)], e.prototype, "LabEarn", void 0),
    r([B(cc.Label)], e.prototype, "LabRecommend", void 0),
    r([B(cc.Node)], e.prototype, "SpPower", void 0),
    r([B(cc.Label)], e.prototype, "LabFightNum", void 0),
    r([B(cc.Node)], e.prototype, "btnBecoming", void 0),
    r([B(cc.Node)], e.prototype, "NodeMQTask", void 0),
    r([B({
        type: cc.Node,
        tooltip: "防触摸层"
    })], e.prototype, "LayerTouch", void 0),
    r([B(cc.Node)], e.prototype, "SpLight", void 0),
    r([w], e)
} (l.default);
o.default = P