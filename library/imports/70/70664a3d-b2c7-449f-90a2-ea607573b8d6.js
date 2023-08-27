"use strict";
cc._RF.push(module, '70664o9ssdEn5Ci6mB1c7jW', 'NodeUISkillBookNew');
// scripts/NodeUISkillBookNew.js

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
    s = t("TweenMgr"),
    c = t("UIMgr"),
    l = t("Utils"),
    u = t("Config"),
    p = t("TrackDataEvent"),
    g = t("DataMgr"),
    d = t("PlayerMgr"),
    h = cc._decorator,
    f = h.ccclass,
    m = h.property,
    y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.SpBar = null, e.SpUp = null, e.LabLv = null, e.LabBar = null, e.SpBarBg = null, e.SpSkillBook = null, e.LabSkilllName = null, e.SpFetter1 = null, e.SpFetter2 = null, e.LabFetter1 = null, e.LabFetter2 = null, e.curWindow = null, e.skillBookId = 1, e;
  }

  return i(e, t), e.prototype.onLoad = function () {}, e.prototype.start = function () {
    s.TweenMgr.getInstance().animUpLv(this.SpUp);
  }, e.prototype.registerEvent = function () {
    n.EventMgr.getInstance().on(u.EventName.RefreshUISkillBookShow, this, this.refreshSkillBookShow);
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.node.on(cc.Node.EventType.TOUCH_END, function () {
      d.PlayerMgr.getInstance().getTrackData().youmengTrack(p.TrackId.guide13);
      var e = l.Utils.posTransform(t.node.parent, t.node.getPosition(), c.UIMgr.getInstance().getUIRoot(u.UIID.UISkillBook));
      c.UIMgr.getInstance().openUI(u.UIID.UISkillBookInfo, -1, t.skillBookId, e, t.curWindow);
    });
  }, e.prototype.initData = function (t, e) {
    this.skillBookId = t, this.curWindow = e, this.registerEvent(), this.registerBtnEvent(), this.playEnterAnim();
  }, e.prototype.refreshSkillBookShow = function (t) {
    this.skillBookId === t && this.refreshSkillBookLvInfo();
  }, e.prototype.refreshSkillBookLvInfo = function () {
    var t = d.PlayerMgr.getInstance().geUserData().getSkillBookForId(this.skillBookId),
        e = g.DataMgr.getInstance().getSkillBook(this.skillBookId),
        o = g.DataMgr.getInstance().getSkillBookLevelCfg1(e.StartLevelID, t.level);
    this.SpBar.fillRange = t.iCount / o.ConsumeSkillBookNum, this.SpUp.active = t.iCount >= o.ConsumeSkillBookNum, this.LabLv.string = "Lv." + t.level, t.level >= e.MaxLevel ? this.LabBar.string = "MAX" : this.LabBar.string = t.iCount + "/" + o.ConsumeSkillBookNum;
  }, e.prototype.playEnterAnim = function () {}, e.prototype.showAnim = function (t, e) {
    void 0 === e && (e = function e() {}), cc.isValid(t) && cc.tween(t).to(.1, {
      opacity: 255
    }).call(function () {
      e && e();
    }).start();
  }, e.prototype.onDestroy = function () {
    n.EventMgr.getInstance().off(u.EventName.RefreshUISkillBookShow, this, this.refreshSkillBookShow);
  }, r([m(cc.Sprite)], e.prototype, "SpBar", void 0), r([m(cc.Node)], e.prototype, "SpUp", void 0), r([m(cc.Label)], e.prototype, "LabLv", void 0), r([m(cc.Label)], e.prototype, "LabBar", void 0), r([m(cc.Node)], e.prototype, "SpBarBg", void 0), r([m(cc.Node)], e.prototype, "SpSkillBook", void 0), r([m(cc.Node)], e.prototype, "LabSkilllName", void 0), r([m(cc.Node)], e.prototype, "SpFetter1", void 0), r([m(cc.Node)], e.prototype, "SpFetter2", void 0), r([m(cc.Node)], e.prototype, "LabFetter1", void 0), r([m(cc.Node)], e.prototype, "LabFetter2", void 0), r([f], e);
}(cc.Component);

o["default"] = y;

cc._RF.pop();