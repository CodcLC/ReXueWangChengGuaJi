"use strict";
cc._RF.push(module, 'aaf34+Thw5BRKGowfSnf24h', 'BaseUI');
// scripts/BaseUI.js

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
}), o.OpenAin = void 0;
var n,
    s = t("EventMgr"),
    c = t("LanguageMgr"),
    l = t("ResCacheMgr"),
    u = t("ResourceMgr"),
    p = t("TweenMgr"),
    g = t("UIMgr"),
    d = t("ArgsParseUtils"),
    h = cc._decorator,
    f = h.ccclass,
    m = h.property;
(function (t) {
  t[t.None = 0] = "None", t[t.Pop = 1] = "Pop";
})(n = o.OpenAin || (o.OpenAin = {})), cc.Enum(n);

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.cache = !1, e.openAniType = n.None, e.goldLable = null, e.uid = -1, e.resArray = [], e.eventList = [], e.isclose = !1, e.fromId = -1, e;
  }

  return i(e, t), e.prototype.onLoad = function () {}, e.prototype.refreshUI = function () {}, e.prototype.init = function () {
    this.isclose = !1;
  }, e.prototype.onOpen = function () {}, e.prototype.onClose = function () {}, e.prototype.onToggleHide = function () {}, e.prototype.onToggleShow = function () {}, e.prototype.addEvent = function (t, e) {
    s.EventMgr.getInstance().on(t, this, e);
    var o = new Map();
    o.set(t, e), this.eventList.push(o);
  }, e.prototype.sendEvent = function (t, e, o, a, i, r) {
    s.EventMgr.getInstance().emit(t, e, o, a, i, r);
  }, e.prototype.getUid = function () {
    return this.uid;
  }, e.prototype.onOpened = function () {
    this.isclose = !1;
  }, e.prototype.setUid = function (t) {
    this.uid = t;
  }, e.prototype.openAni = function () {
    var t = this;

    if (this.openAniType == n.Pop) {
      this.node.active = !0;
      var e = this.node.getChildByName("bg");
      e && (e.opacity = 0, cc.tween(e).to(.2, {
        opacity: 200
      }).start());
      var o = this.node.getChildByName("root");

      if (o) {
        var a = o.scale;
        o.scale = 0;
        var i = p.TweenMgr.getInstance().getTween(o);
        p.TweenMgr.getInstance().popOpenAin(i, function () {
          o.scale != a && cc.tween(o).to(.15, {
            scale: a
          }).start(), t.onOpen();
        });
      } else this.node.active = !0, this.onOpen();
    }
  }, e.prototype.closeAni = function (t) {
    if (this.openAniType == n.None) t();else if (this.openAniType == n.Pop) {
      var e = this.node.getChildByName("bg");
      e && (e.opacity = 200, cc.tween(e).to(.4, {
        opacity: 0
      }).start());
      var o = this.node.getChildByName("root");

      if (o) {
        var a = p.TweenMgr.getInstance().getTween(o);
        p.TweenMgr.getInstance().popCloseAin(a, function () {
          t();
        });
      } else t();
    }
  }, e.prototype.openUI = function (t, e, o, a, i, r) {
    g.UIMgr.getInstance().openUI(t, this.uid, e, o, a, i, r);
  }, e.prototype.openUICallBack = function (t, e, o, a, i, r, n) {
    g.UIMgr.getInstance().openUIOfCallback(t, this.uid, e, o, a, i, r, n);
  }, e.prototype.closeUI = function (t, e, o, a, i) {
    var r = this;
    if (this.eventList && this.eventList.length > 0) for (var n = 0; n < this.eventList.length; n++) {
      this.eventList[n].forEach(function (t, e) {
        s.EventMgr.getInstance().off(e, r, t);
      });
    }
    this.isclose = !0, this.release(), this.scheduleOnce(function () {
      g.UIMgr.getInstance().closeUI(r.node, t, e, o, a, i);
    });
  }, e.prototype.closeNotAni = function (t, e, o, a, i) {
    this.openAniType = n.None, this.closeUI(t, e, o, a, i);
  }, e.prototype.loadSpriteFrame = function () {
    var t = this,
        e = d.ArgsParseUtils._makeloadSpriteFrameResrgs.apply(this, arguments),
        o = e.bundle,
        a = e.path,
        i = e.callback,
        r = !0,
        n = e.saveKey;

    u.ResourceMgr.getInstance().loadSpriteframe(o, a, function (e) {
      r && t.addRes(o, a, cc.SpriteFrame), t.isclose || i(e);
    }, r, e.cacheTme, n);
  }, e.prototype.loadRemoteSpriteFrame = function (t, e, o, a) {
    var i = this;
    void 0 === o && (o = !0), void 0 === a && (a = 10), u.ResourceMgr.getInstance().loadRemoteSpriteFrame(t, function (a) {
      o && i.addRes("", t, cc.SpriteFrame), i.isclose || e(a);
    }, o, a);
  }, e.prototype.loadPrefab = function (t, e, o, a, i) {
    var r = this;
    void 0 === a && (a = !0), void 0 === i && (i = 10), u.ResourceMgr.getInstance().loadRes(t, e, cc.Prefab, function (i) {
      a && r.addRes(t, e, cc.Prefab), r.isclose || o(i);
    }, a, i);
  }, e.prototype.loadTexture2D = function (t, e, o, a, i) {
    var r = this;
    void 0 === a && (a = !0), void 0 === i && (i = 10), u.ResourceMgr.getInstance().loadRes(t, e, cc.Texture2D, function (i) {
      a && r.addRes(t, e, cc.Texture2D), r.isclose || o(i);
    }, a, i);
  }, e.prototype.loadResFromBundle = function () {
    var t = this,
        e = d.ArgsParseUtils._makeLoadResArgs.apply(this, arguments),
        o = e.bundle,
        a = e.path,
        i = e.callback,
        r = !0,
        n = e.type;

    u.ResourceMgr.getInstance().loadRes(o, a, n, function (e) {
      r && t.addRes(o, a, n), t.isclose || i(e);
    }, r, e.cacheTme, e.saveKey);
  }, e.prototype.loadFromRes = function (t, e, o, a) {
    var i = this;
    void 0 === a && (a = 10), u.ResourceMgr.getInstance().loadFromRes(t, e, function (a) {
      i.addRes("", t, e), i.isclose || o(a);
    });
  }, e.prototype.addRes = function (t, e, o) {
    if (this.resArray) {
      var a = l.ResCacheMgr.getInstance().isExistKey(t + "/" + e, o.name, this.resArray);
      if (-1 != a) this.resArray[a].defCount || (this.resArray[a].defCount = 0), this.resArray[a].defCount++;else {
        var i = new u.ResCacheKey(t, e, o);
        this.resArray.push(i);
      }
    }
  }, e.prototype.release = function () {
    !this.cache && this.resArray && (l.ResCacheMgr.getInstance().refreshTime(this.resArray), this.resArray = []);
  }, e.prototype.setListenerUI = function () {}, e.prototype.onDestroy = function () {
    var t = this;

    if (this.eventList && this.eventList.length > 0) {
      for (var e = 0; e < this.eventList.length; e++) {
        this.eventList[e].forEach(function (e, o) {
          s.EventMgr.getInstance().off(o, t, e);
        });
      }

      this.eventList = null;
    }

    this.isclose = !0, this.release();
  }, e.prototype.T = function (t) {
    return c.LanguageMgr.getInstance().T(t);
  }, e.prototype.getImgstr = function (t) {
    return c.LanguageMgr.getInstance().getImgstr(t);
  }, r([m({
    displayName: "是否需要缓存"
  })], e.prototype, "cache", void 0), r([m({
    type: n,
    tooltip: "注意：主节点下只需bg 和 root",
    displayName: "打开动画"
  })], e.prototype, "openAniType", void 0), r([m({
    type: cc.Node,
    tooltip: "金币框"
  })], e.prototype, "goldNode", void 0), r([m({
    type: cc.Node,
    tooltip: "金币图"
  })], e.prototype, "goldIcon", void 0), r([m({
    type: cc.Label,
    tooltip: "金币label"
  })], e.prototype, "goldLable", void 0), r([f], e);
}(cc.Component);

o["default"] = y;

cc._RF.pop();