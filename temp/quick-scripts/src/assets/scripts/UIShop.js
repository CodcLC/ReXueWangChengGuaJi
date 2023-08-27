"use strict";
cc._RF.push(module, 'ed4591U1u9NE7AjTVgoQwPL', 'UIShop');
// scripts/UIShop.js

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
    u = t("TweenMgr"),
    p = t("UIMgr"),
    g = t("TimeUtils"),
    d = t("Utils"),
    h = t("Config"),
    f = t("TrackDataEvent"),
    m = t("DataMgr"),
    y = t("EquipMgr"),
    v = t("GameMgr"),
    I = t("GoodsManager"),
    k = t("PlayerMgr"),
    C = t("RedDotMgr"),
    S = t("TaskMgr"),
    M = t("UIGuide"),
    _ = cc._decorator,
    b = _.ccclass,
    D = _.property,
    T = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.NodeUp = null, e.BtnBack = null, e.BtnTrue = null, e.BtnAgain = null, e.LayoutShop = null, e.NodeDrawReward = null, e.SpLight = null, e.NodeBtn = null, e.NodeBox = null, e.NodeEquip = null, e.NodeSkillBook = null, e.curShopId = 0, e.isGuideState = !1, e;
  }

  return i(e, t), e.prototype.onLoad = function () {
    this.registerEvent();
  }, e.prototype.start = function () {
    this.registerBtnEvent(), c.EventMgr.getInstance().emit(h.EventName.ShowUITop, !1), this.initData(), this.initView(), this.guideShow();
  }, e.prototype.shopRedDot = function () {
    C["default"].getInstance().shopForRedDot(this.LayoutShop.getChildByName("NodeShop1").getChildByName("BtnLuckyDraw").getChildByName("SpRedDot")), C["default"].getInstance().shopForRedDot(this.LayoutShop.getChildByName("NodeShop3").getChildByName("BtnLuckyDraw").getChildByName("SpRedDot"));
  }, e.prototype.guideShow = function () {
    var t = this,
        e = k.PlayerMgr.getInstance().getGuideData();

    if (!e.getGuideEnd()) {
      var o = e.getCurrentId();
      if (o == 16 + e.putGuideNum) this.isGuideState = !0, (a = new M.GuildCfg()).distNode = this.LayoutShop.getChildByName("NodeShop1").getChildByName("BtnLuckyDraw"), a.tipstring = "商城中，可以<color=#ff6b1b>快速获得</color>装备和技能噢，先试试看<color=#ff6b1b>装备抽奖</color>吧", a.yDec = -350, this.openUICallBack(h.UIID.UIGuide, function () {
        e.addCurrentId();
      }, a);else if (o == 17 + e.putGuideNum) this.isGuideState = !0, (a = new M.GuildCfg()).distNode = this.LayoutShop.getChildByName("NodeShop3").getChildByName("BtnLuckyDraw"), a.tipstring = "获得新装备后记得去穿戴噢！\n现在再来看看<color=#ff6b1b>技能抽奖</color>吧", a.yDec = 0, this.openUICallBack(h.UIID.UIGuide, function () {
        e.addCurrentId();
      }, a);else if (o == 18 + e.putGuideNum) this.isGuideState = !1, (a = new M.GuildCfg()).tipstring = "<color=#ff6b1b>穿戴装备</color>提升<color=#ff6b1b>基础属性</color>，<color=#ff6b1b>学习技能</color>获得<color=#ff6b1b>战斗加成</color>", a.yDec = -150, a.isWeek = !0, a.showHand = !1, a.callBack = function () {
        setTimeout(function () {
          t.guideShow();
        }, 200);
      }, this.openUICallBack(h.UIID.UIGuide, function () {
        e.addCurrentId();
      }, a);else if (o == 19 + e.putGuideNum) {
        var a;
        this.isGuideState = !1, (a = new M.GuildCfg()).tipstring = "记住啦！这就是<color=#ff6b1b>变强的秘诀</color>噢！准备好了，就行。去挑战下一章吧！", a.yDec = -150, a.isWeek = !0, a.showHand = !1, this.openUICallBack(h.UIID.UIGuide, function () {
          e.addCurrentId();
        }, a);
      }
    }
  }, e.prototype.registerEvent = function () {
    this.addEvent(h.EventName.RefreshShopRedDot, this.shopRedDot);
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnBack.on(cc.Node.EventType.TOUCH_END, function () {
      k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.guide21), v["default"].getInstance().openHomeUI(), t.closeUI(), l.SdkMgr.getInstance().showInsert(l.AdType.FreeLotty);
    }), this.BtnTrue.on(cc.Node.EventType.TOUCH_END, function () {
      s.AudioMgr.getInstance().playEffect(h.AudioId.btnClick), t.trackEvent1(t.curShopId), t.isGuideState = !1, t.initAgainView(), t.initDrawRewardView(), t.guideShow(), t.shopRedDot();
    }), this.BtnAgain.on(cc.Node.EventType.TOUCH_END, function () {
      s.AudioMgr.getInstance().playEffect(h.AudioId.btnClick);
      var e = t.userData,
          o = m.DataMgr.getInstance().getShopCfg(t.curShopId);

      switch (o.ConsumeType) {
        case 0:
          var a = g.TimeUtils.GetTimeBySecond(),
              i = g.TimeUtils.GetTimeByHours2();
          l.SdkMgr.getInstance().playVideo(1, function () {
            var e = g.TimeUtils.GetTimeBySecond(),
                r = g.TimeUtils.GetTimeByHours2();
            2 == t.curShopId ? (k.PlayerMgr.getInstance().getTrackData().testTrackTime("equipbox", i, r, a, e), k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.equipbox), k.PlayerMgr.getInstance().getTrackData().youmengTrackNew("equipbox_b")) : 4 == t.curShopId && (k.PlayerMgr.getInstance().getTrackData().testTrackTime("skillbox", i, r, a, e), k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.skillbox), k.PlayerMgr.getInstance().getTrackData().youmengTrackNew("skillbox_b")), t.initAgainView(), t.drawReward(o), S["default"].getInstance().addDrawRewardCountForCount(), t.trackEvent2(t.curShopId);
          });
          break;

        case 1:
          e.getGoldNum() >= o.ConsumeNum ? (e.subGoldNum(o.ConsumeNum), t.initAgainView(), t.drawReward(o), S["default"].getInstance().addDrawRewardCountForCount(), t.trackEvent2(t.curShopId)) : p.UIMgr.getInstance().openUI(h.UIID.UIGeneralWindow, -1, h.GeneralWindowType.GoldWindow, function () {
            e.subGoldNum(o.ConsumeNum), t.initAgainView(), t.drawReward(o), S["default"].getInstance().addDrawRewardCountForCount(), t.trackEvent2(t.curShopId);
          });
          break;

        case 2:
          e.getInGotNum() >= o.ConsumeNum ? (e.subInGotNum(o.ConsumeNum), t.initAgainView(), t.drawReward(o), S["default"].getInstance().addDrawRewardCountForCount(), t.trackEvent2(t.curShopId)) : p.UIMgr.getInstance().openUI(h.UIID.UIGeneralWindow, -1, h.GeneralWindowType.InGotWindow, function () {
            e.subInGotNum(o.ConsumeNum), t.initAgainView(), t.drawReward(o), S["default"].getInstance().addDrawRewardCountForCount(), t.trackEvent2(t.curShopId);
          });
      }
    });
  }, e.prototype.initData = function () {
    this.userData = k.PlayerMgr.getInstance().geUserData();
  }, e.prototype.initView = function () {
    this.initCurrency(), this.initDrawRewardView(), this.initShopItem();
  }, e.prototype.initCurrency = function () {
    var t = this;
    this.loadPrefab("prefabs", "widget/NodeCurrency", function (e) {
      cc.instantiate(e).parent = t.NodeUp;
    });
  }, e.prototype.initDrawRewardView = function () {
    this.NodeDrawReward.active = !1, this.NodeBtn.active = !1, this.NodeEquip.position = cc.v3(0, 1500, 0), this.NodeSkillBook.position = cc.v3(0, 1500, 0);
  }, e.prototype.initAgainView = function () {
    this.NodeBtn.active = !1, this.NodeEquip.position = cc.v3(0, 1500, 0), this.NodeEquip.getChildByName("LabName").opacity = 0, this.NodeEquip.getChildByName("SpFightNum").opacity = 0, this.NodeEquip.getChildByName("SpFightNum").getChildByName("LabFightnNum").getComponent(cc.Label).string = "0", this.NodeSkillBook.position = cc.v3(0, 1500, 0), this.NodeSkillBook.getChildByName("LabName").opacity = 0, this.NodeSkillBook.getChildByName("SpBarBg").opacity = 0, this.NodeSkillBook.getChildByName("SpNew").opacity = 0, this.NodeSkillBook.getChildByName("NodeSell").opacity = 0, this.NodeSkillBook.getChildByName("SpBarBg").getChildByName("SpUp").active = !1, this.NodeSkillBook.getChildByName("SpBarBg").getChildByName("SpBar").getComponent(cc.Sprite).fillRange = 0, this.SpLight.opacity = 0;
  }, e.prototype.initShopItem = function () {
    for (var t = this, e = function e(_e) {
      var a = _e + 1,
          i = o.LayoutShop.children[_e],
          r = i.getChildByName("SpBox").getComponent(sp.Skeleton),
          n = d.Utils.randomRang(0, 3);
      o.scheduleOnce(function () {
        var e;
        e = 0 == d.Utils.randomRang(0, 2) ? "idle2" : "idle3", r.setAnimation(0, e, !1), r.setCompleteListener(function () {
          var e = d.Utils.randomRang(1, 4);
          t.scheduleOnce(function () {
            var t;
            t = 0 == d.Utils.randomRang(0, 2) ? "idle2" : "idle3", r.setAnimation(0, t, !1);
          }, e);
        });
      }, n);
      var s = m.DataMgr.getInstance().getShopCfg(a);
      i.getChildByName("Lab1").getComponent(cc.RichText).string = "<outline color=#000000 width = 3>" + s.RewardDesc + "</outline>";
      var c = s.ProtectNum - o.userData.getShopDrawRewardCount(a),
          u = 1 == c ? "本" : "" + c,
          y = s.ProtectDesc.replace("%s", u);
      1 != c && (y = "<outline color=#000000 width = 3>再开</outline>" + y), i.getChildByName("Lab2").getComponent(cc.RichText).string = "" + y;
      var v = i.getChildByName("BtnLuckyDraw");
      1 != a && 3 != a || C["default"].getInstance().shopForRedDot(v.getChildByName("SpRedDot")), s.ConsumeType && (v.getChildByName("LabCost").getComponent(cc.Label).string = "" + s.ConsumeNum), v.on(cc.Node.EventType.TOUCH_END, function () {
        t.curShopId = a, t.refreshAgainTimeBtn(s);
        var e = t.userData;

        switch (s.ConsumeType) {
          case 0:
            var o = g.TimeUtils.GetTimeBySecond(),
                i = g.TimeUtils.GetTimeByHours2();
            l.SdkMgr.getInstance().playVideo(1, function () {
              var e = g.TimeUtils.GetTimeBySecond(),
                  r = g.TimeUtils.GetTimeByHours2();
              2 == t.curShopId ? (k.PlayerMgr.getInstance().getTrackData().testTrackTime("equipbox", i, r, o, e), k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.equipbox), k.PlayerMgr.getInstance().getTrackData().youmengTrackNew("equipbox_b")) : 4 == t.curShopId && (k.PlayerMgr.getInstance().getTrackData().testTrackTime("skillbox", i, r, o, e), k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.skillbox), k.PlayerMgr.getInstance().getTrackData().youmengTrackNew("skillbox_b")), t.drawReward(s), S["default"].getInstance().addDrawRewardCountForCount(), t.trackEvent(a), t.trackEvent2(t.curShopId);
            });
            break;

          case 1:
            e.getGoldNum() >= s.ConsumeNum ? (e.subGoldNum(s.ConsumeNum), t.drawReward(s), S["default"].getInstance().addDrawRewardCountForCount(), t.trackEvent(a), t.trackEvent2(t.curShopId)) : p.UIMgr.getInstance().openUI(h.UIID.UIGeneralWindow, -1, h.GeneralWindowType.GoldWindow, function () {
              e.subGoldNum(s.ConsumeNum), t.drawReward(s), S["default"].getInstance().addDrawRewardCountForCount(), t.trackEvent(a), t.trackEvent2(t.curShopId);
            });
            break;

          case 2:
            e.getInGotNum() >= s.ConsumeNum ? (e.subInGotNum(s.ConsumeNum), t.drawReward(s), S["default"].getInstance().addDrawRewardCountForCount(), t.trackEvent(a), t.trackEvent2(t.curShopId)) : p.UIMgr.getInstance().openUI(h.UIID.UIGeneralWindow, -1, h.GeneralWindowType.InGotWindow, function () {
              e.subInGotNum(s.ConsumeNum), t.drawReward(s), S["default"].getInstance().addDrawRewardCountForCount(), t.trackEvent(a), t.trackEvent2(t.curShopId);
            });
        }
      });
    }, o = this, a = 0; a < this.LayoutShop.childrenCount; a++) {
      e(a);
    }
  }, e.prototype.refreshShopItem = function (t) {
    var e = this.LayoutShop.children[t - 1],
        o = m.DataMgr.getInstance().getShopCfg(t),
        a = o.ProtectNum - this.userData.getShopDrawRewardCount(t),
        i = 1 == a ? "本" : "" + a,
        r = o.ProtectDesc.replace("%s", i);
    1 != a && (r = "<outline color=#000000 width = 3>再开</outline>" + r), e.getChildByName("Lab2").getComponent(cc.RichText).string = "" + r;
  }, e.prototype.drawReward = function (t) {
    var e = this;
    k.PlayerMgr.getInstance().getMainTaskData().mainTask(7), this.userData.addShopDrawReward(t.ID), this.NodeDrawReward.active = !0;
    var o = this.NodeBox.getComponent(sp.Skeleton);
    o.setSkin(t.BoxSkin), o.setAnimation(0, "open", !1), o.setEventListener(function (o, a) {
      "open" == a.data.name && (s.AudioMgr.getInstance().playEffect(h.AudioId.Sound_LuckDraw), 1 == t.ID || 2 == t.ID ? (e.loadRewardItem(e.NodeEquip, t), e.rewardItemAnim(e.NodeEquip, e.NodeBox.position), e.lightAnim(), S["default"].getInstance().addEquipCountForTask()) : (e.loadRewardItem(e.NodeSkillBook, t), e.rewardItemAnim(e.NodeSkillBook, e.NodeBox.position), e.lightAnim(), S["default"].getInstance().addSkillBookCountForTask()), c.EventMgr.getInstance().emit(h.EventName.RefreshRedDot, !0, !1, !0, !0, !1));
    });
  }, e.prototype.loadRewardItem = function (t, e) {
    var o = this.userData,
        a = [];
    o.getShopDrawRewardCount(e.ID) >= e.ProtectNum ? (console.log("必得！！！"), o.resetDrawRewardCount(e.ID), a = d.Utils.getTabelArr(e.ProtectLibraryRange)) : a = d.Utils.getTabelArr(e.RoutineLibraryRange);

    for (var i = [], r = Number(a[0]); r <= Number(a[1]); r++) {
      var n = m.DataMgr.getInstance().getRewardPoolCfg(r),
          s = {
        id: n.Reward,
        weight: n.Weight
      };
      i.push(s);
    }

    var c = d.Utils.weight_rand(i),
        l = 1 == this.curShopId || 2 == this.curShopId ? ["equip", 40] : ["skillBook", 22];

    if (this.isGuideState) {
      var u = k.PlayerMgr.getInstance().getGuideData();

      if (!u.getGuideEnd()) {
        var p = u.getCurrentId();
        p == 17 + u.putGuideNum ? l = ["equip", 40] : 18 == p && (l = ["skillBook", 22]), this.isGuideState = !1;
      }
    } else l = I["default"].getInstance().getGoodsCfgForGoodsType(c.id);

    this.curRewardData = l, this.loadRewardForType(t, l), this.refreshShopItem(e.ID);
  }, e.prototype.loadRewardForType = function (t, e) {
    if (e && !(e.length <= 0)) switch (e[0]) {
      case "equip":
        var o = m.DataMgr.getInstance().getEquipCfg(e[1]);
        this.loadSpriteFrame(o.bundleQuality, o.iconQuality, function (e) {
          t.getComponent(cc.Sprite).spriteFrame = e;
        }), this.loadSpriteFrame(o.bundle, o.equipIcon, function (e) {
          t.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = e;
        }), t.getChildByName("LabName").getComponent(cc.Label).string = o.equipName, t.getChildByName("LabName").color = I["default"].getInstance().seleColor(o.qualityId), this.userData.addBaseEquip(o);
        break;

      case "skillBook":
        var a = m.DataMgr.getInstance().getSkillBook(e[1]);
        this.loadSpriteFrame("iconImg", a.SkillIcon, function (e) {
          t.getComponent(cc.Sprite).spriteFrame = e;
        }), t.getChildByName("LabSkilllName").active = !1, t.getChildByName("LabSkilllName").getComponent(cc.Label).string = a.name, t.getChildByName("LabName").getComponent(cc.Label).string = a.name, t.getChildByName("LabName").color = I["default"].getInstance().seleColor(a.qualityId), this.userData.addSkillBookId(a.id);
        var i = t.getChildByName("SpBarBg"),
            r = this.userData.getSkillBookForId(a.id),
            n = m.DataMgr.getInstance().getSkillBookLevelCfg1(a.StartLevelID, r.level);
        r.level >= a.MaxLevel ? i.getChildByName("LabBar").getComponent(cc.Label).string = "MAX" : i.getChildByName("LabBar").getComponent(cc.Label).string = r.iCount + "/" + n.ConsumeSkillBookNum;
    }
  }, e.prototype.lightAnim = function () {
    this.SpLight.opacity = 0, cc.tween(this.SpLight).to(.7, {
      opacity: 255
    }).start();
  }, e.prototype.rewardItemAnim = function (t, e) {
    var o = this;
    if (t.position = e, t.scale = 0, "skillBook" == this.curRewardData[0]) if (0 == this.userData.getSkillBookForId(this.curRewardData[1]).iCount) t.getChildByName("SpBarBg").active = !1, t.getChildByName("SpNew").active = !0, t.getChildByName("NodeSell").active = !1;else {
      var a = m.DataMgr.getInstance().getSkillBook(this.curRewardData[1]),
          i = m.DataMgr.getInstance().getSkillQuality(a.qualityId),
          r = d.Utils.getTabelArr(i.FullGradeCompensate);
      this.userData.getSkillBookForId(this.curRewardData[1]).level >= a.MaxLevel ? (t.getChildByName("SpBarBg").active = !1, t.getChildByName("SpNew").active = !1, t.getChildByName("NodeSell").active = !0, t.getChildByName("NodeSell").getChildByName("LabSell").getComponent(cc.Label).string = "" + r[1], this.userData.subSkillBookCount(a.id), I["default"].getInstance().getRewardForType(Number(r[0]), Number(r[1]))) : (t.getChildByName("SpBarBg").active = !0, t.getChildByName("SpNew").active = !1, t.getChildByName("NodeSell").active = !1);
    }
    cc.tween(t).parallel(cc.tween().by(.3, {
      y: 550
    }), cc.tween().to(.3, {
      scale: 1
    })).call(function () {
      var e = k.PlayerMgr.getInstance().getGuideData();
      if (e.getGuideEnd()) o.BtnAgain.active = !0;else {
        var a = e.getCurrentId();
        a == 17 + e.putGuideNum || a == 18 + e.putGuideNum ? o.BtnAgain.active = !1 : o.BtnAgain.active = !0;
      }
      var i = t.getComponent(cc.Animation);
      i.play(), i.on(cc.Animation.EventType.FINISHED, function () {
        var e = function e() {
          o.NodeBtn.active = !0, o.playAnimFotBtn();
        };

        switch (o.curRewardData[0]) {
          case "equip":
            var a = m.DataMgr.getInstance().getEquipCfg(o.curRewardData[1]),
                i = 0;
            i = "D" == k.PlayerMgr.getInstance().getAbType() ? y["default"].getInstance().getEquipFightForId(o.curRewardData[1], !0) : m.DataMgr.getInstance().getEquipStrengthenCfg1(a.strengthenStartId, 0).fightNum, u.TweenMgr.getInstance().rollLabAnim(!0, t.getChildByName("SpFightNum").getChildByName("LabFightnNum").getComponent(cc.Label), 0, i, function () {
              I["default"].getInstance().isOverEquipBagForIndex() && p.UIMgr.getInstance().openUI(h.UIID.UINotBagIndex, -1), e();
            });
            break;

          case "skillBook":
            var r = m.DataMgr.getInstance().getSkillBook(o.curRewardData[1]),
                n = o.userData.getSkillBookForId(r.id),
                s = m.DataMgr.getInstance().getSkillBookLevelCfg1(r.StartLevelID, n.level),
                c = n.iCount / s.ConsumeSkillBookNum > 1 ? 1 : n.iCount / s.ConsumeSkillBookNum;
            u.TweenMgr.getInstance().rollBarAnim(!0, t.getChildByName("SpBarBg").getChildByName("SpBar").getComponent(cc.Sprite), 0, c, function () {
              t.getChildByName("SpBarBg").getChildByName("SpUp").active = c >= 1, c >= 1 && u.TweenMgr.getInstance().animUpLv(t.getChildByName("SpBarBg").getChildByName("SpUp")), e();
            });
        }
      });
    }).start();
  }, e.prototype.refreshAgainTimeBtn = function (t) {
    var e = this,
        o = "commonImg",
        a = "cq_ty_sp",
        i = "再来一次";

    switch (t.ConsumeType) {
      case 0:
        break;

      case 1:
      case 2:
        var r = m.DataMgr.getInstance().getGoodsCfg(t.ConsumeType);
        o = r.bundle, a = r.goodsICon, i = "" + t.ConsumeNum;
    }

    this.loadSpriteFrame(o, a, function (t) {
      e.BtnAgain.getChildByName("LayoutAgain").getChildByName("SpCost").getComponent(cc.Sprite).spriteFrame = t;
    }), this.BtnAgain.getChildByName("LayoutAgain").getChildByName("LabAgain").getComponent(cc.Label).string = i;
  }, e.prototype.playAnimFotBtn = function () {
    var t = this,
        e = m.DataMgr.getInstance().getShopCfg(this.curShopId),
        o = e.ProtectNum - this.userData.getShopDrawRewardCount(this.curShopId);

    if (2 == this.curShopId || 4 == this.curShopId) {
      this.BtnAgain.getChildByName("LabDec").active = !0;
      var a = 1 == o ? "本" : "" + o,
          i = e.ProtectDesc.replace("%s", a);
      1 != o && (i = "<outline color=#000000 width = 3>再开</outline>" + i), this.BtnAgain.getChildByName("LabDec").getComponent(cc.RichText).string = i;
    } else this.BtnAgain.getChildByName("LabDec").active = !1;

    u.TweenMgr.getInstance().quickBigAndSmallAni(this.BtnTrue, function () {
      t.BtnTrue.scale = 1;
    }), u.TweenMgr.getInstance().quickBigAndSmallAni(this.BtnAgain, function () {
      t.BtnAgain.scale = 1, 2 != t.curShopId && 4 != t.curShopId || u.TweenMgr.getInstance().playHeartAni(t.BtnAgain);
    });
  }, e.prototype.trackEvent = function (t) {
    switch (t) {
      case 1:
        k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.guide17);
        break;

      case 2:
        break;

      case 3:
        k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.guide19);
    }
  }, e.prototype.trackEvent1 = function (t) {
    switch (t) {
      case 1:
        k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.guide18);
        break;

      case 2:
        break;

      case 3:
        k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.guide20);
    }
  }, e.prototype.trackEvent2 = function (t) {
    var e = k.PlayerMgr.getInstance().geUserData();
    e.addBoxOpenTimeForBoxId(t);
    var o = e.getBoxOpenTimeForBoxId(t);
    o <= 20 && k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.box_time_X_Y, t, o);
    var a = e.getCurSec();

    if (e.getEnterSecCountForSecId(a) <= 0 && (a -= 1) < 1 && (a = 1), 2 == t) {
      e.addBox2CountForSec(a);
      var i = e.getBox2CountForSec(a);
      a <= 5 && i <= 5 && k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.box2_chaptertime_X_Y, a, i);
    } else if (4 == t) {
      e.addBox3CountForSec(a);
      var r = e.getBox3CountForSec(a);
      a <= 5 && r <= 5 && k.PlayerMgr.getInstance().getTrackData().youmengTrack(f.TrackId.box3_chaptertime_X_Y, a, r);
    }
  }, r([D(cc.Node)], e.prototype, "NodeUp", void 0), r([D(cc.Node)], e.prototype, "BtnBack", void 0), r([D(cc.Node)], e.prototype, "BtnTrue", void 0), r([D(cc.Node)], e.prototype, "BtnAgain", void 0), r([D(cc.Node)], e.prototype, "LayoutShop", void 0), r([D({
    type: cc.Node,
    tooltip: "抽奖界面"
  })], e.prototype, "NodeDrawReward", void 0), r([D(cc.Node)], e.prototype, "SpLight", void 0), r([D(cc.Node)], e.prototype, "NodeBtn", void 0), r([D(cc.Node)], e.prototype, "NodeBox", void 0), r([D({
    type: cc.Node,
    tooltip: "装备奖励节点"
  })], e.prototype, "NodeEquip", void 0), r([D({
    type: cc.Node,
    tooltip: "技能书奖励节点"
  })], e.prototype, "NodeSkillBook", void 0), r([b], e);
}(n["default"]);

o["default"] = T;

cc._RF.pop();