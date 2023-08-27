var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.EventMgr = o.Listener = void 0;
var a = function() {
    function t(t, e) {
        this.mListener = e,
        this.mtarget = t
    }
    return Object.defineProperty(t.prototype, "listener", {
        get: function() {
            return this.mListener
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "target", {
        get: function() {
            return this.mtarget
        },
        enumerable: !1,
        configurable: !0
    }),
    t
} ();
o.Listener = a;
var i = function() {
    function t() {
        this.global_event_list = new Array
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.on = function(t, e, o, i) {
        if (void 0 === i && (i = !1), null != t && null != o) {
            if (null == this.global_event_list[t] && (this.global_event_list[t] = new Array), !i && this.global_event_list[t]) for (var r = 0; r < this.global_event_list[t].length; r++) if (this.global_event_list[t][r].listener == o && this.global_event_list[t][r].target == e) return;
            var n = new a(e, o);
            this.global_event_list[t].push(n)
        } else console.error("RegistEvent Error")
    },
    t.prototype.off = function(t, e, o) {
        if (null != t && null != o && null != this.global_event_list[t]) for (var a = 0; a < this.global_event_list[t].length; a++) this.global_event_list[t][a].listener == o && this.global_event_list[t][a].target == e && this.global_event_list[t].splice(a, 1)
    },
    t.prototype.removeAll = function() {
        this.global_event_list = new Array
    },
    t.prototype.emit = function(t, e, o, a, i, r, n) {
        if (null != t) {
            if (null != this.global_event_list[t]) for (var s = 0; s < this.global_event_list[t].length; s++) {
                var c = this.global_event_list[t][s];
                c && c.listener.call(c.target, e, o, a, i, r, n)
            }
        } else console.error("FireEvent Error")
    },
    t.instance = null,
    t
} ();
o.EventMgr = i