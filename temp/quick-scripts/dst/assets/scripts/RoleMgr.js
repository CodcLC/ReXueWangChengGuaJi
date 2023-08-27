
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/RoleMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '493edUvszZEZ6MgLpKcr8I5', 'RoleMgr');
// scripts/RoleMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("Utils"),
    i = t("Main"),
    r = t("Config"),
    n = t("DataMgr"),
    s = t("EquipMgr"),
    c = t("FetterMgr"),
    l = t("GameDataMgr"),
    u = t("PlayerMgr"),
    p = function () {
  function t() {
    this.bundleSkin = "showEquipImg", this.defaultClothes = "cq_js0", this.defaultWeapon = "weapon_00", this.curFightNumForPlayer = 0, this.playerPro_copy = null, this.playerPro_copy1 = null, this.playerPro = null, this.playerPro_equip = null, this.playerPro_suit = null, this.playerPro_salutation = null, this.playerPro_pet = null, this.playerPro_skillBook = null, this.playerPro_fetter = null, this.specialFetterArr = [];
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.getPlayerFightNum = function () {
    var t = n.DataMgr.getInstance().getPlayerBaseProp().fightNum + this.getEquipFightNum() + this.getSuitFightNum() + this.getSalutationFightNum() + this.getPetFightNum();
    return this.curFightNumForPlayer = t, t;
  }, t.prototype.getEquipFightNum = function () {
    for (var t = 0, e = s["default"].getInstance().getWearEquipList(), o = 0; o < e.length; o++) {
      var a = u.PlayerMgr.getInstance().getAbType();
      t += "D" == a || "B" == a ? s["default"].getInstance().getEquipFightForId(e[o].id, !1, e[o].type, e[o].IDCard, e[o]) : n.DataMgr.getInstance().getEquipStrengthenCfg(e[o].id, e[o].strengthenLv).fightNum;
    }

    return t;
  }, t.prototype.getSuitFightNum = function () {
    for (var t = 0, e = s["default"].getInstance().getAllSuitList(), o = 0; o < e.length; o++) {
      if (!(e[o].count <= 0)) {
        var i = n.DataMgr.getInstance().getEquipSuitCfg(e[o].id),
            r = a.Utils.getTabelArr(i.fightNum);
        e[o].count >= 2 && e[o].count < 4 ? t += Number(r[0]) : e[o].count >= 4 && e[o].count < 6 ? t += Number(r[1]) : e[o].count >= 6 && (t += Number(r[2]));
      }
    }

    return t;
  }, t.prototype.getSalutationFightNum = function () {
    var t = 0,
        e = u.PlayerMgr.getInstance().geUserData().getWearSalutationId();
    return e < 1 ? t : t = n.DataMgr.getInstance().getSalutation(e).fightNum;
  }, t.prototype.getPetFightNum = function () {
    var t = 0,
        e = u.PlayerMgr.getInstance().geUserData().getOwnedPetsList()[0];
    return !e || e <= 0 ? t : t = n.DataMgr.getInstance().getPetsCfg(e).fightNum;
  }, t.prototype.getPlayerPro_copy = function () {
    var t = n.DataMgr.getInstance().getPlayerBaseProp(),
        e = a.Utils.getTabelArr(t.atk);
    return this.playerPro_copy = {
      hp_total: Math.ceil(t.hp + this.getPropForAllEquip().hp_total),
      hp: Math.ceil(t.hp + this.getPropForAllEquip().hp),
      attack_min: Math.ceil(Number(e[0]) + this.getPropForAllEquip().attack_min),
      attack_max: Math.ceil(Number(e[1]) + this.getPropForAllEquip().attack_max),
      speed: Math.ceil(t.moveSpeed + this.getPropForAllEquip().speed),
      atkDis: Math.ceil(200 + this.getPropForAllEquip().atkDis),
      atkInterval: Math.ceil(0 + this.getPropForAllEquip().atkInterval),
      atkSpeed: Math.ceil(t.atkSpeed + this.getPropForAllEquip().atkSpeed),
      atkCrazyProb: Math.ceil(t.atkCrazyProb + this.getPropForAllEquip().atkCrazyProb),
      atkCrazyHurt: Math.ceil(t.atkCrazyHurt + this.getPropForAllEquip().atkCrazyHurt),
      subHurt: Math.ceil(t.subHurt + this.getPropForAllEquip().subHurt),
      dodgeHurtProb: Math.ceil(t.dodgeHurtProb + this.getPropForAllEquip().dodgeHurtProb)
    }, this.playerPro_copy;
  }, t.prototype.getPlayerProNotPet = function () {
    var t = n.DataMgr.getInstance().getPlayerBaseProp(),
        e = a.Utils.getTabelArr(t.atk);
    return this.playerPro_copy1 = {
      hp_total: Math.ceil(t.hp + this.getPropForAllEquip().hp_total + this.getPropForAllSuit().hp_total + this.getPropForSalutation().hp_total),
      hp: Math.ceil(t.hp + this.getPropForAllEquip().hp + this.getPropForAllSuit().hp + this.getPropForSalutation().hp),
      attack_min: Math.ceil(Number(e[0]) + this.getPropForAllEquip().attack_min + this.getPropForAllSuit().attack_min + this.getPropForSalutation().attack_min),
      attack_max: Math.ceil(Number(e[1]) + this.getPropForAllEquip().attack_max + this.getPropForAllSuit().attack_max + this.getPropForSalutation().attack_max),
      speed: Math.ceil(t.moveSpeed + this.getPropForAllEquip().speed + this.getPropForAllSuit().speed + this.getPropForSalutation().speed),
      atkDis: Math.ceil(200 + this.getPropForAllEquip().atkDis + this.getPropForAllSuit().atkDis + this.getPropForSalutation().atkDis),
      atkInterval: Math.ceil(0 + this.getPropForAllEquip().atkInterval + this.getPropForAllSuit().atkInterval + this.getPropForSalutation().atkInterval),
      atkSpeed: Math.ceil(t.atkSpeed + this.getPropForAllEquip().atkSpeed + this.getPropForAllSuit().atkSpeed + this.getPropForSalutation().atkSpeed),
      atkCrazyProb: Math.ceil(t.atkCrazyProb + this.getPropForAllEquip().atkCrazyProb + this.getPropForAllSuit().atkCrazyProb + this.getPropForSalutation().atkCrazyProb),
      atkCrazyHurt: Math.ceil(t.atkCrazyHurt + this.getPropForAllEquip().atkCrazyHurt + this.getPropForAllSuit().atkCrazyHurt + this.getPropForSalutation().atkCrazyHurt),
      subHurt: Math.ceil(t.subHurt + this.getPropForAllEquip().subHurt + this.getPropForAllSuit().subHurt + this.getPropForSalutation().subHurt),
      dodgeHurtProb: Math.ceil(t.dodgeHurtProb + this.getPropForAllEquip().dodgeHurtProb + this.getPropForAllSuit().dodgeHurtProb + this.getPropForSalutation().dodgeHurtProb)
    }, this.playerPro_copy1;
  }, t.prototype.getPlayerPro = function () {
    var t = n.DataMgr.getInstance().getPlayerBaseProp(),
        e = a.Utils.getTabelArr(t.atk);
    return this.playerPro = {
      hp_total: Math.ceil(t.hp + this.getPropForAllEquip().hp_total + this.getPropForAllSuit().hp_total + this.getPropForSalutation().hp_total + this.getPropForPet().hp_total),
      hp: Math.ceil(t.hp + this.getPropForAllEquip().hp + this.getPropForAllSuit().hp + this.getPropForSalutation().hp + this.getPropForPet().hp),
      attack_min: Math.ceil(Number(e[0]) + this.getPropForAllEquip().attack_min + this.getPropForAllSuit().attack_min + this.getPropForSalutation().attack_min + this.getPropForPet().attack_min),
      attack_max: Math.ceil(Number(e[1]) + this.getPropForAllEquip().attack_max + this.getPropForAllSuit().attack_max + this.getPropForSalutation().attack_max + this.getPropForPet().attack_max),
      speed: Math.ceil(t.moveSpeed + this.getPropForAllEquip().speed + this.getPropForAllSuit().speed + this.getPropForSalutation().speed + this.getPropForPet().speed),
      atkDis: Math.ceil(200 + this.getPropForAllEquip().atkDis + this.getPropForAllSuit().atkDis + this.getPropForSalutation().atkDis + this.getPropForPet().atkDis),
      atkInterval: Math.ceil(0 + this.getPropForAllEquip().atkInterval + this.getPropForAllSuit().atkInterval + this.getPropForSalutation().atkInterval + this.getPropForPet().atkInterval),
      atkSpeed: Math.ceil(t.atkSpeed + this.getPropForAllEquip().atkSpeed + this.getPropForAllSuit().atkSpeed + this.getPropForSalutation().atkSpeed + this.getPropForPet().atkSpeed),
      atkCrazyProb: Math.ceil(t.atkCrazyProb + this.getPropForAllEquip().atkCrazyProb + this.getPropForAllSuit().atkCrazyProb + this.getPropForSalutation().atkCrazyProb + this.getPropForPet().atkCrazyProb),
      atkCrazyHurt: Math.ceil(t.atkCrazyHurt + this.getPropForAllEquip().atkCrazyHurt + this.getPropForAllSuit().atkCrazyHurt + this.getPropForSalutation().atkCrazyHurt + this.getPropForPet().atkCrazyHurt),
      subHurt: Math.ceil(t.subHurt + this.getPropForAllEquip().subHurt + this.getPropForAllSuit().subHurt + this.getPropForSalutation().subHurt + this.getPropForSalutation().subHurt),
      dodgeHurtProb: Math.ceil(t.dodgeHurtProb + this.getPropForAllEquip().dodgeHurtProb + this.getPropForAllSuit().dodgeHurtProb + this.getPropForSalutation().dodgeHurtProb + this.getPropForPet().dodgeHurtProb)
    }, this.playerPro;
  }, t.prototype.getPropForAllEquip = function (t) {
    if (void 0 === t && (t = !1), !this.playerPro_equip || t) {
      this.resetPlayerEquipPro();

      for (var e = u.PlayerMgr.getInstance().geUserData().getWearEquipList(), o = 0; o < e.length; o++) {
        var i = u.PlayerMgr.getInstance().getAbType();

        if ("D" == i || "B" == i) {
          var r = n.DataMgr.getInstance().getEquipCfg(e[o].id);

          if (r.LvHp && (this.playerPro_equip.hp_total += r.hp + r.LvHp * e[o].strengthenLv), r.LvHp && (this.playerPro_equip.hp += r.hp + r.LvHp * e[o].strengthenLv), r.LvAtk) {
            var s = a.Utils.getTabelArr(r.atk),
                c = a.Utils.getTabelArr(r.LvAtk);
            this.playerPro_equip.attack_min += Number(s[0]) + Number(c[0]) * e[o].strengthenLv, this.playerPro_equip.attack_max += Number(s[1]) + Number(c[1]) * e[o].strengthenLv;
          }

          if (r.atkSpeed && (this.playerPro_equip.atkSpeed += r.atkSpeed), r.atkCrazyProb && (this.playerPro_equip.atkCrazyProb += r.atkCrazyProb), r.atkCrazyHurt && (this.playerPro_equip.atkCrazyHurt += r.atkCrazyHurt), r.dodgeHurtProb && (this.playerPro_equip.dodgeHurtProb += r.dodgeHurtProb), e[o].starLevel && e[o].starLevel > 0) {
            var l = n.DataMgr.getInstance().getEquipStarCfg(e[o].id, e[o].starLevel);

            if (l.atk) {
              var p = a.Utils.getTabelArr(l.atk);
              this.playerPro_equip.attack_min += Number(p[0]), this.playerPro_equip.attack_max += Number(p[1]);
            }

            l.atkSpeed && (this.playerPro_equip.atkSpeed += l.atkSpeed), l.atkCrazyProb && (this.playerPro_equip.atkCrazyProb += l.atkCrazyProb), l.atkCrazyHurt && (this.playerPro_equip.atkCrazyHurt += l.atkCrazyHurt), l.dodgeHurtProb && (this.playerPro_equip.dodgeHurtProb += l.dodgeHurtProb);
          }
        } else {
          var g = n.DataMgr.getInstance().getEquipStrengthenCfg(e[o].id, e[o].strengthenLv);
          g.hp && (this.playerPro_equip.hp_total += g.hp), g.hp && (this.playerPro_equip.hp += g.hp), g.atk && (s = a.Utils.getTabelArr(g.atk), this.playerPro_equip.attack_min += Number(s[0]), this.playerPro_equip.attack_max += Number(s[1])), g.atkSpeed && (this.playerPro_equip.atkSpeed += g.atkSpeed), g.atkCrazyProb && (this.playerPro_equip.atkCrazyProb += g.atkCrazyProb), g.atkCrazyHurt && (this.playerPro_equip.atkCrazyHurt += g.atkCrazyHurt), g.dodgeHurtProb && (this.playerPro_equip.dodgeHurtProb += g.dodgeHurtProb);
        }
      }
    }

    return this.playerPro_equip;
  }, t.prototype.resetPlayerEquipPro = function () {
    this.playerPro_equip = {
      hp_total: 0,
      hp: 0,
      attack_min: 0,
      attack_max: 0,
      speed: 0,
      atkDis: 0,
      atkInterval: 0,
      atkSpeed: 0,
      atkCrazyProb: 0,
      atkCrazyHurt: 0,
      subHurt: 0,
      dodgeHurtProb: 0
    };
  }, t.prototype.getPropForAllSuit = function () {
    this.resetPlayerSuitPro();

    for (var t = s["default"].getInstance().getAllSuitList(), e = 0; e < t.length; e++) {
      var o = n.DataMgr.getInstance().getEquipSuitCfg(t[e].id),
          i = ["1", "0"];
      t[e].count < 2 || (t[e].count >= 2 && t[e].count < 4 ? i = a.Utils.getTabelArr(o.suit2Prop) : t[e].count >= 4 && t[e].count < 6 ? i = a.Utils.getTabelArr(o.suit4Prop) : t[e].count >= 6 && (i = a.Utils.getTabelArr(o.suit6Prop)), this.selectPro_suit(Number(i[0]), Number(i[1])));
    }

    return this.playerPro_suit;
  }, t.prototype.selectPro_suit = function (t, e) {
    var o = this.getPlayerPro_copy();

    switch (t) {
      case r.EnumObjectProp.SkillProp:
        break;

      case r.EnumObjectProp.AtkProp:
        this.playerPro_suit.attack_min += o.attack_min * (e / 100), this.playerPro_suit.attack_max += o.attack_max * (e / 100);
        break;

      case r.EnumObjectProp.HpProp:
        this.playerPro_suit.hp_total += o.hp_total * (e / 100), this.playerPro_suit.hp += o.hp * (e / 100);
        break;

      case r.EnumObjectProp.AtkSpeed:
        this.playerPro_suit.atkSpeed += e;
        break;

      case r.EnumObjectProp.AtkCrazyProp:
        this.playerPro_suit.atkCrazyProb += e;
        break;

      case r.EnumObjectProp.AtkCrazyHurtProp:
        this.playerPro_suit.atkCrazyHurt += e;
        break;

      case r.EnumObjectProp.SubHurtProp:
        this.playerPro_suit.subHurt += e;
        break;

      case r.EnumObjectProp.DodgeHurtProbProp:
        this.playerPro_suit.dodgeHurtProb += e;
    }

    return o;
  }, t.prototype.resetPlayerSuitPro = function () {
    this.playerPro_suit = {
      hp_total: 0,
      hp: 0,
      attack_min: 0,
      attack_max: 0,
      speed: 0,
      atkDis: 0,
      atkInterval: 0,
      atkSpeed: 0,
      atkCrazyProb: 0,
      atkCrazyHurt: 0,
      subHurt: 0,
      dodgeHurtProb: 0
    };
  }, t.prototype.getPropForSalutation = function () {
    this.resetPlayerTitlePro();
    var t = u.PlayerMgr.getInstance().geUserData().getWearSalutationId();
    if (t < 1) return this.playerPro_salutation;

    for (var e = n.DataMgr.getInstance().getSalutation(t), o = 1; o <= 2; o++) {
      var i = a.Utils.getTabelArr(e["TitleAttribute" + o]);
      if (i) switch (Number(i[0])) {
        case r.EnumObjectProp.SkillProp:
          break;

        case r.EnumObjectProp.AtkProp_value:
          this.playerPro_salutation.attack_min += Number(i[1]), this.playerPro_salutation.attack_max += Number(i[1]);
          break;

        case r.EnumObjectProp.HpProp_value:
          this.playerPro_salutation.hp_total += Number(i[1]), this.playerPro_salutation.hp += Number(i[1]);
          break;

        case r.EnumObjectProp.AtkSpeed:
          this.playerPro_salutation.atkSpeed += Number(i[1]);
          break;

        case r.EnumObjectProp.AtkCrazyProp:
          this.playerPro_salutation.atkCrazyProb += Number(i[1]);
          break;

        case r.EnumObjectProp.AtkCrazyHurtProp:
          this.playerPro_salutation.atkCrazyHurt += Number(i[1]);
          break;

        case r.EnumObjectProp.SubHurtProp:
          this.playerPro_salutation.subHurt += Number(i[1]);
          break;

        case r.EnumObjectProp.DodgeHurtProbProp:
          this.playerPro_salutation.dodgeHurtProb += Number(i[1]);
      }
    }

    return this.playerPro_salutation;
  }, t.prototype.resetPlayerTitlePro = function () {
    this.playerPro_salutation = {
      hp_total: 0,
      hp: 0,
      attack_min: 0,
      attack_max: 0,
      speed: 0,
      atkDis: 0,
      atkInterval: 0,
      atkSpeed: 0,
      atkCrazyProb: 0,
      atkCrazyHurt: 0,
      subHurt: 0,
      dodgeHurtProb: 0
    };
  }, t.prototype.getPropForPet = function () {
    this.resetPetPro();
    var t = u.PlayerMgr.getInstance().geUserData().getOwnedPetsList()[0];
    if (!t || t <= 0) return this.playerPro_pet;

    for (var e = this.getPlayerProNotPet(), o = n.DataMgr.getInstance().getPetsCfg(), i = 1; i <= 2; i++) {
      var s = a.Utils.getTabelArr(o["PetsAttribute" + i]);
      if (s) switch (Number(s[0])) {
        case r.EnumObjectProp.SkillProp:
          break;

        case r.EnumObjectProp.AtkProp:
          this.playerPro_pet.attack_min += e.attack_min * (Number(s[1]) / 100), this.playerPro_pet.attack_max += e.attack_max * (Number(s[1]) / 100);
          break;

        case r.EnumObjectProp.HpProp:
          this.playerPro_pet.hp_total += e.hp_total * (Number(s[1]) / 100), this.playerPro_pet.hp += e.hp * (Number(s[1]) / 100);
          break;

        case r.EnumObjectProp.AtkProp_value:
          this.playerPro_pet.attack_min += Number(s[1]), this.playerPro_pet.attack_max += Number(s[1]);
          break;

        case r.EnumObjectProp.HpProp_value:
          this.playerPro_pet.hp_total += Number(s[1]), this.playerPro_pet.hp += Number(s[1]);
          break;

        case r.EnumObjectProp.AtkSpeed:
          this.playerPro_pet.atkSpeed += Number(s[1]);
          break;

        case r.EnumObjectProp.AtkCrazyProp:
          this.playerPro_pet.atkCrazyProb += Number(s[1]);
          break;

        case r.EnumObjectProp.AtkCrazyHurtProp:
          this.playerPro_pet.atkCrazyHurt += Number(s[1]);
          break;

        case r.EnumObjectProp.SubHurtProp:
          this.playerPro_pet.subHurt += Number(s[1]);
          break;

        case r.EnumObjectProp.DodgeHurtProbProp:
          this.playerPro_pet.dodgeHurtProb += Number(s[1]);
      }
    }

    return this.playerPro_pet;
  }, t.prototype.resetPetPro = function () {
    this.playerPro_pet = {
      hp_total: 0,
      hp: 0,
      attack_min: 0,
      attack_max: 0,
      speed: 0,
      atkDis: 0,
      atkInterval: 0,
      atkSpeed: 0,
      atkCrazyProb: 0,
      atkCrazyHurt: 0,
      subHurt: 0,
      dodgeHurtProb: 0
    };
  }, t.prototype.getPropForAllSkillBook = function (t) {
    if (void 0 === t && (t = !1), !this.playerPro_skillBook || t) {
      this.resetPropSkillBook();

      for (var e = l["default"].getInstance().getSkillBookDataArr(), o = 0; o < e.length; o++) {
        var i = n.DataMgr.getInstance().getSkillBook(e[o].id),
            r = u.PlayerMgr.getInstance().geUserData().getSkillBookForId(i.id),
            s = n.DataMgr.getInstance().getSkillBookLevelCfg1(i.StartLevelID, r.level);

        switch (l["default"].getInstance().getStarNumForSkillBookCount(e[o].iCount)) {
          case 0:
            break;

          case 1:
            var c = a.Utils.getTabelArr(s.addProp1);
            this.selectPro_skillBook(Number(c[0]), Number(c[1]));
            break;

          case 2:
            c = a.Utils.getTabelArr(s.addProp2), this.selectPro_skillBook(Number(c[0]), Number(c[1]));
            var p = a.Utils.getTabelArr(s.starProp2);
            this.selectPro_skillBook(Number(p[0]), Number(p[1]));
            break;

          case 3:
            c = a.Utils.getTabelArr(s.addProp3), this.selectPro_skillBook(Number(c[0]), Number(c[1]));
            var g = a.Utils.getTabelArr(s.starProp3);
            this.selectPro_skillBook(Number(g[0]), Number(g[1]));
        }
      }
    }

    return this.playerPro_skillBook;
  }, t.prototype.selectPro_skillBook = function (t, e) {
    var o = this.getPlayerPro();

    switch (t) {
      case r.EnumObjectProp.SkillProp:
        break;

      case r.EnumObjectProp.AtkProp:
        this.playerPro_skillBook.attack_min += o.attack_min * (e / 100), this.playerPro_skillBook.attack_max += o.attack_max * (e / 100);
        break;

      case r.EnumObjectProp.HpProp:
        this.playerPro_skillBook.hp_total += o.hp_total * (e / 100), this.playerPro_skillBook.hp += o.hp * (e / 100);
        break;

      case r.EnumObjectProp.AtkSpeed:
        this.playerPro_skillBook.atkSpeed += e;
        break;

      case r.EnumObjectProp.AtkCrazyProp:
        this.playerPro_skillBook.atkCrazyProb += e;
        break;

      case r.EnumObjectProp.AtkCrazyHurtProp:
        this.playerPro_skillBook.atkCrazyHurt += e;
        break;

      case r.EnumObjectProp.SubHurtProp:
        this.playerPro_skillBook.subHurt += e;
        break;

      case r.EnumObjectProp.DodgeHurtProbProp:
        this.playerPro_skillBook.dodgeHurtProb += e;
    }

    return o;
  }, t.prototype.resetPropSkillBook = function () {
    this.playerPro_skillBook = {
      hp_total: 0,
      hp: 0,
      attack_min: 0,
      attack_max: 0,
      speed: 0,
      atkDis: 0,
      atkInterval: 0,
      atkSpeed: 0,
      atkCrazyProb: 0,
      atkCrazyHurt: 0,
      subHurt: 0,
      dodgeHurtProb: 0
    };
  }, t.prototype.getPropForAllFetter = function (t) {
    if (void 0 === t && (t = !1), !this.playerPro_fetter || t) {
      this.resetPropFetter();

      for (var e = l["default"].getInstance().getFetterIdArr(), o = 0; o < e.length; o++) {
        var i = n.DataMgr.getInstance().getFetter(e[o].id),
            r = l["default"].getInstance().getSuitCountForFetterIdAndCount(e[o].id, e[o].iCount);
        if (0 != r) if (i.propType) {
          var s = a.Utils.getTabelArr(i.fetterFun);
          this.selectPro_fetter(i.propType, Number(s[r - 1]));
        } else this.addSpecialFetter(e[o]), this.refreshFetter(e[o].id, r);
      }
    }

    return this.playerPro_fetter;
  }, t.prototype.selectPro_fetter = function (t, e) {
    var o = this.getPlayerPro();

    switch (t) {
      case r.EnumObjectProp.SkillProp:
        break;

      case r.EnumObjectProp.AtkProp:
        this.playerPro_fetter.attack_min += o.attack_min * (e / 100), this.playerPro_fetter.attack_max += o.attack_max * (e / 100);
        break;

      case r.EnumObjectProp.HpProp:
        this.playerPro_fetter.hp_total += o.hp_total * (e / 100), this.playerPro_fetter.hp += o.hp * (e / 100);
        break;

      case r.EnumObjectProp.AtkSpeed:
        this.playerPro_fetter.atkSpeed += e;
        break;

      case r.EnumObjectProp.AtkCrazyProp:
        this.playerPro_fetter.atkCrazyProb += e;
        break;

      case r.EnumObjectProp.AtkCrazyHurtProp:
        this.playerPro_fetter.atkCrazyHurt += e;
        break;

      case r.EnumObjectProp.SubHurtProp:
        this.playerPro_fetter.subHurt += e;
        break;

      case r.EnumObjectProp.DodgeHurtProbProp:
        this.playerPro_fetter.dodgeHurtProb += e;
    }

    return o;
  }, t.prototype.resetPropFetter = function () {
    this.playerPro_fetter = {
      hp_total: 0,
      hp: 0,
      attack_min: 0,
      attack_max: 0,
      speed: 0,
      atkDis: 0,
      atkInterval: 0,
      atkSpeed: 0,
      atkCrazyProb: 0,
      atkCrazyHurt: 0,
      subHurt: 0,
      dodgeHurtProb: 0
    };
  }, t.prototype.getSpecialFetterArr = function () {
    return this.specialFetterArr || (this.specialFetterArr = []), this.specialFetterArr;
  }, t.prototype.addSpecialFetter = function (t) {
    t && (this.specialFetterArr || (this.specialFetterArr = []), this.specialFetterArr.push(t));
  }, t.prototype.isExistFetterForFetterId = function (t) {
    if (!this.specialFetterArr) return this.specialFetterArr = [], !1;

    for (var e = 0; e < this.specialFetterArr.length; e++) {
      if (t == this.specialFetterArr[e].id) return !0;
    }

    return !1;
  }, t.prototype.refreshFetter = function (t, e) {
    switch (t) {
      case 2:
        c["default"].getInstance().MasterFetter(e);
        break;

      case 6:
        c["default"].getInstance().WishFetter(e);
        break;

      case 8:
        c["default"].getInstance().RuinFetter(e);
        break;

      case 11:
        c["default"].getInstance().SpecialFetter(e);
        break;

      case 12:
        c["default"].getInstance().CurseFetter(e);
        break;

      case 13:
        c["default"].getInstance().ThreatenFetter(e);
    }
  }, t.prototype.refreshCurPlayerProp = function () {
    this.getPropForAllSkillBook(!0), this.getPropForAllFetter(!0), i["default"].instance.refreshPropPlayer();
  }, t.prototype.clearPropData = function () {
    this.playerPro_skillBook = null, this.playerPro_fetter = null, this.specialFetterArr = [];
  }, t;
}();

o["default"] = p;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUm9sZU1nci5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJhIiwiaSIsInIiLCJuIiwicyIsImMiLCJsIiwidSIsInAiLCJidW5kbGVTa2luIiwiZGVmYXVsdENsb3RoZXMiLCJkZWZhdWx0V2VhcG9uIiwiY3VyRmlnaHROdW1Gb3JQbGF5ZXIiLCJwbGF5ZXJQcm9fY29weSIsInBsYXllclByb19jb3B5MSIsInBsYXllclBybyIsInBsYXllclByb19lcXVpcCIsInBsYXllclByb19zdWl0IiwicGxheWVyUHJvX3NhbHV0YXRpb24iLCJwbGF5ZXJQcm9fcGV0IiwicGxheWVyUHJvX3NraWxsQm9vayIsInBsYXllclByb19mZXR0ZXIiLCJzcGVjaWFsRmV0dGVyQXJyIiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsInByb3RvdHlwZSIsImdldFBsYXllckZpZ2h0TnVtIiwiRGF0YU1nciIsImdldFBsYXllckJhc2VQcm9wIiwiZmlnaHROdW0iLCJnZXRFcXVpcEZpZ2h0TnVtIiwiZ2V0U3VpdEZpZ2h0TnVtIiwiZ2V0U2FsdXRhdGlvbkZpZ2h0TnVtIiwiZ2V0UGV0RmlnaHROdW0iLCJnZXRXZWFyRXF1aXBMaXN0IiwibGVuZ3RoIiwiUGxheWVyTWdyIiwiZ2V0QWJUeXBlIiwiZ2V0RXF1aXBGaWdodEZvcklkIiwiaWQiLCJ0eXBlIiwiSURDYXJkIiwiZ2V0RXF1aXBTdHJlbmd0aGVuQ2ZnIiwic3RyZW5ndGhlbkx2IiwiZ2V0QWxsU3VpdExpc3QiLCJjb3VudCIsImdldEVxdWlwU3VpdENmZyIsIlV0aWxzIiwiZ2V0VGFiZWxBcnIiLCJOdW1iZXIiLCJnZVVzZXJEYXRhIiwiZ2V0V2VhclNhbHV0YXRpb25JZCIsImdldFNhbHV0YXRpb24iLCJnZXRPd25lZFBldHNMaXN0IiwiZ2V0UGV0c0NmZyIsImdldFBsYXllclByb19jb3B5IiwiYXRrIiwiaHBfdG90YWwiLCJNYXRoIiwiY2VpbCIsImhwIiwiZ2V0UHJvcEZvckFsbEVxdWlwIiwiYXR0YWNrX21pbiIsImF0dGFja19tYXgiLCJzcGVlZCIsIm1vdmVTcGVlZCIsImF0a0RpcyIsImF0a0ludGVydmFsIiwiYXRrU3BlZWQiLCJhdGtDcmF6eVByb2IiLCJhdGtDcmF6eUh1cnQiLCJzdWJIdXJ0IiwiZG9kZ2VIdXJ0UHJvYiIsImdldFBsYXllclByb05vdFBldCIsImdldFByb3BGb3JBbGxTdWl0IiwiZ2V0UHJvcEZvclNhbHV0YXRpb24iLCJnZXRQbGF5ZXJQcm8iLCJnZXRQcm9wRm9yUGV0IiwicmVzZXRQbGF5ZXJFcXVpcFBybyIsImdldEVxdWlwQ2ZnIiwiTHZIcCIsIkx2QXRrIiwic3RhckxldmVsIiwiZ2V0RXF1aXBTdGFyQ2ZnIiwiZyIsInJlc2V0UGxheWVyU3VpdFBybyIsInN1aXQyUHJvcCIsInN1aXQ0UHJvcCIsInN1aXQ2UHJvcCIsInNlbGVjdFByb19zdWl0IiwiRW51bU9iamVjdFByb3AiLCJTa2lsbFByb3AiLCJBdGtQcm9wIiwiSHBQcm9wIiwiQXRrU3BlZWQiLCJBdGtDcmF6eVByb3AiLCJBdGtDcmF6eUh1cnRQcm9wIiwiU3ViSHVydFByb3AiLCJEb2RnZUh1cnRQcm9iUHJvcCIsInJlc2V0UGxheWVyVGl0bGVQcm8iLCJBdGtQcm9wX3ZhbHVlIiwiSHBQcm9wX3ZhbHVlIiwicmVzZXRQZXRQcm8iLCJnZXRQcm9wRm9yQWxsU2tpbGxCb29rIiwicmVzZXRQcm9wU2tpbGxCb29rIiwiZ2V0U2tpbGxCb29rRGF0YUFyciIsImdldFNraWxsQm9vayIsImdldFNraWxsQm9va0ZvcklkIiwiZ2V0U2tpbGxCb29rTGV2ZWxDZmcxIiwiU3RhcnRMZXZlbElEIiwibGV2ZWwiLCJnZXRTdGFyTnVtRm9yU2tpbGxCb29rQ291bnQiLCJpQ291bnQiLCJhZGRQcm9wMSIsInNlbGVjdFByb19za2lsbEJvb2siLCJhZGRQcm9wMiIsInN0YXJQcm9wMiIsImFkZFByb3AzIiwic3RhclByb3AzIiwiZ2V0UHJvcEZvckFsbEZldHRlciIsInJlc2V0UHJvcEZldHRlciIsImdldEZldHRlcklkQXJyIiwiZ2V0RmV0dGVyIiwiZ2V0U3VpdENvdW50Rm9yRmV0dGVySWRBbmRDb3VudCIsInByb3BUeXBlIiwiZmV0dGVyRnVuIiwic2VsZWN0UHJvX2ZldHRlciIsImFkZFNwZWNpYWxGZXR0ZXIiLCJyZWZyZXNoRmV0dGVyIiwiZ2V0U3BlY2lhbEZldHRlckFyciIsInB1c2giLCJpc0V4aXN0RmV0dGVyRm9yRmV0dGVySWQiLCJNYXN0ZXJGZXR0ZXIiLCJXaXNoRmV0dGVyIiwiUnVpbkZldHRlciIsIlNwZWNpYWxGZXR0ZXIiLCJDdXJzZUZldHRlciIsIlRocmVhdGVuRmV0dGVyIiwicmVmcmVzaEN1clBsYXllclByb3AiLCJyZWZyZXNoUHJvcFBsYXllciIsImNsZWFyUHJvcERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNJLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDOztBQUdBLElBQUlDLENBQUMsR0FBR1QsQ0FBQyxDQUFDLE9BQUQsQ0FBVDtBQUFBLElBQ0FVLENBQUMsR0FBR1YsQ0FBQyxDQUFDLE1BQUQsQ0FETDtBQUFBLElBRUFXLENBQUMsR0FBR1gsQ0FBQyxDQUFDLFFBQUQsQ0FGTDtBQUFBLElBR0FZLENBQUMsR0FBR1osQ0FBQyxDQUFDLFNBQUQsQ0FITDtBQUFBLElBSUFhLENBQUMsR0FBR2IsQ0FBQyxDQUFDLFVBQUQsQ0FKTDtBQUFBLElBS0FjLENBQUMsR0FBR2QsQ0FBQyxDQUFDLFdBQUQsQ0FMTDtBQUFBLElBTUFlLENBQUMsR0FBR2YsQ0FBQyxDQUFDLGFBQUQsQ0FOTDtBQUFB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QUFxQzNJLENBQXJDO1FBQ0o7O01BQ0EsS0FBSyxDQUFMO1FBQ0lZLENBQUMsV0FBRCxDQUFVa0IsV0FBVixHQUF3QjhHLFVBQXhCLENBQW1DNUksQ0FBbkM7UUFDSjs7TUFDQSxLQUFLLENBQUw7UUFDSVksQ0FBQyxXQUFELENBQVVrQixXQUFWLEdBQXdCK0csVUFBeEIsQ0FBbUM3SSxDQUFuQztRQUNKOztNQUNBLEtBQUssRUFBTDtRQUNJWSxDQUFDLFdBQUQsQ0FBVWtCLFdBQVYsR0FBd0JnSCxhQUF4QixDQUFzQzlJLENBQXRDO1FBQ0o7O01BQ0EsS0FBSyxFQUFMO1FBQ0lZLENBQUMsV0FBRCxDQUFVa0IsV0FBVixHQUF3QmlILFdBQXhCLENBQW9DL0ksQ0FBcEM7UUFDSjs7TUFDQSxLQUFLLEVBQUw7UUFDSVksQ0FBQyxXQUFELENBQVVrQixXQUFWLEdBQXdCa0gsY0FBeEIsQ0FBdUNoSixDQUF2QztJQWpCUjtFQW1CSCxDQW5lTSxFQW9lUEYsQ0FBQyxDQUFDa0MsU0FBRixDQUFZaUgsb0JBQVosR0FBbUMsWUFBVztJQUMxQyxLQUFLbkMsc0JBQUwsQ0FBNEIsQ0FBQyxDQUE3QixHQUNBLEtBQUtnQixtQkFBTCxDQUF5QixDQUFDLENBQTFCLENBREEsRUFFQXRILENBQUMsV0FBRCxDQUFVdUIsUUFBVixDQUFtQm1ILGlCQUFuQixFQUZBO0VBR0gsQ0F4ZU0sRUF5ZVBwSixDQUFDLENBQUNrQyxTQUFGLENBQVltSCxhQUFaLEdBQTRCLFlBQVc7SUFDbkMsS0FBS3hILG1CQUFMLEdBQTJCLElBQTNCLEVBQ0EsS0FBS0MsZ0JBQUwsR0FBd0IsSUFEeEIsRUFFQSxLQUFLQyxnQkFBTCxHQUF3QixFQUZ4QjtFQUdILENBN2VNLEVBOGVQL0IsQ0E5ZUE7QUErZUgsQ0FoZ0JHLEVBUko7O0FBeWdCQUksQ0FBQyxXQUFELEdBQVlhLENBQVoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KTtcbnZhciBhID0gdChcIlV0aWxzXCIpLFxuaSA9IHQoXCJNYWluXCIpLFxuciA9IHQoXCJDb25maWdcIiksXG5uID0gdChcIkRhdGFNZ3JcIiksXG5zID0gdChcIkVxdWlwTWdyXCIpLFxuYyA9IHQoXCJGZXR0ZXJNZ3JcIiksXG5sID0gdChcIkdhbWVEYXRhTWdyXCIpLFxudSA9IHQoXCJQbGF5ZXJNZ3JcIiksXG5wID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5idW5kbGVTa2luID0gXCJzaG93RXF1aXBJbWdcIixcbiAgICAgICAgdGhpcy5kZWZhdWx0Q2xvdGhlcyA9IFwiY3FfanMwXCIsXG4gICAgICAgIHRoaXMuZGVmYXVsdFdlYXBvbiA9IFwid2VhcG9uXzAwXCIsXG4gICAgICAgIHRoaXMuY3VyRmlnaHROdW1Gb3JQbGF5ZXIgPSAwLFxuICAgICAgICB0aGlzLnBsYXllclByb19jb3B5ID0gbnVsbCxcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9fY29weTEgPSBudWxsLFxuICAgICAgICB0aGlzLnBsYXllclBybyA9IG51bGwsXG4gICAgICAgIHRoaXMucGxheWVyUHJvX2VxdWlwID0gbnVsbCxcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc3VpdCA9IG51bGwsXG4gICAgICAgIHRoaXMucGxheWVyUHJvX3NhbHV0YXRpb24gPSBudWxsLFxuICAgICAgICB0aGlzLnBsYXllclByb19wZXQgPSBudWxsLFxuICAgICAgICB0aGlzLnBsYXllclByb19za2lsbEJvb2sgPSBudWxsLFxuICAgICAgICB0aGlzLnBsYXllclByb19mZXR0ZXIgPSBudWxsLFxuICAgICAgICB0aGlzLnNwZWNpYWxGZXR0ZXJBcnIgPSBbXVxuICAgIH1cbiAgICByZXR1cm4gdC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0aGlzLmluc3RhbmNlICYmICh0aGlzLmluc3RhbmNlID0gbmV3IHQpLFxuICAgICAgICB0aGlzLmluc3RhbmNlXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXRQbGF5ZXJGaWdodE51bSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IG4uRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFBsYXllckJhc2VQcm9wKCkuZmlnaHROdW0gKyB0aGlzLmdldEVxdWlwRmlnaHROdW0oKSArIHRoaXMuZ2V0U3VpdEZpZ2h0TnVtKCkgKyB0aGlzLmdldFNhbHV0YXRpb25GaWdodE51bSgpICsgdGhpcy5nZXRQZXRGaWdodE51bSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJGaWdodE51bUZvclBsYXllciA9IHQsXG4gICAgICAgIHRcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldEVxdWlwRmlnaHROdW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDAsXG4gICAgICAgIGUgPSBzLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5nZXRXZWFyRXF1aXBMaXN0KCksIG8gPSAwOyBvIDwgZS5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgdmFyIGEgPSB1LlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldEFiVHlwZSgpO1xuICAgICAgICAgICAgdCArPSBcIkRcIiA9PSBhIHx8IFwiQlwiID09IGEgPyBzLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5nZXRFcXVpcEZpZ2h0Rm9ySWQoZVtvXS5pZCwgITEsIGVbb10udHlwZSwgZVtvXS5JRENhcmQsIGVbb10pIDogbi5EYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0RXF1aXBTdHJlbmd0aGVuQ2ZnKGVbb10uaWQsIGVbb10uc3RyZW5ndGhlbkx2KS5maWdodE51bVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXRTdWl0RmlnaHROdW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDAsXG4gICAgICAgIGUgPSBzLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5nZXRBbGxTdWl0TGlzdCgpLCBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIGlmICghIChlW29dLmNvdW50IDw9IDApKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG4uRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEVxdWlwU3VpdENmZyhlW29dLmlkKSxcbiAgICAgICAgICAgIHIgPSBhLlV0aWxzLmdldFRhYmVsQXJyKGkuZmlnaHROdW0pO1xuICAgICAgICAgICAgZVtvXS5jb3VudCA+PSAyICYmIGVbb10uY291bnQgPCA0ID8gdCArPSBOdW1iZXIoclswXSkgOiBlW29dLmNvdW50ID49IDQgJiYgZVtvXS5jb3VudCA8IDYgPyB0ICs9IE51bWJlcihyWzFdKSA6IGVbb10uY291bnQgPj0gNiAmJiAodCArPSBOdW1iZXIoclsyXSkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldFNhbHV0YXRpb25GaWdodE51bSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IDAsXG4gICAgICAgIGUgPSB1LlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdlVXNlckRhdGEoKS5nZXRXZWFyU2FsdXRhdGlvbklkKCk7XG4gICAgICAgIHJldHVybiBlIDwgMSA/IHQ6IHQgPSBuLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRTYWx1dGF0aW9uKGUpLmZpZ2h0TnVtXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXRQZXRGaWdodE51bSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IDAsXG4gICAgICAgIGUgPSB1LlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdlVXNlckRhdGEoKS5nZXRPd25lZFBldHNMaXN0KClbMF07XG4gICAgICAgIHJldHVybiAhIGUgfHwgZSA8PSAwID8gdDogdCA9IG4uRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFBldHNDZmcoZSkuZmlnaHROdW1cbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldFBsYXllclByb19jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gbi5EYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0UGxheWVyQmFzZVByb3AoKSxcbiAgICAgICAgZSA9IGEuVXRpbHMuZ2V0VGFiZWxBcnIodC5hdGspO1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJQcm9fY29weSA9IHtcbiAgICAgICAgICAgIGhwX3RvdGFsOiBNYXRoLmNlaWwodC5ocCArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuaHBfdG90YWwpLFxuICAgICAgICAgICAgaHA6IE1hdGguY2VpbCh0LmhwICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5ocCksXG4gICAgICAgICAgICBhdHRhY2tfbWluOiBNYXRoLmNlaWwoTnVtYmVyKGVbMF0pICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5hdHRhY2tfbWluKSxcbiAgICAgICAgICAgIGF0dGFja19tYXg6IE1hdGguY2VpbChOdW1iZXIoZVsxXSkgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmF0dGFja19tYXgpLFxuICAgICAgICAgICAgc3BlZWQ6IE1hdGguY2VpbCh0Lm1vdmVTcGVlZCArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuc3BlZWQpLFxuICAgICAgICAgICAgYXRrRGlzOiBNYXRoLmNlaWwoMjAwICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5hdGtEaXMpLFxuICAgICAgICAgICAgYXRrSW50ZXJ2YWw6IE1hdGguY2VpbCgwICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5hdGtJbnRlcnZhbCksXG4gICAgICAgICAgICBhdGtTcGVlZDogTWF0aC5jZWlsKHQuYXRrU3BlZWQgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmF0a1NwZWVkKSxcbiAgICAgICAgICAgIGF0a0NyYXp5UHJvYjogTWF0aC5jZWlsKHQuYXRrQ3JhenlQcm9iICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5hdGtDcmF6eVByb2IpLFxuICAgICAgICAgICAgYXRrQ3JhenlIdXJ0OiBNYXRoLmNlaWwodC5hdGtDcmF6eUh1cnQgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmF0a0NyYXp5SHVydCksXG4gICAgICAgICAgICBzdWJIdXJ0OiBNYXRoLmNlaWwodC5zdWJIdXJ0ICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5zdWJIdXJ0KSxcbiAgICAgICAgICAgIGRvZGdlSHVydFByb2I6IE1hdGguY2VpbCh0LmRvZGdlSHVydFByb2IgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmRvZGdlSHVydFByb2IpXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMucGxheWVyUHJvX2NvcHlcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldFBsYXllclByb05vdFBldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IG4uRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFBsYXllckJhc2VQcm9wKCksXG4gICAgICAgIGUgPSBhLlV0aWxzLmdldFRhYmVsQXJyKHQuYXRrKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyUHJvX2NvcHkxID0ge1xuICAgICAgICAgICAgaHBfdG90YWw6IE1hdGguY2VpbCh0LmhwICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5ocF90b3RhbCArIHRoaXMuZ2V0UHJvcEZvckFsbFN1aXQoKS5ocF90b3RhbCArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5ocF90b3RhbCksXG4gICAgICAgICAgICBocDogTWF0aC5jZWlsKHQuaHAgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmhwICsgdGhpcy5nZXRQcm9wRm9yQWxsU3VpdCgpLmhwICsgdGhpcy5nZXRQcm9wRm9yU2FsdXRhdGlvbigpLmhwKSxcbiAgICAgICAgICAgIGF0dGFja19taW46IE1hdGguY2VpbChOdW1iZXIoZVswXSkgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmF0dGFja19taW4gKyB0aGlzLmdldFByb3BGb3JBbGxTdWl0KCkuYXR0YWNrX21pbiArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5hdHRhY2tfbWluKSxcbiAgICAgICAgICAgIGF0dGFja19tYXg6IE1hdGguY2VpbChOdW1iZXIoZVsxXSkgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmF0dGFja19tYXggKyB0aGlzLmdldFByb3BGb3JBbGxTdWl0KCkuYXR0YWNrX21heCArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5hdHRhY2tfbWF4KSxcbiAgICAgICAgICAgIHNwZWVkOiBNYXRoLmNlaWwodC5tb3ZlU3BlZWQgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLnNwZWVkICsgdGhpcy5nZXRQcm9wRm9yQWxsU3VpdCgpLnNwZWVkICsgdGhpcy5nZXRQcm9wRm9yU2FsdXRhdGlvbigpLnNwZWVkKSxcbiAgICAgICAgICAgIGF0a0RpczogTWF0aC5jZWlsKDIwMCArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuYXRrRGlzICsgdGhpcy5nZXRQcm9wRm9yQWxsU3VpdCgpLmF0a0RpcyArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5hdGtEaXMpLFxuICAgICAgICAgICAgYXRrSW50ZXJ2YWw6IE1hdGguY2VpbCgwICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5hdGtJbnRlcnZhbCArIHRoaXMuZ2V0UHJvcEZvckFsbFN1aXQoKS5hdGtJbnRlcnZhbCArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5hdGtJbnRlcnZhbCksXG4gICAgICAgICAgICBhdGtTcGVlZDogTWF0aC5jZWlsKHQuYXRrU3BlZWQgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmF0a1NwZWVkICsgdGhpcy5nZXRQcm9wRm9yQWxsU3VpdCgpLmF0a1NwZWVkICsgdGhpcy5nZXRQcm9wRm9yU2FsdXRhdGlvbigpLmF0a1NwZWVkKSxcbiAgICAgICAgICAgIGF0a0NyYXp5UHJvYjogTWF0aC5jZWlsKHQuYXRrQ3JhenlQcm9iICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5hdGtDcmF6eVByb2IgKyB0aGlzLmdldFByb3BGb3JBbGxTdWl0KCkuYXRrQ3JhenlQcm9iICsgdGhpcy5nZXRQcm9wRm9yU2FsdXRhdGlvbigpLmF0a0NyYXp5UHJvYiksXG4gICAgICAgICAgICBhdGtDcmF6eUh1cnQ6IE1hdGguY2VpbCh0LmF0a0NyYXp5SHVydCArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuYXRrQ3JhenlIdXJ0ICsgdGhpcy5nZXRQcm9wRm9yQWxsU3VpdCgpLmF0a0NyYXp5SHVydCArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5hdGtDcmF6eUh1cnQpLFxuICAgICAgICAgICAgc3ViSHVydDogTWF0aC5jZWlsKHQuc3ViSHVydCArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuc3ViSHVydCArIHRoaXMuZ2V0UHJvcEZvckFsbFN1aXQoKS5zdWJIdXJ0ICsgdGhpcy5nZXRQcm9wRm9yU2FsdXRhdGlvbigpLnN1Ykh1cnQpLFxuICAgICAgICAgICAgZG9kZ2VIdXJ0UHJvYjogTWF0aC5jZWlsKHQuZG9kZ2VIdXJ0UHJvYiArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuZG9kZ2VIdXJ0UHJvYiArIHRoaXMuZ2V0UHJvcEZvckFsbFN1aXQoKS5kb2RnZUh1cnRQcm9iICsgdGhpcy5nZXRQcm9wRm9yU2FsdXRhdGlvbigpLmRvZGdlSHVydFByb2IpXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMucGxheWVyUHJvX2NvcHkxXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXRQbGF5ZXJQcm8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSBuLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRQbGF5ZXJCYXNlUHJvcCgpLFxuICAgICAgICBlID0gYS5VdGlscy5nZXRUYWJlbEFycih0LmF0ayk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllclBybyA9IHtcbiAgICAgICAgICAgIGhwX3RvdGFsOiBNYXRoLmNlaWwodC5ocCArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuaHBfdG90YWwgKyB0aGlzLmdldFByb3BGb3JBbGxTdWl0KCkuaHBfdG90YWwgKyB0aGlzLmdldFByb3BGb3JTYWx1dGF0aW9uKCkuaHBfdG90YWwgKyB0aGlzLmdldFByb3BGb3JQZXQoKS5ocF90b3RhbCksXG4gICAgICAgICAgICBocDogTWF0aC5jZWlsKHQuaHAgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmhwICsgdGhpcy5nZXRQcm9wRm9yQWxsU3VpdCgpLmhwICsgdGhpcy5nZXRQcm9wRm9yU2FsdXRhdGlvbigpLmhwICsgdGhpcy5nZXRQcm9wRm9yUGV0KCkuaHApLFxuICAgICAgICAgICAgYXR0YWNrX21pbjogTWF0aC5jZWlsKE51bWJlcihlWzBdKSArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuYXR0YWNrX21pbiArIHRoaXMuZ2V0UHJvcEZvckFsbFN1aXQoKS5hdHRhY2tfbWluICsgdGhpcy5nZXRQcm9wRm9yU2FsdXRhdGlvbigpLmF0dGFja19taW4gKyB0aGlzLmdldFByb3BGb3JQZXQoKS5hdHRhY2tfbWluKSxcbiAgICAgICAgICAgIGF0dGFja19tYXg6IE1hdGguY2VpbChOdW1iZXIoZVsxXSkgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmF0dGFja19tYXggKyB0aGlzLmdldFByb3BGb3JBbGxTdWl0KCkuYXR0YWNrX21heCArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5hdHRhY2tfbWF4ICsgdGhpcy5nZXRQcm9wRm9yUGV0KCkuYXR0YWNrX21heCksXG4gICAgICAgICAgICBzcGVlZDogTWF0aC5jZWlsKHQubW92ZVNwZWVkICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5zcGVlZCArIHRoaXMuZ2V0UHJvcEZvckFsbFN1aXQoKS5zcGVlZCArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5zcGVlZCArIHRoaXMuZ2V0UHJvcEZvclBldCgpLnNwZWVkKSxcbiAgICAgICAgICAgIGF0a0RpczogTWF0aC5jZWlsKDIwMCArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuYXRrRGlzICsgdGhpcy5nZXRQcm9wRm9yQWxsU3VpdCgpLmF0a0RpcyArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5hdGtEaXMgKyB0aGlzLmdldFByb3BGb3JQZXQoKS5hdGtEaXMpLFxuICAgICAgICAgICAgYXRrSW50ZXJ2YWw6IE1hdGguY2VpbCgwICsgdGhpcy5nZXRQcm9wRm9yQWxsRXF1aXAoKS5hdGtJbnRlcnZhbCArIHRoaXMuZ2V0UHJvcEZvckFsbFN1aXQoKS5hdGtJbnRlcnZhbCArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5hdGtJbnRlcnZhbCArIHRoaXMuZ2V0UHJvcEZvclBldCgpLmF0a0ludGVydmFsKSxcbiAgICAgICAgICAgIGF0a1NwZWVkOiBNYXRoLmNlaWwodC5hdGtTcGVlZCArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuYXRrU3BlZWQgKyB0aGlzLmdldFByb3BGb3JBbGxTdWl0KCkuYXRrU3BlZWQgKyB0aGlzLmdldFByb3BGb3JTYWx1dGF0aW9uKCkuYXRrU3BlZWQgKyB0aGlzLmdldFByb3BGb3JQZXQoKS5hdGtTcGVlZCksXG4gICAgICAgICAgICBhdGtDcmF6eVByb2I6IE1hdGguY2VpbCh0LmF0a0NyYXp5UHJvYiArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuYXRrQ3JhenlQcm9iICsgdGhpcy5nZXRQcm9wRm9yQWxsU3VpdCgpLmF0a0NyYXp5UHJvYiArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5hdGtDcmF6eVByb2IgKyB0aGlzLmdldFByb3BGb3JQZXQoKS5hdGtDcmF6eVByb2IpLFxuICAgICAgICAgICAgYXRrQ3JhenlIdXJ0OiBNYXRoLmNlaWwodC5hdGtDcmF6eUh1cnQgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLmF0a0NyYXp5SHVydCArIHRoaXMuZ2V0UHJvcEZvckFsbFN1aXQoKS5hdGtDcmF6eUh1cnQgKyB0aGlzLmdldFByb3BGb3JTYWx1dGF0aW9uKCkuYXRrQ3JhenlIdXJ0ICsgdGhpcy5nZXRQcm9wRm9yUGV0KCkuYXRrQ3JhenlIdXJ0KSxcbiAgICAgICAgICAgIHN1Ykh1cnQ6IE1hdGguY2VpbCh0LnN1Ykh1cnQgKyB0aGlzLmdldFByb3BGb3JBbGxFcXVpcCgpLnN1Ykh1cnQgKyB0aGlzLmdldFByb3BGb3JBbGxTdWl0KCkuc3ViSHVydCArIHRoaXMuZ2V0UHJvcEZvclNhbHV0YXRpb24oKS5zdWJIdXJ0ICsgdGhpcy5nZXRQcm9wRm9yU2FsdXRhdGlvbigpLnN1Ykh1cnQpLFxuICAgICAgICAgICAgZG9kZ2VIdXJ0UHJvYjogTWF0aC5jZWlsKHQuZG9kZ2VIdXJ0UHJvYiArIHRoaXMuZ2V0UHJvcEZvckFsbEVxdWlwKCkuZG9kZ2VIdXJ0UHJvYiArIHRoaXMuZ2V0UHJvcEZvckFsbFN1aXQoKS5kb2RnZUh1cnRQcm9iICsgdGhpcy5nZXRQcm9wRm9yU2FsdXRhdGlvbigpLmRvZGdlSHVydFByb2IgKyB0aGlzLmdldFByb3BGb3JQZXQoKS5kb2RnZUh1cnRQcm9iKVxuICAgICAgICB9LFxuICAgICAgICB0aGlzLnBsYXllclByb1xuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0UHJvcEZvckFsbEVxdWlwID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0ICYmICh0ID0gITEpLCAhdGhpcy5wbGF5ZXJQcm9fZXF1aXAgfHwgdCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldFBsYXllckVxdWlwUHJvKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBlID0gdS5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZVVzZXJEYXRhKCkuZ2V0V2VhckVxdWlwTGlzdCgpLCBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHUuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2V0QWJUeXBlKCk7XG4gICAgICAgICAgICAgICAgaWYgKFwiRFwiID09IGkgfHwgXCJCXCIgPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IG4uRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEVxdWlwQ2ZnKGVbb10uaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoci5MdkhwICYmICh0aGlzLnBsYXllclByb19lcXVpcC5ocF90b3RhbCArPSByLmhwICsgci5MdkhwICogZVtvXS5zdHJlbmd0aGVuTHYpLCByLkx2SHAgJiYgKHRoaXMucGxheWVyUHJvX2VxdWlwLmhwICs9IHIuaHAgKyByLkx2SHAgKiBlW29dLnN0cmVuZ3RoZW5MdiksIHIuTHZBdGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gYS5VdGlscy5nZXRUYWJlbEFycihyLmF0ayksXG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gYS5VdGlscy5nZXRUYWJlbEFycihyLkx2QXRrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX2VxdWlwLmF0dGFja19taW4gKz0gTnVtYmVyKHNbMF0pICsgTnVtYmVyKGNbMF0pICogZVtvXS5zdHJlbmd0aGVuTHYsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19lcXVpcC5hdHRhY2tfbWF4ICs9IE51bWJlcihzWzFdKSArIE51bWJlcihjWzFdKSAqIGVbb10uc3RyZW5ndGhlbkx2XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuYXRrU3BlZWQgJiYgKHRoaXMucGxheWVyUHJvX2VxdWlwLmF0a1NwZWVkICs9IHIuYXRrU3BlZWQpLCByLmF0a0NyYXp5UHJvYiAmJiAodGhpcy5wbGF5ZXJQcm9fZXF1aXAuYXRrQ3JhenlQcm9iICs9IHIuYXRrQ3JhenlQcm9iKSwgci5hdGtDcmF6eUh1cnQgJiYgKHRoaXMucGxheWVyUHJvX2VxdWlwLmF0a0NyYXp5SHVydCArPSByLmF0a0NyYXp5SHVydCksIHIuZG9kZ2VIdXJ0UHJvYiAmJiAodGhpcy5wbGF5ZXJQcm9fZXF1aXAuZG9kZ2VIdXJ0UHJvYiArPSByLmRvZGdlSHVydFByb2IpLCBlW29dLnN0YXJMZXZlbCAmJiBlW29dLnN0YXJMZXZlbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gbi5EYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0RXF1aXBTdGFyQ2ZnKGVbb10uaWQsIGVbb10uc3RhckxldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsLmF0aykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gYS5VdGlscy5nZXRUYWJlbEFycihsLmF0ayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fZXF1aXAuYXR0YWNrX21pbiArPSBOdW1iZXIocFswXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fZXF1aXAuYXR0YWNrX21heCArPSBOdW1iZXIocFsxXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwuYXRrU3BlZWQgJiYgKHRoaXMucGxheWVyUHJvX2VxdWlwLmF0a1NwZWVkICs9IGwuYXRrU3BlZWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbC5hdGtDcmF6eVByb2IgJiYgKHRoaXMucGxheWVyUHJvX2VxdWlwLmF0a0NyYXp5UHJvYiArPSBsLmF0a0NyYXp5UHJvYiksXG4gICAgICAgICAgICAgICAgICAgICAgICBsLmF0a0NyYXp5SHVydCAmJiAodGhpcy5wbGF5ZXJQcm9fZXF1aXAuYXRrQ3JhenlIdXJ0ICs9IGwuYXRrQ3JhenlIdXJ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGwuZG9kZ2VIdXJ0UHJvYiAmJiAodGhpcy5wbGF5ZXJQcm9fZXF1aXAuZG9kZ2VIdXJ0UHJvYiArPSBsLmRvZGdlSHVydFByb2IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IG4uRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEVxdWlwU3RyZW5ndGhlbkNmZyhlW29dLmlkLCBlW29dLnN0cmVuZ3RoZW5Mdik7XG4gICAgICAgICAgICAgICAgICAgIGcuaHAgJiYgKHRoaXMucGxheWVyUHJvX2VxdWlwLmhwX3RvdGFsICs9IGcuaHApLFxuICAgICAgICAgICAgICAgICAgICBnLmhwICYmICh0aGlzLnBsYXllclByb19lcXVpcC5ocCArPSBnLmhwKSxcbiAgICAgICAgICAgICAgICAgICAgZy5hdGsgJiYgKHMgPSBhLlV0aWxzLmdldFRhYmVsQXJyKGcuYXRrKSwgdGhpcy5wbGF5ZXJQcm9fZXF1aXAuYXR0YWNrX21pbiArPSBOdW1iZXIoc1swXSksIHRoaXMucGxheWVyUHJvX2VxdWlwLmF0dGFja19tYXggKz0gTnVtYmVyKHNbMV0pKSxcbiAgICAgICAgICAgICAgICAgICAgZy5hdGtTcGVlZCAmJiAodGhpcy5wbGF5ZXJQcm9fZXF1aXAuYXRrU3BlZWQgKz0gZy5hdGtTcGVlZCksXG4gICAgICAgICAgICAgICAgICAgIGcuYXRrQ3JhenlQcm9iICYmICh0aGlzLnBsYXllclByb19lcXVpcC5hdGtDcmF6eVByb2IgKz0gZy5hdGtDcmF6eVByb2IpLFxuICAgICAgICAgICAgICAgICAgICBnLmF0a0NyYXp5SHVydCAmJiAodGhpcy5wbGF5ZXJQcm9fZXF1aXAuYXRrQ3JhenlIdXJ0ICs9IGcuYXRrQ3JhenlIdXJ0KSxcbiAgICAgICAgICAgICAgICAgICAgZy5kb2RnZUh1cnRQcm9iICYmICh0aGlzLnBsYXllclByb19lcXVpcC5kb2RnZUh1cnRQcm9iICs9IGcuZG9kZ2VIdXJ0UHJvYilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyUHJvX2VxdWlwXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5yZXNldFBsYXllckVxdWlwUHJvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucGxheWVyUHJvX2VxdWlwID0ge1xuICAgICAgICAgICAgaHBfdG90YWw6IDAsXG4gICAgICAgICAgICBocDogMCxcbiAgICAgICAgICAgIGF0dGFja19taW46IDAsXG4gICAgICAgICAgICBhdHRhY2tfbWF4OiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICBhdGtEaXM6IDAsXG4gICAgICAgICAgICBhdGtJbnRlcnZhbDogMCxcbiAgICAgICAgICAgIGF0a1NwZWVkOiAwLFxuICAgICAgICAgICAgYXRrQ3JhenlQcm9iOiAwLFxuICAgICAgICAgICAgYXRrQ3JhenlIdXJ0OiAwLFxuICAgICAgICAgICAgc3ViSHVydDogMCxcbiAgICAgICAgICAgIGRvZGdlSHVydFByb2I6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0UHJvcEZvckFsbFN1aXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZXNldFBsYXllclN1aXRQcm8oKTtcbiAgICAgICAgZm9yICh2YXIgdCA9IHMuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLmdldEFsbFN1aXRMaXN0KCksIGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIG8gPSBuLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRFcXVpcFN1aXRDZmcodFtlXS5pZCksXG4gICAgICAgICAgICBpID0gW1wiMVwiLCBcIjBcIl07XG4gICAgICAgICAgICB0W2VdLmNvdW50IDwgMiB8fCAodFtlXS5jb3VudCA+PSAyICYmIHRbZV0uY291bnQgPCA0ID8gaSA9IGEuVXRpbHMuZ2V0VGFiZWxBcnIoby5zdWl0MlByb3ApIDogdFtlXS5jb3VudCA+PSA0ICYmIHRbZV0uY291bnQgPCA2ID8gaSA9IGEuVXRpbHMuZ2V0VGFiZWxBcnIoby5zdWl0NFByb3ApIDogdFtlXS5jb3VudCA+PSA2ICYmIChpID0gYS5VdGlscy5nZXRUYWJlbEFycihvLnN1aXQ2UHJvcCkpLCB0aGlzLnNlbGVjdFByb19zdWl0KE51bWJlcihpWzBdKSwgTnVtYmVyKGlbMV0pKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJQcm9fc3VpdFxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuc2VsZWN0UHJvX3N1aXQgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy5nZXRQbGF5ZXJQcm9fY29weSgpO1xuICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5Ta2lsbFByb3A6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuQXRrUHJvcDpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19zdWl0LmF0dGFja19taW4gKz0gby5hdHRhY2tfbWluICogKGUgLyAxMDApLFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc3VpdC5hdHRhY2tfbWF4ICs9IG8uYXR0YWNrX21heCAqIChlIC8gMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkhwUHJvcDpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19zdWl0LmhwX3RvdGFsICs9IG8uaHBfdG90YWwgKiAoZSAvIDEwMCksXG4gICAgICAgICAgICB0aGlzLnBsYXllclByb19zdWl0LmhwICs9IG8uaHAgKiAoZSAvIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5BdGtTcGVlZDpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19zdWl0LmF0a1NwZWVkICs9IGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5BdGtDcmF6eVByb3A6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc3VpdC5hdGtDcmF6eVByb2IgKz0gZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkF0a0NyYXp5SHVydFByb3A6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc3VpdC5hdGtDcmF6eUh1cnQgKz0gZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLlN1Ykh1cnRQcm9wOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX3N1aXQuc3ViSHVydCArPSBlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuRG9kZ2VIdXJ0UHJvYlByb3A6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc3VpdC5kb2RnZUh1cnRQcm9iICs9IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9cbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnJlc2V0UGxheWVyU3VpdFBybyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBsYXllclByb19zdWl0ID0ge1xuICAgICAgICAgICAgaHBfdG90YWw6IDAsXG4gICAgICAgICAgICBocDogMCxcbiAgICAgICAgICAgIGF0dGFja19taW46IDAsXG4gICAgICAgICAgICBhdHRhY2tfbWF4OiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICBhdGtEaXM6IDAsXG4gICAgICAgICAgICBhdGtJbnRlcnZhbDogMCxcbiAgICAgICAgICAgIGF0a1NwZWVkOiAwLFxuICAgICAgICAgICAgYXRrQ3JhenlQcm9iOiAwLFxuICAgICAgICAgICAgYXRrQ3JhenlIdXJ0OiAwLFxuICAgICAgICAgICAgc3ViSHVydDogMCxcbiAgICAgICAgICAgIGRvZGdlSHVydFByb2I6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0UHJvcEZvclNhbHV0YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5yZXNldFBsYXllclRpdGxlUHJvKCk7XG4gICAgICAgIHZhciB0ID0gdS5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZVVzZXJEYXRhKCkuZ2V0V2VhclNhbHV0YXRpb25JZCgpO1xuICAgICAgICBpZiAodCA8IDEpIHJldHVybiB0aGlzLnBsYXllclByb19zYWx1dGF0aW9uO1xuICAgICAgICBmb3IgKHZhciBlID0gbi5EYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0U2FsdXRhdGlvbih0KSwgbyA9IDE7IG8gPD0gMjsgbysrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGEuVXRpbHMuZ2V0VGFiZWxBcnIoZVtcIlRpdGxlQXR0cmlidXRlXCIgKyBvXSk7XG4gICAgICAgICAgICBpZiAoaSkgc3dpdGNoIChOdW1iZXIoaVswXSkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuU2tpbGxQcm9wOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuQXRrUHJvcF92YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc2FsdXRhdGlvbi5hdHRhY2tfbWluICs9IE51bWJlcihpWzFdKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19zYWx1dGF0aW9uLmF0dGFja19tYXggKz0gTnVtYmVyKGlbMV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5IcFByb3BfdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX3NhbHV0YXRpb24uaHBfdG90YWwgKz0gTnVtYmVyKGlbMV0pLFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX3NhbHV0YXRpb24uaHAgKz0gTnVtYmVyKGlbMV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5BdGtTcGVlZDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc2FsdXRhdGlvbi5hdGtTcGVlZCArPSBOdW1iZXIoaVsxXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkF0a0NyYXp5UHJvcDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc2FsdXRhdGlvbi5hdGtDcmF6eVByb2IgKz0gTnVtYmVyKGlbMV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5BdGtDcmF6eUh1cnRQcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19zYWx1dGF0aW9uLmF0a0NyYXp5SHVydCArPSBOdW1iZXIoaVsxXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLlN1Ykh1cnRQcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19zYWx1dGF0aW9uLnN1Ykh1cnQgKz0gTnVtYmVyKGlbMV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5Eb2RnZUh1cnRQcm9iUHJvcDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc2FsdXRhdGlvbi5kb2RnZUh1cnRQcm9iICs9IE51bWJlcihpWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJQcm9fc2FsdXRhdGlvblxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUucmVzZXRQbGF5ZXJUaXRsZVBybyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBsYXllclByb19zYWx1dGF0aW9uID0ge1xuICAgICAgICAgICAgaHBfdG90YWw6IDAsXG4gICAgICAgICAgICBocDogMCxcbiAgICAgICAgICAgIGF0dGFja19taW46IDAsXG4gICAgICAgICAgICBhdHRhY2tfbWF4OiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICBhdGtEaXM6IDAsXG4gICAgICAgICAgICBhdGtJbnRlcnZhbDogMCxcbiAgICAgICAgICAgIGF0a1NwZWVkOiAwLFxuICAgICAgICAgICAgYXRrQ3JhenlQcm9iOiAwLFxuICAgICAgICAgICAgYXRrQ3JhenlIdXJ0OiAwLFxuICAgICAgICAgICAgc3ViSHVydDogMCxcbiAgICAgICAgICAgIGRvZGdlSHVydFByb2I6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0UHJvcEZvclBldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlc2V0UGV0UHJvKCk7XG4gICAgICAgIHZhciB0ID0gdS5QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5nZVVzZXJEYXRhKCkuZ2V0T3duZWRQZXRzTGlzdCgpWzBdO1xuICAgICAgICBpZiAoIXQgfHwgdCA8PSAwKSByZXR1cm4gdGhpcy5wbGF5ZXJQcm9fcGV0O1xuICAgICAgICBmb3IgKHZhciBlID0gdGhpcy5nZXRQbGF5ZXJQcm9Ob3RQZXQoKSwgbyA9IG4uRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldFBldHNDZmcoKSwgaSA9IDE7IGkgPD0gMjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcyA9IGEuVXRpbHMuZ2V0VGFiZWxBcnIob1tcIlBldHNBdHRyaWJ1dGVcIiArIGldKTtcbiAgICAgICAgICAgIGlmIChzKSBzd2l0Y2ggKE51bWJlcihzWzBdKSkge1xuICAgICAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5Ta2lsbFByb3A6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5BdGtQcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19wZXQuYXR0YWNrX21pbiArPSBlLmF0dGFja19taW4gKiAoTnVtYmVyKHNbMV0pIC8gMTAwKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19wZXQuYXR0YWNrX21heCArPSBlLmF0dGFja19tYXggKiAoTnVtYmVyKHNbMV0pIC8gMTAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuSHBQcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19wZXQuaHBfdG90YWwgKz0gZS5ocF90b3RhbCAqIChOdW1iZXIoc1sxXSkgLyAxMDApLFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX3BldC5ocCArPSBlLmhwICogKE51bWJlcihzWzFdKSAvIDEwMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkF0a1Byb3BfdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX3BldC5hdHRhY2tfbWluICs9IE51bWJlcihzWzFdKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19wZXQuYXR0YWNrX21heCArPSBOdW1iZXIoc1sxXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkhwUHJvcF92YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fcGV0LmhwX3RvdGFsICs9IE51bWJlcihzWzFdKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19wZXQuaHAgKz0gTnVtYmVyKHNbMV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5BdGtTcGVlZDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fcGV0LmF0a1NwZWVkICs9IE51bWJlcihzWzFdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuQXRrQ3JhenlQcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19wZXQuYXRrQ3JhenlQcm9iICs9IE51bWJlcihzWzFdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuQXRrQ3JhenlIdXJ0UHJvcDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fcGV0LmF0a0NyYXp5SHVydCArPSBOdW1iZXIoc1sxXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLlN1Ykh1cnRQcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19wZXQuc3ViSHVydCArPSBOdW1iZXIoc1sxXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkRvZGdlSHVydFByb2JQcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19wZXQuZG9kZ2VIdXJ0UHJvYiArPSBOdW1iZXIoc1sxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyUHJvX3BldFxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUucmVzZXRQZXRQcm8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9fcGV0ID0ge1xuICAgICAgICAgICAgaHBfdG90YWw6IDAsXG4gICAgICAgICAgICBocDogMCxcbiAgICAgICAgICAgIGF0dGFja19taW46IDAsXG4gICAgICAgICAgICBhdHRhY2tfbWF4OiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICBhdGtEaXM6IDAsXG4gICAgICAgICAgICBhdGtJbnRlcnZhbDogMCxcbiAgICAgICAgICAgIGF0a1NwZWVkOiAwLFxuICAgICAgICAgICAgYXRrQ3JhenlQcm9iOiAwLFxuICAgICAgICAgICAgYXRrQ3JhenlIdXJ0OiAwLFxuICAgICAgICAgICAgc3ViSHVydDogMCxcbiAgICAgICAgICAgIGRvZGdlSHVydFByb2I6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0UHJvcEZvckFsbFNraWxsQm9vayA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCAmJiAodCA9ICExKSwgIXRoaXMucGxheWVyUHJvX3NraWxsQm9vayB8fCB0KSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJvcFNraWxsQm9vaygpO1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IGwuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLmdldFNraWxsQm9va0RhdGFBcnIoKSwgbyA9IDA7IG8gPCBlLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBuLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRTa2lsbEJvb2soZVtvXS5pZCksXG4gICAgICAgICAgICAgICAgciA9IHUuUGxheWVyTWdyLmdldEluc3RhbmNlKCkuZ2VVc2VyRGF0YSgpLmdldFNraWxsQm9va0ZvcklkKGkuaWQpLFxuICAgICAgICAgICAgICAgIHMgPSBuLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRTa2lsbEJvb2tMZXZlbENmZzEoaS5TdGFydExldmVsSUQsIHIubGV2ZWwpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobC5kZWZhdWx0LmdldEluc3RhbmNlKCkuZ2V0U3Rhck51bUZvclNraWxsQm9va0NvdW50KGVbb10uaUNvdW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBhLlV0aWxzLmdldFRhYmVsQXJyKHMuYWRkUHJvcDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFByb19za2lsbEJvb2soTnVtYmVyKGNbMF0pLCBOdW1iZXIoY1sxXSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IGEuVXRpbHMuZ2V0VGFiZWxBcnIocy5hZGRQcm9wMiksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UHJvX3NraWxsQm9vayhOdW1iZXIoY1swXSksIE51bWJlcihjWzFdKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gYS5VdGlscy5nZXRUYWJlbEFycihzLnN0YXJQcm9wMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UHJvX3NraWxsQm9vayhOdW1iZXIocFswXSksIE51bWJlcihwWzFdKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gYS5VdGlscy5nZXRUYWJlbEFycihzLmFkZFByb3AzKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQcm9fc2tpbGxCb29rKE51bWJlcihjWzBdKSwgTnVtYmVyKGNbMV0pKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBhLlV0aWxzLmdldFRhYmVsQXJyKHMuc3RhclByb3AzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQcm9fc2tpbGxCb29rKE51bWJlcihnWzBdKSwgTnVtYmVyKGdbMV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyUHJvX3NraWxsQm9va1xuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuc2VsZWN0UHJvX3NraWxsQm9vayA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmdldFBsYXllclBybygpO1xuICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5Ta2lsbFByb3A6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuQXRrUHJvcDpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19za2lsbEJvb2suYXR0YWNrX21pbiArPSBvLmF0dGFja19taW4gKiAoZSAvIDEwMCksXG4gICAgICAgICAgICB0aGlzLnBsYXllclByb19za2lsbEJvb2suYXR0YWNrX21heCArPSBvLmF0dGFja19tYXggKiAoZSAvIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5IcFByb3A6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc2tpbGxCb29rLmhwX3RvdGFsICs9IG8uaHBfdG90YWwgKiAoZSAvIDEwMCksXG4gICAgICAgICAgICB0aGlzLnBsYXllclByb19za2lsbEJvb2suaHAgKz0gby5ocCAqIChlIC8gMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkF0a1NwZWVkOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX3NraWxsQm9vay5hdGtTcGVlZCArPSBlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuQXRrQ3JhenlQcm9wOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX3NraWxsQm9vay5hdGtDcmF6eVByb2IgKz0gZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkF0a0NyYXp5SHVydFByb3A6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc2tpbGxCb29rLmF0a0NyYXp5SHVydCArPSBlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuU3ViSHVydFByb3A6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fc2tpbGxCb29rLnN1Ykh1cnQgKz0gZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkRvZGdlSHVydFByb2JQcm9wOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX3NraWxsQm9vay5kb2RnZUh1cnRQcm9iICs9IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9cbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnJlc2V0UHJvcFNraWxsQm9vayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBsYXllclByb19za2lsbEJvb2sgPSB7XG4gICAgICAgICAgICBocF90b3RhbDogMCxcbiAgICAgICAgICAgIGhwOiAwLFxuICAgICAgICAgICAgYXR0YWNrX21pbjogMCxcbiAgICAgICAgICAgIGF0dGFja19tYXg6IDAsXG4gICAgICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgICAgIGF0a0RpczogMCxcbiAgICAgICAgICAgIGF0a0ludGVydmFsOiAwLFxuICAgICAgICAgICAgYXRrU3BlZWQ6IDAsXG4gICAgICAgICAgICBhdGtDcmF6eVByb2I6IDAsXG4gICAgICAgICAgICBhdGtDcmF6eUh1cnQ6IDAsXG4gICAgICAgICAgICBzdWJIdXJ0OiAwLFxuICAgICAgICAgICAgZG9kZ2VIdXJ0UHJvYjogMFxuICAgICAgICB9XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXRQcm9wRm9yQWxsRmV0dGVyID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0ICYmICh0ID0gITEpLCAhdGhpcy5wbGF5ZXJQcm9fZmV0dGVyIHx8IHQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQcm9wRmV0dGVyKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBlID0gbC5kZWZhdWx0LmdldEluc3RhbmNlKCkuZ2V0RmV0dGVySWRBcnIoKSwgbyA9IDA7IG8gPCBlLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBuLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRGZXR0ZXIoZVtvXS5pZCksXG4gICAgICAgICAgICAgICAgciA9IGwuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLmdldFN1aXRDb3VudEZvckZldHRlcklkQW5kQ291bnQoZVtvXS5pZCwgZVtvXS5pQ291bnQpO1xuICAgICAgICAgICAgICAgIGlmICgwICE9IHIpIGlmIChpLnByb3BUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gYS5VdGlscy5nZXRUYWJlbEFycihpLmZldHRlckZ1bik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UHJvX2ZldHRlcihpLnByb3BUeXBlLCBOdW1iZXIoc1tyIC0gMV0pKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLmFkZFNwZWNpYWxGZXR0ZXIoZVtvXSksXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoRmV0dGVyKGVbb10uaWQsIHIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyUHJvX2ZldHRlclxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuc2VsZWN0UHJvX2ZldHRlciA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmdldFBsYXllclBybygpO1xuICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5Ta2lsbFByb3A6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuQXRrUHJvcDpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclByb19mZXR0ZXIuYXR0YWNrX21pbiArPSBvLmF0dGFja19taW4gKiAoZSAvIDEwMCksXG4gICAgICAgICAgICB0aGlzLnBsYXllclByb19mZXR0ZXIuYXR0YWNrX21heCArPSBvLmF0dGFja19tYXggKiAoZSAvIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugci5FbnVtT2JqZWN0UHJvcC5IcFByb3A6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fZmV0dGVyLmhwX3RvdGFsICs9IG8uaHBfdG90YWwgKiAoZSAvIDEwMCksXG4gICAgICAgICAgICB0aGlzLnBsYXllclByb19mZXR0ZXIuaHAgKz0gby5ocCAqIChlIC8gMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkF0a1NwZWVkOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX2ZldHRlci5hdGtTcGVlZCArPSBlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuQXRrQ3JhenlQcm9wOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX2ZldHRlci5hdGtDcmF6eVByb2IgKz0gZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkF0a0NyYXp5SHVydFByb3A6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fZmV0dGVyLmF0a0NyYXp5SHVydCArPSBlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHIuRW51bU9iamVjdFByb3AuU3ViSHVydFByb3A6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQcm9fZmV0dGVyLnN1Ykh1cnQgKz0gZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSByLkVudW1PYmplY3RQcm9wLkRvZGdlSHVydFByb2JQcm9wOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUHJvX2ZldHRlci5kb2RnZUh1cnRQcm9iICs9IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9cbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnJlc2V0UHJvcEZldHRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBsYXllclByb19mZXR0ZXIgPSB7XG4gICAgICAgICAgICBocF90b3RhbDogMCxcbiAgICAgICAgICAgIGhwOiAwLFxuICAgICAgICAgICAgYXR0YWNrX21pbjogMCxcbiAgICAgICAgICAgIGF0dGFja19tYXg6IDAsXG4gICAgICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgICAgIGF0a0RpczogMCxcbiAgICAgICAgICAgIGF0a0ludGVydmFsOiAwLFxuICAgICAgICAgICAgYXRrU3BlZWQ6IDAsXG4gICAgICAgICAgICBhdGtDcmF6eVByb2I6IDAsXG4gICAgICAgICAgICBhdGtDcmF6eUh1cnQ6IDAsXG4gICAgICAgICAgICBzdWJIdXJ0OiAwLFxuICAgICAgICAgICAgZG9kZ2VIdXJ0UHJvYjogMFxuICAgICAgICB9XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXRTcGVjaWFsRmV0dGVyQXJyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWNpYWxGZXR0ZXJBcnIgfHwgKHRoaXMuc3BlY2lhbEZldHRlckFyciA9IFtdKSxcbiAgICAgICAgdGhpcy5zcGVjaWFsRmV0dGVyQXJyXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5hZGRTcGVjaWFsRmV0dGVyID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0ICYmICh0aGlzLnNwZWNpYWxGZXR0ZXJBcnIgfHwgKHRoaXMuc3BlY2lhbEZldHRlckFyciA9IFtdKSwgdGhpcy5zcGVjaWFsRmV0dGVyQXJyLnB1c2godCkpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5pc0V4aXN0RmV0dGVyRm9yRmV0dGVySWQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmICghdGhpcy5zcGVjaWFsRmV0dGVyQXJyKSByZXR1cm4gdGhpcy5zcGVjaWFsRmV0dGVyQXJyID0gW10sXG4gICAgICAgICExO1xuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuc3BlY2lhbEZldHRlckFyci5sZW5ndGg7IGUrKykgaWYgKHQgPT0gdGhpcy5zcGVjaWFsRmV0dGVyQXJyW2VdLmlkKSByZXR1cm4gISAwO1xuICAgICAgICByZXR1cm4gISAxXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5yZWZyZXNoRmV0dGVyID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5NYXN0ZXJGZXR0ZXIoZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBjLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5XaXNoRmV0dGVyKGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgYy5kZWZhdWx0LmdldEluc3RhbmNlKCkuUnVpbkZldHRlcihlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICBjLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKS5TcGVjaWFsRmV0dGVyKGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIGMuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLkN1cnNlRmV0dGVyKGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIGMuZGVmYXVsdC5nZXRJbnN0YW5jZSgpLlRocmVhdGVuRmV0dGVyKGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5yZWZyZXNoQ3VyUGxheWVyUHJvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdldFByb3BGb3JBbGxTa2lsbEJvb2soITApLFxuICAgICAgICB0aGlzLmdldFByb3BGb3JBbGxGZXR0ZXIoITApLFxuICAgICAgICBpLmRlZmF1bHQuaW5zdGFuY2UucmVmcmVzaFByb3BQbGF5ZXIoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuY2xlYXJQcm9wRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBsYXllclByb19za2lsbEJvb2sgPSBudWxsLFxuICAgICAgICB0aGlzLnBsYXllclByb19mZXR0ZXIgPSBudWxsLFxuICAgICAgICB0aGlzLnNwZWNpYWxGZXR0ZXJBcnIgPSBbXVxuICAgIH0sXG4gICAgdFxufSAoKTtcbm8uZGVmYXVsdCA9IHAiXX0=