
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/VivoManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1045fyoW+1Iw6uRR9Ulibck', 'VivoManager');
// scripts/VivoManager.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.VivoManager = void 0;

var a = t("LogMgr"),
    i = t("UIMgr"),
    r = function () {
  function t() {
    this.showBannerTime = 0, this.trackAppKey = "60783df09e4e8b6f6170467b", this.showAlert = !0;
  }

  return t.prototype.youmengTrack = function () {}, t.prototype.getCode = function () {
    return "xxx";
  }, t.prototype.pauseRecord = function () {}, t.prototype.closeNativeAd = function () {}, t.prototype.hasVerify = function () {
    return !1;
  }, t.prototype.toAppStore = function () {}, t.prototype.addNotify = function () {}, t.prototype.openNotify = function () {}, t.prototype.needDouyVefiy = function () {}, t.prototype.interVefiy = function () {}, t.prototype.showNative = function () {}, t.prototype.hideNative = function () {}, t.prototype.showInterNative = function () {}, t.prototype.hideInterNative = function () {}, t.prototype.canShowBtnMore = function () {}, t.prototype.canShowEnergyForverVersion = function () {}, t.prototype.showFloatIconAd = function () {}, t.prototype.hideFloatIconAd = function () {}, t.prototype.canCare = function () {
    return !1;
  }, t.prototype.addShortcut = function (t, e) {
    qg.installShortcut({
      message: "添加到桌面，方便下次启动",
      success: function success() {
        e && e("桌面图标添加成功");
      },
      fail: function fail() {
        e && e("桌面图标添加失败");
      }
    });
  }, t.prototype.checkShortcut = function (t, e) {
    e && e(!0);
  }, t.prototype.shareImg = function () {}, t.prototype.getUserInfo = function (t) {
    t(null, null);
  }, t.prototype.showGamePortalAd = function () {
    a.LogMgr.getInstance().debug("更多游戏");
  }, t.prototype.getAbName = function (t) {
    t("A");
  }, t.prototype.initTrack = function () {}, t.prototype.canShare = function () {
    return !1;
  }, t.prototype.initSdk = function () {
    this.PlatformInfo = qg.getSystemInfoSync();
  }, t.prototype.login = function (t, e) {
    e && e();
  }, t.prototype.pay = function (t, e) {
    e && e();
  }, t.prototype.share = function (t, e) {
    e && e();
  }, t.prototype.showBanner = function (t, e) {
    this.PlatformInfo.platformVersionCode >= 1031 ? Date.now() - this.showBannerTime >= 3e3 && this.createBanner() : e && e();
  }, t.prototype.createBanner = function () {
    null != this.BannerAd && this.hideBanner(), this.BannerAd = qg.createBannerAd({
      posId: "78d6063321d943f783ae902f768e489d",
      style: {
        left: 0,
        top: this.PlatformInfo.screenHeight - 170,
        width: this.PlatformInfo.screenWidth,
        height: 170
      }
    });
    var t = Date.now();
    this.showBannerTime = t, this.BannerAd.show().then(function () {})["catch"](function () {}), this.BannerAd.onError(function (t) {
      console.log(" banner 广告错误", t.errCode);
    });
  }, t.prototype.hideBanner = function () {
    null != this.BannerAd && (this.BannerAd.hide(), this.BannerAd.destroy(), this.BannerAd.offError());
  }, t.prototype.showInsertAd = function (t, e) {
    if (this.PlatformInfo.platformVersionCode >= 1031) {
      console.log("开始显示插屏视频=============>");
      var o = qg.createInterstitialAd({
        posId: "4c653de784624194b1e2b983c28a099b"
      });
      o.load(), o.onError(function () {
        o.offError();
      }), o.onLoad(function () {
        o.offLoad();
      }), o.show().then(function () {
        e && e();
      })["catch"](function (t) {
        console.log("插屏广告展示失败", JSON.stringify(t));
      });
    } else e && e();
  }, t.prototype.showVideoAd = function (t, e, o) {
    if (this.PlatformInfo.platformVersionCode >= 1041) {
      var a = qg.createRewardedVideoAd({
        posId: "15597df0c47847a984f70ed087dfba0b"
      });
      a.onError(function () {
        o && o(), i.UIMgr.getInstance().openUI(UIID.UITips, -1, "没有广告，请稍后重试"), a.offError();
      }), a.onLoad(function () {
        a.show().then(function () {})["catch"](function () {}), a.offLoad();
      }), a.onClose(function (t) {
        t && t.isEnded ? e && e(!0) : o && o(), a.offClose(), a.load();
      });
    } else o && o();
  }, t.prototype.otherFun = function (t, e) {
    e && e();
  }, t.prototype.shark = function (t) {
    1 == t ? qg.vibrateLong() : qg.vibrateShort();
  }, t.prototype.recordVideo = function (t, e) {
    e && e();
  }, t.prototype.shareVideo = function (t, e) {
    e && e();
  }, t.prototype.stopRecorderManager = function () {}, t.prototype.setLanguage = function (t, e) {
    return e && e(), "zh";
  }, t.prototype.initNativeAd = function (t, e) {
    var o = this,
        a = function a(t) {
      console.log("原生广告加载", t.adList), e && e(t.adList), t.adList[0] && o.nativeAd.reportAdShow({
        adId: t.adList[0].adId
      });
    },
        i = function i(t) {
      console.log("原生广告加载失败", t), e && e(null);
    };

    this.nativeAd && (this.nativeAd.offLoad(a), this.nativeAd.offError(i), this.nativeAd = null), this.nativeAd = qg.createNativeAd({
      adUnitId: "af3ef7f7104c4742a4eda8e1c3df0199"
    }), this.nativeAd.onError(i), this.nativeAd.onLoad(a), this.nativeAd.load();
  }, t.prototype.showNativeAd = function (t) {
    this.nativeAd && this.nativeAd.reportAdClick({
      adId: t
    });
  }, t;
}();

