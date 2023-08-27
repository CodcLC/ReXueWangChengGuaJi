"use strict";
cc._RF.push(module, 'bca1fuOJHlA94gRlPmT6ZCH', 'Weapon');
// scripts/Weapon.js

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

var n = t("Monster"),
    s = t("ObjectsParent"),
    c = cc._decorator,
    l = c.ccclass,
    u = c.property,
    p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.player = null, e.isAttackState = !1, e;
  }

  return i(e, t), e.prototype.onCollisionEnter = function (t) {
    this.isAttackState || (console.log("碰撞体：", t), t.node.getComponent(n["default"]).objectState != s.EnumObjectState.Die && (this.isAttackState = !0, console.log("碰撞检测开始")));
  }, e.prototype.onCollisionExit = function () {
    this.isAttackState = !1, console.log("碰撞检测离开");
  }, r([u({
    type: cc.Node,
    tooltip: "玩家"
  })], e.prototype, "player", void 0), r([l], e);
}(cc.Component);

o["default"] = p;

cc._RF.pop();