
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ComSignData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e2c3INcqdJXJe8AbOCzi36', 'ComSignData');
// scripts/ComSignData.js

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
}), o.ComSignData = void 0;

var r = t("BaseData"),
    n = t("EventMgr"),
    s = t("TimeUtils"),
    c = t("Config"),
    l = t("CommonCfg"),
    u = function u() {
  this.lastSignTime = -1, this.firstLoginTime = -1, this.firstLoginDayTime = -1;
},
    p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.ecrypt = !1, e.gameKey = c.GameConfig.AppCacheName + "sign", e.curentDay = 1, e.redshowing = !1, e.canSign = !1, e;
  }

  return i(e, t), e.prototype.createData = function () {
    return this.data = new u(), this.data.firstLoginTime = s.TimeUtils.GetTimeBySecond(), this.data.firstLoginDayTime = s.TimeUtils.dayStart(), this.data.alredyIdx = [], this.curentDay = 1, this.saveData(), this.data;
  }, e.prototype.initData = function (t) {
    if (!t) {
      var e = s.TimeUtils.overDay(this.data.firstLoginDayTime);
      e <= 0 && (e = 0), this.curentDay = e + 1;
    }
  }, e.prototype.getCurentDay = function () {
    return this.curentDay;
  }, e.prototype.getAlredySign = function () {
    return this.data.alredyIdx;
  }, e.prototype.checkIsSigned = function (t) {
    for (var e = 0; e < this.data.alredyIdx.length; e++) {
      if (t == this.data.alredyIdx[e]) return !0;
    }

    return !1;
  }, e.prototype.checkReissue = function (t) {
    return t < this.curentDay;
  }, e.prototype.checkCanSign = function (t) {
    return t == this.curentDay;
  }, e.prototype.startSign = function (t) {
    this.data.alredyIdx.push(t), this.data.lastSignTime = s.TimeUtils.GetTimeBySecond(), this.saveData(), this.checkShowRed();
  }, e.prototype.checkTodyCanSign = function () {
    if (this.data.alredyIdx.length >= 7) return !1;

    for (var t = 1; t < this.curentDay; t++) {
      if (!this.checkIsSigned(t)) return !0;
    }

    if (this.data.lastSignTime > 10 && s.TimeUtils.compareIsToday(this.data.lastSignTime)) {
      for (t = 0; t < this.data.alredyIdx.length; t++) {
        if (this.curentDay == this.data.alredyIdx[t]) return !1;
      }

      return !0;
    }

    return this.checkCanSign(this.curentDay);
  }, e.prototype.checkShowRed = function () {
    var t = this.checkTodyCanSign();
    t ? this.redshowing || (this.redshowing = !0, n.EventMgr.getInstance().emit(l.CommonEventName.RefreshSignRed, !0)) : this.redshowing && (this.redshowing = !1, n.EventMgr.getInstance().emit(l.CommonEventName.RefreshSignRed, !1)), this.canSign = t;
  }, e.prototype.getCanSigned = function () {
    return this.canSign;
  }, e;
}(r.BaseData);

