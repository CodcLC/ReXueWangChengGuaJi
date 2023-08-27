"use strict";
cc._RF.push(module, '90466l0F3VEWIXC8W/h3RV2', 'ShareData');
// scripts/ShareData.js

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
}), o.ShareData = void 0;

var r = t("BaseData"),
    n = t("LogMgr"),
    s = t("SdkMgr"),
    c = t("TimeUtils"),
    l = t("UIUtils"),
    u = t("Config"),
    p = function p() {
  this.path = "", this.dayShareNum = 0, this.daylastShareTime = -1;
},
    g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.gameKey = u.GameConfig.AppCacheName + "shareData", e.timeTotalStop = 15, e.needRecordVideo = !0, e.recordTime = 0, e.canShare = !1, e.isStart = !1, e.isPause = !1, e.isStop = !1, e;
  }

  return i(e, t), e.prototype.createData = function () {
    return this.data = new p(), this.data;
  }, e.prototype.initData = function (t) {
    t || -1 != this.data.daylastShareTime && (c.TimeUtils.compareIsToday(this.data.daylastShareTime) || (this.data.daylastShareTime = -1, this.data.dayShareNum = 0, this.saveData()));
  }, e.prototype.startRecord = function () {
    this.needRecordVideo && (n.LogMgr.getInstance().debug("开始录屏"), this.isStart = !0, this.isPause = !1, s.SdkMgr.getInstance().recordScreen(), this.needRecordVideo = !1, this.canShare = !1, l.UIUtils.schedule(this.secondUpdate, this, 1), this.data.path = "", this.saveData());
  }, e.prototype.playRecord = function () {
    this.isStart ? this.isPause ? this.restartRecord() : this.pauseRecord() : this.startRecord();
  }, e.prototype.pauseRecord = function () {
    this.isStart && (s.SdkMgr.getInstance().pauseRecord(), this.isPause = !0, n.LogMgr.getInstance().debug("暂停录屏"));
  }, e.prototype.restartRecord = function () {
    this.isPause && (this.isPause = !1, s.SdkMgr.getInstance().restartRecord(), n.LogMgr.getInstance().debug("重新录屏"));
  }, e.prototype.stopRecord = function (t, e) {
    var o = this;
    this.recordTime <= 0 || (n.LogMgr.getInstance().debug("停止录屏"), l.UIUtils.unSchedule(this.secondUpdate, this), this.isStart = !1, this.isPause = !1, s.SdkMgr.getInstance().stopRecord(t, function (t) {
      o.data.path = t, o.recordTime >= 15 && (o.canShare = !0), o.isStop = !0, o.recordTime = 0, o.saveData(), e && e();
    }));
  }, e.prototype.getSharePath = function () {
    return this.data.path;
  }, e.prototype.getCanShare = function () {
    return this.recordTime >= 15 || this.canShare;
  }, e.prototype.getRecordTime = function () {
    return this.recordTime;
  }, e.prototype.toShare = function (t, e) {
    var o = this;
    s.SdkMgr.getInstance().share(this.data.path, function () {
      o.data.path = "", t && o.data.dayShareNum++, o.needRecordVideo = !0, o.canShare = !1, o.isStop = !1, o.clearData(), o.saveData(), e && e();
    });
  }, e.prototype.getTodayCanShare = function () {
    return !0;
  }, e.prototype.secondUpdate = function () {
    this.isPause || (this.recordTime++, this.recordTime >= 290 && this.stopRecord(!1));
  }, e.prototype.checkStop = function (t) {
    return this.isStop ? (t && t(), !0) : (this.recordTime >= this.timeTotalStop || this.recordTime >= 290) && (this.stopRecord(!1, t), !0);
  }, e.prototype.clearData = function () {
    this.isStop = !1, this.isStart = !1, this.needRecordVideo = !0, this.data.path = "", this.recordTime = 0, this.saveData();
  }, e;
}(r.BaseData);

o.ShareData = g;

cc._RF.pop();