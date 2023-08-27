"use strict";
cc._RF.push(module, '8d537Ug8g5OLKw2AZ9crKno', 'NodeDropGoods');
// scripts/NodeDropGoods.js

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
}),
    r = void 0 && (void 0).__decorate || function (t, e, o, a) {
  var i,
      r = arguments.length,
      n = r < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, a);else for (var s = t.length - 1; s >= 0; s--) {
    (i = t[s]) && (n = (r < 3 ? i(n) : r > 3 ? i(e, o, n) : i(e, o)) || n);
  }
  return r > 3 && n && Object.defineProperty(e, o, n), n;
};

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.EnumGoodsType = void 0;

var n = t("AudioMgr"),
    s = t("PoolMgr"),
    c = t("ResourceMgr"),
    l = t("Main"),
    u = t("Config"),
    p = t("DataMgr"),
    g = t("PlayerMgr"),
    d = t("TaskMgr"),
    h = cc._decorator,
    f = h.ccclass,
    m = h.property,
    y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.LabCount = null, e.curtween = null, e;
  }

  return i(e, t), e.prototype.start = function () {}, e.prototype.initData = function (t, e) {
    this.dropGoodsData = t, this.node.setPosition(e), this.dealGoodsForCare(), this.autoDrop();
  }, e.prototype.dealGoodsForCare = function () {
    var t,
        e = this;

    switch (this.dropGoodsData.goodsType) {
      case "gold":
      case "inGot":
      case "power":
        t = p.DataMgr.getInstance().getGoodsCfg(this.dropGoodsData.goodsId), this.node.scale = .5, this.LabCount.node.scale = 2, this.node.getChildByName("LabName").active = !1, this.node.getChildByName("LabCount").scale = 2, c.ResourceMgr.getInstance().loadSpriteframe(t.bundle, t.goodsGameIcon, function (t) {
          e.node.getComponent(cc.Sprite).spriteFrame = t;
        });
        break;

      case "equip":
        t = p.DataMgr.getInstance().getEquipCfg(this.dropGoodsData.goodsId), this.node.scale = 1, this.node.getChildByName("LabName").active = !1, c.ResourceMgr.getInstance().loadSpriteframe(t.bundle, t.equipIcon, function (t) {
          e.node.getComponent(cc.Sprite).spriteFrame = t;
        });
        break;

      case "skillBook":
        t = p.DataMgr.getInstance().getSkillBook(this.dropGoodsData.goodsId), p.DataMgr.getInstance().getSkillQuality(t.qualityId), this.node.scale = .5, this.node.getChildByName("LabName").getComponent(cc.Label).string = t.name, g.PlayerMgr.getInstance().getTrackData().getAbType(), c.ResourceMgr.getInstance().loadSpriteframe("iconImg", t.SkillIcon, function (t) {
          e.node.getComponent(cc.Sprite).spriteFrame = t;
        }), this.node.getChildByName("LabName").active = !1;
    }

    this.dropGoodsData.iCount <= 1 ? this.LabCount.node.active = !1 : (this.LabCount.node.active = !0, this.LabCount.string = "+" + this.dropGoodsData.iCount);
  }, e.prototype.autoDrop = function () {
    var t = this;
    this.curtween = cc.tween(this.node).bezierBy(.5, cc.v2(), cc.v2(20, 200), cc.v2(40, 0)).delay(.5).call(function () {
      t.autoRecycle();
    }).start();
  }, e.prototype.autoRecycle = function () {
    var t = this,
        e = cc.v3();
    l["default"].instance.player && cc.isValid(l["default"].instance.player.object) && (e = cc.v3(l["default"].instance.player.object.x, 150, 0)), this.curtween && (this.curtween.stop(), this.curtween = null), n.AudioMgr.getInstance().playEffect(u.AudioId.BattleSound_PickUpThings), this.curtween = cc.tween(this.node).to(.5, {
      position: e
    }).call(function () {
      t.addToPool(t.node, "NodeDropGoods"), t.curtween = null;
    }).start();
  }, e.prototype.recycleGoods = function () {
    var t = g.PlayerMgr.getInstance().geUserData();

    switch (this.dropGoodsData.goodsType) {
      case "gold":
        t.addGoldNum(this.dropGoodsData.iCount);
        break;

      case "inGot":
        t.addInGotNum(this.dropGoodsData.iCount);
        break;

      case "power":
        t.addPowerNum(this.dropGoodsData.iCount);
        break;

      case "equip":
        t.addEquipForId(this.dropGoodsData.goodsId), d["default"].getInstance().addEquipCountForTask();
        break;

      case "skillBook":
        t.addSkillBookId(this.dropGoodsData.goodsId), d["default"].getInstance().addSkillBookCountForTask();
    }
  }, e.prototype.addToPool = function (t, e) {
    cc.isValid(t) && s.PoolMgr.getInstance().freeNode(e, t);
  }, r([m(cc.Label)], e.prototype, "LabCount", void 0), r([f], e);
}(cc.Component);

o["default"] = y, function (t) {
  t.EnumGold = "gold", t.EnumInGot = "inGot", t.EnumEquip = "equip", t.EnumSkillBook = "skillBook", t.EnumSalutation = "salutation";
}(o.EnumGoodsType || (o.EnumGoodsType = {}));

cc._RF.pop();