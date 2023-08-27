"use strict";
cc._RF.push(module, '19ea9LDs59B3Z27VAuArRUs', 'UIEquipInfo');
// scripts/UIEquipInfo.js

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
    c = t("EventMgr"),
    l = t("SdkMgr"),
    u = t("UIMgr"),
    p = t("TimeUtils"),
    g = t("Utils"),
    d = t("Config"),
    h = t("TrackDataEvent"),
    f = t("DataMgr"),
    m = t("EffectMgr"),
    y = t("EquipMgr"),
    v = t("PlayerMgr"),
    I = t("TaskMgr"),
    k = t("UIGuide"),
    C = cc._decorator,
    S = C.ccclass,
    M = C.property,
    _ = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.SpLock = null, e.SpUnlock = null, e.SpUp = null, e.SpDown = null, e.LayoutProp = null, e.BtnLock = null, e.BtnClose = null, e.LayoutBg = null, e.NodeStar = null, e.SpIconBg = null, e.SpIcon = null, e.LabStrengthenLv = null, e.LabName = null, e.LabFightNum = null, e.LabType = null, e.LabLv = null, e.LayoutEquipProp = null, e.LayoutEquipSuitInfo = null, e.LayoutEquipBtnInfo = null, e.LayoutBtn = null, e.LayoutCost = null, e.LabCoinCount = null, e.BtnQH = null, e.BtnVideoQH = null, e.BtnHC = null, e.BtnSell = null, e.BtnReplace = null, e.BtnUnload = null, e.equipData_wear = null, e.curEquipData = null, e.pos = cc.Vec3.ZERO, e.equipCfgData = null, e.strengthenCfgData = null, e.showType = y.EnumEquipInfo.EnumNoShow, e.isExistEquip = !1, e.curBagIndex = -1, e;
  }

  return i(e, t), e.prototype.init = function (t, e, o, a, i) {
    this.equipData_wear = t, this.curEquipData = e, this.pos = o || cc.Vec3.ZERO, this.showType = a || y.EnumEquipInfo.EnumNoShow, this.curBagIndex = i >= 0 ? i : -1;
  }, e.prototype.start = function () {
    c.EventMgr.getInstance().emit(d.EventName.ShowUITop, !1), this.registerBtnEvent(), this.initData(), this.initView(), this.guideShow();
  }, e.prototype.getAbType = function () {
    return this.abType || (this.abType = v.PlayerMgr.getInstance().getAbType()), this.abType;
  }, e.prototype.guideShow = function () {
    var t = v.PlayerMgr.getInstance().getGuideData();

    if (!t.getGuideEnd() && t.getCurrentId() == 15 + t.putGuideNum) {
      var e = new k.GuildCfg();
      e.distNode = this.BtnReplace, e.tipstring = "刚刚虽然没出什么极品，但是凑合先用着吧", e.yDec = -150, this.openUICallBack(d.UIID.UIGuide, function () {
        t.addCurrentId();
      }, e);
    }
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnLock.on(cc.Node.EventType.TOUCH_END, function () {
      v.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.click_lock), t.curEquipData.isUnlock = !t.curEquipData.isUnlock, t.initUnlockState(), y["default"].getInstance().unlockEquip(t.curBagIndex, t.curEquipData);
    }), this.BtnClose.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView();
    }), this.BtnQH.on(cc.Node.EventType.TOUCH_END, function () {
      t.BtnQH.getComponent(cc.Button).interactable && t.strengthenEquip();
    }), this.BtnVideoQH.on(cc.Node.EventType.TOUCH_END, function () {
      if (t.curEquipData.strengthenLv >= t.equipCfgData.strengthenMaxLv) return u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "强化已到达最大等级"), void t.loadInfo();
      var e = p.TimeUtils.GetTimeBySecond(),
          o = p.TimeUtils.GetTimeByHours2();
      l.SdkMgr.getInstance().playVideo(1, function () {
        var a = p.TimeUtils.GetTimeBySecond(),
            i = p.TimeUtils.GetTimeByHours2();
        v.PlayerMgr.getInstance().getTrackData().testTrackTime("upgradeequip", o, i, e, a), v.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.upgradeequip), v.PlayerMgr.getInstance().getTrackData().youmengTrackNew("upgradeequip_b"), t.strengthenEquip(!0);
      });
    }), this.BtnSell.on(cc.Node.EventType.TOUCH_END, function () {
      if (t.curEquipData.isUnlock) {
        v.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.click_equip_sale), y["default"].getInstance().sellEquip(t.curBagIndex, t.curEquipData);
        var e;
        e = "B" == t.getAbType() || "D" == t.getAbType() ? y["default"].getInstance().getEquipSellValue(t.curEquipData.id, t.curEquipData.type, t.curEquipData.IDCard, t.curEquipData) : t.strengthenCfgData.sellPrice, v.PlayerMgr.getInstance().geUserData().addGoldNum(e), u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "出售成功，获得" + e + "金币"), t.closeView();
      } else u.UIMgr.getInstance().openUI(d.UIID.UITips, d.UIID.UIEquip, "已加锁装备无法出售");
    }), this.BtnReplace.on(cc.Node.EventType.TOUCH_END, function () {
      t.isExistEquip ? y["default"].getInstance().replaceEquip(t.curBagIndex, t.equipData_wear, t.curEquipData) : (y["default"].getInstance().wearEquip(t.curBagIndex, t.curEquipData), t.sendEvent(d.EventName.EquipGuideShow)), t.closeView();
    }), this.BtnUnload.on(cc.Node.EventType.TOUCH_END, function () {
      v.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.click_equip_unfix), y["default"].getInstance().unloadEquip(t.curEquipData), t.closeView();
    }), cc.isValid(this.BtnHC) && this.BtnHC.on(cc.Node.EventType.TOUCH_END, function () {
      t.curEquipData.starLevel >= 5 ? u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "该装备已达到最大星级") : (v.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.click_refine), u.UIMgr.getInstance().openUI(d.UIID.UIEquipComposite, -1, t.curEquipData), u.UIMgr.getInstance().closeById(d.UIID.UIEquip), t.closeView());
    });
  }, e.prototype.playEffForPropUp = function () {
    for (var t = 1; t < 10; t++) {
      var e = this.LayoutEquipProp.getChildByName("LayoutProp" + t);
      cc.isValid(e) && m["default"].playEffectForEffId(d.EnumEffID.EffPropUp, e, null, 180);
    }
  }, e.prototype.playEffForUpLv = function () {
    m["default"].playEffectForEffId(d.EnumEffID.EffUpLv, this.SpIcon.node);
  }, e.prototype.initData = function () {
    this.equipCfgData = f.DataMgr.getInstance().getEquipCfg(this.curEquipData.id), "A" != this.getAbType() && "C" != this.getAbType() || (this.strengthenCfgData = f.DataMgr.getInstance().getEquipStrengthenCfg1(this.equipCfgData.strengthenStartId, this.curEquipData.strengthenLv)), this.initIsExistEquip();
  }, e.prototype.initIsExistEquip = function () {
    this.equipData_wear && (this.isExistEquip = !0);
  }, e.prototype.initView = function () {
    this.showBtnVideoQH(), this.equipQHForRedDot(), "B" != this.getAbType() && "D" != this.getAbType() || this.equipHCForRedDot(), this.initUnlockState(), this.loadEquipInfo(), this.loadEquipSuitInfo(), this.loadInfo();
  }, e.prototype.showBtnVideoQH = function () {
    "B" != this.getAbType() && "D" != this.getAbType() || (this.BtnVideoQH.active = !0, this.LayoutBtn.getComponent(cc.Layout).spacingX = 20, this.LayoutBtn.getComponent(cc.Layout).updateLayout());
  }, e.prototype.equipQHForRedDot = function () {
    if ("B" == this.getAbType() || "D" == this.getAbType()) {
      var t = !1,
          e = 0,
          o = f.DataMgr.getInstance().getEquipCfg(this.curEquipData.id),
          a = g.Utils.getTabelArr1(o.consume),
          i = this.curEquipData.strengthenLv;
      i < o.strengthenMaxLv && (e = Number(a[Math.floor(i / 10)][1]), t = v.PlayerMgr.getInstance().geUserData().getGoldNum() >= e), this.BtnQH.getChildByName("SpRedDot").active = t;
    } else this.showType == y.EnumEquipInfo.EnumStrengthen && (t = !1, e = 0, e = this.strengthenCfgData.consume, t = v.PlayerMgr.getInstance().geUserData().getGoldNum() >= e, this.BtnQH.getChildByName("SpRedDot").active = t);
  }, e.prototype.equipHCForRedDot = function () {
    if ("B" == this.getAbType() || "D" == this.getAbType()) {
      for (var t = !1, e = y["default"].getInstance().getOwmedEquipForEquipType(this.curEquipData.type), o = 0; o < e.length; o++) {
        if (e[o].IDCard != this.curEquipData.IDCard && e[o].id == this.curEquipData.id && e[o].type == this.curEquipData.type && e[o].starLevel == this.curEquipData.starLevel) {
          t = !0;
          break;
        }
      }

      this.BtnHC.getChildByName("SpRedDot").active = t;
    }
  }, e.prototype.initUnlockState = function () {
    switch (this.showType) {
      case y.EnumEquipInfo.EnumSell:
        this.BtnLock.active = !0, this.BtnLock.getChildByName("SpLock").getComponent(cc.Sprite).spriteFrame = this.curEquipData.isUnlock ? this.SpUnlock : this.SpLock;
        break;

      default:
        this.BtnLock.active = !1;
    }
  }, e.prototype.initLayoutBgPos = function () {
    this.pos.x > 0 ? this.pos.y > 0 ? this.LayoutBg.setAnchorPoint(cc.v2(1, 1)) : this.LayoutBg.setAnchorPoint(cc.v2(1, 0)) : this.pos.y > 0 ? this.LayoutBg.setAnchorPoint(cc.v2(0, 1)) : this.LayoutBg.setAnchorPoint(cc.v2(0, 0)), this.LayoutBg.position = this.pos;
  }, e.prototype.loadEquipInfo = function () {
    var t = this;

    if (this.loadSpriteFrame(this.equipCfgData.bundleQuality, this.equipCfgData.iconQuality, function (e) {
      t.SpIconBg.spriteFrame = e;
    }), this.loadSpriteFrame(this.equipCfgData.bundle, this.equipCfgData.equipIcon, function (e) {
      t.SpIcon.spriteFrame = e;
    }), this.curEquipData.strengthenLv > 0 ? (this.LabStrengthenLv.node.active = !0, this.LabStrengthenLv.string = "+" + this.curEquipData.strengthenLv) : this.LabStrengthenLv.node.active = !1, "B" == this.getAbType() || "D" == this.getAbType()) {
      var e = this.curEquipData.starLevel ? this.curEquipData.starLevel : 0;

      if (e > 0) {
        var o = this.NodeStar;
        o.active = !0;

        for (var a = 0; a < o.childrenCount; a++) {
          e > a ? cc.isValid(o.children[a]) && (o.children[a].getChildByName("SpStar").active = !0) : cc.isValid(o.children[a]) && (o.children[a].getChildByName("SpStar").active = !1);
        }
      }
    }

    this.LabName.string = this.equipCfgData.equipName, this.LabType.string = this.getEquipNameForType(this.equipCfgData.equipType), this.loadEquipStrengthenProp();
  }, e.prototype.loadEquipStrengthenProp = function () {
    this.curEquipData.strengthenLv > 0 ? (this.LabStrengthenLv.node.active = !0, this.LabStrengthenLv.string = "+" + this.curEquipData.strengthenLv) : this.LabStrengthenLv.node.active = !1, this.LabLv.string = "强化等级：" + this.curEquipData.strengthenLv + "/" + this.equipCfgData.strengthenMaxLv;
    var t = 0;

    if ("B" == this.getAbType() || "D" == this.getAbType()) {
      t = y["default"].getInstance().getEquipFightForId(this.curEquipData.id, !1, this.curEquipData.type, this.curEquipData.IDCard, this.curEquipData);
      var e = f.DataMgr.getInstance().getEquipCfg(this.curEquipData.id);

      if (e.LvAtk) {
        var o = g.Utils.getTabelArr(e.atk),
            a = g.Utils.getTabelArr(e.LvAtk),
            i = ["0", "0"];

        if (this.curEquipData.starLevel && this.curEquipData.starLevel > 0) {
          var r = f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel);
          i = g.Utils.getTabelArr(r.atk);
        }

        var n = Number(o[0]) + Number(a[0]) * this.curEquipData.strengthenLv + Number(i[0]),
            s = Number(o[1]) + Number(a[1]) * this.curEquipData.strengthenLv + Number(i[1]),
            c = this.LayoutEquipProp.getChildByName("LayoutProp1");
        cc.isValid(c) || ((c = cc.instantiate(this.LayoutProp)).parent = this.LayoutEquipProp, c.name = "LayoutProp1"), c.getChildByName("LabProp").getComponent(cc.RichText).string = "<color=#ffffff>攻击力：</c><color=#3bacf3>" + n + "~" + s + "</color>", this.loadPropChange(8, c);
      }

      if (e.LvHp) {
        var l = this.curEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).hp : 0;
        this.addPropNode(9, e.hp + e.LvHp * this.curEquipData.strengthenLv + l);
      }

      e.atkSpeed && (l = this.curEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).atkSpeed : 0, this.addPropNode(3, e.atkSpeed + l)), e.atkCrazyProb && (l = this.curEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).atkCrazyProb : 0, this.addPropNode(4, e.atkCrazyProb + l)), e.atkCrazyHurt && (l = this.curEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).atkCrazyHurt : 0, this.addPropNode(5, e.atkCrazyHurt + l)), e.subHurt && (l = this.curEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).subHurt : 0, this.addPropNode(6, e.subHurt + l)), e.dodgeHurtProb && (l = this.curEquipData.starLevel ? f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).dodgeHurtProb : 0, this.addPropNode(7, e.dodgeHurtProb + l));
    } else t = this.strengthenCfgData.fightNum, this.strengthenCfgData.atk && (o = g.Utils.getTabelArr(this.strengthenCfgData.atk), c = this.LayoutEquipProp.getChildByName("LayoutProp1"), cc.isValid(c) || ((c = cc.instantiate(this.LayoutProp)).parent = this.LayoutEquipProp, c.name = "LayoutProp1"), c.getChildByName("LabProp").getComponent(cc.RichText).string = "<color=#ffffff>攻击力：</c><color=#3bacf3>" + o[0] + "~" + o[1] + "</color>", this.loadPropChange(8, c)), this.strengthenCfgData.hp && this.addPropNode(9, this.strengthenCfgData.hp), this.strengthenCfgData.atkSpeed && this.addPropNode(3, this.strengthenCfgData.atkSpeed), this.strengthenCfgData.atkCrazyProb && this.addPropNode(4, this.strengthenCfgData.atkCrazyProb), this.strengthenCfgData.atkCrazyHurt && this.addPropNode(5, this.strengthenCfgData.atkCrazyHurt), this.strengthenCfgData.subHurt && this.addPropNode(6, this.strengthenCfgData.subHurt), this.strengthenCfgData.dodgeHurtProb && this.addPropNode(7, this.strengthenCfgData.dodgeHurtProb);

    this.LabFightNum.string = "战力   " + t;
  }, e.prototype.addPropNode = function (t, e) {
    var o = this.LayoutEquipProp.getChildByName("LayoutProp" + t);
    cc.isValid(o) || ((o = cc.instantiate(this.LayoutProp)).parent = this.LayoutEquipProp, o.name = "LayoutProp" + t);
    var a = y["default"].getInstance().getPropNameForPropType(t);
    o.getChildByName("LabProp").getComponent(cc.RichText).string = "<color=#ffffff>" + a + "：</c><color=#3bacf3>" + e + y["default"].getInstance().getPropPercent(t) + "</color>", this.loadPropChange(t, o);
  }, e.prototype.loadPropChange = function (t, e) {
    var o = e.getChildByName("SpChange"),
        a = e.getChildByName("LabChange");
    if (cc.isValid(o) && cc.isValid(a)) switch (this.showType) {
      case y.EnumEquipInfo.EnumSell:
        if (this.isExistEquip) {
          var i = 0;

          if ("B" == this.getAbType() || "D" == this.getAbType()) {
            var r = f.DataMgr.getInstance().getEquipCfg(this.curEquipData.id),
                n = f.DataMgr.getInstance().getEquipCfg(this.equipData_wear.id);

            if (8 == t) {
              var s = g.Utils.getTabelArr(r.atk),
                  c = g.Utils.getTabelArr(r.LvAtk),
                  l = ["0", "0"];

              if (this.curEquipData.starLevel && this.curEquipData.starLevel > 0) {
                var u = f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel);
                l = g.Utils.getTabelArr(u.atk);
              }

              var p = g.Utils.getTabelArr(n.atk),
                  d = g.Utils.getTabelArr(n.LvAtk),
                  h = ["0", "0"];
              this.equipData_wear.starLevel && this.equipData_wear.starLevel > 0 && (u = f.DataMgr.getInstance().getEquipStarCfg(this.equipData_wear.id, this.equipData_wear.starLevel), h = g.Utils.getTabelArr(u.atk)), i = (Number(s[1]) + Number(l[1]) + Number(c[1]) * this.curEquipData.strengthenLv + (Number(s[0]) + Number(l[0]) + Number(c[0]) * this.curEquipData.strengthenLv)) / 2 - (Number(p[1]) + Number(h[1]) + Number(d[1]) * this.equipData_wear.strengthenLv + (Number(p[0]) + Number(h[0]) + Number(d[0]) * this.equipData_wear.strengthenLv)) / 2;
            } else if (9 == t) {
              var m = 0,
                  v = 0;
              this.curEquipData.starLevel && this.curEquipData.starLevel > 0 && (m = (u = f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel)).hp), this.equipData_wear.starLevel && this.equipData_wear.starLevel > 0 && (v = (u = f.DataMgr.getInstance().getEquipStarCfg(this.equipData_wear.id, this.equipData_wear.starLevel)).hp), i = r.hp + r.LvHp * this.curEquipData.strengthenLv + m - (n.hp + n.LvHp * this.equipData_wear.strengthenLv + v);
            } else 3 == t ? (m = 0, v = 0, this.curEquipData.starLevel && this.curEquipData.starLevel > 0 && (m = (u = f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel)).atkSpeed), this.equipData_wear.starLevel && this.equipData_wear.starLevel > 0 && (v = (u = f.DataMgr.getInstance().getEquipStarCfg(this.equipData_wear.id, this.equipData_wear.starLevel)).atkSpeed), i = r.atkSpeed + m - (n.atkSpeed + v)) : 4 == t ? (m = 0, v = 0, this.curEquipData.starLevel && this.curEquipData.starLevel > 0 && (m = (u = f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel)).atkCrazyProb), this.equipData_wear.starLevel && this.equipData_wear.starLevel > 0 && (v = (u = f.DataMgr.getInstance().getEquipStarCfg(this.equipData_wear.id, this.equipData_wear.starLevel)).atkCrazyProb), i = r.atkCrazyProb + m - (n.atkCrazyProb + v)) : 5 == t ? (m = 0, v = 0, this.curEquipData.starLevel && this.curEquipData.starLevel > 0 && (m = (u = f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel)).atkCrazyHurt), this.equipData_wear.starLevel && this.equipData_wear.starLevel > 0 && (v = (u = f.DataMgr.getInstance().getEquipStarCfg(this.equipData_wear.id, this.equipData_wear.starLevel)).atkCrazyHurt), i = r.atkCrazyHurt + m - (n.atkCrazyHurt + v)) : 6 == t ? (m = 0, v = 0, this.curEquipData.starLevel && this.curEquipData.starLevel > 0 && (m = (u = f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel)).subHurt), this.equipData_wear.starLevel && this.equipData_wear.starLevel > 0 && (v = (u = f.DataMgr.getInstance().getEquipStarCfg(this.equipData_wear.id, this.equipData_wear.starLevel)).subHurt), i = r.subHurt - n.subHurt, i = r.subHurt + m - (n.subHurt + v)) : 7 == t && (m = 0, v = 0, this.curEquipData.starLevel && this.curEquipData.starLevel > 0 && (m = (u = f.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel)).dodgeHurtProb), this.equipData_wear.starLevel && this.equipData_wear.starLevel > 0 && (v = (u = f.DataMgr.getInstance().getEquipStarCfg(this.equipData_wear.id, this.equipData_wear.starLevel)).dodgeHurtProb), i = r.dodgeHurtProb + m - (n.dodgeHurtProb + v));
          } else {
            var I = f.DataMgr.getInstance().getEquipStrengthenCfg(this.equipData_wear.id, this.equipData_wear.strengthenLv);
            8 == t ? (s = g.Utils.getTabelArr(this.strengthenCfgData.atk), p = g.Utils.getTabelArr(I.atk), i = (Number(s[1]) + Number(s[0])) / 2 - (Number(p[1]) + Number(p[0])) / 2) : 9 == t ? i = this.strengthenCfgData.hp - I.hp : 3 == t ? i = this.strengthenCfgData.atkSpeed - I.atkSpeed : 4 == t ? i = this.strengthenCfgData.atkCrazyProb - I.atkCrazyProb : 5 == t ? i = this.strengthenCfgData.atkCrazyHurt - I.atkCrazyHurt : 6 == t ? i = this.strengthenCfgData.subHurt - I.subHurt : 7 == t && (i = this.strengthenCfgData.dodgeHurtProb - I.dodgeHurtProb);
          }

          0 == i ? (o.active = !1, a.active = !1) : (o.getComponent(cc.Sprite).spriteFrame = i > 0 ? this.SpUp : this.SpDown, a.color = i > 0 ? cc.color(64, 220, 47) : cc.color(246, 47, 0), a.getComponent(cc.Label).string = "" + Math.ceil(Math.abs(i)));
        } else o.active = !1, a.active = !1;

        break;

      default:
        o.active = !1, a.active = !1;
    } else console.log("不存在！！！");
  }, e.prototype.loadEquipSuitInfo = function () {
    if (null != this.equipCfgData.suitId) {
      var t = f.DataMgr.getInstance().getEquipSuitCfg(this.equipCfgData.suitId);
      this.LayoutEquipSuitInfo.getChildByName("LabSuitName").getComponent(cc.Label).string = t.suitName + "：";

      for (var e = g.Utils.getTabelArr(t.suit2Prop), o = g.Utils.getTabelArr(t.suit4Prop), a = g.Utils.getTabelArr(t.suit6Prop), i = y["default"].getInstance().getAllSuitList(), r = 0; r < i.length; r++) {
        var n = [255, 255, 255],
            s = ["<color=#b16bff>（2）</c><color=#ffffff>" + y["default"].getInstance().getPropNameForPropType(Number(e[0])) + "：</c><color=#3bacf3>" + Number(e[1]) + y["default"].getInstance().getPropPercent(Number(e[0])) + "</color>", "<color=#b16bff>（4）</c><color=#ffffff>" + y["default"].getInstance().getPropNameForPropType(Number(o[0])) + "：</c><color=#3bacf3>" + Number(o[1]) + y["default"].getInstance().getPropPercent(Number(o[0])) + "</color>", "<color=#b16bff>（6）</c><color=#ffffff>" + y["default"].getInstance().getPropNameForPropType(Number(a[0])) + "：</c><color=#3bacf3>" + Number(a[1]) + y["default"].getInstance().getPropPercent(Number(a[0])) + "</color>"];

        if (t.id == i[r].id) {
          i[r].count < 2 ? (n = [127, 127, 127], s = ["（2）" + y["default"].getInstance().getPropNameForPropType(Number(e[0])) + "：" + Number(e[1]) + y["default"].getInstance().getPropPercent(Number(e[0])), "（4）" + y["default"].getInstance().getPropNameForPropType(Number(o[0])) + "：" + Number(o[1]) + y["default"].getInstance().getPropPercent(Number(o[0])), "（6）" + y["default"].getInstance().getPropNameForPropType(Number(a[0])) + "：" + Number(a[1]) + y["default"].getInstance().getPropPercent(Number(a[0]))]) : i[r].count >= 2 && i[r].count < 4 ? (n = [255, 127, 127], s = ["<color=#b16bff>（2）</c><color=#ffffff>" + y["default"].getInstance().getPropNameForPropType(Number(e[0])) + "：</c><color=#3bacf3>" + Number(e[1]) + y["default"].getInstance().getPropPercent(Number(e[0])) + "</color>", "（4）" + y["default"].getInstance().getPropNameForPropType(Number(o[0])) + "：" + Number(o[1]) + y["default"].getInstance().getPropPercent(Number(o[0])), "（6）" + y["default"].getInstance().getPropNameForPropType(Number(a[0])) + "：" + Number(a[1]) + y["default"].getInstance().getPropPercent(Number(a[0]))]) : i[r].count >= 4 && i[r].count < 6 ? (n = [255, 255, 127], s = ["<color=#b16bff>（2）</c><color=#ffffff>" + y["default"].getInstance().getPropNameForPropType(Number(e[0])) + "：</c><color=#3bacf3>" + Number(e[1]) + y["default"].getInstance().getPropPercent(Number(e[0])) + "</color>", "<color=#b16bff>（4）</c><color=#ffffff>" + y["default"].getInstance().getPropNameForPropType(Number(o[0])) + "：</c><color=#3bacf3>" + Number(o[1]) + y["default"].getInstance().getPropPercent(Number(o[0])) + "</color>", "（6）" + y["default"].getInstance().getPropNameForPropType(Number(a[0])) + "：" + Number(a[1]) + y["default"].getInstance().getPropPercent(Number(a[0]))]) : i[r].count >= 6 && (n = [255, 255, 255], s = ["<color=#b16bff>（2）</c><color=#ffffff>" + y["default"].getInstance().getPropNameForPropType(Number(e[0])) + "：</c><color=#3bacf3>" + Number(e[1]) + y["default"].getInstance().getPropPercent(Number(e[0])) + "</color>", "<color=#b16bff>（4）</c><color=#ffffff>" + y["default"].getInstance().getPropNameForPropType(Number(o[0])) + "：</c><color=#3bacf3>" + Number(o[1]) + y["default"].getInstance().getPropPercent(Number(o[0])) + "</color>", "<color=#b16bff>（6）</c><color=#ffffff>" + y["default"].getInstance().getPropNameForPropType(Number(a[0])) + "：</c><color=#3bacf3>" + Number(a[1]) + y["default"].getInstance().getPropPercent(Number(a[0])) + "</color>"]), this.LayoutEquipSuitInfo.getChildByName("LabSuit2").getComponent(cc.RichText).string = s[0], this.LayoutEquipSuitInfo.getChildByName("LabSuit2").opacity = n[0], this.LayoutEquipSuitInfo.getChildByName("LabSuit4").getComponent(cc.RichText).string = s[1], this.LayoutEquipSuitInfo.getChildByName("LabSuit4").opacity = n[1], this.LayoutEquipSuitInfo.getChildByName("LabSuit6").getComponent(cc.RichText).string = s[2], this.LayoutEquipSuitInfo.getChildByName("LabSuit6").opacity = n[2];
          break;
        }
      }
    } else this.LayoutEquipSuitInfo.active = !1;
  }, e.prototype.loadQHInfo = function () {
    var t = 0,
        e = 1;

    if ("B" == this.getAbType() || "D" == this.getAbType()) {
      var o = f.DataMgr.getInstance().getEquipCfg(this.curEquipData.id),
          a = g.Utils.getTabelArr1(o.consume),
          i = this.curEquipData.strengthenLv;
      i < o.strengthenMaxLv && (t = Number(a[Math.floor(i / 1)][1]), e = 1);
    } else t = this.strengthenCfgData.consume, e = this.strengthenCfgData.AdvertisementNum;

    this.BtnQH.getChildByName("LabCost").getComponent(cc.Label).string = "" + t, 1 == e ? (this.BtnVideoQH.getChildByName("LabCost").active = !1, this.BtnVideoQH.getChildByName("NodeVideo").position = cc.v3(0, 0)) : (this.BtnVideoQH.getChildByName("LabCost").active = !0, this.BtnVideoQH.getChildByName("LabCost").getComponent(cc.Label).string = this.curEquipData.videoCount + "/" + this.strengthenCfgData.AdvertisementNum, this.BtnVideoQH.getChildByName("NodeVideo").position = cc.v3(0, 15)), this.curEquipData.strengthenLv >= this.equipCfgData.strengthenMaxLv && ("A" != this.getAbType() && "C" != this.getAbType() || (this.LayoutBtn.active = !1), "B" != this.getAbType() && "D" != this.getAbType() || this.LayoutEquipBtnInfo.getChildByName("max").setPosition(this.BtnQH.position.x, this.LayoutEquipBtnInfo.getChildByName("max").position.y), this.LayoutEquipBtnInfo.active = !0, this.BtnQH.getComponent(cc.Button).interactable = !1);
  }, e.prototype.loadSellInfo = function () {
    var t;
    t = "B" == this.getAbType() || "D" == this.getAbType() ? y["default"].getInstance().getEquipSellValue(this.curEquipData.id, this.curEquipData.type, this.curEquipData.IDCard, this.curEquipData) : this.strengthenCfgData.sellPrice, this.LabCoinCount.string = "" + t, this.BtnSell.active = !0, this.BtnReplace.active = !0, this.isExistEquip ? this.BtnReplace.getChildByName("LabBtn").getComponent(cc.Label).string = "替换" : this.BtnReplace.getChildByName("LabBtn").getComponent(cc.Label).string = "穿戴";
  }, e.prototype.loadInfo = function () {
    switch (this.LayoutEquipBtnInfo.active = !1, this.showType) {
      case y.EnumEquipInfo.EnumNoShow:
        this.LayoutEquipBtnInfo.active = !1;
        break;

      case y.EnumEquipInfo.EnumStrengthen:
        "A" != this.getAbType() && "C" != this.getAbType() || (this.LayoutBtn.active = !0), this.LayoutCost.active = !1, this.BtnSell.active = !1, this.BtnReplace.active = !1, this.BtnUnload.active = !0, this.loadQHInfo();
        break;

      case y.EnumEquipInfo.EnumSell:
        "A" != this.getAbType() && "C" != this.getAbType() || (this.LayoutBtn.active = !1), this.LayoutCost.active = !0, this.BtnSell.active = !0, this.BtnReplace.active = !0, this.BtnUnload.active = !1, this.loadQHInfo(), this.loadSellInfo();
    }
  }, e.prototype.closeView = function () {
    this.closeUI();
  }, e.prototype.getEquipNameForType = function (t) {
    var e = "武器";

    switch (t) {
      case 1:
        e = "武器";
        break;

      case 2:
        e = "头盔";
        break;

      case 3:
        e = "项链";
        break;

      case 4:
        e = "盔甲";
        break;

      case 5:
        e = "护腕";
        break;

      case 6:
        e = "戒指";
    }

    return e;
  }, e.prototype.strengthenEquip = function (t) {
    if (void 0 === t && (t = !1), this.curEquipData.strengthenLv >= this.equipCfgData.strengthenMaxLv) u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "强化已到达最大等级");else {
      var e = !1;
      if (t) e = !0;else {
        var o = v.PlayerMgr.getInstance().geUserData(),
            a = (f.DataMgr.getInstance().getEquipCfg(this.curEquipData.id), 0);

        if ("B" == this.getAbType() || "D" == this.getAbType()) {
          var i = f.DataMgr.getInstance().getEquipCfg(this.curEquipData.id),
              r = g.Utils.getTabelArr1(i.consume),
              n = this.curEquipData.strengthenLv;
          if (n < i.strengthenMaxLv) switch (a = Number(r[Math.floor(n / 10)][1]), i.consumeType) {
            case 1:
              o.subGoldNum(a) && (e = !0);
              break;

            case 2:
              o.subInGotNum(a) && (e = !0);
          }
        } else switch (a = this.strengthenCfgData.consume, this.strengthenCfgData.consumeType) {
          case 1:
            o.subGoldNum(a) && (e = !0);
            break;

          case 2:
            o.subInGotNum(a) && (e = !0);
        }
      }

      if (e) {
        v.PlayerMgr.getInstance().getMainTaskData().mainTask(2), this.playEffForUpLv(), this.playEffForPropUp(), s.AudioMgr.getInstance().playEffect(d.AudioId.Sound_Upgrade), u.UIMgr.getInstance().openUI(d.UIID.UITips, -1, "强化成功"), I["default"].getInstance().addEquipStrengthenCountForTask(), this.curEquipData.strengthenLv += 1, this.curEquipData.strengthenLv <= 3 && v.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.equip_upgrade_X_Y, this.curEquipData.id, this.curEquipData.strengthenLv), (o = v.PlayerMgr.getInstance().geUserData()).setEquipCountByid(this.curEquipData.id + "", 1), o.getEquipCountByid(this.curEquipData.id + "") <= 5 && v.PlayerMgr.getInstance().getTrackData().youmengTrack(h.TrackId.refine_equip_lv_time_X, this.curEquipData.id, o.getEquipCountByid(this.curEquipData.id + "")), "A" != this.getAbType() && "C" != this.getAbType() || (this.strengthenCfgData = f.DataMgr.getInstance().getEquipStrengthenCfg1(this.equipCfgData.strengthenStartId, this.curEquipData.strengthenLv)), this.loadEquipStrengthenProp(), this.loadInfo(), this.equipQHForRedDot();
        var c = this.showType == y.EnumEquipInfo.EnumSell;
        y["default"].getInstance().strengthenEquip(this.curEquipData, c);
      }
    }
  }, r([M(cc.SpriteFrame)], e.prototype, "SpLock", void 0), r([M(cc.SpriteFrame)], e.prototype, "SpUnlock", void 0), r([M(cc.SpriteFrame)], e.prototype, "SpUp", void 0), r([M(cc.SpriteFrame)], e.prototype, "SpDown", void 0), r([M({
    type: cc.Node,
    tooltip: "装备属性节点"
  })], e.prototype, "LayoutProp", void 0), r([M(cc.Node)], e.prototype, "BtnLock", void 0), r([M(cc.Node)], e.prototype, "BtnClose", void 0), r([M(cc.Node)], e.prototype, "LayoutBg", void 0), r([M(cc.Node)], e.prototype, "NodeStar", void 0), r([M(cc.Sprite)], e.prototype, "SpIconBg", void 0), r([M(cc.Sprite)], e.prototype, "SpIcon", void 0), r([M(cc.Label)], e.prototype, "LabStrengthenLv", void 0), r([M(cc.Label)], e.prototype, "LabName", void 0), r([M(cc.Label)], e.prototype, "LabFightNum", void 0), r([M(cc.Label)], e.prototype, "LabType", void 0), r([M(cc.RichText)], e.prototype, "LabLv", void 0), r([M(cc.Node)], e.prototype, "LayoutEquipProp", void 0), r([M(cc.Node)], e.prototype, "LayoutEquipSuitInfo", void 0), r([M(cc.Node)], e.prototype, "LayoutEquipBtnInfo", void 0), r([M(cc.Node)], e.prototype, "LayoutBtn", void 0), r([M(cc.Node)], e.prototype, "LayoutCost", void 0), r([M({
    type: cc.Label,
    tooltip: "出售数量"
  })], e.prototype, "LabCoinCount", void 0), r([M(cc.Node)], e.prototype, "BtnQH", void 0), r([M(cc.Node)], e.prototype, "BtnVideoQH", void 0), r([M(cc.Node)], e.prototype, "BtnHC", void 0), r([M(cc.Node)], e.prototype, "BtnSell", void 0), r([M(cc.Node)], e.prototype, "BtnReplace", void 0), r([M(cc.Node)], e.prototype, "BtnUnload", void 0), r([S], e);
}(n["default"]);

o["default"] = _;

cc._RF.pop();