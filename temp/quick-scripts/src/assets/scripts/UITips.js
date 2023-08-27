"use strict";
cc._RF.push(module, 'b8ba3ngR21FuYdxTm0/H8bV', 'UITips');
// scripts/UITips.js

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
    s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.tipsNode = null, e.tips = null, e;
  }

  return i(e, t), e.prototype.init = function (t) {
    this.str = this.T(t);
  }, e.prototype.uiRefresh = function (t) {
    this.str = this.T(t), this.tweenAction.stop(), this.tipsNode.setPosition(0, 200), this.tipsNode.scaleY = 0, this.tips.string = t, this.tweenAction.start();
  }, e.prototype.onLoad = function () {
    var t = this;
    this.tweenAction = cc.tween(this.tipsNode).to(.2, {
      scaleY: 1
    }).delay(1).by(1.2, {
      position: new cc.Vec3(0, 100)
    }).call(function () {
      t.closeUI();
    });
  }, e.prototype.start = function () {
    this.tipsNode.opacity = 255, this.tweenAction.stop(), this.tipsNode.setPosition(0, 200), this.tipsNode.scaleY = 0, this.tips.string = this.str, this.tweenAction.start();
  }, r([l({
    type: cc.Node,
    tooltip: "layout节点"
  })], e.prototype, "tipsNode", void 0), r([l({
    type: cc.RichText,
    tooltip: "文字"
  })], e.prototype, "tips", void 0), r([c], e);
}(n["default"]);

o["default"] = u;

cc._RF.pop();