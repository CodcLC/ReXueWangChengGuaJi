"use strict";
cc._RF.push(module, 'ce4b5DsRi9JnJiilB/Cdu7a', 'UIMgr');
// scripts/UIMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.UIMgr = void 0;

var a = t("Config"),
    i = t("BaseUI"),
    r = t("Appcfg"),
    n = t("EventMgr"),
    s = t("LogMgr"),
    c = t("ResourceMgr"),
    l = function l(t, e, o, a, i, r, n, s, c) {
  this.uid = t, this.callback = a, this.parent = o, this.fromId = e, this.param1 = i, this.param2 = r, this.param3 = n, this.param4 = s, this.param5 = c;
},
    u = function () {
  function t() {
    this.uistatck = new Map(), this.uichace = new Map(), this.orderMap = new Map(), this.popStatck = [], this.logStatck = [], this.watingOpen = [], this.onlyShowOne = [], this.activityOne = [], this.layerNodeMap = new Map(), this.otherUIConf = [], this.uiRoot = null, this.UIConf = {}, this.isopening = !1, this.touchTime = -1;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.preLoadUI = function (t, e) {
    var o = this,
        a = this.getUICnf(t);
    a ? c.ResourceMgr.getInstance().loadRes(a.bundleName, a.prefab, cc.Prefab, function (r) {
      var n = cc.instantiate(r);
      n.name = a.name;
      var s = n.getComponent(i["default"]);
      o.uichace.set(t, s), e && e();
    }) : s.LogMgr.getInstance().error("ui没有配置：", t);
  }, t.prototype.addLayerShowOne = function (t) {
    this.onlyShowOne.push(t);
  }, t.prototype.addLayerActivityOne = function (t) {
    this.activityOne.push(t);
  }, t.prototype.addUICnf = function (t) {
    this.otherUIConf.push(t);
  }, t.prototype.setConf = function (t) {
    this.UIConf = t;
  }, t.prototype.Init = function (t) {
    this.uiRoot = t, this.UIConf = a.UICF, this.touchTime = -1, this.addTipsNode();
  }, t.prototype.getUIRoot = function (t) {
    var e = this.uiRoot.getChildByName(a.UICF[t].name);
    if (cc.isValid(e)) return e;
  }, t.prototype.addBlockTouch = function () {
    this.blockNode = new cc.Node(), this.blockNode.height = cc.view.getVisibleSize().height, this.blockNode.width = cc.view.getVisibleSize().width, this.blockNode.parent = this.uiRoot, this.blockNode.zIndex = 99999, this.blockNode.on(cc.Node.EventType.TOUCH_START, function () {});
  }, t.prototype.addTipsNode = function () {
    var t = this;
    this.tipsNode && this.tipsNode.destroy(), this.tipsNode = new cc.Node(), this.tipsNode.height = cc.view.getVisibleSize().height, this.tipsNode.width = cc.view.getVisibleSize().width;
    var e = new cc.Node(),
        o = e.addComponent(cc.Label);
    o.string = "著作权人：实丰（深圳）网络科技有限公司", o.fontSize = 20, e.parent = this.tipsNode, e.y = -(cc.view.getVisibleSize().height / 2 - 20), e.active = !1, this.tipsNode.parent = this.uiRoot, this.tipsNode.zIndex = 99999, this.tipsNode.on(cc.Node.EventType.TOUCH_START, function () {
      var o = new Date().getTime();
      -1 != t.touchTime && o - t.touchTime < 200 ? t.touchNum++ : t.touchNum = 0, t.touchNum >= 20 && (e.active = !0), t.touchTime = new Date().getTime();
    }), this.tipsNode._touchListener.setSwallowTouches(!1);
  }, t.prototype.openUIOfParent = function (t, e, o, a, i, r, n, s) {
    this.open(t, e, o, a, i, r, n, s);
  }, t.prototype.openUIOfCallback = function (t, e, o, a, i, r, n, s) {
    this.open(t, e, this.uiRoot, o, a, i, r, n, s);
  }, t.prototype.openUIOfParentAndCallback = function (t, e, o, a, i, r, n, s, c) {
    this.open(t, e, o, a, i, r, n, s, c);
  }, t.prototype.openUI = function (t, e, o, a, i, r, n) {
    this.open(t, e, this.uiRoot, null, o, a, i, r, n);
  }, t.prototype.open = function (t, e, o, a, u, p, g, d, h) {
    var f = this;

    if (this.isopening) {
      var m = new l(t, e, o, a, u, p, g, d, h);
      this.watingOpen.push(m);
    } else {
      this.isopening = !0;
      var y = this.getUICnf(t);
      if (null == y) return s.LogMgr.getInstance().debug(t + "不存在"), void (this.isopening = !1);
      var v = new l(t, e, o, a, u, p, g, d, h);

      if (this.popCanShow(t, y, v)) {
        if (this.uistatck.get(t) && !y.showMult) return s.LogMgr.getInstance().debug(t + "已经存在"), this.uistatck.get(t).node.getComponent(i["default"]).refreshUI(t, e, a, u, p, g, d, h), void (this.isopening = !1);
        var I = this.uichace.get(t);

        if (I) {
          this.uistatck.set(t, I), I.init && I.init(u, p, g, d, h), this.uichace["delete"](t);
          var k = o.getChildByName(y.name);
          null == k && ((k = I.node).active = !1, k.name = y.name, o.addChild(k)), k.x = 0, k.y = 0, k.active = !1, I.layer = y.zIndex;
          var C = y.zIndex;
          this.orderMap.has(I.layer) && (C = this.orderMap.get(I.layer) + 1), this.orderMap.set(I.layer, C), k.zIndex = C, I.setUid(t), I.fromId = e, this.updateMainUI(t, y);
          var S = this.layerNodeMap.get(y.zIndex);
          if (S) S.push(k);else {
            var M = [];
            M.push(k), this.layerNodeMap.set(y.zIndex, M);
          }
          I.openAni(), a && a(k), n.EventMgr.getInstance().emit(r.BaseEventName.OpenUI, t, k), this.isopening = !1, this.openWaiting(), k.active = !0;
        } else c.ResourceMgr.getInstance().loadRes(y.bundleName, y.prefab, cc.Prefab, function (s) {
          var c = cc.instantiate(s);
          c.active = !1, c.name = y.name, o.addChild(c);
          var l = c.getComponent(i["default"]);
          f.uistatck.set(t, l), l.init && l.init(u, p, g, d, h), l.setUid(t), l.fromId = e, l.layer = y.zIndex;
          var m = y.zIndex;
          f.orderMap.has(l.layer) && (m = f.orderMap.get(l.layer) + 1), f.orderMap.set(l.layer, m), c.zIndex = m, c.x = 0, c.y = 0, f.updateMainUI(t, y);
          var v = f.layerNodeMap.get(y.zIndex);
          if (v) v.push(c);else {
            var I = [];
            I.push(c), f.layerNodeMap.set(y.zIndex, I);
          }
          l.openAni(), a && a(c), n.EventMgr.getInstance().emit(r.BaseEventName.OpenUI, t, c), f.isopening = !1, f.openWaiting(), c.active = !0;
        });
      } else this.isopening = !1;
    }
  }, t.prototype.getChildByName = function (t) {
    return this.uiRoot.getChildByName(t);
  }, t.prototype.openWaiting = function () {
    if (this.watingOpen.length > 0) {
      var t = this.watingOpen.pop();
      this.openUIOfParentAndCallback(t.uid, t.fromId, t.parent, t.callback, t.param1, t.param2, t.param3, t.param4, t.param5);
    }
  }, t.prototype.closeUI = function (t, e, o, a, c) {
    var l = this;

    if (null != t && t.isValid) {
      var u = t.getComponent(i["default"]);
      u.closeAni(function () {
        var i = u.getUid(),
            s = l.getUICnf(i);

        if (u.onClose(), u.cache ? (t.removeFromParent(), l.uichace.set(i, u)) : t.destroy(), l.uistatck["delete"](i), null != s) {
          var p = l.layerNodeMap.get(s.zIndex);
          if (p) for (var g = 0; g < p.length; g++) {
            if (p[g].name == t.name) {
              p = p.splice(g, 1);
              break;
            }
          }
          var d = u.layer;

          if (l.orderMap.has(u.layer) && (d = l.orderMap.get(u.layer) - 1) < u.layer && (d = u.layer), l.orderMap.set(u.layer, d), n.EventMgr.getInstance().emit(r.BaseEventName.CloseUI, i, e, o, a, c), s.zIndex == r.OrderLayer.pop) {
            if (l.popStatck.length > 0) {
              var h = l.popStatck.pop();
              l.openUIOfCallback(h.uid, h.fromId, h.callback, h.param1, h.param2, h.param3, h.param4, h.param5);
            }
          } else if (s.zIndex == r.OrderLayer.main) {
            var f = l.layerNodeMap.get(s.zIndex);
            f && f.length > 0 && (f[f.length - 1].active = !0);
          } else s.zIndex == r.OrderLayer.Log && l.logStatck.length > 0 && (h = l.logStatck.pop(), l.openUIOfCallback(h.uid, h.fromId, h.callback, h.param1, h.param2, h.param3, h.param4, h.param5));

          l.checkHomeShow();
        }
      });
    } else s.LogMgr.getInstance().debug("关闭失败");
  }, t.prototype.checkHomeShow = function () {}, t.prototype.checkOtherEmpty = function () {
    var t = this.layerNodeMap.get(r.OrderLayer.pop),
        e = this.layerNodeMap.get(r.OrderLayer.pop2);
    return !(t && t.length > 0 || e && e.length > 0);
  }, t.prototype.updateMainUI = function () {}, t.prototype.popCanShow = function (t, e, o) {
    var a = this.layerNodeMap.get(e.zIndex);

    if (e.zIndex == r.OrderLayer.pop) {
      if (a && a.length > 0) {
        for (var i = 0; i < this.popStatck.length; i++) {
          if (this.popStatck[i].uid == t) return !1;
        }

        return this.popStatck.push(o), !1;
      }
    } else if (e.zIndex == r.OrderLayer.Log && a && a.length > 0) return this.logStatck.push(o), !1;

    return !0;
  }, t.prototype.closeById = function (t, e, o, a, i, r) {
    var n = this.uistatck.get(t);
    n ? n.node ? this.closeUI(n.node, e, o, a, i, r) : s.LogMgr.getInstance().debug("关闭失败2") : s.LogMgr.getInstance().debug("关闭失败1");
  }, t.prototype.getUIById = function (t) {
    var e = this.uistatck.get(t);
    if (e) return e;
    var o = this.uiRoot.getChildByName(this.getUICnf(t).name);
    return o ? o.getComponent(i["default"]) : null;
  }, t.prototype.getUIShowNum = function (t) {
    var e = 0;
    return this.uistatck.forEach(function (o, a) {
      a == t && e++;
    }), e;
  }, t.prototype.getUIByIdWithNode = function (t, e) {
    var o = this.uistatck.get(t);
    if (o) return o;
    if (null == e) return null;
    var a = e.getChildByName(this.getUICnf(t).name);
    return a ? a.getComponent(i["default"]) : null;
  }, t.prototype.getUICnf = function (t) {
    var e = this.UIConf[t];
    if (e) return e;

    for (var o = 0; o < this.otherUIConf.length; o++) {
      var a = this.otherUIConf[o][t];
      if (a) return a;
    }

    return null;
  }, t.instance = null, t;
}();

o.UIMgr = u;

cc._RF.pop();