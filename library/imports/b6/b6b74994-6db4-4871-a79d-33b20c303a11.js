"use strict";
cc._RF.push(module, 'b6b74mUbbRIcaedM7IMMDoR', 'UISign');
// scripts/UISign.js

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
    s = t("LogMgr"),
    c = t("SdkMgr"),
    l = t("TweenMgr"),
    u = t("UIMgr"),
    p = t("TimeUtils"),
    g = t("Utils"),
    d = t("Config"),
    h = t("TrackDataEvent"),
    f = t("DataMgr"),
    m = t("GoodsManager"),
    y = t("PlayerMgr"),
    v = t("ComDataMgr"),
    I = t("ComPlayerMgr"),
    k = cc._decorator,
    C = k.ccclass,
    S = k.property,
    M = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.item = null, e.reissueItem = null, e.btnClose = null, e.signLayout = null, e.signData = null, e.currentItem = null, e.defalutSpritefarm = [], e;
  }

  return i(e, t), e.prototype.start = function () {
    var t = this;
    c.SdkMgr.getInstance().showBanner(), this.signData = I.ComPlayerMgr.getInstance().getSignData();

    for (var e = function e(_e) {
      var a = o.signLayout.getChildByName("" + _e),
          i = v.ComDataMgr.getInstance().getSignById(_e),
          r = f.DataMgr.getInstance().getGoodsCfg(i.rewardId);

      if (o.loadSpriteFrame(r.bundle, r.goodsGameIcon, function (t) {
        a.getChildByName("SpReward").getComponent(cc.Sprite).spriteFrame = t;
      }), a.getChildByName("LabReward").getComponent(cc.Label).string = "x" + i.rewardNum, o.defalutSpritefarm.push(a.getComponent(cc.Sprite).spriteFrame), o.signData.checkIsSigned(_e)) {
        var n = cc.instantiate(o.item);
        n.parent = a, n.active = !0, n.setContentSize(a.getContentSize());
      } else if (o.signData.checkReissue(_e)) {
        var u = cc.instantiate(o.reissueItem);
        u.parent = a, u.position = new cc.Vec3(0, 0), u.active = !0;
        var g = p.TimeUtils.GetTimeBySecond(),
            d = p.TimeUtils.GetTimeByHours2();
        u.on(cc.Node.EventType.TOUCH_END, function () {
          c.SdkMgr.getInstance().playVideo(c.AdType.ReissueSign, function () {
            var o = p.TimeUtils.GetTimeBySecond(),
                i = p.TimeUtils.GetTimeByHours2();
            y.PlayerMgr.getInstance().getTrackData().testTrackTime("signin", d, i, g, o), y.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.signin), y.PlayerMgr.getInstance().getTrackData().youmengTrackNew("signin_b"), u.active = !1, t.startSign(a, _e), u.targetOff(cc.Node.EventType.TOUCH_END), t.closeView();
          });
        });
      } else o.signData.checkCanSign(_e) ? (a.getChildByName("SpSele").active = !0, o.currentItem = a, a.getChildByName("SpSele").active = !0, a.on(cc.Node.EventType.TOUCH_END, function () {
        t.startSign(a, _e), a.targetOff(cc.Node.EventType.TOUCH_END);
      }), l.TweenMgr.getInstance().playHeartAni(a)) : s.LogMgr.getInstance().debug("不可以签到");
    }, o = this, a = 1; a < 8; a++) {
      e(a);
    }

    this.initBtn();
  }, e.prototype.initBtn = function () {
    var t = this;
    this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView();
    });
  }, e.prototype.startSign = function (t, e) {
    l.TweenMgr.getInstance().stopTween(t);
    var o = cc.instantiate(this.item);
    o.parent = t, o.active = !0, o.setContentSize(t.getContentSize()), t.getChildByName("SpSele").active = !1, l.TweenMgr.getInstance().stampAni(o), t.getComponent(cc.Sprite).spriteFrame = this.defalutSpritefarm[e - 1], this.signData.startSign(e);
    var a = v.ComDataMgr.getInstance().getSignById(e);

    switch (f.DataMgr.getInstance().getGoodsCfg(a.rewardId).goodsType) {
      case "gold":
        y.PlayerMgr.getInstance().geUserData().addGoldNum(a.rewardNum), u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "成功领取 金币x" + a.rewardNum);
        break;

      case "inGot":
        y.PlayerMgr.getInstance().geUserData().addInGotNum(a.rewardNum), u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "成功领取 元宝x" + a.rewardNum);
        break;

      case "power":
        y.PlayerMgr.getInstance().geUserData().addPowerNum(a.rewardNum), u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "成功领取 体力x" + a.rewardNum);
        break;

      case "equip":
        var i = m["default"].getInstance().getGoodsCfgForGoodsType(a.rewardId),
            r = f.DataMgr.getInstance().getEquipCfg(Number(i[1]));
        y.PlayerMgr.getInstance().geUserData().addBaseEquip(r);
        var n = m["default"].getInstance().getColorForQuality(r.qualityId);
        u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "成功领取 <color = #" + n + ">" + r.equipName + "</c>x" + a.rewardNum), m["default"].getInstance().isOverEquipBagForIndex() && u.UIMgr.getInstance().openUI(d.UIID.UINotBagIndex, -1);
        break;

      case "skillBook":
        i = m["default"].getInstance().getGoodsCfgForGoodsType(a.rewardId);
        var s = f.DataMgr.getInstance().getSkillBook(Number(i[1]));

        if (y.PlayerMgr.getInstance().geUserData().addSkillBookId(s.id), n = m["default"].getInstance().getColorForQuality(s.qualityId), u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "成功领取 <color = #" + n + ">" + s.name + "</c>x" + a.rewardNum), y.PlayerMgr.getInstance().geUserData().getSkillBookForId(Number(i[1])).level >= s.MaxLevel) {
          var c = f.DataMgr.getInstance().getSkillQuality(s.qualityId),
              p = g.Utils.getTabelArr(c.FullGradeCompensate);
          y.PlayerMgr.getInstance().geUserData().subSkillBookCount(s.id), m["default"].getInstance().getRewardForType(Number(p[0]), Number(p[1]));
          var h = f.DataMgr.getInstance().getGoodsCfg(Number(p[0])).goodsName;
          u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "已达到最大等级，自动转化为 " + h + "x" + p[1]);
        }

    }

    this.closeView();
  }, e.prototype.closeView = function () {
    c.SdkMgr.getInstance().hideBanner(), this.closeUI();
  }, r([S({
    type: cc.Node,
    displayName: "已经签到Item"
  })], e.prototype, "item", void 0), r([S({
    type: cc.Node,
    displayName: "补签item"
  })], e.prototype, "reissueItem", void 0), r([S(cc.Node)], e.prototype, "btnClose", void 0), r([S(cc.Node)], e.prototype, "signLayout", void 0), r([C], e);
}(n["default"]);

o["default"] = M;

cc._RF.pop();