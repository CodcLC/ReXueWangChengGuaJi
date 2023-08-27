
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/WebLinkManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ab12yUnhdDFITeKQSSqI23', 'WebLinkManager');
// scripts/WebLinkManager.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.WebLinkManager = void 0;

var a = function () {
  function t() {
    this.infostr = [];
  }

  return t.prototype.showBlockAd = function () {}, t.prototype.hideBlockAd = function () {}, t.prototype.getCode = function () {
    return "";
  }, t.prototype.canShare = function () {
    return !1;
  }, t.prototype.pauseRecord = function () {}, t.prototype.resumeRecord = function () {}, t.prototype.verifyKey = function () {}, t.prototype.toAppStore = function () {}, t.prototype.openNotify = function () {}, t.prototype.shareImg = function () {}, t.prototype.showWxNativeAD = function () {}, t.prototype.hideWxNativeAD = function () {}, t.prototype.hasVerify = function () {
    return !1;
  }, t.prototype.youmengTrack = function (t, e, o) {
    cocosAnalytics && ("userA" == e ? cocosAnalytics.CACustomEvent.onSuccess(t, {
      userA: o
    }) : "userB" == e ? cocosAnalytics.CACustomEvent.onSuccess(t, {
      userB: o
    }) : "userD" == e ? cocosAnalytics.CACustomEvent.onSuccess(t, {
      userD: o
    }) : cocosAnalytics.CACustomEvent.onSuccess(t, {
      userC: o
    }));
  }, t.prototype.initSdk = function (t, e) {
    e && e();
  }, t.prototype.login = function (t, e) {
    e && e();
  }, t.prototype.pay = function (t, e) {
    e && e();
  }, t.prototype.share = function (t, e) {
    e && e();
  }, t.prototype.showBanner = function (t, e) {
    e && e();
  }, t.prototype.hideBanner = function (t, e) {
    e && e();
  }, t.prototype.showInsertAd = function (t, e) {
    e && e();
  }, t.prototype.showVideoAd = function (t, e) {
    e && e();
  }, t.prototype.otherFun = function (t, e) {
    e && e();
  }, t.prototype.shark = function (t, e) {
    e && e();
  }, t.prototype.recordVideo = function (t, e) {
    e && e();
  }, t.prototype.shareVideo = function (t, e) {
    e && e();
  }, t.prototype.stopRecorderManager = function (t, e) {
    e && e();
  }, t.prototype.setLanguage = function (t, e) {
    return e && e(), "zh";
  }, t;
}();

