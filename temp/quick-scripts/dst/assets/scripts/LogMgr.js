
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LogMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66888k6K8BMX5FlnhFjgbWs', 'LogMgr');
// scripts/LogMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.LogMgr = void 0;

var a = function () {
  function t() {}

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.debug = function () {}, t.prototype.info = function (t, e) {
    console.log(t, e);
  }, t.prototype.error = function (t, e) {
    console.error(t, e);
  }, t.instance = null, t;
}();

o.LogMgr = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTG9nTWdyLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkxvZ01nciIsImEiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwicHJvdG90eXBlIiwiZGVidWciLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXlCLFlBQXpCLEVBQXVDO0VBQ25DSSxLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2QyxHQUdBSixDQUFDLENBQUNLLE1BQUYsR0FBVyxLQUFLLENBSGhCOztBQUlBLElBQUlDLENBQUMsR0FBRyxZQUFXO0VBQ2YsU0FBU1YsQ0FBVCxHQUFhLENBQUU7O0VBQ2YsT0FBT0EsQ0FBQyxDQUFDVyxXQUFGLEdBQWdCLFlBQVc7SUFDOUIsT0FBTyxRQUFRLEtBQUtDLFFBQWIsS0FBMEIsS0FBS0EsUUFBTCxHQUFnQixJQUFJWixDQUFKLEVBQTFDLEdBQ1AsS0FBS1ksUUFETDtFQUVILENBSE0sRUFJUFosQ0FBQyxDQUFDYSxTQUFGLENBQVlDLEtBQVosR0FBb0IsWUFBVyxDQUFFLENBSjFCLEVBS1BkLENBQUMsQ0FBQ2EsU0FBRixDQUFZRSxJQUFaLEdBQW1CLFVBQVNmLENBQVQsRUFBWUUsQ0FBWixFQUFlO0lBQzlCYyxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLENBQVosRUFBZUUsQ0FBZjtFQUNILENBUE0sRUFRUEYsQ0FBQyxDQUFDYSxTQUFGLENBQVlLLEtBQVosR0FBb0IsVUFBU2xCLENBQVQsRUFBWUUsQ0FBWixFQUFlO0lBQy9CYyxPQUFPLENBQUNFLEtBQVIsQ0FBY2xCLENBQWQsRUFBaUJFLENBQWpCO0VBQ0gsQ0FWTSxFQVdQRixDQUFDLENBQUNZLFFBQUYsR0FBYSxJQVhOLEVBWVBaLENBWkE7QUFhSCxDQWZPLEVBQVI7O0FBZ0JBSSxDQUFDLENBQUNLLE1BQUYsR0FBV0MsQ0FBWCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHQgPSByZXF1aXJlO1xudmFyIGUgPSBtb2R1bGU7XG52YXIgbyA9IGV4cG9ydHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogITBcbn0pLFxuby5Mb2dNZ3IgPSB2b2lkIDA7XG52YXIgYSA9IGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7fVxuICAgIHJldHVybiB0LmdldEluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IHRoaXMuaW5zdGFuY2UgJiYgKHRoaXMuaW5zdGFuY2UgPSBuZXcgdCksXG4gICAgICAgIHRoaXMuaW5zdGFuY2VcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24oKSB7fSxcbiAgICB0LnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0LCBlKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodCwgZSlcbiAgICB9LFxuICAgIHQuaW5zdGFuY2UgPSBudWxsLFxuICAgIHRcbn0gKCk7XG5vLkxvZ01nciA9IGEiXX0=