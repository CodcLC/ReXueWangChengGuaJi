"use strict";
cc._RF.push(module, '19fbbH59GlI3pQ7lmXK5gwM', 'WechatManager');
// scripts/WechatManager.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.WechatManager = void 0;

var a = t("LogMgr"),
    i = function () {
  function t() {
    this.showAlert = !0, this.hasAd = !0, this.hasBanner = !0, this.hasInsertAd = !0, this.hasVideoAd = !0, this.BannerAd = null, this.BannerAdHight = 0, this.customAdMap = new Map(), this.sdkVersion = "", this.videoAd = null;
  }

  return t.prototype.hasVerify = function () {
    return !1;
  }, t.prototype.canCare = function () {
    return !1;
  }, t.prototype.canShowwBtnMore = function () {
    return !1;
  }, t.prototype.showBlockAd = function (t) {
    console.log("--------showBlock-------");
    var e = this.customAdMap.get(t);
    (e = 1 === t ? this.customAdMap.get(1) : this.customAdMap.get(2)) && e.show();
  }, t.prototype.hideBlockAd = function (t) {
    var e = this.customAdMap.get(t);
    (e = 1 === t ? this.customAdMap.get(1) : this.customAdMap.get(2)) && e.hide();
  }, t.prototype.showFloatIconAd = function () {}, t.prototype.hideFloatIconAd = function () {}, t.prototype.addShortcut = function () {}, t.prototype.checkShortcut = function () {}, t.prototype.shareImg = function () {}, t.prototype.getUserInfo = function (t) {
    t && t(null, null);
  }, t.prototype.initNativeAd = function () {}, t.prototype.showNativeAd = function () {}, t.prototype.showGamePortalAd = function () {
    a.LogMgr.getInstance().debug("更多游戏");
  }, t.prototype.initTrack = function () {}, t.prototype.youmengTrack = function (t, e, o) {
    wx.uma && (e && o ? "userA" == e ? wx.uma.trackEvent(t, {
      userA: o
    }) : "userB" == e ? wx.uma.trackEvent(t, {
      userB: o
    }) : "userD" == e ? wx.uma.trackEvent(t, {
      userD: o
    }) : wx.uma.trackEvent(t, {
      userC: o
    }) : wx.uma.trackEvent(t));
  }, t.prototype.canShare = function () {
    return !0;
  }, t.prototype.initSdk = function () {
    var t = this,
        e = wx.getSystemInfoSync();
    this.sdkVersion = e.SDKVersion;
    var o = e.screenWidth,
        a = e.screenHeight;
    this.compareVersion(this.sdkVersion, "1.1.0") >= 0 && (wx.showShareMenu({
      withShareTicket: !0,
      menus: ["shareAppMessage", "shareTimeline"]
    }), wx.onShareAppMessage(function () {
      var t = Math.floor(2 * Math.random());
      return {
        title: ["我这套装备，一刀999！", "局内掉落一把屠龙刀，1分钟后消失！", "真的打不过了，帮帮我！"][Math.floor(3 * Math.random())],
        imageUrl: "https://game.sfplay.net/knife/wechat/" + ["1.jpeg", "2.jpeg"][t]
      };
    })), this.compareVersion(this.sdkVersion, "2.0.4") >= 0 && (this.videoAd = wx.createRewardedVideoAd({
      adUnitId: "adunit-61681feb644afbc6"
    }), this.videoAd.onError(function (t) {
      console.log(t);
    })), this.compareVersion(this.sdkVersion, "2.0.4") >= 0 && (this.BannerAd = wx.createBannerAd({
      adUnitId: "adunit-d208baeb29ec3299",
      adIntervals: 30,
      style: {
        left: 0,
        top: 0,
        width: 320
      }
    }), this.BannerAd.onResize(function (e) {
      t.BannerAdHight = e.height, t.BannerAd.style.top = a - t.BannerAdHight, t.BannerAd.style.left = (o - 320) / 2;
    }), this.BannerAd.onError(function () {}), this.BannerAd.onLoad(function () {}));
    var i = wx.createCustomAd({
      adUnitId: "adunit-e15fc561db927d89",
      style: {
        left: 5,
        top: a / 3
      }
    }),
        r = wx.createCustomAd({
      adUnitId: "adunit-a90247322a12da9b",
      style: {
        left: o / 2 - 150,
        top: a - 100,
        fixed: !0
      }
    });
    this.customAdMap.set(2, i), this.customAdMap.set(1, r);
  }, t.prototype.login = function (t, e) {
    e && e();
  }, t.prototype.showWxNativeAD = function (t) {
    var e = this.customAdMap.get(t);
    e && e.show();
  }, t.prototype.hideWxNativeAD = function (t) {
    var e = this.customAdMap.get(t);
    e && e.hide();
  }, t.prototype.pay = function (t, e) {
    e && e();
  }, t.prototype.share = function (t, e) {
    var o = Math.floor(3 * Math.random());
    wx.shareAppMessage({
      title: ["帮我看看哪个字错了？", "你是逃不过我的眼睛的！", "帮我看看哪一只不是企鹅"][o],
      desc: "",
      imageUrl: "https://game2.sfplay.net/werid_assets/wechat/shareIcon/" + ["1.jpeg", "2.jpeg", "3.jpeg"][o],
      query: "",
      success: function success() {},
      fail: function fail() {}
    }), setTimeout(function () {
      e && e();
    }, 3500);
  }, t.prototype.showBanner = function (t, e) {
    null != this.BannerAd && (this.BannerAd.show().then(function () {})["catch"](function () {}), e && e());
  }, t.prototype.hideBanner = function () {
    null != this.BannerAd && this.BannerAd.hide();
  }, t.prototype.showInsertAd = function (t, e) {
    if (this.compareVersion(this.sdkVersion, "2.6.0") >= 0) {
      var o = wx.createInterstitialAd({
        adUnitId: "adunit-d208baeb29ec3299"
      });
      o.onLoad(function () {
        o.show().then(function () {
          console.log("插屏广告展示完成"), e && e();
        })["catch"](function (t) {
          console.log("插屏广告展示失败", JSON.stringify(t));
        });
      });

      var a = function a() {
        o.offClose(a), o.destroy();
      };

      o.onClose(a), o.onError(function (t) {
        console.log("插屏广告加载失败", t), o.offError();
      }), o.onLoad(function (t) {
        console.log("插屏广告onLoad失败", t), o.offLoad();
      });
    }
  }, t.prototype.showVideoAd = function (t, e, o) {
    var a = this.videoAd;
    a.show().then()["catch"](function (t) {
      console.log(t.errMsg), a.load().then(function () {
        return a.show();
      });
    });

    var i = function i(t) {
      t && t.isEnded || void 0 === t ? e && e() : o && o(), a.load(), a.offClose(i);
    };

    a.onClose(i);
  }, t.prototype.otherFun = function (t, e) {
    e && e();
  }, t.prototype.shark = function (t, e) {
    e && e();
  }, t.prototype.recordVideo = function (t, e) {
    e && e();
  }, t.prototype.shareVideo = function (t, e) {
    e && e();
  }, t.prototype.stopRecorderManager = function (t, e) {
    e && e("test.png");
  }, t.prototype.setLanguage = function (t, e) {
    return e && e(), "zh";
  }, t.prototype.compareVersion = function (t, e) {
    t = t.split("."), e = e.split(".");

    for (var o = Math.max(t.length, e.length); t.length < o;) {
      t.push("0");
    }

    for (; e.length < o;) {
      e.push("0");
    }

    for (var a = 0; a < o; a++) {
      var i = parseInt(t[a]),
          r = parseInt(e[a]);
      if (i > r) return 1;
      if (i < r) return -1;
    }

    return 0;
  }, t;
}();

o.WechatManager = i;

cc._RF.pop();