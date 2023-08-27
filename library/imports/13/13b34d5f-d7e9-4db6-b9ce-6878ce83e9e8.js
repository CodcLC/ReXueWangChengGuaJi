"use strict";
cc._RF.push(module, '13b341f1+lNtrnOaHjOg+no', 'UIGuide');
// scripts/UIGuide.js

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
}), o.GuildCfg = o.DirPos = void 0;
var n,
    s = t("BaseUI"),
    c = t("Appcfg"),
    l = t("EventMgr"),
    u = cc._decorator,
    p = u.ccclass,
    g = u.property;

(function (t) {
  t[t.TopRight = 0] = "TopRight", t[t.TopLeft = 1] = "TopLeft", t[t.BottomLeft = 2] = "BottomLeft", t[t.BottomRight = 3] = "BottomRight";
})(n = o.DirPos || (o.DirPos = {}));

o.GuildCfg = function () {
  this.clickType = 0, this.distNode = null, this.tipstring = null, this.dir = n.TopRight, this.isWeek = !1, this.lightType = 1, this.showHand = !0, this.delay = .1, this.startNode = null, this.endNode = null, this.moveTime = .2, this.hideMask = !1, this.addSize = new cc.Size(10, 10), this.callBack = null, this.indexPos = cc.v2(), this.yDec = 0, this.handIndex = cc.v2(), l.EventMgr.getInstance().emit(c.BaseEventName.blocktouch, !1);
};

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.mask = null, e.hand = null, e.hand1 = null, e.hand2 = null, e.tipBg = null, e.tipText = null, e.distNode = null, e.dirPos = n.TopRight, e;
  }

  return i(e, t), e.prototype.init = function (t) {
    this.cfg = t;
  }, e.prototype.clickTouch = function (t) {
    var e,
        o = this;

    if (this.hand.active = !1, this.tipBg.active = !1, this.cfg = t, t.dir && (this.dirPos = t.dir), this.distNode = t.distNode, t.distNode) {
      var a = this.distNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
          i = this.mask.node.parent.convertToNodeSpaceAR(a);
      this.mask.node.setPosition(i.add(t.indexPos)), this.mask.node.setContentSize(900, 900), e = t.distNode.getContentSize();
    } else e = new cc.Size(0, 0);

    0 == t.lightType ? this.mask.type = cc.Mask.Type.ELLIPSE : this.mask.type = cc.Mask.Type.RECT, t.isWeek && t.hideMask ? (this.mask.node.active = !1, this.showHand(), this.showTip(t.tipstring), this.scheduleOnce(function () {
      l.EventMgr.getInstance().emit(c.BaseEventName.blocktouch, !0);
    }, .1)) : cc.tween(this.mask.node).to(t.moveTime, {
      width: e.width + this.cfg.addSize.width,
      height: e.height + this.cfg.addSize.height
    }).call(function () {
      o.showHand(), o.showTip(t.tipstring);
    }).delay(.1).call(function () {
      l.EventMgr.getInstance().emit(c.BaseEventName.blocktouch, !0);
    }).start();
  }, e.prototype.moveTouch = function (t) {
    var e = this;

    if (t.startNode && t.endNode) {
      this.mask.node.active = !1;
      var o = t.startNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
          a = t.endNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
          i = this.hand.parent.convertToNodeSpaceAR(o),
          r = this.hand.parent.convertToNodeSpaceAR(a);
      this.scheduleOnce(function () {
        e.hand.getComponent(cc.Animation).stop("handAni");
      }, .2), this.hand.setPosition(i.add(this.cfg.handIndex)), this.hand.active = !0, this.moveTween = cc.tween(this.hand).to(t.moveTime, {
        position: new cc.Vec3(r.x, r.y)
      }).delay(.5).call(function () {
        e.hand.setPosition(i.add(e.cfg.handIndex));
      }).union().repeatForever(), this.moveTween.start(), this.mask.node.setPosition(r), this.showTip(t.tipstring);
    } else this.closeUI();
  }, e.prototype.start = function () {
    var t = this;
    (!this.cfg.delay || this.cfg.delay < .1) && (this.cfg.delay = .1), this.scheduleOnce(function () {
      0 == t.cfg.clickType ? t.clickTouch(t.cfg) : t.moveTouch(t.cfg);
    }, this.cfg.delay), this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
      if (t.cfg.isWeek || !t.mask.node.active) return t.cfg.callBack ? t.cfg.callBack() : t.node._touchListener.setSwallowTouches(!1), void t.closeUI();
      t.distNode && t.distNode.getBoundingBoxToWorld().contains(e.getLocation()) && (t.cfg.callBack ? t.cfg.callBack() : t.node._touchListener.setSwallowTouches(!1), t.closeUI());
    }, this), this.mask.node.getChildByName("bg").on(cc.Node.EventType.TOUCH_START, function (e) {
      if (t.cfg.isWeek || !t.mask.node.active) return t.closeUI(), void (t.cfg.callBack ? t.cfg.callBack() : t.node._touchListener.setSwallowTouches(!1));
      t.distNode && t.distNode.getBoundingBoxToWorld().contains(e.getLocation()) && (t.cfg.callBack ? t.cfg.callBack() : t.node._touchListener.setSwallowTouches(!1), t.closeUI());
    }, this);
  }, e.prototype.showHand = function () {
    this.cfg.showHand && (this.hand.setPosition(this.mask.node.position.add(cc.v3(this.cfg.handIndex))), this.hand.active = !0);
  }, e.prototype.showTip = function (t) {
    if (t && t.length > 0) {
      this.tipBg.active = !0, this.tipBg.setPosition(0, this.cfg.yDec), this.tipText.string = t;
      var e = Math.abs(this.tipBg.scaleX),
          o = Math.abs(this.tipBg.scaleY),
          a = Math.abs(this.tipText.node.scaleX),
          i = Math.abs(this.tipText.node.scaleY);
      this.dirPos == n.TopLeft ? (this.tipBg.scaleX = -e, this.tipText.node.scaleX = -a) : this.dirPos == n.TopRight ? (this.tipBg.scaleX = e, this.tipText.node.scaleX = a) : this.dirPos == n.BottomLeft ? (this.tipBg.scaleX = -e, this.tipBg.scaleY = -o, this.tipText.node.scaleX = -a, this.tipText.node.scaleY = -i) : this.dirPos == n.BottomRight && (this.tipBg.scaleY = -o, this.tipText.node.scaleX = a, this.tipText.node.scaleY = -i);
    } else this.tipBg.active = !1;
  }, r([g(cc.Mask)], e.prototype, "mask", void 0), r([g(cc.Node)], e.prototype, "hand", void 0), r([g(cc.Node)], e.prototype, "hand1", void 0), r([g(cc.Node)], e.prototype, "hand2", void 0), r([g(cc.Node)], e.prototype, "tipBg", void 0), r([g(cc.RichText)], e.prototype, "tipText", void 0), r([p], e);
}(s["default"]);

o["default"] = d;

cc._RF.pop();