"use strict";
cc._RF.push(module, 'cae10zFespM0axe3QtxMfqW', 'TimeUtils');
// scripts/TimeUtils.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.TimeUtils = void 0;

var a = function () {
  function t() {}

  return t.GetTimeBySecond = function () {
    var t = new Date();
    return Math.floor(t.getTime() / 1e3);
  }, t.GetTimeByHours = function () {
    var t = new Date(),
        e = t.getHours(),
        o = Math.floor(e / 10).toString() + e % 10,
        a = t.getMinutes();
    return o + ":" + (Math.floor(a / 10).toString() + a % 10);
  }, t.GetTimeByHours2 = function () {
    var t = new Date(),
        e = t.getHours(),
        o = Math.floor(e / 10).toString() + e % 10,
        a = t.getMinutes(),
        i = Math.floor(a / 10).toString() + a % 10,
        r = t.getSeconds(),
        n = Math.floor(r / 10).toString() + r % 10,
        s = t.getMilliseconds();
    return o + ":" + i + ":" + n + ":" + (Math.floor(s / 10).toString() + s % 10);
  }, t.SecondToHours = function (t) {
    var e = t % 60;
    e = Math.floor(e / 10).toString() + e % 10;
    var o = Math.floor(t / 60) % 60;
    o = Math.floor(o / 10).toString() + o % 10;
    var a = Math.floor(t / 60 / 60);
    return (a = Math.floor(a / 10).toString() + a % 10) + ":" + o + ":" + e;
  }, t.SecondToMinutes = function (t) {
    var e = t % 60;
    e = Math.floor(e / 10).toString() + e % 10;
    var o = Math.floor(t / 60) % 60;
    return (o = Math.floor(o / 10).toString() + o % 10) + ":" + e;
  }, t.FormatDate2 = function (t) {
    var e = new Date(t),
        o = 10 > e.getMonth() + 1 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
        a = 10 > e.getDate() ? "0" + e.getDate() : e.getDate();
    return e.getFullYear() + "-" + o + "-" + a;
  }, t.FormatDate1 = function (t, e) {
    void 0 === e && (e = "/");
    var o = new Date(t);
    return o.getFullYear() + e + (o.getUTCMonth() + 1) + e + o.getUTCDate();
  }, t.BeforeTime = function (t) {
    if (null == t) return "";
    var e = new Date(),
        o = Math.floor(e.getTime() / 1e3) - t;
    return o <= 0 && (o = 1), Math.floor(o / 60 / 60 / 24) > 0 ? Math.floor(o / 60 / 60 / 24) + "天前" : Math.floor(o / 60 / 60) > 0 ? Math.floor(o / 60 / 60) + "小时前" : Math.floor(o / 60) > 0 ? Math.floor(o / 60) + "分钟前" : Math.floor(o) + "秒前";
  }, t.compareIsToday = function (t) {
    var e = new Date(1e3 * t),
        o = e.getFullYear(),
        a = e.getUTCMonth(),
        i = e.getUTCDay(),
        r = new Date(1e3 * this.GetTimeBySecond()),
        n = r.getFullYear(),
        s = r.getUTCMonth(),
        c = r.getUTCDay();
    return o == n && a == s && i == c;
  }, t.overDay = function (t) {
    var e = new Date(t),
        o = new Date(this.dayStart());
    return Math.floor((o.getTime() - e.getTime()) / 864e5);
  }, t.dayStart = function () {
    return new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime();
  }, t.dayEnd = function () {
    return new Date(new Date(new Date().toLocaleDateString()).getTime() + 864e5 - 1).getTime();
  }, t.getDiffHours = function (t) {
    return new Date().getHours() - new Date(1e3 * t).getHours();
  }, t.getDiffMins = function (t) {
    return this.GetTimeBySecond() - t;
  }, t.getSplaceTime = function (t, e) {
    var o = new Date();
    return o.getHours() >= t ? o.setHours(t + 24) : o.setHours(t), o.setMinutes(e), o.setSeconds(0), Number((o.getTime() / 1e3).toFixed(0));
  }, t.isLastDayOfMonth = function (t) {
    var e = !1,
        o = new Date(t),
        a = o.getFullYear(),
        i = o.getMonth() + 1,
        r = o.getDate(),
        n = a,
        s = i++;
    i > 12 && (s -= 12, n++);
    var c = new Date(n, s, 1);
    return r == new Date(c.getTime() - 864e5).getDate() && (e = !0), e;
  }, t.timeExchange = function (t, e) {
    return 1 == t ? Math.floor(e / 60) : Math.floor(e / 3600);
  }, t;
}();

o.TimeUtils = a;

cc._RF.pop();