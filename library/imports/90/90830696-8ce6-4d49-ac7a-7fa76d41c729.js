"use strict";
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