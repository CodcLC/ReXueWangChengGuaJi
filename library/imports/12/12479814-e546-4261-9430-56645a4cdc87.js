"use strict";
cc._RF.push(module, '12479gU5UZCYZQwVmRaTNyH', 'PlatformManager');
// scripts/PlatformManager.js

"use strict";

var t = require;
var e = module;
var o = exports;
var a, i, r;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.PlatformManager = o.PlatformInfo = o.AdConfig = o.UM_VERSION = o.SWCF = o.SwitchID = void 0;
var n,
    s = t("BasePlatform"),
    c = t("AndroidManager"),
    l = t("ByteDanceManager"),
    u = t("OppoManager"),
    p = t("VivoManager"),
    g = t("WechatManager"),
    d = t("KSManager"),
    h = t("WebLinkManager"),
    f = t("EditorManager");
(function (t) {
  t[t.ShenHe = 0] = "ShenHe", t[t.TrackVideoTime = 1] = "TrackVideoTime";
})(n = o.SwitchID || (o.SwitchID = {})), o.SWCF = ((a = {})[n.ShenHe] = {
  appId: 1089,
  h5_wechat: 4,
  h5_bytedance: 1
}, a[n.TrackVideoTime] = {
  appId: 1114,
  h5_wechat: 4,
  h5_bytedance: 11
}, a), o.UM_VERSION = ((i = {}).versionName = {
  h5_wechat: "1.0.8",
  h5_bytedance: "1.1.4",
  h5_oppo: "1.0.0",
  h5_vivo: "1.0.0",
  h5_qq: "1.0.0",
  h5_kuaikan: "1.0.0",
  android_google: "1.0.0",
  android_vivo: "1.0.0",
  android_233: "1.0.0",
  android_4399: "1.0.0",
  android_xiaomi: "1.0.0",
  h5_baidu: "1.0.0",
  ios: "1.0.0"
}, i), o.AdConfig = ((r = {})[s.Platform.ANDROID_233] = {
  packageName: "com.sfplay.diaoyu.meta",
  videoId: "123456|123456",
  insertId: "adunitxxx",
  bannerId: "adunitxxx",
  splashId: "adunitxxx"
}, r), function (t) {
  t[t.APP_ID = 1110] = "APP_ID";
}(o.PlatformInfo || (o.PlatformInfo = {}));

var m = function () {
  function t() {}

  return t.getInstance = function () {
    return null == this._instance && (this._instance = new t()), this._instance;
  }, t.prototype.init = function () {
    switch (cc.sys.platform) {
      case cc.sys.IPAD:
      case cc.sys.IPHONE:
      case cc.sys.ANDROID:
        t.currentPlatform == s.Platform.WEB_LINK ? this.currentPaltform = new h.WebLinkManager() : (this.currentPaltform = new c.AndroidManager(), window.AndroidManager = this.currentPaltform);
        break;

      case cc.sys.BYTEDANCE_GAME:
        this.currentPaltform = new l.BytedanceManager();
        break;

      case cc.sys.OPPO_GAME:
        this.currentPaltform = new u.OppoManager();
        break;

      case cc.sys.VIVO_GAME:
        this.currentPaltform = new p.VivoManager();
        break;

      case cc.sys.BAIDU_GAME:
        break;

      case cc.sys.WECHAT_GAME:
        t.currentPlatform == s.Platform.WECHAT ? this.currentPaltform = new g.WechatManager() : t.currentPlatform == s.Platform.KuaiShou && (this.currentPaltform = new d.KSManager());
        break;

      case cc.sys.HUAWEI_GAME:
        break;

      default:
        t.currentPlatform == s.Platform.WEB_LINK ? this.currentPaltform = new h.WebLinkManager() : this.currentPaltform = new f.EditorManager();
    }

    this.initSdk();
  }, t.prototype.initSdk = function () {
    this.currentPaltform || (this.currentPaltform = new f.EditorManager()), this.currentPaltform.initSdk();
  }, t.prototype.showBanner = function (t, e) {
    this.currentPaltform.showBanner(t, e);
  }, t.prototype.shark = function (t, e) {
    this.currentPaltform.shark(t, e);
  }, t.prototype.hideBanner = function (t, e) {
    this.currentPaltform.hideBanner(t, e);
  }, t.prototype.showInsertAd = function (t, e) {
    this.currentPaltform.showInsertAd(t, e);
  }, t.prototype.showVideoAd = function (t, e, o, a) {
    this.currentPaltform.showVideoAd(t, o, a, e);
  }, t.prototype.otherFun = function (t, e) {
    this.currentPaltform.otherFun(t, e);
  }, t.prototype.recordVideo = function (t, e) {
    this.currentPaltform.recordVideo(t, e);
  }, t.prototype.stopRecorderManager = function (t, e) {
    this.currentPaltform.stopRecorderManager(t, e);
  }, t.prototype.youmengTrack = function (t, e, o, a) {
    this.currentPaltform.youmengTrack(t, e, o, a);
  }, t.prototype.hasVerify = function () {
    return this.currentPaltform.hasVerify();
  }, t.prototype.getNativeCode = function (t) {
    this.currentPaltform.getCode && this.currentPaltform.getCode(t);
  }, t.prototype.canShare = function () {
    return !!this.currentPaltform.canShare && this.currentPaltform.canShare();
  }, t.prototype.pauseRecord = function () {
    this.currentPaltform.pauseRecord && this.currentPaltform.pauseRecord();
  }, t.prototype.resumeRecord = function () {
    this.currentPaltform.resumeRecord && this.currentPaltform.resumeRecord();
  }, t.prototype.shareVideo = function (t, e) {
    this.currentPaltform.share(t, e);
  }, t.prototype.toAppStore = function (t) {
    this.currentPaltform.toAppStore && this.currentPaltform.toAppStore(t);
  }, t.prototype.openNotify = function () {
    this.currentPaltform.openNotify && this.currentPaltform.openNotify();
  }, t.prototype.shareImg = function (t, e) {
    this.currentPaltform.shareImg && this.currentPaltform.shareImg(t, e);
  }, t.prototype.showWxNativeAD = function (t) {
    this.currentPaltform.showWxNativeAD(t);
  }, t.prototype.hideWxNativeAD = function (t) {
    this.currentPaltform.hideWxNativeAD(t);
  }, t.prototype.showBlockAd = function (t, e) {
    this.currentPaltform.showBlockAd(t, e);
  }, t.prototype.hideBlockAd = function (t, e) {
    this.currentPaltform.hideBlockAd(t, e);
  }, t.currentPlatform = s.Platform.BYTEDANCE, t;
}();

o.PlatformManager = m;

cc._RF.pop();