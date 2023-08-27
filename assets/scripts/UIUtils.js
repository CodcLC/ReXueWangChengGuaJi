var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.UIUtils = void 0;
var a = function() {
    function t() {}
    return t.rollNumLabelAtlas = function(t, e, o, a, i, r) {
        void 0 === r && (r = 6);
        var n = o,
        s = 10 * r,
        c = 0,
        l = n / s + 1;
        n <= s ? (s = n, l = 1) : s += 1;
        var u = function() {
            if (t) {
                if (c != n) { (c += l) > n && (l -= c - n, c = n);
                    var o = Number(e.string),
                    i = Math.floor(o + l).toFixed(0) + "";
                    e.string = i
                }
            } else c != n && ((c += l) > n && (l = 0, c = n), (o = Number(e.string)) > a) && (i = Math.floor(o - l).toFixed(0) + "", e.string = i)
        };
        s > 0 ? cc.tween(e.node).call(function() {
            u()
        }).delay(.05).union().repeat(s).call(function() {
            i()
        }).start() : i()
    },
    t.scheduleOnce = function(t, e, o) {
        cc.director.getScheduler().enableForTarget(e),
        cc.director.getScheduler().schedule(t, e, 1, 0, o, !1)
    },
    t.schedule = function(t, e, o) {
        cc.director.getScheduler().enableForTarget(e),
        cc.director.getScheduler().schedule(t, e, o, cc.macro.REPEAT_FOREVER, 0, !1)
    },
    t.unSchedule = function(t, e) {
        cc.director.getScheduler().enableForTarget(e),
        cc.director.getScheduler().isScheduled(t, e) && cc.director.getScheduler().unschedule(t, e)
    },
    t
} ();
o.UIUtils = a