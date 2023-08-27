
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MainTaskData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49cc1oTNnNFJJG9hdpIQs24', 'MainTaskData');
// scripts/MainTaskData.js

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
});

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.MainTaskData = void 0;

var r = t("BaseData"),
    n = t("BasePlatform"),
    s = t("EventMgr"),
    c = t("PlatformManager"),
    l = t("UIMgr"),
    u = t("Config"),
    p = t("DataMgr"),
    g = t("PlayerMgr"),
    d = function d() {
  this.curTaskId = 1, this.curTaskState = !1, this.curTaskParameter = 0;
},
    h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.ecrypt = !1, e.gameKey = u.GameConfig.AppCacheName + "taskData", e.endTaskId = 10, e.recordTaskCount = 0, e;
  }

  return i(e, t), e.prototype.addRecordTaskCount = function (t) {
    if (void 0 === t && (t = function t() {}), this.recordTaskCount += 1, this.recordTaskCount >= 4) {
      if (t && t(), c.PlatformManager.currentPlatform == n.Platform.BYTEDANCE) {
        var e = g.PlayerMgr.getInstance().getShareData();
        e.stopRecord(!1), e.getCanShare() && l.UIMgr.getInstance().openUI(u.UIID.UIShareVideo, -1);
      }

      this.resetRecordTaskCount();
    }
  }, e.prototype.resetRecordTaskCount = function () {
    this.recordTaskCount = 0;
  }, e.prototype.createData = function () {
    return this.data = new d(), this.data;
  }, e.prototype.initData = function (t) {
    t || (this.endTaskId = p.DataMgr.getInstance().getMissionCfg().length);
  }, e.prototype.getCurrentId = function () {
    return this.data.curTaskId;
  }, e.prototype.getCurrentState = function () {
    return this.data.curTaskState;
  }, e.prototype.getCurrentParameter = function () {
    return this.data.curTaskParameter;
  }, e.prototype.setCurTaskState = function (t) {
    void 0 === t && (t = !0), this.data.curTaskState = t, s.EventMgr.getInstance().emit(u.EventName.RefreshMainTaskFinished, t), this.saveData();
  }, e.prototype.addCurTaskParameter = function (t, e) {
    if (void 0 === t && (t = 1), void 0 === e && (e = !1), 1 != this.data.curTaskState) {
      e ? this.data.curTaskParameter = t : this.data.curTaskParameter += t;
      var o = p.DataMgr.getInstance().getMission(this.getCurrentId());
      o && (s.EventMgr.getInstance().emit(u.EventName.RefreshMainTaskDec), this.data.curTaskParameter >= o.TaskParameter && this.completeTask(), this.saveData());
    }
  }, e.prototype.trackEvent = function () {}, e.prototype.addTaskId = function (t) {
    void 0 === t && (t = !0), this.data.curTaskId += 1, this.resetTaskData();
    var e = p.DataMgr.getInstance().getMission(this.data.curTaskId);
    s.EventMgr.getInstance().emit(u.EventName.RefreshMainTask, !1), e && (this.data.curTaskState || g.PlayerMgr.getInstance().getMainTaskData().carrayTaskForType(this.data.curTaskId, e.Type)), t && this.saveData();
  }, e.prototype.completeTask = function () {
    p.DataMgr.getInstance().getMission(g.PlayerMgr.getInstance().getMainTaskData().getCurrentId()) && g.PlayerMgr.getInstance().getMainTaskData().setCurTaskState();
  }, e.prototype.getTaskEnd = function () {
    return this.data.curTaskId >= this.endTaskId;
  }, e.prototype.resetTaskData = function () {
    this.data.curTaskState = !1, this.data.curTaskParameter = 0;
  }, e.prototype.carrayTaskForType = function (t) {
    var e = p.DataMgr.getInstance().getMission(t);

    if (e && 1 == e.Type) {
      var o = g.PlayerMgr.getInstance().geUserData().getCurSec();
      this.addCurTaskParameter(o - 1, !0);
    }
  }, e.prototype.mainTask = function (t, e, o) {
    void 0 === e && (e = 1), void 0 === o && (o = !1);
    var a = p.DataMgr.getInstance().getMission(g.PlayerMgr.getInstance().getMainTaskData().getCurrentId());
    a && a.Type == t && g.PlayerMgr.getInstance().getMainTaskData().addCurTaskParameter(e, o);
  }, e;
}(r.BaseData);

