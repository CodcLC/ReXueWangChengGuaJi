"use strict";
cc._RF.push(module, '072f1QDdjdI2L/rsXr5r5yE', 'ComLottyData');
// scripts/ComLottyData.js

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
});

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ComLottyData = void 0;

var r = t("BaseData"),
    n = t("EventMgr"),
    s = t("CacheUtils"),
    c = t("Utils"),
    l = t("Config"),
    u = t("CommonCfg"),
    p = t("ComDataMgr"),
    g = function g() {
  this.lottyNum = 0, this.dontMustIds = [], this.lottyTickNum = 0;
},
    d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.ecrypt = !1, e.gameKey = l.GameConfig.AppCacheName + "lotty", e.indexString = "mapIndex", e.numString = "mapNum", e;
  }

  return i(e, t), e.prototype.getMapData = function () {
    if (null == this.lottyIndexs) {
      var t = null;
      t = this.ecrypt ? s.CacheUtils.getDataDecrypt(this.gameKey + this.indexString, this.pwd) : s.CacheUtils.getData(this.gameKey + this.indexString), this.lottyIndexs = t ? c.Utils.jsonToMap(t) : new Map();
    }

    null == this.lottyIdNumMap && (t = null, t = this.ecrypt ? s.CacheUtils.getDataDecrypt(this.gameKey + this.numString, this.pwd) : s.CacheUtils.getData(this.gameKey + this.numString), this.lottyIdNumMap = t ? c.Utils.jsonToMap(t) : new Map());
  }, e.prototype.initData = function () {
    this.getMapData(), n.EventMgr.getInstance().on(u.CommonEventName.callRefreshTick, this, this.refreshTickNum);
  }, e.prototype.getLottyNum = function () {
    return this.data.lottyNum;
  }, e.prototype.addLottyNum = function () {
    this.data.lottyNum += 1, this.saveData();
  }, e.prototype.createData = function () {
    this.data = new g(), this.data.lottyNum = 0, this.data.dontMustIds = [];
    var t = p.ComDataMgr.getInstance().getCommonParam(p.CommonParamType.defTickNum);
    return this.data.lottyTickNum = t, this.data;
  }, e.prototype.getGirldIdIndex = function (t) {
    return this.lottyIndexs.has(t) ? Number(this.lottyIndexs.get(t)) : 0;
  }, e.prototype.setGirldReward = function (t, e) {
    this.lottyIndexs.set(t, e), this.saveMapData();
  }, e.prototype.addLottyIdOutNum = function (t) {
    var e = 1;
    this.lottyIdNumMap.has(t) && (e = this.lottyIdNumMap.get(t) + 1), this.lottyIdNumMap.set(t, e), this.saveNumMapData();
  }, e.prototype.getLottyIdOutNum = function (t) {
    var e = 1;
    return this.lottyIdNumMap.has(t) ? e = this.lottyIdNumMap.get(t) : this.lottyIdNumMap.set(t, e), e;
  }, e.prototype.getInDontMust = function (t) {
    for (var e = 0; e < this.data.dontMustIds.length; e++) {
      if (this.data.dontMustIds[e] == t) return !0;
    }

    return !1;
  }, e.prototype.addInDontMust = function (t) {
    this.data.dontMustIds.push(t), this.saveData();
  }, e.prototype.getLottyTickNum = function () {
    return this.data.lottyTickNum;
  }, e.prototype.refreshTickNum = function (t, e) {
    if (e) this.data.lottyTickNum += t;else {
      if (this.data.lottyTickNum < t) return !1;
      this.data.lottyTickNum -= t;
    }
    n.EventMgr.getInstance().emit(u.CommonEventName.RefreshTickNum, t, e), this.saveData();
  }, e.prototype.saveMapData = function () {
    var t = c.Utils.mapToJson(this.lottyIndexs);
    this.ecrypt ? s.CacheUtils.saveDataEncrypt(this.gameKey + this.indexString, t, this.pwd) : s.CacheUtils.saveData(this.gameKey + this.indexString, t);
  }, e.prototype.saveNumMapData = function () {
    var t = c.Utils.mapToJson(this.lottyIdNumMap);
    this.ecrypt ? s.CacheUtils.saveDataEncrypt(this.gameKey + this.numString, t, this.pwd) : s.CacheUtils.saveData(this.gameKey + this.numString, t);
  }, e;
}(r.BaseData);

o.ComLottyData = d;

cc._RF.pop();