"use strict";
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