o.MainTaskData = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFpblRhc2tEYXRhLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiYSIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiTWFpblRhc2tEYXRhIiwiciIsIm4iLCJzIiwiYyIsImwiLCJ1IiwicCIsImciLCJkIiwiY3VyVGFza0lkIiwiY3VyVGFza1N0YXRlIiwiY3VyVGFza1BhcmFtZXRlciIsImgiLCJhcHBseSIsImFyZ3VtZW50cyIsImVjcnlwdCIsImdhbWVLZXkiLCJHYW1lQ29uZmlnIiwiQXBwQ2FjaGVOYW1lIiwiZW5kVGFza0lkIiwicmVjb3JkVGFza0NvdW50IiwiYWRkUmVjb3JkVGFza0NvdW50IiwiUGxhdGZvcm1NYW5hZ2VyIiwiY3VycmVudFBsYXRmb3JtIiwiUGxhdGZvcm0iLCJCWVRFREFOQ0UiLCJQbGF5ZXJNZ3IiLCJnZXRJbnN0YW5jZSIsImdldFNoYXJlRGF0YSIsInN0b3BSZWNvcmQiLCJnZXRDYW5TaGFyZSIsIlVJTWdyIiwib3BlblVJIiwiVUlJRCIsIlVJU2hhcmVWaWRlbyIsInJlc2V0UmVjb3JkVGFza0NvdW50IiwiY3JlYXRlRGF0YSIsImRhdGEiLCJpbml0RGF0YSIsIkRhdGFNZ3IiLCJnZXRNaXNzaW9uQ2ZnIiwibGVuZ3RoIiwiZ2V0Q3VycmVudElkIiwiZ2V0Q3VycmVudFN0YXRlIiwiZ2V0Q3VycmVudFBhcmFtZXRlciIsInNldEN1clRhc2tTdGF0ZSIsIkV2ZW50TWdyIiwiZW1pdCIsIkV2ZW50TmFtZSIsIlJlZnJlc2hNYWluVGFza0ZpbmlzaGVkIiwic2F2ZURhdGEiLCJhZGRDdXJUYXNrUGFyYW1ldGVyIiwiZ2V0TWlzc2lvbiIsIlJlZnJlc2hNYWluVGFza0RlYyIsIlRhc2tQYXJhbWV0ZXIiLCJjb21wbGV0ZVRhc2siLCJ0cmFja0V2ZW50IiwiYWRkVGFza0lkIiwicmVzZXRUYXNrRGF0YSIsIlJlZnJlc2hNYWluVGFzayIsImdldE1haW5UYXNrRGF0YSIsImNhcnJheVRhc2tGb3JUeXBlIiwiVHlwZSIsImdldFRhc2tFbmQiLCJnZVVzZXJEYXRhIiwiZ2V0Q3VyU2VjIiwibWFpblRhc2siLCJCYXNlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUdDLE9BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE1BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE9BQVI7O0FBQ0EsSUFBSUMsRUFBSjtBQUFBLElBQU9DLENBQUMsR0FBRyxVQUFRLFNBQUtDLFNBQWIsS0FBMkJGLEVBQUMsR0FBRyxXQUFTTixDQUFULEVBQVlFLENBQVosRUFBZTtFQUNyRCxPQUFPLENBQUNJLEVBQUMsR0FBR0csTUFBTSxDQUFDQyxjQUFQLElBQXlCO0lBQ2pDQyxTQUFTLEVBQUU7RUFEc0IsYUFHMUJDLEtBSDBCLElBSXJDLFVBQVNaLENBQVQsRUFBWUUsQ0FBWixFQUFlO0lBQ1hGLENBQUMsQ0FBQ1csU0FBRixHQUFjVCxDQUFkO0VBQ0gsQ0FOVyxJQU9aLFVBQVNGLENBQVQsRUFBWUUsQ0FBWixFQUFlO0lBQ1gsS0FBSyxJQUFJRSxDQUFULElBQWNGLENBQWQ7TUFBaUJPLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDYixDQUFyQyxFQUF3Q0UsQ0FBeEMsTUFBK0NKLENBQUMsQ0FBQ0ksQ0FBRCxDQUFELEdBQU9GLENBQUMsQ0FBQ0UsQ0FBRCxDQUF2RDtJQUFqQjtFQUNILENBVE0sRUFTSkosQ0FUSSxFQVNERSxDQVRDLENBQVA7QUFVSCxDQVhxQyxFQVl0QyxVQUFTRixDQUFULEVBQVlFLENBQVosRUFBZTtFQUNYLFNBQVNFLENBQVQsR0FBYTtJQUNULEtBQUtZLFdBQUwsR0FBbUJoQixDQUFuQjtFQUNIOztFQUNETSxFQUFDLENBQUNOLENBQUQsRUFBSUUsQ0FBSixDQUFELEVBQ0FGLENBQUMsQ0FBQ2EsU0FBRixHQUFjLFNBQVNYLENBQVQsR0FBYU8sTUFBTSxDQUFDUSxNQUFQLENBQWNmLENBQWQsQ0FBYixJQUFpQ0UsQ0FBQyxDQUFDUyxTQUFGLEdBQWNYLENBQUMsQ0FBQ1csU0FBaEIsRUFBMkIsSUFBSVQsQ0FBSixFQUE1RCxDQURkO0FBRUgsQ0FsQlUsQ0FBWDs7QUFtQkFLLE1BQU0sQ0FBQ1MsY0FBUCxDQUFzQmQsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNlLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDLEdBR0FmLENBQUMsQ0FBQ2dCLFlBQUYsR0FBaUIsS0FBSyxDQUh0Qjs7QUFJQSxJQUFJQyxDQUFDLEdBQUdyQixDQUFDLENBQUMsVUFBRCxDQUFUO0FBQUEsSUFDQXNCLENBQUMsR0FBR3RCLENBQUMsQ0FBQyxjQUFELENBREw7QUFBQSxJQUVBdUIsQ0FBQyxHQUFHdkIsQ0FBQyxDQUFDLFVBQUQsQ0FGTDtBQUFBLElBR0F3QixDQUFDLEdBQUd4QixDQUFDLENBQUMsaUJBQUQsQ0FITDtBQUFBLElBSUF5QixDQUFDLEdBQUd6QixDQUFDLENBQUMsT0FBRCxDQUpMO0FBQUEsSUFLQTBCLENBQUMsR0FBRzFCLENBQUMsQ0FBQyxRQUFELENBTEw7QUFBQSxJQU1BMkIsQ0FBQyxHQUFHM0IsQ0FBQyxDQUFDLFNBQUQsQ0FOTDtBQUFBLElBT0E0QixDQUFDLEdBQUc1QixDQUFDLENBQUMsV0FBRCxDQVBMO0FBQUEsSUFRQTZCLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQVc7RUFDWCxLQUFLQyxTQUFMLEdBQWlCLENBQWpCLEVBQ0EsS0FBS0MsWUFBTCxHQUFvQixDQUFDLENBRHJCLEVBRUEsS0FBS0MsZ0JBQUwsR0FBd0IsQ0FGeEI7QUFHSCxDQVpEO0FBQUEsSUFhQUMsQ0FBQyxHQUFHLFVBQVNqQyxDQUFULEVBQVk7RUFDWixTQUFTRSxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUcsU0FBU0YsQ0FBVCxJQUFjQSxDQUFDLENBQUNrQyxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWQsSUFBMEMsSUFBbEQ7SUFDQSxPQUFPakMsQ0FBQyxDQUFDa0MsTUFBRixHQUFXLENBQUMsQ0FBWixFQUNQbEMsQ0FBQyxDQUFDbUMsT0FBRixHQUFZWCxDQUFDLENBQUNZLFVBQUYsQ0FBYUMsWUFBYixHQUE0QixVQURqQyxFQUVQckMsQ0FBQyxDQUFDc0MsU0FBRixHQUFjLEVBRlAsRUFHUHRDLENBQUMsQ0FBQ3VDLGVBQUYsR0FBb0IsQ0FIYixFQUlQdkMsQ0FKQTtFQUtIOztFQUNELE9BQU9LLENBQUMsQ0FBQ0wsQ0FBRCxFQUFJRixDQUFKLENBQUQsRUFDUEUsQ0FBQyxDQUFDVyxTQUFGLENBQVk2QixrQkFBWixHQUFpQyxVQUFTMUMsQ0FBVCxFQUFZO0lBQ3pDLElBQUksS0FBSyxDQUFMLEtBQVdBLENBQVgsS0FBaUJBLENBQUMsR0FBRyxhQUFXLENBQUUsQ0FBbEMsR0FBcUMsS0FBS3lDLGVBQUwsSUFBd0IsQ0FBN0QsRUFBZ0UsS0FBS0EsZUFBTCxJQUF3QixDQUE1RixFQUErRjtNQUMzRixJQUFJekMsQ0FBQyxJQUFJQSxDQUFDLEVBQU4sRUFBVXdCLENBQUMsQ0FBQ21CLGVBQUYsQ0FBa0JDLGVBQWxCLElBQXFDdEIsQ0FBQyxDQUFDdUIsUUFBRixDQUFXQyxTQUE5RCxFQUF5RTtRQUNyRSxJQUFJNUMsQ0FBQyxHQUFHMEIsQ0FBQyxDQUFDbUIsU0FBRixDQUFZQyxXQUFaLEdBQTBCQyxZQUExQixFQUFSO1FBQ0EvQyxDQUFDLENBQUNnRCxVQUFGLENBQWEsQ0FBQyxDQUFkLEdBQ0FoRCxDQUFDLENBQUNpRCxXQUFGLE1BQW1CMUIsQ0FBQyxDQUFDMkIsS0FBRixDQUFRSixXQUFSLEdBQXNCSyxNQUF0QixDQUE2QjNCLENBQUMsQ0FBQzRCLElBQUYsQ0FBT0MsWUFBcEMsRUFBa0QsQ0FBQyxDQUFuRCxDQURuQjtNQUVIOztNQUNELEtBQUtDLG9CQUFMO0lBQ0g7RUFDSixDQVZNLEVBV1B0RCxDQUFDLENBQUNXLFNBQUYsQ0FBWTJDLG9CQUFaLEdBQW1DLFlBQVc7SUFDMUMsS0FBS2YsZUFBTCxHQUF1QixDQUF2QjtFQUNILENBYk0sRUFjUHZDLENBQUMsQ0FBQ1csU0FBRixDQUFZNEMsVUFBWixHQUF5QixZQUFXO0lBQ2hDLE9BQU8sS0FBS0MsSUFBTCxHQUFZLElBQUk3QixDQUFKLEVBQVosRUFDUCxLQUFLNkIsSUFETDtFQUVILENBakJNLEVBa0JQeEQsQ0FBQyxDQUFDVyxTQUFGLENBQVk4QyxRQUFaLEdBQXVCLFVBQVMzRCxDQUFULEVBQVk7SUFDL0JBLENBQUMsS0FBSyxLQUFLd0MsU0FBTCxHQUFpQmIsQ0FBQyxDQUFDaUMsT0FBRixDQUFVWixXQUFWLEdBQXdCYSxhQUF4QixHQUF3Q0MsTUFBOUQsQ0FBRDtFQUNILENBcEJNLEVBcUJQNUQsQ0FBQyxDQUFDVyxTQUFGLENBQVlrRCxZQUFaLEdBQTJCLFlBQVc7SUFDbEMsT0FBTyxLQUFLTCxJQUFMLENBQVU1QixTQUFqQjtFQUNILENBdkJNLEVBd0JQNUIsQ0FBQyxDQUFDVyxTQUFGLENBQVltRCxlQUFaLEdBQThCLFlBQVc7SUFDckMsT0FBTyxLQUFLTixJQUFMLENBQVUzQixZQUFqQjtFQUNILENBMUJNLEVBMkJQN0IsQ0FBQyxDQUFDVyxTQUFGLENBQVlvRCxtQkFBWixHQUFrQyxZQUFXO0lBQ3pDLE9BQU8sS0FBS1AsSUFBTCxDQUFVMUIsZ0JBQWpCO0VBQ0gsQ0E3Qk0sRUE4QlA5QixDQUFDLENBQUNXLFNBQUYsQ0FBWXFELGVBQVosR0FBOEIsVUFBU2xFLENBQVQsRUFBWTtJQUN0QyxLQUFLLENBQUwsS0FBV0EsQ0FBWCxLQUFpQkEsQ0FBQyxHQUFHLENBQUMsQ0FBdEIsR0FDQSxLQUFLMEQsSUFBTCxDQUFVM0IsWUFBVixHQUF5Qi9CLENBRHpCLEVBRUF1QixDQUFDLENBQUM0QyxRQUFGLENBQVduQixXQUFYLEdBQXlCb0IsSUFBekIsQ0FBOEIxQyxDQUFDLENBQUMyQyxTQUFGLENBQVlDLHVCQUExQyxFQUFtRXRFLENBQW5FLENBRkEsRUFHQSxLQUFLdUUsUUFBTCxFQUhBO0VBSUgsQ0FuQ00sRUFvQ1ByRSxDQUFDLENBQUNXLFNBQUYsQ0FBWTJELG1CQUFaLEdBQWtDLFVBQVN4RSxDQUFULEVBQVlFLENBQVosRUFBZTtJQUM3QyxJQUFJLEtBQUssQ0FBTCxLQUFXRixDQUFYLEtBQWlCQSxDQUFDLEdBQUcsQ0FBckIsR0FBeUIsS0FBSyxDQUFMLEtBQVdFLENBQVgsS0FBaUJBLENBQUMsR0FBRyxDQUFDLENBQXRCLENBQXpCLEVBQW1ELEtBQUssS0FBS3dELElBQUwsQ0FBVTNCLFlBQXRFLEVBQW9GO01BQ2hGN0IsQ0FBQyxHQUFHLEtBQUt3RCxJQUFMLENBQVUxQixnQkFBVixHQUE2QmhDLENBQWhDLEdBQW1DLEtBQUswRCxJQUFMLENBQVUxQixnQkFBVixJQUE4QmhDLENBQWxFO01BQ0EsSUFBSUksQ0FBQyxHQUFHdUIsQ0FBQyxDQUFDaUMsT0FBRixDQUFVWixXQUFWLEdBQXdCeUIsVUFBeEIsQ0FBbUMsS0FBS1YsWUFBTCxFQUFuQyxDQUFSO01BQ0EzRCxDQUFDLEtBQUttQixDQUFDLENBQUM0QyxRQUFGLENBQVduQixXQUFYLEdBQXlCb0IsSUFBekIsQ0FBOEIxQyxDQUFDLENBQUMyQyxTQUFGLENBQVlLLGtCQUExQyxHQUErRCxLQUFLaEIsSUFBTCxDQUFVMUIsZ0JBQVYsSUFBOEI1QixDQUFDLENBQUN1RSxhQUFoQyxJQUFpRCxLQUFLQyxZQUFMLEVBQWhILEVBQXFJLEtBQUtMLFFBQUwsRUFBMUksQ0FBRDtJQUNIO0VBQ0osQ0ExQ00sRUEyQ1ByRSxDQUFDLENBQUNXLFNBQUYsQ0FBWWdFLFVBQVosR0FBeUIsWUFBVyxDQUFFLENBM0MvQixFQTRDUDNFLENBQUMsQ0FBQ1csU0FBRixDQUFZaUUsU0FBWixHQUF3QixVQUFTOUUsQ0FBVCxFQUFZO0lBQ2hDLEtBQUssQ0FBTCxLQUFXQSxDQUFYLEtBQWlCQSxDQUFDLEdBQUcsQ0FBQyxDQUF0QixHQUNBLEtBQUswRCxJQUFMLENBQVU1QixTQUFWLElBQXVCLENBRHZCLEVBRUEsS0FBS2lELGFBQUwsRUFGQTtJQUdBLElBQUk3RSxDQUFDLEdBQUd5QixDQUFDLENBQUNpQyxPQUFGLENBQVVaLFdBQVYsR0FBd0J5QixVQUF4QixDQUFtQyxLQUFLZixJQUFMLENBQVU1QixTQUE3QyxDQUFSO0lBQ0FQLENBQUMsQ0FBQzRDLFFBQUYsQ0FBV25CLFdBQVgsR0FBeUJvQixJQUF6QixDQUE4QjFDLENBQUMsQ0FBQzJDLFNBQUYsQ0FBWVcsZUFBMUMsRUFBMkQsQ0FBQyxDQUE1RCxHQUNBOUUsQ0FBQyxLQUFLLEtBQUt3RCxJQUFMLENBQVUzQixZQUFWLElBQTBCSCxDQUFDLENBQUNtQixTQUFGLENBQVlDLFdBQVosR0FBMEJpQyxlQUExQixHQUE0Q0MsaUJBQTVDLENBQThELEtBQUt4QixJQUFMLENBQVU1QixTQUF4RSxFQUFtRjVCLENBQUMsQ0FBQ2lGLElBQXJGLENBQS9CLENBREQsRUFFQW5GLENBQUMsSUFBSSxLQUFLdUUsUUFBTCxFQUZMO0VBR0gsQ0FwRE0sRUFxRFByRSxDQUFDLENBQUNXLFNBQUYsQ0FBWStELFlBQVosR0FBMkIsWUFBVztJQUNsQ2pELENBQUMsQ0FBQ2lDLE9BQUYsQ0FBVVosV0FBVixHQUF3QnlCLFVBQXhCLENBQW1DN0MsQ0FBQyxDQUFDbUIsU0FBRixDQUFZQyxXQUFaLEdBQTBCaUMsZUFBMUIsR0FBNENsQixZQUE1QyxFQUFuQyxLQUFrR25DLENBQUMsQ0FBQ21CLFNBQUYsQ0FBWUMsV0FBWixHQUEwQmlDLGVBQTFCLEdBQTRDZixlQUE1QyxFQUFsRztFQUNILENBdkRNLEVBd0RQaEUsQ0FBQyxDQUFDVyxTQUFGLENBQVl1RSxVQUFaLEdBQXlCLFlBQVc7SUFDaEMsT0FBTyxLQUFLMUIsSUFBTCxDQUFVNUIsU0FBVixJQUF1QixLQUFLVSxTQUFuQztFQUNILENBMURNLEVBMkRQdEMsQ0FBQyxDQUFDVyxTQUFGLENBQVlrRSxhQUFaLEdBQTRCLFlBQVc7SUFDbkMsS0FBS3JCLElBQUwsQ0FBVTNCLFlBQVYsR0FBeUIsQ0FBQyxDQUExQixFQUNBLEtBQUsyQixJQUFMLENBQVUxQixnQkFBVixHQUE2QixDQUQ3QjtFQUVILENBOURNLEVBK0RQOUIsQ0FBQyxDQUFDVyxTQUFGLENBQVlxRSxpQkFBWixHQUFnQyxVQUFTbEYsQ0FBVCxFQUFZO0lBQ3hDLElBQUlFLENBQUMsR0FBR3lCLENBQUMsQ0FBQ2lDLE9BQUYsQ0FBVVosV0FBVixHQUF3QnlCLFVBQXhCLENBQW1DekUsQ0FBbkMsQ0FBUjs7SUFDQSxJQUFJRSxDQUFDLElBQUksS0FBS0EsQ0FBQyxDQUFDaUYsSUFBaEIsRUFBc0I7TUFDbEIsSUFBSS9FLENBQUMsR0FBR3dCLENBQUMsQ0FBQ21CLFNBQUYsQ0FBWUMsV0FBWixHQUEwQnFDLFVBQTFCLEdBQXVDQyxTQUF2QyxFQUFSO01BQ0EsS0FBS2QsbUJBQUwsQ0FBeUJwRSxDQUFDLEdBQUcsQ0FBN0IsRUFBZ0MsQ0FBQyxDQUFqQztJQUNIO0VBQ0osQ0FyRU0sRUFzRVBGLENBQUMsQ0FBQ1csU0FBRixDQUFZMEUsUUFBWixHQUF1QixVQUFTdkYsQ0FBVCxFQUFZRSxDQUFaLEVBQWVFLENBQWYsRUFBa0I7SUFDckMsS0FBSyxDQUFMLEtBQVdGLENBQVgsS0FBaUJBLENBQUMsR0FBRyxDQUFyQixHQUNBLEtBQUssQ0FBTCxLQUFXRSxDQUFYLEtBQWlCQSxDQUFDLEdBQUcsQ0FBQyxDQUF0QixDQURBO0lBRUEsSUFBSUUsQ0FBQyxHQUFHcUIsQ0FBQyxDQUFDaUMsT0FBRixDQUFVWixXQUFWLEdBQXdCeUIsVUFBeEIsQ0FBbUM3QyxDQUFDLENBQUNtQixTQUFGLENBQVlDLFdBQVosR0FBMEJpQyxlQUExQixHQUE0Q2xCLFlBQTVDLEVBQW5DLENBQVI7SUFDQXpELENBQUMsSUFBSUEsQ0FBQyxDQUFDNkUsSUFBRixJQUFVbkYsQ0FBZixJQUFvQjRCLENBQUMsQ0FBQ21CLFNBQUYsQ0FBWUMsV0FBWixHQUEwQmlDLGVBQTFCLEdBQTRDVCxtQkFBNUMsQ0FBZ0V0RSxDQUFoRSxFQUFtRUUsQ0FBbkUsQ0FBcEI7RUFDSCxDQTNFTSxFQTRFUEYsQ0E1RUE7QUE2RUgsQ0F0RkcsQ0FzRkRtQixDQUFDLENBQUNtRSxRQXRGRCxDQWJKOztBQW9HQXBGLENBQUMsQ0FBQ2dCLFlBQUYsR0FBaUJhLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbnZhciBhLCBpID0gdGhpcyAmJiB0aGlzLl9fZXh0ZW5kcyB8fCAoYSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICByZXR1cm4gKGEgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwge1xuICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgfVxuICAgIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHQuX19wcm90b19fID0gZVxuICAgIH0gfHxcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gaW4gZSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIG8pICYmICh0W29dID0gZVtvXSlcbiAgICB9KSh0LCBlKVxufSxcbmZ1bmN0aW9uKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdFxuICAgIH1cbiAgICBhKHQsIGUpLFxuICAgIHQucHJvdG90eXBlID0gbnVsbCA9PT0gZSA/IE9iamVjdC5jcmVhdGUoZSkgOiAoby5wcm90b3R5cGUgPSBlLnByb3RvdHlwZSwgbmV3IG8pXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSksXG5vLk1haW5UYXNrRGF0YSA9IHZvaWQgMDtcbnZhciByID0gdChcIkJhc2VEYXRhXCIpLFxubiA9IHQoXCJCYXNlUGxhdGZvcm1cIiksXG5zID0gdChcIkV2ZW50TWdyXCIpLFxuYyA9IHQoXCJQbGF0Zm9ybU1hbmFnZXJcIiksXG5sID0gdChcIlVJTWdyXCIpLFxudSA9IHQoXCJDb25maWdcIiksXG5wID0gdChcIkRhdGFNZ3JcIiksXG5nID0gdChcIlBsYXllck1nclwiKSxcbmQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmN1clRhc2tJZCA9IDEsXG4gICAgdGhpcy5jdXJUYXNrU3RhdGUgPSAhMSxcbiAgICB0aGlzLmN1clRhc2tQYXJhbWV0ZXIgPSAwXG59LFxuaCA9IGZ1bmN0aW9uKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIHJldHVybiBlLmVjcnlwdCA9ICExLFxuICAgICAgICBlLmdhbWVLZXkgPSB1LkdhbWVDb25maWcuQXBwQ2FjaGVOYW1lICsgXCJ0YXNrRGF0YVwiLFxuICAgICAgICBlLmVuZFRhc2tJZCA9IDEwLFxuICAgICAgICBlLnJlY29yZFRhc2tDb3VudCA9IDAsXG4gICAgICAgIGVcbiAgICB9XG4gICAgcmV0dXJuIGkoZSwgdCksXG4gICAgZS5wcm90b3R5cGUuYWRkUmVjb3JkVGFza0NvdW50ID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0ICYmICh0ID0gZnVuY3Rpb24oKSB7fSksIHRoaXMucmVjb3JkVGFza0NvdW50ICs9IDEsIHRoaXMucmVjb3JkVGFza0NvdW50ID49IDQpIHtcbiAgICAgICAgICAgIGlmICh0ICYmIHQoKSwgYy5QbGF0Zm9ybU1hbmFnZXIuY3VycmVudFBsYXRmb3JtID09IG4uUGxhdGZvcm0uQllURURBTkNFKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBnLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldFNoYXJlRGF0YSgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFJlY29yZCghMSksXG4gICAgICAgICAgICAgICAgZS5nZXRDYW5TaGFyZSgpICYmIGwuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkodS5VSUlELlVJU2hhcmVWaWRlbywgLTEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlc2V0UmVjb3JkVGFza0NvdW50KClcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUucmVzZXRSZWNvcmRUYXNrQ291bnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRUYXNrQ291bnQgPSAwXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEgPSBuZXcgZCxcbiAgICAgICAgdGhpcy5kYXRhXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5pbml0RGF0YSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdCB8fCAodGhpcy5lbmRUYXNrSWQgPSBwLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNaXNzaW9uQ2ZnKCkubGVuZ3RoKVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuZ2V0Q3VycmVudElkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuY3VyVGFza0lkXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5nZXRDdXJyZW50U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jdXJUYXNrU3RhdGVcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmdldEN1cnJlbnRQYXJhbWV0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jdXJUYXNrUGFyYW1ldGVyXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5zZXRDdXJUYXNrU3RhdGUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZvaWQgMCA9PT0gdCAmJiAodCA9ICEwKSxcbiAgICAgICAgdGhpcy5kYXRhLmN1clRhc2tTdGF0ZSA9IHQsXG4gICAgICAgIHMuRXZlbnRNZ3IuZ2V0SW5zdGFuY2UoKS5lbWl0KHUuRXZlbnROYW1lLlJlZnJlc2hNYWluVGFza0ZpbmlzaGVkLCB0KSxcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5hZGRDdXJUYXNrUGFyYW1ldGVyID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0ICYmICh0ID0gMSksIHZvaWQgMCA9PT0gZSAmJiAoZSA9ICExKSwgMSAhPSB0aGlzLmRhdGEuY3VyVGFza1N0YXRlKSB7XG4gICAgICAgICAgICBlID8gdGhpcy5kYXRhLmN1clRhc2tQYXJhbWV0ZXIgPSB0OiB0aGlzLmRhdGEuY3VyVGFza1BhcmFtZXRlciArPSB0O1xuICAgICAgICAgICAgdmFyIG8gPSBwLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNaXNzaW9uKHRoaXMuZ2V0Q3VycmVudElkKCkpO1xuICAgICAgICAgICAgbyAmJiAocy5FdmVudE1nci5nZXRJbnN0YW5jZSgpLmVtaXQodS5FdmVudE5hbWUuUmVmcmVzaE1haW5UYXNrRGVjKSwgdGhpcy5kYXRhLmN1clRhc2tQYXJhbWV0ZXIgPj0gby5UYXNrUGFyYW1ldGVyICYmIHRoaXMuY29tcGxldGVUYXNrKCksIHRoaXMuc2F2ZURhdGEoKSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUudHJhY2tFdmVudCA9IGZ1bmN0aW9uKCkge30sXG4gICAgZS5wcm90b3R5cGUuYWRkVGFza0lkID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2b2lkIDAgPT09IHQgJiYgKHQgPSAhMCksXG4gICAgICAgIHRoaXMuZGF0YS5jdXJUYXNrSWQgKz0gMSxcbiAgICAgICAgdGhpcy5yZXNldFRhc2tEYXRhKCk7XG4gICAgICAgIHZhciBlID0gcC5EYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbih0aGlzLmRhdGEuY3VyVGFza0lkKTtcbiAgICAgICAgcy5FdmVudE1nci5nZXRJbnN0YW5jZSgpLmVtaXQodS5FdmVudE5hbWUuUmVmcmVzaE1haW5UYXNrLCAhMSksXG4gICAgICAgIGUgJiYgKHRoaXMuZGF0YS5jdXJUYXNrU3RhdGUgfHwgZy5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNYWluVGFza0RhdGEoKS5jYXJyYXlUYXNrRm9yVHlwZSh0aGlzLmRhdGEuY3VyVGFza0lkLCBlLlR5cGUpKSxcbiAgICAgICAgdCAmJiB0aGlzLnNhdmVEYXRhKClcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmNvbXBsZXRlVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBwLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNaXNzaW9uKGcuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWFpblRhc2tEYXRhKCkuZ2V0Q3VycmVudElkKCkpICYmIGcuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0TWFpblRhc2tEYXRhKCkuc2V0Q3VyVGFza1N0YXRlKClcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmdldFRhc2tFbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jdXJUYXNrSWQgPj0gdGhpcy5lbmRUYXNrSWRcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLnJlc2V0VGFza0RhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5kYXRhLmN1clRhc2tTdGF0ZSA9ICExLFxuICAgICAgICB0aGlzLmRhdGEuY3VyVGFza1BhcmFtZXRlciA9IDBcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmNhcnJheVRhc2tGb3JUeXBlID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHAuRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldE1pc3Npb24odCk7XG4gICAgICAgIGlmIChlICYmIDEgPT0gZS5UeXBlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IGcuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2VVc2VyRGF0YSgpLmdldEN1clNlYygpO1xuICAgICAgICAgICAgdGhpcy5hZGRDdXJUYXNrUGFyYW1ldGVyKG8gLSAxLCAhMClcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUubWFpblRhc2sgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IDEpLFxuICAgICAgICB2b2lkIDAgPT09IG8gJiYgKG8gPSAhMSk7XG4gICAgICAgIHZhciBhID0gcC5EYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0TWlzc2lvbihnLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1haW5UYXNrRGF0YSgpLmdldEN1cnJlbnRJZCgpKTtcbiAgICAgICAgYSAmJiBhLlR5cGUgPT0gdCAmJiBnLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE1haW5UYXNrRGF0YSgpLmFkZEN1clRhc2tQYXJhbWV0ZXIoZSwgbylcbiAgICB9LFxuICAgIGVcbn0gKHIuQmFzZURhdGEpO1xuby5NYWluVGFza0RhdGEgPSBoIl19