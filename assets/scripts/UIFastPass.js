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
});
var n = t("BaseUI"),
s = t("EventMgr"),
c = t("SdkMgr"),
l = t("TimeUtils"),
u = t("Main"),
p = t("Config"),
g = t("TrackDataEvent"),
d = t("DataMgr"),
h = t("PlayerMgr"),
f = cc._decorator,
m = f.ccclass,
y = f.property,
v = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.BtnFastPass = null,
        e.BtnResetStart = null,
        e.LabLevel = null,
        e.LabDec = null,
        e
    }
    return i(e, t),
    e.prototype.start = function() {
        h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.quickarrive_appear),
        s.EventMgr.getInstance().emit(p.EventName.ShowUITop, !1),
        this.registerBtnEvent(),
        this.initView()
    },
    e.prototype.initView = function() {
        var t = h.PlayerMgr.getInstance().geUserData(),
        e = t.getCurSec(),
        o = t.getMostLevelForCurSec()[1],
        a = d.DataMgr.getInstance().getSecCfg(e);
        this.LabLevel.string = "（" + o + "/" + a.levelCount + "）",
        this.LabDec.string = "根据你的最高关卡纪录，你可以选择快速到达第" + o + "关！"
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnFastPass.on(cc.Node.EventType.TOUCH_END,
        function() {
            var e = l.TimeUtils.GetTimeBySecond(),
            o = l.TimeUtils.GetTimeByHours2();
            c.SdkMgr.getInstance().playVideo(1,
            function() {
                t.trackEvent();
                var a = l.TimeUtils.GetTimeBySecond(),
                i = l.TimeUtils.GetTimeByHours2();
                h.PlayerMgr.getInstance().getTrackData().testTrackTime("quickarrive", o, i, e, a),
                h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.quickarrive),
                h.PlayerMgr.getInstance().getTrackData().youmengTrackNew("quickarrive_b"),
                h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.quickarrive_get),
                t.closeView(),
                u.default.instance.fastPass()
            })
        }),
        this.BtnResetStart.on(cc.Node.EventType.TOUCH_END,
        function() {
            h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.quickarrive_restart),
            t.closeView(),
            h.PlayerMgr.getInstance().geUserData().setCurLevel(1),
            u.default.instance.resetStart()
        })
    },
    e.prototype.closeView = function() {
        this.closeUI()
    },
    e.prototype.trackEvent = function() {
        var t = h.PlayerMgr.getInstance().geUserData(),
        e = t.getCurSec(),
        o = t.getMostLevelForCurSec()[1];
        if (o < 5) o = 1;
        else for (var a = o; a > o - 5; a--) if (a % 5 == 0) {
            o = a;
            break
        }
        h.PlayerMgr.getInstance().getTrackData().youmengTrack(g.TrackId.quickarrive_X_Y, e, o)
    },
    r([y(cc.Node)], e.prototype, "BtnFastPass", void 0),
    r([y(cc.Node)], e.prototype, "BtnResetStart", void 0),
    r([y(cc.Label)], e.prototype, "LabLevel", void 0),
    r([y(cc.Label)], e.prototype, "LabDec", void 0),
    r([m], e)
} (n.default);
o.default = v