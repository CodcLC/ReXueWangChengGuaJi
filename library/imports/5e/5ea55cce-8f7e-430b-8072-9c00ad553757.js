"use strict";
cc._RF.push(module, '5ea55zOj35DC4BynACtVTdX', 'Monster');
// scripts/Monster.js

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
var n = t("PoolMgr"),
    s = t("ResourceMgr"),
    c = t("Utils"),
    l = t("Main"),
    u = t("DataMgr"),
    p = t("EffectMgr"),
    g = t("GameDataMgr"),
    d = t("ObjectMgr"),
    h = t("PlayerMgr"),
    f = t("LadleWordMgr"),
    m = t("ObjectsParent"),
    y = cc._decorator,
    v = y.ccclass,
    I = (y.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.scale_object = 1, e.scale_hpBar = 1, e.timeScale_object = 1, e.isCoollingState = !1, e.isAckState = !1, e.objectId = 1, e;
  }

  return i(e, t), e.prototype.createObject = function (t, e, o, a, i, r, c, l, p, g, d) {
    var h = this;
    void 0 === r && (r = !1), this.objectId = t, this.isPlayer = r;
    var f = u.DataMgr.getInstance().getMonsterProbCfg(this.objectId);
    this.object = n.PoolMgr.getInstance().getNode(f.monsterName), this.initObjectsState(), this.object ? this.loadObjectInfo(a, i, r, c, l, p, g, d) : (console.log("动态加载怪物"), s.ResourceMgr.getInstance().loadRes(e, o, cc.Prefab, function (t) {
      h.object = cc.instantiate(t), h.loadObjectInfo(a, i, r, c, l, p, g, d);
    }));
  }, e.prototype.loadObjectInfo = function (t, e, o, a, i, r, n, s) {
    void 0 === o && (o = !1), this.skeleton = this.object.getComponent(sp.Skeleton), this.initObject(), cc.isValid(t) && (this.object.parent = t), i && (this.object.position = i), r && (this.object.scaleX = -this.object.scaleX, this.object.getChildByName("SpHpBarBg").scaleX = -this.object.getChildByName("SpHpBarBg").scaleX), n && (this.object.zIndex = n), s && (this.object.scale = s), this.object.group = "game", a && a(), this.initObjectProperty(e), this.refreshObject();
  }, e.prototype.move = function (t) {
    var e = this;
    if (cc.isValid(this.object) && t && cc.isValid(t.object) && this.objectState == m.EnumObjectState.Alive && !this.isAckState) if (cc.Vec2.distance(this.object.getPosition(), t.object.getPosition()) <= this.objectProperty.atkDis) {
      if (this.isCoollingState || !t.isPlayer) return void ("idle" != this.skeleton.animation && this.playAnim("idle", !0));
      this.isCoollingState = !0, this.isAckState = !0;
      var o = this.objectProperty.attack_max,
          a = m.EnumLadleWordType.Atk_Normal;
      this.isTriggerCrazyAtk() && (o = Math.ceil(o * (this.objectProperty.atkCrazyHurt / 100)), a = m.EnumLadleWordType.Atk_CrazyHurt);
      var i = o;
      this.playAnim("attack", !1, function () {
        var o = u.DataMgr.getInstance().getMonsterProbCfg(e.objectId);

        if (2 == o.type) {
          var a = cc.v2(Math.abs(t.object.x - e.object.x), 0);
          p["default"].playEff("prefabs", "effect/EffSkillMonster", "EffSkillMonster", o.skillEffName, e.getNodeSkillEff(), a);
        }
      }, function () {
        1 == u.DataMgr.getInstance().getMonsterProbCfg(e.objectId).type ? e.createArrow(t, a, i) : t.subHp(a, i);
      }, function () {
        e.recycleNodeEff(), e.isAckState = !1, setTimeout(function () {
          e.isCoollingState = !1;
        }, e.objectProperty.atkInterval / e.gameSpeedArr[e.curGameMultiply - 1]);
      });
    } else {
      var r = this.object.x - t.object.x > 0 ? -1 : 1;
      "move" != this.skeleton.animation && this.playAnim("move", !0), this.object.x += this.objectProperty.speed * this.gameSpeedArr[this.curGameMultiply - 1] * r;
    }
  }, e.prototype.playAnim = function (t, e, o, a, i) {
    void 0 === e && (e = !1), this.skeleton.findAnimation(t) && (this.skeleton.setAnimation(0, t, e), this.skeleton.setEventListener(function (t, e) {
      "start" == e.data.name ? o && o() : "attack" == e.data.name && a && a();
    }), this.skeleton.setCompleteListener(function () {
      i && i();
    }));
  }, e.prototype.initObjectProperty = function (t) {
    this.objectProperty = t;
  }, e.prototype.subHp = function (t, e, o, a) {
    var i = this;

    if (this.objectState == m.EnumObjectState.Alive) {
      var r = c.Utils.posTransform(this.object, this.getNodeEff().getPosition(), l["default"].instance.node);
      p["default"].playEff("prefabs", "effect/EffHited", "EffHited", "tx_sj1", l["default"].instance.node, r, 0, 2, 10);
      var n = Math.ceil(e);

      if (this.objectProperty.hp -= n, this.refreshObject(), null != t && null != t && (t == m.EnumLadleWordType.Atk_CrazyHurt ? (f["default"].LabLoad(l["default"].instance.node, c.Utils.posTransform(this.object, this.getHpBarNode().getPosition(), l["default"].instance.node), "暴击", f["default"].height_ladleWord.height_type, void 0, d["default"].getInstance().getColorForAtkType(m.EnumLadleWordType.Atk_CrazyName)), f["default"].LabLoad(l["default"].instance.node, c.Utils.posTransform(this.object, this.getHpBarNode().getPosition(), l["default"].instance.node), "-" + n, f["default"].height_ladleWord.height_number, void 0, d["default"].getInstance().getColorForAtkType(t))) : (m.EnumLadleWordType.Atk_SkillHurt, f["default"].LabLoad(l["default"].instance.node, c.Utils.posTransform(this.object, this.getHpBarNode().getPosition(), l["default"].instance.node), "-" + n, f["default"].height_ladleWord.height_number, void 0, d["default"].getInstance().getColorForAtkType(t)))), this.objectProperty.hp <= 0) {
        this.object.getChildByName("SpHpBarBg").active = !1, this.setWaitDieState(), l["default"].instance.refreshMonsterCount(1, !1);

        for (var s = u.DataMgr.getInstance().getMonsterProbCfg(this.objectId), y = this.object.getPosition(), v = h.PlayerMgr.getInstance().geUserData().getCurSec(), I = g["default"].getInstance().dropGoodsFun(v, s.monsterType), k = 0; k < I.length; k++) {
          g["default"].getInstance().addDropGoods(I[k], l["default"].instance.node, cc.v2(y.x + 100 * k, y.y));
        }

        this.playAnim("die", !1, void 0, void 0, function () {
          i.setDieState(), i.setDie();
        }), o && o();
      } else a && a();
    } else console.log("死亡");
  }, e.prototype.getNodeSkillEff = function () {
    return cc.isValid(this.object) ? this.object.getChildByName("NodeSkillEff") : null;
  }, e.prototype.recycleNodeSkillEff = function () {
    for (var t = this.getNodeEff(), e = 0; e < t.childrenCount; e++) {
      var o = t.children[e];
      cc.isValid(o) && n.PoolMgr.getInstance().freeNode(o.name, o);
    }
  }, e.prototype.createArrow = function (t, e, o) {
    var a = this;

    if (t && cc.isValid(t.object)) {
      var i = n.PoolMgr.getInstance().getNode("NodeArrow");
      i ? (i.parent = l["default"].instance.node, i.setPosition(cc.v2(t.object.x, 1e3)), this.shootArrow(i, t, e, o)) : s.ResourceMgr.getInstance().loadRes("prefabs", "widget/NodeArrow", cc.Prefab, function (r) {
        (i = cc.instantiate(r)).parent = l["default"].instance.node, i.setPosition(cc.v2(t.object.x, 1e3)), a.shootArrow(i, t, e, o);
      });
    }
  }, e.prototype.shootArrow = function (t, e, o, a) {
    var i = this;
    e && cc.isValid(e.object) ? cc.isValid(t) && (t.opacity = 255, cc.tween(t).to(.1, {
      y: e.object.y
    }).call(function () {
      cc.isValid(e.object) && e.object.x >= t.x - 10 && e.object.x <= t.x + 10 && e.subHp(o, a);
    }).to(1, {
      opacity: 0
    }).call(function () {
      i.recycleArrow(t);
    }).start()) : cc.isValid(t) && this.recycleArrow(t);
  }, e.prototype.recycleArrow = function (t) {
    cc.isValid(t) && n.PoolMgr.getInstance().freeNode("NodeArrow", t);
  }, r([v], e);
}(m["default"]));
o["default"] = I;

cc._RF.pop();