var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.CacheUtils = void 0;
var a = t("Utils"),
i = function() {
    function t() {}
    return t.saveData = function(t, e) {
        localStorage.setItem(t, e)
    },
    t.getData = function(t) {
        return localStorage.getItem(t)
    },
    t.saveDataEncrypt = function(t, e, o) {
        var i = a.Utils.encrypt(e, o);
        this.saveData(t, i)
    },
    t.getDataDecrypt = function(t, e) {
        var o = this.getData(t);
        return a.Utils.decrypt(o, e)
    },
    t.canPlayMusin = function() {
        var t = this.getData("MUSIC");
        return ! t || "0" != t
    },
    t.canPlayEffect = function() {
        var t = this.getData("EFFECT");
        return ! t || "0" != t
    },
    t.setPlayMusic = function(t) {
        t ? this.saveData("MUSIC", "1") : this.saveData("MUSIC", "0")
    },
    t.setPlayEffect = function(t) {
        t ? this.saveData("EFFECT", "1") : this.saveData("EFFECT", "0")
    },
    t
} ();
o.CacheUtils = i