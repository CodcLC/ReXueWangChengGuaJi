"use strict";
cc._RF.push(module, 'fccd1EhGPVDqKI1bIooHQUB', 'UICompositeEnd');
// scripts/UICompositeEnd.js

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
});

var n = t("BaseUI"),
    s = t("AudioMgr"),
    c = t("Utils"),
    l = t("Config"),
    u = t("DataMgr"),
    p = t("EquipMgr"),
    g = cc._decorator,
    d = g.ccclass,
    h = g.property,
    f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.SpUp = null, e.SpDown = null, e.BtnContinue = null, e.NodeEquip = null, e.NodeStar = null, e.LabName = null, e.LayoutProp = null, e.LayoutNodeProp = null, e.curEquipData = null, e.callbackEnd = null, e;
  }

  return i(e, t), e.prototype.init = function (t, e) {
    this.curEquipData = t, this.callbackEnd = e;
  }, e.prototype.start = function () {
    this.registerBtnEvent(), this.initView();
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnContinue.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView();
    });
  }, e.prototype.initData = function () {}, e.prototype.initView = function () {
    var t = this;
    s.AudioMgr.getInstance().playEffect(l.AudioId.Sound_Victory);

    for (var e = this.curEquipData.starLevel ? this.curEquipData.starLevel : 1, o = 0; o < this.NodeStar.childrenCount; o++) {
      e > o ? cc.isValid(this.NodeStar.children[o]) && (this.NodeStar.children[o].getChildByName("SpStar").active = !0) : cc.isValid(this.NodeStar.children[o]) && (this.NodeStar.children[o].getChildByName("SpStar").active = !1);
    }

    var a = u.DataMgr.getInstance().getEquipCfg(this.curEquipData.id);

    if (this.loadSpriteFrame(a.bundleQuality, a.iconQuality, function (e) {
      t.NodeEquip.getComponent(cc.Sprite).spriteFrame = e;
    }), this.loadSpriteFrame(a.bundle, a.equipIcon, function (e) {
      t.NodeEquip.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = e;
    }), this.LabName.string = a.equipName, a.LvAtk) {
      var i = c.Utils.getTabelArr(a.atk),
          r = c.Utils.getTabelArr(a.LvAtk),
          n = ["0", "0"];

      if (this.curEquipData.starLevel && this.curEquipData.starLevel > 0) {
        var p = u.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel);
        n = c.Utils.getTabelArr(p.atk);
      }

      var g = Number(i[0]) + Number(r[0]) * this.curEquipData.strengthenLv + Number(n[0]),
          d = Number(i[1]) + Number(r[1]) * this.curEquipData.strengthenLv + Number(n[1]),
          h = this.LayoutProp.getChildByName("LayoutProp1");
      cc.isValid(h) || ((h = cc.instantiate(this.LayoutNodeProp)).parent = this.LayoutProp, h.name = "LayoutProp1"), h.getChildByName("LabProp").getComponent(cc.RichText).string = "<color=#ffffff>攻击力：</c><color=#3bacf3>" + g + "~" + d + "</color>", this.loadPropChange(8, h);
    }

    if (a.LvHp) {
      var f = this.curEquipData.starLevel ? u.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).hp : 0;
      this.addPropNode(9, a.hp + a.LvHp * this.curEquipData.strengthenLv + f);
    }

    a.atkSpeed && (f = this.curEquipData.starLevel ? u.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).atkSpeed : 0, this.addPropNode(3, a.atkSpeed + f)), a.atkCrazyProb && (f = this.curEquipData.starLevel ? u.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).atkCrazyProb : 0, this.addPropNode(4, a.atkCrazyProb + f)), a.atkCrazyHurt && (f = this.curEquipData.starLevel ? u.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).atkCrazyHurt : 0, this.addPropNode(5, a.atkCrazyHurt + f)), a.subHurt && (f = this.curEquipData.starLevel ? u.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).subHurt : 0, this.addPropNode(6, a.subHurt + f)), a.dodgeHurtProb && (f = this.curEquipData.starLevel ? u.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel).dodgeHurtProb : 0, this.addPropNode(7, a.dodgeHurtProb + f));
  }, e.prototype.addPropNode = function (t, e) {
    var o = this.LayoutProp.getChildByName("LayoutProp" + t);
    cc.isValid(o) || ((o = cc.instantiate(this.LayoutNodeProp)).parent = this.LayoutProp, o.name = "LayoutProp" + t);
    var a = p["default"].getInstance().getPropNameForPropType(t);
    o.getChildByName("LabProp").getComponent(cc.RichText).string = "<color=#ffffff>" + a + "：</c><color=#3bacf3>" + e + p["default"].getInstance().getPropPercent(t) + "</color>", this.loadPropChange(t, o);
  }, e.prototype.loadPropChange = function (t, e) {
    var o = e.getChildByName("SpChange"),
        a = e.getChildByName("LabChange");

    if (cc.isValid(o) && cc.isValid(a)) {
      var i = 0,
          r = u.DataMgr.getInstance().getEquipStarCfg(this.curEquipData.id, this.curEquipData.starLevel);

      if (8 == t) {
        var n = c.Utils.getTabelArr(r.atk);
        i = (Number(n[1]) + Number(n[0])) / 2 - 0;
      } else 9 == t ? i = r.hp - 0 : 3 == t ? i = r.atkSpeed - 0 : 4 == t ? i = r.atkCrazyProb - 0 : 5 == t ? i = r.atkCrazyHurt - 0 : 6 == t ? i = r.subHurt - 0 : 7 == t && (i = r.dodgeHurtProb - 0);

      0 == i ? (o.active = !1, a.active = !1) : (o.getComponent(cc.Sprite).spriteFrame = i > 0 ? this.SpUp : this.SpDown, a.color = i > 0 ? cc.color(64, 220, 47) : cc.color(246, 47, 0), a.getComponent(cc.Label).string = "" + Math.ceil(Math.abs(i)));
    } else console.log("不存在！！！");
  }, e.prototype.closeView = function () {
    this.callbackEnd && this.callbackEnd(), this.closeUI();
  }, r([h(cc.SpriteFrame)], e.prototype, "SpUp", void 0), r([h(cc.SpriteFrame)], e.prototype, "SpDown", void 0), r([h(cc.Node)], e.prototype, "BtnContinue", void 0), r([h(cc.Node)], e.prototype, "NodeEquip", void 0), r([h(cc.Node)], e.prototype, "NodeStar", void 0), r([h(cc.Label)], e.prototype, "LabName", void 0), r([h(cc.Node)], e.prototype, "LayoutProp", void 0), r([h({
    type: cc.Node,
    tooltip: "属性节点"
  })], e.prototype, "LayoutNodeProp", void 0), r([d], e);
}(n["default"]);

o["default"] = f;

cc._RF.pop();