o.ComSignData = p;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tU2lnbkRhdGEuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJhIiwiaSIsIl9fZXh0ZW5kcyIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJDb21TaWduRGF0YSIsInIiLCJuIiwicyIsImMiLCJsIiwidSIsImxhc3RTaWduVGltZSIsImZpcnN0TG9naW5UaW1lIiwiZmlyc3RMb2dpbkRheVRpbWUiLCJwIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJlY3J5cHQiLCJnYW1lS2V5IiwiR2FtZUNvbmZpZyIsIkFwcENhY2hlTmFtZSIsImN1cmVudERheSIsInJlZHNob3dpbmciLCJjYW5TaWduIiwiY3JlYXRlRGF0YSIsImRhdGEiLCJUaW1lVXRpbHMiLCJHZXRUaW1lQnlTZWNvbmQiLCJkYXlTdGFydCIsImFscmVkeUlkeCIsInNhdmVEYXRhIiwiaW5pdERhdGEiLCJvdmVyRGF5IiwiZ2V0Q3VyZW50RGF5IiwiZ2V0QWxyZWR5U2lnbiIsImNoZWNrSXNTaWduZWQiLCJsZW5ndGgiLCJjaGVja1JlaXNzdWUiLCJjaGVja0NhblNpZ24iLCJzdGFydFNpZ24iLCJwdXNoIiwiY2hlY2tTaG93UmVkIiwiY2hlY2tUb2R5Q2FuU2lnbiIsImNvbXBhcmVJc1RvZGF5IiwiRXZlbnRNZ3IiLCJnZXRJbnN0YW5jZSIsImVtaXQiLCJDb21tb25FdmVudE5hbWUiLCJSZWZyZXNoU2lnblJlZCIsImdldENhblNpZ25lZCIsIkJhc2VEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElB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WjtFQUNILENBdkRNLEVBd0RQckMsQ0F4REE7QUF5REgsQ0FuRUcsQ0FtRURtQixDQUFDLENBQUM2QyxRQW5FRCxDQVZKOztBQThFQTlELENBQUMsQ0FBQ2dCLFdBQUYsR0FBZ0JVLENBQWhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbnZhciBhLCBpID0gdGhpcyAmJiB0aGlzLl9fZXh0ZW5kcyB8fCAoYSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICByZXR1cm4gKGEgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwge1xuICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgfVxuICAgIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHQuX19wcm90b19fID0gZVxuICAgIH0gfHxcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gaW4gZSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIG8pICYmICh0W29dID0gZVtvXSlcbiAgICB9KSh0LCBlKVxufSxcbmZ1bmN0aW9uKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdFxuICAgIH1cbiAgICBhKHQsIGUpLFxuICAgIHQucHJvdG90eXBlID0gbnVsbCA9PT0gZSA/IE9iamVjdC5jcmVhdGUoZSkgOiAoby5wcm90b3R5cGUgPSBlLnByb3RvdHlwZSwgbmV3IG8pXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSksXG5vLkNvbVNpZ25EYXRhID0gdm9pZCAwO1xudmFyIHIgPSB0KFwiQmFzZURhdGFcIiksXG5uID0gdChcIkV2ZW50TWdyXCIpLFxucyA9IHQoXCJUaW1lVXRpbHNcIiksXG5jID0gdChcIkNvbmZpZ1wiKSxcbmwgPSB0KFwiQ29tbW9uQ2ZnXCIpLFxudSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubGFzdFNpZ25UaW1lID0gLTEsXG4gICAgdGhpcy5maXJzdExvZ2luVGltZSA9IC0xLFxuICAgIHRoaXMuZmlyc3RMb2dpbkRheVRpbWUgPSAtMVxufSxcbnAgPSBmdW5jdGlvbih0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICByZXR1cm4gZS5lY3J5cHQgPSAhMSxcbiAgICAgICAgZS5nYW1lS2V5ID0gYy5HYW1lQ29uZmlnLkFwcENhY2hlTmFtZSArIFwic2lnblwiLFxuICAgICAgICBlLmN1cmVudERheSA9IDEsXG4gICAgICAgIGUucmVkc2hvd2luZyA9ICExLFxuICAgICAgICBlLmNhblNpZ24gPSAhMSxcbiAgICAgICAgZVxuICAgIH1cbiAgICByZXR1cm4gaShlLCB0KSxcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEgPSBuZXcgdSxcbiAgICAgICAgdGhpcy5kYXRhLmZpcnN0TG9naW5UaW1lID0gcy5UaW1lVXRpbHMuR2V0VGltZUJ5U2Vjb25kKCksXG4gICAgICAgIHRoaXMuZGF0YS5maXJzdExvZ2luRGF5VGltZSA9IHMuVGltZVV0aWxzLmRheVN0YXJ0KCksXG4gICAgICAgIHRoaXMuZGF0YS5hbHJlZHlJZHggPSBbXSxcbiAgICAgICAgdGhpcy5jdXJlbnREYXkgPSAxLFxuICAgICAgICB0aGlzLnNhdmVEYXRhKCksXG4gICAgICAgIHRoaXMuZGF0YVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuaW5pdERhdGEgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgdmFyIGUgPSBzLlRpbWVVdGlscy5vdmVyRGF5KHRoaXMuZGF0YS5maXJzdExvZ2luRGF5VGltZSk7XG4gICAgICAgICAgICBlIDw9IDAgJiYgKGUgPSAwKSxcbiAgICAgICAgICAgIHRoaXMuY3VyZW50RGF5ID0gZSArIDFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuZ2V0Q3VyZW50RGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cmVudERheVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuZ2V0QWxyZWR5U2lnbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmFscmVkeUlkeFxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuY2hlY2tJc1NpZ25lZCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLmRhdGEuYWxyZWR5SWR4Lmxlbmd0aDsgZSsrKSBpZiAodCA9PSB0aGlzLmRhdGEuYWxyZWR5SWR4W2VdKSByZXR1cm4gISAwO1xuICAgICAgICByZXR1cm4gISAxXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5jaGVja1JlaXNzdWUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0IDwgdGhpcy5jdXJlbnREYXlcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmNoZWNrQ2FuU2lnbiA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgPT0gdGhpcy5jdXJlbnREYXlcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLnN0YXJ0U2lnbiA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhpcy5kYXRhLmFscmVkeUlkeC5wdXNoKHQpLFxuICAgICAgICB0aGlzLmRhdGEubGFzdFNpZ25UaW1lID0gcy5UaW1lVXRpbHMuR2V0VGltZUJ5U2Vjb25kKCksXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKSxcbiAgICAgICAgdGhpcy5jaGVja1Nob3dSZWQoKVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuY2hlY2tUb2R5Q2FuU2lnbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmFscmVkeUlkeC5sZW5ndGggPj0gNykgcmV0dXJuICEgMTtcbiAgICAgICAgZm9yICh2YXIgdCA9IDE7IHQgPCB0aGlzLmN1cmVudERheTsgdCsrKSBpZiAoIXRoaXMuY2hlY2tJc1NpZ25lZCh0KSkgcmV0dXJuICEgMDtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sYXN0U2lnblRpbWUgPiAxMCAmJiBzLlRpbWVVdGlscy5jb21wYXJlSXNUb2RheSh0aGlzLmRhdGEubGFzdFNpZ25UaW1lKSkge1xuICAgICAgICAgICAgZm9yICh0ID0gMDsgdCA8IHRoaXMuZGF0YS5hbHJlZHlJZHgubGVuZ3RoOyB0KyspIGlmICh0aGlzLmN1cmVudERheSA9PSB0aGlzLmRhdGEuYWxyZWR5SWR4W3RdKSByZXR1cm4gISAxO1xuICAgICAgICAgICAgcmV0dXJuICEgMFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ2FuU2lnbih0aGlzLmN1cmVudERheSlcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmNoZWNrU2hvd1JlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuY2hlY2tUb2R5Q2FuU2lnbigpO1xuICAgICAgICB0ID8gdGhpcy5yZWRzaG93aW5nIHx8ICh0aGlzLnJlZHNob3dpbmcgPSAhMCwgbi5FdmVudE1nci5nZXRJbnN0YW5jZSgpLmVtaXQobC5Db21tb25FdmVudE5hbWUuUmVmcmVzaFNpZ25SZWQsICEwKSkgOiB0aGlzLnJlZHNob3dpbmcgJiYgKHRoaXMucmVkc2hvd2luZyA9ICExLCBuLkV2ZW50TWdyLmdldEluc3RhbmNlKCkuZW1pdChsLkNvbW1vbkV2ZW50TmFtZS5SZWZyZXNoU2lnblJlZCwgITEpKSxcbiAgICAgICAgdGhpcy5jYW5TaWduID0gdFxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuZ2V0Q2FuU2lnbmVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhblNpZ25cbiAgICB9LFxuICAgIGVcbn0gKHIuQmFzZURhdGEpO1xuby5Db21TaWduRGF0YSA9IHAiXX0=