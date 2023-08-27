"use strict";
cc._RF.push(module, 'b1877HaMcVEF6GCqRPtlynm', 'ScrollCard');
// scripts/ScrollCard.js

"use strict";

var t = require;
var e = module;
var o = exports;

var _a,
    i,
    r = void 0 && (void 0).__extends || (_a = function a(t, e) {
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
    n = void 0 && (void 0).__decorate || function (t, e, o, a) {
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
}), o.Direction = void 0, function (t) {
  t[t.Horizontal = 0] = "Horizontal", t[t.Vertical = 1] = "Vertical";
}(i = o.Direction || (o.Direction = {})), cc.Enum(i);

var s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.Direction = i.Horizontal, e.itemOffset = 0, e.speed = 500, e.rub = 1, e.scaleMin = .5, e.scaleMax = 1, e.item = [], e.itemSize = 5, e.itemNode = null, e._startTime = 0, e._moveSpeed = 0, e.uiTransform = null, e.itemList = [], e.canTouch = !0, e.invert = 0, e.speedTime = 0, e;
  }

  return r(e, t), e.prototype.start = function () {
    var t = this;
    this.uiTransform = this.node, this.node.on(cc.Node.EventType.TOUCH_START, function () {
      t.canTouch && (t._moveSpeed = 0, t._startTime = new Date().getTime());
    }), this.node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
      if (t.canTouch) {
        var o = e.getDelta();
        t.itemMoveBy(o);
      }
    }), this.node.on(cc.Node.EventType.TOUCH_END, function (e) {
      t.canTouch && t.touchEnd(e);
    }), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
      t.canTouch && t.touchEnd(e);
    });
  }, e.prototype.init = function () {
    for (var t = 0; t < this.itemSize; t++) {
      var e = cc.instantiate(this.itemNode);
      e.active = !0, e.parent = this.node, this.item.push(e);
    }

    this._initItemPos(), this.updateScale();
  }, e.prototype.autoScroll = function (t, e) {
    var o = this;
    this.canTouch = !1, this.speedTime = t, this.offset = e, this.schedule(function () {
      o.invert += .01, o.invert >= o.speedTime && (o.invert = 0, o.scrollOffset(o.offset));
    }, 0);
  }, e.prototype.changleScrollSpeed = function (t, e) {
    this.speedTime = t, this.offset = e;
  }, e.prototype.stopAutoScroll = function () {
    this.unscheduleAllCallbacks();
  }, e.prototype.scrollOffset = function (t) {
    this.itemMoveBy(t);
  }, e.prototype.touchEnd = function (t) {
    var e,
        o = t.getLocation(),
        a = t.getStartLocation();
    e = 0 == this.Direction ? a.x - o.x : a.y - o.y;

    var i = new Date().getTime() - this._startTime;

    this._moveSpeed = e / i;
  }, e.prototype._initItemPos = function () {
    this.uiTransform.anchorY = .5, this.uiTransform.anchorX = .5, this._maxSize = new cc.Size(0, 0);

    for (var t = 0; t < this.item.length; t++) {
      this._maxSize.width += this.item[t].width, this._maxSize.height += this.item[t].height, this._maxSize.width += this.itemOffset, this._maxSize.height += this.itemOffset;
    }

    var e;

    for (e = 0 == this.Direction ? new cc.Vec2(-this._maxSize.width * this.uiTransform.anchorX, -this._maxSize.height * this.uiTransform.anchorY) : new cc.Vec2(this._maxSize.width * this.uiTransform.anchorX, this._maxSize.height * this.uiTransform.anchorY), this._screenRect = new cc.Rect(e.x, e.y, this._maxSize.width, this._maxSize.height), this.itemList = [], t = 0; t < this.item.length; t++) {
      var o = this.item[t].getAnchorPoint(),
          a = this.item[t].getContentSize();
      0 == this.Direction ? (e = e.add(new cc.Vec2(a.width * o.x, a.height * o.y)), this.item[t].position = new cc.Vec3(e.x, 0, 0), e = (e = e.add(new cc.Vec2(a.width * o.x, a.height * o.y))).add(new cc.Vec2(this.itemOffset, this.itemOffset))) : (e = e.subtract(new cc.Vec2(a.width * o.x, a.height * o.y)), this.item[t].position = new cc.Vec3(0, e.y, 0), e = (e = e.subtract(new cc.Vec2(a.width * o.x, a.height * o.y))).subtract(new cc.Vec2(this.itemOffset, this.itemOffset))), this.itemList[t] = this.item[t];
    }
  }, e.prototype.updateScale = function () {
    if (!(this.scaleMax < this.scaleMin || 0 == this.scaleMax)) for (var t = 0; t < this.item.length; t++) {
      var e;

      if (0 == this.Direction) {
        var o = this.item[t].position.x + this._maxSize.width / 2;
        e = this.item[t].position.x < 0 ? o / this._maxSize.width : 1 - o / this._maxSize.width;
      } else {
        var a = this.item[t].position.y + this._maxSize.height / 2;
        e = this.item[t].position.y < 0 ? a / this._maxSize.height : 1 - a / this._maxSize.height;
      }

      e *= 2;
      var i = this.scaleMax - this.scaleMin;
      i *= e, i += this.scaleMin, i = Math.abs(i), this.item[t].scale = i;
    }
  }, e.prototype.itemMoveBy = function (t) {
    for (var e = 0; e < this.item.length; e++) {
      var o = this.item[e].position;

      if (0 == this.Direction) {
        var a = new cc.Vec3(o.x + t.x, o.y, 0);
        this.item[e].position = a;
      } else a = new cc.Vec3(o.x, o.y + t.y, 0), this.item[e].position = a;
    }

    this.updatePos();
  }, e.prototype.updatePos = function () {
    var t = this.itemList[0],
        e = this.itemList[this.itemList.length - 1],
        o = !1;

    if (0 == this.Direction ? t.position.x < -this._maxSize.width / 2 && (o = !0) : t.position.y > this._maxSize.width / 2 && (o = !0), o) {
      var a = this.itemList.shift();
      this.itemList.push(a);
      var i = a.position;

      if (0 == this.Direction) {
        var r = e.position.x + e.width + this.itemOffset;
        a.position = new cc.Vec3(r, i.y, 0);
      } else {
        var n = e.position.y - e.height - this.itemOffset;
        a.position = new cc.Vec3(i.x, n, 0);
      }
    }

    var s = !1;
    0 == this.Direction ? e.position.x > this._maxSize.width / 2 && (s = !0) : e.position.y < -this._maxSize.height / 2 && (s = !0), s && (a = this.itemList.pop(), this.itemList.unshift(a), i = a.position, 0 == this.Direction ? (r = t.position.x - t.width - this.itemOffset, a.position = new cc.Vec3(r, i.y, 0)) : (n = t.position.y + t.height + this.itemOffset, a.position = new cc.Vec3(i.x, n, 0))), this.updateScale();
  }, e.prototype.update = function (t) {
    if (0 != this._moveSpeed) {
      for (var e = 0; e < this.item.length; e++) {
        var o = this.item[e].position;

        if (0 == this.Direction) {
          var a = this._moveSpeed * t * this.speed;
          this.item[e].position = new cc.Vec3(o.x - a, o.y, 0);
        } else {
          var i = this._moveSpeed * t * this.speed;
          this.item[e].position = new cc.Vec3(o.x, o.y - i, 0);
        }
      }

      this._moveSpeed > 0 ? (this._moveSpeed -= t * this.rub, this._moveSpeed < 0 && (this._moveSpeed = 0)) : (this._moveSpeed += t * this.rub, this._moveSpeed > 0 && (this._moveSpeed = 0));
      var r = -this._moveSpeed * t * this.speed;
      this.itemMoveBy(new cc.Vec2(r, r)), this.updatePos();
    }
  }, n([l({
    type: i,
    tooltip: "滑动方向"
  })], e.prototype, "Direction", void 0), n([l({
    type: cc.Integer,
    tooltip: "node 间隔"
  })], e.prototype, "itemOffset", void 0), n([l({
    type: cc.Integer,
    tooltip: "移动速度"
  })], e.prototype, "speed", void 0), n([l({
    type: cc.Float,
    tooltip: "减速频率"
  })], e.prototype, "rub", void 0), n([l({
    type: cc.Float,
    tooltip: "缩放最小值"
  })], e.prototype, "scaleMin", void 0), n([l({
    type: cc.Float,
    tooltip: "缩放最大值"
  })], e.prototype, "scaleMax", void 0), n([l({
    type: [cc.Node],
    tooltip: "滚动item"
  })], e.prototype, "item", void 0), n([l({
    type: cc.Integer
  })], e.prototype, "itemSize", void 0), n([l({
    type: cc.Node
  })], e.prototype, "itemNode", void 0), n([c], e);
}(cc.Component);

o["default"] = u;

cc._RF.pop();