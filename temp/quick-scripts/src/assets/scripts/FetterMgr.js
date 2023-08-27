"use strict";
cc._RF.push(module, '49291DkcltDP41zD39UipO7', 'FetterMgr');
// scripts/FetterMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("Utils"),
    i = t("DataMgr"),
    r = t("RoleMgr"),
    n = function () {
  function t() {
    this.addSkillAndHurtProp = 0, this.recoverHp_levelEnd_base = 0, this.recoverHp_levelEnd_add = 0, this.atkCount_base = 0, this.atkCount = 0, this.recoverHp_atkEnd_base = 0, this.alwaysAtkHurt_base = 0, this.alwaysAtkHurt = 0, this.firstAtkToCrazyProp_base = 0;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.WarriorFetter = function () {}, t.prototype.MasterFetter = function (t) {
    this.addSkillAndHurtProp = this.getSuitPropValue(2, t);
  }, t.prototype.isHaveMasterFetter = function () {
    return !!r["default"].getInstance().isExistFetterForFetterId(2);
  }, t.prototype.getAddSkillAndHurtProp = function () {
    return this.addSkillAndHurtProp;
  }, t.prototype.TaoistFetter = function () {}, t.prototype.IntensifyFetter = function () {}, t.prototype.SpeedFetter = function () {}, t.prototype.WishFetter = function (t) {
    this.recoverHp_levelEnd_base = this.getSuitPropValue(6, t);
  }, t.prototype.isHaveWishFetter = function () {
    return !!r["default"].getInstance().isExistFetterForFetterId(6);
  }, t.prototype.addRecoverHp_levelEnd_add = function () {
    this.recoverHp_levelEnd_add += this.recoverHp_levelEnd_base;
  }, t.prototype.getRecoverHp_levelEnd_add = function () {
    return this.recoverHp_levelEnd_add;
  }, t.prototype.ShieldFetter = function () {}, t.prototype.RuinFetter = function (t) {
    this.atkCount_base = this.getSuitPropValue(8, t);
  }, t.prototype.isHaveRuinFetter = function () {
    return !!r["default"].getInstance().isExistFetterForFetterId(8);
  }, t.prototype.isAccomplishRuin = function () {
    return this.atkCount >= this.atkCount_base ? (this.atkCount = 0, !0) : (this.atkCount++, !1);
  }, t.prototype.getDamageValueRuin = function (t) {
    return Math.ceil(2.5 * t);
  }, t.prototype.MagicArtsFetter = function () {}, t.prototype.SummonFetter = function () {}, t.prototype.SpecialFetter = function (t) {
    this.recoverHp_atkEnd_base = this.getSuitPropValue(11, t);
  }, t.prototype.isHaveSpecialFetter = function () {
    return !!r["default"].getInstance().isExistFetterForFetterId(11);
  }, t.prototype.getRecoverHp_atkEnd_base = function () {
    return this.recoverHp_atkEnd_base;
  }, t.prototype.CurseFetter = function (t) {
    this.alwaysAtkHurt_base = this.getSuitPropValue(12, t);
  }, t.prototype.isHaveCurseFetter = function () {
    return !!r["default"].getInstance().isExistFetterForFetterId(12);
  }, t.prototype.getDamageForCurse = function () {
    var t = r["default"].getInstance().getPlayerPro();
    return [t.attack_min * this.alwaysAtkHurt / 100, t.attack_min * this.alwaysAtkHurt / 100];
  }, t.prototype.addDamageForCurse = function () {
    this.alwaysAtkHurt += this.alwaysAtkHurt_base;
  }, t.prototype.ThreatenFetter = function (t) {
    this.firstAtkToCrazyProp_base = this.getSuitPropValue(13, t);
  }, t.prototype.isHaveThreatenFetter = function () {
    return !!r["default"].getInstance().isExistFetterForFetterId(13);
  }, t.prototype.getFirstAtkToCrazyProp_base = function () {
    return this.firstAtkToCrazyProp_base;
  }, t.prototype.getSuitPropValue = function (t, e) {
    e || (e = 1);
    var o = i.DataMgr.getInstance().getFetter(t),
        r = a.Utils.getTabelArr(o.fetterFun),
        n = Number(r[e - 1]);
    return n || (n = 0), n;
  }, t.prototype.resetFetterValue = function () {
    this.recoverHp_levelEnd_base = 0, this.atkCount_base = 0, this.atkCount = 0, this.recoverHp_atkEnd_base = 0, this.alwaysAtkHurt_base = 0, this.alwaysAtkHurt = 0, this.firstAtkToCrazyProp_base = 0;
  }, t;
}();

o["default"] = n;

cc._RF.pop();