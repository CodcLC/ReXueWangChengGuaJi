var t = require;
var e = module;
var o = exports;
var a, i = this && this.__extends || (a = function(t, e) {
    return (a = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array &&
    function(t, e) {
        t.__proto__ = e
    } ||
    function(t, e) {
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
    })(t, e)
},
function(t, e) {
    function o() {
        this.constructor = t
    }
    a(t, e),
    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
});
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.MainTaskData = void 0;
var r = t("BaseData"),
n = t("BasePlatform"),
s = t("EventMgr"),
c = t("PlatformManager"),
l = t("UIMgr"),
u = t("Config"),
p = t("DataMgr"),
g = t("PlayerMgr"),
d = function() {
    this.curTaskId = 1,
    this.curTaskState = !1,
    this.curTaskParameter = 0
},
h = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.ecrypt = !1,
        e.gameKey = u.GameConfig.AppCacheName + "taskData",
        e.endTaskId = 10,
        e.recordTaskCount = 0,
        e
    }
    return i(e, t),
    e.prototype.addRecordTaskCount = function(t) {
        if (void 0 === t && (t = function() {}), this.recordTaskCount += 1, this.recordTaskCount >= 4) {
            if (t && t(), c.PlatformManager.currentPlatform == n.Platform.BYTEDANCE) {
                var e = g.PlayerMgr.getInstance().getShareData();
                e.stopRecord(!1),
                e.getCanShare() && l.UIMgr.getInstance().openUI(u.UIID.UIShareVideo, -1)
            }
            this.resetRecordTaskCount()
        }
    },
    e.prototype.resetRecordTaskCount = function() {
        this.recordTaskCount = 0
    },
    e.prototype.createData = function() {
        return this.data = new d,
        this.data
    },
    e.prototype.initData = function(t) {
        t || (this.endTaskId = p.DataMgr.getInstance().getMissionCfg().length)
    },
    e.prototype.getCurrentId = function() {
        return this.data.curTaskId
    },
    e.prototype.getCurrentState = function() {
        return this.data.curTaskState
    },
    e.prototype.getCurrentParameter = function() {
        return this.data.curTaskParameter
    },
    e.prototype.setCurTaskState = function(t) {
        void 0 === t && (t = !0),
        this.data.curTaskState = t,
        s.EventMgr.getInstance().emit(u.EventName.RefreshMainTaskFinished, t),
        this.saveData()
    },
    e.prototype.addCurTaskParameter = function(t, e) {
        if (void 0 === t && (t = 1), void 0 === e && (e = !1), 1 != this.data.curTaskState) {
            e ? this.data.curTaskParameter = t: this.data.curTaskParameter += t;
            var o = p.DataMgr.getInstance().getMission(this.getCurrentId());
            o && (s.EventMgr.getInstance().emit(u.EventName.RefreshMainTaskDec), this.data.curTaskParameter >= o.TaskParameter && this.completeTask(), this.saveData())
        }
    },
    e.prototype.trackEvent = function() {},
    e.prototype.addTaskId = function(t) {
        void 0 === t && (t = !0),
        this.data.curTaskId += 1,
        this.resetTaskData();
        var e = p.DataMgr.getInstance().getMission(this.data.curTaskId);
        s.EventMgr.getInstance().emit(u.EventName.RefreshMainTask, !1),
        e && (this.data.curTaskState || g.PlayerMgr.getInstance().getMainTaskData().carrayTaskForType(this.data.curTaskId, e.Type)),
        t && this.saveData()
    },
    e.prototype.completeTask = function() {
        p.DataMgr.getInstance().getMission(g.PlayerMgr.getInstance().getMainTaskData().getCurrentId()) && g.PlayerMgr.getInstance().getMainTaskData().setCurTaskState()
    },
    e.prototype.getTaskEnd = function() {
        return this.data.curTaskId >= this.endTaskId
    },
    e.prototype.resetTaskData = function() {
        this.data.curTaskState = !1,
        this.data.curTaskParameter = 0
    },
    e.prototype.carrayTaskForType = function(t) {
        var e = p.DataMgr.getInstance().getMission(t);
        if (e && 1 == e.Type) {
            var o = g.PlayerMgr.getInstance().geUserData().getCurSec();
            this.addCurTaskParameter(o - 1, !0)
        }
    },
    e.prototype.mainTask = function(t, e, o) {
        void 0 === e && (e = 1),
        void 0 === o && (o = !1);
        var a = p.DataMgr.getInstance().getMission(g.PlayerMgr.getInstance().getMainTaskData().getCurrentId());
        a && a.Type == t && g.PlayerMgr.getInstance().getMainTaskData().addCurTaskParameter(e, o)
    },
    e
} (r.BaseData);
o.MainTaskData = h