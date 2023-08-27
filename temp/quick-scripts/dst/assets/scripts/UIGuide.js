
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UIGuide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlHdWlkZS5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsImEiLCJpIiwiX19leHRlbmRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiciIsIl9fZGVjb3JhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJHdWlsZENmZyIsIkRpclBvcyIsImMiLCJsIiwidSIsImNjIiwiX2RlY29yYXRvciIsInAiLCJjY2NsYXNzIiwiZyIsInByb3BlcnR5IiwiVG9wUmlnaHQiLCJUb3BMZWZ0IiwiQm90dG9tTGVmdCIsIkJvdHRvbVJpZ2h0IiwiY2xpY2tUeXBlIiwiZGlzdE5vZGUiLCJ0aXBzdHJpbmciLCJkaXIiLCJpc1dlZWsiLCJsaWdodFR5cGUiLCJzaG93SGFuZCIsImRlbGF5Iiwic3RhcnROb2RlIiwiZW5kTm9kZSIsIm1vdmVUaW1lIiwiaGlkZU1hc2siLCJhZGRTaXplIiwiU2l6ZSIsImNhbGxCYWNrIiwiaW5kZXhQb3MiLCJ2MiIsInlEZWMiLCJoYW5kSW5kZXgiLCJFdmVudE1nciIsImdldEluc3RhbmNlIiwiZW1pdCIsIkJhc2VFdmVudE5hbWUiLCJibG9ja3RvdWNoIiwiZCIsImFwcGx5IiwibWFzayIsImhhbmQiLCJoYW5kMSIsImhhbmQyIiwidGlwQmciLCJ0aXBUZXh0IiwiZGlyUG9zIiwiaW5pdCIsImNmZyIsImNsaWNrVG91Y2giLCJhY3RpdmUiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJWZWMyIiwiWkVSTyIsIm5vZGUiLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInNldFBvc2l0aW9uIiwiYWRkIiwic2V0Q29udGVudFNpemUiLCJnZXRDb250ZW50U2l6ZSIsInR5cGUiLCJNYXNrIiwiVHlwZSIsIkVMTElQU0UiLCJSRUNUIiwic2hvd1RpcCIsInNjaGVkdWxlT25jZSIsInR3ZWVuIiwidG8iLCJ3aWR0aCIsImhlaWdodCIsInN0YXJ0IiwibW92ZVRvdWNoIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwic3RvcCIsIm1vdmVUd2VlbiIsInBvc2l0aW9uIiwiVmVjMyIsIngiLCJ5IiwidW5pb24iLCJyZXBlYXRGb3JldmVyIiwiY2xvc2VVSSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX3RvdWNoTGlzdGVuZXIiLCJzZXRTd2FsbG93VG91Y2hlcyIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsImNvbnRhaW5zIiwiZ2V0TG9jYXRpb24iLCJnZXRDaGlsZEJ5TmFtZSIsInYzIiwic3RyaW5nIiwiTWF0aCIsImFicyIsInNjYWxlWCIsInNjYWxlWSIsIlJpY2hUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjs7QUFDQSxJQUFJQyxFQUFKO0FBQUEsSUFBT0MsQ0FBQyxHQUFHLFVBQVEsU0FBS0MsU0FBYixLQUEyQkYsRUFBQyxHQUFHLFdBQVNOLENBQVQsRUFBWUUsQ0FBWixFQUFlO0VBQ3JELE9BQU8sQ0FBQ0ksRUFBQyxHQUFHRyxNQUFNLENBQUNDLGNBQVAsSUFBeUI7SUFDakNDLFNBQVMsRUFBRTtFQURzQixhQUcxQkMsS0FIMEIsSUFJckMsVUFBU1osQ0FBVCxFQUFZRSxDQUFaLEVBQWU7SUFDWEYsQ0FBQyxDQUFDVyxTQUFGLEdBQWNULENBQWQ7RUFDSCxDQU5XLElBT1osVUFBU0YsQ0FBVCxFQUFZRSxDQUFaLEVBQWU7SUFDWCxLQUFLLElBQUlFLENBQVQs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QUE0QixPQUE1QixFQUFxQyxLQUFLLENBQTFDLENBekZNLEVBMEZQSyxDQUFDLENBQUMsQ0FBQ29CLENBQUMsQ0FBQ0osRUFBRSxDQUFDa0YsSUFBSixDQUFGLENBQUQsRUFBZWxILENBQUMsQ0FBQ1csU0FBakIsRUFBNEIsT0FBNUIsRUFBcUMsS0FBSyxDQUExQyxDQTFGTSxFQTJGUEssQ0FBQyxDQUFDLENBQUNvQixDQUFDLENBQUNKLEVBQUUsQ0FBQ2tGLElBQUosQ0FBRixDQUFELEVBQWVsSCxDQUFDLENBQUNXLFNBQWpCLEVBQTRCLE9BQTVCLEVBQXFDLEtBQUssQ0FBMUMsQ0EzRk0sRUE0RlBLLENBQUMsQ0FBQyxDQUFDb0IsQ0FBQyxDQUFDSixFQUFFLENBQUNpRyxRQUFKLENBQUYsQ0FBRCxFQUFtQmpJLENBQUMsQ0FBQ1csU0FBckIsRUFBZ0MsU0FBaEMsRUFBMkMsS0FBSyxDQUFoRCxDQTVGTSxFQTZGUEssQ0FBQyxDQUFDLENBQUNrQixDQUFELENBQUQsRUFBTWxDLENBQU4sQ0E3RkQ7QUE4RkgsQ0EzR08sQ0EyR0x3QixDQUFDLFdBM0dJLENBQVI7O0FBNEdBdEIsQ0FBQyxXQUFELEdBQVlnRSxDQUFaIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbnZhciBhLCBpID0gdGhpcyAmJiB0aGlzLl9fZXh0ZW5kcyB8fCAoYSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICByZXR1cm4gKGEgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwge1xuICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgfVxuICAgIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHQuX19wcm90b19fID0gZVxuICAgIH0gfHxcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gaW4gZSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIG8pICYmICh0W29dID0gZVtvXSlcbiAgICB9KSh0LCBlKVxufSxcbmZ1bmN0aW9uKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdFxuICAgIH1cbiAgICBhKHQsIGUpLFxuICAgIHQucHJvdG90eXBlID0gbnVsbCA9PT0gZSA/IE9iamVjdC5jcmVhdGUoZSkgOiAoby5wcm90b3R5cGUgPSBlLnByb3RvdHlwZSwgbmV3IG8pXG59KSxcbnIgPSB0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSB8fFxuZnVuY3Rpb24odCwgZSwgbywgYSkge1xuICAgIHZhciBpLCByID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICBuID0gciA8IDMgPyBlOiBudWxsID09PSBhID8gYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgbykgOiBhO1xuICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBSZWZsZWN0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSkgbiA9IFJlZmxlY3QuZGVjb3JhdGUodCwgZSwgbywgYSk7XG4gICAgZWxzZSBmb3IgKHZhciBzID0gdC5sZW5ndGggLSAxOyBzID49IDA7IHMtLSkoaSA9IHRbc10pICYmIChuID0gKHIgPCAzID8gaShuKSA6IHIgPiAzID8gaShlLCBvLCBuKSA6IGkoZSwgbykpIHx8IG4pO1xuICAgIHJldHVybiByID4gMyAmJiBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBvLCBuKSxcbiAgICBuXG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KSxcbm8uR3VpbGRDZmcgPSBvLkRpclBvcyA9IHZvaWQgMDtcbnZhciBuLCBzID0gdChcIkJhc2VVSVwiKSxcbmMgPSB0KFwiQXBwY2ZnXCIpLFxubCA9IHQoXCJFdmVudE1nclwiKSxcbnUgPSBjYy5fZGVjb3JhdG9yLFxucCA9IHUuY2NjbGFzcyxcbmcgPSB1LnByb3BlcnR5OyAoZnVuY3Rpb24odCkge1xuICAgIHRbdC5Ub3BSaWdodCA9IDBdID0gXCJUb3BSaWdodFwiLFxuICAgIHRbdC5Ub3BMZWZ0ID0gMV0gPSBcIlRvcExlZnRcIixcbiAgICB0W3QuQm90dG9tTGVmdCA9IDJdID0gXCJCb3R0b21MZWZ0XCIsXG4gICAgdFt0LkJvdHRvbVJpZ2h0ID0gM10gPSBcIkJvdHRvbVJpZ2h0XCJcbn0pKG4gPSBvLkRpclBvcyB8fCAoby5EaXJQb3MgPSB7fSkpO1xuby5HdWlsZENmZyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2xpY2tUeXBlID0gMCxcbiAgICB0aGlzLmRpc3ROb2RlID0gbnVsbCxcbiAgICB0aGlzLnRpcHN0cmluZyA9IG51bGwsXG4gICAgdGhpcy5kaXIgPSBuLlRvcFJpZ2h0LFxuICAgIHRoaXMuaXNXZWVrID0gITEsXG4gICAgdGhpcy5saWdodFR5cGUgPSAxLFxuICAgIHRoaXMuc2hvd0hhbmQgPSAhMCxcbiAgICB0aGlzLmRlbGF5ID0gLjEsXG4gICAgdGhpcy5zdGFydE5vZGUgPSBudWxsLFxuICAgIHRoaXMuZW5kTm9kZSA9IG51bGwsXG4gICAgdGhpcy5tb3ZlVGltZSA9IC4yLFxuICAgIHRoaXMuaGlkZU1hc2sgPSAhMSxcbiAgICB0aGlzLmFkZFNpemUgPSBuZXcgY2MuU2l6ZSgxMCwgMTApLFxuICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsLFxuICAgIHRoaXMuaW5kZXhQb3MgPSBjYy52MigpLFxuICAgIHRoaXMueURlYyA9IDAsXG4gICAgdGhpcy5oYW5kSW5kZXggPSBjYy52MigpLFxuICAgIGwuRXZlbnRNZ3IuZ2V0SW5zdGFuY2UoKS5lbWl0KGMuQmFzZUV2ZW50TmFtZS5ibG9ja3RvdWNoLCAhMSlcbn07XG52YXIgZCA9IGZ1bmN0aW9uKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIHJldHVybiBlLm1hc2sgPSBudWxsLFxuICAgICAgICBlLmhhbmQgPSBudWxsLFxuICAgICAgICBlLmhhbmQxID0gbnVsbCxcbiAgICAgICAgZS5oYW5kMiA9IG51bGwsXG4gICAgICAgIGUudGlwQmcgPSBudWxsLFxuICAgICAgICBlLnRpcFRleHQgPSBudWxsLFxuICAgICAgICBlLmRpc3ROb2RlID0gbnVsbCxcbiAgICAgICAgZS5kaXJQb3MgPSBuLlRvcFJpZ2h0LFxuICAgICAgICBlXG4gICAgfVxuICAgIHJldHVybiBpKGUsIHQpLFxuICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMuY2ZnID0gdFxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuY2xpY2tUb3VjaCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUsIG8gPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5oYW5kLmFjdGl2ZSA9ICExLCB0aGlzLnRpcEJnLmFjdGl2ZSA9ICExLCB0aGlzLmNmZyA9IHQsIHQuZGlyICYmICh0aGlzLmRpclBvcyA9IHQuZGlyKSwgdGhpcy5kaXN0Tm9kZSA9IHQuZGlzdE5vZGUsIHQuZGlzdE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5kaXN0Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSxcbiAgICAgICAgICAgIGkgPSB0aGlzLm1hc2subm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoYSk7XG4gICAgICAgICAgICB0aGlzLm1hc2subm9kZS5zZXRQb3NpdGlvbihpLmFkZCh0LmluZGV4UG9zKSksXG4gICAgICAgICAgICB0aGlzLm1hc2subm9kZS5zZXRDb250ZW50U2l6ZSg5MDAsIDkwMCksXG4gICAgICAgICAgICBlID0gdC5kaXN0Tm9kZS5nZXRDb250ZW50U2l6ZSgpXG4gICAgICAgIH0gZWxzZSBlID0gbmV3IGNjLlNpemUoMCwgMCk7XG4gICAgICAgIDAgPT0gdC5saWdodFR5cGUgPyB0aGlzLm1hc2sudHlwZSA9IGNjLk1hc2suVHlwZS5FTExJUFNFOiB0aGlzLm1hc2sudHlwZSA9IGNjLk1hc2suVHlwZS5SRUNULFxuICAgICAgICB0LmlzV2VlayAmJiB0LmhpZGVNYXNrID8gKHRoaXMubWFzay5ub2RlLmFjdGl2ZSA9ICExLCB0aGlzLnNob3dIYW5kKCksIHRoaXMuc2hvd1RpcCh0LnRpcHN0cmluZyksIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbC5FdmVudE1nci5nZXRJbnN0YW5jZSgpLmVtaXQoYy5CYXNlRXZlbnROYW1lLmJsb2NrdG91Y2gsICEwKVxuICAgICAgICB9LFxuICAgICAgICAuMSkpIDogY2MudHdlZW4odGhpcy5tYXNrLm5vZGUpLnRvKHQubW92ZVRpbWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBlLndpZHRoICsgdGhpcy5jZmcuYWRkU2l6ZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogZS5oZWlnaHQgKyB0aGlzLmNmZy5hZGRTaXplLmhlaWdodFxuICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgby5zaG93SGFuZCgpLFxuICAgICAgICAgICAgby5zaG93VGlwKHQudGlwc3RyaW5nKVxuICAgICAgICB9KS5kZWxheSguMSkuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGwuRXZlbnRNZ3IuZ2V0SW5zdGFuY2UoKS5lbWl0KGMuQmFzZUV2ZW50TmFtZS5ibG9ja3RvdWNoLCAhMClcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUubW92ZVRvdWNoID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICh0LnN0YXJ0Tm9kZSAmJiB0LmVuZE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMubWFzay5ub2RlLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdmFyIG8gPSB0LnN0YXJ0Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSxcbiAgICAgICAgICAgIGEgPSB0LmVuZE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyksXG4gICAgICAgICAgICBpID0gdGhpcy5oYW5kLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKSxcbiAgICAgICAgICAgIHIgPSB0aGlzLmhhbmQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGEpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZS5oYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoXCJoYW5kQW5pXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLjIpLFxuICAgICAgICAgICAgdGhpcy5oYW5kLnNldFBvc2l0aW9uKGkuYWRkKHRoaXMuY2ZnLmhhbmRJbmRleCkpLFxuICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9ICEwLFxuICAgICAgICAgICAgdGhpcy5tb3ZlVHdlZW4gPSBjYy50d2Vlbih0aGlzLmhhbmQpLnRvKHQubW92ZVRpbWUsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGNjLlZlYzMoci54LCByLnkpXG4gICAgICAgICAgICB9KS5kZWxheSguNSkuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBlLmhhbmQuc2V0UG9zaXRpb24oaS5hZGQoZS5jZmcuaGFuZEluZGV4KSlcbiAgICAgICAgICAgIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLFxuICAgICAgICAgICAgdGhpcy5tb3ZlVHdlZW4uc3RhcnQoKSxcbiAgICAgICAgICAgIHRoaXMubWFzay5ub2RlLnNldFBvc2l0aW9uKHIpLFxuICAgICAgICAgICAgdGhpcy5zaG93VGlwKHQudGlwc3RyaW5nKVxuICAgICAgICB9IGVsc2UgdGhpcy5jbG9zZVVJKClcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpczsgKCF0aGlzLmNmZy5kZWxheSB8fCB0aGlzLmNmZy5kZWxheSA8IC4xKSAmJiAodGhpcy5jZmcuZGVsYXkgPSAuMSksXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgMCA9PSB0LmNmZy5jbGlja1R5cGUgPyB0LmNsaWNrVG91Y2godC5jZmcpIDogdC5tb3ZlVG91Y2godC5jZmcpXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuY2ZnLmRlbGF5KSxcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULFxuICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAodC5jZmcuaXNXZWVrIHx8ICF0Lm1hc2subm9kZS5hY3RpdmUpIHJldHVybiB0LmNmZy5jYWxsQmFjayA/IHQuY2ZnLmNhbGxCYWNrKCkgOiB0Lm5vZGUuX3RvdWNoTGlzdGVuZXIuc2V0U3dhbGxvd1RvdWNoZXMoITEpLFxuICAgICAgICAgICAgdm9pZCB0LmNsb3NlVUkoKTtcbiAgICAgICAgICAgIHQuZGlzdE5vZGUgJiYgdC5kaXN0Tm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhlLmdldExvY2F0aW9uKCkpICYmICh0LmNmZy5jYWxsQmFjayA/IHQuY2ZnLmNhbGxCYWNrKCkgOiB0Lm5vZGUuX3RvdWNoTGlzdGVuZXIuc2V0U3dhbGxvd1RvdWNoZXMoITEpLCB0LmNsb3NlVUkoKSlcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcyksXG4gICAgICAgIHRoaXMubWFzay5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXG4gICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICh0LmNmZy5pc1dlZWsgfHwgIXQubWFzay5ub2RlLmFjdGl2ZSkgcmV0dXJuIHQuY2xvc2VVSSgpLFxuICAgICAgICAgICAgdm9pZCh0LmNmZy5jYWxsQmFjayA/IHQuY2ZnLmNhbGxCYWNrKCkgOiB0Lm5vZGUuX3RvdWNoTGlzdGVuZXIuc2V0U3dhbGxvd1RvdWNoZXMoITEpKTtcbiAgICAgICAgICAgIHQuZGlzdE5vZGUgJiYgdC5kaXN0Tm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhlLmdldExvY2F0aW9uKCkpICYmICh0LmNmZy5jYWxsQmFjayA/IHQuY2ZnLmNhbGxCYWNrKCkgOiB0Lm5vZGUuX3RvdWNoTGlzdGVuZXIuc2V0U3dhbGxvd1RvdWNoZXMoITEpLCB0LmNsb3NlVUkoKSlcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcylcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLnNob3dIYW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2ZnLnNob3dIYW5kICYmICh0aGlzLmhhbmQuc2V0UG9zaXRpb24odGhpcy5tYXNrLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKHRoaXMuY2ZnLmhhbmRJbmRleCkpKSwgdGhpcy5oYW5kLmFjdGl2ZSA9ICEwKVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuc2hvd1RpcCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHQgJiYgdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpcEJnLmFjdGl2ZSA9ICEwLFxuICAgICAgICAgICAgdGhpcy50aXBCZy5zZXRQb3NpdGlvbigwLCB0aGlzLmNmZy55RGVjKSxcbiAgICAgICAgICAgIHRoaXMudGlwVGV4dC5zdHJpbmcgPSB0O1xuICAgICAgICAgICAgdmFyIGUgPSBNYXRoLmFicyh0aGlzLnRpcEJnLnNjYWxlWCksXG4gICAgICAgICAgICBvID0gTWF0aC5hYnModGhpcy50aXBCZy5zY2FsZVkpLFxuICAgICAgICAgICAgYSA9IE1hdGguYWJzKHRoaXMudGlwVGV4dC5ub2RlLnNjYWxlWCksXG4gICAgICAgICAgICBpID0gTWF0aC5hYnModGhpcy50aXBUZXh0Lm5vZGUuc2NhbGVZKTtcbiAgICAgICAgICAgIHRoaXMuZGlyUG9zID09IG4uVG9wTGVmdCA/ICh0aGlzLnRpcEJnLnNjYWxlWCA9IC1lLCB0aGlzLnRpcFRleHQubm9kZS5zY2FsZVggPSAtYSkgOiB0aGlzLmRpclBvcyA9PSBuLlRvcFJpZ2h0ID8gKHRoaXMudGlwQmcuc2NhbGVYID0gZSwgdGhpcy50aXBUZXh0Lm5vZGUuc2NhbGVYID0gYSkgOiB0aGlzLmRpclBvcyA9PSBuLkJvdHRvbUxlZnQgPyAodGhpcy50aXBCZy5zY2FsZVggPSAtZSwgdGhpcy50aXBCZy5zY2FsZVkgPSAtbywgdGhpcy50aXBUZXh0Lm5vZGUuc2NhbGVYID0gLWEsIHRoaXMudGlwVGV4dC5ub2RlLnNjYWxlWSA9IC1pKSA6IHRoaXMuZGlyUG9zID09IG4uQm90dG9tUmlnaHQgJiYgKHRoaXMudGlwQmcuc2NhbGVZID0gLW8sIHRoaXMudGlwVGV4dC5ub2RlLnNjYWxlWCA9IGEsIHRoaXMudGlwVGV4dC5ub2RlLnNjYWxlWSA9IC1pKVxuICAgICAgICB9IGVsc2UgdGhpcy50aXBCZy5hY3RpdmUgPSAhMVxuICAgIH0sXG4gICAgcihbZyhjYy5NYXNrKV0sIGUucHJvdG90eXBlLCBcIm1hc2tcIiwgdm9pZCAwKSxcbiAgICByKFtnKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiaGFuZFwiLCB2b2lkIDApLFxuICAgIHIoW2coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJoYW5kMVwiLCB2b2lkIDApLFxuICAgIHIoW2coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJoYW5kMlwiLCB2b2lkIDApLFxuICAgIHIoW2coY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJ0aXBCZ1wiLCB2b2lkIDApLFxuICAgIHIoW2coY2MuUmljaFRleHQpXSwgZS5wcm90b3R5cGUsIFwidGlwVGV4dFwiLCB2b2lkIDApLFxuICAgIHIoW3BdLCBlKVxufSAocy5kZWZhdWx0KTtcbm8uZGVmYXVsdCA9IGQiXX0=