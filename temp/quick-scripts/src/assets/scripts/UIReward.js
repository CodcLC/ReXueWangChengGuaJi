"use strict";
cc._RF.push(module, 'ce127ZVqwlHa50pVzn6oYN+', 'UIReward');
// scripts/UIReward.js

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
    c = t("CommonCfg"),
    l = t("ComDataMgr"),
    u = t("ComPlayerMgr"),
    p = cc._decorator,
    g = p.ccclass,
    d = p.property,
    h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.root = null, e.btnOk = null, e.num = null, e.icon = null, e.quanLight = null, e.muiltNode = null, e.item = null, e.addCollection = !0, e;
  }

  return i(e, t), e.prototype.init = function (t, e, o) {
    if (void 0 === o && (o = !0), -1 != t.indexOf(c.CommonCfg.splitNum)) {
      if (this.rewardStr = t, 1 == this.rewardStr.split(c.CommonCfg.splitCount).length) {
        var a = this.rewardStr.split(c.CommonCfg.splitNum);
        this.rewardId = Number(a[0]), this.rewardNum = Number(a[1]), this.rewardStr = null;
      }
    } else this.rewardId = Number(t);

    this.rewardNum = e, this.addCollection = o, s.AudioMgr.getInstance().playEffect(c.ComAudioId.reward);
  }, e.prototype.start = function () {
    var t = this;

    if (this.btnOk.on(cc.Node.EventType.TOUCH_END, function () {
      var e = t.rewardStr;
      null == e && (e = t.rewardId + c.CommonCfg.splitNum + t.rewardNum), u.ComPlayerMgr.getInstance().addReward(e, 1, t.addCollection), t.closeUI();
    }), null == this.rewardStr) {
      this.muiltNode.active = !1;
      var e = l.ComDataMgr.getInstance().getGoodsById(this.rewardId);
      this.loadSpriteFrame(e.bundleName, e.rewardIcon, function (e) {
        t.icon.spriteFrame = e;
      }), 1 == e.rewardtype ? this.num.string = "+" + this.rewardNum : this.num.string = e.name;
    } else {
      this.muiltNode.active = !0;

      for (var o = this.rewardStr.split(c.CommonCfg.splitCount), a = function a(t) {
        var e = cc.instantiate(i.item);
        e.parent = i.muiltNode;
        var a = o[t].split(c.CommonCfg.splitNum),
            r = Number(a[0]),
            n = Number(a[1]);
        e.active = !0;
        var s = e.getChildByName("icon").getComponent(cc.Sprite),
            u = e.getChildByName("num").getComponent(cc.Label),
            p = l.ComDataMgr.getInstance().getGoodsById(r);
        i.loadSpriteFrame(p.bundleName, p.rewardIcon, function (t) {
          s.spriteFrame = t;
        }), 1 == p.rewardtype ? u.string = "+" + n : u.string = p.name;
      }, i = this, r = 0; r < o.length; r++) {
        a(r);
      }
    }

    this.root.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, function () {
      t.quanLight.opacity = 225, t.quanLight.active = !0, cc.tween(t.quanLight).by(.2, {
        angle: 10
      }).repeatForever().start();
    });
  }, e.prototype.onClose = function () {
    s.AudioMgr.getInstance().stopEffect();
  }, r([d(cc.Node)], e.prototype, "root", void 0), r([d(cc.Node)], e.prototype, "btnOk", void 0), r([d(cc.Label)], e.prototype, "num", void 0), r([d(cc.Sprite)], e.prototype, "icon", void 0), r([d(cc.Node)], e.prototype, "quanLight", void 0), r([d(cc.Node)], e.prototype, "muiltNode", void 0), r([d(cc.Node)], e.prototype, "item", void 0), r([g], e);
}(n["default"]);

o["default"] = h;

cc._RF.pop();