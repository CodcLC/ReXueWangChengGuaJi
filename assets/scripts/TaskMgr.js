var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
});
var a = t("DataMgr"),
i = t("PlayerMgr"),
r = function() {
    function t() {
        this.taskList = [],
        this.taskNeedCountList = []
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.initTaskData = function() {
        if (! (this.taskList.length > 0)) {
            this.taskList = [];
            var t = i.PlayerMgr.getInstance().geUserData();
            if (t.getCurTaskList().length <= 0) for (var e = a.DataMgr.getInstance().getTaskCfg(), o = 0; o < e.length; o++) if (1 == e[o].FirstTask) {
                var r = {
                    id: e[o].ID,
                    type: e[o].Type,
                    state: 0,
                    needCount: e[o].TaskParameter
                };
                t.setTaskList(r)
            }
            this.taskList = t.getCurTaskList(),
            this.initTaskNeedCountData()
        }
    },
    t.prototype.refreshTaskData = function(t) {
        var e = i.PlayerMgr.getInstance().geUserData();
        e.getCurTaskList()[t.type - 1] && (i.PlayerMgr.getInstance().geUserData().setTaskList(t), this.taskList = e.getCurTaskList())
    },
    t.prototype.refreshTaskDataForState = function(t) {
        this.taskList[t.type - 1].state = t.state,
        i.PlayerMgr.getInstance().geUserData().setTaskList(this.taskList[t.type - 1])
    },
    t.prototype.getTaskList = function() {
        return (!this.taskList || this.taskList.length <= 0) && this.initTaskData(),
        this.taskList
    },
    t.prototype.getTaskNeedCountList = function() {
        return (!this.taskNeedCountList || this.taskNeedCountList.length <= 0) && this.initTaskData(),
        this.taskNeedCountList
    },
    t.prototype.initTaskNeedCountData = function() {
        if (! (this.taskNeedCountList.length > 0)) {
            var t = i.PlayerMgr.getInstance().geUserData();
            if (t.getTaskNeedCountArr().length <= 0) for (var e = 0; e < this.taskList.length; e++) t.setTaskNeedCountArr(e + 1, 0);
            this.taskNeedCountList = t.getTaskNeedCountArr()
        }
    },
    t.prototype.addUpLoginForTask = function() {
        this.getTaskNeedCountList()[0] += 1,
        i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(1, this.getTaskNeedCountList()[0]),
        this.refreshTaskState(1)
    },
    t.prototype.costPowerForTask = function(t) {
        this.getTaskNeedCountList()[1] += t,
        i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(2, this.getTaskNeedCountList()[1]),
        this.refreshTaskState(2)
    },
    t.prototype.upFightNumForTask = function(t) {
        t > this.getTaskNeedCountList()[2] && (this.getTaskNeedCountList()[2] = t, i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(3, this.getTaskNeedCountList()[2]), this.refreshTaskState(3))
    },
    t.prototype.addOnHookCountForTask = function() {
        this.getTaskNeedCountList()[3] += 1,
        i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(4, this.getTaskNeedCountList()[3]),
        this.refreshTaskState(4)
    },
    t.prototype.addSkillBookCountForTask = function(t) {
        void 0 === t && (t = 1);
        var e = i.PlayerMgr.getInstance().geUserData().getSkillBookArr();
        this.getTaskNeedCountList()[4] = e.length,
        i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(5, this.getTaskNeedCountList()[4]),
        this.refreshTaskState(5)
    },
    t.prototype.skillBookMaxLvforTask = function(t) {
        t > this.getTaskNeedCountList()[5] && (this.getTaskNeedCountList()[5] = t, i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(6, this.getTaskNeedCountList()[5]), this.refreshTaskState(6))
    },
    t.prototype.addEquipCountForTask = function(t) {
        void 0 === t && (t = 1),
        this.getTaskNeedCountList()[6] += t,
        i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(7, this.getTaskNeedCountList()[6]),
        this.refreshTaskState(7)
    },
    t.prototype.wearEquipQualityForTask = function(t) {
        for (var e = 0,
        o = a.DataMgr.getInstance().getTaskCfgForId(t, 8).TaskParameterType, r = i.PlayerMgr.getInstance().geUserData().getWearedEquipQualityList(), n = 0; n < r.length; n++) r[n] >= o && (e += 1);
        this.getTaskNeedCountList()[7] = e,
        i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(8, this.getTaskNeedCountList()[7]),
        this.refreshTaskState(8)
    },
    t.prototype.addDrawRewardCountForCount = function() {
        this.getTaskNeedCountList()[8] += 1,
        i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(9, this.getTaskNeedCountList()[8]),
        this.refreshTaskState(9)
    },
    t.prototype.addLookVideoCountForTask = function() {
        this.getTaskNeedCountList()[9] += 1,
        i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(10, this.getTaskNeedCountList()[9]),
        this.refreshTaskState(10)
    },
    t.prototype.passSecForTask = function(t) {
        this.getTaskNeedCountList()[10] = t,
        i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(11, this.getTaskNeedCountList()[10]),
        this.refreshTaskState(11)
    },
    t.prototype.addEquipStrengthenCountForTask = function() {
        this.getTaskNeedCountList()[11] += 1,
        i.PlayerMgr.getInstance().geUserData().setTaskNeedCountArr(12, this.getTaskNeedCountList()[11]),
        this.refreshTaskState(12)
    },
    t.prototype.refreshTaskState = function(t) {
        var e = this.taskList[t - 1].needCount;
        if (this.getTaskNeedCountList()[t - 1] >= e) {
            if (0 != this.taskList[t - 1].state) return;
            this.taskList[t - 1].state = 1,
            i.PlayerMgr.getInstance().geUserData().setTaskList(this.taskList[t - 1])
        }
    },
    t
} ();
o.default = r