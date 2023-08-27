"use strict";
cc._RF.push(module, '40133XcA2tDz76REDE3IcGD', 'AndroidManager');
// scripts/AndroidManager.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.AndroidManager = void 0;

var a = t("PlatformManager"),
    i = function () {
  function t() {
    this.infostr = [], this.nativeCode = "xx2";
  }

  return t.prototype.showBlockAd = function () {}, t.prototype.hideBlockAd = function () {}, t.prototype.canShare = function () {
    return !1;
  }, t.prototype.pauseRecord = function () {}, t.prototype.resumeRecord = function () {}, t.prototype.toAppStore = function () {}, t.prototype.openNotify = function () {}, t.prototype.shareImg = function () {}, t.prototype.showWxNativeAD = function (t) {
    5 == t && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/SdkManager", "showAllAd", "()V");
  }, t.prototype.hideWxNativeAD = function () {}, t.prototype.hasVerify = function () {
    return !1;
  }, t.prototype.youmengTrack = function (t, e, o) {
    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/SdkManager", "onEventObject", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", t, e, o);
  }, t.prototype.initSdk = function () {
    var t = a.AdConfig[a.PlatformManager.currentPlatform];
    t && JSON.stringify(t);
  }, t.prototype.verifyKey = function () {}, t.prototype.getCode = function (t) {
    return t && t(this.nativeCode), this.nativeCode;
  }, t.prototype.login = function (t, e) {
    e && e();
  }, t.prototype.pay = function (t, e) {
    e && e();
  }, t.prototype.share = function (t, e) {
    e && e();
  }, t.prototype.showBanner = function () {
    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/SdkManager", "showBanner", "()V");
  }, t.prototype.hideBanner = function () {
    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/SdkManager", "hideBanner", "()V");
  }, t.prototype.showInsertAd = function (t) {
    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/SdkManager", "showInsertAd", "(Ljava/lang/String;)V", t);
  }, t.prototype.showVideoAd = function (t, e, o) {
    this.callback = e, this.errorcallback = o, jsb.reflection.callStaticMethod("org/cocos2dx/javascript/SdkManager", "showVideoAd", "(Ljava/lang/String;Ljava/lang/String;)V", "window.AndroidManager.videoCallback", t);
  }, t.prototype.videoCallback = function (t) {
    console.log("----statu-----", t), 1 == t ? this.callback() : this.errorcallback();
  }, t.prototype.otherFun = function (t, e) {
    e && e();
  }, t.prototype.shark = function (t, e) {
    e && e();
  }, t.prototype.recordVideo = function (t, e) {
    e && e();
  }, t.prototype.shareVideo = function (t, e) {
    e && e();
  }, t.prototype.stopRecorderManager = function (t, e) {
    e && e();
  }, t.prototype.setLanguage = function (t, e) {
    return e && e(), "zh";
  }, t;
}();

o.AndroidManager = i;

cc._RF.pop();