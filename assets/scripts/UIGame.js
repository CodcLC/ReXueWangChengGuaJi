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
l = t("SdkMgr"),
u = t("UIMgr"),
p = t("TimeUtils"),
g = t("Utils"),
d = t("Main"),
h = t("Config"),
f = t("TrackDataEvent"),
m = t("DataMgr"),
y = t("GameDataMgr"),
v = t("GameMgr"),
I = t("PlayerMgr"),
k = t("RoleMgr"),
C = t("TipsMgr"),
S = t("NodeFetter"),
M = t("NodeSkill"),
_ = t("NodeSkillBook"),
b = t("UIGuide"),
D = cc._decorator,
T = D.ccclass,
N = D.property,
w = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.SkillBookPre = null,
        e.SkillBookPreNew = null,
        e.FetterPre = null,
        e.SkillPre = null,
        e.LayoutSkillBook = null,
        e.LayoutFetter = null,
        e.LayoutSkill = null,
        e.LabSkillCount = null,
        e.LabFetterCount = null,
        e.SpGameSpeed = null,
        e.BtnBackSelectSkill = null,
        e.BtnPause = null,
        e.LabSec = null,
        e.LabLevel = null,
        e.LabMonsterCount = null,
        e.NodeBossAnim = null,
        e.LayerTouch = null,
        e.NodeGuide = null,
        e.NodeTrudge = null,
        e.SpLight = null,
        e.curSec = 1,
        e.curLevel = 1,
        e.isTrudge = !1,
        e.isRecover = !0,
        e.abType = "A",
        e.itemHeight = 118,
        e.costRange = .002,
        e.recoverRange = .002,
        e
    }
    return i(e, t),
    e.prototype.onLoad = function() {
        this.initAbTypeData(),
        this.initFillRange(),
        this.registerEvent()
    },
    e.prototype.initAbTypeData = function() {
        this.abType = I.PlayerMgr.getInstance().getTrackData().getAbType(),
        this.itemHeight = 235
    },
    e.prototype.guideShow = function() {
        var t = this,
        e = I.PlayerMgr.getInstance().getGuideData();
        if (!e.getGuideEnd()) {
            var o = e.getCurrentId();
            console.log("currentId：", o),
            o == 4 + e.putGuideNum && this.scheduleOnce(function() {
                t.NodeGuide.zIndex = 10,
                t.NodeGuide.active = !0,
                t.NodeGuide.getChildByName("SpSkillBook2").active = !0;
                var o = new b.GuildCfg;
                o.distNode = t.NodeGuide,
                o.tipstring = "技能分为不同的<color=#ff6b1b>职业</color>和<color=#ff6b1b>类型</color>，相同职业/类型的技能可以激活<color=#ff6b1b>羁绊</color>！\n<color=#ff6b1b>羁绊</color>的效果非常<color=#ff6b1b>强力</color>的噢！",
                o.yDec = -500,
                o.showHand = !1,
                t.openUICallBack(h.UIID.UIGuide,
                function() {
                    e.addCurrentId()
                },
                o),
                d.default.instance.controlObjectsAnim(!0)
            })
        }
    },
    e.prototype.start = function() {
        this.registerBtnEvent(),
        this.startRecord(),
        c.EventMgr.getInstance().emit(h.EventName.ShowUITop, !1),
        s.AudioMgr.getInstance().playMusic(h.AudioId.BGM_Battle, "bg"),
        this.initData(),
        this.initView(),
        this.playAnim()
    },
    e.prototype.playAnim = function(t) {
        void 0 === t && (t = !1)
    },
    e.prototype.registerEvent = function() {
        this.addEvent(h.EventName.RefreshLevel, this.refreshLevel),
        this.addEvent(h.EventName.RefreshMonsterCount, this.refreshMonsterCount),
        this.addEvent(h.EventName.AddSkillBook, this.addSkillBook),
        this.addEvent(h.EventName.ControlBackSelectSkill, this.ControlBackSelectSkill),
        this.addEvent(h.EventName.GameLayerTouch, this.isOpenTouch),
        this.addEvent(h.EventName.GameGuideShow, this.guideShow),
        this.addEvent(h.EventName.OpenRecoverTrudge, this.recoverTrudge)
    },
    e.prototype.recoverTrudge = function() {
        this.isTrudge = !1,
        this.isRecover = !0,
        this.NodeTrudge.getChildByName("NodeEff").active = !1,
        v.default.getInstance().isAdddUp = !1
    },
    e.prototype.startRecord = function() {
        1 != I.PlayerMgr.getInstance().geUserData().getCurSec() && I.PlayerMgr.getInstance().getShareData().startRecord()
    },
    e.prototype.stopRecord = function() {
        I.PlayerMgr.getInstance().geUserData().getCurSec();
        var t = I.PlayerMgr.getInstance().getShareData();
        t.stopRecord(!1),
        t.clearData()
    },
    e.prototype.isOpenTouch = function(t) {
        void 0 === t && (t = !1),
        this.LayerTouch.active = t
    },
    e.prototype.initData = function() {
        this.userData = I.PlayerMgr.getInstance().geUserData(),
        this.curSec = this.userData.getCurSec(),
        this.curLevel = 1,
        this.secData = m.DataMgr.getInstance().getSecCfg(this.curSec),
        this.levelData = m.DataMgr.getInstance().getLevelCfg(this.curSec, this.curLevel),
        I.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.chapter_start_X, this.curSec)
    },
    e.prototype.initView = function() {
        this.initGameSpeed(),
        this.LabSec.string = this.secData.secDec + "：" + this.secData.name,
        this.LabLevel.string = "第" + this.curLevel + "/" + this.secData.levelCount + "关",
        this.refreshMonsterCount(),
        this.refreshSkillBookAndFetterCount(),
        this.addEmptySkill()
    },
    e.prototype.initGameSpeed = function() {
        for (var t = this,
        e = this.SpGameSpeed.childrenCount,
        o = I.PlayerMgr.getInstance().geUserData().getCurGameMultiply(), a = I.PlayerMgr.getInstance().geUserData().getCurUnlockMultiply(), i = function(i) {
            var n = r.SpGameSpeed.getChildByName("SpGameSpeed" + i);
            i == o ? (n.zIndex = e, n.active = !0, n.getChildByName("SpVideo").active = !1, n.getChildByName("SpCurSpeed").active = !0) : (n.zIndex = e - i, n.active = !1, n.getChildByName("SpVideo").active = !(a + 1 > i), n.getChildByName("SpCurSpeed").active = !1),
            n.on(cc.Node.EventType.TOUCH_END,
            function() {
                I.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.click_speed);
                var e = t.SpGameSpeed.childrenCount,
                o = I.PlayerMgr.getInstance().geUserData().getCurGameMultiply(),
                a = I.PlayerMgr.getInstance().geUserData().getCurUnlockMultiply();
                if (i == o) for (var r = 1; r <= e; r++) {
                    var n = t.SpGameSpeed.getChildByName("SpGameSpeed" + r);
                    cc.isValid(n) && (a + 1 >= r ? i != r && (n.active = !n.active) : n.active = !1)
                } else if (i > a) {
                    d.default.instance.controlObjectsAnim(!0);
                    var s = p.TimeUtils.GetTimeBySecond(),
                    c = p.TimeUtils.GetTimeByHours2();
                    l.SdkMgr.getInstance().playVideo(1,
                    function() {
                        var e = p.TimeUtils.GetTimeBySecond(),
                        o = p.TimeUtils.GetTimeByHours2();
                        I.PlayerMgr.getInstance().getTrackData().testTrackTime("combatspeed", c, o, s, e),
                        I.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.combatspeed),
                        I.PlayerMgr.getInstance().getTrackData().youmengTrackNew("combatspeed_b"),
                        I.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.speed_X, i),
                        I.PlayerMgr.getInstance().geUserData().setCurGameMultiply(i),
                        I.PlayerMgr.getInstance().geUserData().addCurUnlockMultiply(),
                        t.controlGameSpeed(),
                        d.default.instance.controlObjectsGameSpeed(),
                        d.default.instance.controlObjectsAnim(!1)
                    },
                    function() {
                        d.default.instance.controlObjectsAnim(!1)
                    })
                } else I.PlayerMgr.getInstance().geUserData().setCurGameMultiply(i),
                t.controlGameSpeed(),
                d.default.instance.controlObjectsGameSpeed()
            })
        },
        r = this, n = 1; n <= e; n++) i(n)
    },
    e.prototype.controlGameSpeed = function() {
        for (var t = I.PlayerMgr.getInstance().geUserData().getCurGameMultiply(), e = I.PlayerMgr.getInstance().geUserData().getCurUnlockMultiply(), o = this.SpGameSpeed.childrenCount, a = 1; a <= o; a++) {
            var i = this.SpGameSpeed.getChildByName("SpGameSpeed" + a);
            cc.isValid(i) && (a == t ? (i.zIndex = o, i.active = !0, i.getChildByName("SpVideo").active = !1, i.getChildByName("SpCurSpeed").active = !0) : (i.zIndex = o - a, i.active = !1, i.getChildByName("SpVideo").active = !(e + 1 > a), i.getChildByName("SpCurSpeed").active = !1))
        }
    },
    e.prototype.addEmptySkill = function() {
        for (var t = this,
        e = function(e) {
            o.scheduleOnce(function() {
                var o = cc.instantiate(t.SkillPre);
                t.LayoutSkill.addChild(o),
                o.position = cc.Vec3.ZERO,
                8 == e && t.LayoutSkill.getComponent(cc.Layout).updateLayout()
            },
            .02 * e)
        },
        o = this, a = 0; a < 9; a++) e(a)
    },
    e.prototype.refreshLevel = function() {
        this.curLevel = this.userData.getCurLevel(),
        this.LabLevel.string = "第" + this.curLevel + "/" + this.secData.levelCount + "关"
    },
    e.prototype.refreshMonsterCount = function() {
        this.LabMonsterCount.string = "" + d.default.instance.monsterCount
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnBackSelectSkill.on(cc.Node.EventType.TOUCH_END,
        function() {
            d.default.instance.isFastPass && t.sendEvent(h.EventName.GameLayerTouch, !0),
            t.sendEvent(h.EventName.ControlDrawCardView, !0),
            t.ControlBackSelectSkill(!1)
        }),
        this.BtnPause.on(cc.Node.EventType.TOUCH_END,
        function() {
            d.default.instance.controlObjectsAnim(!0);
            var e = I.PlayerMgr.getInstance().geUserData();
            u.UIMgr.getInstance().openUI(h.UIID.UIPause, -1,
            function() {
                t.backHome()
            },
            e.getCurSec(), e.getCurLevel())
        }),
        this.NodeGuide.on(cc.Node.EventType.TOUCH_END,
        function() {
            I.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.guide5),
            t.NodeGuide.active = !1,
            d.default.instance.controlObjectsAnim(!1)
        }),
        this.NodeTrudge.active = !1
    },
    e.prototype.backHome = function() {
        this.stopRecord(),
        y.default.getInstance().resetSkillBookAndFetter(),
        d.default.instance.resetMain(),
        this.closeView()
    },
    e.prototype.closeView = function() {
        this.closeUI()
    },
    e.prototype.refreshSkillBookAndFetterCount = function() {
        this.LabSkillCount.string = "修炼技能总数量：<color = #e24f00>" + y.default.getInstance().getSkillBookDataArr().length + "/" + y.default.getInstance().curTotalSkillBookCount + "</color>",
        this.LabFetterCount.string = "解锁羁绊总数量：<color = #e24f00>" + y.default.getInstance().getFetterSuitCount() + "</color>"
    },
    e.prototype.addSkillBook = function(t) {
        var e = this,
        o = m.DataMgr.getInstance().getSkillBookCfg();
        if (t > o.length) console.log("不存在当前技能书！！！");
        else {
            if ( - 1 != y.default.getInstance().isExistSkillBookId(t)) return y.default.getInstance().pushSkillBookData(t, void 0,
            function(o) {
                e.skillBookUpStar(t, 2),
                e.sortSkillBook(t, o),
                C.default.getInstance().addTipsToTipsList(1, e.node, t, 2),
                2 == e.curSec && I.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.chapter2_skill2)
            },
            function(o) {
                e.skillBookUpStar(t, 3),
                e.sortSkillBook(t, o),
                C.default.getInstance().addTipsToTipsList(1, e.node, t, 3),
                2 == e.curSec && I.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.chapter2_skill3)
            }),
            c.EventMgr.getInstance().emit(h.EventName.RefreshSkillBookShow, t),
            void k.default.getInstance().refreshCurPlayerProp();
            y.default.getInstance().pushSkillBookData(t);
            var a = m.DataMgr.getInstance().getSkillBook(t),
            i = this.SkillBookPreNew,
            r = cc.instantiate(i);
            this.LayoutSkillBook.addChild(r),
            r.getComponent(_.default).initData(t),
            r.position = cc.Vec3.ZERO,
            r.zIndex = 5,
            this.loadSkillBook(r, a),
            this.addFetter(a.fetterId1, a.fetterId2),
            this.refreshSkillBookAndFetterCount(),
            y.default.getInstance().getSkillBookDataArr().length >= y.default.getInstance().curTotalSkillBookCount && y.default.getInstance().classifyCurSkillBook(),
            k.default.getInstance().refreshCurPlayerProp(),
            this.scheduleOnce(function() {
                e.scrollViewEvent_SkillBook(),
                e.scrollViewEvent_Fetter()
            },
            .5)
        }
    },
    e.prototype.loadSkillBook = function(t, e) {
        if (cc.isValid(t) && e) {
            var o = m.DataMgr.getInstance().getSkillQuality(e.qualityId),
            a = m.DataMgr.getInstance().getFetter(e.fetterId1),
            i = m.DataMgr.getInstance().getFetter(e.fetterId2);
            this.loadSpriteFrame("iconImg", e.SkillIcon,
            function(e) {
                t.getChildByName("SpSkillBook").getComponent(cc.Sprite).spriteFrame = e
            }),
            this.loadSpriteFrame(o.bundle, o.iconImg2,
            function(e) {
                t.getChildByName("SpNameBg").getComponent(cc.Sprite).spriteFrame = e
            }),
            t.getChildByName("LabSkillBookName").getComponent(cc.Label).string = e.name,
            t.getChildByName("LayoutName").getChildByName("LabSkillBook").getComponent(cc.Label).string = e.name,
            t.getChildByName("SpBgfetter1").getChildByName("LabFetter1").getComponent(cc.Label).string = a.name,
            this.loadSpriteFrame(a.bundle, a.iconImg,
            function(e) {
                t.getChildByName("SpBgfetter1").getChildByName("SpFetter1").getComponent(cc.Sprite).spriteFrame = e
            }),
            t.getChildByName("SpBgfetter2").getChildByName("LabFetter2").getComponent(cc.Label).string = i.name,
            this.loadSpriteFrame(i.bundle, i.iconImg,
            function(e) {
                t.getChildByName("SpBgfetter2").getChildByName("SpFetter2").getComponent(cc.Sprite).spriteFrame = e
            }),
            this.refreshStarNum(t, e)
        }
    },
    e.prototype.refreshStarNum = function(t, e) {
        if (cc.isValid(t)) {
            var o = y.default.getInstance().getStarNumForSkillBookId(e.id);
            3 != o[0] ? t.getChildByName("LayoutName").getChildByName("LabCount").getComponent(cc.Label).string = "（" + o[1] + "/" + o[2] + "）": t.getChildByName("LayoutName").getChildByName("LabCount").active = !1;
            for (var a = 0; a < t.getChildByName("NodeGrade").children.length; a++) {
                var i = t.getChildByName("NodeGrade").getChildByName("SpStarBg" + (a + 1));
                o[0] >= a + 1 ? i.getChildByName("SpStar").active = !0 : i.getChildByName("SpStar").active = !1
            }
        } else console.log("当前技能书节点：", t)
    },
    e.prototype.skillBookUpStar = function(t, e) {
        void 0 === e && (e = 2);
        var o = m.DataMgr.getInstance().getSkillBook(t),
        a = I.PlayerMgr.getInstance().geUserData().getSkillBookForId(t),
        i = m.DataMgr.getInstance().getSkillBookLevelCfg1(o.StartLevelID, a.level),
        r = null;
        if (2 == e) r = g.Utils.getTabelArr(i.starProp2);
        else {
            if (3 != e) return;
            r = g.Utils.getTabelArr(i.starProp3)
        }
        0 == Number(r[0]) && this.addSkill(Number(r[1])),
        k.default.getInstance().getPropForAllSkillBook(!0)
    },
    e.prototype.addFetter = function(t, e) {
        this.createFetter(t),
        this.createFetter(e)
    },
    e.prototype.createFetter = function(t) {
        if (t > m.DataMgr.getInstance().getFetterCfg().length) console.log("不存在当前羁绊！！！");
        else {
            if ( - 1 != y.default.getInstance().isExistFetterId(t)) return this.addFetterData(t),
            void c.EventMgr.getInstance().emit(h.EventName.RefreshFetterShow, t);
            var e = m.DataMgr.getInstance().getFetter(t),
            o = cc.instantiate(this.FetterPre);
            this.LayoutFetter.addChild(o),
            o.getComponent(S.default).initData(t),
            o.position = cc.Vec3.ZERO,
            o.zIndex = 7,
            this.addFetterData(t),
            this.loadFetter(o, e)
        }
    },
    e.prototype.addFetterData = function(t) {
        var e = this;
        y.default.getInstance().pushFetterData(t, void 0,
        function(o) {
            c.EventMgr.getInstance().emit(h.EventName.RefreshLight, t),
            e.sortFetter(t, o),
            C.default.getInstance().addTipsToTipsList(0, e.node, t, 1),
            y.default.getInstance().addFetterSuitCount(),
            2 == e.curSec && I.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.chapter2_fetter_X, y.default.getInstance().getFetterSuitCount())
        },
        function(o) {
            c.EventMgr.getInstance().emit(h.EventName.RefreshLight, t),
            e.sortFetter(t, o),
            C.default.getInstance().addTipsToTipsList(0, e.node, t, 2)
        },
        function(o) {
            c.EventMgr.getInstance().emit(h.EventName.RefreshLight, t),
            e.sortFetter(t, o),
            C.default.getInstance().addTipsToTipsList(0, e.node, t, 3)
        })
    },
    e.prototype.loadFetter = function(t, e) {
        cc.isValid(t) && e && (this.loadSpriteFrame(e.bundle, e.iconImg,
        function(e) {
            t.getChildByName("SpFetter").getComponent(cc.Sprite).spriteFrame = e
        }), t.getChildByName("LabFetter").getComponent(cc.Label).string = e.name, this.refreshFetterSuitCount(t, e))
    },
    e.prototype.refreshFetterSuitCount = function(t, e) {
        t.getChildByName("LabFetterNum").getComponent(cc.RichText).string = y.default.getInstance().getStringForFetterId(e.id)
    },
    e.prototype.addSkill = function(t) {
        if (t > m.DataMgr.getInstance().getSkillCfg().length) console.log("不存在当前技能！！！");
        else {
            var e = null,
            o = y.default.getInstance().getSkillIdArr().length;
            if (o < this.LayoutSkill.childrenCount) {
                if (y.default.getInstance().pushSkillIdArrData(t), e = this.LayoutSkill.children[o], !cc.isValid(e)) return;
                var a = m.DataMgr.getInstance().getSkill(t);
                return e.getComponent(M.default).initData(t),
                void this.loadSpriteFrame(a.bundle, a.skillIcon,
                function(t) {
                    e.getComponent(cc.Sprite).spriteFrame = t
                })
            }
            y.default.getInstance().pushSkillIdArrData(t),
            e = cc.instantiate(this.SkillPre),
            this.LayoutSkill.addChild(e),
            e.position = cc.Vec3.ZERO,
            e.getComponent(M.default).initData(t);
            var i = m.DataMgr.getInstance().getSkill(t);
            this.loadSpriteFrame(i.bundle, i.skillIcon,
            function(t) {
                e.getComponent(cc.Sprite).spriteFrame = t
            })
        }
    },
    e.prototype.sortSkillBook = function(t, e) {
        var o = 4,
        a = y.default.getInstance().getStarNumForSkillBookCount(e);
        2 == a ? o = 2 : 3 == a && (o = 0);
        for (var i = 0; i < this.LayoutSkillBook.childrenCount; i++) {
            var r = this.LayoutSkillBook.children[i],
            n = r.getComponent(_.default);
            if (r.zIndex == o && (r.zIndex = o + 1), n.skillBookId == t) {
                r.zIndex = o,
                r.opacity = 255;
                break
            }
        }
    },
    e.prototype.sortFetter = function(t, e) {
        var o = y.default.getInstance().getSuitCountForFetterIdAndCount(t, e),
        a = 6;
        1 == o ? a = 4 : 2 == o ? a = 2 : 3 == o && (a = 0);
        for (var i = 0; i < this.LayoutFetter.childrenCount; i++) {
            var r = this.LayoutFetter.children[i],
            n = r.getComponent(S.default);
            if (r.zIndex == a && (r.zIndex = a + 1), n.fetterId == t) {
                r.zIndex = a,
                r.opacity = 255;
                break
            }
        }
    },
    e.prototype.scrollViewEvent_SkillBook = function() {
        for (var t = this.itemHeight / 2,
        e = -450 - t,
        o = 0; o < this.LayoutSkillBook.children.length; o++) {
            var a = this.LayoutSkillBook.children[o];
            this.visibleRank_SkillBook(a, e, t)
        }
    },
    e.prototype.visibleRank_SkillBook = function(t, e, o) {
        var a = t.y + t.parent.y;
        t.opacity = a > e && a < o ? 255 : 0
    },
    e.prototype.scrollViewEvent_Fetter = function() {
        for (var t = 0; t < this.LayoutFetter.children.length; t++) {
            var e = this.LayoutFetter.children[t];
            this.visibleRank_Fetter(e, -94.5, 820.5)
        }
    },
    e.prototype.visibleRank_Fetter = function(t, e, o) {
        var a = t.x + t.parent.x;
        t.opacity = a > e && a < o ? 255 : 0
    },
    e.prototype.ControlBackSelectSkill = function(t) {
        d.default.instance.isLookSkill = t,
        this.BtnBackSelectSkill.active = t
    },
    e.prototype.BossComeOnAnim = function() {
        var t = this;
        this.NodeBossAnim.active = !0;
        var e = this.NodeBossAnim.getComponent(sp.Skeleton);
        e.setAnimation(0, "newAnimation", !1),
        e.setCompleteListener(function() {
            t.NodeBossAnim.active = !1
        })
    },
    e.prototype.initFillRange = function() {
        var t = Number(m.DataMgr.getInstance().getParamsCfgForSingle(h.EnumParams.TrudgeMaxValue).value),
        e = Number(m.DataMgr.getInstance().getParamsCfgForSingle(h.EnumParams.TrudgeCostValue).value),
        o = Number(m.DataMgr.getInstance().getParamsCfgForSingle(h.EnumParams.TrudgeRecoverValue).value);
        this.costRange = .7 / (t / e * 50),
        this.recoverRange = .7 / (t / o * 50)
    },
    r([N({
        type: cc.Prefab,
        tooltip: "技能书"
    })], e.prototype, "SkillBookPre", void 0),
    r([N({
        type: cc.Prefab,
        tooltip: "技能书"
    })], e.prototype, "SkillBookPreNew", void 0),
    r([N({
        type: cc.Prefab,
        tooltip: "羁绊"
    })], e.prototype, "FetterPre", void 0),
    r([N({
        type: cc.Prefab,
        tooltip: "技能"
    })], e.prototype, "SkillPre", void 0),
    r([N({
        type: cc.Node,
        tooltip: "技能书布局"
    })], e.prototype, "LayoutSkillBook", void 0),
    r([N({
        type: cc.Node,
        tooltip: "羁绊布局"
    })], e.prototype, "LayoutFetter", void 0),
    r([N({
        type: cc.Node,
        tooltip: "技能布局"
    })], e.prototype, "LayoutSkill", void 0),
    r([N({
        type: cc.RichText,
        tooltip: "技能书数量"
    })], e.prototype, "LabSkillCount", void 0),
    r([N({
        type: cc.RichText,
        tooltip: "羁绊数量"
    })], e.prototype, "LabFetterCount", void 0),
    r([N(cc.Node)], e.prototype, "SpGameSpeed", void 0),
    r([N(cc.Node)], e.prototype, "BtnBackSelectSkill", void 0),
    r([N(cc.Node)], e.prototype, "BtnPause", void 0),
    r([N(cc.Label)], e.prototype, "LabSec", void 0),
    r([N(cc.Label)], e.prototype, "LabLevel", void 0),
    r([N(cc.Label)], e.prototype, "LabMonsterCount", void 0),
    r([N(cc.Node)], e.prototype, "NodeBossAnim", void 0),
    r([N({
        type: cc.Node,
        tooltip: "防触摸层"
    })], e.prototype, "LayerTouch", void 0),
    r([N(cc.Node)], e.prototype, "NodeGuide", void 0),
    r([N({
        type: cc.Node,
        tooltip: "暴走节点"
    })], e.prototype, "NodeTrudge", void 0),
    r([N(cc.Node)], e.prototype, "SpLight", void 0),
    r([T], e)
} (n.default);
o.default = w