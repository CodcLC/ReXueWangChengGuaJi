var t = require;
var e = module;
var o = exports;
var a = this && this.__decorate ||
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
var i = t("EventMgr"),
r = t("HttpMgr"),
n = t("UIMgr"),
s = t("CacheUtils"),
c = t("UIUtils"),
l = t("Utils"),
u = t("Config"),
p = cc._decorator,
g = p.ccclass,
d = (p.property,
function() {
    function t() {
        this.verifykey = "realName_sf",
        this.verifyWCNkey = "realName_sf_wcn",
        this.isWcn = !1
    }
    var e;
    return e = t,
    t.getInstance = function() {
        return null == this.instance && (this.instance = new e),
        this.instance
    },
    t.prototype.isVerify = function() {
        return !! s.CacheUtils.getData(this.verifykey)
    },
    t.prototype.isWCN = function() {
        var t = s.CacheUtils.getData(this.verifyWCNkey);
        return ! (!t || "1" != t)
    },
    t.prototype.toGame = function(t) {
        var e = this;
        this.isWCN() ? this.getBirthday(function(o) {
            o ? e.getIsEnjoyTime() ? (t && t(), e.sceduleEndGame(), n.UIMgr.getInstance().openUI(u.UIID.UITips, -1, "未成年只能在晚上8-9点玩一个小时")) : i.EventMgr.getInstance().emit("WCNGameEnd", "未成年只能在晚上8-9点玩一个小时") : i.EventMgr.getInstance().emit("WCNGameEnd", "未成年只有周五，周六，周日和节假日才能玩")
        }) : t && t()
    },
    t.prototype.vifyCardId = function(t, e, o) {
        var a = this;
        if (null == t || t.length <= 0 || null == e || e.length <= 0) n.UIMgr.getInstance().openUI(u.UIID.UITips, -1, "不能为空");
        else {
            var i = l.Utils.isCardID(e);
            if (0 == i) r.HttpMgr.getInstance().httpPost({
                ai: new Date().getTime() + "",
                cardId: e,
                name: t
            },
            function(t) {
                var i = JSON.parse(t);
                if (200 == i.code && 0 == i.data.status) s.CacheUtils.saveData(a.verifykey, "1"),
                l.Utils.checkAdult(e) ? (o && o(!0), s.CacheUtils.saveData(a.verifyWCNkey, "0")) : (s.CacheUtils.saveData(a.verifyWCNkey, "1"), a.isWcn = !0, a.getBirthday(function(t) {
                    t ? a.getIsEnjoyTime() ? (o(!0), a.sceduleEndGame(), n.UIMgr.getInstance().openUI(u.UIID.UIExit, -1)) : n.UIMgr.getInstance().openUI(u.UIID.UIExit, -1) : o && n.UIMgr.getInstance().openUI(u.UIID.UIExit, -1)
                }));
                else {
                    var r = "校验失败";
                    1001 == i.code ? r = "系统错误": 1002 == i.code ? r = "接口请求的资源不存在": 1003 == i.code ? r = "接口请求方式错误": 1004 == i.code ? r = "接口请求核心参数缺失": 1005 == i.code ? r = "接口请求IP地址非法": 1006 == i.code ? r = "接口请求超出流量限制": 1007 == i.code ? r = "接口请求过期": 1008 == i.code ? r = "接口请求方身份非法": 1009 == i.code ? r = "接口请求方权限未启用": 1010 == i.code ? r = "接口请求方无该接口权限": 1011 == i.code ? r = "接口请求方身份核验错误": 1012 == i.code ? r = "接口请求报文核验失败": 2001 == i.code ? r = "身份证号格式校验失败": 2002 == i.code ? r = "实名认证条目已达上限": 2003 == i.code ? r = "无该编码提交的实名认证记录": 2004 == i.code ? r = "编码已经被占用": 2005 == i.code && (r = "姓名校验失败"),
                    2 == i.data.status && (r = "姓名校验失败"),
                    n.UIMgr.getInstance().openUI(u.UIID.UITips, -1, r)
                }
            },
            "https://yuema.sfplay.net:8002/rncheck");
            else {
                var c = "校验失败"; - 1 == i ? c = "身份证长度或格式错误": -2 == i ? c = "身份证地区非法": -3 == i ? c = "身份证上的出生日期非法": -4 == i && (c = "身份证号非法"),
                n.UIMgr.getInstance().openUI(u.UIID.UITips, -1, c)
            }
        }
    },
    t.prototype.getBirthday = function(t) {
        r.HttpMgr.getInstance().httpPost(null,
        function(e) {
            var o = JSON.parse(e);
            null == o.holiday && 5 != o.type.week && 6 != o.type.week && 1 != o.type.week ? t && t(!1) : t && t(!0)
        },
        "https://yuema.sfplay.net:8002/isholiday")
    },
    t.prototype.getIsEnjoyTime = function() {
        var t = new Date().getHours();
        return ! (t > 20 || t < 21)
    },
    t.prototype.sceduleEndGame = function() {
        var t = 1e3 * (60 - new Date().getMinutes());
        c.UIUtils.scheduleOnce(function() {
            i.EventMgr.getInstance().emit("WCNGameEnd", "由于您是未成年只能玩一个小时")
        },
        this, t)
    },
    e = a([g], t)
} ());
o.default = d