o.VivoManager = r;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVml2b01hbmFnZXIuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiVml2b01hbmFnZXIiLCJhIiwiaSIsInIiLCJzaG93QmFubmVyVGltZSIsInRyYWNrQXBwS2V5Iiwic2hvd0FsZXJ0IiwicHJvdG90eXBlIiwieW91bWVuZ1RyYWNrIiwiZ2V0Q29kZSIsInBhdXNlUmVjb3JkIiwiY2xvc2VOYXRpdmVBZCIsImhhc1ZlcmlmeSIsInRvQXBwU3RvcmUiLCJhZGROb3RpZnkiLCJvcGVuTm90aWZ5IiwibmVlZERvdXlWZWZpeSIsImludGVyVmVmaXkiLCJzaG93TmF0aXZlIiwiaGlkZU5hdGl2ZSIsInNob3dJbnRlck5hdGl2ZSIsImhpZGVJbnRlck5hdGl2ZSIsImNhblNob3dCdG5Nb3JlIiwiY2FuU2hvd0VuZXJneUZvcnZlclZlcnNpb24iLCJzaG93RmxvYXRJY29uQWQiLCJoaWRlRmxvYXRJY29uQWQiLCJjYW5DYXJlIiwiYWRkU2hvcnRjdXQiLCJxZyIsImluc3RhbGxTaG9ydGN1dCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZmFpbCIsImNoZWNrU2hvcnRjdXQiLCJzaGFyZUltZyIsImdldFVzZXJJbmZvIiwic2hvd0dhbWVQb3J0YWxBZCIsIkxvZ01nciIsImdldEluc3RhbmNlIiwiZGVidWciLCJnZXRBYk5hbWUiLCJpbml0VHJhY2siLCJjYW5TaGFyZSIsImluaXRTZGsiLCJQbGF0Zm9ybUluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsImxvZ2luIiwicGF5Iiwic2hhcmUiLCJzaG93QmFubmVyIiwicGxhdGZvcm1WZXJzaW9uQ29kZSIsIkRhdGUiLCJub3ciLCJjcmVhdGVCYW5uZXIiLCJCYW5uZXJBZCIsImhpZGVCYW5uZXIiLCJjcmVhdGVCYW5uZXJBZCIsInBvc0lkIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwic2NyZWVuSGVpZ2h0Iiwid2lkdGgiLCJzY3JlZW5XaWR0aCIsImhlaWdodCIsInNob3ciLCJ0aGVuIiwib25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJlcnJDb2RlIiwiaGlkZSIsImRlc3Ryb3kiLCJvZmZFcnJvciIsInNob3dJbnNlcnRBZCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwibG9hZCIsIm9uTG9hZCIsIm9mZkxvYWQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd1ZpZGVvQWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJVSU1nciIsIm9wZW5VSSIsIlVJSUQiLCJVSVRpcHMiLCJvbkNsb3NlIiwiaXNFbmRlZCIsIm9mZkNsb3NlIiwib3RoZXJGdW4iLCJzaGFyayIsInZpYnJhdGVMb25nIiwidmlicmF0ZVNob3J0IiwicmVjb3JkVmlkZW8iLCJzaGFyZVZpZGVvIiwic3RvcFJlY29yZGVyTWFuYWdlciIsInNldExhbmd1YWdlIiwiaW5pdE5hdGl2ZUFkIiwiYWRMaXN0IiwibmF0aXZlQWQiLCJyZXBvcnRBZFNob3ciLCJhZElkIiwiY3JlYXRlTmF0aXZlQWQiLCJhZFVuaXRJZCIsInNob3dOYXRpdmVBZCIsInJlcG9ydEFkQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNJLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDLEdBR0FKLENBQUMsQ0FBQ0ssV0FBRixHQUFnQixLQUFLLENBSHJCOztBQUlBLElBQUlDLENBQUMsR0FBR1YsQ0FBQyxDQUFDLFFBQUQsQ0FBVDtBQUFBLElBQ0FXLENBQUMsR0FBR1gsQ0FBQyxDQUFDLE9BQUQsQ0FETDtBQUFBLElBRUFZLENBQUMsR0FBRyxZQUFXO0VBQ1gsU0FBU1osQ0FB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Q0FBSSxDQUFTWCxDQUFULEVBQVk7TUFDWjZFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0I5RSxDQUF4QixHQUNBRSxDQUFDLElBQUlBLENBQUMsQ0FBQyxJQUFELENBRE47SUFFSCxDQVhEOztJQVlBLEtBQUsyRyxRQUFMLEtBQWtCLEtBQUtBLFFBQUwsQ0FBY3RCLE9BQWQsQ0FBc0I3RSxDQUF0QixHQUEwQixLQUFLbUcsUUFBTCxDQUFjM0IsUUFBZCxDQUF1QnZFLENBQXZCLENBQTFCLEVBQXFELEtBQUtrRyxRQUFMLEdBQWdCLElBQXZGLEdBQ0EsS0FBS0EsUUFBTCxHQUFnQnhFLEVBQUUsQ0FBQzJFLGNBQUgsQ0FBa0I7TUFDOUJDLFFBQVEsRUFBRTtJQURvQixDQUFsQixDQURoQixFQUlBLEtBQUtKLFFBQUwsQ0FBY2pDLE9BQWQsQ0FBc0JqRSxDQUF0QixDQUpBLEVBS0EsS0FBS2tHLFFBQUwsQ0FBY3ZCLE1BQWQsQ0FBcUI1RSxDQUFyQixDQUxBLEVBTUEsS0FBS21HLFFBQUwsQ0FBY3hCLElBQWQsRUFOQTtFQU9ILENBMUtNLEVBMktQckYsQ0FBQyxDQUFDZ0IsU0FBRixDQUFZa0csWUFBWixHQUEyQixVQUFTbEgsQ0FBVCxFQUFZO0lBQ25DLEtBQUs2RyxRQUFMLElBQWlCLEtBQUtBLFFBQUwsQ0FBY00sYUFBZCxDQUE0QjtNQUN6Q0osSUFBSSxFQUFFL0c7SUFEbUMsQ0FBNUIsQ0FBakI7RUFHSCxDQS9LTSxFQWdMUEEsQ0FoTEE7QUFpTEgsQ0F2TEcsRUFGSjs7QUEwTEFJLENBQUMsQ0FBQ0ssV0FBRixHQUFnQkcsQ0FBaEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KSxcbm8uVml2b01hbmFnZXIgPSB2b2lkIDA7XG52YXIgYSA9IHQoXCJMb2dNZ3JcIiksXG5pID0gdChcIlVJTWdyXCIpLFxuciA9IGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lclRpbWUgPSAwLFxuICAgICAgICB0aGlzLnRyYWNrQXBwS2V5ID0gXCI2MDc4M2RmMDllNGU4YjZmNjE3MDQ2N2JcIixcbiAgICAgICAgdGhpcy5zaG93QWxlcnQgPSAhMFxuICAgIH1cbiAgICByZXR1cm4gdC5wcm90b3R5cGUueW91bWVuZ1RyYWNrID0gZnVuY3Rpb24oKSB7fSxcbiAgICB0LnByb3RvdHlwZS5nZXRDb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBcInh4eFwiXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5wYXVzZVJlY29yZCA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuY2xvc2VOYXRpdmVBZCA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuaGFzVmVyaWZ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIDFcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnRvQXBwU3RvcmUgPSBmdW5jdGlvbigpIHt9LFxuICAgIHQucHJvdG90eXBlLmFkZE5vdGlmeSA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUub3Blbk5vdGlmeSA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUubmVlZERvdXlWZWZpeSA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuaW50ZXJWZWZpeSA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuc2hvd05hdGl2ZSA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuaGlkZU5hdGl2ZSA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuc2hvd0ludGVyTmF0aXZlID0gZnVuY3Rpb24oKSB7fSxcbiAgICB0LnByb3RvdHlwZS5oaWRlSW50ZXJOYXRpdmUgPSBmdW5jdGlvbigpIHt9LFxuICAgIHQucHJvdG90eXBlLmNhblNob3dCdG5Nb3JlID0gZnVuY3Rpb24oKSB7fSxcbiAgICB0LnByb3RvdHlwZS5jYW5TaG93RW5lcmd5Rm9ydmVyVmVyc2lvbiA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuc2hvd0Zsb2F0SWNvbkFkID0gZnVuY3Rpb24oKSB7fSxcbiAgICB0LnByb3RvdHlwZS5oaWRlRmxvYXRJY29uQWQgPSBmdW5jdGlvbigpIHt9LFxuICAgIHQucHJvdG90eXBlLmNhbkNhcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEgMVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuYWRkU2hvcnRjdXQgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHFnLmluc3RhbGxTaG9ydGN1dCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIua3u+WKoOWIsOahjOmdou+8jOaWueS+v+S4i+asoeWQr+WKqFwiLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZSAmJiBlKFwi5qGM6Z2i5Zu+5qCH5re75Yqg5oiQ5YqfXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZSAmJiBlKFwi5qGM6Z2i5Zu+5qCH5re75Yqg5aSx6LSlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5jaGVja1Nob3J0Y3V0ID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBlICYmIGUoITApXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zaGFyZUltZyA9IGZ1bmN0aW9uKCkge30sXG4gICAgdC5wcm90b3R5cGUuZ2V0VXNlckluZm8gPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHQobnVsbCwgbnVsbClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnNob3dHYW1lUG9ydGFsQWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYS5Mb2dNZ3IuZ2V0SW5zdGFuY2UoKS5kZWJ1ZyhcIuabtOWkmua4uOaIj1wiKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0QWJOYW1lID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0KFwiQVwiKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuaW5pdFRyYWNrID0gZnVuY3Rpb24oKSB7fSxcbiAgICB0LnByb3RvdHlwZS5jYW5TaGFyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISAxXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5pbml0U2RrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuUGxhdGZvcm1JbmZvID0gcWcuZ2V0U3lzdGVtSW5mb1N5bmMoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGUgJiYgZSgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5wYXkgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGUgJiYgZSgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zaGFyZSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZSAmJiBlKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnNob3dCYW5uZXIgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHRoaXMuUGxhdGZvcm1JbmZvLnBsYXRmb3JtVmVyc2lvbkNvZGUgPj0gMTAzMSA/IERhdGUubm93KCkgLSB0aGlzLnNob3dCYW5uZXJUaW1lID49IDNlMyAmJiB0aGlzLmNyZWF0ZUJhbm5lcigpIDogZSAmJiBlKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmNyZWF0ZUJhbm5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBudWxsICE9IHRoaXMuQmFubmVyQWQgJiYgdGhpcy5oaWRlQmFubmVyKCksXG4gICAgICAgIHRoaXMuQmFubmVyQWQgPSBxZy5jcmVhdGVCYW5uZXJBZCh7XG4gICAgICAgICAgICBwb3NJZDogXCI3OGQ2MDYzMzIxZDk0M2Y3ODNhZTkwMmY3NjhlNDg5ZFwiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5QbGF0Zm9ybUluZm8uc2NyZWVuSGVpZ2h0IC0gMTcwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLlBsYXRmb3JtSW5mby5zY3JlZW5XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3MFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnNob3dCYW5uZXJUaW1lID0gdCxcbiAgICAgICAgdGhpcy5CYW5uZXJBZC5zaG93KCkudGhlbihmdW5jdGlvbigpIHt9KS5cbiAgICAgICAgY2F0Y2goZnVuY3Rpb24oKSB7fSksXG4gICAgICAgIHRoaXMuQmFubmVyQWQub25FcnJvcihmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBiYW5uZXIg5bm/5ZGK6ZSZ6K+vXCIsIHQuZXJyQ29kZSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmhpZGVCYW5uZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbnVsbCAhPSB0aGlzLkJhbm5lckFkICYmICh0aGlzLkJhbm5lckFkLmhpZGUoKSwgdGhpcy5CYW5uZXJBZC5kZXN0cm95KCksIHRoaXMuQmFubmVyQWQub2ZmRXJyb3IoKSlcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnNob3dJbnNlcnRBZCA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuUGxhdGZvcm1JbmZvLnBsYXRmb3JtVmVyc2lvbkNvZGUgPj0gMTAzMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvIDlp4vmmL7npLrmj5LlsY/op4bpopE9PT09PT09PT09PT09PlwiKTtcbiAgICAgICAgICAgIHZhciBvID0gcWcuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xuICAgICAgICAgICAgICAgIHBvc0lkOiBcIjRjNjUzZGU3ODQ2MjQxOTRiMWUyYjk4M2MyOGEwOTliXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgby5sb2FkKCksXG4gICAgICAgICAgICBvLm9uRXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgby5vZmZFcnJvcigpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG8ub25Mb2FkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG8ub2ZmTG9hZCgpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG8uc2hvdygpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZSAmJiBlKClcbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgY2F0Y2goZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5o+S5bGP5bm/5ZGK5bGV56S65aSx6LSlXCIsIEpTT04uc3RyaW5naWZ5KHQpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGUgJiYgZSgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zaG93VmlkZW9BZCA9IGZ1bmN0aW9uKHQsIGUsIG8pIHtcbiAgICAgICAgaWYgKHRoaXMuUGxhdGZvcm1JbmZvLnBsYXRmb3JtVmVyc2lvbkNvZGUgPj0gMTA0MSkge1xuICAgICAgICAgICAgdmFyIGEgPSBxZy5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xuICAgICAgICAgICAgICAgIHBvc0lkOiBcIjE1NTk3ZGYwYzQ3ODQ3YTk4NGY3MGVkMDg3ZGZiYTBiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYS5vbkVycm9yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG8gJiYgbygpLFxuICAgICAgICAgICAgICAgIGkuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkoVUlJRC5VSVRpcHMsIC0xLCBcIuayoeacieW5v+WRiu+8jOivt+eojeWQjumHjeivlVwiKSxcbiAgICAgICAgICAgICAgICBhLm9mZkVycm9yKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYS5vbkxvYWQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYS5zaG93KCkudGhlbihmdW5jdGlvbigpIHt9KS5cbiAgICAgICAgICAgICAgICBjYXRjaChmdW5jdGlvbigpIHt9KSxcbiAgICAgICAgICAgICAgICBhLm9mZkxvYWQoKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhLm9uQ2xvc2UoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHQgJiYgdC5pc0VuZGVkID8gZSAmJiBlKCEwKSA6IG8gJiYgbygpLFxuICAgICAgICAgICAgICAgIGEub2ZmQ2xvc2UoKSxcbiAgICAgICAgICAgICAgICBhLmxvYWQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIG8gJiYgbygpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5vdGhlckZ1biA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZSAmJiBlKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnNoYXJrID0gZnVuY3Rpb24odCkge1xuICAgICAgICAxID09IHQgPyBxZy52aWJyYXRlTG9uZygpIDogcWcudmlicmF0ZVNob3J0KClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnJlY29yZFZpZGVvID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBlICYmIGUoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuc2hhcmVWaWRlbyA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZSAmJiBlKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnN0b3BSZWNvcmRlck1hbmFnZXIgPSBmdW5jdGlvbigpIHt9LFxuICAgIHQucHJvdG90eXBlLnNldExhbmd1YWdlID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBlKCksXG4gICAgICAgIFwiemhcIlxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuaW5pdE5hdGl2ZUFkID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB2YXIgbyA9IHRoaXMsXG4gICAgICAgIGEgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWOn+eUn+W5v+WRiuWKoOi9vVwiLCB0LmFkTGlzdCksXG4gICAgICAgICAgICBlICYmIGUodC5hZExpc3QpLFxuICAgICAgICAgICAgdC5hZExpc3RbMF0gJiYgby5uYXRpdmVBZC5yZXBvcnRBZFNob3coe1xuICAgICAgICAgICAgICAgIGFkSWQ6IHQuYWRMaXN0WzBdLmFkSWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWOn+eUn+W5v+WRiuWKoOi9veWksei0pVwiLCB0KSxcbiAgICAgICAgICAgIGUgJiYgZShudWxsKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm5hdGl2ZUFkICYmICh0aGlzLm5hdGl2ZUFkLm9mZkxvYWQoYSksIHRoaXMubmF0aXZlQWQub2ZmRXJyb3IoaSksIHRoaXMubmF0aXZlQWQgPSBudWxsKSxcbiAgICAgICAgdGhpcy5uYXRpdmVBZCA9IHFnLmNyZWF0ZU5hdGl2ZUFkKHtcbiAgICAgICAgICAgIGFkVW5pdElkOiBcImFmM2VmN2Y3MTA0YzQ3NDJhNGVkYThlMWMzZGYwMTk5XCJcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMubmF0aXZlQWQub25FcnJvcihpKSxcbiAgICAgICAgdGhpcy5uYXRpdmVBZC5vbkxvYWQoYSksXG4gICAgICAgIHRoaXMubmF0aXZlQWQubG9hZCgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zaG93TmF0aXZlQWQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMubmF0aXZlQWQgJiYgdGhpcy5uYXRpdmVBZC5yZXBvcnRBZENsaWNrKHtcbiAgICAgICAgICAgIGFkSWQ6IHRcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHRcbn0gKCk7XG5vLlZpdm9NYW5hZ2VyID0gciJdfQ==