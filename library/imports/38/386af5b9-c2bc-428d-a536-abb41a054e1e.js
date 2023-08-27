"use strict";
cc._RF.push(module, '386afW5wrxCjaU2q7QaBU4e', 'UIOnlineReward');
// scripts/UIOnlineReward.js

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
    c = t("ResourceMgr"),
    l = t("SdkMgr"),
    u = t("TimeUtils"),
    p = t("Utils"),
    g = t("Config"),
    d = t("DataMgr"),
    h = t("PlayerMgr"),
    f = t("TimeMgr"),
    m = t("GoodsManager"),
    y = t("TaskMgr"),
    v = t("TrackDataEvent"),
    I = t("GameMgr"),
    k = t("PlatformManager"),
    C = cc._decorator,
    S = C.ccclass,
    M = C.property,
    _ = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.NodeRewardItem = null, e.LayoutReward = null, e.BtnBack = null, e.BtnFreeGet = null, e.BtnVideoGet = null, e.LabTime = null, e.onlineGoodsIdList = [], e;
  }

  return i(e, t), e.prototype.onLoad = function () {
    this.registerEvent();
  }, e.prototype.start = function () {
    this.registerBtnEvent(), l.SdkMgr.getInstance().showBanner(), h.PlayerMgr.getInstance().getTrackData().youmengTrack(v.TrackId.onhookreward_click), this.initData(), this.initView(), k.PlatformManager.getInstance().hideBlockAd(2);
  }, e.prototype.registerEvent = function () {}, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnBack.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView(), I["default"].getInstance().openHomeUI();
    }), this.BtnFreeGet.on(cc.Node.EventType.TOUCH_END, function () {
      h.PlayerMgr.getInstance().getTrackData().youmengTrack(v.TrackId.onhookreward_get), m["default"].getInstance().getReward(t.onlineGoodsIdList), t.closeView(), t.resetOnHookRewardAndTime(), I["default"].getInstance().openHomeUI(), h.PlayerMgr.getInstance().getMainTaskData().mainTask(9);
    }), this.BtnVideoGet.on(cc.Node.EventType.TOUCH_END, function () {
      var e = u.TimeUtils.GetTimeBySecond(),
          o = u.TimeUtils.GetTimeByHours2();
      l.SdkMgr.getInstance().playVideo(1, function () {
        var a = u.TimeUtils.GetTimeBySecond(),
            i = u.TimeUtils.GetTimeByHours2();
        h.PlayerMgr.getInstance().getTrackData().testTrackTime("offlineaward", o, i, e, a), h.PlayerMgr.getInstance().getTrackData().youmengTrack(v.TrackId.offlineaward), h.PlayerMgr.getInstance().getTrackData().youmengTrackNew("offlineaward_b"), h.PlayerMgr.getInstance().getTrackData().youmengTrack(v.TrackId.onhookreward_getdouble), m["default"].getInstance().getRewardDouble(t.onlineGoodsIdList), t.closeView(), t.resetOnHookRewardAndTime(), I["default"].getInstance().openHomeUI(), h.PlayerMgr.getInstance().getMainTaskData().mainTask(9);
      });
    });
  }, e.prototype.resetOnHookRewardAndTime = function () {
    y["default"].getInstance().addOnHookCountForTask(), s.EventMgr.getInstance().emit(g.EventName.RefreshOnlineTime, 0), h.PlayerMgr.getInstance().geUserData().refreshLastOfflineTime(), h.PlayerMgr.getInstance().geUserData().resetOnHookTime(), f.TimeMgr.getInstance().resetTimerData_online(), f.TimeMgr.getInstance().openTimer_online(), s.EventMgr.getInstance().emit(g.EventName.RefreshRedDot, !0, !0, !0, !0, !1);
  }, e.prototype.initData = function () {
    this.initCurOnlineRewardList();
  }, e.prototype.initCurOnlineRewardList = function () {
    var t = h.PlayerMgr.getInstance().geUserData();
    this.onlineGoodsIdList = [];

    for (var e = d.DataMgr.getInstance().getSecCfg(t.getCurSec()), o = p.Utils.getTabelArr(e.HangUpRewardId), a = p.Utils.getTabelArr(e.HangUpRewardNum), i = p.Utils.getTabelArr(e.HangUpRewardProbability), r = u.TimeUtils.timeExchange(1, f.TimeMgr.getInstance().time_online), n = 0; n < o.length; n++) {
      for (var s = 0; s < r; s++) {
        if (p.Utils.weight_randSingle(Number(i[n]))) {
          var c = m["default"].getInstance().getGoodsCfgForGoodsType(Number(o[n])),
              l = {
            id: Number(o[n]),
            goodsId: Number(c[1]),
            goodsType: c[0].toString(),
            iCount: Number(a[n])
          };
          this.addDataToRewardList(l);
        }
      }
    }
  }, e.prototype.addDataToRewardList = function (t) {
    for (var e = !1, o = 0; o < this.onlineGoodsIdList.length; o++) {
      if ((1 == t.id || 2 == t.id) && this.onlineGoodsIdList[o].id == t.id) {
        this.onlineGoodsIdList[o].iCount += t.iCount, e = !0;
        break;
      }
    }

    e || this.onlineGoodsIdList.push(t);
  }, e.prototype.initView = function () {
    this.refreshOnlineTime(f.TimeMgr.getInstance().time_online), this.initRewardView();
  }, e.prototype.refreshOnlineTime = function (t) {
    this.LabTime.string = u.TimeUtils.SecondToHours(t);
  }, e.prototype.initRewardView = function () {
    for (var t = this, e = function e(_e) {
      o.scheduleOnce(function () {
        var o = cc.instantiate(t.NodeRewardItem);
        o.parent = t.LayoutReward, o.position = cc.Vec3.ZERO;
        var a,
            i = d.DataMgr.getInstance().getGoodsCfg(t.onlineGoodsIdList[_e].id);

        switch (c.ResourceMgr.getInstance().loadSpriteframe(i.bundleQuality, i.iconQuality, function (t) {
          o.getComponent(cc.Sprite).spriteFrame = t;
        }), o.getChildByName("LabName").color = m["default"].getInstance().seleColor(i.goodsQualityId), t.onlineGoodsIdList[_e].goodsType) {
          case "gold":
          case "inGot":
          case "power":
            a = d.DataMgr.getInstance().getGoodsCfg(t.onlineGoodsIdList[_e].goodsId), c.ResourceMgr.getInstance().loadSpriteframe(a.bundle, a.goodsGameIcon, function (t) {
              o.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t;
            }), o.getChildByName("LabCount").getComponent(cc.Label).string = "x" + t.onlineGoodsIdList[_e].iCount, o.getChildByName("LabName").getComponent(cc.Label).string = "" + a.goodsName;
            break;

          case "equip":
            a = d.DataMgr.getInstance().getEquipCfg(t.onlineGoodsIdList[_e].goodsId), c.ResourceMgr.getInstance().loadSpriteframe(a.bundle, a.equipIcon, function (t) {
              o.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t;
            }), o.getChildByName("LabCount").active = !1, o.getChildByName("LabName").getComponent(cc.Label).string = "" + a.equipName;
            break;

          case "skillBook":
            a = d.DataMgr.getInstance().getSkillBook(t.onlineGoodsIdList[_e].goodsId), d.DataMgr.getInstance().getSkillQuality(a.qualityId), o.getChildByName("LabSkillBookName").getComponent(cc.Label).string = a.name, o.getChildByName("SpIcon").scale = .75, h.PlayerMgr.getInstance().getTrackData().getAbType(), t.loadSpriteFrame("iconImg", a.SkillIcon, function (t) {
              o.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t;
            }), o.getChildByName("LabSkillBookName").active = !1, o.getChildByName("LabCount").active = !1, o.getChildByName("LabName").getComponent(cc.Label).string = "" + a.name;
        }
      }, .02 * _e);
    }, o = this, a = 0; a < this.onlineGoodsIdList.length; a++) {
      e(a);
    }
  }, e.prototype.closeView = function () {
    l.SdkMgr.getInstance().hideBanner(), this.closeUI(), k.PlatformManager.getInstance().showBlockAd(2);
  }, r([M({
    type: cc.Prefab,
    tooltip: "奖励item"
  })], e.prototype, "NodeRewardItem", void 0), r([M(cc.Node)], e.prototype, "LayoutReward", void 0), r([M(cc.Node)], e.prototype, "BtnBack", void 0), r([M(cc.Node)], e.prototype, "BtnFreeGet", void 0), r([M(cc.Node)], e.prototype, "BtnVideoGet", void 0), r([M(cc.Label)], e.prototype, "LabTime", void 0), r([S], e);
}(n["default"]);

o["default"] = _;

cc._RF.pop();