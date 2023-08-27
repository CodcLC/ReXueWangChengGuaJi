"use strict";
cc._RF.push(module, '7f9afAl3BFISYoLmYuwMhWL', 'UIPet');
// scripts/UIPet.js

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
    s = t("SdkMgr"),
    c = t("TimeUtils"),
    l = t("Utils"),
    u = t("Config"),
    p = t("TrackDataEvent"),
    g = t("DataMgr"),
    d = t("EquipMgr"),
    h = t("PetMgr"),
    f = t("PlayerMgr"),
    m = t("TimeMgr"),
    y = t("TipsMgr"),
    v = cc._decorator,
    I = v.ccclass,
    k = v.property,
    C = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.BtnBack = null, e.BtnFalse = null, e.BtnTrue = null, e.BtnVideoGet = null, e.LabName = null, e.LabProp1 = null, e.LabProp2 = null, e.LabTime = null, e;
  }

  return i(e, t), e.prototype.onLoad = function () {
    this.registerEvent();
  }, e.prototype.start = function () {
    this.registerBtnEvent(), this.initData(), this.initView();
  }, e.prototype.onClose = function () {}, e.prototype.registerEvent = function () {
    this.addEvent(u.EventName.RefreshPetViewTime, this.refreshTime);
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnBack.on(cc.Node.EventType.TOUCH_END, function () {
      f.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.pet_cancel), t.closeView();
    }), this.BtnFalse.on(cc.Node.EventType.TOUCH_END, function () {
      f.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.pet_cancel), t.closeView();
    }), this.BtnTrue.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView();
    }), this.BtnVideoGet.on(cc.Node.EventType.TOUCH_END, function () {
      var e = c.TimeUtils.GetTimeBySecond(),
          o = c.TimeUtils.GetTimeByHours2();
      s.SdkMgr.getInstance().playVideo(1, function () {
        var a = c.TimeUtils.GetTimeBySecond(),
            i = c.TimeUtils.GetTimeByHours2();
        f.PlayerMgr.getInstance().getTrackData().testTrackTime("pet", o, i, e, a), f.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.pet), f.PlayerMgr.getInstance().getTrackData().youmengTrackNew("pet_b"), f.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.pet_get);
        var r = f.PlayerMgr.getInstance().geUserData().getCurSec();
        f.PlayerMgr.getInstance().geUserData().getEnterSecCountForSecId(r) <= 0 && (r -= 1) < 1 && (r = 1), r <= 5 && f.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.pet_X, r), f.PlayerMgr.getInstance().geUserData().addPetToList(1), t.controlBtn(!1, !1, !0), h["default"].getInstance().isOwnedPet = !0, m.TimeMgr.getInstance().closeTimer_pet(), t.refreshTime(0), y["default"].getInstance().playFightTips(t.node);
      });
    });
  }, e.prototype.initData = function () {
    this.curPetCfg = g.DataMgr.getInstance().getPetsCfg();
  }, e.prototype.initView = function () {
    this.initPetInfo(), this.initBtnShow(), this.refreshTime(m.TimeMgr.getInstance().time_pet);
  }, e.prototype.initPetInfo = function () {
    var t = d["default"].getInstance();
    this.LabName.string = this.curPetCfg.Name;
    var e = l.Utils.getTabelArr(this.curPetCfg.PetsAttribute1),
        o = l.Utils.getTabelArr(this.curPetCfg.PetsAttribute2);
    this.LabProp1.string = "<b>" + t.getPropNameForPropType(Number(e[0])) + "+" + Number(e[1]) + t.getPropPercent(Number(e[0])) + "</b>", this.LabProp2.string = "<b>" + t.getPropNameForPropType(Number(o[0])) + "+" + Number(o[1]) + t.getPropPercent(Number(o[0])) + "</b>";
  }, e.prototype.initBtnShow = function () {
    f.PlayerMgr.getInstance().geUserData().isExistPetFotId(1) ? this.controlBtn(!1, !1, !0) : this.controlBtn(!0, !0, !1);
  }, e.prototype.controlBtn = function (t, e, o) {
    this.BtnFalse.active = t, this.BtnVideoGet.active = e, this.BtnTrue.active = o;
  }, e.prototype.refreshTime = function (t) {
    (h["default"].getInstance().isOwnedPet || t >= 30 || t <= 0) && (this.LabTime.node.active = !1), this.LabTime.string = "<color = #ff0000>" + (30 - t) + "s</c>后离开";
  }, e.prototype.closeView = function () {
    this.closeUI();
  }, r([k(cc.Node)], e.prototype, "BtnBack", void 0), r([k(cc.Node)], e.prototype, "BtnFalse", void 0), r([k(cc.Node)], e.prototype, "BtnTrue", void 0), r([k(cc.Node)], e.prototype, "BtnVideoGet", void 0), r([k(cc.Label)], e.prototype, "LabName", void 0), r([k(cc.RichText)], e.prototype, "LabProp1", void 0), r([k(cc.RichText)], e.prototype, "LabProp2", void 0), r([k(cc.RichText)], e.prototype, "LabTime", void 0), r([I], e);
}(n["default"]);

o["default"] = C;

cc._RF.pop();