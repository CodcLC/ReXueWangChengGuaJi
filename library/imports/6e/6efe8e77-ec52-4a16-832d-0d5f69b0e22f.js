"use strict";
cc._RF.push(module, '6efe8537FJKFoMtDV9psOIv', 'UITouch');
// scripts/UITouch.js

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
    s = t("Appcfg"),
    c = cc._decorator,
    l = c.ccclass,
    u = c.property,
    p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.touchNode = null, e.needEffect = !0, e.touchNodes = [], e;
  }

  return i(e, t), e.prototype.onLoad = function () {
    var t = this;
    this.addEvent(s.BaseEventName.blocktouch, this.onBlockTouch), this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
      if (t.needEffect) {
        var o;
        t.touchNodes.length > 0 ? (o = t.touchNodes.pop()).active = !0 : ((o = cc.instantiate(t.touchNode)).active = !0, o.parent = t.node);
        var a = t.node.convertToNodeSpaceAR(e.getLocation());
        o.setPosition(a), t.scheduleOnce(function () {
          o.active = !1, t.touchNodes.push(o);
        }, .5);
      }
    }), this.node._touchListener.setSwallowTouches(!1);
  }, e.prototype.onBlockTouch = function (t) {
    this.node._touchListener.setSwallowTouches(!t);
  }, r([u(cc.Node)], e.prototype, "touchNode", void 0), r([u({
    displayName: "是否需要点击特效"
  })], e.prototype, "needEffect", void 0), r([l], e);
}(n["default"]);

o["default"] = p;

cc._RF.pop();