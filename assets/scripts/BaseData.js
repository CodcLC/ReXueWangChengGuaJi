var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.BaseData = void 0;
var a = t("CacheUtils"),
i = function() {
    function t() {
        this.pwd = "SFPLAY"
    }
    return t.prototype.getData = function() {
        if (null == this.data) {
            var t; (t = this.ecrypt ? a.CacheUtils.getDataDecrypt(this.gameKey, this.pwd) : a.CacheUtils.getData(this.gameKey)) ? (this.data = JSON.parse(t), this.initData(!1)) : (this.data = this.createData(), this.initData(!0))
        }
        return this.data
    },
    t.prototype.initData = function() {},
    t.prototype.saveData = function() {
        var t = JSON.stringify(this.data);
        this.ecrypt ? a.CacheUtils.saveDataEncrypt(this.gameKey, t, this.pwd) : a.CacheUtils.saveData(this.gameKey, t)
    },
    t
} ();
o.BaseData = i