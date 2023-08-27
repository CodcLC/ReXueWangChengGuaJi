"use strict";
cc._RF.push(module, '2f2f93g/yxDJIIYN0TRLrDi', 'NodeSkillBook');
// scripts/NodeSkillBook.js

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
    return e.NodeGrade = null, e.LabCount = null, e.skillBookId = 1, e;
  }

  return i(e, t), e.prototype.onLoad = function () {}, e.prototype.start = function () {}, e.prototype.registerEvent = function () {
    n.EventMgr.getInstance().on(l.EventName.RefreshSkillBookShow, this, this.refreshSkillBookShow);
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.node.on(cc.Node.EventType.TOUCH_END, function () {
      var e = c.Utils.posTransform(t.node.parent, t.node.getPosition(), s.UIMgr.getInstance().getUIRoot(l.UIID.UIGame));
      s.UIMgr.getInstance().openUI(l.UIID.UISkillBookInfo, -1, t.skillBookId, e);
    });
  }, e.prototype.initData = function (t) {
    this.skillBookId = t, this.registerEvent(), this.registerBtnEvent();
  }, e.prototype.refreshSkillBookShow = function (t) {
    this.skillBookId === t && this.refreshStarNum(t);
  }, e.prototype.refreshStarNum = function (t) {
    var e = u["default"].getInstance().getStarNumForSkillBookId(t);
    3 != e[0] ? this.LabCount.string = "（" + e[1] + "/" + e[2] + "）" : this.LabCount.node.active = !1;

    for (var o = 0; o < this.NodeGrade.children.length; o++) {
      var a = this.NodeGrade.getChildByName("SpStarBg" + (o + 1));
      e[0] >= o + 1 ? a.getChildByName("SpStar").active = !0 : a.getChildByName("SpStar").active = !1;
    }
  }, e.prototype.onDestroy = function () {
    n.EventMgr.getInstance().off(l.EventName.RefreshSkillBookShow, this, this.refreshSkillBookShow);
  }, r([d(cc.Node)], e.prototype, "NodeGrade", void 0), r([d(cc.Label)], e.prototype, "LabCount", void 0), r([g], e);
}(cc.Component);

o["default"] = h;

cc._RF.pop();