
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TimeMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVGltZU1nci5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJUaW1lTWdyIiwiYSIsImkiLCJyIiwibiIsInMiLCJjIiwibCIsInUiLCJwIiwiaXNPcGVuVGltZXJfcG93ZXIiLCJ0aW1lX3Bvd2VyIiwiaXNPcGVuVGltZXJfb25saW5lIiwidGltZV9vbmxpbmUiLCJpc09wZW5UaW1lcl9wZXQiLCJ0aW1lX3BldCIsInRpbWVfT25saW5lTWFpbiIsInRpbWVfTXlzdGljYWxTaG9wIiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsInByb3RvdHlwZSIsImluaXREYXRhIiwiTnVtYmVyIiwiRGF0YU1nciIsImdldFBhcmFtc0NmZ0ZvclNpbmdsZSIsIkVudW1QYXJhbXMiLCJBZGRQb3dlclRpbWUiLCJjYWxsYmFja1RpbWVyX3Bvd2VyIiwiRXZlbnRNZ3IiLCJlbWl0IiwiRXZlbnROYW1lIiwiUmVmcmVzaFBvd2VyVGltZSIsIlBsYXllck1nciIsImdlVXNlckRhdGEiLCJyZWZyZXNoTGFzdE9mZmxpbmVUaW1lIiwiYWRkUG93ZXJOdW1Gb3JMaW1pdCIsImNsb3NlVGltZXJfcG93ZXIiLCJvcGVuVGltZXJfcG93ZXIiLCJzY2hlZHVsZSIsInVuc2NoZWR1bGUiLCJyZXNldFRpbWVyRGF0YV9wb3dlciIsImluaXRUaW1lX29ubGluZSIsImNhbGxiYWNrVGltZXJfb25saW5lIiwiUmVmcmVzaE9ubGluZVRpbWUiLCJzZXRPbkhvb2tUaW1lIiwiVGltZVV0aWxzIiwidGltZUV4Y2hhbmdlIiwiY2xvc2VUaW1lcl9vbmxpbmUiLCJvcGVuVGltZXJfb25saW5lIiwicmVzZXRUaW1lckRhdGFfb25saW5lIiwiY2FsbGJhY2tUaW1lcl9wZXQiLCJSZWZyZXNoUGV0Vmlld1RpbWUiLCJjbG9zZVRpbWVyX3BldCIsIm9wZW5UaW1lcl9wZXQiLCJjYWxsYmFja1RpbWVyX09ubGluZU1haW4iLCJnZXRUcmFja0RhdGEiLCJ5b3VtZW5nVHJhY2siLCJUcmFja0lkIiwidGltZV8xIiwidGltZV8zIiwidGltZV81IiwidGltZV83IiwidGltZV8xMCIsInRpbWVfMTIiLCJ0aW1lXzE1IiwidGltZV8yMCIsIm9wZW5UaW1lcl9PbmxpbmVNYWluIiwiY2xvc2VUaW1lcl9PbmxpbmVNYWluIiwicmVzZXRUaW1lckRhdGFfT25saW5lTWFpbiIsImluaXRNeXN0aWNhbFNob3AiLCJnZXRNeXN0aWNhbFNob3BEYXRhIiwiZ2V0TXlzdGljYWxTaG9wVGltZSIsImNhbGxiYWNrVGltZXJfTXlzdGljYWxTaG9wIiwiUmVmcmVzaE15c3RpY2FsU2hvcFRpbWUiLCJyZWZyZXNoTXlzdGljYWxTaG9wRGF0YSIsInNldE15c3RpY2FsU2hvcFRpbWUiLCJyZXNldFRpbWVyRGF0YV9NeXN0aWNhbFNob3AiLCJvcGVuVGltZXJfTXlzdGljYWxTaG9wIiwiY2xvc2VUaW1lcl9NeXN0aWNhbFNob3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNJLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDLEdBR0FKLENBQUMsQ0FBQ0ssT0FBRixHQUFZLEtBQUssQ0FIakI7O0FBSUEsSUFBSUMsQ0FBQyxHQUFHVixDQUFDLENBQUMsVUFBRCxDQUFUO0FBQUEsSUFDQVcsQ0FBQyxHQUFHWCxDQUFDLENBQUMsV0FBRCxDQURMO0FBQUEsSUFFQVksQ0FBQyxHQUFHWixDQUFDLENBQUMsTUFBRCxDQUZMO0FBQUEsSUFHQWEsQ0FBQyxHQUFHYixDQUFDLENBQUMsUUFBRCxDQUhMO0FBQUEsSUFJQWMsQ0FBQyxHQUFHZCxD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aEdHLEVBUko7O0FBeUdBSSxDQUFDLENBQUNLLE9BQUYsR0FBWVMsQ0FBWiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHQgPSByZXF1aXJlO1xudmFyIGUgPSBtb2R1bGU7XG52YXIgbyA9IGV4cG9ydHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogITBcbn0pLFxuby5UaW1lTWdyID0gdm9pZCAwO1xudmFyIGEgPSB0KFwiRXZlbnRNZ3JcIiksXG5pID0gdChcIlRpbWVVdGlsc1wiKSxcbnIgPSB0KFwiTWFpblwiKSxcbm4gPSB0KFwiQ29uZmlnXCIpLFxucyA9IHQoXCJUcmFja0RhdGFFdmVudFwiKSxcbmMgPSB0KFwiRGF0YU1nclwiKSxcbmwgPSB0KFwiR2FtZU1nclwiKSxcbnUgPSB0KFwiUGxheWVyTWdyXCIpLFxucCA9IGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuVGltZXJfcG93ZXIgPSAhMSxcbiAgICAgICAgdGhpcy50aW1lX3Bvd2VyID0gNjAsXG4gICAgICAgIHRoaXMuaXNPcGVuVGltZXJfb25saW5lID0gITEsXG4gICAgICAgIHRoaXMudGltZV9vbmxpbmUgPSAwLFxuICAgICAgICB0aGlzLmlzT3BlblRpbWVyX3BldCA9ICExLFxuICAgICAgICB0aGlzLnRpbWVfcGV0ID0gMCxcbiAgICAgICAgdGhpcy50aW1lX09ubGluZU1haW4gPSAwLFxuICAgICAgICB0aGlzLnRpbWVfTXlzdGljYWxTaG9wID0gODY0MDBcbiAgICB9XG4gICAgcmV0dXJuIHQuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdGhpcy5pbnN0YW5jZSAmJiAodGhpcy5pbnN0YW5jZSA9IG5ldyB0KSxcbiAgICAgICAgdGhpcy5pbnN0YW5jZVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuaW5pdERhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50aW1lX3Bvd2VyID0gTnVtYmVyKGMuRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFBhcmFtc0NmZ0ZvclNpbmdsZShuLkVudW1QYXJhbXMuQWRkUG93ZXJUaW1lKS52YWx1ZSlcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmNhbGxiYWNrVGltZXJfcG93ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50aW1lX3Bvd2VyLS0sXG4gICAgICAgIGEuRXZlbnRNZ3IuZ2V0SW5zdGFuY2UoKS5lbWl0KG4uRXZlbnROYW1lLlJlZnJlc2hQb3dlclRpbWUsIHRoaXMudGltZV9wb3dlciksXG4gICAgICAgIHRoaXMudGltZV9wb3dlciA8PSAwICYmICh1LlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdlVXNlckRhdGEoKS5yZWZyZXNoTGFzdE9mZmxpbmVUaW1lKCksIHUuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2VVc2VyRGF0YSgpLmFkZFBvd2VyTnVtRm9yTGltaXQoMSkgJiYgdGhpcy5jbG9zZVRpbWVyX3Bvd2VyKCksIHRoaXMudGltZV9wb3dlciA9IE51bWJlcihjLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRQYXJhbXNDZmdGb3JTaW5nbGUobi5FbnVtUGFyYW1zLkFkZFBvd2VyVGltZSkudmFsdWUpKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUub3BlblRpbWVyX3Bvd2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuVGltZXJfcG93ZXIgfHwgKHIuZGVmYXVsdC5pbnN0YW5jZS5zY2hlZHVsZShyLmRlZmF1bHQuaW5zdGFuY2UuY2FsbGJhY2tUaW1lcl9wb3dlciwgMSksIHRoaXMuaXNPcGVuVGltZXJfcG93ZXIgPSAhMClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmNsb3NlVGltZXJfcG93ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc09wZW5UaW1lcl9wb3dlciAmJiAoci5kZWZhdWx0Lmluc3RhbmNlLnVuc2NoZWR1bGUoci5kZWZhdWx0Lmluc3RhbmNlLmNhbGxiYWNrVGltZXJfcG93ZXIpLCB0aGlzLmlzT3BlblRpbWVyX3Bvd2VyID0gITEpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5yZXNldFRpbWVyRGF0YV9wb3dlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRpbWVfcG93ZXIgPSAwXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5pbml0VGltZV9vbmxpbmUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMudGltZV9vbmxpbmUgPSB0XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5jYWxsYmFja1RpbWVyX29ubGluZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRpbWVfb25saW5lKyssXG4gICAgICAgIGEuRXZlbnRNZ3IuZ2V0SW5zdGFuY2UoKS5lbWl0KG4uRXZlbnROYW1lLlJlZnJlc2hPbmxpbmVUaW1lLCB0aGlzLnRpbWVfb25saW5lKSxcbiAgICAgICAgdGhpcy50aW1lX29ubGluZSAlIDEwID09IDAgJiYgKHUuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2VVc2VyRGF0YSgpLnNldE9uSG9va1RpbWUodGhpcy50aW1lX29ubGluZSksIHUuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2VVc2VyRGF0YSgpLnJlZnJlc2hMYXN0T2ZmbGluZVRpbWUoKSwgaS5UaW1lVXRpbHMudGltZUV4Y2hhbmdlKDIsIHRoaXMudGltZV9vbmxpbmUpID49IDYgJiYgdGhpcy5jbG9zZVRpbWVyX29ubGluZSgpKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUub3BlblRpbWVyX29ubGluZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmlzT3BlblRpbWVyX29ubGluZSB8fCAoci5kZWZhdWx0Lmluc3RhbmNlLnNjaGVkdWxlKHIuZGVmYXVsdC5pbnN0YW5jZS5jYWxsYmFja1RpbWVyX29ubGluZSwgMSksIHRoaXMuaXNPcGVuVGltZXJfb25saW5lID0gITApXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5jbG9zZVRpbWVyX29ubGluZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByLmRlZmF1bHQuaW5zdGFuY2UudW5zY2hlZHVsZShyLmRlZmF1bHQuaW5zdGFuY2UuY2FsbGJhY2tUaW1lcl9vbmxpbmUpLFxuICAgICAgICB0aGlzLmlzT3BlblRpbWVyX29ubGluZSA9ICExXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5yZXNldFRpbWVyRGF0YV9vbmxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50aW1lX29ubGluZSA9IDBcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmNhbGxiYWNrVGltZXJfcGV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudGltZV9wZXQrKyxcbiAgICAgICAgYS5FdmVudE1nci5nZXRJbnN0YW5jZSgpLmVtaXQobi5FdmVudE5hbWUuUmVmcmVzaFBldFZpZXdUaW1lLCB0aGlzLnRpbWVfcGV0KSxcbiAgICAgICAgdGhpcy50aW1lX3BldCA+PSAzMCAmJiAodGhpcy5jbG9zZVRpbWVyX3BldCgpLCB0aGlzLnRpbWVfcGV0ID0gMClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLm9wZW5UaW1lcl9wZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc09wZW5UaW1lcl9wZXQgfHwgKHIuZGVmYXVsdC5pbnN0YW5jZS5zY2hlZHVsZShyLmRlZmF1bHQuaW5zdGFuY2UuY2FsbGJhY2tUaW1lcl9wZXQsIDEpLCB0aGlzLmlzT3BlblRpbWVyX3BldCA9ICEwKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuY2xvc2VUaW1lcl9wZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgci5kZWZhdWx0Lmluc3RhbmNlLnVuc2NoZWR1bGUoci5kZWZhdWx0Lmluc3RhbmNlLmNhbGxiYWNrVGltZXJfcGV0KSxcbiAgICAgICAgdGhpcy5pc09wZW5UaW1lcl9wZXQgPSAhMSxcbiAgICAgICAgdGhpcy50aW1lX3BldCA9IDBcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmNhbGxiYWNrVGltZXJfT25saW5lTWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRpbWVfT25saW5lTWFpbisrLFxuICAgICAgICB0aGlzLnRpbWVfT25saW5lTWFpbiA+PSA2MCAmJiB0aGlzLnRpbWVfT25saW5lTWFpbiA8IDE4MCA/IHUuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKHMuVHJhY2tJZC50aW1lXzEpIDogdGhpcy50aW1lX09ubGluZU1haW4gPj0gMTgwICYmIHRoaXMudGltZV9PbmxpbmVNYWluIDwgMzAwID8gdS5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2socy5UcmFja0lkLnRpbWVfMykgOiB0aGlzLnRpbWVfT25saW5lTWFpbiA+PSAzMDAgJiYgdGhpcy50aW1lX09ubGluZU1haW4gPCA0MjAgPyB1LlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFjayhzLlRyYWNrSWQudGltZV81KSA6IHRoaXMudGltZV9PbmxpbmVNYWluID49IDQyMCAmJiB0aGlzLnRpbWVfT25saW5lTWFpbiA8IDYwMCA/IHUuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKHMuVHJhY2tJZC50aW1lXzcpIDogdGhpcy50aW1lX09ubGluZU1haW4gPj0gNjAwICYmIHRoaXMudGltZV9PbmxpbmVNYWluIDwgNzIwID8gdS5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2socy5UcmFja0lkLnRpbWVfMTApIDogdGhpcy50aW1lX09ubGluZU1haW4gPj0gNzIwICYmIHRoaXMudGltZV9PbmxpbmVNYWluIDwgOTAwID8gdS5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2socy5UcmFja0lkLnRpbWVfMTIpIDogdGhpcy50aW1lX09ubGluZU1haW4gPj0gOTAwICYmIHRoaXMudGltZV9PbmxpbmVNYWluIDwgMTIwMCA/IHUuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0VHJhY2tEYXRhKCkueW91bWVuZ1RyYWNrKHMuVHJhY2tJZC50aW1lXzE1KSA6IHRoaXMudGltZV9PbmxpbmVNYWluID49IDEyMDAgJiYgdS5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2socy5UcmFja0lkLnRpbWVfMjApLFxuICAgICAgICB0aGlzLnRpbWVfT25saW5lTWFpblxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUub3BlblRpbWVyX09ubGluZU1haW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgci5kZWZhdWx0Lmluc3RhbmNlLnNjaGVkdWxlKHIuZGVmYXVsdC5pbnN0YW5jZS5jYWxsYmFja1RpbWVyX09ubGluZU1haW4sIDEpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5jbG9zZVRpbWVyX09ubGluZU1haW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgci5kZWZhdWx0Lmluc3RhbmNlLnVuc2NoZWR1bGUoci5kZWZhdWx0Lmluc3RhbmNlLmNhbGxiYWNrVGltZXJfT25saW5lTWFpbilcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnJlc2V0VGltZXJEYXRhX09ubGluZU1haW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50aW1lX09ubGluZU1haW4gPSAwXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5pbml0TXlzdGljYWxTaG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudGltZV9NeXN0aWNhbFNob3AgPSB1LlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE15c3RpY2FsU2hvcERhdGEoKS5nZXRNeXN0aWNhbFNob3BUaW1lKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmNhbGxiYWNrVGltZXJfTXlzdGljYWxTaG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudGltZV9NeXN0aWNhbFNob3AtLSxcbiAgICAgICAgYS5FdmVudE1nci5nZXRJbnN0YW5jZSgpLmVtaXQobi5FdmVudE5hbWUuUmVmcmVzaE15c3RpY2FsU2hvcFRpbWUsIHRoaXMudGltZV9NeXN0aWNhbFNob3ApLFxuICAgICAgICB0aGlzLnRpbWVfTXlzdGljYWxTaG9wIDw9IDAgJiYgKGwuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLnJlZnJlc2hNeXN0aWNhbFNob3BEYXRhKCksIHUuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TXlzdGljYWxTaG9wRGF0YSgpLnNldE15c3RpY2FsU2hvcFRpbWUoODY0MDApLCB0aGlzLnJlc2V0VGltZXJEYXRhX015c3RpY2FsU2hvcCgpKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUub3BlblRpbWVyX015c3RpY2FsU2hvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmluaXRNeXN0aWNhbFNob3AoKSxcbiAgICAgICAgci5kZWZhdWx0Lmluc3RhbmNlLnNjaGVkdWxlKHIuZGVmYXVsdC5pbnN0YW5jZS5jYWxsYmFja1RpbWVyX015c3RpY2FsU2hvcCwgMSlcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmNsb3NlVGltZXJfTXlzdGljYWxTaG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHIuZGVmYXVsdC5pbnN0YW5jZS51bnNjaGVkdWxlKHIuZGVmYXVsdC5pbnN0YW5jZS5jYWxsYmFja1RpbWVyX015c3RpY2FsU2hvcClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnJlc2V0VGltZXJEYXRhX015c3RpY2FsU2hvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRpbWVfTXlzdGljYWxTaG9wID0gODY0MDBcbiAgICB9LFxuICAgIHRcbn0gKCk7XG5vLlRpbWVNZ3IgPSBwIl19