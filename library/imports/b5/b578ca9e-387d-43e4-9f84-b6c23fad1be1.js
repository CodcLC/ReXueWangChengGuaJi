"use strict";
cc._RF.push(module, 'b578cqeOH1D5J+EtsI/rRvh', 'UISetting');
// scripts/UISetting.js

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

var n = t("BasePlatform"),
    s = t("BaseUI"),
    c = t("AudioMgr"),
    l = t("PlatformManager"),
    u = t("CacheUtils"),
    p = t("Config"),
    g = cc._decorator,
    d = g.ccclass,
    h = g.property,
    f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.ToggleMusic = null, e.ToggleAudio = null, e.BtnBack = null, e.BtnTrue = null, e.privacyPolicy = null, e.LayoutBtn = null, e.curTurnView = p.UIID.UIHome, e;
  }

  return i(e, t), e.prototype.init = function (t) {
    this.curTurnView = t || p.UIID.UIHome;
  }, e.prototype.onLoad = function () {}, e.prototype.start = function () {
    this.registerBtnEvent(), this.initView(), l.PlatformManager.currentPlatform != n.Platform.ANDROID_TAP && l.PlatformManager.currentPlatform != n.Platform.ANDROID_233 || (this.privacyPolicy.active = !0, this.privacyPolicy.on(cc.Node.EventType.TOUCH_END, function () {
      cc.sys.openURL("https://game.sfplay.net/yszc/xjzqg/233.html");
    }));
  }, e.prototype.initView = function () {
    this.ToggleMusic.isChecked = u.CacheUtils.canPlayMusin(), this.ToggleAudio.isChecked = u.CacheUtils.canPlayEffect();
  }, e.prototype.callbackMusic = function () {
    u.CacheUtils.setPlayMusic(!u.CacheUtils.canPlayMusin()), console.log("CacheUtils.canPlayMusin():", u.CacheUtils.canPlayMusin()), u.CacheUtils.canPlayMusin() ? this.curTurnView == p.UIID.UIHome ? c.AudioMgr.getInstance().playMusic(p.AudioId.BGM_Main, "bg") : c.AudioMgr.getInstance().playMusic(p.AudioId.BGM_Battle, "bg") : c.AudioMgr.getInstance().stopMusic("bg");
  }, e.prototype.callbackAudio = function () {
    u.CacheUtils.setPlayEffect(!u.CacheUtils.canPlayEffect()), u.CacheUtils.canPlayMusin() || c.AudioMgr.getInstance().stopEffect();
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnBack.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView();
    }), this.BtnTrue.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView();
    });
  }, e.prototype.closeView = function () {
    this.closeUI();
  }, r([h(cc.Toggle)], e.prototype, "ToggleMusic", void 0), r([h(cc.Toggle)], e.prototype, "ToggleAudio", void 0), r([h(cc.Node)], e.prototype, "BtnBack", void 0), r([h(cc.Node)], e.prototype, "BtnTrue", void 0), r([h(cc.Node)], e.prototype, "privacyPolicy", void 0), r([h(cc.Node)], e.prototype, "LayoutBtn", void 0), r([d], e);
}(s["default"]);

o["default"] = f;

cc._RF.pop();