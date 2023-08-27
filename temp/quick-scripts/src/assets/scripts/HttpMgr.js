"use strict";
cc._RF.push(module, '42ee6Jx1bBC86XD6EEtNiA3', 'HttpMgr');
// scripts/HttpMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.HttpMgr = void 0;

var a = function () {
  function t() {}

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.httpGet = function (t, e, o) {
    var a = new XMLHttpRequest();

    if (e) {
      var i = "";
      Object.keys(e).forEach(function (t) {
        i += t + "=" + encodeURIComponent(e[t]) + "&";
      }), "" !== i && (t = t + "?" + (i = i.substr(0, i.lastIndexOf("&"))));
    }

    a.withCredentials = !0, a.open("GET", t, !0), a.setRequestHeader("Access-Control-Allow-Origin", "*"), a.setRequestHeader("Access-Control-Allow-Methods", "GET, POST"), a.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with,content-type"), a.setRequestHeader("Content-Type", "application/json"), a.onreadystatechange = function () {
      if (4 === a.readyState) {
        var t = a.responseText;
        a.status >= 200 && a.status < 300 ? (a.statusText, o(!0, t)) : o(!1, "");
      }
    }, a.ontimeout = function () {
      o && o(null);
    }, a.onerror = function () {
      o && o(null);
    }, a.send();
  }, t.prototype.httpPost = function (e, o, a) {
    void 0 === e && (e = null);
    var i = JSON.stringify(e);
    console.log(i, JSON.parse(i), "sffs");
    var r = null;
    e && (r = "", Object.keys(e).forEach(function (t) {
      r += t + "=" + encodeURIComponent(e[t]) + "&";
    }), "" !== r && (r = r.substr(0, r.lastIndexOf("&"))));
    var n = a,
        s = new XMLHttpRequest();
    s.timeout = 7e3, s.withCredentials = !0, s.open("POST", n, !0), s.setRequestHeader("Access-Control-Allow-Origin", "*"), s.setRequestHeader("Access-Control-Allow-Methods", "GET, POST"), s.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with,content-type"), s.setRequestHeader("Content-Type", "application/json"), s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.onreadystatechange = function () {
      if (4 === s.readyState) if (s.status >= 200 && s.status < 400) {
        var e = s.responseText;
        t.isPass(e) && o && o(e);
      } else o && o(null);
    }, s.ontimeout = function () {
      o && o(null);
    }, s.onerror = function () {
      o && o(null);
    }, r ? s.send(r) : s.send();
  }, t.isPass = function () {
    return !0;
  }, t;
}();

o.HttpMgr = a;

cc._RF.pop();