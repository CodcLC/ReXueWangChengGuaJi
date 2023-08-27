"use strict";
cc._RF.push(module, '84c9dMl5y1J5rBvj+RBOooX', 'EquipMgr');
// scripts/EquipMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.SuitData = o.EnumEquipInfo = void 0;

var a = t("EventMgr"),
    i = t("UIMgr"),
    r = t("Utils"),
    n = t("Main"),
    s = t("Config"),
    c = t("DataMgr"),
    l = t("EffectMgr"),
    u = t("PlayerMgr"),
    p = t("RoleMgr"),
    g = function () {
  function t() {}

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.getAllSuitList = function () {
    for (var e = [], o = c.DataMgr.getInstance().getAllEquipSuitCfg(), a = 0; a < o.length; a++) {
      var i = {
        id: o[a].id,
        count: 0
      };
      e.push(i);
    }

    var r = t.getInstance().getWearEquipList();

    for (a = 0; a < r.length; a++) {
      for (var n = c.DataMgr.getInstance().getEquipCfg(r[a].id), s = 0; s < e.length; s++) {
        if (n.suitId == e[s].id) {
          e[s].count++;
          break;
        }
      }
    }

    return e;
  }, t.prototype.getWearEquipList = function () {
    return u.PlayerMgr.getInstance().geUserData().getWearEquipList();
  }, t.prototype.getWearEquipData = function (t) {
    for (var e = u.PlayerMgr.getInstance().geUserData().getWearEquipList(), o = 0; o < e.length; o++) {
      if (e[o].type == t) return e[o];
    }

    return null;
  }, t.prototype.getOwnedEquipList = function (t) {
    void 0 === t && (t = 1);

    for (var e = [], o = u.PlayerMgr.getInstance().geUserData().getOwnedEquipList(), a = 0; a < o.length; a++) {
      o[a].sort(function (t, e) {
        return e.id - t.id;
      }), o[a].sort(function (t, e) {
        return e.quality - t.quality;
      });
    }

    for (a = 0; a < o.length; a++) {
      for (var i = 0; i < o[a].length; i++) {
        e.push(o[a][i]);
      }
    }

    return 1 == t ? e.sort(function (t, e) {
      return e.quality - t.quality;
    }) : 2 == t && e.sort(function (t, e) {
      return t.type - e.type;
    }), e;
  }, t.prototype.getOwmedEquipForEquipType = function (t) {
    var e = t - 1;
    return (e < 0 || e > 5) && (e = 0), u.PlayerMgr.getInstance().geUserData().getOwnedEquipList()[e];
  }, t.prototype.getOwmedEquipForQualityId = function (t) {
    var e = u.PlayerMgr.getInstance().geUserData().getOwnedEquipList(),
        o = [];
    return e.forEach(function (e) {
      var a = e.filter(function (e) {
        return e.quality == t;
      });
      o = o.concat(a);
    }), o;
  }, t.prototype.getOwnedEquipCount = function () {
    for (var t = 0, e = u.PlayerMgr.getInstance().geUserData().getOwnedEquipList(), o = 0; o < e.length; o++) {
      t += e[o].length;
    }

    return t;
  }, t.prototype.isExistEquipForType = function (t) {
    return u.PlayerMgr.getInstance().geUserData().isExistEquip(t);
  }, t.prototype.addManyEquip = function (t) {
    u.PlayerMgr.getInstance().geUserData().addManyEquip(t);
  }, t.prototype.addEquip = function (t) {
    t && (this.getOwnedEquipCount() >= 134 ? console.log("装备仓库快满了，请及时清理仓库！！！") : this.getOwnedEquipCount() >= 144 ? console.log("装备仓库已满了，请及时清理仓库！！！") : u.PlayerMgr.getInstance().geUserData().addEquip(t));
  }, t.prototype.abandonEquip = function (t) {
    t && u.PlayerMgr.getInstance().geUserData().abandonEquip(t);
  }, t.prototype.replaceEquip = function (t, e, o) {
    if (e && o) {
      u.PlayerMgr.getInstance().geUserData().replaceEquip(e, o), u.PlayerMgr.getInstance().geUserData().refreshWearEquipQuality(o.type, o.quality), p["default"].getInstance().getPropForAllEquip(!0), a.EventMgr.getInstance().emit(s.EventName.ReplaceEquip, t, e, o);
      var i = c.DataMgr.getInstance().getEquipCfg(o.id);
      console.log("当前装备id：", o.id), 1 == i.isSkin ? n["default"].instance.rolePlay(o.id) : 4 == i.equipType && n["default"].instance.rolePlay_reset(o.id);
    }
  }, t.prototype.wearEquip = function (t, e) {
    if (e) {
      u.PlayerMgr.getInstance().geUserData().wearEquip(e), u.PlayerMgr.getInstance().geUserData().refreshWearEquipQuality(e.type, e.quality), p["default"].getInstance().getPropForAllEquip(!0), a.EventMgr.getInstance().emit(s.EventName.WearEquip, t, e);
      var o = c.DataMgr.getInstance().getEquipCfg(e.id);
      console.log("当前装备id：", e.id), 1 == o.isSkin && n["default"].instance.rolePlay(e.id);
    }
  }, t.prototype.unloadEquip = function (t) {
    if (t) {
      u.PlayerMgr.getInstance().geUserData().unloadEquip(t), p["default"].getInstance().getPropForAllEquip(!0), a.EventMgr.getInstance().emit(s.EventName.UnloadEquip, t);
      var e = c.DataMgr.getInstance().getEquipCfg(t.id);
      console.log("当前装备id：", t.id), 1 == e.isSkin && n["default"].instance.rolePlay_reset(t.id);
    }
  }, t.prototype.sellEquip = function (t, e) {
    e && (u.PlayerMgr.getInstance().geUserData().abandonEquip(e), a.EventMgr.getInstance().emit(s.EventName.SellEquip, t, e));
  }, t.prototype.strengthenEquip = function (t, e) {
    t && (u.PlayerMgr.getInstance().geUserData().strengthenEquip(t, e), p["default"].getInstance().getPropForAllEquip(!0), a.EventMgr.getInstance().emit(s.EventName.RefreshStrengthenLv, t), a.EventMgr.getInstance().emit(s.EventName.RefreshEquipViewInfo));
  }, t.prototype.unlockEquip = function (t, e) {
    e && (u.PlayerMgr.getInstance().geUserData().unlockEquip(e), a.EventMgr.getInstance().emit(s.EventName.UnlockEquip, t, e));
  }, t.prototype.getPropNameForPropType = function (t) {
    var e = "攻击力";

    switch (t) {
      case 1:
        e = "攻击力";
        break;

      case 2:
        e = "血量上限";
        break;

      case 3:
        e = "攻击速度";
        break;

      case 4:
        e = "暴击率";
        break;

      case 5:
        e = "暴击伤害";
        break;

      case 6:
        e = "伤害减免";
        break;

      case 7:
        e = "闪避率";
        break;

      case 8:
        e = "攻击力";
        break;

      case 9:
        e = "血量上限";
    }

    return e;
  }, t.prototype.getPropPercent = function (t) {
    var e = "%";

    switch (t) {
      case 3:
      case 8:
      case 9:
        e = "";
        break;

      default:
        e = "%";
    }

    return e;
  }, t.prototype.quickSellForSaveData = function (t) {
    var e = t;

    if (e && !(e.length <= 0)) {
      for (var o = 0, a = u.PlayerMgr.getInstance().geUserData().getOwnedEquipList(), r = 0; r < a.length; r++) {
        for (var n = 0; n < a[r].length; n++) {
          for (var l = 0; l < e.length; l++) {
            if (a[r][n].quality == e[l]) {
              "D" == u.PlayerMgr.getInstance().getAbType() ? o += this.getEquipSellValue(a[r][n].id, a[r][n].type, a[r][n].IDCard, a[r][n]) : o += c.DataMgr.getInstance().getEquipStrengthenCfg(a[r][n].id, a[r][n].strengthenLv).sellPrice, u.PlayerMgr.getInstance().geUserData().abandonEquip(a[r][n]), n--;
              break;
            }
          }
        }
      }

      o > 0 && (u.PlayerMgr.getInstance().geUserData().addGoldNum(o), i.UIMgr.getInstance().openUI(s.UIID.UITips, -1, "出售成功，获得" + o + "金币"));
    }
  }, t.prototype.getEquipFightForId = function (t, e, o, a, i) {
    var n = null;
    if (i) n = i;else if (!e) for (var s = this.getOwmedEquipForEquipType(o), l = 0; l < s.length; l++) {
      if (t == s[l].id && a == s[l].IDCard) {
        n = s[l];
        break;
      }
    }

    if (!n) {
      var u = c.DataMgr.getInstance().getEquipCfg(t);
      n = {
        id: t,
        type: u.equipType,
        quality: u.qualityId,
        strengthenLv: 0,
        isUnlock: !0,
        isWear: !1,
        videoCount: 0,
        IDCard: 1,
        starLevel: 0
      };
    }

    var p = n.strengthenLv,
        g = n.starLevel,
        d = c.DataMgr.getInstance().getEquipCfg(n.id),
        h = [0, 0],
        f = 0;

    if (d.atk) {
      var m,
          y = r.Utils.getTabelArr(d.atk);

      if (h = [Number(y[0]), Number(y[1])], d.LvAtk) {
        var v = r.Utils.getTabelArr(d.LvAtk);
        h[0] += Number(v[0]) * p, h[1] += Number(v[1]) * p;
      }

      g && g > 0 && (m = c.DataMgr.getInstance().getEquipStarCfg(n.id, g)).atk && (v = r.Utils.getTabelArr(m.atk), h[0] += Number(v[0]), h[1] += Number(v[1]));
    }

    return d.hp && (f = d.hp, d.LvHp && (f += d.LvHp * p), g && g > 0 && (m = c.DataMgr.getInstance().getEquipStarCfg(n.id, g)).hp && (f += m.hp * g)), 4 * (h[0] + h[1]) + f;
  }, t.prototype.getEquipSellValue = function (t, e, o, a) {
    var i;
    if (a) i = a;else for (var n = this.getOwmedEquipForEquipType(e), s = 0; s < n.length; s++) {
      if (t == n[s].id && o == n[s].IDCard) {
        i = n[s];
        break;
      }
    }
    var l = c.DataMgr.getInstance().getEquipCfg(t),
        u = r.Utils.getTabelArr1(l.consume),
        p = i.strengthenLv >= l.strengthenMaxLv ? l.strengthenMaxLv - 1 : i.strengthenLv,
        g = Math.floor(p / 10),
        d = Math.floor(p % 10),
        h = 0;

    for (s = 0; s <= g; s++) {
      h += s == g ? Number(u[s][1]) * d : 10 * Number(u[s][1]);
    }

    var f = a.starLevel ? a.starLevel : 0;
    return h + Math.pow(2, f) * l.sellPrice;
  }, t.prototype.getEquipSellValue_QH = function (t, e, o, a) {
    var i;
    if (a) i = a;else for (var n = this.getOwmedEquipForEquipType(e), s = 0; s < n.length; s++) {
      if (t == n[s].id && o == n[s].IDCard) {
        i = n[s];
        break;
      }
    }
    var l = c.DataMgr.getInstance().getEquipCfg(t),
        u = r.Utils.getTabelArr1(l.consume),
        p = i.strengthenLv >= l.strengthenMaxLv ? l.strengthenMaxLv - 1 : i.strengthenLv,
        g = Math.floor(p / 10),
        d = Math.floor(p % 10),
        h = 0;

    for (s = 0; s <= g; s++) {
      h += s == g ? Number(u[s][1]) * d : 10 * Number(u[s][1]);
    }

    return h;
  }, t.prototype.playEffForQuality = function (t, e) {
    cc.isValid(t) && (5 == e ? (l["default"].playEffectForEffId(s.EnumEffID.EffGoodEquip3, t), l["default"].playEffectForEffId(s.EnumEffID.EffGoodEquip1, t, null, 0, 0, 1)) : 4 == e && l["default"].playEffectForEffId(s.EnumEffID.EffGoodEquip2, t, null, 0, 0, 1));
  }, t;
}();

o["default"] = g, function (t) {
  t[t.EnumNoShow = 1] = "EnumNoShow", t[t.EnumStrengthen = 2] = "EnumStrengthen", t[t.EnumSell = 3] = "EnumSell";
}(o.EnumEquipInfo || (o.EnumEquipInfo = {}));

o.SuitData = function () {};

cc._RF.pop();