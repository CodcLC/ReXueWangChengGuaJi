"use strict";
cc._RF.push(module, 'd401aN+AipKmZRsb6z0GhKk', 'KSManager');
// scripts/KSManager.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.KSManager = void 0;

var a = function () {
  function t() {
    this.hasAd = !0, this.hasBanner = !0, this.hasInsertAd = !0, this.hasVideoAd = !0;
  }

  return t.prototype.closeNativeAd = function () {}, t.prototype.hasVerify = function () {
    return !1;
  }, t.prototype.toAppStore = function () {}, t.prototype.addNotify = function () {}, t.prototype.needDouyVefiy = function () {}, t.prototype.interVefiy = function () {}, t.prototype.showNative = function () {}, t.prototype.hideNative = function () {}, t.prototype.showInterNative = function () {}, t.prototype.hideInterNative = function () {}, t.prototype.canShowBtnMore = function () {
    return !1;
  }, t.prototype.canShowEnergyForverVersion = function () {
    return !0;
  }, t.prototype.shareVideo = function () {}, t.prototype.showFloatIconAd = function () {}, t.prototype.hideFloatIconAd = function () {}, t.prototype.canCare = function () {
    return !1;
  }, t.prototype.canShare = function () {
    return !0;
  }, t.prototype.initTrack = function () {}, t.prototype.getUserInfo = function (t) {
    ks.login({
      success: function success(e) {
        console.log("登录成功:" + JSON.stringify(e)), ks.authorize({
          scope: "scope.userInfo",
          success: function success() {
            ks.getUserInfo({
              success: function success(e) {
                e ? t(e.userName, e.userHead) : t(null, null), console.log("head" + JSON.stringify(e.userHead));
              },
              fail: function fail(e) {
                t(null, null), console.log("获取用户信息失败: " + JSON.stringify(e));
              },
              complete: function complete() {}
            });
          },
          fail: function fail(e) {
            t(null, null), console.log("授权获取用户信息失败: " + JSON.stringify(e));
          },
          complete: function complete() {}
        });
      },
      fail: function fail(e) {
        console.log("登录失败:" + JSON.stringify(e)), t(null, null);
      }
    });
  }, t.prototype.shareImg = function (t) {
    console.log("分享"), ks.shareAppMessage({
      success: function success(e) {
        console.log("分享成功", e), t && t();
      },
      fail: function fail() {},
      complete: function complete() {}
    });
  }, t.prototype.follow = function () {}, t.prototype.showGamePortalAd = function () {}, t.prototype.addShortcut = function (t, e) {
    ks.saveAPKShortcut(function (t) {
      -10005 === t.code ? e("暂不支持该功能") : 1 === t.code ? e("桌面图标添加成功") : e("暂不支持该功能");
    });
  }, t.prototype.checkShortcut = function (t, e) {
    e && e(!0);
  }, t.prototype.gameVersion = function () {
    return "1.0.3";
  }, t.prototype.insertAdSwitchVersion = function () {
    return 7;
  }, t.prototype.caidanSwitchVersion = function () {
    return 2;
  }, t.prototype.initNativeAd = function () {}, t.prototype.showNativeAd = function () {}, t.prototype.youmengTrack = function (t, e, o) {
    ks.uma && (e && o ? "userA" == e ? ks.uma.trackEvent(t, {
      userA: o
    }) : "userB" == e ? ks.uma.trackEvent(t, {
      userB: o
    }) : "userC" == e ? ks.uma.trackEvent(t, {
      userC: o
    }) : "userD" == e && ks.uma.trackEvent(t, {
      userD: o
    }) : ks.uma.trackEvent(t));
  }, t.prototype.goToSuperXiuXian = function () {}, t.prototype.showBlockAd = function () {}, t.prototype.hideBlockAd = function () {}, t.prototype.initSdk = function () {
    this.rewardedVideoAd = ks.createRewardedVideoAd({
      adUnitId: "2300001143_01"
    });
  }, t.prototype.login = function () {}, t.prototype.pay = function () {}, t.prototype.share = function (t, e) {
    var o = cc.sys.localStorage.getItem("sfkqlhgvideoId");
    null != o && "" !== o && null != o ? this.recorder.publishVideo({
      video: o,
      callback: function callback(t) {
        null != t && null != t || e && (cc.sys.localStorage.setItem("sfkqlhgvideoId", ""), e());
      }
    }) : e("还没有分享的内容");
  }, t.prototype.showBanner = function () {}, t.prototype.hideBanner = function () {}, t.prototype.showInsertAd = function (t, e) {
    e && e();
  }, t.prototype.showVideoAd = function (t, e, o) {
    var a = this,
        i = function i(t) {
      console.log(t), o && o();
    },
        r = function r(t) {
      t && t.isEnded || void 0 === t ? e && e() : o && o(), a.rewardedVideoAd.offError(i), a.rewardedVideoAd.offClose(r);
    };

    this.rewardedVideoAd.onError(i), this.rewardedVideoAd.onClose(r), this.rewardedVideoAd.show().then(function () {
      return console.log("激励视频 广告显示");
    });
  }, t.prototype.otherFun = function () {}, t.prototype.homeToBackgroud = function () {}, t.prototype.backgroudToHome = function () {}, t.prototype.openNotify = function () {}, t.prototype.registerNotify = function () {}, t.prototype.deleteNotify = function () {}, t.prototype.shark = function () {}, t.prototype.openShare = function () {}, t.prototype.recordVideo = function () {
    this.recorder = ks.getGameRecorder(), this.recorder.on("start", function () {}), this.recorder.on("error", function () {}), this.recorder.start();
  }, t.prototype.stopRecorderManager = function (t, e) {
    this.recorder.on("stop", function (t) {
      t && t.videoID && (cc.sys.localStorage.setItem("sfkqlhgvideoId", t.videoID), e && e(t.videoID));
    }), this.recorder.stop();
  }, t.prototype.setLanguage = function () {
    return "CN";
  }, t.prototype.exit = function () {}, t;
}();

o.KSManager = a;

cc._RF.pop();