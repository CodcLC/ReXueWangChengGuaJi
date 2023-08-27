var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.DataMgr = void 0;
var a = t("Appcfg"),
i = t("EventMgr"),
r = t("ResourceMgr"),
n = function() {
    function t() {
        this.bSheetNames = ["SecFactorCfg", "EliteFactorCfg", "BossFactorCfg", "EquipCfg", "EquipStarCfg"]
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.preload = function() {
        var t = this;
        r.ResourceMgr.getInstance().loadRes("configs", "GameJsonCfg", cc.JsonAsset,
        function(e) {
            t.data = e.json,
            e.decRef(),
            i.EventMgr.getInstance().emit(a.BaseEventName.Loading, a.LoadingProcess.ExcelCfg)
        })
    },
    t.prototype.reloadConfig = function(t, e) {
        var o = this;
        if ("A" != t && "C" != t) {
            if (this.bSheetNames.length <= 0) e && e();
            else {
                var a = "configsB";
                "B" == t ? a = "configsB": "D" == t && (a = "configsD"),
                r.ResourceMgr.getInstance().loadRes(a, "GameJsonCfg", cc.JsonAsset,
                function(t) {
                    for (var a = t.json,
                    i = 0; i < o.bSheetNames.length; i++) {
                        var r = o.bSheetNames[i];
                        a[r] && (o.data[r] = a[r])
                    }
                    t.decRef(),
                    e && e()
                })
            }
        } else e && e()
    },
    t.prototype.getTextCfgs = function() {
        return this.data && this.data.TextCfg ? this.data.TextCfg: []
    },
    t.prototype.getText = function(t) {
        var e = this.getTextCfgs();
        if (e) for (var o = 0; o < e.length; o++) {
            var a = e[o];
            if (a.zh == t) return a
        }
        return null
    },
    t.prototype.T = function(e, o) {
        if (o == a.LanguageType.zh) return e;
        var i = t.getInstance().getText(e);
        return i && i[o] ? i[o] : e
    },
    t.prototype.getPlayerBaseProp = function() {
        return this.data.RoleBasePropCfg || console.log("请配置玩家属性表！！！"),
        this.data.RoleBasePropCfg[0]
    },
    t.prototype.getAllGoodsCfg = function() {
        return this.data.GoodsCfg || console.log("请配置物品表！！！"),
        this.data.GoodsCfg
    },
    t.prototype.getGoodsCfg = function(t) {
        var e = this.getAllGoodsCfg();
        return e[t - 1] || console.log("第" + t + "个物品不存在！！！"),
        e[t - 1]
    },
    t.prototype.getAllSecCfg = function() {
        return this.data.SecCfg || console.log("请配置章节表！！！"),
        this.data.SecCfg
    },
    t.prototype.getSecCfg = function(t) {
        var e = this.getAllSecCfg();
        return e ? e[t - 1] : this.data.SecCfg[0]
    },
    t.prototype.getAllLevelCfg = function(t) {
        return this.data["Sec" + t + "Cfg"] ? this.data["Sec" + t + "Cfg"] : (console.log("当前章节不存在，请配置章节表！！！"), this.data.Sec1Cfg)
    },
    t.prototype.getLevelCfg = function(t, e) {
        return this.getAllLevelCfg(t)[e - 1] ? this.data["Sec" + t + "Cfg"][e - 1] : (console.log("第" + t + "章节第" + e + "关不存在"), this.data.Sec1Cfg[0])
    },
    t.prototype.getAllMonsterProbCfg = function() {
        return this.data.MonsterProCfg || console.log("当前怪物表不存在！！！"),
        this.data.MonsterProCfg
    },
    t.prototype.getMonsterProbCfg = function(t) {
        var e = this.getAllMonsterProbCfg();
        return e[t - 1] ? e[t - 1] : (console.log("monsterId:", t), console.log("第" + t + "怪物不存在！！！"), e[0])
    },
    t.prototype.getSkillBookCfg = function() {
        return this.data.SkillBookCfg || console.log("技能书列表不存在！！！"),
        this.data.SkillBookCfg
    },
    t.prototype.getSkillBook = function(t) {
        var e = this.getSkillBookCfg();
        return e[t - 1] ? e[t - 1] : e[0]
    },
    t.prototype.getSkillQualityCfg = function() {
        return this.data.SkillQualityCfg || console.log("技能品质列表不存在！！！"),
        this.data.SkillQualityCfg
    },
    t.prototype.getSkillQuality = function(t) {
        var e = this.getSkillQualityCfg();
        return e[t - 1] ? e[t - 1] : e[0]
    },
    t.prototype.getFetterCfg = function() {
        return this.data.FetterCfg || console.log("羁绊列表不存在！！！"),
        this.data.FetterCfg
    },
    t.prototype.getFetter = function(t) {
        var e = this.getFetterCfg();
        return e[t - 1] ? e[t - 1] : e[0]
    },
    t.prototype.getSkillBookProbCfg = function() {
        return this.data.SkillBookProbCfg || console.log("技能书概率列表不存在！！！"),
        this.data.SkillBookProbCfg
    },
    t.prototype.getSkillBookProb = function(t) {
        var e = this.getSkillBookProbCfg();
        return e[t - 1] ? e[t - 1] : e[0]
    },
    t.prototype.getAllSkillBookLevelCfg = function() {
        return this.data.SkillBookLevelCfg || console.log("技能书升级列表不存在！！！"),
        this.data.SkillBookLevelCfg
    },
    t.prototype.getSkillBookLevelCfg = function(t, e) {
        var o = this.getSkillBook(t);
        e > o.MaxLevel && console.log("升级超出最大等级，报错！！！");
        var a = this.getAllSkillBookLevelCfg(),
        i = o.StartLevelID + e;
        return a[i - 1] ? a[i - 1] : (console.log("升级" + (i - 1) + "不存在！！！"), a[0])
    },
    t.prototype.getSkillBookLevelCfg1 = function(t, e) {
        var o = this.getAllSkillBookLevelCfg(),
        a = t + e - 1;
        return o[a - 1] ? o[a - 1] : (console.log("升级" + (a - 1) + "不存在！！！"), o[0])
    },
    t.prototype.getSkillCfg = function() {
        return this.data.SkillCfg || console.log("技能列表不存在！！！"),
        this.data.SkillCfg
    },
    t.prototype.getSkill = function(t) {
        var e = this.getSkillCfg();
        return e[t - 1] ? e[t - 1] : e[0]
    },
    t.prototype.getSecFactorCfg = function(t) {
        var e = this.data.SecFactorCfg;
        switch (t) {
            case 1:
                this.data.SecFactorCfg || console.log("普通怪系数列表不存在！！！"),
            e = this.data.SecFactorCfg;
            break;
            case 2:
                this.data.EliteFactorCfg || console.log("精英怪系数列表不存在！！！"),
            e = this.data.EliteFactorCfg;
            break;
            case 3:
                this.data.BossFactorCfg || console.log("Boss系数列表不存在！！！"),
            e = this.data.BossFactorCfg;
            break;
            default: this.data.SecFactorCfg || console.log("普通怪系数列表不存在！！！"),
            e = this.data.SecFactorCfg;
        }
        return e
    },
    t.prototype.getSecFactor = function(t, e) {
        var o = this.getSecFactorCfg(t);
        return o[e - 1] ? o[e - 1] : (console.log("关卡系数列表不存在！！！"), o[0])
    },
    t.prototype.getSecFactorForLevelToAtk = function(t, e, o) {
        var a = this.getSecFactor(t, o);
        return a["atkSec" + e] ? a["atkSec" + e] : (console.log("当前章节不存在！！！"), 1)
    },
    t.prototype.getSecFactorForLevelToHp = function(t, e, o) {
        var a = this.getSecFactor(t, o);
        return a["hpSec" + e] ? a["hpSec" + e] : (console.log("当前章节不存在！！！"), 1)
    },
    t.prototype.getAllEquipCfg = function() {
        return this.data.EquipCfg || console.log("请配置装备表"),
        this.data.EquipCfg
    },
    t.prototype.getEquipCfg = function(t) {
        var e = this.getAllEquipCfg();
        return e[t - 1] ? e[t - 1] : (console.log("装备" + t + "不存在！！！"), e[0])
    },
    t.prototype.getAllEquipStrengthenCfg = function() {
        return this.data.EquipStrengthenCfg || console.log("请配置装备强化表"),
        this.data.EquipStrengthenCfg
    },
    t.prototype.getEquipStrengthenCfg = function(t, e) {
        var o = this.getEquipCfg(t);
        e > o.strengthenMaxLv && console.log("强化超出最大等级，报错！！！");
        var a = this.getAllEquipStrengthenCfg(),
        i = o.strengthenStartId + e;
        return a[i - 1] ? a[i - 1] : (console.log("强化" + (i - 1) + "不存在！！！"), a[0])
    },
    t.prototype.getEquipStrengthenCfg1 = function(t, e) {
        var o = this.getAllEquipStrengthenCfg(),
        a = t + e;
        return o[a - 1] ? o[a - 1] : (console.log("强化" + (a - 1) + "不存在！！！"), o[0])
    },
    t.prototype.getAllEquipStarCfg = function() {
        return this.data.EquipStarCfg || console.log("请配置装备升星表"),
        this.data.EquipStarCfg
    },
    t.prototype.getEquipStarCfg = function(t, e) {
        var o = e;
        o > 5 ? console.log("升星超出最大等级，报错！！！") : o || (o = 0);
        var a = this.getEquipCfg(t),
        i = this.getAllEquipStarCfg(),
        r = 6 * a.id - 6 + 1 + o;
        return i[r - 1] ? i[r - 1] : (console.log("升星" + (r - 1) + "不存在！！！"), i[0])
    },
    t.prototype.getEquipStarCfg1 = function(t, e) {
        var o = e;
        o > 5 ? console.log("升星超出最大等级，报错！！！") : o || (o = 0);
        var a = this.getAllEquipStarCfg(),
        i = t + e;
        return a[i - 1] ? a[i - 1] : (console.log("升星" + (i - 1) + "不存在！！！"), a[0])
    },
    t.prototype.getAllEquipSuitCfg = function() {
        return this.data.EquipSuitCfg || console.log("请配置装备套装表"),
        this.data.EquipSuitCfg
    },
    t.prototype.getEquipSuitCfg = function(t) {
        var e = this.getAllEquipSuitCfg();
        return e[t - 1] ? e[t - 1] : (console.log("套装" + t + "不存在！！！"), e[0])
    },
    t.prototype.getAllShopCfg = function() {
        return this.data.DrawCardCfg || console.log("请配置商品表"),
        this.data.DrawCardCfg
    },
    t.prototype.getShopCfg = function(t) {
        var e = this.getAllShopCfg();
        return e[t - 1] ? e[t - 1] : (console.log("商品" + t + "不存在！！！"), e[0])
    },
    t.prototype.getAllRewardPoolCfg = function() {
        return this.data.DrawCardLibraryCfg || console.log("请配置奖励池表"),
        this.data.DrawCardLibraryCfg
    },
    t.prototype.getRewardPoolCfg = function(t) {
        var e = this.getAllRewardPoolCfg();
        return e[t - 1] ? e[t - 1] : (console.log("奖励池" + t + "不存在！！！"), e[0])
    },
    t.prototype.getResourceAcquisitionCfg = function() {
        return this.data.ResourceAcquisitionCfg || console.log("请配置资源获取表"),
        this.data.ResourceAcquisitionCfg
    },
    t.prototype.getGoodsCountForTypeAndSec = function(t, e) {
        for (var o = this.getResourceAcquisitionCfg(), a = 0; a < o.length; a++) if (t == o[a].Type && e == o[a].Parameter) return o[a].GetNum;
        return console.log("没有当前配置"),
        100
    },
    t.prototype.getGoodsCountForType = function(t) {
        for (var e = this.getResourceAcquisitionCfg(), o = 0; o < e.length; o++) if (t == e[o].Type) return e[o].GetNum;
        return console.log("没有当前配置"),
        100
    },
    t.prototype.getSalutationCfg = function() {
        return this.data.TitleCfg || console.log("请配置称号表"),
        this.data.TitleCfg
    },
    t.prototype.getSalutation = function(t) {
        var e = this.getSalutationCfg();
        return e[t - 1] ? e[t - 1] : (console.log("称号" + t + "不存在！！！"), e[0])
    },
    t.prototype.getTaskCfg = function() {
        return this.data.TaskCfg || console.log("请配置任务表"),
        this.data.TaskCfg
    },
    t.prototype.getTaskCfgForId = function(t, e) {
        for (var o = this.getTaskCfg(), a = 0; a < o.length; a++) if (o[a].ID == t && o[a].Type == e) return o[a];
        return null
    },
    t.prototype.getParamsCfg = function() {
        return this.data.ParamsCfg || console.log("请配置基础参数表"),
        this.data.ParamsCfg
    },
    t.prototype.getParamsCfgForSingle = function(t) {
        return this.data.ParamsCfg[t - 1] || console.log("参数" + t + "不存在！！！"),
        this.data.ParamsCfg[t - 1]
    },
    t.prototype.getAllPetsCfg = function() {
        return this.data.PetsCfg || console.log("请配置宠物表"),
        this.data.PetsCfg
    },
    t.prototype.getPetsCfg = function(t) {
        void 0 === t && (t = 1);
        var e = this.getAllPetsCfg();
        return e[t - 1] ? e[t - 1] : (console.log("宠物" + t + "不存在！！！"), e[0])
    },
    t.prototype.getAllEffectCfg = function() {
        return this.data.EffectCfg || console.log("请配置特效表"),
        this.data.EffectCfg
    },
    t.prototype.getEffectCfg = function(t) {
        var e = this.getAllEffectCfg();
        return e[t - 1] ? e[t - 1] : (console.log("特效" + t + "不存在！！！"), e[0])
    },
    t.prototype.getMysticalShopCfg = function() {
        return this.data.MysteriousShop || console.log("请配置神秘商店表"),
        this.data.MysteriousShop
    },
    t.prototype.getMysticalShop = function(t) {
        var e = this.getMysticalShopCfg();
        return e[t - 1] ? e[t - 1] : (console.log("神秘id" + t + "不存在！！！"), e[0])
    },
    t.prototype.getMissionCfg = function() {
        return this.data.MainTaskCfg || console.error("请配置TitleCfg表"),
        this.data.MainTaskCfg
    },
    t.prototype.getMission = function(t) {
        var e = this.getMissionCfg();
        return e[t - 1] ? e[t - 1] : null
    },
    t
} ();
o.DataMgr = n