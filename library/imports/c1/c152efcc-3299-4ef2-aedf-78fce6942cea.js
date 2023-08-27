"use strict";
cc._RF.push(module, 'c152e/MMplO8q7fePzmlCzq', 'NodeFetter');
// scripts/NodeFetter.js

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

var n = t("EventMgr"),
    s = t("UIMgr"),
    c = t("Utils"),
    l = t("Config"),
    u = t("GameDataMgr"),
    p = cc._decorator,
    g = p.ccclass,
    d = p.property,
    h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.SpSelect = null, e.LabFetterNum = null, e.fetterId = 1, e.fetterData = null, e;
  }

  return i(e, t), e.prototype.onLoad = function () {}, e.prototype.start = function () {}, e.prototype.registerEvent = function () {
    n.EventMgr.getInstance().on(l.EventName.RefreshFetterShow, this, this.refreshFetterShow), n.EventMgr.getInstance().on(l.EventName.RefreshLight, this, this.refreshLight);
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.node.on(cc.Node.EventType.TOUCH_END, function () {
      var e = c.Utils.posTransform(t.node.parent, t.node.getPosition(), s.UIMgr.getInstance().getUIRoot(l.UIID.UIGame));
      s.UIMgr.getInstance().openUI(l.UIID.UIFetterInfo, -1, t.fetterId, e);
    });
  }, e.prototype.initData = function (t) {
    this.fetterId = t, this.registerEvent(), this.registerBtnEvent();
  }, e.prototype.refreshFetterShow = function (t) {
    this.fetterId === t && (this.LabFetterNum.string = u["default"].getInstance().getStringForFetterId(this.fetterId));
  }, e.prototype.refreshLight = function (t) {
    this.fetterId === t && this.lightAnim();
  }, e.prototype.lightAnim = function () {
    cc.isValid(this.SpSelect) && (this.SpSelect.opacity = 0, cc.tween(this.SpSelect).to(.3, {
      opacity: 255
    }).to(.8, {
      opacity: 100
    }).to(.6, {
      opacity: 255
    }).to(.5, {
      opacity: 0
    }).start());
  }, e.prototype.onDestroy = function () {
    n.EventMgr.getInstance().off(l.EventName.RefreshFetterShow, this, this.refreshFetterShow), n.EventMgr.getInstance().off(l.EventName.RefreshLight, this, this.refreshLight);
  }, r([d(cc.Node)], e.prototype, "SpSelect", void 0), r([d(cc.RichText)], e.prototype, "LabFetterNum", void 0), r([g], e);
}(cc.Component);

o["default"] = h;

cc._RF.pop();