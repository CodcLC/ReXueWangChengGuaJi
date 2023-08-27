"use strict";
cc._RF.push(module, 'd6fa0r5epZCha9FIIqEM9Af', 'CommonModel');
// scripts/CommonModel.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.CommonModel = void 0;

var a = t("AudioMgr"),
    i = t("UIMgr"),
    r = t("CommonBirge"),
    n = t("CommonCfg"),
    s = t("ComDataMgr"),
    c = t("ComPlayerMgr"),
    l = function () {
  function t() {}

  return t.Instance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.initCommon = function (t) {
    i.UIMgr.getInstance().addUICnf(n.ComUICF), a.AudioMgr.getInstance().addAdConf(n.ComAudioCF), s.ComDataMgr.getInstance().preload(function () {
      c.ComPlayerMgr.getInstance().preload(function () {
        t && t();
      });
    });
  }, t.prototype.setGameBrige = function (t) {
    r.CommonBrige.Instance().setGameBrige(t);
  }, t.prototype.addReward = function (t, e, o) {
    void 0 === o && (o = !0), o && c.ComPlayerMgr.getInstance().addCollection(t, e);
  }, t;
}();

o.CommonModel = l;

cc._RF.pop();