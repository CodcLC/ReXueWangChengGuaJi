
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LabelPlus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80a9cOuqOFHQLCOKoZabFcU', 'LabelPlus');
// scripts/LabelPlus.js

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
}),
    r = void 0 && (void 0).__decorate || function (t, e, o, a) {
  var i,
      r = arguments.length,
      n = r < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, a);else for (var s = t.length - 1; s >= 0; s--) {
    (i = t[s]) && (n = (r < 3 ? i(n) : r > 3 ? i(e, o, n) : i(e, o)) || n);
  }
  return r > 3 && n && Object.defineProperty(e, o, n), n;
};

Object.defineProperty(o, "__esModule", {
  value: !0
});
var n = cc._decorator,
    s = n.ccclass,
    c = (n.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return i(e, t), e.prototype.start = function () {}, r([s], e);
}(cc.Label));
o["default"] = c;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTGFiZWxQbHVzLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiYSIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJyIiwiX19kZWNvcmF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm4iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJjIiwicHJvcGVydHkiLCJhcHBseSIsInN0YXJ0IiwiTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSOztBQUNBLElBQUlDLEVBQUo7QUFBQSxJQUFPQyxDQUFDLEdBQUcsVUFBUSxTQUFLQyxTQUFiLEtBQTJCRixFQUFDLEdBQUcsV0FBU04sQ0FBVCxFQUFZRSxDQUFaLEVBQWU7RUFDckQsT0FBTyxDQUFDSSxFQUFDLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBUCxJQUF5QjtJQUNqQ0MsU0FBUyxFQUFFO0VBRHNCLGFBRzFCQyxLQUgwQixJQUlyQyxVQUFTWixDQUFULEVBQVlFLENBQVosRUFBZTtJQUNYRixDQUFDLENBQUNXLFNBQUYsR0FBY1QsQ0FBZDtFQUNILENBTlcsSUFPWixVQUFTRixDQUFULEVBQVlFLENBQVosRUFBZTtJQUNYLEtBQUssSUFBSUUsQ0FBVCxJQUFjRixDQUFkO01BQWlCTyxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFo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QUFDLENBQUMsQ0FBQ1EsQ0FBRCxDQUFELEVBQU14QixDQUFOLENBRkQ7QUFHSCxDQVBELENBT0cyQixFQUFFLENBQUNPLEtBUE4sQ0FEQyxDQUZEO0FBV0FoQyxDQUFDLFdBQUQsR0FBWTRCLENBQVoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xudmFyIGEsIGkgPSB0aGlzICYmIHRoaXMuX19leHRlbmRzIHx8IChhID0gZnVuY3Rpb24odCwgZSkge1xuICAgIHJldHVybiAoYSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCB7XG4gICAgICAgIF9fcHJvdG9fXzogW11cbiAgICB9XG4gICAgaW5zdGFuY2VvZiBBcnJheSAmJlxuICAgIGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdC5fX3Byb3RvX18gPSBlXG4gICAgfSB8fFxuICAgIGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZm9yICh2YXIgbyBpbiBlKSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgbykgJiYgKHRbb10gPSBlW29dKVxuICAgIH0pKHQsIGUpXG59LFxuZnVuY3Rpb24odCwgZSkge1xuICAgIGZ1bmN0aW9uIG8oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSB0XG4gICAgfVxuICAgIGEodCwgZSksXG4gICAgdC5wcm90b3R5cGUgPSBudWxsID09PSBlID8gT2JqZWN0LmNyZWF0ZShlKSA6IChvLnByb3RvdHlwZSA9IGUucHJvdG90eXBlLCBuZXcgbylcbn0pLFxuciA9IHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlIHx8XG5mdW5jdGlvbih0LCBlLCBvLCBhKSB7XG4gICAgdmFyIGksIHIgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIG4gPSByIDwgMyA/IGU6IG51bGwgPT09IGEgPyBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCBvKSA6IGE7XG4gICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIFJlZmxlY3QgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKSBuID0gUmVmbGVjdC5kZWNvcmF0ZSh0LCBlLCBvLCBhKTtcbiAgICBlbHNlIGZvciAodmFyIHMgPSB0Lmxlbmd0aCAtIDE7IHMgPj0gMDsgcy0tKShpID0gdFtzXSkgJiYgKG4gPSAociA8IDMgPyBpKG4pIDogciA+IDMgPyBpKGUsIG8sIG4pIDogaShlLCBvKSkgfHwgbik7XG4gICAgcmV0dXJuIHIgPiAzICYmIG4gJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIG8sIG4pLFxuICAgIG5cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogITBcbn0pO1xudmFyIG4gPSBjYy5fZGVjb3JhdG9yLFxucyA9IG4uY2NjbGFzcyxcbmMgPSAobi5wcm9wZXJ0eSxcbmZ1bmN0aW9uKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICByZXR1cm4gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpc1xuICAgIH1cbiAgICByZXR1cm4gaShlLCB0KSxcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge30sXG4gICAgcihbc10sIGUpXG59IChjYy5MYWJlbCkpO1xuby5kZWZhdWx0ID0gYyJdfQ==