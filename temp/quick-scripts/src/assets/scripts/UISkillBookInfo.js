"use strict";
cc._RF.push(module, '83174nMvpFCj6ybJvxFXQ3A', 'UISkillBookInfo');
// scripts/UISkillBookInfo.js

"use strict";

var t = require;
var e = module;
var o = exports;

var _a,
    i = void 0 && (void 0).__extends || (_a = function a(t, e) {
  return (_a = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var o in e) {
      Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
  })(t, e);
}, function (t, e) {
  function o() {
    this.constructor = t;
  }

  _a(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}),
    r = void 0 && (void 0).__decorate || function (t, e, o, a) {
  var i,
      r = arguments.length,
      n = r < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, a);else for (var s = t.length - 1; s >= 0; s--) {
    (i = t[s]) && (n = (r < 3 ? i(n) : r > 3 ? i(e, o, n) : i(e, o)) || n);
  }
  return r > 3 && n && Object.defineProperty(e, o, n), n;
};

Object.defineProperty(o, "__esModule", {
  value: !0
});

var n = t("BaseUI"),
    s = t("AudioMgr"),
    c = t("EventMgr"),
    l = t("SdkMgr"),
    u = t("TweenMgr"),
    p = t("UIMgr"),
    g = t("TimeUtils"),
    d = t("Utils"),
    h = t("Main"),
    f = t("Config"),
    m = t("TrackDataEvent"),
    y = t("DataMgr"),
    v = t("EffectMgr"),
    I = t("GameDataMgr"),
    k = t("GoodsManager"),
    C = t("PlayerMgr"),
    S = t("TaskMgr"),
    M = t("UIGuide"),
    _ = cc._decorator,
    b = _.ccclass,
    D = _.property,
    T = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.SpSele = null, e.SpNotSele = null, e.BtnClose = null, e.BtnUpLv = null, e.BtnVideoUpLv = null, e.BtnOutSide = null, e.BtnInSide = null, e.LayoutBg = null, e.LabMaxLevel = null, e.LabSkillBookName = null, e.SpFetterIcon1 = null, e.LabFetterName1 = null, e.SpFetterIcon2 = null, e.LabFetterName2 = null, e.LayoutStarDec = null, e.LayoutStarInfo = null, e.LayoutNextStarDec = null, e.LayoutNextStarInfo = null, e.LayoutFetter1 = null, e.LayoutFetter2 = null, e.LayoutUpLvBtn = null, e.LayoutBtn = null, e.NodeBarBg = null, e.curWindow = null, e.curSkillBookId = 1, e.pos = cc.Vec3.ZERO, e.isOutSide = !0, e.isLoadOutSide = !1, e.isLoadInSide = !1, e;
  }

  return i(e, t), e.prototype.init = function (t, e, o) {
    this.curSkillBookId = t || 1, this.pos = e || cc.Vec3.ZERO, this.curWindow = o || f.UIID.UIGame;
  }, e.prototype.start = function () {
    this.curWindow == f.UIID.UIGame && h["default"].instance.controlObjectsAnim(!0), this.curWindow == f.UIID.UIGame && (this.BtnClose.zIndex = 1), c.EventMgr.getInstance().emit(f.EventName.ShowUITop, !1), this.registerBtnEvent(), this.initData(), this.initView(), this.guideShow();
  }, e.prototype.guideShow = function () {
    var t = C.PlayerMgr.getInstance().getGuideData();

    if (!t.getGuideEnd()) {
      var e = t.getCurrentId();
      if (e == 7 + t.putGuideNum) (o = new M.GuildCfg()).distNode = this.LayoutBg, this.openUICallBack(f.UIID.UIGuide, function () {
        t.addCurrentId();
      }, o);else if (e == 14 + t.putGuideNum) {
        var o;
        (o = new M.GuildCfg()).distNode = this.BtnUpLv, o.tipstring = "可消耗<color=#ff6b1b>同名技能书升级技能，提升其属性</color>噢", o.yDec = -550, this.openUICallBack(f.UIID.UIGuide, function () {
          t.addCurrentId();
        }, o);
      }
    }
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView(), t.curWindow == f.UIID.UIGame && h["default"].instance.controlObjectsAnim(!1), t.curWindow != f.UIID.UIGame && t.sendEvent(f.EventName.SkillBookGuideShow);
    }), this.BtnOutSide.on(cc.Node.EventType.TOUCH_END, function () {
      t.isOutSide = !0, t.refreshBtnChange(), t.initViewForWindow();
    }), this.BtnInSide.on(cc.Node.EventType.TOUCH_END, function () {
      C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.click_skillswitch), t.isOutSide = !1, t.refreshBtnChange(), t.initViewForWindow();
    }), this.BtnUpLv.on(cc.Node.EventType.TOUCH_END, function () {
      if (t.BtnUpLv.getComponent(cc.Button).interactable) {
        var e = y.DataMgr.getInstance().getSkillBookLevelCfg1(t.curSkillBookData.StartLevelID, t.curSaveSkillBookData.level);

        if (t.curSaveSkillBookData.iCount >= e.ConsumeSkillBookNum) {
          if (C.PlayerMgr.getInstance().geUserData().subGoldNum(e.ConsumeNum)) {
            if (s.AudioMgr.getInstance().playEffect(f.AudioId.Sound_Upgrade), t.curSaveSkillBookData.iCount -= e.ConsumeSkillBookNum, t.curSaveSkillBookData.level += 1, C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.guide14), t.curSaveSkillBookData.level <= 3 && C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.skill_upgrade_X_Y, t.curSaveSkillBookData.id, t.curSaveSkillBookData.level), t.curSaveSkillBookData.iCount > 0 && t.curSaveSkillBookData.level >= t.curSkillBookData.MaxLevel) {
              var o = y.DataMgr.getInstance().getSkillQuality(t.curSkillBookData.qualityId),
                  a = d.Utils.getTabelArr(o.FullGradeCompensate),
                  i = t.curSaveSkillBookData.iCount * Number(a[1]);
              C.PlayerMgr.getInstance().geUserData().subSkillBookCount(t.curSkillBookData.id, t.curSaveSkillBookData.iCount), k["default"].getInstance().getRewardForType(Number(a[0]), i);
              var r = y.DataMgr.getInstance().getGoodsCfg(Number(a[0])).goodsName;
              p.UIMgr.getInstance().openUI(f.UIID.UITips, -1, "已达到最大等级，多余技能书自动转化为 " + r + "x" + i);
            }

            S["default"].getInstance().skillBookMaxLvforTask(t.curSaveSkillBookData.level), C.PlayerMgr.getInstance().geUserData().setSkillBookData(t.curSaveSkillBookData), t.initCurBarLv(), t.initStarInfo(), t.initNextLevelDec(), t.initNextStarInfo(), t.initBtnUpLv(), t.playEffForPropUp(), c.EventMgr.getInstance().emit(f.EventName.RefreshUISkillBookShow, t.curSkillBookId), p.UIMgr.getInstance().openUI(f.UIID.UITips, -1, "升级成功"), t.guideShow();
          }
        } else p.UIMgr.getInstance().openUI(f.UIID.UITips, -1, "技能书不足");
      }
    }), this.BtnVideoUpLv.on(cc.Node.EventType.TOUCH_END, function () {
      var e = g.TimeUtils.GetTimeBySecond(),
          o = g.TimeUtils.GetTimeByHours2();
      l.SdkMgr.getInstance().playVideo(1, function () {
        var a = g.TimeUtils.GetTimeBySecond(),
            i = g.TimeUtils.GetTimeByHours2();
        C.PlayerMgr.getInstance().getTrackData().testTrackTime("upgradeskill", o, i, e, a), C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.upgradeskill), C.PlayerMgr.getInstance().getTrackData().youmengTrackNew("upgradeskill_b");
        var r = y.DataMgr.getInstance().getSkillBookLevelCfg1(t.curSkillBookData.StartLevelID, t.curSaveSkillBookData.level);

        if (t.curSaveSkillBookData.videoCount = t.curSaveSkillBookData.videoCount ? t.curSaveSkillBookData.videoCount : 0, t.curSaveSkillBookData.videoCount += 1, t.curSaveSkillBookData.videoCount >= r.AdvertisementNum) {
          if (t.curSaveSkillBookData.level += 1, s.AudioMgr.getInstance().playEffect(f.AudioId.Sound_Upgrade), t.curSaveSkillBookData.level <= 3 && C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.skill_upgrade_X_Y, t.curSaveSkillBookData.id, t.curSaveSkillBookData.level), t.curSaveSkillBookData.videoCount = 0, t.curSaveSkillBookData.iCount > 0 && t.curSaveSkillBookData.level >= t.curSkillBookData.MaxLevel) {
            var n = y.DataMgr.getInstance().getSkillQuality(t.curSkillBookData.qualityId),
                l = d.Utils.getTabelArr(n.FullGradeCompensate),
                u = t.curSaveSkillBookData.iCount * Number(l[1]);
            C.PlayerMgr.getInstance().geUserData().subSkillBookCount(t.curSkillBookData.id, t.curSaveSkillBookData.iCount), k["default"].getInstance().getRewardForType(Number(l[0]), u);
            var h = y.DataMgr.getInstance().getGoodsCfg(Number(l[0])).goodsName;
            p.UIMgr.getInstance().openUI(f.UIID.UITips, -1, "已达到最大等级，多余技能书自动转化为 " + h + "x" + u);
          }

          S["default"].getInstance().skillBookMaxLvforTask(t.curSaveSkillBookData.level), C.PlayerMgr.getInstance().geUserData().setSkillBookData(t.curSaveSkillBookData), t.initCurBarLv(), t.initStarInfo(), t.initNextLevelDec(), t.initNextStarInfo(), t.initBtnUpLv(), t.playEffForPropUp(), c.EventMgr.getInstance().emit(f.EventName.RefreshUISkillBookShow, t.curSkillBookId), p.UIMgr.getInstance().openUI(f.UIID.UITips, -1, "升级成功");
        } else t.initBtnUpLv(), C.PlayerMgr.getInstance().geUserData().setSkillBookData(t.curSaveSkillBookData);
      });
    });
  }, e.prototype.playEffForPropUp = function () {
    for (var t = 1; t <= 3; t++) {
      var e = this.LayoutStarInfo.getChildByName("Lab" + t + "StarDec1");
      cc.isValid(e) && v["default"].playEffectForEffId(f.EnumEffID.EffPropUp, e);
      var o = this.LayoutStarInfo.getChildByName("Lab" + t + "StarDec2");
      cc.isValid(o) && v["default"].playEffectForEffId(f.EnumEffID.EffPropUp, o);
    }
  }, e.prototype.playEffForUpLv = function () {
    v["default"].playEffectForEffId(f.EnumEffID.EffUpLv, this.node.parent.parent, this.node);
  }, e.prototype.callbackBtnClose = function () {
    this.closeView(), this.curWindow == f.UIID.UIGame && h["default"].instance.controlObjectsAnim(!1);
  }, e.prototype.initData = function () {
    this.curSkillBookData = y.DataMgr.getInstance().getSkillBook(this.curSkillBookId), this.curSaveSkillBookData = C.PlayerMgr.getInstance().geUserData().getSkillBookForId(this.curSkillBookId);
  }, e.prototype.initView = function () {
    this.initViewForWindow();
  }, e.prototype.initViewForWindow = function () {
    switch (this.isLoadOutSide || this.isLoadOutSide || (this.initLayoutBgPos(), this.initSkillBookInfo()), this.curWindow) {
      case f.UIID.UIGame:
        this.initStarInfo(), this.initAllSuitInfo(), this.LayoutStarDec.active = !1, this.LayoutNextStarDec.active = !1, this.LayoutNextStarInfo.active = !1, this.LayoutUpLvBtn.active = !1, this.LayoutBtn.active = !1;
        break;

      case f.UIID.UISkillBook:
        this.isOutSide ? (this.LayoutStarDec.active = !0, this.LayoutNextStarDec.active = !0, this.LayoutNextStarInfo.active = !0, this.LayoutUpLvBtn.active = !0, this.LayoutFetter1.active = !1, this.LayoutFetter2.active = !1) : this.isLoadInSide ? (this.LayoutStarDec.active = !1, this.LayoutNextStarDec.active = !1, this.LayoutNextStarInfo.active = !1, this.LayoutUpLvBtn.active = !1, this.LayoutFetter1.active = !0, this.LayoutFetter2.active = !0) : (this.isLoadInSide = !0, this.initAllSuitInfo(), this.LayoutStarDec.active = !1, this.LayoutNextStarDec.active = !1, this.LayoutNextStarInfo.active = !1, this.LayoutUpLvBtn.active = !1, this.LayoutFetter1.active = !0, this.LayoutFetter2.active = !0), this.LayoutBtn.active = !0, this.initBtnUpLv(), this.initNextLevelDec(), this.initNextStarInfo(), this.isLoadOutSide || (this.refreshBtnChange(), this.initCurBarLv(), this.initStarInfo(), this.isLoadOutSide = !0);
    }
  }, e.prototype.initLayoutBgPos = function () {}, e.prototype.initSkillBookInfo = function () {
    var t = this;
    this.LabSkillBookName.string = "" + this.curSkillBookData.name, this.LabSkillBookName.node.color = k["default"].getInstance().seleColor(this.curSkillBookData.qualityId);
    var e = y.DataMgr.getInstance().getFetter(this.curSkillBookData.fetterId1);
    this.loadSpriteFrame(e.bundle, e.iconImg, function (e) {
      t.SpFetterIcon1.spriteFrame = e;
    }), this.LabFetterName1.string = e.name;
    var o = y.DataMgr.getInstance().getFetter(this.curSkillBookData.fetterId2);
    this.loadSpriteFrame(o.bundle, o.iconImg, function (e) {
      t.SpFetterIcon2.spriteFrame = e;
    }), this.LabFetterName2.string = o.name;
  }, e.prototype.initCurBarLv = function () {
    var t = y.DataMgr.getInstance().getSkillBookLevelCfg1(this.curSkillBookData.StartLevelID, this.curSaveSkillBookData.level);
    this.NodeBarBg.getChildByName("SpBar").getComponent(cc.Sprite).fillRange = this.curSaveSkillBookData.iCount / t.ConsumeSkillBookNum, this.NodeBarBg.getChildByName("SpUp").active = this.curSaveSkillBookData.iCount >= t.ConsumeSkillBookNum, this.curSaveSkillBookData.iCount >= t.ConsumeSkillBookNum && u.TweenMgr.getInstance().animUpLv(this.NodeBarBg.getChildByName("SpUp")), this.NodeBarBg.getChildByName("LabLv").getComponent(cc.Label).string = "Lv." + this.curSaveSkillBookData.level + "：", this.curSaveSkillBookData.level >= this.curSkillBookData.MaxLevel ? this.NodeBarBg.getChildByName("LabBar").getComponent(cc.Label).string = "MAX" : this.NodeBarBg.getChildByName("LabBar").getComponent(cc.Label).string = this.curSaveSkillBookData.iCount + "/" + t.ConsumeSkillBookNum;
  }, e.prototype.initStarInfo = function () {
    for (var t = y.DataMgr.getInstance().getSkillBookLevelCfg1(this.curSkillBookData.StartLevelID, this.curSaveSkillBookData.level), e = I["default"].getInstance().getStarNumForSkillBookId(this.curSkillBookId), o = 1; o <= 3; o++) {
      var a = this.LayoutStarInfo.getChildByName("Lab" + o + "StarDec1");

      if (cc.isValid(a)) {
        var i = t.skillBookDec,
            r = d.Utils.getTabelArr(t["addProp" + o]);
        i = i.replace("%s", r[1]), a.getComponent(cc.Label).string = i, this.curWindow == f.UIID.UIGame && (e[0] == o ? a.color = cc.color(64, 156, 47) : a.opacity = 127);
      }

      var n = this.LayoutStarInfo.getChildByName("Lab" + o + "StarDec2");
      cc.isValid(n) && (i = t["skillBookDec" + o + "Star"], r = d.Utils.getTabelArr(t["starProp" + o]), i = 0 == Number(r[0]) ? i.replace("%s", this.curSkillBookData.name) : i.replace("%s", r[1]), n.getComponent(cc.Label).string = i, this.curWindow == f.UIID.UIGame && (e[0] == o ? n.color = cc.color(64, 156, 47, 255) : n.opacity = 127));
    }
  }, e.prototype.initNextLevelDec = function () {
    this.curSaveSkillBookData.level >= this.curSkillBookData.MaxLevel ? this.LayoutNextStarDec.active = !1 : this.LayoutNextStarDec.getChildByName("LabNextStartDec").getComponent(cc.Label).string = "下一级局内效果（Lv." + (this.curSaveSkillBookData.level + 1) + "）";
  }, e.prototype.initNextStarInfo = function () {
    if (this.curSaveSkillBookData.level >= this.curSkillBookData.MaxLevel) this.LayoutNextStarInfo.active = !1;else for (var t = y.DataMgr.getInstance().getSkillBookLevelCfg1(this.curSkillBookData.StartLevelID, this.curSaveSkillBookData.level + 1), e = 1; e <= 3; e++) {
      var o = this.LayoutNextStarInfo.getChildByName("Lab" + e + "StarDec1");

      if (cc.isValid(o)) {
        var a = t.skillBookDec,
            i = d.Utils.getTabelArr(t["addProp" + e]);
        a = a.replace("%s", i[1]), o.getComponent(cc.Label).string = a, o.opacity = 127;
      }

      var r = this.LayoutNextStarInfo.getChildByName("Lab" + e + "StarDec2");
      cc.isValid(r) && (a = t["skillBookDec" + e + "Star"], i = d.Utils.getTabelArr(t["starProp" + e]), a = 0 == Number(i[0]) ? a.replace("%s", this.curSkillBookData.name) : a.replace("%s", i[1]), r.getComponent(cc.Label).string = a, r.opacity = 127);
    }
  }, e.prototype.initBtnUpLv = function () {
    if (-1 != C.PlayerMgr.getInstance().geUserData().isExistSkillBookId(this.curSkillBookData.id)) {
      if (this.curSaveSkillBookData.level >= this.curSkillBookData.MaxLevel) return this.LabMaxLevel.active = !0, this.BtnUpLv.active = !1, this.BtnUpLv.getComponent(cc.Button).interactable = !1, void (this.BtnVideoUpLv.active = !1);
      var t = y.DataMgr.getInstance().getSkillBookLevelCfg1(this.curSkillBookData.StartLevelID, this.curSaveSkillBookData.level);
      this.BtnUpLv.getChildByName("LabCost").getComponent(cc.Label).string = "" + t.ConsumeNum, this.curSaveSkillBookData.videoCount = this.curSaveSkillBookData.videoCount ? this.curSaveSkillBookData.videoCount : 0, 1 == t.AdvertisementNum ? (this.BtnVideoUpLv.getChildByName("LabCost").active = !1, this.BtnVideoUpLv.getChildByName("NodeVideo").position = cc.v3(0, 0)) : (this.BtnVideoUpLv.getChildByName("LabCost").active = !0, this.BtnVideoUpLv.getChildByName("LabCost").getComponent(cc.Label).string = "(" + this.curSaveSkillBookData.videoCount + "/" + t.AdvertisementNum + ")", this.BtnVideoUpLv.getChildByName("NodeVideo").position = cc.v3(0, 15));
    } else this.LayoutUpLvBtn.active = !1;
  }, e.prototype.initAllSuitInfo = function () {
    this.initSuitInfo(this.LayoutFetter1, this.curSkillBookData.fetterId1), this.initSuitInfo(this.LayoutFetter2, this.curSkillBookData.fetterId2);
  }, e.prototype.initSuitInfo = function (t, e) {
    if (cc.isValid(t)) {
      for (var o = t.getChildByName("LayoutSuit1"), a = t.getChildByName("LayoutSuit2"), i = t.getChildByName("LayoutSuit3"), r = I["default"].getInstance().getSuitCountForFetterId(e), n = 1; n <= 3; n++) {
        r == n ? (t.getChildByName("LayoutSuit" + n).getChildByName("LabSuit").color = cc.color(255, 228, 76), t.getChildByName("LayoutSuit" + n).getChildByName("LabSuitDec").color = cc.color(255, 228, 76)) : t.getChildByName("LayoutSuit" + n).opacity = 127;
      }

      var s = y.DataMgr.getInstance().getFetter(e),
          c = d.Utils.getTabelArr(s.fetterCount),
          l = d.Utils.getTabelArr(s.fetterFun);
      o.getChildByName("LabSuit").getComponent(cc.Label).string = "(" + c[0] + ")";
      var u = s.fetterDec;
      u = u.replace("%s", l[0]), o.getChildByName("LabSuitDec").getComponent(cc.Label).string = "" + u, a.getChildByName("LabSuit").getComponent(cc.Label).string = "(" + c[1] + ")";
      var p = s.fetterDec;
      p = p.replace("%s", l[1]), a.getChildByName("LabSuitDec").getComponent(cc.Label).string = "" + p, i.getChildByName("LabSuit").getComponent(cc.Label).string = "(" + c[2] + ")";
      var g = s.fetterDec;
      g = g.replace("%s", l[2]), i.getChildByName("LabSuitDec").getComponent(cc.Label).string = "" + g;
      var h = t.getChildByName("NodeFetter");
      this.loadSpriteFrame(s.bundle, s.iconImg, function (t) {
        h.getChildByName("SpFetterIcon").getComponent(cc.Sprite).spriteFrame = t;
      }), h.getChildByName("LabFetterName").getComponent(cc.Label).string = s.name + "（同时修炼）";
    }
  }, e.prototype.refreshBtnChange = function () {
    this.BtnOutSide.getComponent(cc.Sprite).spriteFrame = this.isOutSide ? this.SpSele : this.SpNotSele, this.BtnInSide.getComponent(cc.Sprite).spriteFrame = this.isOutSide ? this.SpNotSele : this.SpSele, this.isOutSide ? (this.BtnOutSide.getChildByName("Lab").color = cc.color(255, 255, 255), this.BtnInSide.getChildByName("Lab").color = cc.color(126, 142, 176)) : (this.BtnOutSide.getChildByName("Lab").color = cc.color(126, 142, 176), this.BtnInSide.getChildByName("Lab").color = cc.color(255, 255, 255));
  }, e.prototype.closeView = function () {
    this.closeUI(), this.curWindow != f.UIID.UIGame && C.PlayerMgr.getInstance().getTrackData().youmengTrack(m.TrackId.guide15);
  }, r([D(cc.SpriteFrame)], e.prototype, "SpSele", void 0), r([D(cc.SpriteFrame)], e.prototype, "SpNotSele", void 0), r([D(cc.Node)], e.prototype, "BtnClose", void 0), r([D(cc.Node)], e.prototype, "BtnUpLv", void 0), r([D(cc.Node)], e.prototype, "BtnVideoUpLv", void 0), r([D(cc.Node)], e.prototype, "BtnOutSide", void 0), r([D(cc.Node)], e.prototype, "BtnInSide", void 0), r([D(cc.Node)], e.prototype, "LayoutBg", void 0), r([D(cc.Node)], e.prototype, "LabMaxLevel", void 0), r([D(cc.Label)], e.prototype, "LabSkillBookName", void 0), r([D(cc.Sprite)], e.prototype, "SpFetterIcon1", void 0), r([D(cc.Label)], e.prototype, "LabFetterName1", void 0), r([D(cc.Sprite)], e.prototype, "SpFetterIcon2", void 0), r([D(cc.Label)], e.prototype, "LabFetterName2", void 0), r([D(cc.Node)], e.prototype, "LayoutStarDec", void 0), r([D(cc.Node)], e.prototype, "LayoutStarInfo", void 0), r([D(cc.Node)], e.prototype, "LayoutNextStarDec", void 0), r([D(cc.Node)], e.prototype, "LayoutNextStarInfo", void 0), r([D(cc.Node)], e.prototype, "LayoutFetter1", void 0), r([D(cc.Node)], e.prototype, "LayoutFetter2", void 0), r([D(cc.Node)], e.prototype, "LayoutUpLvBtn", void 0), r([D(cc.Node)], e.prototype, "LayoutBtn", void 0), r([D(cc.Node)], e.prototype, "NodeBarBg", void 0), r([b], e);
}(n["default"]);

o["default"] = T;

cc._RF.pop();