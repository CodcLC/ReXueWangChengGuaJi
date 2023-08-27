"use strict";
cc._RF.push(module, 'cefacOI+l9A4I1A85jYeJp/', 'Player');
// scripts/Player.js

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
var n = t("AudioMgr"),
    s = t("PoolMgr"),
    c = t("ResourceMgr"),
    l = t("Utils"),
    u = t("Main"),
    p = t("Config"),
    g = t("DataMgr"),
    d = t("EffectMgr"),
    h = t("EquipMgr"),
    f = t("FetterMgr"),
    m = t("GameDataMgr"),
    y = t("GameMgr"),
    v = t("ObjectMgr"),
    I = t("RoleMgr"),
    k = t("SkillMgr"),
    C = t("LadleWordMgr"),
    S = t("ObjectsParent"),
    M = cc._decorator,
    _ = M.ccclass,
    b = (M.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.scale_object = 1, e.scale_hpBar = 1, e.timeScale_object = 1, e.addUpSpeed = .7, e.generalSkillArr = ["gj1_1", "gj1_2", "gj1_3", "gj1_4", "gj1_5", "gj1_6"], e.generalSkillEffArr = ["dg1_1", "dg1_2", "dg1_3", "dg1_4", "dg1_5", "dg1_6"], e.isAtkState = !1, e.lowTimeScale = .2, e;
  }

  return i(e, t), e.prototype.getNodePlayer = function () {
    return this.object;
  }, e.prototype.controlHireEff = function (t) {
    cc.isValid(this.object) && (this.object.getChildByName("NodeFireEff").active = t);
  }, e.prototype.createObject = function (t, e, o, a, i, r, n, l, u, d) {
    var h = this;
    void 0 === i && (i = !1), this.isPlayer = i, this.object = s.PoolMgr.getInstance().getNode("Player"), this.addUpSpeed = Number(g.DataMgr.getInstance().getParamsCfgForSingle(p.EnumParams.TrudgeSpeedValue).value) / 100, this.initObjectsState(), this.object ? this.loadObjectInfo(o, a, i, r, n, l, u, d) : (console.log("动态加载玩家"), c.ResourceMgr.getInstance().loadRes(t, e, cc.Prefab, function (t) {
      h.object = cc.instantiate(t), h.loadObjectInfo(o, a, i, r, n, l, u, d);
    }));
  }, e.prototype.loadObjectInfo = function (t, e, o, a, i, r, n, s) {
    void 0 === o && (o = !1), this.skeleton = this.object.getChildByName("NodeSkeleton").getComponent(sp.Skeleton), cc.isValid(t) && (this.object.parent = t), i && (this.object.position = i), r && (this.object.scaleX = -this.object.scaleX, this.object.getChildByName("SpHpBarBg").scaleX = -this.object.getChildByName("SpHpBarBg").scaleX), n && (this.object.zIndex = n), s && (this.object.scale = s), this.object.group = "game", a && a(), this.initObjectProperty(e), this.refreshObject(), this.initSkillEffName(), this.initObject();
  }, e.prototype.initSkillEffName = function () {
    var t = h["default"].getInstance().getWearEquipData(1);
    if (t) for (var e = 0; e < this.generalSkillEffArr.length; e++) {
      this.generalSkillEffArr[e] = "dg" + t.quality + "_" + (e + 1);
    }
  }, e.prototype.move = function (t, e) {
    if (cc.isValid(this.object)) if (t && cc.isValid(t.object) && t.objectState == S.EnumObjectState.Alive) {
      if (!this.isAtkState) if (cc.Vec2.distance(this.object.getPosition(), t.object.getPosition()) <= this.objectProperty.atkDis) this.isAtkState = !0, this.atkMonster(t, e);else {
        var o = this.object.x - t.object.x > 0 ? -1 : 1;
        "yd" != this.skeleton.animation && (n.AudioMgr.getInstance().playEffect(p.AudioId.BattleSound_Mobile), this.controlDir(t), this.playAnim("yd", !1)), this.object.x += this.objectProperty.speed * this.gameSpeedArr[this.curGameMultiply - 1] * o;
      }
    } else e && e();
  }, e.prototype.atkMonster = function (t, e) {
    var o = this;

    if (this.objectState == S.EnumObjectState.Alive) {
      if (t && cc.isValid(t.object) && t.objectState == S.EnumObjectState.Alive) {
        this.controlDir(t);
        var a = "",
            i = "",
            r = k["default"].getAtkSkillId(),
            s = g.DataMgr.getInstance().getSkill(r);

        if (0 == r) {
          var c = m["default"].getInstance().randomPlayerSkill(this.generalSkillArr);
          a = this.generalSkillArr[c], i = this.generalSkillEffArr[c];
        } else a = s.skillAnimName, i = s.skillEffName;

        var h = t.isFullHp(),
            I = 0,
            M = [0, 0],
            _ = f["default"].getInstance();

        _.isHaveCurseFetter() && (h || (M = _.getDamageForCurse()), _.addDamageForCurse());
        var b = l.Utils.randomRang(this.objectProperty.attack_min + M[0], this.objectProperty.attack_max + M[1]),
            D = !1;
        _.isHaveRuinFetter() && _.isAccomplishRuin() ? (D = !0, b = _.getDamageValueRuin(b)) : h && _.isHaveThreatenFetter() && (I = _.getFirstAtkToCrazyProp_base());
        var T = S.EnumLadleWordType.Atk_Normal;
        D || this.isTriggerCrazyAtk(I) && (b = Math.ceil(b * (this.objectProperty.atkCrazyHurt / 100)), T = S.EnumLadleWordType.Atk_CrazyHurt), 0 != r && (T = S.EnumLadleWordType.Atk_SkillHurt);
        var N = b,
            w = !1,
            B = [];

        if (0 != r) {
          if (N = Math.ceil(N * s.damageValue / 100), 0 == s.damageType) {
            var P = g.DataMgr.getInstance().getMonsterProbCfg(t.objectId);
            1 != u["default"].instance.monsterCount && 3 != P.monsterType || t.objectProperty.hp <= N && (w = !0);
          } else if (-1 == s.damageType) ;else {
            var E = l.Utils.getTabelArr(s.damageAround),
                L = [Number(E[0]), Number(E[1])],
                U = this.object.x - t.object.x > 0 ? 0 : 1;
            B = u["default"].instance.getMonstersForRange(U, s.damageType, L);
            var A = !0;

            for (c = 0; c < B.length; c++) {
              if (B[c].objectProperty.hp > N) A = !1;else if (3 == (P = g.DataMgr.getInstance().getMonsterProbCfg(B[c].objectId)).monsterType) {
                A = !0, w = !0;
                break;
              }
            }

            A && u["default"].instance.monsterCount == B.length && (w = !0);
          }
        } else P = g.DataMgr.getInstance().getMonsterProbCfg(t.objectId), 1 != u["default"].instance.monsterCount && 3 != P.monsterType || t.objectProperty.hp <= N && (w = !0);

        this.playAnim(a, !1, function () {
          if (i && "" != i) {
            var e = cc.v2(0, 0);
            if (0 != r) e = cc.v2(Math.abs(t.object.x - o.object.x), 0);else {
              var a = N >= t.objectProperty.hp ? l.Utils.randomRang(3, 5) : l.Utils.randomRang(1, 3);
              n.AudioMgr.getInstance().playEffectByPath(p.AudioId["BattleSound_Attack0" + a], "generalAtk");
            }
            d["default"].playEff("prefabs", "effect/EffSkill", "EffSkill", i, o.getNodeEff(), e);
          }
        }, function () {
          if (_.isHaveSpecialFetter()) {
            var a = _.getRecoverHp_atkEnd_base(),
                i = Math.ceil(N * a / 100);

            o.addHp(i), C["default"].LabLoad(u["default"].instance.node, l.Utils.posTransform(o.object, o.getHpBarNode().getPosition(), u["default"].instance.node), "+" + i, C["default"].height_ladleWord.height_type, void 0, v["default"].getInstance().getColorForAtkType(S.EnumLadleWordType.Hp_Recover));
          }

          if (w) {
            if (m["default"].getInstance().setGameState(p.EnumGameState.GameBuffer), o.skeleton.timeScale = (o.timeScale_object * o.gameSpeedArr[o.curGameMultiply - 1] + (y["default"].getInstance().isAdddUp ? o.addUpSpeed : 0)) * o.lowTimeScale, B.length > 0) for (var c = 0; c < B.length; c++) {
              B[c].skeleton.timeScale = B[c].timeScale_object * o.gameSpeedArr[o.curGameMultiply - 1] * o.lowTimeScale;
            } else t.skeleton.timeScale = t.timeScale_object * o.gameSpeedArr[o.curGameMultiply - 1] * o.lowTimeScale;
            u["default"].instance.gameCamera.controlCameraZoom(.2, 1.5);
          } else N >= t.objectProperty.hp && u["default"].instance.gameCamera.shakeAnim();

          if (0 == r) t.subHp(T, N, function () {
            3 == g.DataMgr.getInstance().getMonsterProbCfg(t.objectId).monsterType && w && (console.log("所有怪物播放死亡动作"), u["default"].instance.dieAllMonster(o.gameSpeedArr[o.curGameMultiply - 1])), e && e();
          });else if (n.AudioMgr.getInstance().playEffectByPath(p.AudioId[s.Sound], "skill" + r), C["default"].LabLoadForSkill(u["default"].instance.node, l.Utils.posTransform(o.object, o.getHpBarNode().getPosition(), u["default"].instance.node), "" + s.skillName, C["default"].height_ladleWord.hegiht_skill, void 0, v["default"].getInstance().getColorForAtkType(S.EnumLadleWordType.Atk_SkillName)), 0 == s.damageType) t.subHp(T, N, function () {
            3 == g.DataMgr.getInstance().getMonsterProbCfg(t.objectId).monsterType && w && (console.log("所有怪物播放死亡动作"), u["default"].instance.dieAllMonster(o.gameSpeedArr[o.curGameMultiply - 1])), e && e();
          });else if (-1 == s.damageType) o.addHp(N), C["default"].LabLoad(u["default"].instance.node, l.Utils.posTransform(o.object, o.getHpBarNode().getPosition(), u["default"].instance.node), "+" + N, C["default"].height_ladleWord.height_type, void 0, v["default"].getInstance().getColorForAtkType(S.EnumLadleWordType.Hp_Recover));else {
            var d = function d(t) {
              if (3 == g.DataMgr.getInstance().getMonsterProbCfg(B[t].objectId).monsterType && w) return B[t].subHp(T, N, function () {
                u["default"].instance.dieAllMonster(o.gameSpeedArr[o.curGameMultiply - 1], o.lowTimeScale), e && e();
              }), "break";
              B[t].subHp(T, N, function () {
                t == B.length - 1 && e && e();
              });
            };

            for (c = 0; c < B.length && "break" !== d(c); c++) {
              ;
            }
          }
        }, function () {
          o.recycleNodeEff(), o.isAtkState = !1, w && (w = !1, o.skeleton.timeScale = o.timeScale_object * o.gameSpeedArr[o.curGameMultiply - 1] + (y["default"].getInstance().isAdddUp ? o.addUpSpeed : 0), cc.isValid(t.object) && (t.skeleton.timeScale = t.timeScale_object * o.gameSpeedArr[o.curGameMultiply - 1]), u["default"].instance.gameCamera.controlCameraZoom(.1, 1, function () {
            m["default"].getInstance().setGameState(p.EnumGameState.GameDoing);
          }));
        });
      } else e && e();
    } else e && e();
  }, e.prototype.moveAnim = function (t, e) {
    var o = t.x >= this.object.x;
    this.object.scaleX = o ? 1 : -1, this.object.getChildByName("SpHpBarBg").scaleX = o ? this.scale_hpBar : -this.scale_hpBar;
    var a = o ? -200 : 200,
        i = Math.abs(this.object.x - (t.x + a));
    cc.tween(this.object).to(i / this.objectProperty.speed, {
      position: cc.v3(t.x + a, t.y, 0)
    }).call(function () {
      e && e();
    }).start();
  }, e.prototype.playAnim = function (t, e, o, a, i) {
    void 0 === e && (e = !1), this.skeleton && this.skeleton.findAnimation(t) && (this.skeleton.setAnimation(0, t, e), this.skeleton.timeScale = this.timeScale_object * this.gameSpeedArr[this.curGameMultiply - 1] + (y["default"].getInstance().isAdddUp ? this.addUpSpeed : 0), this.skeleton.setEventListener(function (t, e) {
      "start" == e.data.name ? o && o() : "attack" == e.data.name && a && a();
    }), this.skeleton.setCompleteListener(function () {
      i && i();
    }));
  }, e.prototype.initObjectProperty = function (t) {
    this.objectProperty = t;
  }, e.prototype.controlDir = function (t) {
    var e = t.object.x >= this.object.x;
    this.object.scaleX = e ? this.scale_object : -this.scale_object, this.object.getChildByName("SpHpBarBg").scaleX = e ? this.scale_hpBar : -this.scale_hpBar;
  }, e.prototype.subHp = function (t, e, o, a) {
    var i = this;

    if (this.objectState == S.EnumObjectState.Alive && !this.isTriggerDodgeHurt()) {
      var r = Math.ceil(e);
      (r -= Math.ceil(r * (this.objectProperty.subHurt / 100))) <= 0 && (r = 1), this.objectProperty.hp -= r, this.refreshObject(), t == S.EnumLadleWordType.Atk_CrazyHurt ? (C["default"].LabLoad(u["default"].instance.node, l.Utils.posTransform(this.object, this.getHpBarNode().getPosition(), u["default"].instance.node), "暴击", C["default"].height_ladleWord.height_type, void 0, v["default"].getInstance().getColorForAtkType(S.EnumLadleWordType.Atk_CrazyName)), C["default"].LabLoad(u["default"].instance.node, l.Utils.posTransform(this.object, this.getHpBarNode().getPosition(), u["default"].instance.node), "-" + r, C["default"].height_ladleWord.height_number, void 0, v["default"].getInstance().getColorForAtkType(t))) : C["default"].LabLoad(u["default"].instance.node, l.Utils.posTransform(this.object, this.getHpBarNode().getPosition(), u["default"].instance.node), "-" + r, C["default"].height_ladleWord.height_number, void 0, v["default"].getInstance().getColorForAtkType(t)), this.objectProperty.hp <= 0 ? (this.setDieState(), this.object.getChildByName("SpHpBarBg").active = !1, n.AudioMgr.getInstance().playEffect(p.AudioId.BattleSound_Die), this.playAnim("sw", !1, void 0, void 0, function () {
        i.setDie(), u["default"].instance.overGameFail();
      }), o && o()) : a && a();
    }
  }, e.prototype.resetObject = function () {
    this.object.x = 0, this.fullHp(), this.refreshObject();
  }, e.prototype.refreshProp = function () {
    var t = I["default"].getInstance().getPlayerPro(),
        e = I["default"].getInstance().getPropForAllSkillBook(),
        o = I["default"].getInstance().getPropForAllFetter();

    if (this.objectProperty = {
      hp_total: Math.ceil(t.hp_total + e.hp_total + o.hp_total),
      hp: Math.ceil(t.hp + e.hp + o.hp),
      attack_min: Math.ceil(t.attack_min + e.attack_min + o.attack_min),
      attack_max: Math.ceil(t.attack_max + e.attack_max + o.attack_max),
      speed: Math.ceil(t.speed + e.speed + o.speed),
      atkDis: Math.ceil(t.atkDis + e.atkDis + o.atkDis),
      atkInterval: Math.ceil(t.atkInterval + e.atkInterval + o.atkInterval),
      atkSpeed: Math.ceil(t.atkSpeed + e.atkSpeed + o.atkSpeed),
      atkCrazyProb: Math.ceil(t.atkCrazyProb + e.atkCrazyProb + o.atkCrazyProb),
      atkCrazyHurt: Math.ceil(t.atkCrazyHurt + e.atkCrazyHurt + o.atkCrazyHurt),
      subHurt: Math.ceil(t.subHurt + e.subHurt + o.subHurt),
      dodgeHurtProb: Math.ceil(t.dodgeHurtProb + e.dodgeHurtProb + o.dodgeHurtProb)
    }, this.initObject(), f["default"].getInstance().isHaveWishFetter()) {
      f["default"].getInstance().addRecoverHp_levelEnd_add();
      var a = f["default"].getInstance().getRecoverHp_levelEnd_add();
      this.objectProperty.hp_total += Math.ceil(this.objectProperty.hp_total * a / 100);
    }

    this.resetObject();
  }, r([_], e);
}(S["default"]));
o["default"] = b;

cc._RF.pop();