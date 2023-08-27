"use strict";
cc._RF.push(module, 'd0c2cY/ROZDxLAJUQBp7rUC', 'LadleWordMgr');
// scripts/LadleWordMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("PoolMgr"),
    i = t("ResourceMgr"),
    r = function () {
  function t() {}

  return t.LabLoad = function (t, e, o, r, n, s, c) {
    var l = this;

    if (void 0 === r && (r = 60), cc.isValid(t)) {
      var u = a.PoolMgr.getInstance().getNode("LabLadleWord");

      if (u) {
        u.parent = t, u.opacity = 255, e && u.setPosition(cc.v2(e.x, e.y + r));
        var p = u.getChildByName("labStr");
        o && (p.getComponent(cc.Label).string = o), n && (p.getComponent(cc.Label).fontSize = n), s && (p.color = s), this.LadEff(u), c && c();
      } else console.log("动态加载"), i.ResourceMgr.getInstance().loadRes("prefabs", "widget/LabLadleWord", cc.Prefab, function (a) {
        (u = cc.instantiate(a)).parent = t, u.opacity = 255, e && u.setPosition(e);
        var i = u.getChildByName("labStr");
        o && (i.getComponent(cc.Label).string = o), n && (i.getComponent(cc.Label).fontSize = n), s && (i.color = s), l.LadEff(u), c && c();
      });
    } else console.log("瓢字父节点不存在！！！");
  }, t.LabLoadForSkill = function (t, e, o, r, n, s, c) {
    var l = this;

    if (void 0 === r && (r = 60), cc.isValid(t)) {
      var u = a.PoolMgr.getInstance().getNode("LabLadleWord");

      if (u) {
        u.parent = t, u.opacity = 127, u.scale = 3.5, e && u.setPosition(cc.v2(e.x, e.y + r));
        var p = u.getChildByName("labStr");
        o && (p.getComponent(cc.Label).string = o), n && (p.getComponent(cc.Label).fontSize = n), s && (p.color = s), this.LadEffForSkill(u), c && c();
      } else console.log("动态加载"), i.ResourceMgr.getInstance().loadRes("prefabs", "widget/LabLadleWord", cc.Prefab, function (a) {
        (u = cc.instantiate(a)).parent = t, u.opacity = 127, u.scale = 3.5, e && u.setPosition(e);
        var i = u.getChildByName("labStr");
        o && (i.getComponent(cc.Label).string = o), n && (i.getComponent(cc.Label).fontSize = n), s && (i.color = s), l.LadEffForSkill(u), c && c();
      });
    } else console.log("瓢字父节点不存在！！！");
  }, t.LadEff = function (t) {
    var e = this;
    cc.isValid(t) && cc.tween(t).parallel(cc.tween().by(1, {
      y: 50
    }), cc.tween().to(1, {
      opacity: 0
    })).call(function () {
      e.LabPool("LabLadleWord", t);
    }).start();
  }, t.LadEffForSkill = function (t) {
    var e = this;
    cc.isValid(t) && cc.tween(t).parallel(cc.tween().to(.1, {
      opacity: 255
    }), cc.tween().to(.1, {
      scale: 1.2
    })).delay(.6).parallel(cc.tween().to(.3, {
      opacity: 0
    }), cc.tween().to(.3, {
      scale: 4
    })).call(function () {
      e.LabPool("LabLadleWord", t);
    }).start();
  }, t.LabPool = function (t, e) {
    cc.isValid(e) && (e.opacity = 255, e.scale = 1, a.PoolMgr.getInstance().freeNode(t, e));
  }, t.height_ladleWord = {
    height_type: 75,
    height_number: 35,
    hegiht_skill: 115
  }, t;
}();

o["default"] = r;

cc._RF.pop();