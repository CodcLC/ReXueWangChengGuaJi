"use strict";
cc._RF.push(module, 'b39c9FYOklMSYxKAdaKEyOo', 'CityMgr');
// scripts/CityMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.CityMgr = void 0;

var a = t("HttpMgr"),
    i = t("LogMgr"),
    r = function () {
  function t() {
    this.firstCity = ["北京", "上海", "广州", "深圳"], this.isget = !1, this.isFirstCity = !0;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t(), this.instance.init()), this.instance;
  }, t.prototype.init = function () {
    this.parseIp();
  }, t.prototype.parseIp = function () {
    var t = this;
    a.HttpMgr.getInstance().httpGet("https://yuema.sfplay.net:9090/getIpInfo", null, function (e, o) {
      if (i.LogMgr.getInstance().debug("res: ", o), e) {
        t.isget = !0;

        for (var a = 0; a < t.firstCity.length; a++) {
          if (o.match(t.firstCity[a])) {
            t.isFirstCity = !1;
            break;
          }
        }
      }
    });
  }, t.prototype.getIsFirstCity = function () {
    return this.isget || this.parseIp(), this.isFirstCity;
  }, t;
}();

o.CityMgr = r;

cc._RF.pop();