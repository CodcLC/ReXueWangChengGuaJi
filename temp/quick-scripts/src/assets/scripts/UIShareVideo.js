"use strict";
cc._RF.push(module, '7f4daqn7axJ5pV2ZpcDNcP4', 'UIShareVideo');
// scripts/UIShareVideo.js

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
    s = t("PlayerMgr"),
    c = cc._decorator,
    l = c.ccclass,
    u = c.property,
    p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.BtnClose = null, e.BtnShare = null, e;
  }

  return i(e, t), e.prototype.onLoad = function () {}, e.prototype.start = function () {
    this.registerBtnEvent();
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnClose.on(cc.Node.EventType.TOUCH_END, function () {
      s.PlayerMgr.getInstance().getShareData().clearData(), t.closeView();
    }), this.BtnShare.on(cc.Node.EventType.TOUCH_END, function () {
      var e = s.PlayerMgr.getInstance().getShareData();
      e.toShare(!1, function () {
        e.clearData(), console.log("视频分享成功！"), t.closeView();
      });
    });
  }, e.prototype.closeView = function () {
    this.closeUI();
  }, r([u(cc.Node)], e.prototype, "BtnClose", void 0), r([u(cc.Node)], e.prototype, "BtnShare", void 0), r([l], e);
}(n["default"]);

o["default"] = p;

cc._RF.pop();