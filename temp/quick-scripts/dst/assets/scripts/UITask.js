
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UITask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90830aWjOZNSax6f6dtQccp', 'UITask');
// scripts/UITask.js

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
    s = t("SdkMgr"),
    c = t("TweenMgr"),
    l = t("DataMgr"),
    u = t("PlayerMgr"),
    p = t("TaskMgr"),
    g = t("NodeTask"),
    d = cc._decorator,
    h = d.ccclass,
    f = d.property,
    m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.LabTitle = null, e.SpNotGet = null, e.SpCanGet = null, e.SpBgIconArr = [], e.SpIconArr = [], e.NodeTask = null, e.BtnBack = null, e.contentTask = null, e;
  }

  return i(e, t), e.prototype.onLoad = function () {
    this.registerEvent();
  }, e.prototype.start = function () {
    this.abTypeUI(), this.registerBtnEvent(), s.SdkMgr.getInstance().showBanner(), this.initData(), this.initView();
  }, e.prototype.abTypeUI = function () {
    this.LabTitle.string = "成就";
  }, e.prototype.registerEvent = function () {}, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnBack.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView();
    });
  }, e.prototype.initData = function () {}, e.prototype.initView = function () {
    this.initTaskListView();
  }, e.prototype.initTaskListView = function () {
    for (var t = this, e = u.PlayerMgr.getInstance().geUserData().getCurTaskList(), o = [], a = 0; a < e.length; a++) {
      o.push(e[a]);
    }

    var i = l.DataMgr.getInstance().getTaskCfg(),
        r = [];

    for (a = 0; a < i.length; a++) {
      o[i[a].Type - 1].id == i[a].ID && r.push(i[a]);
    }

    o.sort(function (t, e) {
      return e.state - t.state;
    });

    var n = function n(e) {
      for (var a = function a(_a2) {
        o[e].id == r[_a2].ID && s.scheduleOnce(function () {
          var i = cc.instantiate(t.NodeTask);
          i.active = !0, i.parent = t.contentTask, i.setPosition(cc.v2(-650, 0)), t.loadTaskItem(i, r[_a2], o[e]);
          var n = i.getChildByName("LayoutDec");
          t.enterAnimForTask(i, function () {
            cc.isValid(n) && (n.active = !0, c.TweenMgr.getInstance().stampAni(n));
          }), e == o.length - 1 && (t.contentTask.getComponent(cc.Layout).updateLayout(), t.scrollViewEvent_Task());
        }, .1 * e);
      }, i = 0; i < r.length; i++) {
        a(i);
      }
    },
        s = this;

    for (a = 0; a < o.length; a++) {
      n(a);
    }
  }, e.prototype.playEnterAnim = function () {
    for (var t = this, e = function e(_e) {
      o.scheduleOnce(function () {
        var o = t.contentTask.children[_e],
            a = o.getChildByName("LayoutDec");
        t.enterAnimForTask(o, function () {
          cc.isValid(a) && (a.active = !0, c.TweenMgr.getInstance().stampAni(a));
        }), _e == t.contentTask.childrenCount - 1 && (t.contentTask.getComponent(cc.Layout).updateLayout(), t.scrollViewEvent_Task());
      }, .1 * _e);
    }, o = this, a = 0; a < this.contentTask.childrenCount; a++) {
      e(a);
    }
  }, e.prototype.loadTaskItem = function (t, e, o) {
    t.zIndex = -o.state, t.getComponent(g["default"]).initData(e, o), t.getComponent(cc.Sprite).spriteFrame = 1 == o.state ? this.SpCanGet : this.SpNotGet;
    var a = l.DataMgr.getInstance().getGoodsCfg(e.RewardType);
    t.getChildByName("SpIconBg").getComponent(cc.Sprite).spriteFrame = this.SpBgIconArr[a.goodsQualityId - 1], t.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = this.SpIconArr[a.id - 1], t.getChildByName("LabRewardNum").getComponent(cc.Label).string = "x" + e.RewardNum;
    var i = t.getChildByName("LayoutDec");

    if (e.Desc1 && (i.getChildByName("LabTaskDec1").active = !0, i.getChildByName("LabTaskDec1").getComponent(cc.Label).string = e.Desc1), 8 == e.Type) {
      var r = "白色及以上";

      switch (e.TaskParameterType) {
        case 1:
          r = "白色及以上";
          break;

        case 2:
          r = "绿色及以上";
          break;

        case 3:
          r = "蓝色及以上";
          break;

        case 4:
          r = "紫色及以上";
          break;

        case 5:
          r = "橙色及以上";
      }

      i.getChildByName("LabTaskDec2").getComponent(cc.Label).string = "" + r;
    } else i.getChildByName("LabTaskDec2").getComponent(cc.Label).string = "" + e.TaskParameter;

    e.Desc2 && (i.getChildByName("LabTaskDec3").active = !0, i.getChildByName("LabTaskDec3").getComponent(cc.Label).string = e.Desc2);
    var n = p["default"].getInstance().taskNeedCountList[o.type - 1];

    switch (t.getChildByName("SpBar").getComponent(cc.Sprite).fillRange = n / e.TaskParameter, t.getChildByName("LabTaskNum").getComponent(cc.Label).string = n + "/" + e.TaskParameter, o.state) {
      case 0:
        this.taskState(t, !0, !1, !1);
        var s = t.getChildByName("BtnNotGet").getChildByName("LabNotGet").getComponent(cc.Label);
        null == e.JumpRoute ? (s.string = "未完成", t.getChildByName("BtnNotGet").getComponent(cc.Button).interactable = !1) : s.string = "前往";
        break;

      case 1:
        this.taskState(t, !1, !0, !1);
        break;

      case -1:
        this.taskState(t, !1, !1, !0);
    }
  }, e.prototype.taskState = function (t, e, o, a) {
    t.getChildByName("BtnNotGet").active = e, t.getChildByName("BtnGet").active = o, t.getChildByName("SpCompleted").active = a;
  }, e.prototype.enterAnimForTask = function (t, e) {
    cc.isValid(t) && (t.x = -650, cc.tween(t).to(.2, {
      position: cc.v3()
    }).call(function () {
      e && e();
    }).start());
  }, e.prototype.scrollViewEvent_Task = function () {
    for (var t = 0; t < this.contentTask.children.length; t++) {
      var e = this.contentTask.children[t];
      this.visibleRank_Task(e, -826.5, 61.5);
    }
  }, e.prototype.visibleRank_Task = function (t, e, o) {
    var a = t.y + t.parent.y;
    t.opacity = a > e && a < o ? 255 : 0;
  }, e.prototype.closeView = function () {
    s.SdkMgr.getInstance().hideBanner(), this.closeUI(), s.SdkMgr.getInstance().showInsert(s.AdType.FreeLotty);
  }, r([f(cc.Label)], e.prototype, "LabTitle", void 0), r([f(cc.SpriteFrame)], e.prototype, "SpNotGet", void 0), r([f(cc.SpriteFrame)], e.prototype, "SpCanGet", void 0), r([f(cc.SpriteFrame)], e.prototype, "SpBgIconArr", void 0), r([f(cc.SpriteFrame)], e.prototype, "SpIconArr", void 0), r([f({
    type: cc.Node,
    tooltip: "任务节点"
  })], e.prototype, "NodeTask", void 0), r([f(cc.Node)], e.prototype, "BtnBack", void 0), r([f(cc.Node)], e.prototype, "contentTask", void 0), r([h], e);
}(n["default"]);

