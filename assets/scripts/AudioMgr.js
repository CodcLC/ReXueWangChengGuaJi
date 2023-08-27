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
o.AudioMgr = void 0;
var r = t("Config"),
n = t("BaseMgr"),
s = t("CacheUtils"),
c = t("LogMgr"),
l = t("ResourceMgr"),
u = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.audioSourceMap = new Map,
        e.audioClipMap = new Map,
        e.ADConf = {},
        e.otherADConf = [],
        e.musicKeys = [],
        e
    }
    return i(e, t),
    e.getInstance = function() {
        return null == this.instance && (this.instance = new e),
        this.instance
    },
    e.prototype.init = function(t) {
        this.ADConf = t,
        this.setButtonNomalAudio(r.AudioId.btnClick)
    },
    e.prototype.loadAudio = function(t, e) {
        var o = this,
        a = this.getAdConf(t);
        a ? l.ResourceMgr.getInstance().loadRes(a.bundle, a.path, cc.AudioClip,
        function(t) {
            o.audioClipMap.set(a.path, t),
            e && e()
        }) : c.LogMgr.getInstance().error("音效没有配置：", t)
    },
    e.prototype.addAdConf = function(t) {
        this.otherADConf.push(t)
    },
    e.prototype.getAdConf = function(t) {
        var e = this.ADConf[t];
        if (e) return e;
        for (var o = 0; o < this.otherADConf.length; o++) {
            var a = this.otherADConf[o][t];
            if (a) return a
        }
        return null
    },
    e.prototype.addMusicKey = function(t) {
        for (var e = 0; e < this.musicKeys.length; e++) if (this.musicKeys[e] == t) return ! 1;
        return this.musicKeys.push(t),
        !0
    },
    e.prototype.removeMusicKey = function(t) {
        for (var e = 0; e < this.musicKeys.length; e++) if (this.musicKeys[e] == t) return this.musicKeys.splice(e, 1),
        !0;
        return ! 1
    },
    e.prototype.creatreAudioSource = function(t) {
        var e = new cc.AudioSource;
        return this.audioSourceMap.has(t) && this.audioSourceMap.get(t).destroy(),
        this.audioSourceMap.set(t, e),
        e
    },
    e.prototype.getAudioSource = function(t) {
        return this.audioSourceMap.has(t) ? this.audioSourceMap.get(t) : this.creatreAudioSource(t)
    },
    e.prototype.playMusic = function(t, e, o, a) {
        var i = this;
        if (void 0 === o && (o = !0), void 0 === a && (a = 1), s.CacheUtils.canPlayMusin()) {
            var r = this.getAudioSource(e);
            if (null == r) return void c.LogMgr.getInstance().error("audioSourceName：" + e + "不存在");
            r.stop();
            var n = this.getAdConf(t);
            if (null == n) return void c.LogMgr.getInstance().error("audio id:" + t + "不存在");
            if (o && this.addMusicKey(e), this.audioClipMap.has(n.path)) {
                var u = this.audioClipMap.get(n.path);
                r.clip = u,
                r.loop = o,
                r.volume = a,
                r.play()
            } else l.ResourceMgr.getInstance().loadRes(n.bundle, n.path, cc.AudioClip,
            function(t) {
                r.clip = t,
                i.audioClipMap.set(n.path, t),
                r.loop = o,
                r.volume = a,
                r.play()
            })
        }
    },
    e.prototype.pauseMusic = function(t) {
        if (s.CacheUtils.canPlayMusin()) {
            var e = this.getAudioSource(t);
            if (null == e) return void c.LogMgr.getInstance().error("audioSourceName：" + t + "不存在");
            e.pause()
        }
    },
    e.prototype.resumeMusic = function(t) {
        if (s.CacheUtils.canPlayMusin()) {
            var e = this.getAudioSource(t);
            if (null == e) return void c.LogMgr.getInstance().error("audioSourceName：" + t + "不存在");
            e.resume()
        }
    },
    e.prototype.pauseAllMusic = function() {
        var t = this;
        this.musicKeys.forEach(function(e) {
            t.pauseMusic(e)
        })
    },
    e.prototype.resumeAllMusic = function() {
        var t = this;
        this.musicKeys.forEach(function(e) {
            t.resumeMusic(e)
        })
    },
    e.prototype.stopMusic = function(t) {
        var e = this.getAudioSource(t);
        null != e ? (this.removeMusicKey(t), e.stop()) : c.LogMgr.getInstance().error("audioSourceName：" + t + "不存在")
    },
    e.prototype.stopAll = function() {
        this.audioSourceMap.forEach(function(t) {
            t.stop()
        })
    },
    e.prototype.playEffect = function(t, e) {
        var o = this;
        if (void 0 === e && (e = 1), s.CacheUtils.canPlayEffect()) {
            var a = this.EffectAduioSource;
            null == a && (a = this.getAudioSource("effect"));
            var i = this.getAdConf(t);
            if (this.audioClipMap.has(i.path)) {
                var r = this.audioClipMap.get(i.path);
                a.clip = r,
                a.volume = e,
                a.play()
            } else l.ResourceMgr.getInstance().loadRes(i.bundle, i.path, cc.AudioClip,
            function(t) {
                o.audioClipMap.set(i.path, t),
                a.clip = t,
                a.volume = e,
                a.play()
            })
        }
    },
    e.prototype.playEffectByPath = function(t, e, o, a) {
        var i = this;
        if (void 0 === o && (o = 1), void 0 === a && (a = !1), s.CacheUtils.canPlayEffect()) {
            var r = this.EffectAduioSource;
            if (null == r && (r = this.getAudioSource(e)), this.audioClipMap.has(t)) {
                var n = this.audioClipMap.get(t);
                r.clip = n,
                r.volume = o,
                r.loop = a,
                r.play()
            } else l.ResourceMgr.getInstance().loadRes("audio", t, cc.AudioClip,
            function(e) {
                i.audioClipMap.set(t, e),
                r.clip = e,
                r.volume = o,
                r.loop = a,
                r.play()
            })
        }
    },
    e.prototype.playAudioFromPath = function(t, e, o, a, i) {
        var r = this;
        if (s.CacheUtils.canPlayMusin()) {
            var n = this.getAudioSource(o);
            if (null == n) return void c.LogMgr.getInstance().error("audioSourceName：" + o + "不存在");
            if (n.stop(), this.audioClipMap.has(e)) {
                var u = this.audioClipMap.get(e);
                n.clip = u,
                n.volume = 1,
                a ? (n.loop = !0, this.addMusicKey(o)) : n.loop = !1,
                n.play(),
                i && i(n)
            } else l.ResourceMgr.getInstance().loadRes(t, String(e), cc.AudioClip,
            function(t) {
                n.clip = t,
                r.audioClipMap.set(e, t),
                n.volume = 1,
                a ? (n.loop = !0, r.addMusicKey(o)) : n.loop = !1,
                n.play(),
                i && i(n)
            })
        }
    },
    e.prototype.stopEffect = function() {
        var t = this.getAudioSource("effect");
        t && t.stop()
    },
    e.prototype.setButtonNomalAudio = function(t) {
        this.normalButtonAudio = t
    },
    e.prototype.playAudioButtonClicked = function() {
        this.normalButtonAudio && this.playEffect(this.normalButtonAudio)
    },
    e
} (n.default);
o.AudioMgr = u