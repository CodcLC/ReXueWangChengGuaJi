
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CommonBirge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7f63KH5RlOnaWwZRgGeTZR', 'CommonBirge');
// scripts/CommonBirge.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.CommonBrige = void 0;

var a = t("LogMgr"),
    i = function () {
  function t() {}

  return t.Instance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.setGameBrige = function (t) {
    this.gameIpml = t;
  }, t.prototype.subGoodsNum = function (t, e) {
    if (this.gameIpml) return this.gameIpml.subGoodsNum(t, e);
    a.LogMgr.getInstance().error("游戏没有实现接口：", "subGoodsNum");
  }, t.prototype.addReward = function (t, e, o) {
    this.gameIpml ? this.gameIpml.addComReward(t, e, o) : a.LogMgr.getInstance().error("游戏没有实现接口：", "addReward");
  }, t;
}();

o.CommonBrige = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tbW9uQmlyZ2UuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQ29tbW9uQnJpZ2UiLCJhIiwiaSIsIkluc3RhbmNlIiwiaW5zdGFuY2UiLCJwcm90b3R5cGUiLCJzZXRHYW1lQnJpZ2UiLCJnYW1lSXBtbCIsInN1Ykdvb2RzTnVtIiwiTG9nTWdyIiwiZ2V0SW5zdGFuY2UiLCJlcnJvciIsImFkZFJld2FyZCIsImFkZENvbVJld2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUdDLE9BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE1BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE9BQVI7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCSCxDQUF0QixFQUF5QixZQUF6QixFQUF1QztFQUNuQ0ksS0FBSyxFQUFFLENBQUM7QUFEMkIsQ0FBdkMsR0FHQUosQ0FBQyxDQUFDSyxXQUFGLEdBQWdCLEtBQUssQ0FIckI7O0FBSUEsSUFBSUMsQ0FBQyxHQUFHVixDQUFDLENBQUMsUUFBRCxDQUFUO0FBQUEsSUFDQVcsQ0FBQyxHQUFHLFlBQVc7RUFDWCxTQUFTWCxDQUFULEdBQWEsQ0FBRTs7RUFDZixPQUFPQSxDQUFDLENBQUNZLFFBQUYsR0FBYSxZQUFXO0lBQzNCLE9BQU8sUUFBUSxLQUFLQyxRQUFiLEtBQTBCLEtBQUtBLFFBQUwsR0FBZ0IsSUFBSWIsQ0FBSixFQUExQyxHQUNQLEtBQUthLFFBREw7RUFFSCxDQUhNLEVBSVBiLENBQUMsQ0FBQ2MsU0FBRixDQUFZQyxZQUFaLEdBQTJCLFVBQVNmLENBQVQsRUFBWTtJQUNuQyxLQUFLZ0IsUUFBTCxHQUFnQmhCLENBQWhCO0VBQ0gsQ0FOTSxFQU9QQSxDQUFDLENBQUNjLFNBQUYsQ0FBWUcsV0FBWixHQUEwQixVQUFTakIsQ0FBVCxFQUFZRSxDQUFaLEVBQWU7SUFDckMsSUFBSSxLQUFLYyxRQUFULEVBQW1CLE9BQU8sS0FBS0EsUUFBTCxDQUFjQyxXQUFkLENBQTBCakIsQ0FBMUIsRUFBNkJFLENBQTdCLENBQVA7SUFDbkJRLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxXQUFULEdBQXVCQyxLQUF2QixDQUE2QixXQUE3QixFQUEwQyxhQUExQztFQUNILENBVk0sRUFXUHBCLENBQUMsQ0FBQ2MsU0FBRixDQUFZTyxTQUFaLEdBQXdCLFVBQVNyQixDQUFULEVBQVlFLENBQVosRUFBZUUsQ0FBZixFQUFrQjtJQUN0QyxLQUFLWSxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY00sWUFBZCxDQUEyQnRCLENBQTNCLEVBQThCRSxDQUE5QixFQUFpQ0UsQ0FBakMsQ0FBaEIsR0FBc0RNLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxXQUFULEdBQXVCQyxLQUF2QixDQUE2QixXQUE3QixFQUEwQyxXQUExQyxDQUF0RDtFQUNILENBYk0sRUFjUHBCLENBZEE7QUFlSCxDQWpCRyxFQURKOztBQW1CQUksQ0FBQyxDQUFDSyxXQUFGLEdBQWdCRSxDQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHQgPSByZXF1aXJlO1xudmFyIGUgPSBtb2R1bGU7XG52YXIgbyA9IGV4cG9ydHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogITBcbn0pLFxuby5Db21tb25CcmlnZSA9IHZvaWQgMDtcbnZhciBhID0gdChcIkxvZ01nclwiKSxcbmkgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KCkge31cbiAgICByZXR1cm4gdC5JbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0aGlzLmluc3RhbmNlICYmICh0aGlzLmluc3RhbmNlID0gbmV3IHQpLFxuICAgICAgICB0aGlzLmluc3RhbmNlXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zZXRHYW1lQnJpZ2UgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMuZ2FtZUlwbWwgPSB0XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zdWJHb29kc051bSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUlwbWwpIHJldHVybiB0aGlzLmdhbWVJcG1sLnN1Ykdvb2RzTnVtKHQsIGUpO1xuICAgICAgICBhLkxvZ01nci5nZXRJbnN0YW5jZSgpLmVycm9yKFwi5ri45oiP5rKh5pyJ5a6e546w5o6l5Y+j77yaXCIsIFwic3ViR29vZHNOdW1cIilcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmFkZFJld2FyZCA9IGZ1bmN0aW9uKHQsIGUsIG8pIHtcbiAgICAgICAgdGhpcy5nYW1lSXBtbCA/IHRoaXMuZ2FtZUlwbWwuYWRkQ29tUmV3YXJkKHQsIGUsIG8pIDogYS5Mb2dNZ3IuZ2V0SW5zdGFuY2UoKS5lcnJvcihcIua4uOaIj+ayoeacieWunueOsOaOpeWPo++8mlwiLCBcImFkZFJld2FyZFwiKVxuICAgIH0sXG4gICAgdFxufSAoKTtcbm8uQ29tbW9uQnJpZ2UgPSBpIl19