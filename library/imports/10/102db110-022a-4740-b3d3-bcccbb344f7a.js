"use strict";
cc._RF.push(module, '102dbEQAipHQLPTvMy7NE96', 'UINotBagIndex');
// scripts/UINotBagIndex.js

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
    c = t("UIMgr"),
    l = t("TimeUtils"),
    u = t("Config"),
    p = t("TrackDataEvent"),
    g = t("EquipMgr"),
    d = t("GoodsManager"),
    h = t("PlayerMgr"),
    f = cc._decorator,
    m = f.ccclass,
    y = f.property,
    v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.LabDec = null, e.BtnSellEquip = null, e.BtnAddBagIndex = null, e.curTurnView = u.UIID.UIHome, e;
  }

  return i(e, t), e.prototype.init = function (t) {
    this.curTurnView = t || u.UIID.UIHome;
  }, e.prototype.onLoad = function () {}, e.prototype.start = function () {
    this.registerBtnEvent(), this.initView();
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnSellEquip.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView(), c.UIMgr.getInstance().openUI(u.UIID.UISellView, -1, t.curTurnView);
    }), this.BtnAddBagIndex.on(cc.Node.EventType.TOUCH_END, function () {
      var e = l.TimeUtils.GetTimeBySecond(),
          o = l.TimeUtils.GetTimeByHours2();
      s.SdkMgr.getInstance().playVideo(1, function () {
        var a = l.TimeUtils.GetTimeBySecond(),
            i = l.TimeUtils.GetTimeByHours2();
        h.PlayerMgr.getInstance().getTrackData().testTrackTime("equipvacancy", o, i, e, a), h.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.equipvacancy), h.PlayerMgr.getInstance().getTrackData().youmengTrackNew("equipvacancy_b"), h.PlayerMgr.getInstance().geUserData().addbagIndexCount(), t.initBtn(), t.curTurnView == u.UIID.UIEquip && t.sendEvent(u.EventName.RefreshBagIndexCount), d["default"].getInstance().isOverEquipBagForIndex() ? t.initDec() : t.closeView();
      });
    });
  }, e.prototype.initView = function () {
    this.initDec(), this.initBtn();
  }, e.prototype.initBtn = function () {
    h.PlayerMgr.getInstance().geUserData().getBagIndexCount() >= 144 && (this.BtnAddBagIndex.active = !1);
  }, e.prototype.initDec = function () {
    var t = h.PlayerMgr.getInstance().geUserData().getBagIndexCount(),
        e = g["default"].getInstance().getOwnedEquipCount();
    this.LabDec.string = "装备仓库已满，部分装备<color = #ff0000 >（" + (e - t) + "）</c>未能获得，建议出售无用的装备或者扩充仓库槽位！";
  }, e.prototype.closeView = function () {
    this.closeUI();
  }, r([y(cc.RichText)], e.prototype, "LabDec", void 0), r([y(cc.Node)], e.prototype, "BtnSellEquip", void 0), r([y(cc.Node)], e.prototype, "BtnAddBagIndex", void 0), r([m], e);
}(n["default"]);

o["default"] = v;

cc._RF.pop();