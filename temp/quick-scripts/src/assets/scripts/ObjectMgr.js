"use strict";
cc._RF.push(module, '9d1dfg4Zg5Av6dI2J+ehAav', 'ObjectMgr');
// scripts/ObjectMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ObjectPro = void 0;
var a = t("Utils"),
    i = t("ObjectsParent"),
    r = t("DataMgr"),
    n = t("PlayerMgr");

o.ObjectPro = function () {};

var s = function () {
  function t() {}

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.proTableExchangeProMonster = function (t) {
    var e = n.PlayerMgr.getInstance().geUserData(),
        o = e.getCurSec(),
        i = e.getCurLevel(),
        s = r.DataMgr.getInstance().getSecFactorForLevelToAtk(t.monsterType, o, i),
        c = r.DataMgr.getInstance().getSecFactorForLevelToHp(t.monsterType, o, i),
        l = a.Utils.getTabelArr(t.atk),
        u = a.Utils.randomRang(Number(l[0]), Number(l[1]));
    return {
      hp_total: Math.ceil(t.hp * c),
      hp: Math.ceil(t.hp * c),
      attack_min: Math.ceil(u * s),
      attack_max: Math.ceil(u * s),
      speed: t.moveSpped,
      atkDis: t.atkDis,
      atkInterval: t.atkInterval,
      atkSpeed: 0,
      atkCrazyProb: 0,
      atkCrazyHurt: 0,
      subHurt: 0,
      dodgeHurtProb: 0
    };
  }, t.prototype.getColorForAtkType = function (t) {
    var e = cc.color();

    switch (t) {
      case i.EnumLadleWordType.Atk_Normal:
        e = cc.color(255, 255, 255);
        break;

      case i.EnumLadleWordType.Atk_CrazyHurt:
        e = cc.color(255, 44, 44);
        break;

      case i.EnumLadleWordType.Atk_CrazyName:
        e = cc.color(255, 252, 30);
        break;

      case i.EnumLadleWordType.Atk_SkillHurt:
        e = cc.color(198, 44, 255);
        break;

      case i.EnumLadleWordType.Atk_SkillName:
        e = cc.color(255, 44, 44);
        break;

      case i.EnumLadleWordType.Hp_Recover:
        e = cc.color(64, 255, 55);
        break;

      case i.EnumLadleWordType.Miss:
        e = cc.color(55, 196, 255);
    }

    return e;
  }, t;
}();

o["default"] = s;

cc._RF.pop();