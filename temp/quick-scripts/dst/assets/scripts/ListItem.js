
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ListItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2cddajDLl9PcoTX+6iQF3fJ', 'ListItem');
// scripts/ListItem.js

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
var n,
    s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    u = s.disallowMultiple,
    p = s.menu,
    g = s.executionOrder;

(function (t) {
  t[t.NONE = 0] = "NONE", t[t.TOGGLE = 1] = "TOGGLE", t[t.SWITCH = 2] = "SWITCH";
})(n || (n = {}));

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.icon = null, e.title = null, e.selectedMode = n.NONE, e.selectedFlag = null, e.selectedSpriteFrame = null, e._unselectedSpriteFrame = null, e.adaptiveSize = !1, e._selected = !1, e._eventReg = !1, e;
  }

  return i(e, t), Object.defineProperty(e.prototype, "selected", {
    get: function get() {
      return this._selected;
    },
    set: function set(t) {
      if (this._selected = t, this.selectedFlag) switch (this.selectedMode) {
        case n.TOGGLE:
          this.selectedFlag.active = t;
          break;

        case n.SWITCH:
          var e = this.selectedFlag.getComponent(cc.Sprite);
          e && (e.spriteFrame = t ? this.selectedSpriteFrame : this._unselectedSpriteFrame);
      }
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "btnCom", {
    get: function get() {
      return this._btnCom || (this._btnCom = this.node.getComponent(cc.Button)), this._btnCom;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.onLoad = function () {
    if (this.selectedMode == n.SWITCH) {
      var t = this.selectedFlag.getComponent(cc.Sprite);
      this._unselectedSpriteFrame = t.spriteFrame;
    }
  }, e.prototype.onDestroy = function () {
    this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
  }, e.prototype._registerEvent = function () {
    this._eventReg || (this.btnCom && this.list.selectedMode > 0 && this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis")), this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this), this._eventReg = !0);
  }, e.prototype._onSizeChange = function () {
    this.list._onItemAdaptive(this.node);
  }, e.prototype.createEvt = function (t, e, o) {
    if (void 0 === o && (o = null), t.isValid) {
      t.comName = t.comName || t.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
      var a = new cc.Component.EventHandler();
      return a.target = o || t.node, a.component = t.comName, a.handler = e, a;
    }
  }, e.prototype.showAni = function (t, e, o) {
    var a,
        i = this;

    switch (t) {
      case 0:
        a = cc.tween(i.node).to(.2, {
          scale: .7
        }).by(.3, {
          y: 2 * i.node.height
        });
        break;

      case 1:
        a = cc.tween(i.node).to(.2, {
          scale: .7
        }).by(.3, {
          x: 2 * i.node.width
        });
        break;

      case 2:
        a = cc.tween(i.node).to(.2, {
          scale: .7
        }).by(.3, {
          y: -2 * i.node.height
        });
        break;

      case 3:
        a = cc.tween(i.node).to(.2, {
          scale: .7
        }).by(.3, {
          x: -2 * i.node.width
        });
        break;

      default:
        a = cc.tween(i.node).to(.3, {
          scale: .1
        });
    }

    (e || o) && a.call(function () {
      if (o) {
        i.list._delSingleItem(i.node);

        for (var t = i.list.displayData.length - 1; t >= 0; t--) {
          if (i.list.displayData[t].id == i.listId) {
            i.list.displayData.splice(t, 1);
            break;
          }
        }
      }

      e();
    }), a.start();
  }, e.prototype.onClickThis = function () {
    this.list.selectedId = this.listId;
  }, r([l({
    type: cc.Sprite
  })], e.prototype, "icon", void 0), r([l({
    type: cc.Node
  })], e.prototype, "title", void 0), r([l({
    type: cc.Enum(n)
  })], e.prototype, "selectedMode", void 0), r([l({
    type: cc.Node,
    visible: function visible() {
      return this.selectedMode > n.NONE;
    }
  })], e.prototype, "selectedFlag", void 0), r([l({
    type: cc.SpriteFrame,
    visible: function visible() {
      return this.selectedMode == n.SWITCH;
    }
  })], e.prototype, "selectedSpriteFrame", void 0), r([l({})], e.prototype, "adaptiveSize", void 0), r([c, u(), p("自定义组件/List Item"), g(-5001)], e);
}(cc.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTGlzdEl0ZW0uanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJhIiwiaSIsIl9fZXh0ZW5kcyIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsInIiLCJfX2RlY29yYXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsInMiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiY2MiLCJfZGVjb3JhdG9yIiwiYyIsImNjY2xhc3MiLCJsIiwicHJvcGVydHkiLCJ1IiwiZGlzYWxsb3dNdWx0aXBsZSIsInAiLCJtZW51IiwiZyIsImV4ZWN1dGlvbk9yZGVyIiwiTk9ORSIsIlRPR0dMRSIsIlNXSVRDSCIsImQiLCJhcHBseSIsImljb24iLCJ0aXRsZSIsInNlbGVjdGVkTW9kZSIsInNlbGVjdGVkRmxhZyIsInNlbGVjdGVkU3ByaXRlRnJhbWUiLCJfdW5zZWxlY3RlZFNwcml0ZUZyYW1lIiwiYWRhcHRpdmVTaXplIiwiX3NlbGVjdGVkIiwiX2V2ZW50UmVnIiwiZ2V0Iiwic2V0IiwiYWN0aXZlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiX2J0bkNvbSIsIm5vZGUiLCJCdXR0b24iLCJvbkxvYWQiLCJvbkRlc3Ryb3kiLCJvZmYiLCJOb2RlIiwiRXZlbnRUeXBlIiwiU0laRV9DSEFOR0VEIiwiX29uU2l6ZUNoYW5nZSIsIl9yZWdpc3RlckV2ZW50IiwiYnRuQ29tIiwibGlzdCIsImNsaWNrRXZlbnRzIiwidW5zaGlmdCIsImNyZWF0ZUV2dCIsIm9uIiwiX29uSXRlbUFkYXB0aXZlIiwiaXNWYWxpZCIsImNvbU5hbWUiLCJuYW1lIiwibWF0Y2giLCJwb3AiLCJyZXBsYWNlIiwiQ29tcG9uZW50IiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsInNob3dBbmkiLCJ0d2VlbiIsInRvIiwic2NhbGUiLCJieSIsInkiLCJoZWlnaHQiLCJ4Iiwid2lkdGgiLCJfZGVsU2luZ2xlSXRlbSIsImRpc3BsYXlEYXRhIiwiaWQiLCJsaXN0SWQiLCJzcGxpY2UiLCJzdGFydCIsIm9uQ2xpY2tUaGlzIiwic2VsZWN0ZWRJZCIsInR5cGUiLCJFbnVtIiwidmlzaWJsZSIsIlNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjs7QUFDQSxJQUFJQyxFQUFKO0FBQUEsSUFBT0MsQ0FBQyxHQUFHLFVBQVEsU0FBS0MsU0FBYixLQUEyQkYsRUFBQyxHQUFHLFdBQVNOLENBQVQsRUFBWUUsQ0FBWixFQUFlO0VBQzdDLE9BQU8sQ0FBQ0ksRUFBQyxHQUFHRyxNQUFNLENBQUNDLGNBQVAsSUFBeUI7SUFDN0JDLFNBQVMsRUFBRTtFQURrQixhQUd0QkMsS0FIc0IsSUFJakMsVUFBU1osQ0FBVCxFQUFZRSxDQUFaLEVBQWU7SUFDWEYsQ0FBQyxDQUFDVyxTQUFGLEdBQWNULENBQWQ7RUFDSCxDQU5PLElBT1IsVUFBU0YsQ0FBVCxFQUFZRSxDQUFaLEVBQWU7SUFDWCxLQUFLLElBQUlFLENBQVQsSUFBY0YsQ0FBZDtNQUFpQk8sTUFBTSxDQUFDSSxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNiLENBQXJDLEVBQXdDRSxDQUF4QyxNQUErQ0osQ0FBQyxDQUFDSSxDQUFELENBQUQsR0FBT0YsQ0FBQyxDQUFDRSxDQUFELENBQXZEO0lBQWpCO0VBQ0gsQ0FURSxFQVNBSixDQVRBLEVBU0dFLENB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QUQsRUFLSXZDLENBQUMsQ0FBQ1csU0FMTixFQUtpQixjQUxqQixFQUtpQyxLQUFLLENBTHRDLENBL0dFLEVBcUhISyxDQUFDLENBQUMsQ0FBQ2UsQ0FBQyxDQUFDO0lBQ0Q0RSxJQUFJLEVBQUVoRixFQUFFLENBQUNtRixXQURSO0lBRURELE9BQU8sRUFBRSxtQkFBVztNQUNoQixPQUFPLEtBQUsvRCxZQUFMLElBQXFCMUIsQ0FBQyxDQUFDcUIsTUFBOUI7SUFDSDtFQUpBLENBQUQsQ0FBRixDQUFELEVBS0l6QyxDQUFDLENBQUNXLFNBTE4sRUFLaUIscUJBTGpCLEVBS3dDLEtBQUssQ0FMN0MsQ0FySEUsRUEySEhLLENBQUMsQ0FBQyxDQUFDZSxDQUFDLENBQUMsRUFBRCxDQUFGLENBQUQsRUFFSS9CLENBQUMsQ0FBQ1csU0FGTixFQUVpQixjQUZqQixFQUVpQyxLQUFLLENBRnRDLENBM0hFLEVBOEhISyxDQUFDLENBQUMsQ0FBQ2EsQ0FBRCxFQUFJSSxDQUFDLEVBQUwsRUFBU0UsQ0FBQyxDQUFDLGlCQUFELENBQVYsRUFBK0JFLENBQUMsQ0FBQyxDQUFDLElBQUYsQ0FBaEMsQ0FBRCxFQUEyQ3JDLENBQTNDLENBOUhMO0FBK0hILENBN0lPLENBNklOMkIsRUFBRSxDQUFDMEQsU0E3SUcsQ0FBUjs7QUE4SUFuRixDQUFDLFdBQUQsR0FBWXdDLENBQVoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xudmFyIGEsIGkgPSB0aGlzICYmIHRoaXMuX19leHRlbmRzIHx8IChhID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIChhID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgX19wcm90b19fOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnN0YW5jZW9mIEFycmF5ICYmXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICB0Ll9fcHJvdG9fXyA9IGVcbiAgICAgICAgICAgICAgICB9IHx8XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBvIGluIGUpIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCBvKSAmJiAodFtvXSA9IGVbb10pXG4gICAgICAgICAgICAgICAgfSkodCwgZSlcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gbygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSh0LCBlKSxcbiAgICAgICAgICAgICAgICB0LnByb3RvdHlwZSA9IG51bGwgPT09IGUgPyBPYmplY3QuY3JlYXRlKGUpIDogKG8ucHJvdG90eXBlID0gZS5wcm90b3R5cGUsIG5ldyBvKVxuICAgICAgICB9KSxcbiAgICByID0gdGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUgfHxcbiAgICBmdW5jdGlvbih0LCBlLCBvLCBhKSB7XG4gICAgICAgIHZhciBpLCByID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIG4gPSByIDwgMyA/IGUgOiBudWxsID09PSBhID8gYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgbykgOiBhO1xuICAgICAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgUmVmbGVjdCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpIG4gPSBSZWZsZWN0LmRlY29yYXRlKHQsIGUsIG8sIGEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBmb3IgKHZhciBzID0gdC5sZW5ndGggLSAxOyBzID49IDA7IHMtLSkoaSA9IHRbc10pICYmIChuID0gKHIgPCAzID8gaShuKSA6IHIgPiAzID8gaShlLCBvLCBuKSA6IGkoZSwgbykpIHx8IG4pO1xuICAgICAgICByZXR1cm4gciA+IDMgJiYgbiAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgbywgbiksXG4gICAgICAgICAgICBuXG4gICAgfTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSk7XG52YXIgbiwgcyA9IGNjLl9kZWNvcmF0b3IsXG4gICAgYyA9IHMuY2NjbGFzcyxcbiAgICBsID0gcy5wcm9wZXJ0eSxcbiAgICB1ID0gcy5kaXNhbGxvd011bHRpcGxlLFxuICAgIHAgPSBzLm1lbnUsXG4gICAgZyA9IHMuZXhlY3V0aW9uT3JkZXI7XG4oZnVuY3Rpb24odCkge1xuICAgIHRbdC5OT05FID0gMF0gPSBcIk5PTkVcIixcbiAgICAgICAgdFt0LlRPR0dMRSA9IDFdID0gXCJUT0dHTEVcIixcbiAgICAgICAgdFt0LlNXSVRDSCA9IDJdID0gXCJTV0lUQ0hcIlxufSkobiB8fCAobiA9IHt9KSk7XG52YXIgZCA9IGZ1bmN0aW9uKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIHJldHVybiBlLmljb24gPSBudWxsLFxuICAgICAgICAgICAgZS50aXRsZSA9IG51bGwsXG4gICAgICAgICAgICBlLnNlbGVjdGVkTW9kZSA9IG4uTk9ORSxcbiAgICAgICAgICAgIGUuc2VsZWN0ZWRGbGFnID0gbnVsbCxcbiAgICAgICAgICAgIGUuc2VsZWN0ZWRTcHJpdGVGcmFtZSA9IG51bGwsXG4gICAgICAgICAgICBlLl91bnNlbGVjdGVkU3ByaXRlRnJhbWUgPSBudWxsLFxuICAgICAgICAgICAgZS5hZGFwdGl2ZVNpemUgPSAhMSxcbiAgICAgICAgICAgIGUuX3NlbGVjdGVkID0gITEsXG4gICAgICAgICAgICBlLl9ldmVudFJlZyA9ICExLFxuICAgICAgICAgICAgZVxuICAgIH1cbiAgICByZXR1cm4gaShlLCB0KSxcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLCBcInNlbGVjdGVkXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkID0gdCwgdGhpcy5zZWxlY3RlZEZsYWcpIHN3aXRjaCAodGhpcy5zZWxlY3RlZE1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBuLlRPR0dMRTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnLmFjdGl2ZSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBuLlNXSVRDSDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5zZWxlY3RlZEZsYWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlICYmIChlLnNwcml0ZUZyYW1lID0gdCA/IHRoaXMuc2VsZWN0ZWRTcHJpdGVGcmFtZSA6IHRoaXMuX3Vuc2VsZWN0ZWRTcHJpdGVGcmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSxcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLCBcImJ0bkNvbVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9idG5Db20gfHwgKHRoaXMuX2J0bkNvbSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0bkNvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSxcbiAgICAgICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vZGUgPT0gbi5TV0lUQ0gpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuc2VsZWN0ZWRGbGFnLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Vuc2VsZWN0ZWRTcHJpdGVGcmFtZSA9IHQuc3ByaXRlRnJhbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZS5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5fb25TaXplQ2hhbmdlLCB0aGlzKVxuICAgICAgICB9LFxuICAgICAgICBlLnByb3RvdHlwZS5fcmVnaXN0ZXJFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRSZWcgfHwgKHRoaXMuYnRuQ29tICYmIHRoaXMubGlzdC5zZWxlY3RlZE1vZGUgPiAwICYmIHRoaXMuYnRuQ29tLmNsaWNrRXZlbnRzLnVuc2hpZnQodGhpcy5jcmVhdGVFdnQodGhpcywgXCJvbkNsaWNrVGhpc1wiKSksIHRoaXMuYWRhcHRpdmVTaXplICYmIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMuX29uU2l6ZUNoYW5nZSwgdGhpcyksIHRoaXMuX2V2ZW50UmVnID0gITApXG4gICAgICAgIH0sXG4gICAgICAgIGUucHJvdG90eXBlLl9vblNpemVDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdC5fb25JdGVtQWRhcHRpdmUodGhpcy5ub2RlKVxuICAgICAgICB9LFxuICAgICAgICBlLnByb3RvdHlwZS5jcmVhdGVFdnQgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBvICYmIChvID0gbnVsbCksIHQuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHQuY29tTmFtZSA9IHQuY29tTmFtZSB8fCB0Lm5hbWUubWF0Y2goL1xcPCguKj8pXFw+L2cpLnBvcCgpLnJlcGxhY2UoL1xcPHw+L2csIFwiXCIpO1xuICAgICAgICAgICAgICAgIHZhciBhID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEudGFyZ2V0ID0gbyB8fCB0Lm5vZGUsXG4gICAgICAgICAgICAgICAgICAgIGEuY29tcG9uZW50ID0gdC5jb21OYW1lLFxuICAgICAgICAgICAgICAgICAgICBhLmhhbmRsZXIgPSBlLFxuICAgICAgICAgICAgICAgICAgICBhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGUucHJvdG90eXBlLnNob3dBbmkgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgICAgICB2YXIgYSwgaSA9IHRoaXM7XG4gICAgICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGEgPSBjYy50d2VlbihpLm5vZGUpLnRvKC4yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogLjdcbiAgICAgICAgICAgICAgICAgICAgfSkuYnkoLjMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDIgKiBpLm5vZGUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGEgPSBjYy50d2VlbihpLm5vZGUpLnRvKC4yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogLjdcbiAgICAgICAgICAgICAgICAgICAgfSkuYnkoLjMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDIgKiBpLm5vZGUud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgYSA9IGNjLnR3ZWVuKGkubm9kZSkudG8oLjIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAuN1xuICAgICAgICAgICAgICAgICAgICB9KS5ieSguMywge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogLTIgKiBpLm5vZGUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGEgPSBjYy50d2VlbihpLm5vZGUpLnRvKC4yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogLjdcbiAgICAgICAgICAgICAgICAgICAgfSkuYnkoLjMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IC0yICogaS5ub2RlLndpZHRoXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBhID0gY2MudHdlZW4oaS5ub2RlKS50byguMywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IC4xXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfShlIHx8IG8pICYmIGEuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkubGlzdC5fZGVsU2luZ2xlSXRlbShpLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IGkubGlzdC5kaXNwbGF5RGF0YS5sZW5ndGggLSAxOyB0ID49IDA7IHQtLSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaS5saXN0LmRpc3BsYXlEYXRhW3RdLmlkID09IGkubGlzdElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkubGlzdC5kaXNwbGF5RGF0YS5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUoKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGEuc3RhcnQoKVxuICAgICAgICB9LFxuICAgICAgICBlLnByb3RvdHlwZS5vbkNsaWNrVGhpcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5saXN0LnNlbGVjdGVkSWQgPSB0aGlzLmxpc3RJZFxuICAgICAgICB9LFxuICAgICAgICByKFtsKHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9KV0sIGUucHJvdG90eXBlLCBcImljb25cIiwgdm9pZCAwKSxcbiAgICAgICAgcihbbCh7XG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0pXSwgZS5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKSxcbiAgICAgICAgcihbbCh7XG4gICAgICAgICAgICB0eXBlOiBjYy5FbnVtKG4pXG4gICAgICAgIH0pXSwgZS5wcm90b3R5cGUsIFwic2VsZWN0ZWRNb2RlXCIsIHZvaWQgMCksXG4gICAgICAgIHIoW2woe1xuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA+IG4uTk9ORVxuICAgICAgICAgICAgfVxuICAgICAgICB9KV0sIGUucHJvdG90eXBlLCBcInNlbGVjdGVkRmxhZ1wiLCB2b2lkIDApLFxuICAgICAgICByKFtsKHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlID09IG4uU1dJVENIXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXSwgZS5wcm90b3R5cGUsIFwic2VsZWN0ZWRTcHJpdGVGcmFtZVwiLCB2b2lkIDApLFxuICAgICAgICByKFtsKHtcblxuICAgICAgICB9KV0sIGUucHJvdG90eXBlLCBcImFkYXB0aXZlU2l6ZVwiLCB2b2lkIDApLFxuICAgICAgICByKFtjLCB1KCksIHAoXCLoh6rlrprkuYnnu4Tku7YvTGlzdCBJdGVtXCIpLCBnKC01MDAxKV0sIGUpXG59KGNjLkNvbXBvbmVudCk7XG5vLmRlZmF1bHQgPSBkIl19