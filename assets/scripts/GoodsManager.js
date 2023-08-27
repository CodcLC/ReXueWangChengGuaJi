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
s = t("EquipMgr"),
c = t("PlayerMgr"),
l = t("TaskMgr"),
u = function() {
    function t() {
        this.equipClassForQuality = [[], [], [], [], []],
        this.equipClassForType = [[], [], [], [], [], []],
        this.skillBookClassForQuality = [[], [], [], [], []],
        this.skillBookOwned = [[], [], [], [], []],
        this.skillBookNotGet = [[], [], [], [], []],
        this.skillBookOwnedForQuality = [],
        this.skillBookNotGetForQuality = []
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.getGoodsCfgForGoodsType = function(t) {
        var e = n.DataMgr.getInstance().getGoodsCfg(t);
        if ("equip" == e.goodsType) {
            var o = this.equipClassForQuality[e.goodsQualityId - 1];
            if (!o || o.length <= 0) return null;
            var a = i.Utils.randomRang(0, o.length);
            return [e.goodsType, o[a]]
        }
        if ("skillBook" == e.goodsType) {
            var r = this.skillBookClassForQuality[e.goodsQualityId - 1];
            if (!r || r.length <= 0) return null;
            var s = i.Utils.randomRang(0, r.length);
            return [e.goodsType, r[s]]
        }
        return [e.goodsType, t]
    },
    t.prototype.seleCfg = function(t, e) {
        e && e[0]
    },
    t.prototype.initClassData = function() {
        this.classifyEquipForQuality(),
        this.classifyEquipForType(),
        this.classifySkillBookForQuality()
    },
    t.prototype.classifyEquipForQuality = function() {
        for (var t = n.DataMgr.getInstance().getAllEquipCfg(), e = 0; e < t.length; e++) {
            var o = t[e].qualityId;
            this.equipClassForQuality[o - 1].push(t[e].id)
        }
    },
    t.prototype.classifyEquipForType = function() {
        for (var t = n.DataMgr.getInstance().getAllEquipCfg(), e = 0; e < t.length; e++) {
            var o = t[e].equipType;
            this.equipClassForType[o - 1].push(t[e].id)
        }
    },
    t.prototype.classifySkillBookForQuality = function() {
        for (var t = n.DataMgr.getInstance().getSkillBookCfg(), e = 0; e < t.length; e++) {
            var o = t[e].qualityId;
            this.skillBookClassForQuality[o - 1].push(t[e].id)
        }
    },
    t.prototype.classifySkillBookForQualityAndIsOwn = function() {
        for (var t = c.PlayerMgr.getInstance().geUserData().getSkillBookArr(), e = 0; e < t.length; e++) {
            var o = n.DataMgr.getInstance().getSkillBook(t[e].id);
            this.skillBookOwned[o.qualityId - 1].push(t[e].id)
        }
        var a = n.DataMgr.getInstance().getSkillBookCfg();
        for (e = 0; e < a.length; e++) {
            var i = a[e].qualityId;
            this.isExistSkillBookForId(i, a[e].id) || this.skillBookNotGet[i - 1].push(a[e].id)
        }
        this.classifyAllSkillBookForQuality()
    },
    t.prototype.classifyAllSkillBookForQuality = function() {
        for (var t = this.skillBookOwned.length - 1; t >= 0; t--) for (var e = 0; e < this.skillBookOwned[t].length; e++) this.skillBookOwnedForQuality.push(this.skillBookOwned[t][e]);
        for (t = this.skillBookNotGet.length - 1; t >= 0; t--) for (e = 0; e < this.skillBookNotGet[t].length; e++) this.skillBookNotGetForQuality.push(this.skillBookNotGet[t][e])
    },
    t.prototype.isExistSkillBookForId = function(t, e) {
        if (!this.skillBookOwned || !this.skillBookOwned[t - 1] || this.skillBookOwned[t - 1].length <= 0) return ! 1;
        for (var o = 0; o < this.skillBookOwned[t - 1].length; o++) if (this.skillBookOwned[t - 1][o] == e) return ! 0;
        return ! 1
    },
    t.prototype.initOwnedSkillBookData = function() {
        this.skillBookOwned = [[], [], [], [], []],
        this.skillBookNotGet = [[], [], [], [], []],
        this.skillBookOwnedForQuality = [],
        this.skillBookNotGetForQuality = [],
        this.classifySkillBookForQualityAndIsOwn()
    },
    t.prototype.getColorForQuality = function(t) {
        var e = "ffffff";
        switch (t) {
            case 1:
                e = "c0bebe";
            break;
            case 2:
                e = "a3ec19";
            break;
            case 3:
                e = "21f9eb";
            break;
            case 4:
                e = "cd3dfd";
            break;
            case 5:
                e = "ffd722";
        }
        return e
    },
    t.prototype.seleColor = function(t) {
        var e = cc.color();
        switch (t) {
            case 1:
                e = cc.color(192, 190, 190);
            break;
            case 2:
                e = cc.color(163, 236, 25);
            break;
            case 3:
                e = cc.color(33, 249, 235);
            break;
            case 4:
                e = cc.color(205, 61, 253);
            break;
            case 5:
                e = cc.color(255, 215, 34);
        }
        return e
    },
    t.prototype.getRewardForType = function(t, e) {
        var o = c.PlayerMgr.getInstance().geUserData();
        switch (t) {
            case 1:
                o.addGoldNum(e);
            break;
            case 2:
                o.addInGotNum(e);
            break;
            case 3:
                o.addPowerNum(e);
        }
    },
    t.prototype.getReward = function(e) {
        if (e) {
            for (var o = 0,
            s = "金币",
            u = c.PlayerMgr.getInstance().geUserData(), p = 0; p < e.length; p++) switch (e[p].goodsType) {
                case "gold":
                    u.addGoldNum(e[p].iCount);
                break;
                case "inGot":
                    u.addInGotNum(e[p].iCount);
                break;
                case "power":
                    u.addPowerNum(e[p].iCount);
                break;
                case "equip":
                    u.addEquipForId(e[p].goodsId),
                l.default.getInstance().addEquipCountForTask();
                break;
                case "skillBook":
                    u.addSkillBookId(e[p].goodsId),
                l.default.getInstance().addSkillBookCountForTask();
                var g = n.DataMgr.getInstance().getSkillBook(e[p].goodsId);
                if (c.PlayerMgr.getInstance().geUserData().getSkillBookForId(e[p].goodsId).level >= g.MaxLevel) {
                    var d = n.DataMgr.getInstance().getSkillQuality(g.qualityId),
                    h = i.Utils.getTabelArr(d.FullGradeCompensate);
                    c.PlayerMgr.getInstance().geUserData().subSkillBookCount(g.id),
                    t.getInstance().getRewardForType(Number(h[0]), Number(h[1])),
                    o += Number(h[1]),
                    s = n.DataMgr.getInstance().getGoodsCfg(Number(h[0])).goodsName
                }
            }
            this.isOverEquipBagForIndex() ? a.UIMgr.getInstance().openUI(r.UIID.UINotBagIndex, -1) : a.UIMgr.getInstance().openUI(r.UIID.UITips, -1, "领取成功"),
            o > 0 && a.UIMgr.getInstance().openUI(r.UIID.UITips, -1, "部分技能书已达到最大等级，自动转化为 " + s + "x" + o)
        }
    },
    t.prototype.getRewardDouble = function(e) {
        if (e) {
            for (var o = 0,
            s = "金币",
            u = c.PlayerMgr.getInstance().geUserData(), p = 0; p < e.length; p++) switch (e[p].goodsType) {
                case "gold":
                    u.addGoldNum(2 * e[p].iCount);
                break;
                case "inGot":
                    u.addInGotNum(2 * e[p].iCount);
                break;
                case "power":
                    u.addPowerNum(2 * e[p].iCount);
                break;
                case "equip":
                    u.addEquipForId(e[p].goodsId),
                u.addEquipForId(e[p].goodsId),
                l.default.getInstance().addEquipCountForTask(2);
                break;
                case "skillBook":
                    u.addSkillBookId(e[p].goodsId, 2),
                l.default.getInstance().addSkillBookCountForTask(2);
                var g = n.DataMgr.getInstance().getSkillBook(e[p].goodsId);
                if (c.PlayerMgr.getInstance().geUserData().getSkillBookForId(e[p].goodsId).level >= g.MaxLevel) {
                    var d = n.DataMgr.getInstance().getSkillQuality(g.qualityId),
                    h = i.Utils.getTabelArr(d.FullGradeCompensate);
                    c.PlayerMgr.getInstance().geUserData().subSkillBookCount(g.id, 2),
                    t.getInstance().getRewardForType(Number(h[0]), Number(h[1])),
                    o += 2 * Number(h[1]),
                    s = n.DataMgr.getInstance().getGoodsCfg(Number(h[0])).goodsName
                }
            }
            this.isOverEquipBagForIndex() ? a.UIMgr.getInstance().openUI(r.UIID.UINotBagIndex, -1) : a.UIMgr.getInstance().openUI(r.UIID.UITips, -1, "领取成功"),
            o > 0 && a.UIMgr.getInstance().openUI(r.UIID.UITips, -1, "部分技能书已达到最大等级，自动转化为 " + s + "x" + o)
        }
    },
    t.prototype.isOverEquipBagForIndex = function(t) {
        void 0 === t && (t = function() {});
        var e = c.PlayerMgr.getInstance().geUserData().getBagIndexCount();
        return s.default.getInstance().getOwnedEquipCount() > e
    },
    t
} ();
o.default = u