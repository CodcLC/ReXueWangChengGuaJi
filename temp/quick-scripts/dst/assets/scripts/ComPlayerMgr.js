
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ComPlayerMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1cc6cpUCMFChLaWr6d16f4v', 'ComPlayerMgr');
// scripts/ComPlayerMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ComPlayerMgr = void 0;

var a = t("ComSignData"),
    i = function () {
  function t() {
    this.isPreload = !1;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t(), this.instance.initData()), this.instance;
  }, t.prototype.initData = function () {}, t.prototype.preload = function (t) {
    this.isPreload || (this.isPreload = !0, this.signData = new a.ComSignData(), this.signData.getData(), t && t());
  }, t.prototype.getSignData = function () {
    return this.signData;
  }, t;
}();

o.ComPlayerMgr = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tUGxheWVyTWdyLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkNvbVBsYXllck1nciIsImEiLCJpIiwiaXNQcmVsb2FkIiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsImluaXREYXRhIiwicHJvdG90eXBlIiwicHJlbG9hZCIsInNpZ25EYXRhIiwiQ29tU2lnbkRhdGEiLCJnZXREYXRhIiwiZ2V0U2lnbkRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNJLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDLEdBR0FKLENBQUMsQ0FBQ0ssWUFBRixHQUFpQixLQUFLLENBSHRCOztBQUlBLElBQUlDLENBQUMsR0FBR1YsQ0FBQyxDQUFDLGFBQUQsQ0FBVDtBQUFBLElBQ0FXLENBQUMsR0FBRyxZQUFXO0VBQ1gsU0FBU1gsQ0FBVCxHQUFhO0lBQ1QsS0FBS1ksU0FBTCxHQUFpQixDQUFDLENBQWxCO0VBQ0g7O0VBQ0QsT0FBT1osQ0FBQyxDQUFDYSxXQUFGLEdBQWdCLFlBQVc7SUFDOUIsT0FBTyxRQUFRLEtBQUtDLFFBQWIsS0FBMEIsS0FBS0EsUUFBTCxHQUFnQixJQUFJZCxDQUFKLEVBQWhCLEVBQXVCLEtBQUtjLFFBQUwsQ0FBY0MsUUFBZCxFQUFqRCxHQUNQLEtBQUtELFFBREw7RUFFSCxDQUhNLEVBSVBkLENBQUMsQ0FBQ2dCLFNBQUYsQ0FBWUQsUUFBWixHQUF1QixZQUFXLENBQUUsQ0FKN0IsRUFLUGYsQ0FBQyxDQUFDZ0IsU0FBRixDQUFZQyxPQUFaLEdBQXNCLFVBQVNqQixDQUFULEVBQVk7SUFDOUIsS0FBS1ksU0FBTCxLQUFtQixLQUFLQSxTQUFMLEdBQWlCLENBQUMsQ0FBbEIsRUFBcUIsS0FBS00sUUFBTCxHQUFnQixJQUFJUixDQUFDLENBQUNTLFdBQU4sRUFBckMsRUFBd0QsS0FBS0QsUUFBTCxDQUFjRSxPQUFkLEVBQXhELEVBQWlGcEIsQ0FBQyxJQUFJQSxDQUFDLEVBQTFHO0VBQ0gsQ0FQTSxFQVFQQSxDQUFDLENBQUNnQixTQUFGLENBQVlLLFdBQVosR0FBMEIsWUFBVztJQUNqQyxPQUFPLEtBQUtILFFBQVo7RUFDSCxDQVZNLEVBV1BsQixDQVhBO0FBWUgsQ0FoQkcsRUFESjs7QUFrQkFJLENBQUMsQ0FBQ0ssWUFBRixHQUFpQkUsQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KSxcbm8uQ29tUGxheWVyTWdyID0gdm9pZCAwO1xudmFyIGEgPSB0KFwiQ29tU2lnbkRhdGFcIiksXG5pID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5pc1ByZWxvYWQgPSAhMVxuICAgIH1cbiAgICByZXR1cm4gdC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0aGlzLmluc3RhbmNlICYmICh0aGlzLmluc3RhbmNlID0gbmV3IHQsIHRoaXMuaW5zdGFuY2UuaW5pdERhdGEoKSksXG4gICAgICAgIHRoaXMuaW5zdGFuY2VcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmluaXREYXRhID0gZnVuY3Rpb24oKSB7fSxcbiAgICB0LnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLmlzUHJlbG9hZCB8fCAodGhpcy5pc1ByZWxvYWQgPSAhMCwgdGhpcy5zaWduRGF0YSA9IG5ldyBhLkNvbVNpZ25EYXRhLCB0aGlzLnNpZ25EYXRhLmdldERhdGEoKSwgdCAmJiB0KCkpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXRTaWduRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduRGF0YVxuICAgIH0sXG4gICAgdFxufSAoKTtcbm8uQ29tUGxheWVyTWdyID0gaSJdfQ==