
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PlayerMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a031fojBN1NlYGcg1sGyLFU', 'PlayerMgr');
// scripts/PlayerMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.PlayerMgr = o.ABTestType = void 0;
var a = t("CommonModel"),
    i = t("Appcfg"),
    r = t("EventMgr"),
    n = t("LogMgr"),
    s = t("Config"),
    c = t("GuideData"),
    l = t("MainTaskData"),
    u = t("MysticalShopData"),
    p = t("ShareData"),
    g = t("TrackData"),
    d = t("UserData"),
    h = t("DataMgr");

(function (t) {
  t[t.NO_AB = 0] = "NO_AB", t[t.AB_Test = 1] = "AB_Test", t[t.ABD_Test = 2] = "ABD_Test", t[t.A_fixed = 3] = "A_fixed", t[t.B_fixed = 4] = "B_fixed", t[t.D_fixed = 5] = "D_fixed", t[t.AD_Test = 6] = "AD_Test";
})(o.ABTestType || (o.ABTestType = {}));

var f = function () {
  function t() {
    this.isLoaded = !1;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t(), this.instance.initData()), this.instance;
  }, t.prototype.initData = function () {
    a.CommonModel.Instance().setGameBrige(this);
  }, t.prototype.preload = function () {
    this.isLoaded || (this.isLoaded = !0, this.guideData = new c.GuideData(), this.guideData.getData(), this.udata = new d.UserData(), this.udata.getData(), this.trackData = new g.TrackData(), this.trackData.getData(), this.trackData.getSdkAbName(s.GameConfig.abTestType, function (t) {
      n.LogMgr.getInstance().debug("用户类型：" + t, ""), h.DataMgr.getInstance().reloadConfig(t, function () {
        r.EventMgr.getInstance().emit(i.BaseEventName.Loading, i.LoadingProcess.PlayerCfg);
      });
    }), this.shareData = new p.ShareData(), this.shareData.getData(), this.mysticalShopData = new u.MysticalShopData(), this.mysticalShopData.getData(), this.mainTaskData = new l.MainTaskData(), this.mainTaskData.getData());
  }, t.prototype.getAbType = function () {
    return this.trackData.getAbType();
  }, t.prototype.getGuideData = function () {
    return this.guideData;
  }, t.prototype.geUserData = function () {
    return this.udata;
  }, t.prototype.getTrackData = function () {
    return this.trackData;
  }, t.prototype.getShareData = function () {
    return this.shareData;
  }, t.prototype.getMysticalShopData = function () {
    return this.mysticalShopData;
  }, t.prototype.getMainTaskData = function () {
    return this.mainTaskData;
  }, t.prototype.addRewards = function (t, e) {
    void 0 === e && (e = 1);

    for (var o = t.split(s.GameConfig.splitCount), i = 0; i < o.length; i++) {
      if (!(o[i].length <= 0)) {
        var r = o[i].split(s.GameConfig.splitNum),
            n = Number(r[0]),
            c = Number(r[1]) * e;
        a.CommonModel.Instance().addReward(n, c, !0);
      }
    }
  }, t.prototype.addComReward = function (t, e) {
    void 0 === e && (e = 1);
  }, t.prototype.subGoodsNum = function (e, o) {
    var a = t.getInstance().geUserData();
    if (1 == e) return a.subGoldNum(o);
  }, t;
}();

