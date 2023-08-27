"use strict";
cc._RF.push(module, 'bdd5dhrRU5Cjq9Jm8O/mMt1', 'Main');
// scripts/Main.js

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

var n = t("Appcfg"),
    s = t("AudioMgr"),
    c = t("EventMgr"),
    l = t("PlatformManager"),
    u = t("PoolMgr"),
    p = t("ResourceMgr"),
    g = t("UIMgr"),
    d = t("SpineUtils"),
    h = t("TimeUtils"),
    f = t("Utils"),
    m = t("Config"),
    y = t("TrackDataEvent"),
    v = t("CameraMgr"),
    I = t("CardMgr"),
    k = t("DataMgr"),
    C = t("EquipMgr"),
    S = t("GameDataMgr"),
    M = t("GameMgr"),
    _ = t("GoodsManager"),
    b = t("ObjectMgr"),
    D = t("PetMgr"),
    T = t("PlayerMgr"),
    N = t("RoleMgr"),
    w = t("TaskMgr"),
    B = t("TimeMgr"),
    P = t("Monster"),
    E = t("ObjectsParent"),
    L = t("Player"),
    U = t("UITop"),
    A = cc._decorator,
    R = A.ccclass,
    O = A.property,
    F = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.root = null, e.cameraNode = null, e.gameCamera = null, e.temp = null, e.btnChangle = null, e.childTouch = !1, e.size = cc.size(750, 1334), e.player_Home = null, e.player = null, e.pet = null, e.curAttackedMonster = null, e.isAttackState = !1, e.monsterList = [], e.monsterRightList = [], e.monsterLeftList = [], e.leftMonsterAtClose = [], e.rightMonsterAtClose = [], e.leftMonsterAtLong = [], e.rightMonsterAtLong = [], e.bossMonster = null, e.monsterCount = 0, e.isLookSkill = !1, e.isFastPass = !1, e.isPauseGame = !1, e.isFitHeight = !1, e.isFitWidth = !1, e;
  }

  var o;
  return i(e, t), o = e, e.prototype.onLoad = function () {
    g.UIMgr.getInstance().getChildByName("UILoading").destroy(), this.adapt(), this.preloadRes(), this.initPhoneSize(), this.loadPool(), this.initMagrData(), I["default"].getInstance().isWCN() && c.EventMgr.getInstance().on("WCNGameEnd", this, function (t) {
      g.UIMgr.getInstance().openUI(m.UIID.UIExit, -1, t);
    });
  }, e.prototype.initMagrData = function () {
    T.PlayerMgr.getInstance().getGuideData().initAbTypeData(), w["default"].getInstance().initTaskData(), B.TimeMgr.getInstance().initData(), S["default"].getInstance().classifySkillBook(), _["default"].getInstance().initClassData(), D["default"].getInstance().initPetData();
  }, e.prototype.start = function () {
    var t = this;
    this.trackEvent(), o.instance = this, this.openOnlineTimer(), this.openPetTimer(), this.refreshSaveTime(), this.initOnHookTime(), g.UIMgr.getInstance().openUI(m.UIID.UITouch, -1), c.EventMgr.getInstance().on(n.BaseEventName.CloseUI, this, function (t) {
      t != m.UIID.UIHome && t != m.UIID.UIHomeNew || l.PlatformManager.getInstance().hideBlockAd(2);
    });
    var e = T.PlayerMgr.getInstance().geUserData(),
        a = T.PlayerMgr.getInstance().getAbType();
    "A" != a && "B" != a && "C" != a && "D" != a || !e.getIsFirstEnterGame() || 1 != e.getCurSec() || 1 != e.getCurLevel() ? (s.AudioMgr.getInstance().playMusic(m.AudioId.BGM_Main, "bg"), M["default"].getInstance().openHomeUI(), g.UIMgr.getInstance().openUIOfCallback(m.UIID.UITop, -1, function (e) {
      t.uiTop = e.getComponent(U["default"]), c.EventMgr.getInstance().on(m.EventName.ShowUITop, t, function (e) {
        t.uiTop.node.active = e;
      });
    })) : g.UIMgr.getInstance().openUIOfCallback(m.UIID.UITop, -1, function (o) {
      t.uiTop = o.getComponent(U["default"]), c.EventMgr.getInstance().on(m.EventName.ShowUITop, t, function (e) {
        t.uiTop.node.active = e;
      }), e.setIsFirstEnterGame(!1), T.PlayerMgr.getInstance().getGuideData().setCurrentId(2), t.startGame(), s.AudioMgr.getInstance().playMusic(m.AudioId.BGM_Battle, "bg");
    }), this.refreshMysticalShopSaveTime(), this.temp.on(cc.Node.EventType.TOUCH_START, function () {
      t.childTouch = !0;
    }), this.temp.on(cc.Node.EventType.TOUCH_CANCEL, function () {
      t.childTouch = !1;
    }), this.temp.on(cc.Node.EventType.TOUCH_END, function () {
      t.childTouch = !1;
    }), this.temp.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
      var o = t.temp.position.add(cc.v3(e.getDelta().divide(t.cameraNode.getComponent(cc.Camera).zoomRatio)));
      t.temp.setPosition(o);
    }), this.scheduleOnce(function () {
      c.EventMgr.getInstance().emit("WCNGameEnd", "由于您是未成年只能玩一个小时");
    }, 3);
  }, e.prototype.trackEvent = function () {
    T.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.guide1_1), T.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.dau);
  }, e.prototype.initPhoneSize = function () {}, e.prototype.adapt = function () {
    var t = cc.winSize.width / cc.winSize.height,
        e = cc.Canvas.instance.designResolution.width / cc.Canvas.instance.designResolution.height;
    t <= 1 && t <= e ? this.setFitWidth() : this.setFitHeight();
  }, e.prototype.setFitHeight = function () {
    cc.Canvas.instance.fitHeight = !0, cc.Canvas.instance.fitWidth = !1, this.isFitHeight = !0;
  }, e.prototype.setFitWidth = function () {
    cc.Canvas.instance.fitHeight = !1, cc.Canvas.instance.fitWidth = !0, this.isFitWidth = !0;
  }, e.prototype.getFitHeight = function () {
    return this.isFitHeight;
  }, e.prototype.refreshMysticalShopSaveTime = function () {
    var t = T.PlayerMgr.getInstance().getMysticalShopData().getLastLoginTime();
    h.TimeUtils.compareIsToday(t) || (T.PlayerMgr.getInstance().getMysticalShopData().refreshLastLoginTime(), M["default"].getInstance().refreshMysticalShopData());
  }, e.prototype.startGame = function () {
    var t = T.PlayerMgr.getInstance().geUserData();
    o.instance.controlPetShow(!1), 1 == t.getCurSec() && t.addEnterFirstSecCount(), T.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.guide22), T.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.guide2), S["default"].getInstance().classifySkillBook(), this.destroyPlayer_Home(), g.UIMgr.getInstance().openUI(m.UIID.UIGame, -1), S["default"].getInstance().initGameData(), t.addEnterSecCountForSecId(t.getCurSec()), t.getMostLevelForCurSec()[1] > 1 ? (o.instance.isFastPass = !0, g.UIMgr.getInstance().openUI(m.UIID.UIFastPass, -1)) : (t.setCurLevel(1), S["default"].getInstance().setGameState(m.EnumGameState.GameDoing)), this.isFastPass || this.createMonster(), this.createPlayer();
  }, e.prototype.createPlayer_Home = function () {
    var t = this;
    cc.isValid(this.player_Home) ? (this.player_Home.active = !0, this.refreshWearSalutation(), this.rolePlay_All(this.player_Home)) : (this.player_Home = u.PoolMgr.getInstance().getNode("Player"), this.player_Home ? S["default"].getInstance().isCurGameState(m.EnumGameState.GameDoing) ? this.destroyPlayer_Home() : (this.player_Home.name = "player_Home", this.player_Home.parent = this.node, this.player_Home.position = cc.v3(-10, S["default"].getInstance().hightY, 0), this.player_Home.scale = 1.8, this.player_Home.zIndex = 1, this.player_Home.getChildByName("SpHpBarBg").active = !1, this.refreshWearSalutation(), this.rolePlay_All(this.player_Home)) : (console.log("动态加载主页玩家"), p.ResourceMgr.getInstance().loadRes("objects", "player/Player", cc.Prefab, function (e) {
      t.player_Home = cc.instantiate(e), S["default"].getInstance().isCurGameState(m.EnumGameState.GameDoing) ? t.destroyPlayer_Home() : (t.player_Home.parent = t.node, t.player_Home.name = "player_Home", t.player_Home.position = cc.v3(-10, S["default"].getInstance().hightY, 0), t.player_Home.scale = 1.8, t.player_Home.zIndex = 1, t.player_Home.getChildByName("SpHpBarBg").active = !1, t.refreshWearSalutation(), t.rolePlay_All(t.player_Home));
    })));
  }, e.prototype.refreshWearSalutation = function () {
    if (this.player_Home) {
      var t = T.PlayerMgr.getInstance().geUserData().getWearSalutationId();
      if (t < 1) return;
      var e = this.player_Home.getChildByName("SpSalutation");
      g.UIMgr.getInstance().getUIRoot(m.UIID.UIEquip) ? e.active = !1 : e.active = !0;
      var o = k.DataMgr.getInstance().getSalutation(t);
      p.ResourceMgr.getInstance().loadSpriteframe(o.titleBundle, o.ResourcesRoute, function (t) {
        e.getComponent(cc.Sprite).spriteFrame = t;
      });
      var a = e.getComponent(cc.Animation);
      p.ResourceMgr.getInstance().loadRes(o.AnimBundle, o.AnimName, cc.AnimationClip, function (t) {
        a.addClip(t), a.play(o.AnimName).repeatCount = 1e5;
      });
    }
  }, e.prototype.controlWearSalutation = function (t) {
    if (this.player_Home) {
      var e = this.player_Home.getChildByName("SpSalutation");

      if (cc.isValid(e)) {
        if (e.active == t) return;
        e.active = t;
      }
    }
  }, e.prototype.rolePlay_All = function (t) {
    if (cc.isValid(t)) for (var e = C["default"].getInstance().getWearEquipList(), o = 0; o < e.length; o++) {
      this.rolePlay(e[o].id, t);
    }
  }, e.prototype.rolePlay = function (t, e) {
    if (void 0 === e && (e = this.player_Home), cc.isValid(e)) {
      var o = k.DataMgr.getInstance().getEquipCfg(t);
      if (1 == o.isSkin) if (1 == o.equipType) {
        var a = {
          imgbundle: o.bundleSkin,
          imgPath: o.equipSkin
        };
        d.SpineUtils.changePartImgBundle(e.getChildByName("NodeSkeleton").getComponent(sp.Skeleton), "weapon", "weapon1", a);
      } else 4 == o.equipType && e.getChildByName("NodeSkeleton").getComponent(sp.Skeleton).setSkin(o.equipSkin);
    }
  }, e.prototype.rolePlay_reset = function (t, e) {
    if (void 0 === e && (e = this.player_Home), cc.isValid(e)) {
      var o = k.DataMgr.getInstance().getEquipCfg(t);

      if (1 == o.equipType) {
        var a = {
          imgbundle: N["default"].getInstance().bundleSkin,
          imgPath: N["default"].getInstance().defaultWeapon
        };
        d.SpineUtils.changePartImgBundle(e.getChildByName("NodeSkeleton").getComponent(sp.Skeleton), "weapon", "weapon1", a);
      } else if (4 == o.equipType) {
        var i = N["default"].getInstance().defaultClothes;
        e.getChildByName("NodeSkeleton").getComponent(sp.Skeleton).setSkin(i);
      }
    }
  }, e.prototype.destroyPlayer_Home = function (t) {
    void 0 === t && (t = !1), cc.isValid(this.player_Home) && (this.player_Home.active = t);
  }, e.prototype.createPet = function () {
    var t = this;
    if (D["default"].getInstance().isOwnedPet || B.TimeMgr.getInstance().isOpenTimer_pet) if (this.pet) {
      this.controlPetShow(!0);
      var e = D["default"].getInstance().isOwnedPet ? D["default"].getInstance().leftPosX : D["default"].getInstance().enterPosX;
      this.pet.position = cc.v3(e, S["default"].getInstance().hightY), this.pet.scaleX = -1, D["default"].getInstance().isOwnedPet ? D["default"].getInstance().petIdleAnim(this.pet) : D["default"].getInstance().petEnterAnim(this.pet);
    } else {
      var o = k.DataMgr.getInstance().getPetsCfg();
      p.ResourceMgr.getInstance().loadRes(o.PetsBundle, o.PetsResourcesRoute, cc.Prefab, function (e) {
        t.pet = cc.instantiate(e);
        var o = D["default"].getInstance().isOwnedPet ? D["default"].getInstance().leftPosX : D["default"].getInstance().enterPosX;
        t.pet.position = cc.v3(o, S["default"].getInstance().hightY), t.pet.parent = t.node, t.pet.scaleX = -1, t.pet.on(cc.Node.EventType.TOUCH_END, function () {
          T.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.pet_click), g.UIMgr.getInstance().openUI(m.UIID.UIPet, -1);
        }), D["default"].getInstance().isOwnedPet ? D["default"].getInstance().petIdleAnim(t.pet) : D["default"].getInstance().petEnterAnim(t.pet);
      });
    }
  }, e.prototype.controlPetShow = function (t) {
    cc.isValid(this.pet) && (this.pet.active = t);
  }, e.prototype.createPlayer = function () {
    var t = this;
    this.player = new L["default"](), this.player.createObject("objects", "player/Player", this.node, N["default"].getInstance().getPlayerPro(), !0, function () {
      t.rolePlay_All(t.player.object);
    }, cc.v3(0, S["default"].getInstance().hightY, 0), void 0, 2);
  }, e.prototype.refreshPropPlayer = function () {
    this.player.refreshProp();
  }, e.prototype.createMonster = function () {
    for (var t = T.PlayerMgr.getInstance().geUserData(), e = k.DataMgr.getInstance().getLevelCfg(t.getCurSec(), t.getCurLevel()), o = f.Utils.getTabelArr(e.leftMonsterId), a = f.Utils.getTabelArr(e.rightMonsterId), i = f.Utils.getTabelArr(e.leftMonsterDis), r = f.Utils.getTabelArr(e.rightMonsterDis), n = 0; n < o.length; n++) {
      var s = k.DataMgr.getInstance().getMonsterProbCfg(Number(o[n]));
      this.makeMonster(s, Number(i[n]), !0);
    }

    for (n = 0; n < a.length; n++) {
      s = k.DataMgr.getInstance().getMonsterProbCfg(Number(a[n])), this.makeMonster(s, Number(r[n]), !1);
    }
  }, e.prototype.moveAndAtkPlayer = function () {
    var t = this;
    this.player.skeleton && (this.curAttackedMonster ? this.player.move(this.curAttackedMonster, function () {
      t.curAttackedMonster = null;
    }) : (this.detectionMonster(), this.player.move(this.curAttackedMonster, function () {
      t.curAttackedMonster = null;
    })));
  }, e.prototype.makeMonster = function (t, e, o) {
    var a = new P["default"](),
        i = o ? -(this.size.width / 2 + e) : this.size.width / 2 + e;
    a.createObject(t.id, t.bundle, t.monsterPre, this.node, b["default"].getInstance().proTableExchangeProMonster(t), !1, void 0, cc.v3(i, S["default"].getInstance().hightY, 0), !o), this.monsterList.push(a), this.refreshMonsterCount(1, !0), o ? this.monsterLeftList.push(a) : this.monsterRightList.push(a), 0 == t.type ? o ? this.leftMonsterAtClose.push(a) : this.rightMonsterAtClose.push(a) : o ? this.leftMonsterAtLong.push(a) : this.rightMonsterAtLong.push(a);
  }, e.prototype.bossComeOn = function () {
    for (var t = 0; t < this.monsterList.length; t++) {
      if (3 == k.DataMgr.getInstance().getMonsterProbCfg(this.monsterList[t].objectId).monsterType) return s.AudioMgr.getInstance().playEffectByPath(m.AudioId.BattleSound_BossWarn, "bossComeOn"), void (g.UIMgr.getInstance().getUIRoot(m.UIID.UIGame) && g.UIMgr.getInstance().getUIRoot(m.UIID.UIGame).getComponent("UIGame").BossComeOnAnim());
    }
  }, e.prototype.dieAllMonster = function (t, e) {
    this.monsterList || (this.monsterList = []);
    var o = t;
    o || (o = 1);
    var a = e;
    (null == a || a <= 0) && (a = .3);

    for (var i = 0; i < this.monsterList.length; i++) {
      this.monsterList[i].objectState == E.EnumObjectState.Alive && (this.monsterList[i].skeleton.timeScale = this.monsterList[i].timeScale_object * o * a, this.monsterList[i].subHp(void 0, 1e6));
    }
  }, e.prototype.moveAndAtkMonster = function () {
    for (var t = 0; t < this.leftMonsterAtClose.length; t++) {
      this.leftMonsterAtClose[t].objectState == E.EnumObjectState.Alive && this.moveAtClose(t, this.leftMonsterAtClose);
    }

    for (t = 0; t < this.rightMonsterAtClose.length; t++) {
      this.rightMonsterAtClose[t].objectState == E.EnumObjectState.Alive && this.moveAtClose(t, this.rightMonsterAtClose);
    }

    for (t = 0; t < this.leftMonsterAtLong.length; t++) {
      this.leftMonsterAtLong[t].objectState == E.EnumObjectState.Alive && this.leftMonsterAtLong[t].move(this.player);
    }

    for (t = 0; t < this.rightMonsterAtLong.length; t++) {
      this.rightMonsterAtLong[t].objectState == E.EnumObjectState.Alive && this.rightMonsterAtLong[t].move(this.player);
    }
  }, e.prototype.moveAtClose = function (t, e) {
    if (0 == t) e[t].move(this.player);else for (var o = t - 1; o >= 0; o--) {
      if (e[o].objectState == E.EnumObjectState.Alive) return void e[t].move(e[o]);
      0 == o && e[t].move(this.player);
    }
  }, e.prototype.detectionMonster = function () {
    for (var t = 0; t < this.monsterRightList.length; t++) {
      if (this.monsterRightList[t].objectState == E.EnumObjectState.Alive && (this.curAttackedMonster = this.getShortestDistance(this.player.object.getPosition(), this.monsterRightList), cc.isValid(this.curAttackedMonster))) return;
    }

    for (t = 0; t < this.monsterLeftList.length; t++) {
      if (this.monsterLeftList[t].objectState == E.EnumObjectState.Alive && (this.curAttackedMonster = this.getShortestDistance(this.player.object.getPosition(), this.monsterLeftList), cc.isValid(this.curAttackedMonster))) return;
    }

    this.curAttackedMonster = null;
  }, e.prototype.getMonstersForRange = function (t, e, o) {
    var a = [];
    if (this.monsterList) for (var i = 0; i < this.monsterList.length; i++) {
      if (this.monsterList[i].objectState == E.EnumObjectState.Alive) {
        var r = this.player.object.x - this.monsterList[i].object.x;
        1 == e ? 0 == t ? r > o[0] && r < o[1] && a.push(this.monsterList[i]) : r > -o[1] && r < o[0] && a.push(this.monsterList[i]) : 2 == e && r > o[0] && r < o[1] && a.push(this.monsterList[i]);
      }
    }
    return a;
  }, e.prototype.getShortestDistance = function (t, e) {
    if (void 0 === e && (e = []), !t || !e) return null;

    for (var o = null, a = this.size.width, i = 0; i < e.length; i++) {
      if (cc.isValid(e[i].object) && e[i].objectState == E.EnumObjectState.Alive) {
        var r = e[i].object.getPosition(),
            n = Math.abs(r.x - t.x);
        n < a && (a = n, o = e[i]);
      }
    }

    return o;
  }, e.prototype.controlHire_player = function () {
    cc.isValid(this.player) && this.player.controlHireEff(M["default"].getInstance().isAdddUp);
  }, e.prototype.update = function () {
    this.controlHire_player(), this.isLookSkill || S["default"].getInstance().isCurGameState(m.EnumGameState.GameDoing) && (this.moveAndAtkPlayer(), this.moveAndAtkMonster(), this.overGameWin());
  }, e.prototype.overGameWin = function () {
    for (var t = this, e = !0, o = 0; o < this.monsterList.length; o++) {
      this.monsterList[o].objectState != E.EnumObjectState.Die && (e = !1);
    }

    if (e) {
      var a = T.PlayerMgr.getInstance().geUserData();
      if (S["default"].getInstance().setGameState(m.EnumGameState.GameBuffer), this.resetCurData(), this.destroyMonster(), a.isEndForSec()) return console.log("游戏结束！！！"), S["default"].getInstance().setGameState(m.EnumGameState.GameOver), 1 == a.getEnterSecCountForSecId(a.getCurSec()) && T.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.chapter_pass_X, a.getCurSec()), S["default"].getInstance().setGameState(m.EnumGameState.GameOver), S["default"].getInstance().resetSkillBookAndFetter(), this.resetMain(), g.UIMgr.getInstance().closeById(m.UIID.UIGame), g.UIMgr.getInstance().openUI(m.UIID.UISettle, -1, !1, !0, a.getCurSec(), a.getCurLevel()), void this.refreshLevelData();
      a.getCurSec() <= 6 && a.getCurLevel() % 5 == 0 && T.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.chapter_lv_X_Y, a.getCurSec(), a.getCurLevel()), g.UIMgr.getInstance().openUI(m.UIID.UIDrawCard, -1, function () {
        if (t.controlObjectsAnim(!0), t.player.resetObject(), t.isFastPass) {
          c.EventMgr.getInstance().emit(m.EventName.GameLayerTouch, !0);
          var e = T.PlayerMgr.getInstance().geUserData();
          e.getCurSec(), e.getCurLevel() >= e.getMostLevelForCurSec()[1] - 1 ? (t.jumpNextLevel(), t.isFastPass = !1) : (e.addCurLevel(), c.EventMgr.getInstance().emit(m.EventName.RefreshLevel));
        } else t.jumpNextLevel();
      });
    }
  }, e.prototype.overGameFail = function () {
    S["default"].getInstance().setGameState(m.EnumGameState.GameOver), S["default"].getInstance().resetSkillBookAndFetter(), this.resetMain(), g.UIMgr.getInstance().closeById(m.UIID.UIGame);
    var t = T.PlayerMgr.getInstance().geUserData();
    1 == t.getEnterSecCountForSecId(t.getCurSec()) && T.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.chapter_fail_X, t.getCurSec()), g.UIMgr.getInstance().openUI(m.UIID.UISettle, -1, !1, !1, t.getCurSec(), t.getCurLevel());
  }, e.prototype.jumpNextLevel = function () {
    T.PlayerMgr.getInstance().geUserData().addCurLevel(), this.createMonster(), c.EventMgr.getInstance().emit(m.EventName.RefreshLevel);
  }, e.prototype.refreshLevelData = function () {
    w["default"].getInstance().passSecForTask(T.PlayerMgr.getInstance().geUserData().getCurSec()), T.PlayerMgr.getInstance().geUserData().addCurSec();
  }, e.prototype.refreshMonsterCount = function (t, e) {
    if (e) this.monsterCount += t;else {
      T.PlayerMgr.getInstance().getMainTaskData().mainTask(6);
      var o = T.PlayerMgr.getInstance().geUserData();
      1 == o.getCurSec() && 1 == o.getCurLevel() && c.EventMgr.getInstance().emit(m.EventName.GameGuideShow), this.monsterCount -= t;
    }
    c.EventMgr.getInstance().emit(m.EventName.RefreshMonsterCount);
  }, e.prototype.controlObjectsAnim = function (t) {
    if (!S["default"].getInstance().isCurGameState(m.EnumGameState.GamePrePare)) {
      S["default"].getInstance().isCurGameState(m.EnumGameState.GameBuffer) || (t ? S["default"].getInstance().setGameState(m.EnumGameState.GamePause) : !this.isLookSkill && S["default"].getInstance().setGameState(m.EnumGameState.GameDoing)), this.isPauseGame = t, this.player.isPauseSkeleton(t);

      for (var e = 0; e < this.monsterList.length; e++) {
        this.monsterList[e].isPauseSkeleton(t);
      }
    }
  }, e.prototype.controlObjectsGameSpeed = function () {
    if (!S["default"].getInstance().isCurGameState(m.EnumGameState.GamePrePare)) {
      console.log("游戏加速！！！"), this.player.initObject();

      for (var t = 0; t < this.monsterList.length; t++) {
        this.monsterList[t].initObject();
      }
    }
  }, e.prototype.resetCurData = function () {
    this.curAttackedMonster = null, this.isAttackState = !1, this.monsterCount = 0;
  }, e.prototype.resetAllData = function () {
    this.curAttackedMonster = null, this.isAttackState = !1, this.monsterCount = 0, this.isLookSkill = !1, this.isFastPass = !1;
  }, e.prototype.destroyPlayer = function () {
    this.player.object.destroy(), this.player = null;
  }, e.prototype.destroyMonster = function () {
    for (var t = 0; t < this.monsterList.length; t++) {
      this.monsterList[t].object.destroy(), this.monsterList[t] = null;
    }

    this.monsterList = [], this.monsterRightList = [], this.monsterLeftList = [], this.leftMonsterAtClose = [], this.rightMonsterAtClose = [], this.leftMonsterAtLong = [], this.rightMonsterAtLong = [];
  }, e.prototype.destroyObjects = function () {
    this.destroyPlayer(), this.destroyMonster();
  }, e.prototype.resetMain = function () {
    this.resetAllData(), this.destroyObjects(), this.gameCamera.resetPos();
  }, e.prototype.fastPass = function () {
    this.isFastPass = !0, T.PlayerMgr.getInstance().geUserData().setCurLevel(1), S["default"].getInstance().setGameState(m.EnumGameState.GameDoing);
  }, e.prototype.resetStart = function () {
    this.isFastPass = !1, this.createMonster(), this.scheduleOnce(function () {
      S["default"].getInstance().setGameState(m.EnumGameState.GameDoing);
    }, .5);
  }, e.prototype.preloadRes = function () {
    if (m.GameConfig.PreBundle.length > 0) for (var t = 0; t < m.GameConfig.PreBundle.length; t++) {
      var e = m.GameConfig.PreBundle[t];
      p.ResourceMgr.getInstance().preload(e, null);
    }
    p.ResourceMgr.getInstance().preload("prefabs", ["UIGame", "UISkillBook", "UIEquip", "UIShop", "UISetting", "UISellView", "UISkillBookInfo", "UIEquipInfo", "UIEquipInfoNew", "UIFetterInfo", "UIFastPass", "UIDrawCard", "UISettle", "UIEquipComposite", "UICompositeEnd"]), p.ResourceMgr.getInstance().preload("prefabs", ["EffGoodEquip1", "EffGoodEquip2", "EffGoodEquip3", "EffPropUp", "EffTaskGet", "EffUpLv"]);
  }, e.prototype.loadPool = function () {
    p.ResourceMgr.getInstance().loadRes("prefabs", "effect/EffGoodEquip1", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("EffGoodEquip1", cc.instantiate(t), 30);
    }), p.ResourceMgr.getInstance().loadRes("prefabs", "effect/EffGoodEquip2", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("EffGoodEquip2", cc.instantiate(t), 30);
    }), p.ResourceMgr.getInstance().loadRes("prefabs", "effect/EffGoodEquip3", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("EffGoodEquip3", cc.instantiate(t), 30);
    }), p.ResourceMgr.getInstance().loadRes("prefabs", "widget/LabLadleWord", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("LabLadleWord", cc.instantiate(t), 50);
    }), p.ResourceMgr.getInstance().loadRes("prefabs", "effect/EffHited", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("EffHited", cc.instantiate(t), 15);
    }), p.ResourceMgr.getInstance().loadRes("prefabs", "effect/EffSkill", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("EffSkill", cc.instantiate(t), 10);
    }), p.ResourceMgr.getInstance().loadRes("prefabs", "effect/EffSkillMonster", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("EffSkillMonster", cc.instantiate(t), 5);
    }), p.ResourceMgr.getInstance().loadRes("prefabs", "widget/NodeDropGoods", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("NodeDropGoods", cc.instantiate(t), 10);
    }), p.ResourceMgr.getInstance().loadRes("prefabs", "widget/NodeArrow", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("NodeArrow", cc.instantiate(t), 5);
    }), p.ResourceMgr.getInstance().loadRes("prefabs", "widget/NodeUISkillBook", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("NodeUISkillBook", cc.instantiate(t), 60);
    }), p.ResourceMgr.getInstance().loadRes("prefabs", "widget/NodeUISkillBookNew", cc.Prefab, function (t) {
      u.PoolMgr.getInstance().creatrePool("NodeUISkillBookNew", cc.instantiate(t), 60);
    });

    for (var t = k.DataMgr.getInstance().getAllMonsterProbCfg(), e = function e(_e) {
      p.ResourceMgr.getInstance().loadRes(t[_e].bundle, t[_e].monsterPre, cc.Prefab, function (o) {
        var a = 5;
        2 == t[_e].monsterType ? a = 3 : 3 == t[_e].monsterType && (a = 1), u.PoolMgr.getInstance().creatrePool(t[_e].monsterName, cc.instantiate(o), a);
      });
    }, o = 0; o < t.length; o++) {
      e(o);
    }
  }, e.prototype.initOnHookTime = function () {
    var t = T.PlayerMgr.getInstance().geUserData(),
        e = h.TimeUtils.getDiffMins(t.getLastOfflineTime());
    t.addOnHookTime(e), B.TimeMgr.getInstance().initTime_online(t.getOnHookTime()), h.TimeUtils.timeExchange(1, t.getOnHookTime()) < Number(k.DataMgr.getInstance().getParamsCfgForSingle(m.EnumParams.OnHookMaxTime).value) && B.TimeMgr.getInstance().openTimer_online(), t.refreshLastOfflineTime();
  }, e.prototype.refreshSaveTime = function () {
    var t = T.PlayerMgr.getInstance().geUserData();

    if (!h.TimeUtils.compareIsToday(t.getLastLoginTime())) {
      t.addLoginDay(), w["default"].getInstance().addUpLoginForTask();
      var e = Number(k.DataMgr.getInstance().getParamsCfgForSingle(m.EnumParams.LimitPower).value);
      t.addPowerNumForLimit(e), t.resetInGotGetCount();
    }

    t.refreshLastLoginTime();
  }, e.prototype.openPetTimer = function () {
    if (!D["default"].getInstance().isOwnedPet) {
      var t = T.PlayerMgr.getInstance().geUserData();
      T.PlayerMgr.getInstance().getGuideData().getGuideEnd() && t.getCurSec() >= 2 ? B.TimeMgr.getInstance().openTimer_pet() : t.getCurSec() >= 3 && B.TimeMgr.getInstance().openTimer_pet();
    }
  }, e.prototype.openOnlineTimer = function () {
    B.TimeMgr.getInstance().openTimer_OnlineMain();
  }, e.prototype.callbackTimer_power = function () {
    B.TimeMgr.getInstance().callbackTimer_power();
  }, e.prototype.callbackTimer_online = function () {
    B.TimeMgr.getInstance().callbackTimer_online();
  }, e.prototype.callbackTimer_pet = function () {
    B.TimeMgr.getInstance().callbackTimer_pet();
  }, e.prototype.callbackTimer_OnlineMain = function () {
    B.TimeMgr.getInstance().callbackTimer_OnlineMain();
  }, e.prototype.callbackTimer_MysticalShop = function () {
    B.TimeMgr.getInstance().callbackTimer_MysticalShop();
  }, e.instance = null, r([O(cc.Node)], e.prototype, "root", void 0), r([O(cc.Node)], e.prototype, "cameraNode", void 0), r([O(v["default"])], e.prototype, "gameCamera", void 0), r([O(cc.Node)], e.prototype, "temp", void 0), r([O(cc.Node)], e.prototype, "btnChangle", void 0), o = r([R], e);
}(cc.Component);

o["default"] = F;

cc._RF.pop();