o["default"] = m;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlUYXNrLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiYSIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJyIiwiX19kZWNvcmF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm4iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImMiLCJsIiwidSIsInAiLCJnIiwiZCIsImNjIiwiX2RlY29yYXRvciIsImgiLCJjY2NsYXNzIiwiZiIsInByb3BlcnR5IiwibSIsImFwcGx5IiwiTGFiVGl0bGUiLCJTcE5vdEdldCIsIlNwQ2FuR2V0IiwiU3BCZ0ljb25BcnIiLCJTcEljb25BcnIiLCJOb2RlVGFzayIsIkJ0bkJhY2siLCJjb250ZW50VGFzayIsIm9uTG9hZCIsInJlZ2lzdGVyRXZlbnQiLCJzdGFydCIsImFiVHlwZVVJIiwicmVnaXN0ZXJCdG5FdmVudCIsIlNka01nciIsImdldEluc3RhbmNlIiwic2hvd0Jhbm5lciIsImluaXREYXRhIiwiaW5pdFZpZXciLCJzdHJpbmciLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJjbG9zZVZpZXciLCJpbml0VGFza0xpc3RWaWV3IiwiUGxheWVyTWdyIiwiZ2VVc2VyRGF0YSIsImdldEN1clRhc2tMaXN0IiwicHVzaCIsIkRhdGFNZ3IiLCJnZXRUYXNrQ2ZnIiwiVHlwZSIsImlkIiwiSUQiLCJzb3J0Iiwic3RhdGUiLCJzY2hlZHVsZU9uY2UiLCJpbnN0YW50aWF0ZSIsImFjdGl2ZSIsInBhcmVudCIsInNldFBvc2l0aW9uIiwidjIiLCJsb2FkVGFza0l0ZW0iLCJnZXRDaGlsZEJ5TmFtZSIsImVudGVyQW5pbUZvclRhc2siLCJpc1ZhbGlkIiwiVHdlZW5NZ3IiLCJzdGFtcEFuaSIsImdldENvbXBvbmVudCIsIkxheW91dCIsInVwZGF0ZUxheW91dCIsInNjcm9sbFZpZXdFdmVudF9UYXNrIiwicGxheUVudGVyQW5pbSIsImNoaWxkcmVuIiwiY2hpbGRyZW5Db3VudCIsInpJbmRleCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiZ2V0R29vZHNDZmciLCJSZXdhcmRUeXBlIiwiZ29vZHNRdWFsaXR5SWQiLCJMYWJlbCIsIlJld2FyZE51bSIsIkRlc2MxIiwiVGFza1BhcmFtZXRlclR5cGUiLCJUYXNrUGFyYW1ldGVyIiwiRGVzYzIiLCJ0YXNrTmVlZENvdW50TGlzdCIsInR5cGUiLCJmaWxsUmFuZ2UiLCJ0YXNrU3RhdGUiLCJKdW1wUm91dGUiLCJCdXR0b24iLCJpbnRlcmFjdGFibGUiLCJ4IiwidHdlZW4iLCJ0byIsInBvc2l0aW9uIiwidjMiLCJ2aXNpYmxlUmFua19UYXNrIiwieSIsIm9wYWNpdHkiLCJoaWRlQmFubmVyIiwiY2xvc2VVSSIsInNob3dJbnNlcnQiLCJBZFR5cGUiLCJGcmVlTG90dHkiLCJTcHJpdGVGcmFtZSIsInRvb2x0aXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSOztBQUNBLElBQUlDLEVBQUo7QUFBQSxJQUFPQyxDQUFDLEdBQUcsVUFBUSxTQUFLQyxTQUFiLEtBQTJCRixFQUFDLEdBQUcsV0FBU04sQ0FBVCxFQUFZRSxDQUFaLEVBQWU7RUFDckQsT0FBTyxDQUFDSSxFQUFDLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBUCxJQUF5QjtJQUNqQ0MsU0FBUyxFQUFFO0VBRHNCLGFBRzFCQyxLQUgwQixJQUlyQyxVQUFTWixDQUFULEVBQVlFLENBQVosRUFBZTtJQUNYRixDQUFD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c291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbnZhciBhLCBpID0gdGhpcyAmJiB0aGlzLl9fZXh0ZW5kcyB8fCAoYSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICByZXR1cm4gKGEgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwge1xuICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgfVxuICAgIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHQuX19wcm90b19fID0gZVxuICAgIH0gfHxcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gaW4gZSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIG8pICYmICh0W29dID0gZVtvXSlcbiAgICB9KSh0LCBlKVxufSxcbmZ1bmN0aW9uKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdFxuICAgIH1cbiAgICBhKHQsIGUpLFxuICAgIHQucHJvdG90eXBlID0gbnVsbCA9PT0gZSA/IE9iamVjdC5jcmVhdGUoZSkgOiAoby5wcm90b3R5cGUgPSBlLnByb3RvdHlwZSwgbmV3IG8pXG59KSxcbnIgPSB0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSB8fFxuZnVuY3Rpb24odCwgZSwgbywgYSkge1xuICAgIHZhciBpLCByID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICBuID0gciA8IDMgPyBlOiBudWxsID09PSBhID8gYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgbykgOiBhO1xuICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBSZWZsZWN0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSkgbiA9IFJlZmxlY3QuZGVjb3JhdGUodCwgZSwgbywgYSk7XG4gICAgZWxzZSBmb3IgKHZhciBzID0gdC5sZW5ndGggLSAxOyBzID49IDA7IHMtLSkoaSA9IHRbc10pICYmIChuID0gKHIgPCAzID8gaShuKSA6IHIgPiAzID8gaShlLCBvLCBuKSA6IGkoZSwgbykpIHx8IG4pO1xuICAgIHJldHVybiByID4gMyAmJiBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBvLCBuKSxcbiAgICBuXG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KTtcbnZhciBuID0gdChcIkJhc2VVSVwiKSxcbnMgPSB0KFwiU2RrTWdyXCIpLFxuYyA9IHQoXCJUd2Vlbk1nclwiKSxcbmwgPSB0KFwiRGF0YU1nclwiKSxcbnUgPSB0KFwiUGxheWVyTWdyXCIpLFxucCA9IHQoXCJUYXNrTWdyXCIpLFxuZyA9IHQoXCJOb2RlVGFza1wiKSxcbmQgPSBjYy5fZGVjb3JhdG9yLFxuaCA9IGQuY2NjbGFzcyxcbmYgPSBkLnByb3BlcnR5LFxubSA9IGZ1bmN0aW9uKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIHJldHVybiBlLkxhYlRpdGxlID0gbnVsbCxcbiAgICAgICAgZS5TcE5vdEdldCA9IG51bGwsXG4gICAgICAgIGUuU3BDYW5HZXQgPSBudWxsLFxuICAgICAgICBlLlNwQmdJY29uQXJyID0gW10sXG4gICAgICAgIGUuU3BJY29uQXJyID0gW10sXG4gICAgICAgIGUuTm9kZVRhc2sgPSBudWxsLFxuICAgICAgICBlLkJ0bkJhY2sgPSBudWxsLFxuICAgICAgICBlLmNvbnRlbnRUYXNrID0gbnVsbCxcbiAgICAgICAgZVxuICAgIH1cbiAgICByZXR1cm4gaShlLCB0KSxcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KClcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWJUeXBlVUkoKSxcbiAgICAgICAgdGhpcy5yZWdpc3RlckJ0bkV2ZW50KCksXG4gICAgICAgIHMuU2RrTWdyLmdldEluc3RhbmNlKCkuc2hvd0Jhbm5lcigpLFxuICAgICAgICB0aGlzLmluaXREYXRhKCksXG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuYWJUeXBlVUkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5MYWJUaXRsZS5zdHJpbmcgPSBcIuaIkOWwsVwiXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50ID0gZnVuY3Rpb24oKSB7fSxcbiAgICBlLnByb3RvdHlwZS5yZWdpc3RlckJ0bkV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5CdG5CYWNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0LmNsb3NlVmlldygpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5pbml0RGF0YSA9IGZ1bmN0aW9uKCkge30sXG4gICAgZS5wcm90b3R5cGUuaW5pdFZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pbml0VGFza0xpc3RWaWV3KClcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmluaXRUYXNrTGlzdFZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IHRoaXMsXG4gICAgICAgIGUgPSB1LlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdlVXNlckRhdGEoKS5nZXRDdXJUYXNrTGlzdCgpLCBvID0gW10sIGEgPSAwOyBhIDwgZS5sZW5ndGg7IGErKykgby5wdXNoKGVbYV0pO1xuICAgICAgICB2YXIgaSA9IGwuRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFRhc2tDZmcoKSxcbiAgICAgICAgciA9IFtdO1xuICAgICAgICBmb3IgKGEgPSAwOyBhIDwgaS5sZW5ndGg7IGErKykgb1tpW2FdLlR5cGUgLSAxXS5pZCA9PSBpW2FdLklEICYmIHIucHVzaChpW2FdKTtcbiAgICAgICAgby5zb3J0KGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnN0YXRlIC0gdC5zdGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG4gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICAgIG9bZV0uaWQgPT0gclthXS5JRCAmJiBzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBjYy5pbnN0YW50aWF0ZSh0Lk5vZGVUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgaS5hY3RpdmUgPSAhMCxcbiAgICAgICAgICAgICAgICAgICAgaS5wYXJlbnQgPSB0LmNvbnRlbnRUYXNrLFxuICAgICAgICAgICAgICAgICAgICBpLnNldFBvc2l0aW9uKGNjLnYyKCAtIDY1MCwgMCkpLFxuICAgICAgICAgICAgICAgICAgICB0LmxvYWRUYXNrSXRlbShpLCByW2FdLCBvW2VdKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBpLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0RGVjXCIpO1xuICAgICAgICAgICAgICAgICAgICB0LmVudGVyQW5pbUZvclRhc2soaSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5pc1ZhbGlkKG4pICYmIChuLmFjdGl2ZSA9ICEwLCBjLlR3ZWVuTWdyLmdldEluc3RhbmNlKCkuc3RhbXBBbmkobikpXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBlID09IG8ubGVuZ3RoIC0gMSAmJiAodC5jb250ZW50VGFzay5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKSwgdC5zY3JvbGxWaWV3RXZlbnRfVGFzaygpKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLjEgKiBlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykgYShpKVxuICAgICAgICB9LFxuICAgICAgICBzID0gdGhpcztcbiAgICAgICAgZm9yIChhID0gMDsgYSA8IG8ubGVuZ3RoOyBhKyspIG4oYSlcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLnBsYXlFbnRlckFuaW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IHRoaXMsXG4gICAgICAgIGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBvLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHQuY29udGVudFRhc2suY2hpbGRyZW5bZV0sXG4gICAgICAgICAgICAgICAgYSA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJMYXlvdXREZWNcIik7XG4gICAgICAgICAgICAgICAgdC5lbnRlckFuaW1Gb3JUYXNrKG8sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmlzVmFsaWQoYSkgJiYgKGEuYWN0aXZlID0gITAsIGMuVHdlZW5NZ3IuZ2V0SW5zdGFuY2UoKS5zdGFtcEFuaShhKSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBlID09IHQuY29udGVudFRhc2suY2hpbGRyZW5Db3VudCAtIDEgJiYgKHQuY29udGVudFRhc2suZ2V0Q29tcG9uZW50KGNjLkxheW91dCkudXBkYXRlTGF5b3V0KCksIHQuc2Nyb2xsVmlld0V2ZW50X1Rhc2soKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuMSAqIGUpXG4gICAgICAgIH0sXG4gICAgICAgIG8gPSB0aGlzLCBhID0gMDsgYSA8IHRoaXMuY29udGVudFRhc2suY2hpbGRyZW5Db3VudDsgYSsrKSBlKGEpXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5sb2FkVGFza0l0ZW0gPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgIHQuekluZGV4ID0gLW8uc3RhdGUsXG4gICAgICAgIHQuZ2V0Q29tcG9uZW50KGcuZGVmYXVsdCkuaW5pdERhdGEoZSwgbyksXG4gICAgICAgIHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSAxID09IG8uc3RhdGUgPyB0aGlzLlNwQ2FuR2V0OiB0aGlzLlNwTm90R2V0O1xuICAgICAgICB2YXIgYSA9IGwuRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEdvb2RzQ2ZnKGUuUmV3YXJkVHlwZSk7XG4gICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJTcEljb25CZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuU3BCZ0ljb25BcnJbYS5nb29kc1F1YWxpdHlJZCAtIDFdLFxuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiU3BJY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5TcEljb25BcnJbYS5pZCAtIDFdLFxuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiTGFiUmV3YXJkTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJ4XCIgKyBlLlJld2FyZE51bTtcbiAgICAgICAgdmFyIGkgPSB0LmdldENoaWxkQnlOYW1lKFwiTGF5b3V0RGVjXCIpO1xuICAgICAgICBpZiAoZS5EZXNjMSAmJiAoaS5nZXRDaGlsZEJ5TmFtZShcIkxhYlRhc2tEZWMxXCIpLmFjdGl2ZSA9ICEwLCBpLmdldENoaWxkQnlOYW1lKFwiTGFiVGFza0RlYzFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBlLkRlc2MxKSwgOCA9PSBlLlR5cGUpIHtcbiAgICAgICAgICAgIHZhciByID0gXCLnmb3oibLlj4rku6XkuIpcIjtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5UYXNrUGFyYW1ldGVyVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgciA9IFwi55m96Imy5Y+K5Lul5LiKXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByID0gXCLnu7/oibLlj4rku6XkuIpcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBcIuiTneiJsuWPiuS7peS4ilwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgciA9IFwi57Sr6Imy5Y+K5Lul5LiKXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByID0gXCLmqZnoibLlj4rku6XkuIpcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJUYXNrRGVjMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyByXG4gICAgICAgIH0gZWxzZSBpLmdldENoaWxkQnlOYW1lKFwiTGFiVGFza0RlYzJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgZS5UYXNrUGFyYW1ldGVyO1xuICAgICAgICBlLkRlc2MyICYmIChpLmdldENoaWxkQnlOYW1lKFwiTGFiVGFza0RlYzNcIikuYWN0aXZlID0gITAsIGkuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJUYXNrRGVjM1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGUuRGVzYzIpO1xuICAgICAgICB2YXIgbiA9IHAuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLnRhc2tOZWVkQ291bnRMaXN0W28udHlwZSAtIDFdO1xuICAgICAgICBzd2l0Y2ggKHQuZ2V0Q2hpbGRCeU5hbWUoXCJTcEJhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSBuIC8gZS5UYXNrUGFyYW1ldGVyLCB0LmdldENoaWxkQnlOYW1lKFwiTGFiVGFza051bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG4gKyBcIi9cIiArIGUuVGFza1BhcmFtZXRlciwgby5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMudGFza1N0YXRlKHQsICEwLCAhMSwgITEpO1xuICAgICAgICAgICAgdmFyIHMgPSB0LmdldENoaWxkQnlOYW1lKFwiQnRuTm90R2V0XCIpLmdldENoaWxkQnlOYW1lKFwiTGFiTm90R2V0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBudWxsID09IGUuSnVtcFJvdXRlID8gKHMuc3RyaW5nID0gXCLmnKrlrozmiJBcIiwgdC5nZXRDaGlsZEJ5TmFtZShcIkJ0bk5vdEdldFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSAhMSkgOiBzLnN0cmluZyA9IFwi5YmN5b6AXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tTdGF0ZSh0LCAhMSwgITAsICExKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAtIDEgOiB0aGlzLnRhc2tTdGF0ZSh0LCAhMSwgITEsICEwKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUudGFza1N0YXRlID0gZnVuY3Rpb24odCwgZSwgbywgYSkge1xuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiQnRuTm90R2V0XCIpLmFjdGl2ZSA9IGUsXG4gICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJCdG5HZXRcIikuYWN0aXZlID0gbyxcbiAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcIlNwQ29tcGxldGVkXCIpLmFjdGl2ZSA9IGFcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmVudGVyQW5pbUZvclRhc2sgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGNjLmlzVmFsaWQodCkgJiYgKHQueCA9IC02NTAsIGNjLnR3ZWVuKHQpLnRvKC4yLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogY2MudjMoKVxuICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZSAmJiBlKClcbiAgICAgICAgfSkuc3RhcnQoKSlcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLnNjcm9sbFZpZXdFdmVudF9UYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5jb250ZW50VGFzay5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNvbnRlbnRUYXNrLmNoaWxkcmVuW3RdO1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlUmFua19UYXNrKGUsIC04MjYuNSwgNjEuNSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUudmlzaWJsZVJhbmtfVGFzayA9IGZ1bmN0aW9uKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIGEgPSB0LnkgKyB0LnBhcmVudC55O1xuICAgICAgICB0Lm9wYWNpdHkgPSBhID4gZSAmJiBhIDwgbyA/IDI1NSA6IDBcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmNsb3NlVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzLlNka01nci5nZXRJbnN0YW5jZSgpLmhpZGVCYW5uZXIoKSxcbiAgICAgICAgdGhpcy5jbG9zZVVJKCksXG4gICAgICAgIHMuU2RrTWdyLmdldEluc3RhbmNlKCkuc2hvd0luc2VydChzLkFkVHlwZS5GcmVlTG90dHkpXG4gICAgfSxcbiAgICByKFtmKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcIkxhYlRpdGxlXCIsIHZvaWQgMCksXG4gICAgcihbZihjYy5TcHJpdGVGcmFtZSldLCBlLnByb3RvdHlwZSwgXCJTcE5vdEdldFwiLCB2b2lkIDApLFxuICAgIHIoW2YoY2MuU3ByaXRlRnJhbWUpXSwgZS5wcm90b3R5cGUsIFwiU3BDYW5HZXRcIiwgdm9pZCAwKSxcbiAgICByKFtmKGNjLlNwcml0ZUZyYW1lKV0sIGUucHJvdG90eXBlLCBcIlNwQmdJY29uQXJyXCIsIHZvaWQgMCksXG4gICAgcihbZihjYy5TcHJpdGVGcmFtZSldLCBlLnByb3RvdHlwZSwgXCJTcEljb25BcnJcIiwgdm9pZCAwKSxcbiAgICByKFtmKHtcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgdG9vbHRpcDogXCLku7vliqHoioLngrlcIlxuICAgIH0pXSwgZS5wcm90b3R5cGUsIFwiTm9kZVRhc2tcIiwgdm9pZCAwKSxcbiAgICByKFtmKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiQnRuQmFja1wiLCB2b2lkIDApLFxuICAgIHIoW2YoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJjb250ZW50VGFza1wiLCB2b2lkIDApLFxuICAgIHIoW2hdLCBlKVxufSAobi5kZWZhdWx0KTtcbm8uZGVmYXVsdCA9IG0iXX0=