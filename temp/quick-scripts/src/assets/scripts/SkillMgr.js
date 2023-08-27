"use strict";
cc._RF.push(module, 'df304j21DNOc7gKPka3XN9T', 'SkillMgr');
// scripts/SkillMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("UIMgr"),
    i = t("Utils"),
    r = t("Config"),
    n = t("DataMgr"),
    s = t("FetterMgr"),
    c = t("GameDataMgr"),
    l = t("GoodsManager"),
    u = t("PlayerMgr"),
    p = function () {
  function t() {}

  return t.getAtkSkillId = function () {
    for (var t = [], e = 0, o = c["default"].getInstance().getSkillIdArr(), a = 0; a < o.length; a++) {
      var r = n.DataMgr.getInstance().getSkill(o[a]),
          l = null,
          p = u.PlayerMgr.getInstance().geUserData();
      if (1 == p.getCurSec() && 1 == p.getEnterFirstSecCount()) l = {
        id: o[a],
        weight: 60
      };else {
        var g = r.skillWeight;
        s["default"].getInstance().isHaveMasterFetter() && (g += s["default"].getInstance().getAddSkillAndHurtProp() / 100 * g), l = {
          id: o[a],
          weight: g
        };
      }
      l && (e += l.weight), l && t.push(l);
    }

    return i.Utils.weight_randSingle(e) ? i.Utils.weight_rand(t).id : 0;
  }, t.isOverLevelForSkillBook = function (t) {
    var e = n.DataMgr.getInstance().getSkillBook(t),
        o = n.DataMgr.getInstance().getSkillQuality(e.qualityId),
        s = i.Utils.getTabelArr(o.FullGradeCompensate);
    u.PlayerMgr.getInstance().geUserData().getSkillBookForId(t).level >= e.MaxLevel && (u.PlayerMgr.getInstance().geUserData().subSkillBookCount(e.id), l["default"].getInstance().getRewardForType(Number(s[0]), Number(s[1])), a.UIMgr.getInstance().openUI(r.UIID.UITips, -1, "已达到最大等级，自动转化为 金币x" + s[1]));
  }, t;
}();

o["default"] = p;

cc._RF.pop();