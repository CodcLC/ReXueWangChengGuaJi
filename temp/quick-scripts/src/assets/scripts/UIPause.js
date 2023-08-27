"use strict";
cc._RF.push(module, '509f8YaN4xM67GQE8D6pOgv', 'UIPause');
// scripts/UIPause.js

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
    s = t("AudioMgr"),
    c = t("ResourceMgr"),
    l = t("SdkMgr"),
    u = t("UIMgr"),
    p = t("Main"),
    g = t("Config"),
    d = t("DataMgr"),
    h = t("GameDataMgr"),
    f = t("GameMgr"),
    m = t("GoodsManager"),
    y = cc._decorator,
    v = y.ccclass,
    I = y.property,
    k = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.NodeRewardItem = null, e.BtnContinue = null, e.BtnFreeGet = null, e.LayoutReward = null, e.SpLevelBar = null, e.LabLevelNum = null, e.callback = function () {}, e.curSec = 1, e.curLevel = 1, e;
  }

  return i(e, t), e.prototype.init = function (t, e, o) {
    this.callback = t || function () {}, this.curSec = e || 1, this.curLevel = o || 1;
  }, e.prototype.onLoad = function () {}, e.prototype.start = function () {
    this.registerBtnEvent(), l.SdkMgr.getInstance().showBanner(), this.initData(), this.initView();
  }, e.prototype.carryCallback = function () {
    this.callback && this.callback();
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnContinue.on(cc.Node.EventType.TOUCH_END, function () {
      p["default"].instance.isLookSkill || h["default"].getInstance().setGameState(g.EnumGameState.GameDoing), p["default"].instance.controlObjectsAnim(!1), t.closeView();
    }), this.BtnFreeGet.on(cc.Node.EventType.TOUCH_END, function () {
      p["default"].instance.isLookSkill && u.UIMgr.getInstance().closeById(g.UIID.UIDrawCard), p["default"].instance.openPetTimer(), t.carryCallback();
      var e = h["default"].getInstance().getDropGoodsList();
      m["default"].getInstance().getReward(e), h["default"].getInstance().resetDropGoodsData(), f["default"].getInstance().openHomeUI(), s.AudioMgr.getInstance().playMusic(g.AudioId.BGM_Main, "bg"), h["default"].getInstance().setGameState(g.EnumGameState.GamePrePare), t.closeView();
    });
  }, e.prototype.initData = function () {}, e.prototype.initView = function () {
    this.initBarView(), this.initRewardView();
  }, e.prototype.initBarView = function () {
    var t = d.DataMgr.getInstance().getSecCfg(this.curSec).levelCount;
    this.LabLevelNum.string = this.curLevel + "/" + t, this.SpLevelBar.fillRange = this.curLevel / t;
  }, e.prototype.initRewardView = function () {
    for (var t = this, e = h["default"].getInstance().getDropGoodsList(), o = function o(_o) {
      a.scheduleOnce(function () {
        var a = cc.instantiate(t.NodeRewardItem);
        a.parent = t.LayoutReward, a.position = cc.Vec3.ZERO;
        var i,
            r = d.DataMgr.getInstance().getGoodsCfg(e[_o].id);

        switch (c.ResourceMgr.getInstance().loadSpriteframe(r.bundleQuality, r.iconQuality, function (t) {
          a.getComponent(cc.Sprite).spriteFrame = t;
        }), a.getChildByName("LabName").color = m["default"].getInstance().seleColor(r.goodsQualityId), e[_o].goodsType) {
          case "gold":
          case "inGot":
          case "power":
            i = d.DataMgr.getInstance().getGoodsCfg(e[_o].goodsId), c.ResourceMgr.getInstance().loadSpriteframe(i.bundle, i.goodsGameIcon, function (t) {
              a.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t;
            }), a.getChildByName("LabCount").getComponent(cc.Label).string = "x" + e[_o].iCount, a.getChildByName("LabName").getComponent(cc.Label).string = "" + i.goodsName;
            break;

          case "equip":
            i = d.DataMgr.getInstance().getEquipCfg(e[_o].goodsId), c.ResourceMgr.getInstance().loadSpriteframe(i.bundle, i.equipIcon, function (t) {
              a.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t;
            }), a.getChildByName("LabCount").active = !1, a.getChildByName("LabName").getComponent(cc.Label).string = "" + i.equipName;
            break;

          case "skillBook":
            i = d.DataMgr.getInstance().getSkillBook(e[_o].goodsId);
            var n = d.DataMgr.getInstance().getSkillQuality(i.qualityId);
            a.getChildByName("LabSkillBookName").active = !0, a.getChildByName("LabSkillBookName").getComponent(cc.Label).string = i.name, a.getChildByName("SpIcon").scale = .75, c.ResourceMgr.getInstance().loadSpriteframe(n.bundle, n.iconImg, function (t) {
              a.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t;
            }), a.getChildByName("LabCount").active = !1, a.getChildByName("LabName").getComponent(cc.Label).string = "" + i.name;
        }
      }, .02 * _o);
    }, a = this, i = 0; i < e.length; i++) {
      o(i);
    }
  }, e.prototype.closeView = function () {
    l.SdkMgr.getInstance().hideBanner(), this.closeUI();
  }, r([I({
    type: cc.Prefab,
    tooltip: "奖励item"
  })], e.prototype, "NodeRewardItem", void 0), r([I(cc.Node)], e.prototype, "BtnContinue", void 0), r([I(cc.Node)], e.prototype, "BtnFreeGet", void 0), r([I(cc.Node)], e.prototype, "LayoutReward", void 0), r([I(cc.Sprite)], e.prototype, "SpLevelBar", void 0), r([I(cc.Label)], e.prototype, "LabLevelNum", void 0), r([v], e);
}(n["default"]);

o["default"] = k;

cc._RF.pop();