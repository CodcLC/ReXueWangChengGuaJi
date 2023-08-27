"use strict";
cc._RF.push(module, '7e5aabTr7NFSrgUmQutQQeE', 'UISkillInfo');
// scripts/UISkillInfo.js

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
    s = t("PoolMgr"),
    c = t("Main"),
    l = t("Config"),
    u = t("DataMgr"),
    p = t("EffectMgr"),
    g = t("PlayerMgr"),
    d = t("UIGuide"),
    h = cc._decorator,
    f = h.ccclass,
    m = h.property,
    y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.NodePlayer = null, e.Player = null, e.NodeGuide = null, e.BtnClose = null, e.SpSkillIcon = null, e.LabSkillName = null, e.LabSkillDec = null, e.curSkillId = 1, e.curSkillData = null, e;
  }

  return i(e, t), e.prototype.init = function (t) {
    this.curSkillId = t || 1;
  }, e.prototype.onLoad = function () {}, e.prototype.start = function () {
    this.registerBtnEvent(), c["default"].instance.controlObjectsAnim(!0), this.initData(), this.initView(), this.guideShow();
  }, e.prototype.guideShow = function () {
    var t = g.PlayerMgr.getInstance().geUserData();

    if (1 == t.getCurSec() && 1 == t.getEnterFirstSecCount()) {
      var e = g.PlayerMgr.getInstance().getGuideData();

      if (!e.getGuideEnd()) {
        var o = e.getCurrentId();
        if (o == 9 + e.putGuideNum) (a = new d.GuildCfg()).distNode = this.NodeGuide, a.tipstring = "部分技能<color=#fce445>升至2星</color>后，可获得<color=#fce445>额外技能效果</color>噢", a.handIndex = cc.v2(200, -200), this.openUICallBack(l.UIID.UIGuide, function () {
          e.addCurrentId();
        }, a);else if (o == 10 + e.putGuideNum) {
          var a;
          (a = new d.GuildCfg()).distNode = this.BtnClose, this.openUICallBack(l.UIID.UIGuide, function () {
            e.addCurrentId();
          }, a);
        }
      }
    }
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView(), c["default"].instance.controlObjectsAnim(!1);
    }), this.NodeGuide.on(cc.Node.EventType.TOUCH_END, function () {
      t.guideShow();
    });
  }, e.prototype.initData = function () {
    this.curSkillData = u.DataMgr.getInstance().getSkill(this.curSkillId);
  }, e.prototype.initView = function () {
    this.initSkillInfo(), this.playSkillAnim();
  }, e.prototype.initSkillInfo = function () {
    var t = this;
    this.loadSpriteFrame(this.curSkillData.bundle, this.curSkillData.skillIcon, function (e) {
      t.SpSkillIcon.spriteFrame = e;
    }), this.LabSkillName.string = this.curSkillData.skillName;
    var e = "";
    -1 == this.curSkillData.damageType ? e = "<color=#1425ff>" + this.curSkillData.skillWeight + "%</color>概率使<color = #d000dd>玩家</color>恢复<color = #f60a0a>" + this.curSkillData.damageValue + "%</color>血量" : 0 == this.curSkillData.damageType ? e = "<color=#1425ff>" + this.curSkillData.skillWeight + "%</color>概率对<color = #d000dd>前方单体</color>目标造成<color = #f60a0a>" + this.curSkillData.damageValue + "%</color>伤害" : 1 == this.curSkillData.damageType ? e = "<color=#1425ff>" + this.curSkillData.skillWeight + "%</color>概率对<color = #d000dd>前方敌人</color>目标造成<color = #f60a0a>" + this.curSkillData.damageValue + "%</color>伤害" : 1 == this.curSkillData.damageType && (e = "<color=#1425ff>" + this.curSkillData.skillWeight + "%</color>概率对<color = #d000dd>全体敌人</color>目标造成<color = #f60a0a>" + this.curSkillData.damageValue + "%</color>伤害"), this.LabSkillDec.string = e;
  }, e.prototype.playSkillAnim = function () {
    var t = this,
        e = this.Player.getComponent(sp.Skeleton);
    e && e.findAnimation(this.curSkillData.skillAnimName) ? (e.setAnimation(0, this.curSkillData.skillAnimName, !0), this.curSkillData.skillEffName && (e.setEventListener(function (e, o) {
      "start" == o.data.name && p["default"].playEff("prefabs", "effect/EffSkill", "EffSkill", t.curSkillData.skillEffName, t.Player, cc.v2(150, 0));
    }), e.setCompleteListener(function () {
      t.recycleNodeEff();
    }))) : console.log("技能不存在！");
  }, e.prototype.recycleNodeEff = function () {
    var t = this.Player.getChildByName("EffSkill");
    cc.isValid(t) && s.PoolMgr.getInstance().freeNode("EffSkill", t);
  }, e.prototype.closeView = function () {
    this.closeUI();
  }, r([m(cc.Node)], e.prototype, "NodePlayer", void 0), r([m(cc.Node)], e.prototype, "Player", void 0), r([m(cc.Node)], e.prototype, "NodeGuide", void 0), r([m(cc.Node)], e.prototype, "BtnClose", void 0), r([m(cc.Sprite)], e.prototype, "SpSkillIcon", void 0), r([m(cc.Label)], e.prototype, "LabSkillName", void 0), r([m(cc.RichText)], e.prototype, "LabSkillDec", void 0), r([f], e);
}(n["default"]);

o["default"] = y;

cc._RF.pop();