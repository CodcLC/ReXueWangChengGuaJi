
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BaseData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49fe1VrQRREfYC23YMs7HGr', 'BaseData');
// scripts/BaseData.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.BaseData = void 0;

var a = t("CacheUtils"),
    i = function () {
  function t() {
    this.pwd = "SFPLAY";
  }

  return t.prototype.getData = function () {
    if (null == this.data) {
      var t;
      (t = this.ecrypt ? a.CacheUtils.getDataDecrypt(this.gameKey, this.pwd) : a.CacheUtils.getData(this.gameKey)) ? (this.data = JSON.parse(t), this.initData(!1)) : (this.data = this.createData(), this.initData(!0));
    }

    return this.data;
  }, t.prototype.initData = function () {}, t.prototype.saveData = function () {
    var t = JSON.stringify(this.data);
    this.ecrypt ? a.CacheUtils.saveDataEncrypt(this.gameKey, t, this.pwd) : a.CacheUtils.saveData(this.gameKey, t);
  }, t;
}();

o.BaseData = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFzZURhdGEuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQmFzZURhdGEiLCJhIiwiaSIsInB3ZCIsInByb3RvdHlwZSIsImdldERhdGEiLCJkYXRhIiwiZWNyeXB0IiwiQ2FjaGVVdGlscyIsImdldERhdGFEZWNyeXB0IiwiZ2FtZUtleSIsIkpTT04iLCJwYXJzZSIsImluaXREYXRhIiwiY3JlYXRlRGF0YSIsInNhdmVEYXRhIiwic3RyaW5naWZ5Iiwic2F2ZURhdGFFbmNyeXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXlCLFlBQXpCLEVBQXVDO0VBQ25DSSxLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2QyxHQUdBSixDQUFDLENBQUNLLFFBQUYsR0FBYSxLQUFLLENBSGxCOztBQUlBLElBQUlDLENBQUMsR0FBR1YsQ0FBQyxDQUFDLFlBQUQsQ0FBVDtBQUFBLElBQ0FXLENBQUMsR0FBRyxZQUFXO0VBQ1gsU0FBU1gsQ0FBVCxHQUFhO0lBQ1QsS0FBS1ksR0FBTCxHQUFXLFFBQVg7RUFDSDs7RUFDRCxPQUFPWixDQUFDLENBQUNhLFNBQUYsQ0FBWUMsT0FBWixHQUFzQixZQUFXO0lBQ3BDLElBQUksUUFBUSxLQUFLQyxJQUFqQixFQUF1QjtNQUNuQixJQUFJZixDQUFKO01BQU8sQ0FBQ0EsQ0FBQyxHQUFHLEtBQUtnQixNQUFMLEdBQWNOLENBQUMsQ0FBQ08sVUFBRixDQUFhQyxjQUFiLENBQTRCLEtBQUtDLE9BQWpDLEVBQTBDLEtBQUtQLEdBQS9DLENBQWQsR0FBb0VGLENBQUMsQ0FBQ08sVUFBRixDQUFhSCxPQUFiLENBQXFCLEtBQUtLLE9BQTFCLENBQXpFLEtBQWdILEtBQUtKLElBQUwsR0FBWUssSUFBSSxDQUFDQyxLQUFMLENBQVdyQixDQUFYLENBQVosRUFBMkIsS0FBS3NCLFFBQUwsQ0FBYyxDQUFDLENBQWYsQ0FBM0ksS0FBaUssS0FBS1AsSUFBTCxHQUFZLEtBQUtRLFVBQUwsRUFBWixFQUErQixLQUFLRCxRQUFMLENBQWMsQ0FBQyxDQUFmLENBQWhNO0lBQ1Y7O0lBQ0QsT0FBTyxLQUFLUCxJQUFaO0VBQ0gsQ0FMTSxFQU1QZixDQUFDLENBQUNhLFNBQUYsQ0FBWVMsUUFBWixHQUF1QixZQUFXLENBQUUsQ0FON0IsRUFPUHRCLENBQUMsQ0FBQ2EsU0FBRixDQUFZVyxRQUFaLEdBQXVCLFlBQVc7SUFDOUIsSUFBSXhCLENBQUMsR0FBR29CLElBQUksQ0FBQ0ssU0FBTCxDQUFlLEtBQUtWLElBQXBCLENBQVI7SUFDQSxLQUFLQyxNQUFMLEdBQWNOLENBQUMsQ0FBQ08sVUFBRixDQUFhUyxlQUFiLENBQTZCLEtBQUtQLE9BQWxDLEVBQTJDbkIsQ0FBM0MsRUFBOEMsS0FBS1ksR0FBbkQsQ0FBZCxHQUF3RUYsQ0FBQyxDQUFDTyxVQUFGLENBQWFPLFFBQWIsQ0FBc0IsS0FBS0wsT0FBM0IsRUFBb0NuQixDQUFwQyxDQUF4RTtFQUNILENBVk0sRUFXUEEsQ0FYQTtBQVlILENBaEJHLEVBREo7O0FBa0JBSSxDQUFDLENBQUNLLFFBQUYsR0FBYUUsQ0FBYiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHQgPSByZXF1aXJlO1xudmFyIGUgPSBtb2R1bGU7XG52YXIgbyA9IGV4cG9ydHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogITBcbn0pLFxuby5CYXNlRGF0YSA9IHZvaWQgMDtcbnZhciBhID0gdChcIkNhY2hlVXRpbHNcIiksXG5pID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5wd2QgPSBcIlNGUExBWVwiXG4gICAgfVxuICAgIHJldHVybiB0LnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChudWxsID09IHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgdmFyIHQ7ICh0ID0gdGhpcy5lY3J5cHQgPyBhLkNhY2hlVXRpbHMuZ2V0RGF0YURlY3J5cHQodGhpcy5nYW1lS2V5LCB0aGlzLnB3ZCkgOiBhLkNhY2hlVXRpbHMuZ2V0RGF0YSh0aGlzLmdhbWVLZXkpKSA/ICh0aGlzLmRhdGEgPSBKU09OLnBhcnNlKHQpLCB0aGlzLmluaXREYXRhKCExKSkgOiAodGhpcy5kYXRhID0gdGhpcy5jcmVhdGVEYXRhKCksIHRoaXMuaW5pdERhdGEoITApKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmluaXREYXRhID0gZnVuY3Rpb24oKSB7fSxcbiAgICB0LnByb3RvdHlwZS5zYXZlRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuZWNyeXB0ID8gYS5DYWNoZVV0aWxzLnNhdmVEYXRhRW5jcnlwdCh0aGlzLmdhbWVLZXksIHQsIHRoaXMucHdkKSA6IGEuQ2FjaGVVdGlscy5zYXZlRGF0YSh0aGlzLmdhbWVLZXksIHQpXG4gICAgfSxcbiAgICB0XG59ICgpO1xuby5CYXNlRGF0YSA9IGkiXX0=