"use strict";
cc._RF.push(module, '44aefdWORRCY5iD5OWd/s7C', 'TimeMgr');
// scripts/TimeMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.TimeMgr = void 0;

var a = t("EventMgr"),
    i = t("TimeUtils"),
    r = t("Main"),
    n = t("Config"),
    s = t("TrackDataEvent"),
    c = t("DataMgr"),
    l = t("GameMgr"),
    u = t("PlayerMgr"),
    p = function () {
  function t() {
    this.isOpenTimer_power = !1, this.time_power = 60, this.isOpenTimer_online = !1, this.time_online = 0, this.isOpenTimer_pet = !1, this.time_pet = 0, this.time_OnlineMain = 0, this.time_MysticalShop = 86400;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.initData = function () {
    this.time_power = Number(c.DataMgr.getInstance().getParamsCfgForSingle(n.EnumParams.AddPowerTime).value);
  }, t.prototype.callbackTimer_power = function () {
    this.time_power--, a.EventMgr.getInstance().emit(n.EventName.RefreshPowerTime, this.time_power), this.time_power <= 0 && (u.PlayerMgr.getInstance().geUserData().refreshLastOfflineTime(), u.PlayerMgr.getInstance().geUserData().addPowerNumForLimit(1) && this.closeTimer_power(), this.time_power = Number(c.DataMgr.getInstance().getParamsCfgForSingle(n.EnumParams.AddPowerTime).value));
  }, t.prototype.openTimer_power = function () {
    this.isOpenTimer_power || (r["default"].instance.schedule(r["default"].instance.callbackTimer_power, 1), this.isOpenTimer_power = !0);
  }, t.prototype.closeTimer_power = function () {
    this.isOpenTimer_power && (r["default"].instance.unschedule(r["default"].instance.callbackTimer_power), this.isOpenTimer_power = !1);
  }, t.prototype.resetTimerData_power = function () {
    this.time_power = 0;
  }, t.prototype.initTime_online = function (t) {
    this.time_online = t;
  }, t.prototype.callbackTimer_online = function () {
    this.time_online++, a.EventMgr.getInstance().emit(n.EventName.RefreshOnlineTime, this.time_online), this.time_online % 10 == 0 && (u.PlayerMgr.getInstance().geUserData().setOnHookTime(this.time_online), u.PlayerMgr.getInstance().geUserData().refreshLastOfflineTime(), i.TimeUtils.timeExchange(2, this.time_online) >= 6 && this.closeTimer_online());
  }, t.prototype.openTimer_online = function () {
    this.isOpenTimer_online || (r["default"].instance.schedule(r["default"].instance.callbackTimer_online, 1), this.isOpenTimer_online = !0);
  }, t.prototype.closeTimer_online = function () {
    r["default"].instance.unschedule(r["default"].instance.callbackTimer_online), this.isOpenTimer_online = !1;
  }, t.prototype.resetTimerData_online = function () {
    this.time_online = 0;
  }, t.prototype.callbackTimer_pet = function () {
    this.time_pet++, a.EventMgr.getInstance().emit(n.EventName.RefreshPetViewTime, this.time_pet), this.time_pet >= 30 && (this.closeTimer_pet(), this.time_pet = 0);
  }, t.prototype.openTimer_pet = function () {
    this.isOpenTimer_pet || (r["default"].instance.schedule(r["default"].instance.callbackTimer_pet, 1), this.isOpenTimer_pet = !0);
  }, t.prototype.closeTimer_pet = function () {
    r["default"].instance.unschedule(r["default"].instance.callbackTimer_pet), this.isOpenTimer_pet = !1, this.time_pet = 0;
  }, t.prototype.callbackTimer_OnlineMain = function () {
    this.time_OnlineMain++, this.time_OnlineMain >= 60 && this.time_OnlineMain < 180 ? u.PlayerMgr.getInstance().getTrackData().youmengTrack(s.TrackId.time_1) : this.time_OnlineMain >= 180 && this.time_OnlineMain < 300 ? u.PlayerMgr.getInstance().getTrackData().youmengTrack(s.TrackId.time_3) : this.time_OnlineMain >= 300 && this.time_OnlineMain < 420 ? u.PlayerMgr.getInstance().getTrackData().youmengTrack(s.TrackId.time_5) : this.time_OnlineMain >= 420 && this.time_OnlineMain < 600 ? u.PlayerMgr.getInstance().getTrackData().youmengTrack(s.TrackId.time_7) : this.time_OnlineMain >= 600 && this.time_OnlineMain < 720 ? u.PlayerMgr.getInstance().getTrackData().youmengTrack(s.TrackId.time_10) : this.time_OnlineMain >= 720 && this.time_OnlineMain < 900 ? u.PlayerMgr.getInstance().getTrackData().youmengTrack(s.TrackId.time_12) : this.time_OnlineMain >= 900 && this.time_OnlineMain < 1200 ? u.PlayerMgr.getInstance().getTrackData().youmengTrack(s.TrackId.time_15) : this.time_OnlineMain >= 1200 && u.PlayerMgr.getInstance().getTrackData().youmengTrack(s.TrackId.time_20), this.time_OnlineMain;
  }, t.prototype.openTimer_OnlineMain = function () {
    r["default"].instance.schedule(r["default"].instance.callbackTimer_OnlineMain, 1);
  }, t.prototype.closeTimer_OnlineMain = function () {
    r["default"].instance.unschedule(r["default"].instance.callbackTimer_OnlineMain);
  }, t.prototype.resetTimerData_OnlineMain = function () {
    this.time_OnlineMain = 0;
  }, t.prototype.initMysticalShop = function () {
    this.time_MysticalShop = u.PlayerMgr.getInstance().getMysticalShopData().getMysticalShopTime();
  }, t.prototype.callbackTimer_MysticalShop = function () {
    this.time_MysticalShop--, a.EventMgr.getInstance().emit(n.EventName.RefreshMysticalShopTime, this.time_MysticalShop), this.time_MysticalShop <= 0 && (l["default"].getInstance().refreshMysticalShopData(), u.PlayerMgr.getInstance().getMysticalShopData().setMysticalShopTime(86400), this.resetTimerData_MysticalShop());
  }, t.prototype.openTimer_MysticalShop = function () {
    this.initMysticalShop(), r["default"].instance.schedule(r["default"].instance.callbackTimer_MysticalShop, 1);
  }, t.prototype.closeTimer_MysticalShop = function () {
    r["default"].instance.unschedule(r["default"].instance.callbackTimer_MysticalShop);
  }, t.prototype.resetTimerData_MysticalShop = function () {
    this.time_MysticalShop = 86400;
  }, t;
}();

o.TimeMgr = p;

cc._RF.pop();