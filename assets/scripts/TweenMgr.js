var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.TweenMgr = void 0;
var a = function() {
    function t() {
        this.twenMap = new Map
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.getTween = function(t) {
        this.twenMap.has(t.uuid) && this.stopTween(t);
        var e = cc.tween(t);
        return this.twenMap.set(t.uuid, e),
        e
    },
    t.prototype.stopTween = function(t) {
        this.twenMap.has(t.uuid) && (this.twenMap.get(t.uuid).stop(), this.twenMap.delete(t.uuid))
    },
    t.prototype.playHeartAni = function(t) {
        var e = this.getTween(t);
        this.heartani(e)
    },
    t.prototype.heartani = function(t) {
        t.to(.3, {
            scale: 1.04
        }).to(.2, {
            scale: .98
        }).delay(.4).to(.1, {
            scale: 1.05
        }).to(.2, {
            scale: .95
        }).union().repeatForever().start()
    },
    t.prototype.popOpenAin = function(t, e) {
        t.to(.1, {
            scale: .9
        }).to(.05, {
            scale: 1.1
        }).to(.1, {
            scale: 1
        }).call(function() {
            e && e()
        }).start()
    },
    t.prototype.popCloseAin = function(t, e) {
        t.stop(),
        t.to(.1, {
            scale: 0
        }).call(function() {
            e && e()
        }).start()
    },
    t.prototype.stampAni = function(t) {
        t.scale = t.scale + 1,
        cc.tween(t).to(.2, {
            scale: 1
        }).start()
    },
    t.prototype.anglesAni = function(t, e) {
        void 0 === e && (e = 1);
        var o = this.getTween(t);
        o.by(.5, {
            angle: 20
        }).by(.5, {
            angle: -20
        }).delay(.5).by(.2, {
            angle: 10
        }).by(.2, {
            angle: -10
        }).delay(.1).union(),
        -1 == e ? o.repeatForever() : o.repeat(e),
        o.start()
    },
    t.prototype.jumpAniForever = function(t, e) {
        void 0 === e && (e = .2);
        var o = this.getTween(t);
        o.by(.2, {
            position: new cc.Vec3(0, -10, 0)
        }).by(.2, {
            position: new cc.Vec3(0, 10, 0)
        }).delay(e).union().repeatForever(),
        o.start()
    },
    t.prototype.sharkAni = function(t, e) {
        void 0 === e && (e = 1);
        var o = this.getTween(t);
        o.by(.01, {
            position: new cc.Vec3(2, 2, 0)
        }).by(.01, {
            position: new cc.Vec3( - 2, -2, 0)
        }).union(),
        -1 == e ? o.repeatForever() : o.repeat(e),
        o.start()
    },
    t.prototype.quickBigAndSmallAni = function(t, e) {
        void 0 === e && (e = function() {}),
        t.scale = 1,
        this.getTween(t).to(.15, {
            scale: 1.3
        }).to(.08, {
            scale: 1
        }).call(function() {
            e && e()
        }).start()
    },
    t.prototype.rollLabAnim = function(t, e, o, a, i) {
        if (void 0 === i && (i = function() {}), cc.isValid(e)) {
            var r = Math.abs(a - o),
            n = Math.ceil(r / 10),
            s = r / n;
            e.string = "" + o;
            var c = o;
            this.getTween(e.node).call(function() {
                t ? (c += n) >= a && (c = a) : (c -= n) <= a && (c = a),
                e.string = "" + c
            }).delay(.05).union().repeat(s).call(function() {
                i && i()
            }).start()
        }
    },
    t.prototype.rollBarAnim = function(t, e, o, a, i) {
        if (void 0 === i && (i = function() {}), cc.isValid(e)) {
            var r = Math.abs(a - o) / .1;
            e.fillRange = o;
            var n = o;
            this.getTween(e.node).call(function() {
                t ? (n += .1) >= a && (n = a) : (n -= .1) <= a && (n = a),
                e.fillRange = n
            }).delay(.05).union().repeat(r).call(function() {
                i && i()
            }).start()
        }
    },
    t.prototype.animUpLv = function(t) {
        cc.isValid(t) && cc.tween(t).repeatForever(cc.tween().by(.1, {
            y: 3
        }).by(.2, {
            y: -6
        }).by(.1, {
            y: 3
        })).start()
    },
    t.prototype.newHeartAnim = function(t) {
        var e = t.scale;
        this.getTween(t).to(.3, {
            scale: 1.04 * e
        }).to(.2, {
            scale: .98 * e
        }).delay(.4).to(.1, {
            scale: 1.05 * e
        }).to(.2, {
            scale: .95 * e
        }).union().repeatForever().start()
    },
    t.prototype.playLightAni = function(t, e, o) {
        var a = e || 360,
        i = o || 10;
        this.getTween(t).by(i, {
            angle: a
        }).repeatForever().start()
    },
    t.prototype.playBlinkAnim = function(t) {
        this.getTween(t).to(.5, {
            opacity: 0
        }).to(.5, {
            opacity: 255
        }).union().repeatForever().start()
    },
    t
} ();
o.TweenMgr = a