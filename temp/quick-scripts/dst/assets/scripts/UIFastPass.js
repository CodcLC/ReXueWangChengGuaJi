
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UIFastPass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96935a/ip5HH7VAzfkHvz3+', 'UIFastPass');
// scripts/UIFastPass.js

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
    s = t("EventMgr"),
    c = t("SdkMgr"),
    l = t("TimeUtils"),
    u = t("Main"),
    p = t("Config"),
    g = t("TrackDataEvent"),
    d = t("DataMgr"),
    h = t("PlayerMgr"),
    f = cc._decorator,
    m = f.ccclass,
    y = f.property,
    v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.BtnFastPass = null, e.BtnResetStart = null, e.LabLevel = null, e.LabDec = null, e;
  }

  return i(e, t), e.prototype.start = function () {
    h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.quickarrive_appear), s.EventMgr.getInstance().emit(p.EventName.ShowUITop, !1), this.registerBtnEvent(), this.initView();
  }, e.prototype.initView = function () {
    var t = h.PlayerMgr.getInstance().geUserData(),
        e = t.getCurSec(),
        o = t.getMostLevelForCurSec()[1],
        a = d.DataMgr.getInstance().getSecCfg(e);
    this.LabLevel.string = "（" + o + "/" + a.levelCount + "）", this.LabDec.string = "根据你的最高关卡纪录，你可以选择快速到达第" + o + "关！";
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnFastPass.on(cc.Node.EventType.TOUCH_END, function () {
      var e = l.TimeUtils.GetTimeBySecond(),
          o = l.TimeUtils.GetTimeByHours2();
      c.SdkMgr.getInstance().playVideo(1, function () {
        t.trackEvent();
        var a = l.TimeUtils.GetTimeBySecond(),
            i = l.TimeUtils.GetTimeByHours2();
        h.PlayerMgr.getInstance().getTrackData().testTrackTime("quickarrive", o, i, e, a), h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.quickarrive), h.PlayerMgr.getInstance().getTrackData().youmengTrackNew("quickarrive_b"), h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.quickarrive_get), t.closeView(), u["default"].instance.fastPass();
      });
    }), this.BtnResetStart.on(cc.Node.EventType.TOUCH_END, function () {
      h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.quickarrive_restart), t.closeView(), h.PlayerMgr.getInstance().geUserData().setCurLevel(1), u["default"].instance.resetStart();
    });
  }, e.prototype.closeView = function () {
    this.closeUI();
  }, e.prototype.trackEvent = function () {
    var t = h.PlayerMgr.getInstance().geUserData(),
        e = t.getCurSec(),
        o = t.getMostLevelForCurSec()[1];
    if (o < 5) o = 1;else for (var a = o; a > o - 5; a--) {
      if (a % 5 == 0) {
        o = a;
        break;
      }
    }
    h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.quickarrive_X_Y, e, o);
  }, r([y(cc.Node)], e.prototype, "BtnFastPass", void 0), r([y(cc.Node)], e.prototype, "BtnResetStart", void 0), r([y(cc.Label)], e.prototype, "LabLevel", void 0), r([y(cc.Label)], e.prototype, "LabDec", void 0), r([m], e);
}(n["default"]);

