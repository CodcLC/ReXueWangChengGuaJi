"use strict";
cc._RF.push(module, 'fe62b0EphBM2aLqaqkVDBRk', 'UIBecoming');
// scripts/UIBecoming.js

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
    return e.label = null, e.close = null, e.text = "hello", e;
  }

  return i(e, t), e.prototype.start = function () {
    var t = this;
    this.close.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeUI();
    });
  }, r([l(cc.Label)], e.prototype, "label", void 0), r([l(cc.Node)], e.prototype, "close", void 0), r([l], e.prototype, "text", void 0), r([c], e);
}(n["default"]);

o["default"] = u;

cc._RF.pop();