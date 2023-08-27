
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UIRealName.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d040n8tzZCQ6+770ZYUet3', 'UIRealName');
// scripts/UIRealName.js

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

var n = t("BaseUI"),
    s = t("CardMgr"),
    c = cc._decorator,
    l = c.ccclass,
    u = c.property,
    p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.IDname = null, e.IDcard = null, e.btnStart = null, e;
  }

  return i(e, t), e.prototype.init = function (t) {
    this.cb = t;
  }, e.prototype.start = function () {
    var t = this;
    this.btnStart.on(cc.Node.EventType.TOUCH_END, function () {
      s["default"].getInstance().vifyCardId(t.IDname.string, t.IDcard.string, function (e) {
        e && (t.closeUI(), t.cb && t.cb());
      });
    });
  }, r([u(cc.EditBox)], e.prototype, "IDname", void 0), r([u(cc.EditBox)], e.prototype, "IDcard", void 0), r([u(cc.Node)], e.prototype, "btnStart", void 0), r([l], e);
}(n["default"]);

o["default"] = p;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlSZWFsTmFtZS5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsImEiLCJpIiwiX19leHRlbmRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiciIsIl9fZGVjb3JhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwibCIsImNjY2xhc3MiLCJ1IiwicHJvcGVydHkiLCJwIiwiYXBwbHkiLCJJRG5hbWUiLCJJRGNhcmQiLCJidG5TdGFydCIsImluaXQiLCJjYiIsInN0YXJ0Iiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiZ2V0SW5zdGFuY2UiLCJ2aWZ5Q2FyZElkIiwic3RyaW5nIiwiY2xvc2VVSSIsIkVkaXRCb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSOztBQUNBLElBQUlDLEVBQUo7QUFBQSxJQUFPQyxDQUFDLEdBQUcsVUFBUSxTQUFLQyxTQUFiLEtBQTJCRixFQUFDLEdBQUcsV0FBU04sQ0FBVCxFQUFZRSxDQUFaLEVBQWU7RUFDckQsT0FBTyxDQUFDSSxFQUFDLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBUCxJQUF5QjtJQUNqQ0MsU0FBUyxFQUFFO0VBRHNCLGFBRzFCQyxLQUgwQixJQUlyQyxVQUFTWixDQUFULEVBQVlFLENBQVosRUFBZTtJQUNYRixDQUFDLENBQUNXLFNBQUYsR0FBY1QsQ0FBZDtFQUNILENBTlcsSUFPWixVQUFTRixDQUFULEVBQVlFLENBQVosRUFBZTtJQUNYLEtBQUssSUFBSUUsQ0FBVCxJQUFjRixDQUFkO01BQWlCTyxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ2IsQ0FBckMsRUFBd0NFLENBQXhDLE1BQStDSixDQUFDLENBQUNJLENBQUQsQ0FBRCxHQUFPRixDQUFDLENBQUNFLENBQUQsQ0FBdkQ7SUFBakI7RUFDSCxDQVRNLEVBU0pKLENBVEksRUFTREUsQ0FUQyxDQUFQO0FBVUgsQ0FYcUMsRUFZdEMsVUFBU0YsQ0FBVCxFQUFZRSxDQUFaLEVBQWU7RUFDWCxTQUFTRSxDQUFULEdBQWE7SUFDVCxLQUFLWSxXQUFMLEdBQW1CaEIsQ0FBbkI7RUFDSDs7RUFDRE0sRUFBQyxDQUFDTixDQUFELEVBQUlFLENBQUosQ0FBRCxFQUNBRixDQUFDLENBQUNhLFNBQUYsR0FBYyxTQUFTWCxDQUFULEdBQWFPLE1BQU0sQ0FBQ1EsTUFBUCxDQUFjZixDQUFkLENBQWIsSUFBaUNFLENBQUMsQ0FBQ1MsU0FBRixHQUFjWCxDQUFDLENBQUNXLFNBQWhCLEVBQTJCLElBQUlULENBQUosRUFBNUQsQ0FEZDtBQUVILENBbEJVLENBQVg7QUFBQSxJQW1CQWMsQ0FBQyxHQUFHLFVBQVEsU0FBS0MsVUFBYixJQUNKLFVBQVNuQixDQUFULEVBQVlFLENBQVosRUFBZUUsQ0FBZixFQUFrQkUsQ0FBbEIsRUFBcUI7RUFDakIsSUFBSUMsQ0FBSjtFQUFBLElBQU9XLENBQUMsR0FBR0UsU0FBUyxDQUFDQyxNQUFyQjtFQUFBLElBQ0FDLENBQUMsR0FBR0osQ0FBQyxHQUFHLENBQUosR0FBUWhCLENBQVIsR0FBVyxTQUFTSSxDQUFULEdBQWFBLENBQUMsR0FBR0csTUFBTSxDQUFDYyx3QkFBUCxDQUFnQ3JCLENBQWhDLEVBQW1DRSxDQUFuQyxDQUFqQixHQUF5REUsQ0FEeEU7RUFFQSxJQUFJLFlBQVksT0FBT2tCLE9BQW5CLElBQThCLGNBQWMsT0FBT0EsT0FBTyxDQUFDQyxRQUEvRCxFQUF5RUgsQ0FBQyxHQUFHRSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJ6QixDQUFqQixFQUFvQkUsQ0FBcEIsRUFBdUJFLENBQXZCLEVBQTBCRSxDQUExQixDQUFKLENBQXpFLEtBQ0ssS0FBSyxJQUFJb0IsQ0FBQyxHQUFHMUIsQ0FBQyxDQUFDcUIsTUFBRixHQUFXLENBQXhCLEVBQTJCSyxDQUFDLElBQUksQ0FBaEMsRUFBbUNBLENBQUMsRUFBcEM7SUFBdUMsQ0FBQ25CLENBQUMsR0FBR1AsQ0FBQyxDQUFDMEIsQ0FBRCxDQUFOLE1BQWVKLENBQUMsR0FBRyxDQUFDSixDQUFDLEdBQUcsQ0FBSixHQUFRWCxDQUFDLENBQUNlLENBQUQsQ0FBVCxHQUFlSixDQUFDLEdBQUcsQ0FBSixHQUFRWCxDQUFDLENBQUNMLENBQUQsRUFBSUUsQ0FBSixFQUFPa0IsQ0FBUCxDQUFULEdBQXFCZixDQUFDLENBQUNMLENBQUQsRUFBSUUsQ0FBSixDQUF0QyxLQUFpRGtCLENBQXBFO0VBQXZDO0VBQ0wsT0FBT0osQ0FBQyxHQUFHLENBQUosSUFBU0ksQ0FBVCxJQUFjYixNQUFNLENBQUNrQixjQUFQLENBQXNCekIsQ0FBdEIsRUFBeUJFLENBQXpCLEVBQTRCa0IsQ0FBNUIsQ0FBZCxFQUNQQSxDQURBO0FBRUgsQ0EzQkQ7O0FBNEJBYixNQUFNLENBQUNrQixjQUFQLENBQXNCdkIsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkN3QixLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2Qzs7QUFHQSxJQUFJTixDQUFDLEdBQUd0QixDQUFDLENBQUMsUUFBRCxDQUFUO0FBQUEsSUFDQTBCLENBQUMsR0FBRzFCLENBQUMsQ0FBQyxTQUFELENBREw7QUFBQSxJQUVBNkIsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBRlA7QUFBQSxJQUdBQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FITjtBQUFBLElBSUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUpOO0FBQUEsSUFLQUMsQ0FBQyxHQUFHLFVBQVNwQyxDQUFULEVBQVk7RUFDWixTQUFTRSxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUcsU0FBU0YsQ0FBVCxJQUFjQSxDQUFDLENBQUNxQyxLQUFGLENBQVEsSUFBUixFQUFjakIsU0FBZCxDQUFkLElBQTBDLElBQWxEO0lBQ0EsT0FBT2xCLENBQUMsQ0FBQ29DLE1BQUYsR0FBVyxJQUFYLEVBQ1BwQyxDQUFDLENBQUNxQyxNQUFGLEdBQVcsSUFESixFQUVQckMsQ0FBQyxDQUFDc0MsUUFBRixHQUFhLElBRk4sRUFHUHRDLENBSEE7RUFJSDs7RUFDRCxPQUFPSyxDQUFDLENBQUNMLENBQUQsRUFBSUYsQ0FBSixDQUFELEVBQ1BFLENBQUMsQ0FBQ1csU0FBRixDQUFZNEIsSUFBWixHQUFtQixVQUFTekMsQ0FBVCxFQUFZO0lBQzNCLEtBQUswQyxFQUFMLEdBQVUxQyxDQUFWO0VBQ0gsQ0FITSxFQUlQRSxDQUFDLENBQUNXLFNBQUYsQ0FBWThCLEtBQVosR0FBb0IsWUFBVztJQUMzQixJQUFJM0MsQ0FBQyxHQUFHLElBQVI7SUFDQSxLQUFLd0MsUUFBTCxDQUFjSSxFQUFkLENBQWlCZCxFQUFFLENBQUNlLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsU0FBbkMsRUFDQSxZQUFXO01BQ1ByQixDQUFDLFdBQUQsQ0FBVXNCLFdBQVYsR0FBd0JDLFVBQXhCLENBQW1DakQsQ0FBQyxDQUFDc0MsTUFBRixDQUFTWSxNQUE1QyxFQUFvRGxELENBQUMsQ0FBQ3VDLE1BQUYsQ0FBU1csTUFBN0QsRUFDQSxVQUFTaEQsQ0FBVCxFQUFZO1FBQ1JBLENBQUMsS0FBS0YsQ0FBQyxDQUFDbUQsT0FBRixJQUFhbkQsQ0FBQyxDQUFDMEMsRUFBRixJQUFRMUMsQ0FBQyxDQUFDMEMsRUFBRixFQUExQixDQUFEO01BQ0gsQ0FIRDtJQUlILENBTkQ7RUFPSCxDQWJNLEVBY1B4QixDQUFDLENBQUMsQ0FBQ2dCLENBQUMsQ0FBQ0osRUFBRSxDQUFDc0IsT0FBSixDQUFGLENBQUQsRUFBa0JsRCxDQUFDLENBQUNXLFNBQXBCLEVBQStCLFFBQS9CLEVBQXlDLEtBQUssQ0FBOUMsQ0FkTSxFQWVQSyxDQUFDLENBQUMsQ0FBQ2dCLENBQUMsQ0FBQ0osRUFBRSxDQUFDc0IsT0FBSixDQUFGLENBQUQsRUFBa0JsRCxDQUFDLENBQUNXLFNBQXBCLEVBQStCLFFBQS9CLEVBQXlDLEtBQUssQ0FBOUMsQ0FmTSxFQWdCUEssQ0FBQyxDQUFDLENBQUNnQixDQUFDLENBQUNKLEVBQUUsQ0FBQ2UsSUFBSixDQUFGLENBQUQsRUFBZTNDLENBQUMsQ0FBQ1csU0FBakIsRUFBNEIsVUFBNUIsRUFBd0MsS0FBSyxDQUE3QyxDQWhCTSxFQWlCUEssQ0FBQyxDQUFDLENBQUNjLENBQUQsQ0FBRCxFQUFNOUIsQ0FBTixDQWpCRDtBQWtCSCxDQTFCRyxDQTBCRG9CLENBQUMsV0ExQkEsQ0FMSjs7QUFnQ0FsQixDQUFDLFdBQUQsR0FBWWdDLENBQVoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xudmFyIGEsIGkgPSB0aGlzICYmIHRoaXMuX19leHRlbmRzIHx8IChhID0gZnVuY3Rpb24odCwgZSkge1xuICAgIHJldHVybiAoYSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCB7XG4gICAgICAgIF9fcHJvdG9fXzogW11cbiAgICB9XG4gICAgaW5zdGFuY2VvZiBBcnJheSAmJlxuICAgIGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdC5fX3Byb3RvX18gPSBlXG4gICAgfSB8fFxuICAgIGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZm9yICh2YXIgbyBpbiBlKSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgbykgJiYgKHRbb10gPSBlW29dKVxuICAgIH0pKHQsIGUpXG59LFxuZnVuY3Rpb24odCwgZSkge1xuICAgIGZ1bmN0aW9uIG8oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSB0XG4gICAgfVxuICAgIGEodCwgZSksXG4gICAgdC5wcm90b3R5cGUgPSBudWxsID09PSBlID8gT2JqZWN0LmNyZWF0ZShlKSA6IChvLnByb3RvdHlwZSA9IGUucHJvdG90eXBlLCBuZXcgbylcbn0pLFxuciA9IHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlIHx8XG5mdW5jdGlvbih0LCBlLCBvLCBhKSB7XG4gICAgdmFyIGksIHIgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIG4gPSByIDwgMyA/IGU6IG51bGwgPT09IGEgPyBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCBvKSA6IGE7XG4gICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIFJlZmxlY3QgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKSBuID0gUmVmbGVjdC5kZWNvcmF0ZSh0LCBlLCBvLCBhKTtcbiAgICBlbHNlIGZvciAodmFyIHMgPSB0Lmxlbmd0aCAtIDE7IHMgPj0gMDsgcy0tKShpID0gdFtzXSkgJiYgKG4gPSAociA8IDMgPyBpKG4pIDogciA+IDMgPyBpKGUsIG8sIG4pIDogaShlLCBvKSkgfHwgbik7XG4gICAgcmV0dXJuIHIgPiAzICYmIG4gJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIG8sIG4pLFxuICAgIG5cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogITBcbn0pO1xudmFyIG4gPSB0KFwiQmFzZVVJXCIpLFxucyA9IHQoXCJDYXJkTWdyXCIpLFxuYyA9IGNjLl9kZWNvcmF0b3IsXG5sID0gYy5jY2NsYXNzLFxudSA9IGMucHJvcGVydHksXG5wID0gZnVuY3Rpb24odCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gbnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgcmV0dXJuIGUuSURuYW1lID0gbnVsbCxcbiAgICAgICAgZS5JRGNhcmQgPSBudWxsLFxuICAgICAgICBlLmJ0blN0YXJ0ID0gbnVsbCxcbiAgICAgICAgZVxuICAgIH1cbiAgICByZXR1cm4gaShlLCB0KSxcbiAgICBlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLmNiID0gdFxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLmJ0blN0YXJ0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS52aWZ5Q2FyZElkKHQuSURuYW1lLnN0cmluZywgdC5JRGNhcmQuc3RyaW5nLFxuICAgICAgICAgICAgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUgJiYgKHQuY2xvc2VVSSgpLCB0LmNiICYmIHQuY2IoKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICByKFt1KGNjLkVkaXRCb3gpXSwgZS5wcm90b3R5cGUsIFwiSURuYW1lXCIsIHZvaWQgMCksXG4gICAgcihbdShjYy5FZGl0Qm94KV0sIGUucHJvdG90eXBlLCBcIklEY2FyZFwiLCB2b2lkIDApLFxuICAgIHIoW3UoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJidG5TdGFydFwiLCB2b2lkIDApLFxuICAgIHIoW2xdLCBlKVxufSAobi5kZWZhdWx0KTtcbm8uZGVmYXVsdCA9IHAiXX0=