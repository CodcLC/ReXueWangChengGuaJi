
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ComDataMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tRGF0YU1nci5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJDb21EYXRhTWdyIiwiQ29tbW9uUGFyYW1UeXBlIiwiYSIsImRlZlRpY2tOdW0iLCJmcmVlTG90dHlOdW0iLCJjb2xsb2N0aW9uVGltZSIsImNvbGxvY3Rpb25DYW5OZXh0IiwiY29sbG9jdGlvblJlcGV0IiwiaSIsImdldEluc3RhbmNlIiwiaW5zdGFuY2UiLCJwcm90b3R5cGUiLCJwcmVsb2FkIiwiUmVzb3VyY2VNZ3IiLCJsb2FkUmVzIiwiY2MiLCJKc29uQXNzZXQiLCJkYXRhIiwianNvbiIsImRlY1JlZiIsInJlbGVhc2VCdW5kbGUiLCJvcmRlckNmZ3MiLCJTaWduQ2ZnIiwic29ydCIsImlkIiwiZ2V0QWxsU2lnbkNmZyIsImdldFNpZ25CeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXlCLFlBQXpCLEVBQXVDO0VBQ25DSSxLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2QyxHQUdBSixDQUFDLENBQUNLLFVBQUYsR0FBZUwsQ0FBQyxDQUFDTSxlQUFGLEdBQW9CLEtBQUssQ0FIeEM7QUFJQSxJQUFJQyxDQUFDLEdBQUdYLENBQUMsQ0FBQyxhQUFELENBQVQ7O0FBQTBCLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0VBQ25DQSxDQUFDLENBQUNBLENBQUMsQ0FBQ1ksVUFBRixHQUFlLENBQWhCLENBQUQsR0FBc0IsWUFBdEIsRUFDQVosQ0FBQyxDQUFDQSxDQUFDLENBQUNhLFlBQUYsR0FBaUIsQ0FBbEIsQ0FBRCxHQUF3QixjQUR4QixFQUVBYixDQUFDLENBQUNBLENBQUMsQ0FBQ2MsY0FBRixHQUFtQixDQUFwQixDQUFELEdBQTBCLGdCQUYxQixFQUdBZCxDQUFDLENBQUNBLENBQUMsQ0FBQ2UsaUJBQUYsR0FBc0IsQ0FBdkIsQ0FBRCxHQUE2QixtQkFIN0IsRUFJQWYsQ0FBQyxDQUFDQSxDQUFDLENBQUNnQixlQUFGLEdBQW9CLENBQXJCLENBQUQsR0FBMkIsaUJBSjNCO0FBS0gsQ0FOeUIsRUFNdkJaLENBQUMsQ0FBQ00sZUFBRixLQUFzQk4sQ0FBQyxDQUFDTSxlQUFGLEdBQW9CLEVBQTFDLENBTnVCOztBQU8xQixJQUFJTyxDQUFDLEdBQUcsWUFBVztFQUNmLFNBQVNqQixDQUFULEdBQWEsQ0FBRTs7RUFDZixPQUFPQSxDQUFDLENBQUNrQixXQUFGLEdBQWdCLFlBQVc7SUFDOUIsT0FBTyxRQUFRLEtBQUtDLFFBQWIsS0FBMEIsS0FBS0EsUUFBTCxHQUFnQixJQUFJbkIsQ0FBSixFQUExQyxHQUNQLEtBQUttQixRQURMO0VBRUgsQ0FITSxFQUlQbkIsQ0FBQyxDQUFDb0IsU0FBRixDQUFZQyxPQUFaLEdBQXNCLFVBQVNyQixDQUFULEVBQVk7SUFDOUIsSUFBSUUsQ0FBQyxHQUFHLElBQVI7SUFDQVMsQ0FBQyxDQUFDVyxXQUFGLENBQWNKLFdBQWQsR0FBNEJLLE9BQTVCLENBQW9DLFdBQXBDLEVBQWlELGFBQWpELEVBQWdFQyxFQUFFLENBQUNDLFNBQW5FLEVBQ0EsVUFBU3JCLENBQVQsRUFBWTtNQUNSRixDQUFDLENBQUN3QixJQUFGLEdBQVN0QixDQUFDLENBQUN1QixJQUFYLEVBQ0F2QixDQUFDLENBQUN3QixNQUFGLEVBREEsRUFFQWpCLENBQUMsQ0FBQ1csV0FBRixDQUFjSixXQUFkLEdBQTRCVyxhQUE1QixDQUEwQyxXQUExQyxDQUZBLEVBR0E3QixDQUFDLElBQUlBLENBQUMsRUFITjtJQUlILENBTkQ7RUFPSCxDQWJNLEVBY1BBLENBQUMsQ0FBQ29CLFNBQUYsQ0FBWVUsU0FBWixHQUF3QixZQUFXO0lBQy9CLEtBQUtKLElBQUwsQ0FBVUssT0FBVixDQUFrQkMsSUFBbEIsQ0FBdUIsVUFBU2hDLENBQVQsRUFBWUUsQ0FBWixFQUFlO01BQ2xDLE9BQU9GLENBQUMsQ0FBQ2lDLEVBQUYsR0FBTy9CLENBQUMsQ0FBQytCLEVBQWhCO0lBQ0gsQ0FGRDtFQUdILENBbEJNLEVBbUJQakMsQ0FBQyxDQUFDb0IsU0FBRixDQUFZYyxhQUFaLEdBQTRCLFlBQVc7SUFDbkMsT0FBTyxLQUFLUixJQUFMLENBQVVLLE9BQWpCO0VBQ0gsQ0FyQk0sRUFzQlAvQixDQUFDLENBQUNvQixTQUFGLENBQVllLFdBQVosR0FBMEIsVUFBU25DLENBQVQsRUFBWTtJQUNsQyxPQUFPLEtBQUswQixJQUFMLENBQVVLLE9BQVYsQ0FBa0IvQixDQUFDLEdBQUcsQ0FBdEIsQ0FBUDtFQUNILENBeEJNLEVBeUJQQSxDQXpCQTtBQTBCSCxDQTVCTyxFQUFSOztBQTZCQUksQ0FBQyxDQUFDSyxVQUFGLEdBQWVRLENBQWYiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KSxcbm8uQ29tRGF0YU1nciA9IG8uQ29tbW9uUGFyYW1UeXBlID0gdm9pZCAwO1xudmFyIGEgPSB0KFwiUmVzb3VyY2VNZ3JcIik7IChmdW5jdGlvbih0KSB7XG4gICAgdFt0LmRlZlRpY2tOdW0gPSAxXSA9IFwiZGVmVGlja051bVwiLFxuICAgIHRbdC5mcmVlTG90dHlOdW0gPSAyXSA9IFwiZnJlZUxvdHR5TnVtXCIsXG4gICAgdFt0LmNvbGxvY3Rpb25UaW1lID0gM10gPSBcImNvbGxvY3Rpb25UaW1lXCIsXG4gICAgdFt0LmNvbGxvY3Rpb25DYW5OZXh0ID0gNF0gPSBcImNvbGxvY3Rpb25DYW5OZXh0XCIsXG4gICAgdFt0LmNvbGxvY3Rpb25SZXBldCA9IDVdID0gXCJjb2xsb2N0aW9uUmVwZXRcIlxufSkoby5Db21tb25QYXJhbVR5cGUgfHwgKG8uQ29tbW9uUGFyYW1UeXBlID0ge30pKTtcbnZhciBpID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgcmV0dXJuIHQuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdGhpcy5pbnN0YW5jZSAmJiAodGhpcy5pbnN0YW5jZSA9IG5ldyB0KSxcbiAgICAgICAgdGhpcy5pbnN0YW5jZVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUucHJlbG9hZCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBhLlJlc291cmNlTWdyLmdldEluc3RhbmNlKCkubG9hZFJlcyhcImNvbWNvbmZpZ1wiLCBcIkdhbWVKc29uQ2ZnXCIsIGNjLkpzb25Bc3NldCxcbiAgICAgICAgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgZS5kYXRhID0gby5qc29uLFxuICAgICAgICAgICAgby5kZWNSZWYoKSxcbiAgICAgICAgICAgIGEuUmVzb3VyY2VNZ3IuZ2V0SW5zdGFuY2UoKS5yZWxlYXNlQnVuZGxlKFwiY29tY29uZmlnXCIpLFxuICAgICAgICAgICAgdCAmJiB0KClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLm9yZGVyQ2ZncyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmRhdGEuU2lnbkNmZy5zb3J0KGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmlkIC0gZS5pZFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0QWxsU2lnbkNmZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLlNpZ25DZmdcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldFNpZ25CeUlkID0gZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLlNpZ25DZmdbdCAtIDFdXG4gICAgfSxcbiAgICB0XG59ICgpO1xuby5Db21EYXRhTWdyID0gaSJdfQ==