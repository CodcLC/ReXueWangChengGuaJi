var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.LanguageMgr = void 0;
var a = t("DataMgr"),
i = t("Appcfg"),
r = function() {
    function t() {
        this.currentLan = i.LanguageType.zh
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.setCurrentLanguage = function(t) {
        this.currentLan = t
    },
    t.prototype.getCurrentLanguage = function() {
        return this.currentLan
    },
    t.prototype.getImgstr = function(t) {
        var e = this.currentLan;
        return e == i.LanguageType.en ? t + "-y": e == i.LanguageType.jp ? t + "-r": e == i.LanguageType.zh_tw ? t + "-f": t
    },
    t.prototype.T = function(t) {
        return a.DataMgr.getInstance().T(t, this.currentLan)
    },
    t
} ();
o.LanguageMgr = r