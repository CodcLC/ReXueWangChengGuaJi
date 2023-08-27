"use strict";
cc._RF.push(module, 'ca45aVMtZJPcqM4mCVcVRE0', 'UISellView');
// scripts/UISellView.js

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
    c = t("UIMgr"),
    l = t("Config"),
    u = t("EquipMgr"),
    p = t("GoodsManager"),
    g = cc._decorator,
    d = g.ccclass,
    h = g.property,
    f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.LayoutSell = null, e.BtnClose = null, e.BtnSellQuick = null, e.curSeleIdList = [1], e.curTurnView = l.UIID.UIHome, e;
  }

  return i(e, t), e.prototype.init = function (t) {
    this.curTurnView = t || l.UIID.UIHome;
  }, e.prototype.start = function () {
    s.EventMgr.getInstance().emit(l.EventName.ShowUITop, !1), this.registerBtnEvent();
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView();
    }), this.BtnSellQuick.on(cc.Node.EventType.TOUCH_END, function () {
      t.curTurnView == l.UIID.UIEquip ? t.sendEvent(l.EventName.SellQuickEquip, t.curSeleIdList) : u["default"].getInstance().quickSellForSaveData(t.curSeleIdList), s.EventMgr.getInstance().emit(l.EventName.RefreshRedDot, !1, !1, !1, !0, !1), t.closeView();
    });

    for (var e = function e(_e) {
      var a = o.LayoutSell.getChildByName("BtnQuality" + _e);
      cc.isValid(a) && a.on(cc.Node.EventType.TOUCH_END, function (o) {
        var a = o.target.getChildByName("SpSeleIcon");
        a.active = !a.active;
        var i = _e;
        a.active ? t.curSeleIdList.push(i) : t.curSeleIdList.splice(t.curSeleIdList.indexOf(i), 1);
      });
    }, o = this, a = 1; a <= 5; a++) {
      e(a);
    }
  }, e.prototype.closeView = function () {
    p["default"].getInstance().isOverEquipBagForIndex() && c.UIMgr.getInstance().openUI(l.UIID.UINotBagIndex, -1, this.curTurnView), this.closeUI();
  }, r([h(cc.Node)], e.prototype, "LayoutSell", void 0), r([h(cc.Node)], e.prototype, "BtnClose", void 0), r([h(cc.Node)], e.prototype, "BtnSellQuick", void 0), r([d], e);
}(n["default"]);

o["default"] = f;

cc._RF.pop();