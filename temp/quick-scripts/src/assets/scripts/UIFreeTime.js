"use strict";
cc._RF.push(module, 'ff99crJvAVHW7/eEtlw8hQN', 'UIFreeTime');
// scripts/UIFreeTime.js

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
    s = t("Appcfg"),
    c = t("SdkMgr"),
    l = t("Config"),
    u = t("CommonBirge"),
    p = t("CommonCfg"),
    g = t("ComDataMgr"),
    d = t("ComPlayerMgr"),
    h = cc._decorator,
    f = h.ccclass,
    m = h.property,
    y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.btnClose = null, e.itemLayout = null, e;
  }

  return i(e, t), e.prototype.onLoad = function () {
    this.addEvent(s.BaseEventName.CloseUI, this.eventCloseUI), this.addEvent(p.CommonEventName.GetRewardEnd, this.refreshRewardEnd);
  }, e.prototype.start = function () {
    var t = this;
    this.freeTimeData = d.ComPlayerMgr.getInstance().getFreeTimeData(), this.initBtn();

    for (var e = function e(_e) {
      var a = o.itemLayout.children[_e];
      if (null == g.ComDataMgr.getInstance().getFreeTimeById(_e + 1)) return a.active = !1, "continue";
      a.name = _e + 1 + "";
      var i = o.freeTimeData.getDataById(_e + 1),
          r = a.getChildByName("mask"),
          n = r.getChildByName("icon").getComponent(cc.Sprite);
      r.getChildByName("icon2").y = 150;
      var s = a.getChildByName("num").getComponent(cc.Label),
          c = a.getChildByName("btnOk"),
          l = g.ComDataMgr.getInstance().getFreeTimeItemById(i.itemId),
          u = g.ComDataMgr.getInstance().getGoodsById(l.goodsId);
      o.loadSpriteFrame(u.bundleName, u.rewardIcon, function (t) {
        n.spriteFrame = t;
      }), s.string = "x" + l.rewardNum, l.adNum > 0 ? i.adNum + 1 < l.adNum ? o.refreshItem(a, 1, l.adNum - i.adNum, 0) : o.refreshItem(a, 0, 0, l.goldNum) : o.refreshItem(a, 2, 0, l.goldNum), c.on(cc.Node.EventType.TOUCH_END, function () {
        t.clickItem(_e + 1, a);
      });
    }, o = this, a = 0; a < this.itemLayout.childrenCount; a++) {
      e(a);
    }
  }, e.prototype.clickItem = function (t, e) {
    var o = this,
        a = this.freeTimeData.getDataById(t),
        i = g.ComDataMgr.getInstance().getFreeTimeItemById(a.itemId);
    if (i.adNum > 0) a.adNum + 1 >= i.adNum ? c.SdkMgr.getInstance().playVideo(c.AdType.AdFreeTime, function () {
      var t = a.goodsId + p.CommonCfg.splitNum + i.rewardNum,
          r = e.convertToWorldSpaceAR(cc.Vec2.ZERO);
      d.ComPlayerMgr.getInstance().checkOpenReward(t, r), o.freeTimeData.changleFreeTimedata(a.id), o.item = e, o.curData = a;
    }) : c.SdkMgr.getInstance().playVideo(c.AdType.AdFreeTime, function () {
      o.freeTimeData.addAdNumByData(a), a.adNum + 1 >= i.adNum ? o.refreshItem(e, 0, 0, 0) : o.refreshItem(e, 1, i.adNum - a.adNum, 0);
    });else if (u.CommonBrige.Instance().subGoodsNum(i.goldId, i.goldNum)) {
      var r = a.goodsId + p.CommonCfg.splitNum + i.rewardNum,
          n = e.convertToWorldSpaceAR(cc.Vec2.ZERO);
      d.ComPlayerMgr.getInstance().checkOpenReward(r, n), this.freeTimeData.changleFreeTimedata(a.id), this.item = e, this.curData = a;
    } else this.openUI(l.UIID.UITips, "物品不足");
  }, e.prototype.refreshRewardEnd = function () {
    this.changleItemAni(this.item, this.curData);
  }, e.prototype.eventCloseUI = function (t) {
    t == p.ComUIID.UIReward && this.changleItemAni(this.item, this.curData);
  }, e.prototype.changleItemAni = function (t, e) {
    var o,
        a,
        i = t.getChildByName("mask"),
        r = i.getChildByName("icon").getComponent(cc.Sprite),
        n = i.getChildByName("icon2").getComponent(cc.Sprite);
    r.node.y > 50 ? (a = r, o = n) : (a = n, o = r);
    var s = t.getChildByName("num").getComponent(cc.Label),
        c = g.ComDataMgr.getInstance().getFreeTimeItemById(e.itemId),
        l = g.ComDataMgr.getInstance().getGoodsById(c.goodsId),
        u = t.getChildByName("btnOk");
    u.active = !1, s.string = "", this.loadSpriteFrame(l.bundleName, l.rewardIcon, function (t) {
      a.spriteFrame = t;
    }), cc.tween(o.node).to(1, {
      position: new cc.Vec3(0, -150)
    }).call(function () {
      o.spriteFrame = null, o.node.y = 150;
    }).start(), cc.tween(a.node).to(1, {
      position: new cc.Vec3(0, 12)
    }).call(function () {
      s.string = "x" + c.rewardNum, u.active = !0;
    }).start(), c.adNum > 0 ? e.adNum + 1 < c.adNum ? this.refreshItem(t, 1, c.adNum - e.adNum, 0) : this.refreshItem(t, 0, 0, c.goldNum) : this.refreshItem(t, 2, 0, c.goldNum);
  }, e.prototype.refreshItem = function (t, e, o, a) {
    var i = t.getChildByName("btnOk"),
        r = i.getChildByName("num"),
        n = i.getComponent(cc.Sprite);
    0 == e ? (r.active = !1, this.loadSpriteFrame("comimgs", "button/btn2_adget", function (t) {
      n.spriteFrame = t;
    })) : 1 == e ? (r.active = !0, r.getComponent(cc.Label).string = "x" + o, this.loadSpriteFrame("comimgs", "button/btn2_adNum", function (t) {
      n.spriteFrame = t;
    })) : 2 == e && (r.active = !0, r.getComponent(cc.Label).string = "x" + a, this.loadSpriteFrame("comimgs", "button/btn2_gold", function (t) {
      n.spriteFrame = t;
    }));
  }, e.prototype.initBtn = function () {
    var t = this;
    this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeUI();
    });
  }, r([m(cc.Node)], e.prototype, "btnClose", void 0), r([m(cc.Node)], e.prototype, "itemLayout", void 0), r([f], e);
}(n["default"]);

o["default"] = y;

cc._RF.pop();