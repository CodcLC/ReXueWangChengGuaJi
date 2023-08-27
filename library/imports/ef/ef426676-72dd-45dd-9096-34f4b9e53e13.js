"use strict";
cc._RF.push(module, 'ef426Z2ct1F3ZCWNPS55T4T', 'RedDotMgr');
// scripts/RedDotMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("TimeUtils"),
    i = t("Config"),
    r = t("DataMgr"),
    n = t("EquipMgr"),
    s = t("PlayerMgr"),
    c = function () {
  function t() {}

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.homeForRedDot = function (t, e, o, a, i) {
    this.taskForRedDot(t), this.onHookForRedDot(e), this.skillBookForRedDot(o), this.equipForRedDot(a), this.shopForRedDot(i);
  }, t.prototype.taskForRedDot = function (t) {
    for (var e = s.PlayerMgr.getInstance().geUserData().getCurTaskList(), o = 0; o < e.length; o++) {
      if (1 == e[o].state) return cc.isValid(t) && (t.active = !0), !0;
    }

    return cc.isValid(t) && (t.active = !1), !1;
  }, t.prototype.onHookForRedDot = function (t) {
    var e = s.PlayerMgr.getInstance().geUserData();
    return a.TimeUtils.timeExchange(1, e.getOnHookTime()) > Number(r.DataMgr.getInstance().getParamsCfgForSingle(i.EnumParams.OnHookMaxTime).value) ? (cc.isValid(t) && (t.active = !0), !0) : (cc.isValid(t) && (t.active = !1), !1);
  }, t.prototype.skillBookForRedDot = function (t) {
    for (var e = s.PlayerMgr.getInstance().geUserData(), o = e.getSkillBookArr(), a = 0; a < o.length; a++) {
      var i = r.DataMgr.getInstance().getSkillBookLevelCfg(o[a].id, o[a].level);
      if (o[a].iCount >= i.ConsumeSkillBookNum && e.getGoldNum() >= i.ConsumeNum) return cc.isValid(t) && (t.active = !0), !0;
    }

    return cc.isValid(t) && (t.active = !1), !1;
  }, t.prototype.equipForRedDot = function (t) {
    for (var e = s.PlayerMgr.getInstance().geUserData(), o = e.getOwnedEquipList(), a = 0; a < o.length; a++) {
      for (var i = e.isExistEquip(a + 1), c = 0; c < o[a].length; c++) {
        var l = o[a][c];
        if (!i) return cc.isValid(t) && (t.active = !0), !0;
        var u = 0,
            p = 0,
            g = s.PlayerMgr.getInstance().getAbType();
        if ("D" == g || "B" == g ? (u = n["default"].getInstance().getEquipFightForId(l.id, !1, l.type, l.IDCard, l), p = n["default"].getInstance().getEquipFightForId(i.id, !1, i.type, i.IDCard, i)) : (u = r.DataMgr.getInstance().getEquipStrengthenCfg(l.id, l.strengthenLv).fightNum, p = r.DataMgr.getInstance().getEquipStrengthenCfg(i.id, i.strengthenLv).fightNum), u > p) return cc.isValid(t) && (t.active = !0), !0;
      }
    }

    return cc.isValid(t) && (t.active = !1), !1;
  }, t.prototype.shopForRedDot = function (t) {
    return s.PlayerMgr.getInstance().geUserData().getInGotNum() >= 100 ? (cc.isValid(t) && (t.active = !0), !0) : (cc.isValid(t) && (t.active = !1), !1);
  }, t;
}();

o["default"] = c;

cc._RF.pop();