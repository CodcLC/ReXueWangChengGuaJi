"use strict";
cc._RF.push(module, 'de006t861FBAIsNVVJ1xtME', 'GameDataMgr');
// scripts/GameDataMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("PoolMgr"),
    i = t("ResourceMgr"),
    r = t("Utils"),
    n = t("Config"),
    s = t("NodeDropGoods"),
    c = t("DataMgr"),
    l = t("FetterMgr"),
    u = t("PlayerMgr"),
    p = t("RoleMgr"),
    g = t("TipsMgr"),
    d = t("GoodsManager"),
    h = t("TaskMgr"),
    f = function () {
  function t() {
    this.curGame = n.EnumGameState.GamePrePare, this.hightY = -40, this.skillBookClass = [[], [], [], [], []], this.curSkillBoolClass = [[], [], [], [], []], this.skillBookIdArr = [], this.fetterSuitCount = 0, this.fetterIdArr = [], this.skillIdArr = [], this.curTotalSkillBookCount = 24, this.dropGoodsIdList = [], this.skillBookRefreshCount = 5, this.weightFoBothBtn = 0, this.weightAddForBothBtn = 20, this.isFirstGame = !1;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.getGameState = function () {
    return this.curGame;
  }, t.prototype.setGameState = function (t) {
    this.curGame = t;
  }, t.prototype.isCurGameState = function (t) {
    return this.curGame == t;
  }, t.prototype.randomPlayerSkill = function (t) {
    if (!t || t.length <= 0) return 0;
    var e = r.Utils.randomRang(0, t.length);
    return e == t.length && (e = t.length - 1), e;
  }, t.prototype.classifySkillBook = function () {
    var t = u.PlayerMgr.getInstance().geUserData().getSkillBookArr();
    if (t.length > 0) for (var e = 0; e < t.length; e++) {
      (i = (a = c.DataMgr.getInstance().getSkillBook(t[e].id)).qualityId - 1) < 0 && (i = 0), this.skillBookClass[i].push(a.id);
    } else {
      var o = c.DataMgr.getInstance().getSkillBookCfg();

      for (e = 0; e < o.length; e++) {
        var a, i;
        0 != (a = o[e]).freeUnlock && ((i = a.qualityId - 1) < 0 && (i = 0), this.skillBookClass[i].push(a.id), u.PlayerMgr.getInstance().geUserData().addSkillBookId(a.id), h["default"].getInstance().addSkillBookCountForTask());
      }
    }
  }, t.prototype.classifyCurSkillBook = function () {
    for (var t = this.getSkillBookDataArr(), e = 0; e < t.length; e++) {
      var o = c.DataMgr.getInstance().getSkillBook(t[e].id),
          a = o.qualityId - 1;
      a < 0 && (a = 0), this.curSkillBoolClass[a].push(o.id);
    }
  }, t.prototype.randomSkillBook = function (t) {
    for (var e = [], o = c.DataMgr.getInstance().getSkillBookProbCfg(), a = 0; a < o.length; a++) {
      var i = r.Utils.getTabelArr(o[a].levelRange);

      if (t >= Number(i[0]) && t <= Number(i[1])) {
        for (var n = o[a], s = 1; s <= 5; s++) {
          if (this.isExistSkillBookForQuality(s)) {
            var l = {
              id: s,
              weight: this.selectPropNum(n, s)
            };
            e.push(l);
          }
        }

        break;
      }
    }

    var u = r.Utils.weight_rand(e),
        p = this.skillBookClass[u.id - 1];

    if (p && !(p.length <= 0)) {
      var g = r.Utils.randomRang(0, p.length);
      return g >= p.length && (g = p.length - 1), p[g];
    }
  }, t.prototype.selectPropNum = function (t, e) {
    var o = 0;

    switch (e) {
      case 1:
        o = t.NBook;
        break;

      case 2:
        o = t.RBook;
        break;

      case 3:
        o = t.SRBook;
        break;

      case 4:
        o = t.SSRBook;
        break;

      case 5:
        o = t.SSSRBook;
    }

    return o;
  }, t.prototype.isExistSkillBookForQuality = function (t) {
    return this.skillBookClass ? this.skillBookClass[t - 1].length > 0 : (this.skillBookClass = [[], [], [], [], []], !1);
  }, t.prototype.getSkillBookDataArr = function () {
    return this.skillBookIdArr || (this.skillBookIdArr = []), this.skillBookIdArr;
  }, t.prototype.pushSkillBookData = function (t, e, o, a) {
    void 0 === e && (e = 1), this.skillBookIdArr || (this.skillBookIdArr = []);
    var i = this.isExistSkillBookId(t);
    if (-1 != i) return this.skillBookIdArr[i].iCount += 1, void (3 == this.skillBookIdArr[i].iCount ? o && o(this.skillBookIdArr[i].iCount) : 7 == this.skillBookIdArr[i].iCount && a && a(this.skillBookIdArr[i].iCount));
    var r = {
      id: t,
      iCount: e
    };
    this.skillBookIdArr.push(r);
  }, t.prototype.isExistSkillBookId = function (t) {
    this.skillBookIdArr || (this.skillBookIdArr = []);

    for (var e = 0; e < this.skillBookIdArr.length; e++) {
      if (t == this.skillBookIdArr[e].id) return e;
    }

    return -1;
  }, t.prototype.getStarNumForSkillBookId = function (t) {
    var e = this.isExistSkillBookId(t),
        o = 1;
    if (-1 == e) return [1, o -= 1, 2, o];
    var a = this.getSkillBookDataArr()[e].iCount;
    return (o = a) >= 1 && o < 3 ? [1, o -= 1, 2, a] : o >= 3 && o < 7 ? [2, o -= 3, 4, a] : [3, 0, 0, a];
  }, t.prototype.getStarNumForSkillBookCount = function (t) {
    var e = 1;
    return t < 3 ? e = 1 : t >= 3 && t < 7 ? e = 2 : t >= 7 && (e = 3), e;
  }, t.prototype.getFetterSuitCount = function () {
    return this.fetterSuitCount;
  }, t.prototype.addFetterSuitCount = function (t) {
    void 0 === t && (t = 1), this.fetterSuitCount += t;
  }, t.prototype.getFetterIdArr = function () {
    return this.fetterIdArr || (this.fetterIdArr = []), this.fetterIdArr;
  }, t.prototype.pushFetterData = function (t, e, o, a, i) {
    void 0 === e && (e = 1), this.fetterIdArr || (this.fetterIdArr = []);
    var n = this.isExistFetterId(t),
        s = 1;
    if (-1 != n) this.fetterIdArr[n].iCount += 1, s = this.fetterIdArr[n].iCount;else {
      var l = {
        id: t,
        iCount: e
      };
      this.fetterIdArr.push(l), s = e;
    }
    var u = c.DataMgr.getInstance().getFetter(t),
        p = r.Utils.getTabelArr(u.fetterCount),
        g = s;
    g == Number(p[0]) ? o && o(s) : g == Number(p[1]) ? a && a(s) : g == Number(p[2]) && i && i(s);
  }, t.prototype.isExistFetterId = function (t) {
    this.fetterIdArr || (this.fetterIdArr = []);

    for (var e = 0; e < this.fetterIdArr.length; e++) {
      if (t == this.fetterIdArr[e].id) return e;
    }

    return -1;
  }, t.prototype.getFetterNumForFetterId = function (t) {
    var e = this.isExistFetterId(t),
        o = 0;
    return -1 !== e && (o = this.getFetterIdArr()[e].iCount), o;
  }, t.prototype.getSuitCountForFetterId = function (t) {
    var e = c.DataMgr.getInstance().getFetter(t),
        o = r.Utils.getTabelArr(e.fetterCount),
        a = this.getFetterNumForFetterId(t);
    return a < Number(o[0]) ? 0 : a >= Number(o[0]) && a < Number(o[1]) ? 1 : a >= Number(o[1]) && a < Number(o[2]) ? 2 : 3;
  }, t.prototype.getSuitCountForFetterIdAndCount = function (t, e) {
    var o = c.DataMgr.getInstance().getFetter(t),
        a = r.Utils.getTabelArr(o.fetterCount),
        i = e;
    return i < Number(a[0]) ? 0 : i >= Number(a[0]) && i < Number(a[1]) ? 1 : i >= Number(a[1]) && i < Number(a[2]) ? 2 : 3;
  }, t.prototype.getStringForFetterId = function (t) {
    var e = c.DataMgr.getInstance().getFetter(t),
        o = r.Utils.getTabelArr(e.fetterCount),
        a = this.getFetterNumForFetterId(t);
    return a < Number(o[0]) ? "<outline color=#000000 width=3>" + a + " / " + o[0] + "</outline>" : a >= Number(o[0]) && a < Number(o[1]) ? "<outline color=#000000 width=3><color=#00ff00>" + o[0] + "</color><" + o[1] + "<" + o[2] + "</outline>" : a >= Number(o[1]) && a < Number(o[2]) ? "<outline color=#000000 width=3>" + o[0] + "<<color=#00ff00>" + o[1] + "</color><" + o[2] + "</outline>" : "<outline color=#000000 width=3>" + o[0] + "<" + o[1] + "<<color=#00ff00>" + o[2] + "</color></outline>";
  }, t.prototype.getSkillIdArr = function () {
    return this.skillIdArr || (this.skillIdArr = []), this.skillIdArr;
  }, t.prototype.pushSkillIdArrData = function (t) {
    this.skillIdArr || (this.skillIdArr = []), this.isExistSkillId(t) || this.skillIdArr.push(t);
  }, t.prototype.isExistSkillId = function (t) {
    this.skillIdArr || (this.skillIdArr = []);

    for (var e = 0; e < this.skillIdArr.length; e++) {
      return t == this.skillIdArr[e];
    }
  }, t.prototype.resetSkillBookAndFetter = function () {
    this.skillBookIdArr = [], this.fetterIdArr = [], this.skillIdArr = [], this.fetterSuitCount = 0, p["default"].getInstance().clearPropData(), l["default"].getInstance().resetFetterValue(), g["default"].getInstance().resetData();
  }, t.prototype.isFullForSkillBook = function () {
    return this.getSkillBookDataArr().length >= this.curTotalSkillBookCount;
  }, t.prototype.isFullStarForSkillBookId = function (t) {
    var e = this.isExistSkillBookId(t);
    return -1 !== e && this.getSkillBookDataArr()[e].iCount >= 7;
  }, t.prototype.dropGoodsFun = function (t, e) {
    var o = c.DataMgr.getInstance().getSecCfg(t);
    if (e < 1 || e > 3) return [];
    var a = [];
    if (3 == e && 1 == u.PlayerMgr.getInstance().geUserData().getCurSec()) a.push({
      id: 4,
      goodsId: 16,
      goodsType: "equip",
      iCount: 1
    }, {
      id: 4,
      goodsId: 27,
      goodsType: "equip",
      iCount: 1
    }, {
      id: 5,
      goodsId: 4,
      goodsType: "equip",
      iCount: 1
    }, {
      id: 9,
      goodsId: 16,
      goodsType: "skillBook",
      iCount: 1
    });else for (var i = r.Utils.getTabelArr(o["type" + e + "DropId"]), n = r.Utils.getTabelArr(o["type" + e + "DropNum"]), s = r.Utils.getTabelArr(o["type" + e + "DropProbability"]), l = 0; l < i.length; l++) {
      var p = d["default"].getInstance().getGoodsCfgForGoodsType(Number(i[l]));

      if (p && r.Utils.weight_randSingle(Number(s[l]))) {
        var g = {
          id: Number(i[l]),
          goodsId: Number(p[1]),
          goodsType: p[0].toString(),
          iCount: Number(n[l])
        };
        a.push(g);
      }
    }
    return a;
  }, t.prototype.getDropGoodsList = function () {
    return this.dropGoodsIdList || (this.dropGoodsIdList = []), this.dropGoodsIdList;
  }, t.prototype.addDropGoods = function (t, e, o) {
    var r = this,
        n = a.PoolMgr.getInstance().getNode("NodeDropGoods");
    n ? (n.parent = e, n.getComponent(s["default"]).initData(t, o), this.addDataToDropGoodsList(t)) : i.ResourceMgr.getInstance().loadRes("prefabs", "widget/NodeDropGoods", cc.Prefab, function (a) {
      n.parent = e, (n = cc.instantiate(a)).getComponent(s["default"]).initData(t, o), r.addDataToDropGoodsList(t);
    });
  }, t.prototype.addDataToDropGoodsList = function (t) {
    for (var e = !1, o = 0; o < this.dropGoodsIdList.length; o++) {
      if ((1 == t.id || 2 == t.id) && this.dropGoodsIdList[o].id == t.id) {
        this.dropGoodsIdList[o].iCount += t.iCount, e = !0;
        break;
      }
    }

    e || this.dropGoodsIdList.push(t);
  }, t.prototype.sortDropGoodsList = function () {
    this.dropGoodsIdList.sort(function (t, e) {
      return t.id - e.id;
    });
  }, t.prototype.resetDropGoodsData = function () {
    this.dropGoodsIdList = [];
  }, t.prototype.initGameData = function () {
    this.initSkillBookRefreshCount(), this.skillBookBothBtnForWeight();
  }, t.prototype.initSkillBookRefreshCount = function () {
    this.skillBookRefreshCount = Number(c.DataMgr.getInstance().getParamsCfgForSingle(n.EnumParams.SkillBookRefreshCount).value);
  }, t.prototype.skillBookBothBtnForWeight = function () {
    var t = u.PlayerMgr.getInstance().geUserData().getCurSec(),
        e = c.DataMgr.getInstance().getSecCfg(t),
        o = r.Utils.getTabelArr(e.AllGetProbability);
    this.weightFoBothBtn = Number(o[0]), this.weightAddForBothBtn = Number(o[1]);
  }, t;
}();

o["default"] = f;

cc._RF.pop();