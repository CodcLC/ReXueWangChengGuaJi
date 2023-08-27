"use strict";
cc._RF.push(module, '11a8dapgTpGr6BtdcJA1ZM7', 'UITop');
// scripts/UITop.js

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

var n = t("CommonCfg"),
    s = t("BaseUI"),
    c = t("AudioMgr"),
    l = t("UIMgr"),
    u = t("TimeUtils"),
    p = t("UIUtils"),
    g = t("Utils"),
    d = t("Config"),
    h = t("DataMgr"),
    f = t("PlayerMgr"),
    m = t("TimeMgr"),
    y = cc._decorator,
    v = y.ccclass,
    I = y.property,
    k = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.BtnPower = null, e.BtnGold = null, e.BtnInGot = null, e.goldNum = null, e.goldIcon = null, e.goldLayout = null, e.inGotNum = null, e.inGotIcon = null, e.inGotLayout = null, e.powerNum = null, e.powerIcon = null, e.powerLayout = null, e.LabPowerTime = null, e.LayerTouch = null, e.goldPosArr = [], e;
  }

  return i(e, t), e.prototype.start = function () {
    this.registerEvent(), this.registerBtnEvent(), this.initView();
  }, e.prototype.onEnable = function () {
    var t = this.goldIcon.convertToWorldSpaceAR(cc.Vec2.ZERO);
    this.goldPos = this.goldLayout.convertToNodeSpaceAR(t);
  }, e.prototype.registerEvent = function () {
    this.addEvent(d.EventName.RefreshPower, this.refreshPower), this.addEvent(d.EventName.RefreshGold, this.refreshGold), this.addEvent(d.EventName.RefreshInGot, this.refreshInGot), this.addEvent(d.EventName.RefreshPowerTime, this.refreshAndShowPowerTime);
  }, e.prototype.registerBtnEvent = function () {
    this.BtnPower.on(cc.Node.EventType.TOUCH_END, function () {
      l.UIMgr.getInstance().openUI(d.UIID.UIGeneralWindow, -1, d.GeneralWindowType.PowerWindow);
    }), this.BtnGold.on(cc.Node.EventType.TOUCH_END, function () {
      l.UIMgr.getInstance().openUI(d.UIID.UIGeneralWindow, -1, d.GeneralWindowType.GoldWindow);
    }), this.BtnInGot.on(cc.Node.EventType.TOUCH_END, function () {
      l.UIMgr.getInstance().openUI(d.UIID.UIGeneralWindow, -1, d.GeneralWindowType.InGotWindow);
    });
  }, e.prototype.initView = function () {
    this.userData = f.PlayerMgr.getInstance().geUserData(), this.powerNum.string = this.userData.getPowerNum() + "", this.goldNum.string = this.userData.getGoldNum() + "", this.inGotNum.string = this.userData.getInGotNum() + "", this.calcItemPos(), this.initShowPowerTime();
  }, e.prototype.calcItemPos = function () {
    for (var t = 0; t < this.goldLayout.childrenCount; t++) {
      var e = this.goldLayout.children[t];
      this.goldPosArr.push(e.position);
    }
  }, e.prototype.refreshGold = function (t, e) {
    var o = this,
        a = this.userData.getGoldNum();
    p.UIUtils.rollNumLabelAtlas(e, this.goldNum, t, a, function () {
      o.goldNum.string = o.userData.getGoldNum() + "";
    }, 4);
  }, e.prototype.flyGoldAni = function () {
    for (var t = this, e = 0, o = 0, a = function a(_a2) {
      var r = i.goldLayout.children[_a2];
      r.active = !0, r.position = new cc.Vec3(0, 0, 0);
      var s = g.Utils.randomRang(1.8, 3);
      r.scale = .5, cc.tween(r).delay(e).show().to(.2, {
        position: i.goldPosArr[_a2]
      }).to(.03, {
        scale: s
      }).to(.02, {
        scale: 1
      }).delay(.2).delay(e).call(function () {
        cc.tween(r).to(e + .05, {
          position: new cc.Vec3(t.goldPos.x, t.goldPos.y)
        }).hide().call(function () {
          r.position = t.goldPosArr[_a2], c.AudioMgr.getInstance().playEffect(n.ComAudioId.goldEffect), cc.tween(t.goldIcon).to(.05, {
            scale: 1.5
          }).to(.1, {
            scale: 1
          }).start(), ++o >= t.goldLayout.children.length - 1 && (o = 0, t.sendEvent(n.CommonEventName.GetRewardEnd));
        }).start();
      }).start(), e += .04;
    }, i = this, r = 0; r < this.goldLayout.children.length; r++) {
      a(r);
    }
  }, e.prototype.refreshPower = function (t, e, o, a, i) {
    var r = this;
    void 0 === i && (i = function i() {}), o || (a ? this.flyPowerAni_reverse(a, i) : i());
    var n = this.userData.getPowerNum();
    p.UIUtils.rollNumLabelAtlas(o, this.powerNum, t, n, function () {
      r.powerNum.string = r.userData.getPowerNum() + "";
    }, 4);
  }, e.prototype.flyPowerAni_reverse = function (t, e) {
    var o = this;
    void 0 === e && (e = function e() {}), this.openTouchLayer(!0);

    for (var a = function a(_a3) {
      i.scheduleOnce(function () {
        var i = cc.instantiate(o.powerIcon);
        i.parent = o.node, cc.tween(i).to(.5, {
          position: cc.v3(t.x, t.y, 0)
        }).delay(.1).call(function () {
          5 == _a3 && (o.openTouchLayer(!1), e && e()), i.destroy();
        }).start();
      }, .1 * _a3);
    }, i = this, r = 1; r <= 5; r++) {
      a(r);
    }
  }, e.prototype.refreshInGot = function (t, e) {
    var o = this,
        a = this.userData.getInGotNum();
    p.UIUtils.rollNumLabelAtlas(e, this.inGotNum, t, a, function () {
      o.inGotNum.string = o.userData.getInGotNum() + "";
    }, 4);
  }, e.prototype.initShowPowerTime = function () {
    this.userData.getPowerNum() >= Number(h.DataMgr.getInstance().getParamsCfgForSingle(d.EnumParams.LimitPower).value) ? this.LabPowerTime.node.active = !1 : m.TimeMgr.getInstance().openTimer_power();
  }, e.prototype.refreshAndShowPowerTime = function (t) {
    if (this.userData.getPowerNum() >= Number(h.DataMgr.getInstance().getParamsCfgForSingle(d.EnumParams.LimitPower).value)) this.LabPowerTime.node.active = !1;else {
      var e = u.TimeUtils.SecondToMinutes(t);
      this.LabPowerTime.string = "" + e, this.LabPowerTime.node.active = !0;
    }
  }, e.prototype.openTouchLayer = function (t) {
    this.LayerTouch.active = t;
  }, r([I(cc.Node)], e.prototype, "BtnPower", void 0), r([I(cc.Node)], e.prototype, "BtnGold", void 0), r([I(cc.Node)], e.prototype, "BtnInGot", void 0), r([I(cc.Label)], e.prototype, "goldNum", void 0), r([I(cc.Node)], e.prototype, "goldIcon", void 0), r([I(cc.Node)], e.prototype, "goldLayout", void 0), r([I(cc.Label)], e.prototype, "inGotNum", void 0), r([I(cc.Node)], e.prototype, "inGotIcon", void 0), r([I(cc.Node)], e.prototype, "inGotLayout", void 0), r([I(cc.Label)], e.prototype, "powerNum", void 0), r([I(cc.Node)], e.prototype, "powerIcon", void 0), r([I(cc.Node)], e.prototype, "powerLayout", void 0), r([I(cc.Label)], e.prototype, "LabPowerTime", void 0), r([I({
    type: cc.Node,
    tooltip: "触摸屏蔽层"
  })], e.prototype, "LayerTouch", void 0), r([v], e);
}(s["default"]);

o["default"] = k;

cc._RF.pop();