"use strict";
cc._RF.push(module, '08526eaTJpCXYM9VKuRXAnP', 'BaseButton');
// scripts/BaseButton.js

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
}), o.BaseButton = void 0;

var n = t("AudioMgr"),
    s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.invertTime = 1, e.touched = !1, e.touchmil = 0, e;
  }

  return i(e, t), e.prototype._onTouchBegan = function (e) {
    this.interactable && this.enabledInHierarchy && (this.touched ? this._resetState() : t.prototype._onTouchBegan.call(this, e));
  }, e.prototype._onTouchEnded = function (e) {
    if (this.interactable && this.enabledInHierarchy) {
      if (this.touched) return this.node.pauseSystemEvents(!0), void this._resetState();
      n.AudioMgr.getInstance().playAudioButtonClicked(), this.touched = !0, this.touchmil = 0, t.prototype._onTouchEnded.call(this, e);
    }
  }, e.prototype.update = function (e) {
    t.prototype.update.call(this, e), this.touched && (this.touchmil = this.touchmil + e, this.touchmil > this.invertTime && (this.touchmil = 0, this.touched = !1, this.node.resumeSystemEvents(!0)));
  }, e.prototype.onDestroy = function () {
    this.touched = !1;
  }, e.prototype.onDisable = function () {
    t.prototype.onDisable.call(this), this.touched = !1;
  }, e.prototype.onEnable = function () {
    t.prototype.onEnable.call(this), this.touched = !1;
  }, r([l], e.prototype, "invertTime", void 0), r([c], e);
}(cc.Button);

o.BaseButton = u;

cc._RF.pop();