o.PlayerMgr = f;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyTWdyLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlBsYXllck1nciIsIkFCVGVzdFR5cGUiLCJhIiwiaSIsInIiLCJuIiwicyIsImMiLCJsIiwidSIsInAiLCJnIiwiZCIsImgiLCJOT19BQiIsIkFCX1Rlc3QiLCJBQkRfVGVzdCIsIkFfZml4ZWQiLCJCX2ZpeGVkIiwiRF9maXhlZCIsIkFEX1Rlc3QiLCJmIiwiaXNMb2FkZWQiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwiaW5pdERhdGEiLCJwcm90b3R5cGUiLCJDb21tb25Nb2RlbCIsIkluc3RhbmNlIiwic2V0R2FtZUJyaWdlIiwicHJlbG9hZCIsImd1aWRlRGF0YSIsIkd1aWRlRGF0YSIsImdldERhdGEiLCJ1ZGF0YSIsIlVzZXJEYXRhIiwidHJhY2tEYXRhIiwiVHJhY2tEYXRhIiwiZ2V0U2RrQWJOYW1lIiwiR2FtZUNvbmZpZyIsImFiVGVzdFR5cGUiLCJMb2dNZ3IiLCJkZWJ1ZyIsIkRhdGFNZ3IiLCJyZWxvYWRDb25maWciLCJFdmVudE1nciIsImVtaXQiLCJCYXNlRXZlbnROYW1lIiwiTG9hZGluZyIsIkxvYWRpbmdQcm9jZXNzIiwiUGxheWVyQ2ZnIiwic2hhcmVEYXRhIiwiU2hhcmVEYXRhIiwibXlzdGljYWxTaG9wRGF0YSIsIk15c3RpY2FsU2hvcERhdGEiLCJtYWluVGFza0RhdGEiLCJNYWluVGFza0RhdGEiLCJnZXRBYlR5cGUiLCJnZXRHdWlkZURhdGEiLCJnZVVzZXJEYXRhIiwiZ2V0VHJhY2tEYXRhIiwiZ2V0U2hhcmVEYXRhIiwiZ2V0TXlzdGljYWxTaG9wRGF0YSIsImdldE1haW5UYXNrRGF0YSIsImFkZFJld2FyZHMiLCJzcGxpdCIsInNwbGl0Q291bnQiLCJsZW5ndGgiLCJzcGxpdE51bSIsIk51bWJlciIsImFkZFJl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Q29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSksXG5vLlBsYXllck1nciA9IG8uQUJUZXN0VHlwZSA9IHZvaWQgMDtcbnZhciBhID0gdChcIkNvbW1vbk1vZGVsXCIpLFxuaSA9IHQoXCJBcHBjZmdcIiksXG5yID0gdChcIkV2ZW50TWdyXCIpLFxubiA9IHQoXCJMb2dNZ3JcIiksXG5zID0gdChcIkNvbmZpZ1wiKSxcbmMgPSB0KFwiR3VpZGVEYXRhXCIpLFxubCA9IHQoXCJNYWluVGFza0RhdGFcIiksXG51ID0gdChcIk15c3RpY2FsU2hvcERhdGFcIiksXG5wID0gdChcIlNoYXJlRGF0YVwiKSxcbmcgPSB0KFwiVHJhY2tEYXRhXCIpLFxuZCA9IHQoXCJVc2VyRGF0YVwiKSxcbmggPSB0KFwiRGF0YU1nclwiKTsgKGZ1bmN0aW9uKHQpIHtcbiAgICB0W3QuTk9fQUIgPSAwXSA9IFwiTk9fQUJcIixcbiAgICB0W3QuQUJfVGVzdCA9IDFdID0gXCJBQl9UZXN0XCIsXG4gICAgdFt0LkFCRF9UZXN0ID0gMl0gPSBcIkFCRF9UZXN0XCIsXG4gICAgdFt0LkFfZml4ZWQgPSAzXSA9IFwiQV9maXhlZFwiLFxuICAgIHRbdC5CX2ZpeGVkID0gNF0gPSBcIkJfZml4ZWRcIixcbiAgICB0W3QuRF9maXhlZCA9IDVdID0gXCJEX2ZpeGVkXCIsXG4gICAgdFt0LkFEX1Rlc3QgPSA2XSA9IFwiQURfVGVzdFwiXG59KShvLkFCVGVzdFR5cGUgfHwgKG8uQUJUZXN0VHlwZSA9IHt9KSk7XG52YXIgZiA9IGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSAhMVxuICAgIH1cbiAgICByZXR1cm4gdC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0aGlzLmluc3RhbmNlICYmICh0aGlzLmluc3RhbmNlID0gbmV3IHQsIHRoaXMuaW5zdGFuY2UuaW5pdERhdGEoKSksXG4gICAgICAgIHRoaXMuaW5zdGFuY2VcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmluaXREYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGEuQ29tbW9uTW9kZWwuSW5zdGFuY2UoKS5zZXRHYW1lQnJpZ2UodGhpcylcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRlZCB8fCAodGhpcy5pc0xvYWRlZCA9ICEwLCB0aGlzLmd1aWRlRGF0YSA9IG5ldyBjLkd1aWRlRGF0YSwgdGhpcy5ndWlkZURhdGEuZ2V0RGF0YSgpLCB0aGlzLnVkYXRhID0gbmV3IGQuVXNlckRhdGEsIHRoaXMudWRhdGEuZ2V0RGF0YSgpLCB0aGlzLnRyYWNrRGF0YSA9IG5ldyBnLlRyYWNrRGF0YSwgdGhpcy50cmFja0RhdGEuZ2V0RGF0YSgpLCB0aGlzLnRyYWNrRGF0YS5nZXRTZGtBYk5hbWUocy5HYW1lQ29uZmlnLmFiVGVzdFR5cGUsXG4gICAgICAgIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIG4uTG9nTWdyLmdldEluc3RhbmNlKCkuZGVidWcoXCLnlKjmiLfnsbvlnovvvJpcIiArIHQsIFwiXCIpLFxuICAgICAgICAgICAgaC5EYXRhTWdyLmdldEluc3RhbmNlKCkucmVsb2FkQ29uZmlnKHQsXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByLkV2ZW50TWdyLmdldEluc3RhbmNlKCkuZW1pdChpLkJhc2VFdmVudE5hbWUuTG9hZGluZywgaS5Mb2FkaW5nUHJvY2Vzcy5QbGF5ZXJDZmcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSwgdGhpcy5zaGFyZURhdGEgPSBuZXcgcC5TaGFyZURhdGEsIHRoaXMuc2hhcmVEYXRhLmdldERhdGEoKSwgdGhpcy5teXN0aWNhbFNob3BEYXRhID0gbmV3IHUuTXlzdGljYWxTaG9wRGF0YSwgdGhpcy5teXN0aWNhbFNob3BEYXRhLmdldERhdGEoKSwgdGhpcy5tYWluVGFza0RhdGEgPSBuZXcgbC5NYWluVGFza0RhdGEsIHRoaXMubWFpblRhc2tEYXRhLmdldERhdGEoKSlcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldEFiVHlwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFja0RhdGEuZ2V0QWJUeXBlKClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldEd1aWRlRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ndWlkZURhdGFcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdlVXNlckRhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWRhdGFcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldFRyYWNrRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFja0RhdGFcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldFNoYXJlRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGFyZURhdGFcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldE15c3RpY2FsU2hvcERhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXlzdGljYWxTaG9wRGF0YVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0TWFpblRhc2tEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1haW5UYXNrRGF0YVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuYWRkUmV3YXJkcyA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gMSk7XG4gICAgICAgIGZvciAodmFyIG8gPSB0LnNwbGl0KHMuR2FtZUNvbmZpZy5zcGxpdENvdW50KSwgaSA9IDA7IGkgPCBvLmxlbmd0aDsgaSsrKSBpZiAoISAob1tpXS5sZW5ndGggPD0gMCkpIHtcbiAgICAgICAgICAgIHZhciByID0gb1tpXS5zcGxpdChzLkdhbWVDb25maWcuc3BsaXROdW0pLFxuICAgICAgICAgICAgbiA9IE51bWJlcihyWzBdKSxcbiAgICAgICAgICAgIGMgPSBOdW1iZXIoclsxXSkgKiBlO1xuICAgICAgICAgICAgYS5Db21tb25Nb2RlbC5JbnN0YW5jZSgpLmFkZFJld2FyZChuLCBjLCAhMClcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuYWRkQ29tUmV3YXJkID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSAxKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuc3ViR29vZHNOdW0gPSBmdW5jdGlvbihlLCBvKSB7XG4gICAgICAgIHZhciBhID0gdC5nZXRJbnN0YW5jZSgpLmdlVXNlckRhdGEoKTtcbiAgICAgICAgaWYgKDEgPT0gZSkgcmV0dXJuIGEuc3ViR29sZE51bShvKVxuICAgIH0sXG4gICAgdFxufSAoKTtcbm8uUGxheWVyTWdyID0gZiJdfQ==