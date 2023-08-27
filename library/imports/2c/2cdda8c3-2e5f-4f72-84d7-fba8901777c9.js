"use strict";
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