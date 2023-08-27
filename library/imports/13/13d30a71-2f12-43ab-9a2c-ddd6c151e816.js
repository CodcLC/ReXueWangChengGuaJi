"use strict";
cc._RF.push(module, '13d30pxLxJDq5os3dbBUegW', 'UIDrawCard');
// scripts/UIDrawCard.js

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
    s = t("EventMgr"),
    c = t("SdkMgr"),
    l = t("TweenMgr"),
    u = t("TimeUtils"),
    p = t("Utils"),
    g = t("Main"),
    d = t("Config"),
    h = t("TrackDataEvent"),
    f = t("DataMgr"),
    m = t("GameDataMgr"),
    y = t("PlayerMgr"),
    v = t("UIGuide"),
    I = cc._decorator,
    k = I.ccclass,
    C = I.property,
    S = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.SkillBookPre = null, e.SkillBookPreNew = null, e.SpSkillProb = null, e.contentSkillSele = null, e.BtnFreeRefresh = null, e.BtnVideoRefresh = null, e.BtnVideoBoth = null, e.BtnLookSkill = null, e.LabSkillBookDec = null, e.LabSkillCount = null, e.LabFetterCount = null, e.callback = function () {}, e.skillBookList = [], e.curSkillBookIdArr = [], e.abType = "A", e;
  }

  return i(e, t), e.prototype.init = function (t) {
    this.callback = t || function () {};
  }, e.prototype.onLoad = function () {
    this.initAbTypeData(), this.registerEvent(), this.randomSkillBook();
  }, e.prototype.initAbTypeData = function () {
    this.abType = y.PlayerMgr.getInstance().getTrackData().getAbType();
  }, e.prototype.guideShow = function () {
    var t = y.PlayerMgr.getInstance().geUserData();

    if (1 == t.getCurSec() && 1 == t.getEnterFirstSecCount()) {
      var e = y.PlayerMgr.getInstance().getGuideData();

      if (!e.getGuideEnd()) {
        var o = e.getCurrentId();
        if (o == 2 + e.putGuideNum) (a = new v.GuildCfg()).distNode = this.contentSkillSele.children[1], a.tipstring = "每通过一关，都可选择<color=#ff6b1b>一项技能</color>提升角色属性！\n<color=#ff6b1b>（已经拥有的技能才会出现噢）</color>", a.yDec = -350, a.handIndex = cc.v2(50, 50), a.addSize = cc.size(0, 80), this.openUICallBack(d.UIID.UIGuide, function () {
          e.addCurrentId();
        }, a);else if (o == 3 + e.putGuideNum) (a = new v.GuildCfg()).distNode = this.contentSkillSele.children[0], a.tipstring = "运气不错！出了<color=#ff6b1b>高品质的技能</color>呢！", a.yDec = -350, a.handIndex = cc.v2(50, 50), a.addSize = cc.size(0, 80), this.openUICallBack(d.UIID.UIGuide, function () {
          e.addCurrentId();
        }, a);else if (o == 5 + e.putGuideNum) (a = new v.GuildCfg()).distNode = this.contentSkillSele.children[1], a.tipstring = "再修炼<color=#ff6b1b>2次已学习的技能</color>，可以把技能<color=#ff6b1b>升星</color>，<color=#ff6b1b>效果大幅提升</color>噢！", a.yDec = -350, a.handIndex = cc.v2(50, 50), a.addSize = cc.size(0, 80), this.openUICallBack(d.UIID.UIGuide, function () {
          e.addCurrentId();
        }, a);else if (o == 6 + e.putGuideNum) {
          var a;
          (a = new v.GuildCfg()).distNode = this.contentSkillSele.children[2], a.tipstring = "再修炼1次，技能就能升到2星了！\n部分技能<color=#ff6b1b>升至2星</color>后，可获得强大的<color=#ff6b1b>招式</color>噢", a.yDec = -350, a.handIndex = cc.v2(50, 50), a.addSize = cc.size(0, 80), this.openUICallBack(d.UIID.UIGuide, function () {
            e.addCurrentId();
          }, a);
        }
      }
    }
  }, e.prototype.start = function () {
    this.trackEvent(), this.registerBtnEvent(), this.carryCallback(), this.initData(), this.initView();
  }, e.prototype.trackEvent = function () {
    "B" != y.PlayerMgr.getInstance().getAbType() && (y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.guide7_1), y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.guide6_1)), y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.guide4_1), y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.guide3_1);
  }, e.prototype.carryCallback = function () {
    this.callback && this.callback();
  }, e.prototype.registerEvent = function () {
    this.addEvent(d.EventName.ControlDrawCardView, this.controlCurViewActive), this.sendEvent(d.EventName.OpenRecoverTrudge);
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnFreeRefresh.on(cc.Node.EventType.TOUCH_END, function () {
      y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.click_getrefreshtime), t.randomSkillBook(), m["default"].getInstance().skillBookRefreshCount--, t.refreshFreeCount(), t.refreshSkillBook(), m["default"].getInstance().skillBookRefreshCount <= 0 && t.initRefreshBtn();
    }), this.BtnVideoRefresh.on(cc.Node.EventType.TOUCH_END, function () {
      var e = u.TimeUtils.GetTimeBySecond(),
          o = u.TimeUtils.GetTimeByHours2();
      c.SdkMgr.getInstance().playVideo(1, function () {
        var a = u.TimeUtils.GetTimeBySecond(),
            i = u.TimeUtils.GetTimeByHours2();
        y.PlayerMgr.getInstance().getTrackData().testTrackTime("getrefreshtime", o, i, e, a), y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.getrefreshtime), y.PlayerMgr.getInstance().getTrackData().youmengTrackNew("getrefreshtime_b"), m["default"].getInstance().skillBookRefreshCount += Number(f.DataMgr.getInstance().getParamsCfgForSingle(d.EnumParams.SkillBookRefreshCountForVideo).value), t.initRefreshBtn();
      });
    }), this.BtnVideoBoth.on(cc.Node.EventType.TOUCH_END, function () {
      var e = u.TimeUtils.GetTimeBySecond(),
          o = u.TimeUtils.GetTimeByHours2();
      c.SdkMgr.getInstance().playVideo(1, function () {
        var a = u.TimeUtils.GetTimeBySecond(),
            i = u.TimeUtils.GetTimeByHours2();
        y.PlayerMgr.getInstance().getTrackData().testTrackTime("getallskill", o, i, e, a), y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.getallskill), y.PlayerMgr.getInstance().getTrackData().youmengTrackNew("getallskill_b"), 1 == y.PlayerMgr.getInstance().geUserData().getIsFirstBothNeed() && y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.getall_get), m["default"].getInstance().skillBookBothBtnForWeight();

        for (var r = 1; r <= 3; r++) {
          t.sendEvent(d.EventName.AddSkillBook, t.curSkillBookIdArr[r - 1]), 3 == r && (g["default"].instance.isFastPass ? setTimeout(function () {
            m["default"].getInstance().setGameState(d.EnumGameState.GameDoing), s.EventMgr.getInstance().emit(d.EventName.GameLayerTouch, !1);
          }, 500) : (m["default"].getInstance().setGameState(d.EnumGameState.GameDoing), s.EventMgr.getInstance().emit(d.EventName.GameLayerTouch, !1), g["default"].instance.bossComeOn(), s.EventMgr.getInstance().emit(d.EventName.GameGuideShow)));
        }

        t.closeView();
      });
    }), this.BtnLookSkill.on(cc.Node.EventType.TOUCH_END, function () {
      g["default"].instance.isFastPass && t.sendEvent(d.EventName.GameLayerTouch, !1), t.sendEvent(d.EventName.ControlBackSelectSkill, !0), t.controlCurViewActive(!1);
    });
  }, e.prototype.initData = function () {
    var t = p.Utils.getTabelArr(f.DataMgr.getInstance().getParamsCfgForSingle(d.EnumParams.AddSkillBookRefreshCount).value);
    (y.PlayerMgr.getInstance().geUserData().getCurLevel() - 1) % Number(t[0]) == 0 && (m["default"].getInstance().skillBookRefreshCount += Number(t[1]));
  }, e.prototype.initView = function () {
    this.initDec(), this.initRefreshBtn(), this.initBothBtn(), this.refreshSkillBook(), this.refreshSkillBookAndFetterCount(), this.refreshSkillBookQualityWeight();
  }, e.prototype.initRefreshBtn = function () {
    this.BtnFreeRefresh.active = m["default"].getInstance().skillBookRefreshCount > 0, this.BtnVideoRefresh.active = m["default"].getInstance().skillBookRefreshCount <= 0, this.refreshFreeCount();
  }, e.prototype.initBothBtn = function () {
    var t = y.PlayerMgr.getInstance().geUserData(),
        e = p.Utils.weight_randSingle(m["default"].getInstance().weightFoBothBtn);
    this.BtnVideoBoth.active = e, e && (t.addIsFirstBothNeed(), 1 == t.getIsFirstBothNeed() && y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.getall_appear)), m["default"].getInstance().weightFoBothBtn += m["default"].getInstance().weightAddForBothBtn, l.TweenMgr.getInstance().playHeartAni(this.BtnVideoBoth);
  }, e.prototype.refreshSkillBookQualityWeight = function () {
    for (var t, e = f.DataMgr.getInstance().getSkillBookProbCfg(), o = y.PlayerMgr.getInstance().geUserData().getCurLevel(), a = 0; a < e.length; a++) {
      var i = p.Utils.getTabelArr(e[a].levelRange);

      if (o >= Number(i[0]) && o <= Number(i[1])) {
        t = e[a];
        break;
      }
    }

    for (a = 0; a < this.SpSkillProb.childrenCount; a++) {
      this.SpSkillProb.children[a].getComponent(cc.Label).string = "·" + m["default"].getInstance().selectPropNum(t, a + 1) + "%";
    }
  }, e.prototype.initDec = function () {
    var t = p.Utils.getTabelArr(f.DataMgr.getInstance().getParamsCfgForSingle(d.EnumParams.AddSkillBookRefreshCount).value),
        e = Number(f.DataMgr.getInstance().getParamsCfgForSingle(d.EnumParams.SkillBookRefreshCountForVideo).value);
    this.BtnVideoRefresh.getChildByName("LabVideoRefresh").getComponent(cc.Label).string = "刷新次数+" + e, this.LabSkillBookDec.string = "刷新技能次数：每通过" + t[0] + "关+" + t[1] + "次，视频获取+" + e + "次";
  }, e.prototype.refreshSkillBookAndFetterCount = function () {
    this.LabSkillCount.string = "修炼技能总数量：<color = #e24f00>" + m["default"].getInstance().getSkillBookDataArr().length + "/" + m["default"].getInstance().curTotalSkillBookCount + "</color>", this.LabFetterCount.string = "解锁羁绊总数量：<color = #e24f00>" + m["default"].getInstance().getFetterSuitCount() + "</color>";
  }, e.prototype.randomSkillBook = function () {
    (!this.curSkillBookIdArr || this.curSkillBookIdArr.length > 0) && (this.curSkillBookIdArr = []);
    var t = y.PlayerMgr.getInstance().geUserData();
    if (1 != t.getCurSec() || 1 != t.getEnterFirstSecCount()) for (var e = 0; e < 3; e++) {
      var o = y.PlayerMgr.getInstance().geUserData().getCurLevel(),
          a = this.randomSkillBookId(o);
      this.curSkillBookIdArr.push(a);
    } else 1 == (o = t.getCurLevel()) ? this.curSkillBookIdArr = [16, 34, 53] : 2 == o ? this.curSkillBookIdArr = [8, 48, 14] : 3 == o ? this.curSkillBookIdArr = [16, 8, 53] : 4 == o && (this.curSkillBookIdArr = [16, 53, 8]);
  }, e.prototype.randomSkillBookId = function (t) {
    var e = m["default"].getInstance().randomSkillBook(t);
    return this.isExistSkillBookId(e) ? this.randomSkillBookId(t) : m["default"].getInstance().isFullStarForSkillBookId(e) ? this.randomSkillBookId(t) : e;
  }, e.prototype.isExistSkillBookId = function (t) {
    this.curSkillBookIdArr || (this.curSkillBookIdArr = []);

    for (var e = 0; e < this.curSkillBookIdArr.length; e++) {
      if (t == this.curSkillBookIdArr[e]) return !0;
    }

    return !1;
  }, e.prototype.refreshFreeCount = function () {
    this.BtnFreeRefresh.getChildByName("LabFreeCount").getComponent(cc.Label).string = "剩余" + m["default"].getInstance().skillBookRefreshCount + "次";
  }, e.prototype.refreshSkillBook = function () {
    var t = this;
    if (!this.skillBookList || this.skillBookList.length <= 0) for (var e = function e(_e) {
      o.scheduleOnce(function () {
        var o = f.DataMgr.getInstance().getSkillBook(t.curSkillBookIdArr[_e]);
        t.refreshSkillBook2(o, _e), 2 == _e && t.guideShow();
      }, .02 * _e);
    }, o = this, a = 0; a < 3; a++) {
      e(a);
    } else {
      var i = function i(e) {
        r.scheduleOnce(function () {
          var o = f.DataMgr.getInstance().getSkillBook(t.curSkillBookIdArr[e]);
          t.loadSkillBook(o, t.skillBookList[e]);
        }, .02 * e);
      },
          r = this;

      for (a = 0; a < this.skillBookList.length; a++) {
        i(a);
      }
    }
  }, e.prototype.refreshSkillBook2 = function (t, e) {
    var o = this,
        a = this.SkillBookPreNew,
        i = cc.instantiate(a);
    i.active = !0, i.position = cc.v3(), i.name = "NodeSkillBookBig" + (e + 1), i.parent = this.contentSkillSele, this.skillBookList.push(i), this.loadSkillBook(t, i), i.on(cc.Node.EventType.TOUCH_END, function () {
      var t = e + 1;
      "B" != y.PlayerMgr.getInstance().getAbType() && (y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.guide7), y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.guide6)), y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.guide4), y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.guide3), o.sendEvent(d.EventName.AddSkillBook, o.curSkillBookIdArr[t - 1]), g["default"].instance.isFastPass ? setTimeout(function () {
        m["default"].getInstance().setGameState(d.EnumGameState.GameDoing), s.EventMgr.getInstance().emit(d.EventName.GameLayerTouch, !1);
      }, 500) : (m["default"].getInstance().setGameState(d.EnumGameState.GameDoing), s.EventMgr.getInstance().emit(d.EventName.GameLayerTouch, !1), g["default"].instance.bossComeOn(), s.EventMgr.getInstance().emit(d.EventName.GameGuideShow)), o.closeView();
    });
  }, e.prototype.loadSkillBook = function (t, e) {
    if (t || (t = f.DataMgr.getInstance().getSkillBook(1)), cc.isValid(e)) {
      var o = y.PlayerMgr.getInstance().geUserData().getSkillBookForId(t.id),
          a = f.DataMgr.getInstance().getSkillBookLevelCfg1(t.StartLevelID, o.level),
          i = f.DataMgr.getInstance().getSkillQuality(t.qualityId),
          r = f.DataMgr.getInstance().getFetter(t.fetterId1),
          n = f.DataMgr.getInstance().getFetter(t.fetterId2);
      this.loadSpriteFrame("iconImg", t.SkillIcon, function (t) {
        e.getChildByName("SpSkillBook").getComponent(cc.Sprite).spriteFrame = t;
      }), this.loadSpriteFrame(i.bundle, i.iconImg2, function (t) {
        e.getChildByName("SpNameBg").getComponent(cc.Sprite).spriteFrame = t;
      }), e.getChildByName("LabSkilllName").getComponent(cc.Label).string = t.name, e.getChildByName("LabName").getComponent(cc.Label).string = t.name;
      var s = p.Utils.getTabelArr(a.addProp1),
          c = a.skillBookDec.replace("%s", s[1]);
      e.getChildByName("LabBookProp").getComponent(cc.Label).string = c;
      var l = m["default"].getInstance().getFetterNumForFetterId(t.fetterId1);
      e.getChildByName("SpBgfetter1").getChildByName("LabFetter1").getComponent(cc.Label).string = r.name + "(" + l + ")", this.loadSpriteFrame(r.bundle, r.iconImg, function (t) {
        e.getChildByName("SpBgfetter1").getChildByName("SpFetter1").getComponent(cc.Sprite).spriteFrame = t;
      });
      var u = m["default"].getInstance().getFetterNumForFetterId(t.fetterId2);
      if (e.getChildByName("SpBgfetter2").getChildByName("LabFetter2").getComponent(cc.Label).string = n.name + "(" + u + ")", this.loadSpriteFrame(n.bundle, n.iconImg, function (t) {
        e.getChildByName("SpBgfetter2").getChildByName("SpFetter2").getComponent(cc.Sprite).spriteFrame = t;
      }), -1 == m["default"].getInstance().isExistSkillBookId(t.id)) e.getChildByName("LabNotHave").active = !0, e.getChildByName("NodeGrade").active = !1, e.getChildByName("LabSkillCount").active = !1;else {
        e.getChildByName("LabNotHave").active = !1, e.getChildByName("NodeGrade").active = !0, e.getChildByName("LabSkillCount").active = !0;
        var g = m["default"].getInstance().getStarNumForSkillBookId(t.id);
        3 != g[0] ? e.getChildByName("LabSkillCount").getComponent(cc.Label).string = g[1] + "/" + g[2] : e.getChildByName("LabSkillCount").active = !1;

        for (var d = 0; d < e.getChildByName("NodeGrade").children.length; d++) {
          var h = e.getChildByName("NodeGrade").getChildByName("SpStarBg" + (d + 1));
          g[0] >= d + 1 ? h.getChildByName("SpStar").active = !0 : h.getChildByName("SpStar").active = !1;
        }
      }
    }
  }, e.prototype.controlCurViewActive = function (t) {
    this.node.active = t;
  }, e.prototype.closeView = function () {
    g["default"].instance.controlObjectsAnim(!1), this.closeUI();
  }, r([C({
    type: cc.Node,
    tooltip: "技能书预制"
  })], e.prototype, "SkillBookPre", void 0), r([C({
    type: cc.Node,
    tooltip: "技能书xin预制"
  })], e.prototype, "SkillBookPreNew", void 0), r([C({
    type: cc.Node,
    tooltip: "技能书品质概率"
  })], e.prototype, "SpSkillProb", void 0), r([C(cc.Node)], e.prototype, "contentSkillSele", void 0), r([C(cc.Node)], e.prototype, "BtnFreeRefresh", void 0), r([C(cc.Node)], e.prototype, "BtnVideoRefresh", void 0), r([C(cc.Node)], e.prototype, "BtnVideoBoth", void 0), r([C(cc.Node)], e.prototype, "BtnLookSkill", void 0), r([C({
    type: cc.Label,
    tooltip: "技能书获取描述"
  })], e.prototype, "LabSkillBookDec", void 0), r([C({
    type: cc.RichText,
    tooltip: "技能书数量"
  })], e.prototype, "LabSkillCount", void 0), r([C({
    type: cc.RichText,
    tooltip: "羁绊数量"
  })], e.prototype, "LabFetterCount", void 0), r([k], e);
}(n["default"]);

o["default"] = S;

cc._RF.pop();