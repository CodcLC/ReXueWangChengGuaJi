"use strict";
cc._RF.push(module, 'bdbc4VXBTFMq7Kf0c9zdi09', 'CameraMgr');
// scripts/CameraMgr.js

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

var n = t("Main"),
    s = t("Config"),
    c = t("GameDataMgr"),
    l = cc._decorator,
    u = l.ccclass,
    p = l.property,
    g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.posIndex = cc.Vec2.ZERO, e.gameCamera = null, e.isShake = !1, e.tween_shake = null, e;
  }

  return i(e, t), e.prototype.start = function () {}, e.prototype.lateUpdate = function () {
    if (!c["default"].getInstance().isCurGameState(s.EnumGameState.GameOver) && !this.isShake && n["default"].instance.player && n["default"].instance.player.object) {
      var t = n["default"].instance.player.object.x - this.node.x,
          e = 4 * cc.director.getDeltaTime();
      this.node.x += t * e;
    }
  }, e.prototype.resetPos = function () {
    this.gameCamera.zoomRatio = 1, this.node.setPosition(cc.Vec2.ZERO);
  }, e.prototype.shakeAnim = function () {
    var t = this;
    this.tween_shake && (this.tween_shake.stop(), this.tween_shake = null, this.node.y = 0, this.isShake = !1), this.isShake = !0, this.tween_shake = cc.tween(this.node).parallel(cc.tween().by(.02, {
      x: -10
    }), cc.tween().by(.02, {
      y: -10
    })).by(.02, {
      x: 10
    }).parallel(cc.tween().by(.02, {
      x: -15
    }), cc.tween().by(.02, {
      y: 15
    })).parallel(cc.tween().by(.02, {
      x: 5
    }), cc.tween().by(.02, {
      y: 5
    })).parallel(cc.tween().by(.02, {
      x: 5
    }), cc.tween().by(.02, {
      y: -20
    })).parallel(cc.tween().by(.02, {
      x: 5
    }), cc.tween().by(.02, {
      y: 10
    })).call(function () {
      t.isShake = !1;
    }).start();
  }, e.prototype.controlCameraZoom = function (t, e, o) {
    cc.tween(this.gameCamera).to(t, {
      zoomRatio: e
    }).call(function () {
      o && o();
    }).start();
  }, r([p(cc.Camera)], e.prototype, "gameCamera", void 0), r([u], e);
}(cc.Component);

o["default"] = g;

cc._RF.pop();