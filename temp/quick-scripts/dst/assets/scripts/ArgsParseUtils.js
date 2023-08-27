
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ArgsParseUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14743rQ6f9BObX51QcWz3Un', 'ArgsParseUtils');
// scripts/ArgsParseUtils.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ArgsParseUtils = void 0;

var a = function () {
  function t() {}

  return t._makeLoadResArgs = function () {
    if (arguments.length < 1 || "string" != typeof arguments[0]) return console.error("_makeLoadResArgs error " + arguments), null;

    for (var t = {
      bundle: arguments[0],
      path: arguments[1],
      type: arguments[2],
      callback: arguments[3],
      autoRelese: !1,
      cacheTme: 10,
      saveKey: null
    }, e = 4; e < arguments.length; ++e) {
      4 == e && "boolean" == typeof arguments[e] && (t.autoRelese = arguments[e]), 5 == e && "number" == typeof arguments[e] ? t.cacheTme = arguments[e] : e == arguments.length - 1 && "string" == typeof arguments[e] && (t.saveKey = arguments[e]);
    }

    return t;
  }, t._makeloadSpriteFrameResrgs = function () {
    if (arguments.length < 1 || "string" != typeof arguments[0]) return console.error("_makeloadSpriteFrameResrgs error " + arguments), null;

    for (var t = {
      bundle: arguments[0],
      path: arguments[1],
      callback: arguments[2],
      autoRelese: !1,
      cacheTme: 10,
      saveKey: null
    }, e = 3; e < arguments.length; ++e) {
      3 == e && "boolean" == typeof arguments[e] && (t.autoRelese = arguments[e]), 4 == e && "number" == typeof arguments[e] ? t.cacheTme = arguments[e] : e == arguments.length - 1 && "string" == typeof arguments[e] && (t.saveKey = arguments[e]);
    }

    return t;
  }, t;
}();