o.WebLinkManager = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV2ViTGlua01hbmFnZXIuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiV2ViTGlua01hbmFnZXIiLCJhIiwiaW5mb3N0ciIsInByb3RvdHlwZSIsInNob3dCbG9ja0FkIiwiaGlkZUJsb2NrQWQiLCJnZXRDb2RlIiwiY2FuU2hhcmUiLCJwYXVzZVJlY29yZCIsInJlc3VtZVJlY29yZCIsInZlcmlmeUtleSIsInRvQXBwU3RvcmUiLCJvcGVuTm90aWZ5Iiwic2hhcmVJbWciLCJzaG93V3hOYXRpdmVBRCIsImhpZGVXeE5hdGl2ZUFEIiwiaGFzVmVyaWZ5IiwieW91bWVuZ1RyYWNrIiwiY29jb3NBbmFseXRpY3MiLCJDQUN1c3RvbUV2ZW50Iiwib25TdWNjZXNzIiwidXNlckEiLCJ1c2VyQiIsInVzZXJEIiwidXNlckMiLCJpbml0U2RrIiwibG9naW4iLCJwYXkiLCJzaGFyZSIsInNob3dCYW5uZXIiLCJoaWRlQmFubmVyIiwic2hvd0luc2VydEFkIiwic2hvd1ZpZGVvQWQiLCJvdGhlckZ1biIsInNoYXJrIiwicmVjb3JkVmlkZW8iLCJzaGFyZVZpZGVvIiwic3RvcFJlY29yZGVyTWFuYWdlciIsInNldExhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXlCLFlBQXpCLEVBQXVDO0VBQ25DSSxLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2QyxHQUdBSixDQUFDLENBQUNLLGNBQUYsR0FBbUIsS0FBSyxDQUh4Qjs7QUFJQSxJQUFJQyxDQUFDLEdBQUcsWUFBVztFQUNmLFNBQVNWLENB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QyxDQUFULEVBQVlFLENBQVosRUFBZTtJQUM3Q0EsQ0FBQyxJQUFJQSxDQUFDLEVBQU47RUFDSCxDQXBFTSxFQXFFUEYsQ0FBQyxDQUFDWSxTQUFGLENBQVltQyxXQUFaLEdBQTBCLFVBQVMvQyxDQUFULEVBQVlFLENBQVosRUFBZTtJQUNyQyxPQUFPQSxDQUFDLElBQUlBLENBQUMsRUFBTixFQUNQLElBREE7RUFFSCxDQXhFTSxFQXlFUEYsQ0F6RUE7QUEwRUgsQ0E5RU8sRUFBUjs7QUErRUFJLENBQUMsQ0FBQ0ssY0FBRixHQUFtQkMsQ0FBbkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KSxcbm8uV2ViTGlua01hbmFnZXIgPSB2b2lkIDA7XG52YXIgYSA9IGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuaW5mb3N0ciA9IFtdXG4gICAgfVxuICAgIHJldHVybiB0LnByb3RvdHlwZS5zaG93QmxvY2tBZCA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuaGlkZUJsb2NrQWQgPSBmdW5jdGlvbigpIHt9LFxuICAgIHQucHJvdG90eXBlLmdldENvZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmNhblNoYXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIDFcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnBhdXNlUmVjb3JkID0gZnVuY3Rpb24oKSB7fSxcbiAgICB0LnByb3RvdHlwZS5yZXN1bWVSZWNvcmQgPSBmdW5jdGlvbigpIHt9LFxuICAgIHQucHJvdG90eXBlLnZlcmlmeUtleSA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUudG9BcHBTdG9yZSA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUub3Blbk5vdGlmeSA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuc2hhcmVJbWcgPSBmdW5jdGlvbigpIHt9LFxuICAgIHQucHJvdG90eXBlLnNob3dXeE5hdGl2ZUFEID0gZnVuY3Rpb24oKSB7fSxcbiAgICB0LnByb3RvdHlwZS5oaWRlV3hOYXRpdmVBRCA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuaGFzVmVyaWZ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIDFcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnlvdW1lbmdUcmFjayA9IGZ1bmN0aW9uKHQsIGUsIG8pIHtcbiAgICAgICAgY29jb3NBbmFseXRpY3MgJiYgKFwidXNlckFcIiA9PSBlID8gY29jb3NBbmFseXRpY3MuQ0FDdXN0b21FdmVudC5vblN1Y2Nlc3ModCwge1xuICAgICAgICAgICAgdXNlckE6IG9cbiAgICAgICAgfSkgOiBcInVzZXJCXCIgPT0gZSA/IGNvY29zQW5hbHl0aWNzLkNBQ3VzdG9tRXZlbnQub25TdWNjZXNzKHQsIHtcbiAgICAgICAgICAgIHVzZXJCOiBvXG4gICAgICAgIH0pIDogXCJ1c2VyRFwiID09IGUgPyBjb2Nvc0FuYWx5dGljcy5DQUN1c3RvbUV2ZW50Lm9uU3VjY2Vzcyh0LCB7XG4gICAgICAgICAgICB1c2VyRDogb1xuICAgICAgICB9KSA6IGNvY29zQW5hbHl0aWNzLkNBQ3VzdG9tRXZlbnQub25TdWNjZXNzKHQsIHtcbiAgICAgICAgICAgIHVzZXJDOiBvXG4gICAgICAgIH0pKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuaW5pdFNkayA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZSAmJiBlKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmxvZ2luID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBlICYmIGUoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUucGF5ID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBlICYmIGUoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuc2hhcmUgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGUgJiYgZSgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zaG93QmFubmVyID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBlICYmIGUoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuaGlkZUJhbm5lciA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZSAmJiBlKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnNob3dJbnNlcnRBZCA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZSAmJiBlKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnNob3dWaWRlb0FkID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBlICYmIGUoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUub3RoZXJGdW4gPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGUgJiYgZSgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zaGFyayA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZSAmJiBlKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnJlY29yZFZpZGVvID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBlICYmIGUoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuc2hhcmVWaWRlbyA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZSAmJiBlKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnN0b3BSZWNvcmRlck1hbmFnZXIgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGUgJiYgZSgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgZSgpLFxuICAgICAgICBcInpoXCJcbiAgICB9LFxuICAgIHRcbn0gKCk7XG5vLldlYkxpbmtNYW5hZ2VyID0gYSJdfQ==