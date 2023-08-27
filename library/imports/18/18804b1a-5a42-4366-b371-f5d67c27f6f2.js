"use strict";
cc._RF.push(module, '18804saWkJDZrNx9dZ8J/by', 'MysticalShopData');
// scripts/MysticalShopData.js

"use strict";

var t = require;
var e = module;
var o = exports;

var _a,
    i = void 0 && (void 0).__extends || (_a = function a(t, e) {
  return (_a = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var o in e) {
      Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
  })(t, e);
}, function (t, e) {
  function o() {
    this.constructor = t;
  }

  _a(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.MysticalItemData = o.MysticalShopData = void 0;

var r = t("BaseData"),
    n = t("TimeUtils"),
    s = t("Config"),
    c = t("GameMgr"),
    l = function l() {
  this.lastLoginTime = 0, this.mysticalShopTime = 86400, this.mysticalShopList = [];
},
    u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.ecrypt = !1, e.gameKey = s.GameConfig.AppCacheName + "MysticalShopData", e.isNewUser = !1, e;
  }

  return i(e, t), e.prototype.createData = function () {
    return this.data = new l(), this.data;
  }, e.prototype.initData = function (t) {
    t && (this.isNewUser = !0);
  }, e.prototype.getIsNewUser = function () {
    return this.isNewUser;
  }, e.prototype.getLastLoginTime = function () {
    return null == this.data.lastLoginTime && (this.data.lastLoginTime = 0), this.data.lastLoginTime;
  }, e.prototype.refreshLastLoginTime = function () {
    var t = n.TimeUtils.GetTimeBySecond();
    this.data.lastLoginTime = t, this.saveData();
  }, e.prototype.getMysticalShopTime = function () {
    return null == this.data.mysticalShopTime && (this.data.mysticalShopTime = 86400), this.data.mysticalShopTime;
  }, e.prototype.subMysticalShopTime = function (t) {
    null == this.data.mysticalShopTime && (this.data.mysticalShopTime = 86400), t <= 0 || (this.data.mysticalShopTime -= t, this.data.mysticalShopTime <= 0 && c["default"].getInstance().refreshMysticalShopData(), this.saveData());
  }, e.prototype.setMysticalShopTime = function (t) {
    null == this.data.mysticalShopTime && (this.data.mysticalShopTime = 86400), this.data.mysticalShopTime = t, this.saveData();
  }, e.prototype.getMysticalShopList = function () {
    return null == this.data.mysticalShopList && (this.data.mysticalShopList = []), this.data.mysticalShopList;
  }, e.prototype.addMysticalShopList = function (t) {
    null == this.data.mysticalShopList && (this.data.mysticalShopList = []), this.data.mysticalShopList.push(t), this.saveData();
  }, e.prototype.setMysticalShopList = function (t, e, o) {
    void 0 === o && (o = 0), null == this.data.mysticalShopList && (this.data.mysticalShopList = []);

    for (var a = 0; a < this.data.mysticalShopList.length; a++) {
      if (this.data.mysticalShopList[a].id == t) return this.data.mysticalShopList[a].isBuy = e, this.data.mysticalShopList[a].videoCount = o, void this.saveData();
    }
  }, e.prototype.refreshMysticalShopList = function (t, e) {
    null == this.data.mysticalShopList && (this.data.mysticalShopList = []), this.data.mysticalShopList[t] = e, this.saveData();
  }, e;
}(r.BaseData);

o.MysticalShopData = u;

o.MysticalItemData = function () {};

cc._RF.pop();