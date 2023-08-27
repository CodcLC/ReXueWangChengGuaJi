"use strict";
cc._RF.push(module, '5fd77fRSB1HOak8Rvk3nmDC', 'ComCollectionData');
// scripts/ComCollectionData.js

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
}), o.ComCollectionData = void 0;

var r = t("BaseData"),
    n = t("EventMgr"),
    s = t("LogMgr"),
    c = t("TimeUtils"),
    l = t("UIUtils"),
    u = t("Config"),
    p = t("CommonCfg"),
    g = t("ComDataMgr"),
    d = function d() {
  this.isGet = !1, this.finished = !1, this.adTip = !1, this.isTips = !1;
},
    h = function h() {
  this.index = 1, this.itemData = [], this.isGet = !1, this.endtime = -1, this.process = 0;
},
    f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.ecrypt = !1, e.gameKey = u.GameConfig.AppCacheName + "collection", e.showRed = !1, e;
  }

  return i(e, t), e.prototype.createData = function () {
    this.data = new h();
    var t = Number(g.ComDataMgr.getInstance().getCommonParam(g.CommonParamType.colloctionTime));
    return t > 0 && (this.data.endtime = c.TimeUtils.GetTimeBySecond() + 60 * t), this.data;
  }, e.prototype.initData = function (t) {
    if (t) {
      for (var e = g.ComDataMgr.getInstance().getCollectionCfgById(this.data.index).itemId.split(u.GameConfig.splitNum), o = 0; o < e.length; o++) {
        var a = Number(e[o]),
            i = new d();
        i.id = o, i.itemId = a;
        var r = g.ComDataMgr.getInstance().getCollectionItemById(a);
        null == r.tips ? i.adTip = !1 : i.adTip = !0, i.goodId = r.goodId, i.isGet = !1, i.num = 0, i.finished = !1, this.data.itemData.push(i);
      }

      this.saveData();
    } else this.refreData();
  }, e.prototype.getCurrentReward = function () {
    var t = g.ComDataMgr.getInstance().getCollectionCfgById(this.data.index);
    return t ? t.rewards : null;
  }, e.prototype.refreData = function () {
    if (this.checkCanRefresh() && this.data.endtime > 1) if (this.data.endtime - c.TimeUtils.GetTimeBySecond() <= 0) this.nextData();else {
      var t = this.data.endtime - c.TimeUtils.GetTimeBySecond();
      l.UIUtils.scheduleOnce(this.nextData, this, t);
    }
  }, e.prototype.getCollectionData = function (t) {
    for (var e = 0; e < this.data.itemData.length; e++) {
      var o = this.data.itemData[e];
      if (o.id == t) return o;
    }

    return null;
  }, e.prototype.getAllCollectionData = function () {
    return this.data.itemData;
  }, e.prototype.checkCanRefresh = function () {
    var t = g.ComDataMgr.getInstance();
    if (Number(t.getCommonParam(g.CommonParamType.colloctionCanNext)) <= 0) return !1;
    var e = t.getAllCollectionCfg();

    if (this.data.index == e.length) {
      if (Number(t.getCommonParam(g.CommonParamType.colloctionRepet)) <= 0) return !1;
      this.data.index = 1;
    }

    if (this.data.isGet) return !0;
    if (this.data.process == this.data.itemData.length) return !1;

    for (var o = [], a = 0; a < this.data.itemData.length; a++) {
      var i = this.data.itemData[a];
      (i.isGet || i.finished) && o.push(!0);
    }

    return o.length != this.data.itemData.length && (s.LogMgr.getInstance().debug("其他情况 可以清掉"), !0);
  }, e.prototype.nextData = function () {
    var t = g.ComDataMgr.getInstance().getAllCollectionCfg();
    this.data.index >= t.length && (this.data.index = 0);
    var e = g.ComDataMgr.getInstance().getCollectionCfgById(this.data.index + 1).itemId.split(u.GameConfig.splitNum);
    this.data.itemData.splice(0, this.data.itemData.length);

    for (var o = 0; o < e.length; o++) {
      var a = Number(e[o]),
          i = new d();
      i.id = o, i.itemId = a, i.isGet = !1, i.num = 0;
      var r = g.ComDataMgr.getInstance().getCollectionItemById(a);
      i.goodId = r.goodId, i.finished = !1, this.data.itemData.push(i);
    }

    var n = Number(g.ComDataMgr.getInstance().getCommonParam(g.CommonParamType.colloctionTime));
    this.data.endtime = n > 0 ? c.TimeUtils.GetTimeBySecond() + 60 * n : -1, this.data.process = 0, this.data.index += 1, this.data.isGet = !1, this.saveData(), this.checkShowRed();
  }, e.prototype.receiveTaskReward = function (t) {
    if (this.data.isGet = !0, this.checkCanRefresh()) {
      if (this.data.endtime > 1) if (this.data.endtime - c.TimeUtils.GetTimeBySecond() <= 0) this.nextData(), t && t(!0);else {
        var e = this.data.endtime - c.TimeUtils.GetTimeBySecond();
        l.UIUtils.unSchedule(this.nextData, this), l.UIUtils.scheduleOnce(this.nextData, this, e), t && t(!1);
      }
    } else t && t(!1);

    this.checkShowRed(), this.saveData();
  }, e.prototype.checkFinshed = function () {
    if (this.data.isGet) return !0;

    for (var t = [], e = 0; e < this.data.itemData.length; e++) {
      var o = this.data.itemData[e];
      if (o.isGet || o.finished) t.push(!0);else {
        var a = g.ComDataMgr.getInstance().getCollectionItemById(o.itemId);
        a && o.num >= a.needNum && (t.push(!0), o.finished = !0);
      }
    }

    return t.length >= this.data.itemData.length;
  }, e.prototype.checkShowRed = function () {
    for (var t = !1, e = 0; e < this.data.itemData.length; e++) {
      var o = this.data.itemData[e];
      !o.isGet && o.finished && (t = !0);
    }

    t || this.data.isGet || this.data.process != this.data.itemData.length || (t = !0), t ? this.showRed || (this.showRed = !0, n.EventMgr.getInstance().emit(p.CommonEventName.RefreshCollectionRed, !0)) : this.showRed && (this.showRed = !1, n.EventMgr.getInstance().emit(p.CommonEventName.RefreshCollectionRed, !1));
  }, e.prototype.addAdTips = function (t) {
    var e = this.getCollectionData(t);
    e.adTip && (e.isTips = !0, this.saveData());
  }, e.prototype.addData = function (t, e, o) {
    void 0 === o && (o = !0);

    for (var a = [], i = 0; i < this.data.itemData.length; i++) {
      var r = this.data.itemData[i];

      if (r.goodId == t) {
        r.num += e;
        var s = g.ComDataMgr.getInstance().getCollectionItemById(r.itemId);
        s && r.num >= s.needNum && (r.finished = !0), a.push(r.id);
      }
    }

    a.length > 0 && (this.saveData(), o && n.EventMgr.getInstance().emit(p.CommonEventName.RefreshCollection, a)), this.checkShowRed();
  }, e.prototype.getProcess = function () {
    return this.data.process;
  }, e.prototype.getEndtime = function () {
    return this.data.endtime;
  }, e.prototype.finishData = function (t) {
    var e = this.getCollectionData(t);
    e && (e.finished = !0, e.isGet = !0, this.data.process += 1, this.saveData()), this.checkShowRed();
  }, e;
}(r.BaseData);

o.ComCollectionData = f;

cc._RF.pop();