
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UIShareVideo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f4daqn7axJ5pV2ZpcDNcP4', 'UIShareVideo');
// scripts/UIShareVideo.js

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
    s = t("PlayerMgr"),
    c = cc._decorator,
    l = c.ccclass,
    u = c.property,
    p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.BtnClose = null, e.BtnShare = null, e;
  }

  return i(e, t), e.prototype.onLoad = function () {}, e.prototype.start = function () {
    this.registerBtnEvent();
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnClose.on(cc.Node.EventType.TOUCH_END, function () {
      s.PlayerMgr.getInstance().getShareData().clearData(), t.closeView();
    }), this.BtnShare.on(cc.Node.EventType.TOUCH_END, function () {
      var e = s.PlayerMgr.getInstance().getShareData();
      e.toShare(!1, function () {
        e.clearData(), console.log("视频分享成功！"), t.closeView();
      });
    });
  }, e.prototype.closeView = function () {
    this.closeUI();
  }, r([u(cc.Node)], e.prototype, "BtnClose", void 0), r([u(cc.Node)], e.prototype, "BtnShare", void 0), r([l], e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlTaGFyZVZpZGVvLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiYSIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJyIiwiX19kZWNvcmF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm4iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJsIiwiY2NjbGFzcyIsInUiLCJwcm9wZXJ0eSIsInAiLCJhcHBseSIsIkJ0bkNsb3NlIiwiQnRuU2hhcmUiLCJvbkxvYWQiLCJzdGFydCIsInJlZ2lzdGVyQnRuRXZlbnQiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJQbGF5ZXJNZ3IiLCJnZXRJbnN0YW5jZSIsImdldFNoYXJlRGF0YSIsImNsZWFyRGF0YSIsImNsb3NlVmlldyIsInRvU2hhcmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VVSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUdDLE9BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE1BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE9BQVI7O0FBQ0EsSUFBSUMsRUFBSjtBQUFBLElBQU9DLENBQUMsR0FBRyxVQUFRLFNBQUtDLFNBQWIsS0FBMkJGLEVBQUMsR0FBRyxXQUFTTixDQUFULEVBQVlFLENBQVosRUFBZTtFQUNyRCxPQUFPLENBQUNJLEVBQUMsR0FBR0csTUFBTSxDQUFDQyxjQUFQLElBQXlCO0lBQ2pDQyxTQUFTLEVBQUU7RUFEc0IsYUFHMUJD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Q0FBVSxDQUFDLENBQVgsRUFDQSxZQUFXO1FBQ1BsRCxDQUFDLENBQUNnRCxTQUFGLElBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosQ0FEQSxFQUVBdEQsQ0FBQyxDQUFDbUQsU0FBRixFQUZBO01BR0gsQ0FMRDtJQU1ILENBVEQsQ0FMQTtFQWVILENBdEJNLEVBdUJQakQsQ0FBQyxDQUFDVyxTQUFGLENBQVlzQyxTQUFaLEdBQXdCLFlBQVc7SUFDL0IsS0FBS0ksT0FBTDtFQUNILENBekJNLEVBMEJQckMsQ0FBQyxDQUFDLENBQUNnQixDQUFDLENBQUNKLEVBQUUsQ0FBQ2MsSUFBSixDQUFGLENBQUQsRUFBZTFDLENBQUMsQ0FBQ1csU0FBakIsRUFBNEIsVUFBNUIsRUFBd0MsS0FBSyxDQUE3QyxDQTFCTSxFQTJCUEssQ0FBQyxDQUFDLENBQUNnQixDQUFDLENBQUNKLEVBQUUsQ0FBQ2MsSUFBSixDQUFGLENBQUQsRUFBZTFDLENBQUMsQ0FBQ1csU0FBakIsRUFBNEIsVUFBNUIsRUFBd0MsS0FBSyxDQUE3QyxDQTNCTSxFQTRCUEssQ0FBQyxDQUFDLENBQUNjLENBQUQsQ0FBRCxFQUFNOUIsQ0FBTixDQTVCRDtBQTZCSCxDQXBDRyxDQW9DRG9CLENBQUMsV0FwQ0EsQ0FMSjs7QUEwQ0FsQixDQUFDLFdBQUQsR0FBWWdDLENBQVoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xudmFyIGEsIGkgPSB0aGlzICYmIHRoaXMuX19leHRlbmRzIHx8IChhID0gZnVuY3Rpb24odCwgZSkge1xuICAgIHJldHVybiAoYSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCB7XG4gICAgICAgIF9fcHJvdG9fXzogW11cbiAgICB9XG4gICAgaW5zdGFuY2VvZiBBcnJheSAmJlxuICAgIGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdC5fX3Byb3RvX18gPSBlXG4gICAgfSB8fFxuICAgIGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZm9yICh2YXIgbyBpbiBlKSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgbykgJiYgKHRbb10gPSBlW29dKVxuICAgIH0pKHQsIGUpXG59LFxuZnVuY3Rpb24odCwgZSkge1xuICAgIGZ1bmN0aW9uIG8oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSB0XG4gICAgfVxuICAgIGEodCwgZSksXG4gICAgdC5wcm90b3R5cGUgPSBudWxsID09PSBlID8gT2JqZWN0LmNyZWF0ZShlKSA6IChvLnByb3RvdHlwZSA9IGUucHJvdG90eXBlLCBuZXcgbylcbn0pLFxuciA9IHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlIHx8XG5mdW5jdGlvbih0LCBlLCBvLCBhKSB7XG4gICAgdmFyIGksIHIgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgIG4gPSByIDwgMyA/IGU6IG51bGwgPT09IGEgPyBhID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCBvKSA6IGE7XG4gICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIFJlZmxlY3QgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKSBuID0gUmVmbGVjdC5kZWNvcmF0ZSh0LCBlLCBvLCBhKTtcbiAgICBlbHNlIGZvciAodmFyIHMgPSB0Lmxlbmd0aCAtIDE7IHMgPj0gMDsgcy0tKShpID0gdFtzXSkgJiYgKG4gPSAociA8IDMgPyBpKG4pIDogciA+IDMgPyBpKGUsIG8sIG4pIDogaShlLCBvKSkgfHwgbik7XG4gICAgcmV0dXJuIHIgPiAzICYmIG4gJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIG8sIG4pLFxuICAgIG5cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogITBcbn0pO1xudmFyIG4gPSB0KFwiQmFzZVVJXCIpLFxucyA9IHQoXCJQbGF5ZXJNZ3JcIiksXG5jID0gY2MuX2RlY29yYXRvcixcbmwgPSBjLmNjY2xhc3MsXG51ID0gYy5wcm9wZXJ0eSxcbnAgPSBmdW5jdGlvbih0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICByZXR1cm4gZS5CdG5DbG9zZSA9IG51bGwsXG4gICAgICAgIGUuQnRuU2hhcmUgPSBudWxsLFxuICAgICAgICBlXG4gICAgfVxuICAgIHJldHVybiBpKGUsIHQpLFxuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uKCkge30sXG4gICAgZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckJ0bkV2ZW50KClcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLnJlZ2lzdGVyQnRuRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLkJ0bkNsb3NlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFNoYXJlRGF0YSgpLmNsZWFyRGF0YSgpLFxuICAgICAgICAgICAgdC5jbG9zZVZpZXcoKVxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5CdG5TaGFyZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGUgPSBzLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFNoYXJlRGF0YSgpO1xuICAgICAgICAgICAgZS50b1NoYXJlKCExLFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZS5jbGVhckRhdGEoKSxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuinhumikeWIhuS6q+aIkOWKn++8gVwiKSxcbiAgICAgICAgICAgICAgICB0LmNsb3NlVmlldygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuY2xvc2VWaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2xvc2VVSSgpXG4gICAgfSxcbiAgICByKFt1KGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiQnRuQ2xvc2VcIiwgdm9pZCAwKSxcbiAgICByKFt1KGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiQnRuU2hhcmVcIiwgdm9pZCAwKSxcbiAgICByKFtsXSwgZSlcbn0gKG4uZGVmYXVsdCk7XG5vLmRlZmF1bHQgPSBwIl19