
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CacheUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10a38ih4QhFgKSieTDoZOM5', 'CacheUtils');
// scripts/CacheUtils.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.CacheUtils = void 0;

var a = t("Utils"),
    i = function () {
  function t() {}

  return t.saveData = function (t, e) {
    localStorage.setItem(t, e);
  }, t.getData = function (t) {
    return localStorage.getItem(t);
  }, t.saveDataEncrypt = function (t, e, o) {
    var i = a.Utils.encrypt(e, o);
    this.saveData(t, i);
  }, t.getDataDecrypt = function (t, e) {
    var o = this.getData(t);
    return a.Utils.decrypt(o, e);
  }, t.canPlayMusin = function () {
    var t = this.getData("MUSIC");
    return !t || "0" != t;
  }, t.canPlayEffect = function () {
    var t = this.getData("EFFECT");
    return !t || "0" != t;
  }, t.setPlayMusic = function (t) {
    t ? this.saveData("MUSIC", "1") : this.saveData("MUSIC", "0");
  }, t.setPlayEffect = function (t) {
    t ? this.saveData("EFFECT", "1") : this.saveData("EFFECT", "0");
  }, t;
}();

o.CacheUtils = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2FjaGVVdGlscy5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJDYWNoZVV0aWxzIiwiYSIsImkiLCJzYXZlRGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXREYXRhIiwiZ2V0SXRlbSIsInNhdmVEYXRhRW5jcnlwdCIsIlV0aWxzIiwiZW5jcnlwdCIsImdldERhdGFEZWNyeXB0IiwiZGVjcnlwdCIsImNhblBsYXlNdXNpbiIsImNhblBsYXlFZmZlY3QiLCJzZXRQbGF5TXVzaWMiLCJzZXRQbGF5RWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXlCLFlBQXpCLEVBQXVDO0VBQ25DSSxLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2QyxHQUdBSixDQUFDLENBQUNLLFVBQUYsR0FBZSxLQUFLLENBSHBCOztBQUlBLElBQUlDLENBQUMsR0FBR1YsQ0FBQyxDQUFDLE9BQUQsQ0FBVDtBQUFBLElBQ0FXLENBQUMsR0FBRyxZQUFXO0VBQ1gsU0FBU1gsQ0FBVCxHQUFhLENBQUU7O0VBQ2YsT0FBT0EsQ0FBQyxDQUFDWSxRQUFGLEdBQWEsVUFBU1osQ0FBVCxFQUFZRSxDQUFaLEVBQWU7SUFDL0JXLFlBQVksQ0FBQ0MsT0FBYixDQUFxQmQsQ0FBckIsRUFBd0JFLENBQXhCO0VBQ0gsQ0FGTSxFQUdQRixDQUFDLENBQUNlLE9BQUYsR0FBWSxVQUFTZixDQUFULEVBQVk7SUFDcEIsT0FBT2EsWUFBWSxDQUFDRyxPQUFiLENBQXFCaEIsQ0FBckIsQ0FBUDtFQUNILENBTE0sRUFNUEEsQ0FBQyxDQUFDaUIsZUFBRixHQUFvQixVQUFTakIsQ0FBVCxFQUFZRSxDQUFaLEVBQWVFLENBQWYsRUFBa0I7SUFDbEMsSUFBSU8sQ0FBQyxHQUFHRCxDQUFDLENBQUNRLEtBQUYsQ0FBUUMsT0FBUixDQUFnQmpCLENBQWhCLEVBQW1CRSxDQUFuQixDQUFSO0lBQ0EsS0FBS1EsUUFBTCxDQUFjWixDQUFkLEVBQWlCVyxDQUFqQjtFQUNILENBVE0sRUFVUFgsQ0FBQyxDQUFDb0IsY0FBRixHQUFtQixVQUFTcEIsQ0FBVCxFQUFZRSxDQUFaLEVBQWU7SUFDOUIsSUFBSUUsQ0FBQyxHQUFHLEtBQUtXLE9BQUwsQ0FBYWYsQ0FBYixDQUFSO0lBQ0EsT0FBT1UsQ0FBQyxDQUFDUSxLQUFGLENBQVFHLE9BQVIsQ0FBZ0JqQixDQUFoQixFQUFtQkYsQ0FBbkIsQ0FBUDtFQUNILENBYk0sRUFjUEYsQ0FBQyxDQUFDc0IsWUFBRixHQUFpQixZQUFXO0lBQ3hCLElBQUl0QixDQUFDLEdBQUcsS0FBS2UsT0FBTCxDQUFhLE9BQWIsQ0FBUjtJQUNBLE9BQU8sQ0FBRWYsQ0FBRixJQUFPLE9BQU9BLENBQXJCO0VBQ0gsQ0FqQk0sRUFrQlBBLENBQUMsQ0FBQ3VCLGFBQUYsR0FBa0IsWUFBVztJQUN6QixJQUFJdkIsQ0FBQyxHQUFHLEtBQUtlLE9BQUwsQ0FBYSxRQUFiLENBQVI7SUFDQSxPQUFPLENBQUVmLENBQUYsSUFBTyxPQUFPQSxDQUFyQjtFQUNILENBckJNLEVBc0JQQSxDQUFDLENBQUN3QixZQUFGLEdBQWlCLFVBQVN4QixDQUFULEVBQVk7SUFDekJBLENBQUMsR0FBRyxLQUFLWSxRQUFMLENBQWMsT0FBZCxFQUF1QixHQUF2QixDQUFILEdBQWlDLEtBQUtBLFFBQUwsQ0FBYyxPQUFkLEVBQXVCLEdBQXZCLENBQWxDO0VBQ0gsQ0F4Qk0sRUF5QlBaLENBQUMsQ0FBQ3lCLGFBQUYsR0FBa0IsVUFBU3pCLENBQVQsRUFBWTtJQUMxQkEsQ0FBQyxHQUFHLEtBQUtZLFFBQUwsQ0FBYyxRQUFkLEVBQXdCLEdBQXhCLENBQUgsR0FBa0MsS0FBS0EsUUFBTCxDQUFjLFFBQWQsRUFBd0IsR0FBeEIsQ0FBbkM7RUFDSCxDQTNCTSxFQTRCUFosQ0E1QkE7QUE2QkgsQ0EvQkcsRUFESjs7QUFpQ0FJLENBQUMsQ0FBQ0ssVUFBRixHQUFlRSxDQUFmIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSksXG5vLkNhY2hlVXRpbHMgPSB2b2lkIDA7XG52YXIgYSA9IHQoXCJVdGlsc1wiKSxcbmkgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KCkge31cbiAgICByZXR1cm4gdC5zYXZlRGF0YSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odCwgZSlcbiAgICB9LFxuICAgIHQuZ2V0RGF0YSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHQpXG4gICAgfSxcbiAgICB0LnNhdmVEYXRhRW5jcnlwdCA9IGZ1bmN0aW9uKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIGkgPSBhLlV0aWxzLmVuY3J5cHQoZSwgbyk7XG4gICAgICAgIHRoaXMuc2F2ZURhdGEodCwgaSlcbiAgICB9LFxuICAgIHQuZ2V0RGF0YURlY3J5cHQgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy5nZXREYXRhKHQpO1xuICAgICAgICByZXR1cm4gYS5VdGlscy5kZWNyeXB0KG8sIGUpXG4gICAgfSxcbiAgICB0LmNhblBsYXlNdXNpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0RGF0YShcIk1VU0lDXCIpO1xuICAgICAgICByZXR1cm4gISB0IHx8IFwiMFwiICE9IHRcbiAgICB9LFxuICAgIHQuY2FuUGxheUVmZmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0RGF0YShcIkVGRkVDVFwiKTtcbiAgICAgICAgcmV0dXJuICEgdCB8fCBcIjBcIiAhPSB0XG4gICAgfSxcbiAgICB0LnNldFBsYXlNdXNpYyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdCA/IHRoaXMuc2F2ZURhdGEoXCJNVVNJQ1wiLCBcIjFcIikgOiB0aGlzLnNhdmVEYXRhKFwiTVVTSUNcIiwgXCIwXCIpXG4gICAgfSxcbiAgICB0LnNldFBsYXlFZmZlY3QgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHQgPyB0aGlzLnNhdmVEYXRhKFwiRUZGRUNUXCIsIFwiMVwiKSA6IHRoaXMuc2F2ZURhdGEoXCJFRkZFQ1RcIiwgXCIwXCIpXG4gICAgfSxcbiAgICB0XG59ICgpO1xuby5DYWNoZVV0aWxzID0gaSJdfQ==