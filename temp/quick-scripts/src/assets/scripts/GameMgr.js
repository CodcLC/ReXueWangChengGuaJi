"use strict";
cc._RF.push(module, '0c4ecmtvD9H5a+Ua2aqA4F9', 'GameMgr');
// scripts/GameMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("UIMgr"),
    i = t("Utils"),
    r = t("Config"),
    n = t("DataMgr"),
    s = t("GoodsManager"),
    c = t("PlayerMgr"),
    l = function () {
  function t() {
    this.isAdddUp = !1, this.trudgeCount = 0;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.openHomeUI = function () {
    var t = r.UIID.UIHomeNew;
    a.UIMgr.getInstance().openUI(t, -1);
  }, t.prototype.refreshMysticalShopData = function () {
    for (var t = 0; t < 9; t++) {
      for (var e = [], o = n.DataMgr.getInstance().getMysticalShopCfg(), a = 0; a < o.length; a++) {
        if (o[a].Position == t + 1) {
          var r = {
            id: o[a].ID,
            weight: o[a].RefreshWeight
          };
          e.push(r);
        }
      }

      var l = i.Utils.weight_rand(e),
          u = n.DataMgr.getInstance().getMysticalShop(l.id),
          p = s["default"].getInstance().getGoodsCfgForGoodsType(u.GoodsID),
          g = {
        id: u.ID,
        itemId: Number(p[1]),
        isBuy: !1,
        videoCount: 0
      };
      c.PlayerMgr.getInstance().getMysticalShopData().refreshMysticalShopList(t, g);
    }
  }, t;
}();

o["default"] = l;

cc._RF.pop();