
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/NodeSkill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '914acdlsm9PY7vjV192X/xM', 'NodeSkill');
// scripts/NodeSkill.js

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
var n = t("UIMgr"),
    s = t("Config"),
    c = cc._decorator,
    l = c.ccclass,
    u = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.skillId = -1, e;
  }

  return i(e, t), e.prototype.onLoad = function () {}, e.prototype.start = function () {}, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.node.on(cc.Node.EventType.TOUCH_END, function () {
      n.UIMgr.getInstance().openUI(s.UIID.UISkillInfo, -1, t.skillId);
    });
  }, e.prototype.initData = function (t) {
    this.skillId = t, this.registerBtnEvent();
  }, r([l], e);
}(cc.Component));
o["default"] = u;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTm9kZVNraWxsLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiYSIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJyIiwiX19kZWNvcmF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm4iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJsIiwiY2NjbGFzcyIsInUiLCJwcm9wZXJ0eSIsImFwcGx5Iiwic2tpbGxJZCIsIm9uTG9hZCIsInN0YXJ0IiwicmVnaXN0ZXJCdG5FdmVudCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJVSU1nciIsImdldEluc3RhbmNlIiwib3BlblVJIiwiVUlJRCIsIlVJU2tpbGxJbmZvIiwiaW5pdERhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSOztBQUNBLElBQUlDLEVBQUo7QUFBQSxJQUFPQyxDQUFDLEdBQUcsVUFBUSxTQUFLQyxTQUFiLEtBQTJCRixFQUFDLEdBQUcsV0FBU04sQ0FBVCxFQUFZRSxDQUFaLEVBQWU7RUFDckQsT0FBTyxDQUFDSSxFQUFDLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBUCxJQUF5QjtJQUNqQ0MsU0FBUyxFQUFFO0VBRHNCLGFBRzFCQyxLQUgwQixJQUlyQyxVQUFTWixDQUFULEVBQVlFLENBQVosRUFBZTtJQUNYRixDQUFDLENBQUNXLFNBQUYsR0FBY1QsQ0FBZDtFQUNILENBTlcsSUFPWixVQUFTRixDQUFULEVBQVlFLENBQVosRUFBZTtJQUNYLEtBQUssSUFBSUUsQ0FBVCxJQUFjRixDQUFkO01BQWlCTyxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ2IsQ0FBckMsRUFBd0NFLENBQXhDLE1BQStDSixDQUFDLENBQUNJLENBQUQsQ0FBRCxHQUFPRixDQUFDLENBQUNFLENBQUQsQ0FBdkQ7SUFBakI7RUFDSCxDQVRNLEVBU0pKLENBVEksRUFTREUsQ0FUQyxDQUFQO0FBVUgsQ0FYcUMsRUFZdEMsVUFBU0YsQ0FBVCxFQUFZRSxDQUFaLEVBQWU7RUFDWCxTQUFTRSxDQUFULEdBQWE7SUFDVCxLQUFLWSxXQUFMLEdBQW1CaEIsQ0FBbkI7RUFDSDs7RUFDRE0sRUFBQyxDQUFDTixDQUFELEVBQUlFLENBQUosQ0FBRCxFQUNBRixDQUFDLENBQUNhLFNBQUYsR0FBYyxTQUFTWCxDQUFULEdBQWFPLE1BQU0sQ0FBQ1EsTUFBUCxDQUFjZixDQUFkLENBQWIsSUFBaUNFLENBQUMsQ0FBQ1MsU0FBRixHQUFjWCxDQUFDLENBQUNXLFNBQWhCLEVBQTJCLElBQUlULENBQUosRUFBNUQsQ0FEZDtBQUVILENBbEJVLENBQVg7QUFBQSxJQW1CQWMsQ0FBQyxHQUFHLFVBQVEsU0FBS0MsVUFBYixJQUNKLFVBQVNuQixDQUFULEVBQVlFLENBQVosRUFBZUUsQ0FBZixFQUFrQkUsQ0FBbEIsRUFBcUI7RUFDakIsSUFBSUMsQ0FBSjtFQUFBLElBQU9XLENBQUMsR0FBR0UsU0FBUyxDQUFDQyxNQUFyQjtFQUFBLElBQ0FDLENBQUMsR0FBR0osQ0FBQyxHQUFHLENBQUosR0FBUWhCLENBQVIsR0FBVyxTQUFTSSxDQUFULEdBQWFBLENBQUMsR0FBR0csTUFBTSxDQUFDYyx3QkFBUCxDQUFnQ3JCLENBQWhDLEVBQW1DRSxDQUFuQyxDQUFqQixHQUF5REUsQ0FEeEU7RUFFQSxJQUFJLFlBQVksT0FBT2tCLE9BQW5CLElBQThCLGNBQWMsT0FBT0EsT0FBTyxDQUFDQyxRQUEvRCxFQUF5RUgsQ0FBQyxHQUFHRSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJ6QixDQUFqQixFQUFvQkUsQ0FBcEIsRUFBdUJFLENBQXZCLEVBQTBCRSxDQUExQixDQUFKLENBQXpFLEtBQ0ssS0FBSyxJQUFJb0IsQ0FBQyxHQUFHMUIsQ0FBQyxDQUFDcUIsTUFBRixHQUFXLENBQXhCLEVBQTJCSyxDQUFDLElBQUksQ0FBaEMsRUFBbUNBLENBQUMsRUFBcEM7SUFBdUMsQ0FBQ25CLENBQUMsR0FBR1AsQ0FBQyxDQUFDMEIsQ0FBRCxDQUFOLE1BQWVKLENBQUMsR0FBRyxDQUFDSixDQUFDLEdBQUcsQ0FBSixHQUFRWCxDQUFDLENBQUNlLENBQUQsQ0FBVCxHQUFlSixDQUFDLEdBQUcsQ0FBSixHQUFRWCxDQUFDLENBQUNMLENBQUQsRUFBSUUsQ0FBSixFQUFPa0IsQ0FBUCxDQUFULEdBQXFCZixDQUFDLENBQUNMLENBQUQsRUFBSUUsQ0FBSixDQUF0QyxLQUFpRGtCLENBQXBFO0VBQXZDO0VBQ0wsT0FBT0osQ0FBQyxHQUFHLENBQUosSUFBU0ksQ0FBVCxJQUFjYixNQUFNLENBQUNrQixjQUFQLENBQXNCekIsQ0FBdEIsRUFBeUJFLENBQXpCLEVBQTRCa0IsQ0FBNUIsQ0FBZCxFQUNQQSxDQURBO0FBRUgsQ0EzQkQ7O0FBNEJBYixNQUFNLENBQUNrQixjQUFQLENBQXNCdkIsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkN3QixLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2QztBQUdBLElBQUlOLENBQUMsR0FBR3RCLENBQUMsQ0FBQyxPQUFELENBQVQ7QUFBQSxJQUNBMEIsQ0FBQyxHQUFHMUIsQ0FBQyxDQUFDLFFBQUQsQ0FETDtBQUFBLElBRUE2QixDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFGUDtBQUFBLElBR0FDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUhOO0FBQUEsSUFJQUMsQ0FBQyxJQUFJTCxDQUFDLENBQUNNLFFBQUYsRUFDTCxVQUFTbkMsQ0FBVCxFQUFZO0VBQ1IsU0FBU0UsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFHLFNBQVNGLENBQVQsSUFBY0EsQ0FBQyxDQUFDb0MsS0FBRixDQUFRLElBQVIsRUFBY2hCLFNBQWQsQ0FBZCxJQUEwQyxJQUFsRDtJQUNBLE9BQU9sQixDQUFDLENBQUNtQyxPQUFGLEdBQVksQ0FBQyxDQUFiLEVBQ1BuQyxDQURBO0VBRUg7O0VBQ0QsT0FBT0ssQ0FBQyxDQUFDTCxDQUFELEVBQUlGLENBQUosQ0FBRCxFQUNQRSxDQUFDLENBQUNXLFNBQUYsQ0FBWXlCLE1BQVosR0FBcUIsWUFBVyxDQUFFLENBRDNCLEVBRVBwQyxDQUFDLENBQUNXLFNBQUYsQ0FBWTBCLEtBQVosR0FBb0IsWUFBVyxDQUFFLENBRjFCLEVBR1ByQyxDQUFDLENBQUNXLFNBQUYsQ0FBWTJCLGdCQUFaLEdBQStCLFlBQVc7SUFDdEMsSUFBSXhDLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBS3lDLElBQUwsQ0FBVUMsRUFBVixDQUFhWixFQUFFLENBQUNhLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsU0FBL0IsRUFDQSxZQUFXO01BQ1B2QixDQUFDLENBQUN3QixLQUFGLENBQVFDLFdBQVIsR0FBc0JDLE1BQXRCLENBQTZCdEIsQ0FBQyxDQUFDdUIsSUFBRixDQUFPQyxXQUFwQyxFQUFpRCxDQUFDLENBQWxELEVBQXFEbEQsQ0FBQyxDQUFDcUMsT0FBdkQ7SUFDSCxDQUhEO0VBSUgsQ0FUTSxFQVVQbkMsQ0FBQyxDQUFDVyxTQUFGLENBQVlzQyxRQUFaLEdBQXVCLFVBQVNuRCxDQUFULEVBQVk7SUFDL0IsS0FBS3FDLE9BQUwsR0FBZXJDLENBQWYsRUFDQSxLQUFLd0MsZ0JBQUwsRUFEQTtFQUVILENBYk0sRUFjUHRCLENBQUMsQ0FBQyxDQUFDYyxDQUFELENBQUQsRUFBTTlCLENBQU4sQ0FkRDtBQWVILENBckJELENBcUJHNEIsRUFBRSxDQUFDc0IsU0FyQk4sQ0FEQyxDQUpEO0FBMkJBaEQsQ0FBQyxXQUFELEdBQVk4QixDQUFaIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbnZhciBhLCBpID0gdGhpcyAmJiB0aGlzLl9fZXh0ZW5kcyB8fCAoYSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICByZXR1cm4gKGEgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwge1xuICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgfVxuICAgIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHQuX19wcm90b19fID0gZVxuICAgIH0gfHxcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gaW4gZSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIG8pICYmICh0W29dID0gZVtvXSlcbiAgICB9KSh0LCBlKVxufSxcbmZ1bmN0aW9uKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdFxuICAgIH1cbiAgICBhKHQsIGUpLFxuICAgIHQucHJvdG90eXBlID0gbnVsbCA9PT0gZSA/IE9iamVjdC5jcmVhdGUoZSkgOiAoby5wcm90b3R5cGUgPSBlLnByb3RvdHlwZSwgbmV3IG8pXG59KSxcbnIgPSB0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSB8fFxuZnVuY3Rpb24odCwgZSwgbywgYSkge1xuICAgIHZhciBpLCByID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICBuID0gciA8IDMgPyBlOiBudWxsID09PSBhID8gYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgbykgOiBhO1xuICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBSZWZsZWN0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSkgbiA9IFJlZmxlY3QuZGVjb3JhdGUodCwgZSwgbywgYSk7XG4gICAgZWxzZSBmb3IgKHZhciBzID0gdC5sZW5ndGggLSAxOyBzID49IDA7IHMtLSkoaSA9IHRbc10pICYmIChuID0gKHIgPCAzID8gaShuKSA6IHIgPiAzID8gaShlLCBvLCBuKSA6IGkoZSwgbykpIHx8IG4pO1xuICAgIHJldHVybiByID4gMyAmJiBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBvLCBuKSxcbiAgICBuXG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KTtcbnZhciBuID0gdChcIlVJTWdyXCIpLFxucyA9IHQoXCJDb25maWdcIiksXG5jID0gY2MuX2RlY29yYXRvcixcbmwgPSBjLmNjY2xhc3MsXG51ID0gKGMucHJvcGVydHksXG5mdW5jdGlvbih0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICByZXR1cm4gZS5za2lsbElkID0gLTEsXG4gICAgICAgIGVcbiAgICB9XG4gICAgcmV0dXJuIGkoZSwgdCksXG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24oKSB7fSxcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge30sXG4gICAgZS5wcm90b3R5cGUucmVnaXN0ZXJCdG5FdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbi5VSU1nci5nZXRJbnN0YW5jZSgpLm9wZW5VSShzLlVJSUQuVUlTa2lsbEluZm8sIC0xLCB0LnNraWxsSWQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5pbml0RGF0YSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhpcy5za2lsbElkID0gdCxcbiAgICAgICAgdGhpcy5yZWdpc3RlckJ0bkV2ZW50KClcbiAgICB9LFxuICAgIHIoW2xdLCBlKVxufSAoY2MuQ29tcG9uZW50KSk7XG5vLmRlZmF1bHQgPSB1Il19