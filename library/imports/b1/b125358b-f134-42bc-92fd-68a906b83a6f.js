"use strict";
cc._RF.push(module, 'b1253WL8TRCvJL9aKkGuDpv', 'NodeCurrency');
// scripts/NodeCurrency.js

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

var n = t("EventMgr"),
    s = t("UIMgr"),
    c = t("Config"),
    l = t("PlayerMgr"),
    u = cc._decorator,
    p = u.ccclass,
    g = u.property,
    d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.GoldBg = null, e.InGotBg = null, e.GoldNum = null, e.InGotNum = null, e;
  }

  return i(e, t), e.prototype.onLoad = function () {
    this.registerEvent(), this.registerBtnEvent();
  }, e.prototype.start = function () {
    this.initData(), this.initView();
  }, e.prototype.registerEvent = function () {
    n.EventMgr.getInstance().on(c.EventName.RefreshGoldNumAndShow, this, this.refreshGoldNumAndShow), n.EventMgr.getInstance().on(c.EventName.RefreshInGotNumAndShow, this, this.refreshInGotNumAndShow);
  }, e.prototype.registerBtnEvent = function () {
    this.GoldBg.on(cc.Node.EventType.TOUCH_END, function () {
      s.UIMgr.getInstance().openUI(c.UIID.UIGeneralWindow, -1, c.GeneralWindowType.GoldWindow);
    }), this.InGotBg.on(cc.Node.EventType.TOUCH_END, function () {
      s.UIMgr.getInstance().openUI(c.UIID.UIGeneralWindow, -1, c.GeneralWindowType.InGotWindow);
    });
  }, e.prototype.initData = function () {
    this.userData = l.PlayerMgr.getInstance().geUserData();
  }, e.prototype.initView = function () {
    this.refreshGoldNumAndShow(), this.refreshInGotNumAndShow();
  }, e.prototype.refreshGoldNumAndShow = function () {
    this.GoldNum.string = "" + this.userData.getGoldNum();
  }, e.prototype.refreshInGotNumAndShow = function () {
    this.InGotNum.string = "" + this.userData.getInGotNum();
  }, e.prototype.onDestroy = function () {
    n.EventMgr.getInstance().off(c.EventName.RefreshGoldNumAndShow, this, this.refreshGoldNumAndShow), n.EventMgr.getInstance().off(c.EventName.RefreshInGotNumAndShow, this, this.refreshInGotNumAndShow);
  }, r([g({
    type: cc.Node,
    tooltip: "金币点击框"
  })], e.prototype, "GoldBg", void 0), r([g({
    type: cc.Node,
    tooltip: "元宝点击框"
  })], e.prototype, "InGotBg", void 0), r([g({
    type: cc.Label,
    tooltip: "金币标签"
  })], e.prototype, "GoldNum", void 0), r([g({
    type: cc.Label,
    tooltip: "元宝标签"
  })], e.prototype, "InGotNum", void 0), r([p], e);
}(cc.Component);

o["default"] = d;

cc._RF.pop();