o["default"] = v;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlGYXN0UGFzcy5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsImEiLCJpIiwiX19leHRlbmRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiciIsIl9fZGVjb3JhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJjIiwibCIsInUiLCJwIiwiZyIsImQiLCJoIiwiZiIsImNjIiwiX2RlY29yYXRvciIsIm0iLCJjY2NsYXNzIiwieSIsInByb3BlcnR5IiwidiIsImFwcGx5IiwiQnRuRmFzdFBhc3MiLCJCdG5SZXNldFN0YXJ0IiwiTGFiTGV2ZWwiLCJMYWJEZWMiLCJzdGFydCIsIlBsYXllck1nciIsImdldEluc3RhbmNlIiwiZ2V0VHJhY2tEYXRhIiwieW91bWVuZ1RyYWNrIiwiVHJhY2tJZCIsInF1aWNrYXJyaXZlX2FwcGVhciIsIkV2ZW50TWdyIiwiZW1pdCIsIkV2ZW50TmFtZSIsIlNob3dVSVRvcCIsInJlZ2lzdGVyQnRuRXZlbnQiLCJpbml0VmlldyIsImdlVXNlckRhdGEiLCJnZXRDdXJTZWMiLCJnZXRNb3N0TGV2ZWxGb3JDdXJTZWMiLCJEYXRhTWdyIiwiZ2V0U2VjQ2ZnIiwic3RyaW5nIiwibGV2ZWxDb3VudCIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsIlRpbWVVdGlscyIsIkdldFRpbWVCeVNlY29uZCIsIkdldFRpbWVCeUhvdXJzMiIsIlNka01nciIsInBsYXlWaWRlbyIsInRyYWNrRXZlbnQiLCJ0ZXN0VHJhY2tUaW1lIiwicXVpY2thcnJpdmUiLCJ5b3VtZW5nVHJhY2tOZXciLCJxdWlja2Fycml2ZV9nZXQiLCJjbG9zZVZpZXciLCJpbnN0YW5jZSIsImZhc3RQYXNzIiwicXVpY2thcnJpdmVfcmVzdGFydCIsInNldEN1ckxldmVsIiwicmVzZXRTdGFydCIsImNsb3NlVUkiLCJxdWlja2Fycml2ZV9YX1kiLCJMYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUdDLE9BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE1BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE9BQVI7O0FBQ0EsSUFBSUMsRUFBSjtBQUFBLElBQU9DLENBQUMsR0FBRyxVQUFRLFNBQUtDLFNBQWIsS0FBMkJGLEVBQUMsR0FBRyxXQUFTTixDQUFULEVBQVlFLENBQVosRUFBZTtFQUNyRCxPQUFPLENBQUNJLEVBQUMsR0FBR0csTUFBTSxDQUFDQyxjQUFQLElBQXlCO0lBQ2pDQyxTQUFTLEVBQUU7RUFEc0IsYUFHMUJDLEtBSDBCLElBSXJDLFVBQVNaLENBQVQsRUFBWUUsQ0FBWixFQUFlO0lBQ1hGLENBQUMsQ0FBQ1csU0FBRixHQUFjVCxDQUFkO0VBQ0gsQ0FOVyxJQU9aLFVBQVNGLENBQVQsRUFBWUUsQ0FBWixFQUFlO0lBQ1gsS0FBSyxJQUFJRSxDQUFULElBQWNGLENBQWQ7TUFBaUJPLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDYixDQUFyQyxFQUF3Q0UsQ0FBeEMsTUFBK0NKLENBQUMsQ0FBQ0ksQ0FBRCxDQUFELEdBQU9GLENBQUMsQ0FBQ0UsQ0FBRCxDQUF2RDtJQUFqQjtFQUNILENBVE0sRUFTSkosQ0FUSSxFQVNERSxDQVRDLENBQVA7QUFVSCxDQVhxQyxFQVl0QyxVQUFTRixDQUFULEVBQVlFLENBQVosRUFBZTtFQUNYLFNBQVNFLENBQVQsR0FBYTtJQUNULEtBQUtZLFdBQUwsR0FBbUJoQixDQUFuQjtFQUNIOztFQUNETSxFQUFDLENBQUNOLENBQUQsRUFBSUUsQ0FBSixD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QixDQUFDLFdBdEVBLENBWko7O0FBbUZBbEIsQ0FBQyxXQUFELEdBQVl1QyxDQUFaIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbnZhciBhLCBpID0gdGhpcyAmJiB0aGlzLl9fZXh0ZW5kcyB8fCAoYSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICByZXR1cm4gKGEgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwge1xuICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgfVxuICAgIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHQuX19wcm90b19fID0gZVxuICAgIH0gfHxcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gaW4gZSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIG8pICYmICh0W29dID0gZVtvXSlcbiAgICB9KSh0LCBlKVxufSxcbmZ1bmN0aW9uKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdFxuICAgIH1cbiAgICBhKHQsIGUpLFxuICAgIHQucHJvdG90eXBlID0gbnVsbCA9PT0gZSA/IE9iamVjdC5jcmVhdGUoZSkgOiAoby5wcm90b3R5cGUgPSBlLnByb3RvdHlwZSwgbmV3IG8pXG59KSxcbnIgPSB0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSB8fFxuZnVuY3Rpb24odCwgZSwgbywgYSkge1xuICAgIHZhciBpLCByID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICBuID0gciA8IDMgPyBlOiBudWxsID09PSBhID8gYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgbykgOiBhO1xuICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBSZWZsZWN0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSkgbiA9IFJlZmxlY3QuZGVjb3JhdGUodCwgZSwgbywgYSk7XG4gICAgZWxzZSBmb3IgKHZhciBzID0gdC5sZW5ndGggLSAxOyBzID49IDA7IHMtLSkoaSA9IHRbc10pICYmIChuID0gKHIgPCAzID8gaShuKSA6IHIgPiAzID8gaShlLCBvLCBuKSA6IGkoZSwgbykpIHx8IG4pO1xuICAgIHJldHVybiByID4gMyAmJiBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBvLCBuKSxcbiAgICBuXG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KTtcbnZhciBuID0gdChcIkJhc2VVSVwiKSxcbnMgPSB0KFwiRXZlbnRNZ3JcIiksXG5jID0gdChcIlNka01nclwiKSxcbmwgPSB0KFwiVGltZVV0aWxzXCIpLFxudSA9IHQoXCJNYWluXCIpLFxucCA9IHQoXCJDb25maWdcIiksXG5nID0gdChcIlRyYWNrRGF0YUV2ZW50XCIpLFxuZCA9IHQoXCJEYXRhTWdyXCIpLFxuaCA9IHQoXCJQbGF5ZXJNZ3JcIiksXG5mID0gY2MuX2RlY29yYXRvcixcbm0gPSBmLmNjY2xhc3MsXG55ID0gZi5wcm9wZXJ0eSxcbnYgPSBmdW5jdGlvbih0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICByZXR1cm4gZS5CdG5GYXN0UGFzcyA9IG51bGwsXG4gICAgICAgIGUuQnRuUmVzZXRTdGFydCA9IG51bGwsXG4gICAgICAgIGUuTGFiTGV2ZWwgPSBudWxsLFxuICAgICAgICBlLkxhYkRlYyA9IG51bGwsXG4gICAgICAgIGVcbiAgICB9XG4gICAgcmV0dXJuIGkoZSwgdCksXG4gICAgZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaC5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soZy5UcmFja0lkLnF1aWNrYXJyaXZlX2FwcGVhciksXG4gICAgICAgIHMuRXZlbnRNZ3IuZ2V0SW5zdGFuY2UoKS5lbWl0KHAuRXZlbnROYW1lLlNob3dVSVRvcCwgITEpLFxuICAgICAgICB0aGlzLnJlZ2lzdGVyQnRuRXZlbnQoKSxcbiAgICAgICAgdGhpcy5pbml0VmlldygpXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5pbml0VmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IGguUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2VVc2VyRGF0YSgpLFxuICAgICAgICBlID0gdC5nZXRDdXJTZWMoKSxcbiAgICAgICAgbyA9IHQuZ2V0TW9zdExldmVsRm9yQ3VyU2VjKClbMV0sXG4gICAgICAgIGEgPSBkLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRTZWNDZmcoZSk7XG4gICAgICAgIHRoaXMuTGFiTGV2ZWwuc3RyaW5nID0gXCLvvIhcIiArIG8gKyBcIi9cIiArIGEubGV2ZWxDb3VudCArIFwi77yJXCIsXG4gICAgICAgIHRoaXMuTGFiRGVjLnN0cmluZyA9IFwi5qC55o2u5L2g55qE5pyA6auY5YWz5Y2h57qq5b2V77yM5L2g5Y+v5Lul6YCJ5oup5b+r6YCf5Yiw6L6+56ysXCIgKyBvICsgXCLlhbPvvIFcIlxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUucmVnaXN0ZXJCdG5FdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuQnRuRmFzdFBhc3Mub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlID0gbC5UaW1lVXRpbHMuR2V0VGltZUJ5U2Vjb25kKCksXG4gICAgICAgICAgICBvID0gbC5UaW1lVXRpbHMuR2V0VGltZUJ5SG91cnMyKCk7XG4gICAgICAgICAgICBjLlNka01nci5nZXRJbnN0YW5jZSgpLnBsYXlWaWRlbygxLFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdC50cmFja0V2ZW50KCk7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBsLlRpbWVVdGlscy5HZXRUaW1lQnlTZWNvbmQoKSxcbiAgICAgICAgICAgICAgICBpID0gbC5UaW1lVXRpbHMuR2V0VGltZUJ5SG91cnMyKCk7XG4gICAgICAgICAgICAgICAgaC5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS50ZXN0VHJhY2tUaW1lKFwicXVpY2thcnJpdmVcIiwgbywgaSwgZSwgYSksXG4gICAgICAgICAgICAgICAgaC5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soZy5UcmFja0lkLnF1aWNrYXJyaXZlKSxcbiAgICAgICAgICAgICAgICBoLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFRyYWNrRGF0YSgpLnlvdW1lbmdUcmFja05ldyhcInF1aWNrYXJyaXZlX2JcIiksXG4gICAgICAgICAgICAgICAgaC5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soZy5UcmFja0lkLnF1aWNrYXJyaXZlX2dldCksXG4gICAgICAgICAgICAgICAgdC5jbG9zZVZpZXcoKSxcbiAgICAgICAgICAgICAgICB1LmRlZmF1bHQuaW5zdGFuY2UuZmFzdFBhc3MoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMuQnRuUmVzZXRTdGFydC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaC5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soZy5UcmFja0lkLnF1aWNrYXJyaXZlX3Jlc3RhcnQpLFxuICAgICAgICAgICAgdC5jbG9zZVZpZXcoKSxcbiAgICAgICAgICAgIGguUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2VVc2VyRGF0YSgpLnNldEN1ckxldmVsKDEpLFxuICAgICAgICAgICAgdS5kZWZhdWx0Lmluc3RhbmNlLnJlc2V0U3RhcnQoKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuY2xvc2VWaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2xvc2VVSSgpXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS50cmFja0V2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gaC5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZVVzZXJEYXRhKCksXG4gICAgICAgIGUgPSB0LmdldEN1clNlYygpLFxuICAgICAgICBvID0gdC5nZXRNb3N0TGV2ZWxGb3JDdXJTZWMoKVsxXTtcbiAgICAgICAgaWYgKG8gPCA1KSBvID0gMTtcbiAgICAgICAgZWxzZSBmb3IgKHZhciBhID0gbzsgYSA+IG8gLSA1OyBhLS0pIGlmIChhICUgNSA9PSAwKSB7XG4gICAgICAgICAgICBvID0gYTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgaC5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRUcmFja0RhdGEoKS55b3VtZW5nVHJhY2soZy5UcmFja0lkLnF1aWNrYXJyaXZlX1hfWSwgZSwgbylcbiAgICB9LFxuICAgIHIoW3koY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJCdG5GYXN0UGFzc1wiLCB2b2lkIDApLFxuICAgIHIoW3koY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJCdG5SZXNldFN0YXJ0XCIsIHZvaWQgMCksXG4gICAgcihbeShjYy5MYWJlbCldLCBlLnByb3RvdHlwZSwgXCJMYWJMZXZlbFwiLCB2b2lkIDApLFxuICAgIHIoW3koY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiTGFiRGVjXCIsIHZvaWQgMCksXG4gICAgcihbbV0sIGUpXG59IChuLmRlZmF1bHQpO1xuby5kZWZhdWx0ID0gdiJdfQ==