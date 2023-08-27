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
}),
r = this && this.__decorate ||
function(t, e, o, a) {
    var i, r = arguments.length,
    n = r < 3 ? e: null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, a);
    else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (n = (r < 3 ? i(n) : r > 3 ? i(e, o, n) : i(e, o)) || n);
    return r > 3 && n && Object.defineProperty(e, o, n),
    n
};
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.NodeMainTask = void 0;
var n = t("EventMgr"),
s = t("Config"),
c = t("DataMgr"),
l = t("PlayerMgr"),
u = cc._decorator,
p = u.ccclass,
g = u.property,
d = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.spFinished1 = null,
        e.spFinished = null,
        e.labDec = null,
        e
    }
    return i(e, t),
    e.prototype.start = function() {
        this.registerEvent(),
        this.initView()
    },
    e.prototype.registerEvent = function() {
        n.EventMgr.getInstance().on(s.EventName.RefreshMainTask, this, this.refreshTask),
        n.EventMgr.getInstance().on(s.EventName.RefreshMainTaskDec, this, this.refreshTaskDec),
        n.EventMgr.getInstance().on(s.EventName.RefreshMainTaskFinished, this, this.refreshTaskFinished)
    },
    e.prototype.initView = function() {
        this.initTask(),
        this.playAnim()
    },
    e.prototype.playAnim = function() {},
    e.prototype.initTask = function() {
        var t = l.PlayerMgr.getInstance().getMainTaskData(),
        e = c.DataMgr.getInstance().getMission(t.getCurrentId());
        e ? (this.labDec.string = "<outline color=#000000 width = 3><color=#ffffff>" + e.Desc1 + e.TaskParameter + e.Desc2 + "</c><color=#42FF61>  " + t.getCurrentParameter() + "/" + e.TaskParameter + "</color></outline>", this.spFinished.active = t.getCurrentState(), t.getCurrentState() || t.carrayTaskForType(t.getCurrentId(), e.Type)) : this.node.destroy()
    },
    e.prototype.refreshTask = function(t) {
        void 0 === t && (t = !1),
        this.refreshTaskFinished(t),
        this.refreshTaskDec()
    },
    e.prototype.refreshTaskFinished = function(t) {
        this.spFinished.active = t
    },
    e.prototype.refreshTaskDec = function() {
        var t = l.PlayerMgr.getInstance().getMainTaskData(),
        e = c.DataMgr.getInstance().getMission(t.getCurrentId());
        e ? this.labDec.string = "<outline color=#000000 width = 3><color=#ffffff>" + e.Desc1 + e.TaskParameter + e.Desc2 + "</c><color=#42FF61>  " + t.getCurrentParameter() + "/" + e.TaskParameter + "</color></outline>": this.node.destroy()
    },
    e.prototype.update = function() {},
    e.prototype.onDestroy = function() {
        n.EventMgr.getInstance().off(s.EventName.RefreshMainTask, this, this.refreshTask),
        n.EventMgr.getInstance().off(s.EventName.RefreshMainTaskDec, this, this.refreshTaskDec),
        n.EventMgr.getInstance().off(s.EventName.RefreshMainTaskFinished, this, this.refreshTaskFinished)
    },
    r([g({
        type: cc.Node,
        displayName: ""
    })], e.prototype, "spFinished1", void 0),
    r([g({
        type: cc.Node,
        displayName: ""
    })], e.prototype, "spFinished", void 0),
    r([g({
        type: cc.RichText,
        displayName: ""
    })], e.prototype, "labDec", void 0),
    r([p("NodeMainTask")], e)
} (cc.Component);
o.NodeMainTask = d