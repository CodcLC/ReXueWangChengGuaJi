"use strict";
cc._RF.push(module, 'b1a7cBMu6FI4byGElcDxX5r', 'UserData');
// scripts/UserData.js

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
});

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.TaskData = o.SkillBookSaveData = o.EquipData = o.UserData = void 0;

var r = t("BaseData"),
    n = t("EventMgr"),
    s = t("UIMgr"),
    c = t("TimeUtils"),
    l = t("Utils"),
    u = t("Config"),
    p = t("DataMgr"),
    g = t("PlayerMgr"),
    d = t("TaskMgr"),
    h = t("TimeMgr"),
    f = function f() {
  this.userID = "", this.powerNum = 1e3, this.goldNum = 1e5, this.inGotNum = 1e5, this.curSec = 1, this.curLevel = 1, this.mostLevelForSec = [1, 1], this.inGotGetCount = 1, this.lastLoginTime = 0, this.lastOfflineTime = 0, this.loginDay = 0, this.onHookTime = 0, this.skillBookArr = [], this.bagIndexCount = 18, this.curWearEquip = [], this.ownedEquip = [[], [], [], [], [], []], this.equipIDCard = 0, this.shopDrawRewardList = [], this.boxOpenTimeArr = [], this.wearSalutationId = 1, this.ownedSalutationId = [1], this.isNewSalutation = !1, this.curTaskArr = [], this.taskNeedCountArr = [], this.completedTaskCount = 0, this.wearEquipQualityArr = [0, 0, 0, 0, 0, 0], this.enterFirstSecCount = 0, this.enterSecCountArr = [], this.curGameMultiply = 1, this.curUnlockMultiply = 1, this.ownedPetsArr = [], this.firstTouchBothNeed = 0, this.box2CountForSec = [], this.box3CountForSec = [], this.equipIdCount = {}, this.isFirstEnterGame = !0;
},
    m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.ecrypt = !1, e.gameKey = u.GameConfig.AppCacheName + "udata", e.isNewUser = !1, e;
  }

  return i(e, t), e.prototype.createData = function () {
    return this.data = new f(), this.data.userID = l.Utils.guid(), this.data.goldNum = Number(p.DataMgr.getInstance().getParamsCfgForSingle(u.EnumParams.StartGold).value), this.data.inGotNum = Number(p.DataMgr.getInstance().getParamsCfgForSingle(u.EnumParams.StartIngot).value), this.data.powerNum = Number(p.DataMgr.getInstance().getParamsCfgForSingle(u.EnumParams.StartPower).value), this.data;
  }, e.prototype.initData = function (t) {
    t && (this.isNewUser = !0), this.data.equipIdCount || (this.data.equipIdCount = new Map());
  }, e.prototype.getIsNewUser = function () {
    return this.isNewUser;
  }, e.prototype.getUserID = function () {
    return null == this.data.userID && (this.data.userID = l.Utils.guid()), this.data.userID;
  }, e.prototype.selfSaveData = function () {
    this.saveData();
  }, e.prototype.getPowerNum = function () {
    return null == this.data.powerNum && (this.data.powerNum = 0), this.data.powerNum;
  }, e.prototype.addPowerNumForLimit = function (t, e) {
    var o = Number(p.DataMgr.getInstance().getParamsCfgForSingle(u.EnumParams.LimitPower).value);
    return this.data.powerNum >= o || (this.data.powerNum += t, this.data.powerNum >= o && (this.data.powerNum = o), this.saveData(), n.EventMgr.getInstance().emit(u.EventName.RefreshPower, t, !0, e), !1);
  }, e.prototype.addPowerNum = function (t, e) {
    this.data.powerNum += t, this.data.powerNum >= Number(p.DataMgr.getInstance().getParamsCfgForSingle(u.EnumParams.LimitPower).value) && (h.TimeMgr.getInstance().closeTimer_power(), n.EventMgr.getInstance().emit(u.EventName.RefreshPowerTime, 0)), this.saveData(), n.EventMgr.getInstance().emit(u.EventName.RefreshPower, t, !0, e);
  }, e.prototype.subPowerNum = function (t, e, o) {
    return void 0 === o && (o = function o() {}), this.data.powerNum < t ? (s.UIMgr.getInstance().openUI(u.UIID.UIGeneralWindow, -1, u.GeneralWindowType.PowerWindow), !1) : (g.PlayerMgr.getInstance().getMainTaskData().mainTask(8, t), this.data.powerNum -= t, n.EventMgr.getInstance().emit(u.EventName.RefreshPower, t, !1, !1, e, function () {
      o && o(), g.PlayerMgr.getInstance().geUserData().getPowerNum() < Number(p.DataMgr.getInstance().getParamsCfgForSingle(u.EnumParams.LimitPower).value) && h.TimeMgr.getInstance().openTimer_power();
    }), this.saveData(), !0);
  }, e.prototype.getGoldNum = function () {
    return null == this.data.goldNum && (this.data.goldNum = 0), this.data.goldNum;
  }, e.prototype.addGoldNum = function (t, e) {
    this.data.goldNum += t, this.saveData(), n.EventMgr.getInstance().emit(u.EventName.RefreshGold, t, !0, e), n.EventMgr.getInstance().emit(u.EventName.RefreshGoldNumAndShow);
  }, e.prototype.subGoldNum = function (t) {
    return this.data.goldNum < t ? (s.UIMgr.getInstance().openUI(u.UIID.UIGeneralWindow, -1, u.GeneralWindowType.GoldWindow), !1) : (t || (t = 0), this.data.goldNum -= t, n.EventMgr.getInstance().emit(u.EventName.RefreshGold, t, !1), n.EventMgr.getInstance().emit(u.EventName.RefreshGoldNumAndShow), this.saveData(), !0);
  }, e.prototype.getInGotNum = function () {
    return null == this.data.inGotNum && (this.data.inGotNum = 0), this.data.inGotNum;
  }, e.prototype.addInGotNum = function (t, e) {
    this.data.inGotNum += t, this.saveData(), n.EventMgr.getInstance().emit(u.EventName.RefreshInGot, t, !0, e), n.EventMgr.getInstance().emit(u.EventName.RefreshInGotNumAndShow);
  }, e.prototype.subInGotNum = function (t) {
    return this.data.inGotNum < t ? (s.UIMgr.getInstance().openUI(u.UIID.UIGeneralWindow, -1, u.GeneralWindowType.InGotWindow), !1) : (this.data.inGotNum -= t, n.EventMgr.getInstance().emit(u.EventName.RefreshInGot, t, !1), n.EventMgr.getInstance().emit(u.EventName.RefreshInGotNumAndShow), this.saveData(), !0);
  }, e.prototype.getCurSec = function () {
    return this.data.curSec || (this.data.curSec = 1), this.data.curSec;
  }, e.prototype.setCurSec = function (t) {
    this.data.curSec = t, this.data.curLevel = 1, this.setMostLevelForCurSec(this.data.curSec, this.data.curLevel), g.PlayerMgr.getInstance().getMainTaskData().mainTask(1, this.data.curSec - 1, !0), this.saveData();
  }, e.prototype.addCurSec = function () {
    this.data.curSec += 1, this.data.curLevel = 1;
    var t = p.DataMgr.getInstance().getAllSecCfg();
    this.data.curSec > t.length && (this.data.curSec = t.length), this.setMostLevelForCurSec(this.data.curSec, this.data.curLevel), g.PlayerMgr.getInstance().getMainTaskData().mainTask(1), this.data.curLevel = 1, g.PlayerMgr.getInstance().getMainTaskData().mainTask(1, this.data.curSec - 1, !0), this.saveData();
  }, e.prototype.getMostLevelForCurSec = function () {
    return this.data.mostLevelForSec || (this.data.mostLevelForSec = [0, 1]), this.data.mostLevelForSec;
  }, e.prototype.setMostLevelForCurSec = function (t, e) {
    this.data.mostLevelForSec || (this.data.mostLevelForSec = [0, 1]), t == this.data.mostLevelForSec[0] ? e > this.data.mostLevelForSec[1] && (this.data.mostLevelForSec[1] = e, this.saveData()) : t > this.data.mostLevelForSec[0] && (this.data.mostLevelForSec[0] = t, this.data.mostLevelForSec[1] = e, this.saveData());
  }, e.prototype.isEndForSec = function () {
    var t = this.getCurSec(),
        e = p.DataMgr.getInstance().getSecCfg(t).levelCount;
    return this.getCurLevel() >= e;
  }, e.prototype.getCurLevel = function () {
    return this.data.curLevel || (this.data.curLevel = 1), this.data.curLevel;
  }, e.prototype.setCurLevel = function (t) {
    this.data.curLevel = t, this.setMostLevelForCurSec(this.data.curSec, this.data.curLevel), this.saveData();
  }, e.prototype.addCurLevel = function () {
    var t = p.DataMgr.getInstance().getSecCfg(this.data.curSec);
    this.data.curLevel += 1, this.data.curLevel > t.levelCount && (this.data.curLevel = t.levelCount), this.setMostLevelForCurSec(this.data.curSec, this.data.curLevel), this.saveData();
  }, e.prototype.resetLevel = function () {
    this.data.curSec = 1, this.data.curLevel = 1, this.saveData();
  }, e.prototype.getInGotGetCount = function () {
    return this.data.inGotGetCount || (this.data.inGotGetCount = 1), this.data.inGotGetCount;
  }, e.prototype.addInGotGetCount = function (t) {
    void 0 === t && (t = 1), this.data.inGotGetCount || (this.data.inGotGetCount = 1), this.data.inGotGetCount += t, this.data.inGotGetCount > 15 && (this.data.inGotGetCount = 15), this.saveData();
  }, e.prototype.resetInGotGetCount = function () {
    this.data.inGotGetCount || (this.data.inGotGetCount = 1), this.data.inGotGetCount = 1, this.saveData();
  }, e.prototype.getSkillBookArr = function () {
    return this.data.skillBookArr || (this.data.skillBookArr = []), this.data.skillBookArr;
  }, e.prototype.getSkillBookForId = function (t) {
    var e = {
      id: t,
      level: 1,
      iCount: 0,
      videoCount: 0
    };
    if (!this.data.skillBookArr) return this.data.skillBookArr = [], e;

    for (var o = 0; o < this.data.skillBookArr.length; o++) {
      if (t == this.data.skillBookArr[o].id) return this.data.skillBookArr[o];
    }

    return e;
  }, e.prototype.setSkillBookData = function (t) {
    this.data.skillBookArr || (this.data.skillBookArr = []);
    var e = this.isExistSkillBookId(t.id);
    if (-1 != e) this.data.skillBookArr[e].iCount = t.iCount, this.data.skillBookArr[e].level = t.level, this.data.skillBookArr[e].videoCount = t.videoCount;else {
      var o = {
        id: t.id,
        level: t.level,
        iCount: t.iCount,
        videoCount: 0
      };
      this.data.skillBookArr.push(o);
    }
    this.saveData();
  }, e.prototype.subSkillBookCount = function (t, e) {
    void 0 === e && (e = 1);

    for (var o = this.getSkillBookArr(), a = 0; a < o.length; a++) {
      if (o[a].id == t) return o[a].iCount -= e, void this.saveData();
    }
  }, e.prototype.addSkillBookId = function (t, e) {
    void 0 === e && (e = 1), this.data.skillBookArr || (this.data.skillBookArr = []);
    var o = this.isExistSkillBookId(t);
    if (-1 != o) return g.PlayerMgr.getInstance().getMainTaskData().mainTask(5), this.data.skillBookArr[o].iCount += 1, void this.saveData();
    g.PlayerMgr.getInstance().getMainTaskData().mainTask(5);
    var a = {
      id: t,
      level: 1,
      iCount: 0,
      videoCount: 0
    };
    this.data.skillBookArr.push(a), this.saveData();
  }, e.prototype.isExistSkillBookId = function (t) {
    this.data.skillBookArr || (this.data.skillBookArr = []);

    for (var e = 0; e < this.data.skillBookArr.length; e++) {
      if (t == this.data.skillBookArr[e].id) return e;
    }

    return -1;
  }, e.prototype.getEquipIDCard = function () {
    return null == this.data.equipIDCard && (this.data.equipIDCard = 0), this.data.equipIDCard += 1, this.data.equipIDCard;
  }, e.prototype.getWearEquipList = function () {
    return this.data.curWearEquip || (this.data.curWearEquip = []), this.data.curWearEquip;
  }, e.prototype.getOwnedEquipList = function () {
    return this.data.ownedEquip || (this.data.ownedEquip = [[], [], [], [], [], []]), this.data.ownedEquip;
  }, e.prototype.isExistEquip = function (t) {
    this.data.curWearEquip || (this.data.curWearEquip = []);

    for (var e = 0; e < this.data.curWearEquip.length; e++) {
      if (t == this.data.curWearEquip[e].type) return this.data.curWearEquip[e];
    }

    return null;
  }, e.prototype.addManyEquip = function (t) {
    for (var e = 0; e < t.length; e++) {
      var o = t[e];
      if (!o) return void console.log("数据出错");
      this.data.ownedEquip || (this.data.ownedEquip = [[], [], [], [], [], []]), this.data.ownedEquip[o.type - 1].push(o);
    }

    g.PlayerMgr.getInstance().getMainTaskData().mainTask(10, t.length), this.saveData();
  }, e.prototype.addEquipForId = function (t) {
    var e = p.DataMgr.getInstance().getEquipCfg(t),
        o = {
      id: t,
      type: e.equipType,
      quality: e.qualityId,
      strengthenLv: 0,
      isUnlock: !0,
      isWear: !1,
      videoCount: 0,
      IDCard: this.getEquipIDCard(),
      starLevel: 0
    };
    this.data.ownedEquip || (this.data.ownedEquip = [[], [], [], [], [], []]), g.PlayerMgr.getInstance().getMainTaskData().mainTask(10), this.data.ownedEquip[o.type - 1].push(o), this.saveData();
  }, e.prototype.addBaseEquip = function (t) {
    var e = {
      id: t.id,
      type: t.equipType,
      quality: t.qualityId,
      strengthenLv: 0,
      isUnlock: !0,
      isWear: !1,
      videoCount: 0,
      IDCard: this.getEquipIDCard(),
      starLevel: 0
    };
    this.data.ownedEquip || (this.data.ownedEquip = [[], [], [], [], [], []]), g.PlayerMgr.getInstance().getMainTaskData().mainTask(10), this.data.ownedEquip[e.type - 1].push(e), this.saveData();
  }, e.prototype.addEquip = function (t) {
    t ? (this.data.ownedEquip || (this.data.ownedEquip = [[], [], [], [], [], []]), g.PlayerMgr.getInstance().getMainTaskData().mainTask(10), this.data.ownedEquip[t.type - 1].push(t), this.saveData()) : console.log("数据出错");
  }, e.prototype.setEquip = function (t, e) {
    if (void 0 === e && (e = !0), t) {
      if (e) for (var o = this.data.ownedEquip[t.type - 1], a = 0; a < o.length; a++) {
        var i = o[a];

        if (t.id == i.id && t.type == i.type && t.IDCard == i.IDCard) {
          this.data.ownedEquip[t.type - 1][a] = t;
          break;
        }
      } else for (a = 0; a < this.data.curWearEquip.length; a++) {
        if (i = this.data.curWearEquip[a], t.id == i.id && t.type == i.type) {
          this.data.curWearEquip[a] = t;
          break;
        }
      }
      this.saveData();
    } else console.log("数据出错");
  }, e.prototype.abandonEquip = function (t) {
    if (this.data.ownedEquip) {
      if (t) {
        for (var e = this.data.ownedEquip[t.type - 1], o = 0; o < e.length; o++) {
          var a = e[o];

          if (t.id == a.id && t.strengthenLv == a.strengthenLv && t.IDCard == a.IDCard) {
            this.data.ownedEquip[t.type - 1].splice(o, 1);
            break;
          }
        }

        this.saveData();
      } else console.log("数据出错");
    } else this.data.ownedEquip = [[], [], [], [], [], []];
  }, e.prototype.replaceEquip = function (t, e) {
    if (t && e) {
      for (var o = 0; o < this.data.curWearEquip.length; o++) {
        var a = this.data.curWearEquip[o];

        if (t.id == a.id && t.strengthenLv == a.strengthenLv && t.IDCard == a.IDCard) {
          this.data.curWearEquip[o] = e, this.data.curWearEquip[o].isWear = !0;
          break;
        }
      }

      var i = this.data.ownedEquip[e.type - 1];

      for (o = 0; o < i.length; o++) {
        if (a = i[o], e.id == a.id && e.strengthenLv == a.strengthenLv && e.IDCard == a.IDCard) {
          this.data.ownedEquip[t.type - 1][o] = t, this.data.ownedEquip[t.type - 1][o].isWear = !1;
          break;
        }
      }

      this.saveData();
    } else console.log("数据出错");
  }, e.prototype.wearEquip = function (t) {
    if (t) {
      for (var e = this.data.ownedEquip[t.type - 1], o = 0; o < e.length; o++) {
        var a = e[o];

        if (t.id == a.id && t.strengthenLv == a.strengthenLv && t.IDCard == a.IDCard) {
          this.data.ownedEquip[t.type - 1].splice(o, 1);
          break;
        }
      }

      t.isWear = !0, this.data.curWearEquip.push(t), this.saveData();
    } else console.log("数据出错");
  }, e.prototype.unloadEquip = function (t) {
    if (t) {
      t.isWear = !1, this.data.ownedEquip[t.type - 1].push(t);

      for (var e = 0; e < this.data.curWearEquip.length; e++) {
        var o = this.data.curWearEquip[e];

        if (t.id == o.id && t.strengthenLv == o.strengthenLv && t.IDCard == o.IDCard) {
          this.data.curWearEquip.splice(e, 1);
          break;
        }
      }

      this.saveData();
    } else console.log("数据出错");
  }, e.prototype.strengthenEquip = function (t, e) {
    if (void 0 === e && (e = !1), t) {
      if (e) this.setEquip(t);else for (var o = 0; o < this.data.curWearEquip.length; o++) {
        var a = this.data.curWearEquip[o];

        if (t.id == a.id && t.type == a.type && t.IDCard == a.IDCard) {
          this.data.curWearEquip[o].strengthenLv = t.strengthenLv;
          break;
        }
      }
      this.saveData();
    } else console.log("数据出错");
  }, e.prototype.unlockEquip = function (t) {
    if (t) {
      for (var e = 0; e < this.data.ownedEquip.length; e++) {
        if (t.id == this.data.ownedEquip[t.type - 1][e].id) {
          this.data.ownedEquip[t.type - 1][e].isUnlock = t.isUnlock;
          break;
        }
      }

      this.saveData();
    } else console.log("数据出错");
  }, e.prototype.getShopDrawRewardCount = function (t) {
    null == this.data.shopDrawRewardList && (this.data.shopDrawRewardList = []);
    var e = this.isExistShopList(t);
    return 0 == e[0] ? 0 : this.data.shopDrawRewardList[e[1]].iCount;
  }, e.prototype.addShopDrawReward = function (t) {
    null == this.data.shopDrawRewardList && (this.data.shopDrawRewardList = []);
    var e = this.isExistShopList(t);

    if (0 == e[0]) {
      var o = {
        id: t,
        iCount: 1
      };
      this.data.shopDrawRewardList.push(o);
    } else this.data.shopDrawRewardList[e[1]].iCount += 1;

    this.saveData();
  }, e.prototype.isExistShopList = function (t) {
    if (null == this.data.shopDrawRewardList) return this.data.shopDrawRewardList = [], [0, 0];

    for (var e = 0; e < this.data.shopDrawRewardList.length; e++) {
      if (t == this.data.shopDrawRewardList[e].id) return [1, e];
    }

    return [0, 0];
  }, e.prototype.resetDrawRewardCount = function (t) {
    null == this.data.shopDrawRewardList && (this.data.shopDrawRewardList = []);
    var e = this.isExistShopList(t);

    if (0 == e[0]) {
      var o = {
        id: t,
        iCount: 1
      };
      this.data.shopDrawRewardList.push(o);
    } else this.data.shopDrawRewardList[e[1]].iCount = 0;

    this.saveData();
  }, e.prototype.getWearSalutationId = function () {
    return null == this.data.wearSalutationId && (this.data.wearSalutationId = -1), this.data.wearSalutationId;
  }, e.prototype.setWearSalutation = function (t) {
    this.data.wearSalutationId = t, this.saveData();
  }, e.prototype.getOwnedSalutation = function () {
    return this.data.ownedSalutationId || (this.data.ownedSalutationId = []), this.data.ownedSalutationId;
  }, e.prototype.addSalutation = function (t) {
    this.data.ownedSalutationId || (this.data.ownedSalutationId = []), this.isExistSalutation(t) || (this.setIsNewSalutation(!0), this.data.ownedSalutationId.push(t), this.saveData());
  }, e.prototype.isExistSalutation = function (t) {
    for (var e = this.getOwnedSalutation(), o = 0; o < e.length; o++) {
      if (t == e[o]) return !0;
    }

    return !1;
  }, e.prototype.autoAddSalutation = function () {
    for (var t = g.PlayerMgr.getInstance().geUserData(), e = p.DataMgr.getInstance().getSalutationCfg(), o = 0; o < e.length; o++) {
      t.getCompletedTaskCount() >= e[o].CompleteTaskNum && t.addSalutation(e[o].ID);
    }
  }, e.prototype.getIsNewSalutation = function () {
    return this.data.isNewSalutation || (this.data.isNewSalutation = !1), this.data.isNewSalutation;
  }, e.prototype.setIsNewSalutation = function (t) {
    this.data.isNewSalutation || (this.data.isNewSalutation = !1), this.data.isNewSalutation != t && (this.data.isNewSalutation = t, this.saveData());
  }, e.prototype.getLastLoginTime = function () {
    return null == this.data.lastLoginTime && (this.data.lastLoginTime = 0), this.data.lastLoginTime;
  }, e.prototype.refreshLastLoginTime = function () {
    var t = c.TimeUtils.GetTimeBySecond();
    this.data.lastLoginTime = t, this.saveData();
  }, e.prototype.getLastOfflineTime = function () {
    return null == this.data.lastOfflineTime && (this.data.lastOfflineTime = 0), 0 == this.data.lastOfflineTime && (this.data.lastOfflineTime = c.TimeUtils.GetTimeBySecond(), this.saveData()), this.data.lastOfflineTime;
  }, e.prototype.refreshLastOfflineTime = function () {
    var t = c.TimeUtils.GetTimeBySecond();
    this.data.lastOfflineTime = t, this.saveData();
  }, e.prototype.getOnHookTime = function () {
    return null == this.data.onHookTime && (this.data.onHookTime = 0), this.data.onHookTime;
  }, e.prototype.setOnHookTime = function (t) {
    this.data.onHookTime = t, this.saveData();
  }, e.prototype.addOnHookTime = function (t) {
    null == this.data.onHookTime && (this.data.onHookTime = 0), this.data.onHookTime += t;
    var e = 60 * Number(p.DataMgr.getInstance().getParamsCfgForSingle(u.EnumParams.OnHookMaxTime).value);
    this.data.onHookTime >= e && (this.data.onHookTime = e), this.saveData();
  }, e.prototype.resetOnHookTime = function () {
    this.data.onHookTime = 0, this.saveData();
  }, e.prototype.getCurTaskList = function () {
    return this.data.curTaskArr || (this.data.curTaskArr = []), this.data.curTaskArr;
  }, e.prototype.setTaskList = function (t) {
    this.data.curTaskArr || (this.data.curTaskArr = []), this.data.curTaskArr[t.type - 1] ? this.data.curTaskArr[t.type - 1] = t : this.data.curTaskArr.push(t), this.saveData();
  }, e.prototype.getTaskNeedCountArr = function () {
    return this.data.taskNeedCountArr || (this.data.taskNeedCountArr = []), this.data.taskNeedCountArr;
  }, e.prototype.setTaskNeedCountArr = function (t, e) {
    this.data.taskNeedCountArr || (this.data.taskNeedCountArr = []), this.data.taskNeedCountArr[t - 1] ? this.data.taskNeedCountArr[t - 1] = e : this.data.taskNeedCountArr.push(e), this.saveData();
  }, e.prototype.getWearedEquipQualityList = function () {
    return this.data.wearEquipQualityArr || (this.data.wearEquipQualityArr = [0, 0, 0, 0, 0, 0]), this.data.wearEquipQualityArr;
  }, e.prototype.refreshWearEquipQuality = function (t, e) {
    if (this.data.wearEquipQualityArr || (this.data.wearEquipQualityArr = [0, 0, 0, 0, 0, 0]), this.data.wearEquipQualityArr[t - 1] < e) {
      this.data.wearEquipQualityArr[t - 1] = e;
      var o = g.PlayerMgr.getInstance().geUserData().getCurTaskList()[7].id;
      d["default"].getInstance().wearEquipQualityForTask(o), this.saveData();
    }
  }, e.prototype.getLoginDay = function () {
    return this.data.loginDay || (this.data.loginDay = 0), this.data.loginDay;
  }, e.prototype.addLoginDay = function () {
    this.data.loginDay || (this.data.loginDay = 0), this.data.loginDay += 1, this.saveData();
  }, e.prototype.getCompletedTaskCount = function () {
    return this.data.completedTaskCount || (this.data.completedTaskCount = 0), this.data.completedTaskCount;
  }, e.prototype.addCompletedTaskCount = function (t) {
    void 0 === t && (t = 1), this.data.completedTaskCount || (this.data.completedTaskCount = 0), this.data.completedTaskCount += t, this.saveData();
  }, e.prototype.getEnterFirstSecCount = function () {
    return null == this.data.enterFirstSecCount && (this.data.enterFirstSecCount = 0), this.data.enterFirstSecCount;
  }, e.prototype.addEnterFirstSecCount = function (t) {
    void 0 === t && (t = 1), null == this.data.enterFirstSecCount && (this.data.enterFirstSecCount = 0), this.data.enterFirstSecCount += t, this.saveData();
  }, e.prototype.getCurGameMultiply = function () {
    return this.data.curGameMultiply || (this.data.curGameMultiply = 1), this.data.curGameMultiply;
  }, e.prototype.setCurGameMultiply = function (t) {
    this.data.curGameMultiply || (this.data.curGameMultiply = 1), this.data.curGameMultiply != t && (this.data.curGameMultiply = t, this.saveData());
  }, e.prototype.getCurUnlockMultiply = function () {
    return this.data.curUnlockMultiply || (this.data.curUnlockMultiply = 1), this.data.curUnlockMultiply;
  }, e.prototype.addCurUnlockMultiply = function () {
    this.data.curUnlockMultiply || (this.data.curUnlockMultiply = 1), this.data.curUnlockMultiply += 1, this.saveData();
  }, e.prototype.getBagIndexCount = function () {
    return this.data.bagIndexCount || (this.data.bagIndexCount = 18), this.data.bagIndexCount;
  }, e.prototype.addbagIndexCount = function (t) {
    void 0 === t && (t = 6), this.data.bagIndexCount || (this.data.bagIndexCount = 18), this.data.bagIndexCount += t, this.saveData();
  }, e.prototype.getOwnedPetsList = function () {
    return this.data.ownedPetsArr || (this.data.ownedPetsArr = []), this.data.ownedPetsArr;
  }, e.prototype.addPetToList = function (t) {
    this.data.ownedPetsArr || (this.data.ownedPetsArr = []), this.data.ownedPetsArr[t - 1] = t, this.saveData();
  }, e.prototype.isExistPetFotId = function (t) {
    return this.data.ownedPetsArr ? !!this.data.ownedPetsArr[t - 1] : (this.data.ownedPetsArr = [], !1);
  }, e.prototype.getEnterSecCountForSecId = function (t) {
    return this.data.enterSecCountArr || (this.data.enterSecCountArr = []), this.data.enterSecCountArr[t - 1] || (this.data.enterSecCountArr[t - 1] = 0), this.data.enterSecCountArr[t - 1];
  }, e.prototype.addEnterSecCountForSecId = function (t) {
    this.data.enterSecCountArr || (this.data.enterSecCountArr = []), this.data.enterSecCountArr[t - 1] || (this.data.enterSecCountArr[t - 1] = 0), this.data.enterSecCountArr[t - 1] += 1, this.saveData();
  }, e.prototype.getBoxOpenTimeForBoxId = function (t) {
    return this.data.boxOpenTimeArr || (this.data.boxOpenTimeArr = []), this.data.boxOpenTimeArr[t - 1] || (this.data.boxOpenTimeArr[t - 1] = 0), this.data.boxOpenTimeArr[t - 1];
  }, e.prototype.addBoxOpenTimeForBoxId = function (t) {
    this.data.boxOpenTimeArr || (this.data.boxOpenTimeArr = []), this.data.boxOpenTimeArr[t - 1] || (this.data.boxOpenTimeArr[t - 1] = 0), this.data.boxOpenTimeArr[t - 1] += 1, this.saveData();
  }, e.prototype.getIsFirstBothNeed = function () {
    return null == this.data.firstTouchBothNeed && (this.data.firstTouchBothNeed = 0), this.data.firstTouchBothNeed;
  }, e.prototype.addIsFirstBothNeed = function () {
    null == this.data.firstTouchBothNeed && (this.data.firstTouchBothNeed = 0), this.data.firstTouchBothNeed += 1, this.saveData();
  }, e.prototype.getBox2CountForSec = function (t) {
    return this.data.box2CountForSec || (this.data.box2CountForSec = []), null == this.data.box2CountForSec[t - 1] && (this.data.box2CountForSec[t - 1] = 0), this.data.box2CountForSec[t - 1];
  }, e.prototype.addBox2CountForSec = function (t) {
    this.data.box2CountForSec || (this.data.box2CountForSec = []), null == this.data.box2CountForSec[t - 1] && (this.data.box2CountForSec[t - 1] = 0), this.data.box2CountForSec[t - 1] += 1, this.saveData();
  }, e.prototype.getBox3CountForSec = function (t) {
    return this.data.box3CountForSec || (this.data.box3CountForSec = []), null == this.data.box3CountForSec[t - 1] && (this.data.box3CountForSec[t - 1] = 0), this.data.box3CountForSec[t - 1];
  }, e.prototype.addBox3CountForSec = function (t) {
    this.data.box3CountForSec || (this.data.box3CountForSec = []), null == this.data.box3CountForSec[t - 1] && (this.data.box3CountForSec[t - 1] = 0), this.data.box3CountForSec[t - 1] += 1, this.saveData();
  }, e.prototype.getEquipCountByid = function (t) {
    return this.data.equipIdCount[t] || (this.data.equipIdCount[t] = 0), this.data.equipIdCount[t];
  }, e.prototype.setEquipCountByid = function (t, e) {
    console.log("获取各装备升级次数", typeof this.data.equipIdCount), this.data.equipIdCount[t] || (this.data.equipIdCount[t] = 0);
    var o = this.data.equipIdCount[t];
    o += e, this.data.equipIdCount[t] = o, this.saveData();
  }, e.prototype.getIsFirstEnterGame = function () {
    return null == this.data.isFirstEnterGame && (this.data.isFirstEnterGame = !0), this.data.isFirstEnterGame;
  }, e.prototype.setIsFirstEnterGame = function (t) {
    null == this.data.isFirstEnterGame && (this.data.isFirstEnterGame = !0), this.data.isFirstEnterGame = t, this.saveData();
  }, e;
}(r.BaseData);

o.UserData = m;

o.EquipData = function () {};

o.SkillBookSaveData = function () {};

o.TaskData = function () {};

cc._RF.pop();