
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CityMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b39c9FYOklMSYxKAdaKEyOo', 'CityMgr');
// scripts/CityMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.CityMgr = void 0;

var a = t("HttpMgr"),
    i = t("LogMgr"),
    r = function () {
  function t() {
    this.firstCity = ["北京", "上海", "广州", "深圳"], this.isget = !1, this.isFirstCity = !0;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t(), this.instance.init()), this.instance;
  }, t.prototype.init = function () {
    this.parseIp();
  }, t.prototype.parseIp = function () {
    var t = this;
    a.HttpMgr.getInstance().httpGet("https://yuema.sfplay.net:9090/getIpInfo", null, function (e, o) {
      if (i.LogMgr.getInstance().debug("res: ", o), e) {
        t.isget = !0;

        for (var a = 0; a < t.firstCity.length; a++) {
          if (o.match(t.firstCity[a])) {
            t.isFirstCity = !1;
            break;
          }
        }
      }
    });
  }, t.prototype.getIsFirstCity = function () {
    return this.isget || this.parseIp(), this.isFirstCity;
  }, t;
}();

o.CityMgr = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2l0eU1nci5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJDaXR5TWdyIiwiYSIsImkiLCJyIiwiZmlyc3RDaXR5IiwiaXNnZXQiLCJpc0ZpcnN0Q2l0eSIsImdldEluc3RhbmNlIiwiaW5zdGFuY2UiLCJpbml0IiwicHJvdG90eXBlIiwicGFyc2VJcCIsIkh0dHBNZ3IiLCJodHRwR2V0IiwiTG9nTWdyIiwiZGVidWciLCJsZW5ndGgiLCJtYXRjaCIsImdldElzRmlyc3RDaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXlCLFlBQXpCLEVBQXVDO0VBQ25DSSxLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2QyxHQUdBSixDQUFDLENBQUNLLE9BQUYsR0FBWSxLQUFLLENBSGpCOztBQUlBLElBQUlDLENBQUMsR0FBR1YsQ0FBQyxDQUFDLFNBQUQsQ0FBVDtBQUFBLElBQ0FXLENBQUMsR0FBR1gsQ0FBQyxDQUFDLFFBQUQsQ0FETDtBQUFBLElBRUFZLENBQUMsR0FBRyxZQUFXO0VBQ1gsU0FBU1osQ0FBVCxHQUFhO0lBQ1QsS0FBS2EsU0FBTCxHQUFpQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQUFqQixFQUNBLEtBQUtDLEtBQUwsR0FBYSxDQUFDLENBRGQsRUFFQSxLQUFLQyxXQUFMLEdBQW1CLENBQUMsQ0FGcEI7RUFHSDs7RUFDRCxPQUFPZixDQUFDLENBQUNnQixXQUFGLEdBQWdCLFlBQVc7SUFDOUIsT0FBTyxRQUFRLEtBQUtDLFFBQWIsS0FBMEIsS0FBS0EsUUFBTCxHQUFnQixJQUFJakIsQ0FBSixFQUFoQixFQUF1QixLQUFLaUIsUUFBTCxDQUFjQyxJQUFkLEVBQWpELEdBQ1AsS0FBS0QsUUFETDtFQUVILENBSE0sRUFJUGpCLENBQUMsQ0FBQ21CLFNBQUYsQ0FBWUQsSUFBWixHQUFtQixZQUFXO0lBQzFCLEtBQUtFLE9BQUw7RUFDSCxDQU5NLEVBT1BwQixDQUFDLENBQUNtQixTQUFGLENBQVlDLE9BQVosR0FBc0IsWUFBVztJQUM3QixJQUFJcEIsQ0FBQyxHQUFHLElBQVI7SUFDQVUsQ0FBQyxDQUFDVyxPQUFGLENBQVVMLFdBQVYsR0FBd0JNLE9BQXhCLENBQWdDLHlDQUFoQyxFQUEyRSxJQUEzRSxFQUNBLFVBQVNwQixDQUFULEVBQVlFLENBQVosRUFBZTtNQUNYLElBQUlPLENBQUMsQ0FBQ1ksTUFBRixDQUFTUCxXQUFULEdBQXVCUSxLQUF2QixDQUE2QixPQUE3QixFQUFzQ3BCLENBQXRDLEdBQTBDRixDQUE5QyxFQUFpRDtRQUM3Q0YsQ0FBQyxDQUFDYyxLQUFGLEdBQVUsQ0FBQyxDQUFYOztRQUNBLEtBQUssSUFBSUosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsQ0FBQyxDQUFDYSxTQUFGLENBQVlZLE1BQWhDLEVBQXdDZixDQUFDLEVBQXpDO1VBQTZDLElBQUlOLENBQUMsQ0FBQ3NCLEtBQUYsQ0FBUTFCLENBQUMsQ0FBQ2EsU0FBRixDQUFZSCxDQUFaLENBQVIsQ0FBSixFQUE2QjtZQUN0RVYsQ0FBQyxDQUFDZSxXQUFGLEdBQWdCLENBQUMsQ0FBakI7WUFDQTtVQUNIO1FBSEQ7TUFJSDtJQUNKLENBVEQ7RUFVSCxDQW5CTSxFQW9CUGYsQ0FBQyxDQUFDbUIsU0FBRixDQUFZUSxjQUFaLEdBQTZCLFlBQVc7SUFDcEMsT0FBTyxLQUFLYixLQUFMLElBQWMsS0FBS00sT0FBTCxFQUFkLEVBQ1AsS0FBS0wsV0FETDtFQUVILENBdkJNLEVBd0JQZixDQXhCQTtBQXlCSCxDQS9CRyxFQUZKOztBQWtDQUksQ0FBQyxDQUFDSyxPQUFGLEdBQVlHLENBQVoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KSxcbm8uQ2l0eU1nciA9IHZvaWQgMDtcbnZhciBhID0gdChcIkh0dHBNZ3JcIiksXG5pID0gdChcIkxvZ01nclwiKSxcbnIgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLmZpcnN0Q2l0eSA9IFtcIuWMl+S6rFwiLCBcIuS4iua1t1wiLCBcIuW5v+W3nlwiLCBcIua3seWcs1wiXSxcbiAgICAgICAgdGhpcy5pc2dldCA9ICExLFxuICAgICAgICB0aGlzLmlzRmlyc3RDaXR5ID0gITBcbiAgICB9XG4gICAgcmV0dXJuIHQuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdGhpcy5pbnN0YW5jZSAmJiAodGhpcy5pbnN0YW5jZSA9IG5ldyB0LCB0aGlzLmluc3RhbmNlLmluaXQoKSksXG4gICAgICAgIHRoaXMuaW5zdGFuY2VcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wYXJzZUlwKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnBhcnNlSXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBhLkh0dHBNZ3IuZ2V0SW5zdGFuY2UoKS5odHRwR2V0KFwiaHR0cHM6Ly95dWVtYS5zZnBsYXkubmV0OjkwOTAvZ2V0SXBJbmZvXCIsIG51bGwsXG4gICAgICAgIGZ1bmN0aW9uKGUsIG8pIHtcbiAgICAgICAgICAgIGlmIChpLkxvZ01nci5nZXRJbnN0YW5jZSgpLmRlYnVnKFwicmVzOiBcIiwgbyksIGUpIHtcbiAgICAgICAgICAgICAgICB0LmlzZ2V0ID0gITA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0LmZpcnN0Q2l0eS5sZW5ndGg7IGErKykgaWYgKG8ubWF0Y2godC5maXJzdENpdHlbYV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuaXNGaXJzdENpdHkgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXRJc0ZpcnN0Q2l0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc2dldCB8fCB0aGlzLnBhcnNlSXAoKSxcbiAgICAgICAgdGhpcy5pc0ZpcnN0Q2l0eVxuICAgIH0sXG4gICAgdFxufSAoKTtcbm8uQ2l0eU1nciA9IHIiXX0=