"use strict";
cc._RF.push(module, '9b26fp4xRlDqIrlgM98Byc9', 'BaseMgr');
// scripts/BaseMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("EventMgr"),
    i = function () {
  function t() {
    this.resArray = [], this.eventList = [], this.isDestroy = !1;
  }

  return t.prototype.addEvent = function (t, e) {
    a.EventMgr.getInstance().on(t, this, e);
    var o = new Map();
    o.set(t, e), this.eventList.push(o);
  }, t.prototype.sendEvent = function (t, e, o, i, r, n) {
    a.EventMgr.getInstance().emit(t, e, o, i, r, n);
  }, t.prototype.addRes = function () {}, t.prototype.release = function () {}, t.prototype.setListenerUI = function () {}, t.prototype.offEvents = function () {
    var t = this;

    if (this.eventList && this.eventList.length > 0) {
      for (var e = 0; e < this.eventList.length; e++) {
        this.eventList[e].forEach(function (e, o) {
          a.EventMgr.getInstance().off(o, t, e);
        });
      }

      this.eventList = null;
    }
  }, t.prototype.onDestroy = function () {
    this.isDestroy = !0, this.release();
  }, t;
}();

o["default"] = i;

cc._RF.pop();