o.ArgsParseUtils = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXJnc1BhcnNlVXRpbHMuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQXJnc1BhcnNlVXRpbHMiLCJhIiwiX21ha2VMb2FkUmVzQXJncyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsImJ1bmRsZSIsInBhdGgiLCJ0eXBlIiwiY2FsbGJhY2siLCJhdXRvUmVsZXNlIiwiY2FjaGVUbWUiLCJzYXZlS2V5IiwiX21ha2Vsb2FkU3ByaXRlRnJhbWVSZXNyZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNJLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDLEdBR0FKLENBQUMsQ0FBQ0ssY0FBRixHQUFtQixLQUFLLENBSHhCOztBQUlBLElBQUlDLENBQUMsR0FBRyxZQUFXO0VBQ2YsU0FBU1YsQ0FBVCxHQUFhLENBQUU7O0VBQ2YsT0FBT0EsQ0FBQyxDQUFDVyxnQkFBRixHQUFxQixZQUFXO0lBQ25DLElBQUlDLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixDQUFuQixJQUF3QixZQUFZLE9BQU9ELFNBQVMsQ0FBQyxDQUFELENBQXhELEVBQTZELE9BQU9FLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLDRCQUE0QkgsU0FBMUMsR0FDcEUsSUFENkQ7O0lBRTdELEtBQUssSUFBSVosQ0FBQyxHQUFHO01BQ1RnQixNQUFNLEVBQUVKLFNBQVMsQ0FBQyxDQUFELENBRFI7TUFFVEssSUFBSSxFQUFFTCxTQUFTLENBQUMsQ0FBRCxDQUZOO01BR1RNLElBQUksRUFBRU4sU0FBUyxDQUFDLENBQUQsQ0FITjtNQUlUTyxRQUFRLEVBQUVQLFNBQVMsQ0FBQyxDQUFELENBSlY7TUFLVFEsVUFBVSxFQUFFLENBQUMsQ0FMSjtNQU1UQyxRQUFRLEVBQUUsRUFORDtNQU9UQyxPQUFPLEVBQUU7SUFQQSxDQUFSLEVBU0xwQixDQUFDLEdBQUcsQ0FUSixFQVNPQSxDQUFDLEdBQUdVLFNBQVMsQ0FBQ0MsTUFUckIsRUFTNkIsRUFBRVgsQ0FUL0I7TUFTa0MsS0FBS0EsQ0FBTCxJQUFVLGFBQWEsT0FBT1UsU0FBUyxDQUFDVixDQUFELENBQXZDLEtBQStDRixDQUFDLENBQUNvQixVQUFGLEdBQWVSLFNBQVMsQ0FBQ1YsQ0FBRCxDQUF2RSxHQUNsQyxLQUFLQSxDQUFMLElBQVUsWUFBWSxPQUFPVSxTQUFTLENBQUNWLENBQUQsQ0FBdEMsR0FBNENGLENBQUMsQ0FBQ3FCLFFBQUYsR0FBYVQsU0FBUyxDQUFDVixDQUFELENBQWxFLEdBQXdFQSxDQUFDLElBQUlVLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixDQUF4QixJQUE2QixZQUFZLE9BQU9ELFNBQVMsQ0FBQ1YsQ0FBRCxDQUF6RCxLQUFpRUYsQ0FBQyxDQUFDc0IsT0FBRixHQUFZVixTQUFTLENBQUNWLENBQUQsQ0FBdEYsQ0FEdEM7SUFUbEM7O0lBV0EsT0FBT0YsQ0FBUDtFQUNILENBZk0sRUFnQlBBLENBQUMsQ0FBQ3VCLDBCQUFGLEdBQStCLFlBQVc7SUFDdEMsSUFBSVgsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLENBQW5CLElBQXdCLFlBQVksT0FBT0QsU0FBUyxDQUFDLENBQUQsQ0FBeEQsRUFBNkQsT0FBT0UsT0FBTyxDQUFDQyxLQUFSLENBQWMsc0NBQXNDSCxTQUFwRCxHQUNwRSxJQUQ2RDs7SUFFN0QsS0FBSyxJQUFJWixDQUFDLEdBQUc7TUFDVGdCLE1BQU0sRUFBRUosU0FBUyxDQUFDLENBQUQsQ0FEUjtNQUVUSyxJQUFJLEVBQUVMLFNBQVMsQ0FBQyxDQUFELENBRk47TUFHVE8sUUFBUSxFQUFFUCxTQUFTLENBQUMsQ0FBRCxDQUhWO01BSVRRLFVBQVUsRUFBRSxDQUFDLENBSko7TUFLVEMsUUFBUSxFQUFFLEVBTEQ7TUFNVEMsT0FBTyxFQUFFO0lBTkEsQ0FBUixFQVFMcEIsQ0FBQyxHQUFHLENBUkosRUFRT0EsQ0FBQyxHQUFHVSxTQUFTLENBQUNDLE1BUnJCLEVBUTZCLEVBQUVYLENBUi9CO01BUWtDLEtBQUtBLENBQUwsSUFBVSxhQUFhLE9BQU9VLFNBQVMsQ0FBQ1YsQ0FBRCxDQUF2QyxLQUErQ0YsQ0FBQyxDQUFDb0IsVUFBRixHQUFlUixTQUFTLENBQUNWLENBQUQsQ0FBdkUsR0FDbEMsS0FBS0EsQ0FBTCxJQUFVLFlBQVksT0FBT1UsU0FBUyxDQUFDVixDQUFELENBQXRDLEdBQTRDRixDQUFDLENBQUNxQixRQUFGLEdBQWFULFNBQVMsQ0FBQ1YsQ0FBRCxDQUFsRSxHQUF3RUEsQ0FBQyxJQUFJVSxTQUFTLENBQUNDLE1BQVYsR0FBbUIsQ0FBeEIsSUFBNkIsWUFBWSxPQUFPRCxTQUFTLENBQUNWLENBQUQsQ0FBekQsS0FBaUVGLENBQUMsQ0FBQ3NCLE9BQUYsR0FBWVYsU0FBUyxDQUFDVixDQUFELENBQXRGLENBRHRDO0lBUmxDOztJQVVBLE9BQU9GLENBQVA7RUFDSCxDQTlCTSxFQStCUEEsQ0EvQkE7QUFnQ0gsQ0FsQ08sRUFBUjs7QUFtQ0FJLENBQUMsQ0FBQ0ssY0FBRixHQUFtQkMsQ0FBbkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KSxcbm8uQXJnc1BhcnNlVXRpbHMgPSB2b2lkIDA7XG52YXIgYSA9IGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7fVxuICAgIHJldHVybiB0Ll9tYWtlTG9hZFJlc0FyZ3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IFwic3RyaW5nXCIgIT0gdHlwZW9mIGFyZ3VtZW50c1swXSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJfbWFrZUxvYWRSZXNBcmdzIGVycm9yIFwiICsgYXJndW1lbnRzKSxcbiAgICAgICAgbnVsbDtcbiAgICAgICAgZm9yICh2YXIgdCA9IHtcbiAgICAgICAgICAgIGJ1bmRsZTogYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgcGF0aDogYXJndW1lbnRzWzFdLFxuICAgICAgICAgICAgdHlwZTogYXJndW1lbnRzWzJdLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGFyZ3VtZW50c1szXSxcbiAgICAgICAgICAgIGF1dG9SZWxlc2U6ICExLFxuICAgICAgICAgICAgY2FjaGVUbWU6IDEwLFxuICAgICAgICAgICAgc2F2ZUtleTogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBlID0gNDsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsrZSkgNCA9PSBlICYmIFwiYm9vbGVhblwiID09IHR5cGVvZiBhcmd1bWVudHNbZV0gJiYgKHQuYXV0b1JlbGVzZSA9IGFyZ3VtZW50c1tlXSksXG4gICAgICAgIDUgPT0gZSAmJiBcIm51bWJlclwiID09IHR5cGVvZiBhcmd1bWVudHNbZV0gPyB0LmNhY2hlVG1lID0gYXJndW1lbnRzW2VdIDogZSA9PSBhcmd1bWVudHMubGVuZ3RoIC0gMSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBhcmd1bWVudHNbZV0gJiYgKHQuc2F2ZUtleSA9IGFyZ3VtZW50c1tlXSk7XG4gICAgICAgIHJldHVybiB0XG4gICAgfSxcbiAgICB0Ll9tYWtlbG9hZFNwcml0ZUZyYW1lUmVzcmdzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCBcInN0cmluZ1wiICE9IHR5cGVvZiBhcmd1bWVudHNbMF0pIHJldHVybiBjb25zb2xlLmVycm9yKFwiX21ha2Vsb2FkU3ByaXRlRnJhbWVSZXNyZ3MgZXJyb3IgXCIgKyBhcmd1bWVudHMpLFxuICAgICAgICBudWxsO1xuICAgICAgICBmb3IgKHZhciB0ID0ge1xuICAgICAgICAgICAgYnVuZGxlOiBhcmd1bWVudHNbMF0sXG4gICAgICAgICAgICBwYXRoOiBhcmd1bWVudHNbMV0sXG4gICAgICAgICAgICBjYWxsYmFjazogYXJndW1lbnRzWzJdLFxuICAgICAgICAgICAgYXV0b1JlbGVzZTogITEsXG4gICAgICAgICAgICBjYWNoZVRtZTogMTAsXG4gICAgICAgICAgICBzYXZlS2V5OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGUgPSAzOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgKytlKSAzID09IGUgJiYgXCJib29sZWFuXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1tlXSAmJiAodC5hdXRvUmVsZXNlID0gYXJndW1lbnRzW2VdKSxcbiAgICAgICAgNCA9PSBlICYmIFwibnVtYmVyXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1tlXSA/IHQuY2FjaGVUbWUgPSBhcmd1bWVudHNbZV0gOiBlID09IGFyZ3VtZW50cy5sZW5ndGggLSAxICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1tlXSAmJiAodC5zYXZlS2V5ID0gYXJndW1lbnRzW2VdKTtcbiAgICAgICAgcmV0dXJuIHRcbiAgICB9LFxuICAgIHRcbn0gKCk7XG5vLkFyZ3NQYXJzZVV0aWxzID0gYSJdfQ==