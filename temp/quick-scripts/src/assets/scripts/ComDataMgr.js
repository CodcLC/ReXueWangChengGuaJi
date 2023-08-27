"use strict";
cc._RF.push(module, 'ca6f5Xwu71BZr9PwBi/3WFU', 'ComDataMgr');
// scripts/ComDataMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ComDataMgr = o.CommonParamType = void 0;
var a = t("ResourceMgr");

(function (t) {
  t[t.defTickNum = 1] = "defTickNum", t[t.freeLottyNum = 2] = "freeLottyNum", t[t.colloctionTime = 3] = "colloctionTime", t[t.colloctionCanNext = 4] = "colloctionCanNext", t[t.colloctionRepet = 5] = "colloctionRepet";
})(o.CommonParamType || (o.CommonParamType = {}));

var i = function () {
  function t() {}

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.preload = function (t) {
    var e = this;
    a.ResourceMgr.getInstance().loadRes("comconfig", "GameJsonCfg", cc.JsonAsset, function (o) {
      e.data = o.json, o.decRef(), a.ResourceMgr.getInstance().releaseBundle("comconfig"), t && t();
    });
  }, t.prototype.orderCfgs = function () {
    this.data.SignCfg.sort(function (t, e) {
      return t.id - e.id;
    });
  }, t.prototype.getAllSignCfg = function () {
    return this.data.SignCfg;
  }, t.prototype.getSignById = function (t) {
    return this.data.SignCfg[t - 1];
  }, t;
}();

o.ComDataMgr = i;

cc._RF.pop();