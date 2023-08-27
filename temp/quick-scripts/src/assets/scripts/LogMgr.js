"use strict";
cc._RF.push(module, '66888k6K8BMX5FlnhFjgbWs', 'LogMgr');
// scripts/LogMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.LogMgr = void 0;

var a = function () {
  function t() {}

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.debug = function () {}, t.prototype.info = function (t, e) {
    console.log(t, e);
  }, t.prototype.error = function (t, e) {
    console.error(t, e);
  }, t.instance = null, t;
}();

o.LogMgr = a;

cc._RF.pop();