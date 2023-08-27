"use strict";
cc._RF.push(module, 'aae7eHiIrFCo5ETBFbubB5c', 'EffectMgr');
// scripts/EffectMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("PoolMgr"),
    i = t("ResourceMgr"),
    r = t("Utils"),
    n = t("DataMgr"),
    s = function () {
  function t() {}

  return t.playEff = function (t, e, o, r, n, s, c, l, u) {
    var p = this;

    if (void 0 === c && (c = 0), void 0 === l && (l = 0), void 0 === u && (u = 0), r) {
      var g = a.PoolMgr.getInstance().getNode(o);
      g ? (cc.isValid(n) && (g.parent = n), s && g.setPosition(cc.v2(s.x, s.y + c)), g.zIndex = u, g.getComponent(sp.Skeleton).setAnimation(0, r, !1), g.getComponent(sp.Skeleton).setCompleteListener(function () {
        p.recycleNodeEff(g, o);
      })) : (console.log("动态加载"), i.ResourceMgr.getInstance().loadRes(t, e, cc.Prefab, function (t) {
        g = cc.instantiate(t), cc.isValid(n) && (g.parent = n), s && g.setPosition(cc.v2(s.x, s.y + c)), g.zIndex = u, g.getComponent(sp.Skeleton).setCompleteListener(function () {
          p.recycleNodeEff(g, o);
        });
      }));
    }
  }, t.playEffectForEffId = function (t, e, o, s, c, l, u, p, g) {
    var d = this;
    void 0 === o && (o = null), void 0 === s && (s = 0), void 0 === c && (c = 0), void 0 === l && (l = 0), void 0 === u && (u = 1), void 0 === p && (p = 1), void 0 === g && (g = function g() {});
    var h = n.DataMgr.getInstance().getEffectCfg(t),
        f = a.PoolMgr.getInstance().getNode(h.effName);

    if (f) {
      f.parent = e, f.zIndex = l;
      var m = cc.v2();
      cc.isValid(o) && (m = r.Utils.posTransform(o.parent, o.getPosition(), e)), f.setPosition(cc.v2(m.x + s, m.y + c)), this.isDestroy(f, h);
    } else i.ResourceMgr.getInstance().loadRes(h.bundleName, h.pathName, cc.Prefab, function (t) {
      (f = cc.instantiate(t)).parent = e, f.zIndex = l;
      var a = cc.v2();
      cc.isValid(o) && (a = r.Utils.posTransform(o.parent, o.getPosition(), e)), f.setPosition(cc.v2(a.x + s, a.y + c)), d.isDestroy(f, h);
    });
  }, t.isDestroy = function (t, e) {
    var o = this;

    switch (e.type) {
      case 1:
        var a = 1;
        1 == e.isLoop ? a = 1e4 : e.playCount && (a = e.playCount);
        var i = t.getComponent(cc.Animation);
        i.play().repeatCount = a, i.on(cc.Animation.EventType.FINISHED, function () {
          o.recycleNodeEff(t, t.name);
        });
        break;

      case 2:
        var r = !1;
        1 == e.isLoop && (r = !0);
        var n = t.getComponent(sp.Skeleton);
        n.setAnimation(0, n.defaultAnimation, r), n.setCompleteListener(function () {
          o.recycleNodeEff(t, t.name);
        });
        break;

      default:
        if (1 == e.isLoop) break;
        var s = 1;
        e.playTime && (s = e.playTime), cc.tween(t).delay(s).call(function () {
          o.recycleNodeEff(t, t.name);
        }).start();
    }
  }, t.recycleNodeEff = function (t, e) {
    cc.isValid(t) && a.PoolMgr.getInstance().freeNode(e, t);
  }, t;
}();

o["default"] = s;

cc._RF.pop();