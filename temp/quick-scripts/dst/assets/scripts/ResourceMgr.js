
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ResourceMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '739ffLu5WtLUq8HGmuiTmxM', 'ResourceMgr');
// scripts/ResourceMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ResourceMgr = o.BundleCache = o.ResCacheKey = o.ResCache = void 0;

var a = t("BasePlatform"),
    i = t("ArgsParseUtils"),
    r = t("TimeUtils"),
    n = t("LogMgr"),
    s = t("PlatformManager"),
    c = t("ResCacheMgr"),
    l = function () {
  function t(t, e, o, a, i, n) {
    this.releaseTime = o, this.cacheTime = a, this.asset = n, this.type = cc.js.getClassName(i), this.cachekey = t + "/" + e, this.defCount = 0, this.lifeTime = 3, this.createTime = r.TimeUtils.GetTimeBySecond(), this.canRelease = !0;
  }

  return t.prototype.setLifeTime = function (t) {
    this.lifeTime = t;
  }, t;
}();

o.ResCache = l;

o.ResCacheKey = function (t, e, o) {
  this.defCount = 0, this.type = cc.js.getClassName(o), this.cachekey = t + "/" + e, this.defCount = 1;
};

o.BundleCache = function (t, e, o) {
  this.bundleName = t, this.dateTime = e, this.cacheTime = o;
};

var u = function () {
  function t() {}

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.getBundle = function (t) {
    return cc.assetManager.getBundle(t);
  }, t.prototype.loadBundle = function (t, e) {
    var o = cc.assetManager.getBundle(t);
    null == o ? cc.assetManager.loadBundle(t, function (o, a) {
      o ? n.LogMgr.getInstance().error(t + "bundle load error :" + o) : (n.LogMgr.getInstance().debug("加载bundle:" + t), e(a));
    }) : e(o);
  }, t.prototype.preloadFromBundle = function (t, e, o) {
    t.preload(e, cc.Asset, function (t, e) {
      o && o(t, e);
    });
  }, t.prototype.preload = function (t, e) {
    var o = cc.assetManager.getBundle(t);
    o ? e && o.preload(e) : cc.assetManager.loadBundle(t, function (t, o) {
      t || e && o.preload(e);
    });
  }, t.prototype.relLoadBundle = function (t, e) {
    for (var o = function o(_o) {
      var i = t[_o];
      a.loadBundle(i, function (t) {
        if (e) {
          var a = e.get(_o);
          t.load(a);
        }
      });
    }, a = this, i = 0; i < t.length; i++) {
      o(i);
    }
  }, t.prototype.loadFromRes = function (t, e, o) {
    this.loadRes("resources", t, e, o);
  }, t.prototype.loadDirFrom = function (t, e) {
    this.loadDir("resources", t, e);
  }, t.prototype.loadSpriteframe = function () {
    var e = i.ArgsParseUtils._makeloadSpriteFrameResrgs.apply(this, arguments),
        o = e.bundle,
        a = e.path,
        s = e.callback,
        u = e.saveKey,
        p = r.TimeUtils.GetTimeBySecond() + 86400,
        g = c.ResCacheMgr.getInstance().getAssets(o, a, cc.SpriteFrame);

    if (g && g.asset) return g.asset.addRef(), g.cacheTime = p, void s(g.asset);
    var d = cc.assetManager.getBundle(o),
        h = new l(o, a, p, e.cacheTme, cc.SpriteFrame);
    null == d ? t.getInstance().loadBundle(o, function (t) {
      t.load(a, cc.SpriteFrame, function (t, i) {
        t ? n.LogMgr.getInstance().error("loadres error path:" + a + "  error:", t.message) : (i.addRef(), h.asset = i, c.ResCacheMgr.getInstance().addAssets(h, e.autoRelese), u && c.ResCacheMgr.getInstance().addAssetKeyToMap(u, o, a, cc.SpriteFrame), s && s(i));
      });
    }) : d.load(a, cc.SpriteFrame, function (t, i) {
      t ? n.LogMgr.getInstance().error("loadres error path:" + a + "  error:" + t) : (i.addRef(), h.asset = i, c.ResCacheMgr.getInstance().addAssets(h, e.autoRelese), u && c.ResCacheMgr.getInstance().addAssetKeyToMap(u, o, a, cc.SpriteFrame), s && s(i));
    });
  }, t.prototype.loadRemoteSpriteFrame = function (t, e, o, i) {
    void 0 === o && (o = !1), void 0 === i && (i = 10);
    var n = r.TimeUtils.GetTimeBySecond() + 86400,
        u = c.ResCacheMgr.getInstance().getAssets("", t, cc.Texture2D);
    if (u && u.asset) return u.asset.addRef(), void e(u.asset);
    var p = new l("", t, n, i, cc.Texture2D);
    t.startsWith("http") && (s.PlatformManager.currentPlatform == a.Platform.BYTEDANCE ? cc.assetManager.loadRemote(t, {
      ext: ".head"
    }, function (t, a) {
      if (!t) {
        a.addRef(), p.asset = a, c.ResCacheMgr.getInstance().addAssets(p, o);
        var i = new cc.SpriteFrame(a);
        e(i);
      }
    }) : cc.assetManager.loadRemote(t, function (t, a) {
      if (!t) {
        a.addRef(), p.asset = a, c.ResCacheMgr.getInstance().addAssets(p, o);
        var i = new cc.SpriteFrame(a);
        e(i);
      }
    }));
  }, t.prototype.loadRes = function () {
    var e = i.ArgsParseUtils._makeLoadResArgs.apply(this, arguments),
        o = e.bundle,
        a = e.path,
        s = e.type,
        u = e.callback,
        p = e.saveKey;

    if ("cc.Asset" != cc.js.getClassName(s)) {
      var g = r.TimeUtils.GetTimeBySecond() + 86400,
          d = c.ResCacheMgr.getInstance().getAssets(o, a, s);
      if (d && d.asset) return d.asset.addRef(), void u(d.asset);
      var h = cc.assetManager.getBundle(o),
          f = new l(o, a, g, e.cacheTme, s);
      null == h ? t.getInstance().loadBundle(o, function (t) {
        t.load(a, s, function (t, i) {
          t ? n.LogMgr.getInstance().error("loadres error path:" + a + "  error:", t.message) : (i.addRef(), f.asset = i, c.ResCacheMgr.getInstance().addAssets(f, e.autoRelese), p && c.ResCacheMgr.getInstance().addAssetKeyToMap(p, o, a, s), u && u(i));
        });
      }) : h.load(a, s, function (t, i) {
        t ? n.LogMgr.getInstance().error("loadres error path:" + a + "  error:" + t) : (i.addRef(), f.asset = i, c.ResCacheMgr.getInstance().addAssets(f, e.autoRelese), p && c.ResCacheMgr.getInstance().addAssetKeyToMap(p, o, a, s), u && u(i));
      });
    } else console.error("请传入具体资源类型，不能是基类asset,路径:", o + "/" + a);
  }, t.prototype.loadDir = function (t, e, o) {
    var a = cc.assetManager.getBundle(t);
    null == a ? cc.assetManager.loadBundle(t, function (t, a) {
      a.loadDir(e, cc.Asset, function (t, a) {
        t ? n.LogMgr.getInstance().error("loadres error path:" + e + "  error:" + t) : o && o(a);
      });
    }) : a.loadDir(e, cc.Asset, function (t, a) {
      t ? n.LogMgr.getInstance().error("loadres error path:" + e + "  error:" + t) : o && o(a);
    });
  }, t.prototype.releaseByBundle = function (t, e) {
    t.release(e);
  }, t.prototype.releaseByBname = function (t, e) {
    var o = cc.assetManager.getBundle(t);
    o && o.release(e);
  }, t.prototype.releaseBundle = function (t) {
    var e = cc.assetManager.getBundle(t);
    e && cc.assetManager.removeBundle(e);
  }, t.instance = null, t;
}();

o.ResourceMgr = u;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUmVzb3VyY2VNZ3IuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiUmVzb3VyY2VNZ3IiLCJCdW5kbGVDYWNoZSIsIlJlc0NhY2hlS2V5IiwiUmVzQ2FjaGUiLCJhIiwiaSIsInIiLCJuIiwicyIsImMiLCJsIiwicmVsZWFzZVRpbWUiLCJjYWNoZVRpbWUiLCJhc3NldCIsInR5cGUiLCJjYyIsImpzIiwiZ2V0Q2xhc3NOYW1lIiwiY2FjaGVrZXkiLCJkZWZDb3VudCIsImxpZmVUaW1lIiwiY3JlYXRlVGltZSIsIlRpbWVVdGlscyIsIkdldFRpbWVCeVNlY29uZCIsImNhblJlbGVhc2UiLCJwcm90b3R5cGUiLCJzZXRMaWZlVGltZSIsImJ1bmRsZU5hbWUiLCJkYXRlVGltZSIsInUiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwiZ2V0QnVuZGxlIiwiYXNzZXRNYW5hZ2VyIiwibG9hZEJ1bmRsZSIsIkxvZ01nciIsImVycm9yIiwiZGVidWciLCJwcmVsb2FkRnJvbUJ1bmRsZSIsInByZWxvYWQiLCJBc3NldCIsInJlbExvYWRCdW5kbGUiLCJnZXQiLCJsb2FkIiwibGVuZ3RoIiwibG9hZEZyb21SZXMiLCJsb2FkUmVzIiwibG9hZERpckZyb20iLCJsb2FkRGlyIiwibG9hZFNwcml0ZWZyYW1lIiwiQXJnc1BhcnNlVXRpbHMiLCJfbWFrZWxvYWRTcHJpdGVGcmFtZVJlc3JncyIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnVuZGxlIiwicGF0aCIsImNhbGxiYWNrIiwic2F2ZUtleSIsInAiLCJnIiwiUmVzQ2FjaGVNZ3IiLCJnZXRBc3NldHMiLCJTcHJpdGVGcmFtZSIsImFkZFJlZiIsImQiLCJoIiwiY2FjaGVUbWUiLCJtZXNzYWdlIiwiYWRkQXNzZXRzIiwiYXV0b1JlbGVzZSIsImFkZEFzc2V0S2V5VG9NYXAiLCJsb2FkUmVtb3RlU3ByaXRlRnJhbWUiLCJUZXh0dXJlMkQiLCJzdGFydHNXaXRoIiwiUGxhdGZvcm1NYW5hZ2VyIiwiY3VycmVudFBsYXRmb3JtIiwiUGxhdGZvcm0iLCJCWVRFREFOQ0UiLCJsb2FkUmVtb3RlIiwiZXh0IiwiX21ha2VMb2FkUmVzQXJncyIsImYiLCJjb25zb2xlIiwicmVsZWFzZUJ5QnVuZGxlIiwicmVsZWFzZSIsInJlbGVhc2VCeUJuYW1lIiwicmVsZWFzZUJ1bmRsZSIsInJlbW92ZUJ1bmRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUdDLE9BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE1BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE9BQVI7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCSCxDQUF0QixFQUF5QixZQUF6QixFQUF1QztFQUNuQ0ksS0FBSyxFQUFFLENBQUM7QUFEMkIsQ0FBdkMsR0FHQUosQ0FBQyxDQUFDSyxXQUFGLEdBQWdCTCxDQUFDLENBQUNNLFdBQUYsR0FBZ0JOLENBQUMsQ0FBQ08sV0FBRixHQUFnQlAsQ0FBQyxDQUFDUSxRQUFGLEdBQWEsS0FBSyxDQUhsRTs7QUFJQSxJQUFJQyxDQUFDLEdBQUdiLENBQUMsQ0FBQyxjQUFELENBQVQ7QUFBQSxJQUNBYyxDQUFDLEdBQUdkLENBQUMsQ0FBQyxnQkFBRCxDQURMO0FBQUEsSUFFQWUsQ0FBQyxHQUFHZixDQUFDLENBQUMsV0FBRCxDQUZMO0FBQUEsSUFHQWdCLENBQUMsR0FBR2hCLENBQUMsQ0FBQyxRQUFELENBSEw7QUFBQSxJQUlBaUIsQ0FBQyxHQUFHakIsQ0FBQyxDQUFDLGlCQUFELENBSkw7QUFBQSxJQUtBa0IsQ0FBQyxHQUFHbEIsQ0FBQyxDQUFDLGFBQUQsQ0FMTDtBQUFBLElBTUFtQixDQUFDLEdBQUcsWUFBVztFQUNYLFNBQVNuQixDQUFULENBQVdBLENBQVgsRUFBY0UsQ0FBZCxFQUFpQkUsQ0FBakIsRUFBb0JTLENBQXBCLEVBQXVCQyxD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QUFZNEQsY0FBWixHQUE2QixVQUFTOUYsQ0FBVCxFQUFZRSxDQUFaLEVBQWU7SUFDeEMsSUFBSUUsQ0FBQyxHQUFHb0IsRUFBRSxDQUFDa0IsWUFBSCxDQUFnQkQsU0FBaEIsQ0FBMEJ6QyxDQUExQixDQUFSO0lBQ0FJLENBQUMsSUFBSUEsQ0FBQyxDQUFDeUYsT0FBRixDQUFVM0YsQ0FBVixDQUFMO0VBQ0gsQ0FqSk0sRUFrSlBGLENBQUMsQ0FBQ2tDLFNBQUYsQ0FBWTZELGFBQVosR0FBNEIsVUFBUy9GLENBQVQsRUFBWTtJQUNwQyxJQUFJRSxDQUFDLEdBQUdzQixFQUFFLENBQUNrQixZQUFILENBQWdCRCxTQUFoQixDQUEwQnpDLENBQTFCLENBQVI7SUFDQUUsQ0FBQyxJQUFJc0IsRUFBRSxDQUFDa0IsWUFBSCxDQUFnQnNELFlBQWhCLENBQTZCOUYsQ0FBN0IsQ0FBTDtFQUNILENBckpNLEVBc0pQRixDQUFDLENBQUN3QyxRQUFGLEdBQWEsSUF0Sk4sRUF1SlB4QyxDQXZKQTtBQXdKSCxDQTFKTyxFQUFSOztBQTJKQUksQ0FBQyxDQUFDSyxXQUFGLEdBQWdCNkIsQ0FBaEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KSxcbm8uUmVzb3VyY2VNZ3IgPSBvLkJ1bmRsZUNhY2hlID0gby5SZXNDYWNoZUtleSA9IG8uUmVzQ2FjaGUgPSB2b2lkIDA7XG52YXIgYSA9IHQoXCJCYXNlUGxhdGZvcm1cIiksXG5pID0gdChcIkFyZ3NQYXJzZVV0aWxzXCIpLFxuciA9IHQoXCJUaW1lVXRpbHNcIiksXG5uID0gdChcIkxvZ01nclwiKSxcbnMgPSB0KFwiUGxhdGZvcm1NYW5hZ2VyXCIpLFxuYyA9IHQoXCJSZXNDYWNoZU1nclwiKSxcbmwgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KHQsIGUsIG8sIGEsIGksIG4pIHtcbiAgICAgICAgdGhpcy5yZWxlYXNlVGltZSA9IG8sXG4gICAgICAgIHRoaXMuY2FjaGVUaW1lID0gYSxcbiAgICAgICAgdGhpcy5hc3NldCA9IG4sXG4gICAgICAgIHRoaXMudHlwZSA9IGNjLmpzLmdldENsYXNzTmFtZShpKSxcbiAgICAgICAgdGhpcy5jYWNoZWtleSA9IHQgKyBcIi9cIiArIGUsXG4gICAgICAgIHRoaXMuZGVmQ291bnQgPSAwLFxuICAgICAgICB0aGlzLmxpZmVUaW1lID0gMyxcbiAgICAgICAgdGhpcy5jcmVhdGVUaW1lID0gci5UaW1lVXRpbHMuR2V0VGltZUJ5U2Vjb25kKCksXG4gICAgICAgIHRoaXMuY2FuUmVsZWFzZSA9ICEwXG4gICAgfVxuICAgIHJldHVybiB0LnByb3RvdHlwZS5zZXRMaWZlVGltZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhpcy5saWZlVGltZSA9IHRcbiAgICB9LFxuICAgIHRcbn0gKCk7XG5vLlJlc0NhY2hlID0gbDtcbm8uUmVzQ2FjaGVLZXkgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgdGhpcy5kZWZDb3VudCA9IDAsXG4gICAgdGhpcy50eXBlID0gY2MuanMuZ2V0Q2xhc3NOYW1lKG8pLFxuICAgIHRoaXMuY2FjaGVrZXkgPSB0ICsgXCIvXCIgKyBlLFxuICAgIHRoaXMuZGVmQ291bnQgPSAxXG59O1xuby5CdW5kbGVDYWNoZSA9IGZ1bmN0aW9uKHQsIGUsIG8pIHtcbiAgICB0aGlzLmJ1bmRsZU5hbWUgPSB0LFxuICAgIHRoaXMuZGF0ZVRpbWUgPSBlLFxuICAgIHRoaXMuY2FjaGVUaW1lID0gb1xufTtcbnZhciB1ID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgcmV0dXJuIHQuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdGhpcy5pbnN0YW5jZSAmJiAodGhpcy5pbnN0YW5jZSA9IG5ldyB0KSxcbiAgICAgICAgdGhpcy5pbnN0YW5jZVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0QnVuZGxlID0gZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZSh0KVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUubG9hZEJ1bmRsZSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKHQpO1xuICAgICAgICBudWxsID09IG8gPyBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZSh0LFxuICAgICAgICBmdW5jdGlvbihvLCBhKSB7XG4gICAgICAgICAgICBvID8gbi5Mb2dNZ3IuZ2V0SW5zdGFuY2UoKS5lcnJvcih0ICsgXCJidW5kbGUgbG9hZCBlcnJvciA6XCIgKyBvKSA6IChuLkxvZ01nci5nZXRJbnN0YW5jZSgpLmRlYnVnKFwi5Yqg6L29YnVuZGxlOlwiICsgdCksIGUoYSkpXG4gICAgICAgIH0pIDogZShvKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUucHJlbG9hZEZyb21CdW5kbGUgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgIHQucHJlbG9hZChlLCBjYy5Bc3NldCxcbiAgICAgICAgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgbyAmJiBvKHQsIGUpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB2YXIgbyA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUodCk7XG4gICAgICAgIG8gPyBlICYmIG8ucHJlbG9hZChlKSA6IGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHQsXG4gICAgICAgIGZ1bmN0aW9uKHQsIG8pIHtcbiAgICAgICAgICAgIHQgfHwgZSAmJiBvLnByZWxvYWQoZSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnJlbExvYWRCdW5kbGUgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gPSBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRbb107XG4gICAgICAgICAgICBhLmxvYWRCdW5kbGUoaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGUuZ2V0KG8pO1xuICAgICAgICAgICAgICAgICAgICB0LmxvYWQoYSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBhID0gdGhpcywgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSBvKGkpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5sb2FkRnJvbVJlcyA9IGZ1bmN0aW9uKHQsIGUsIG8pIHtcbiAgICAgICAgdGhpcy5sb2FkUmVzKFwicmVzb3VyY2VzXCIsIHQsIGUsIG8pXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5sb2FkRGlyRnJvbSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdGhpcy5sb2FkRGlyKFwicmVzb3VyY2VzXCIsIHQsIGUpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5sb2FkU3ByaXRlZnJhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGUgPSBpLkFyZ3NQYXJzZVV0aWxzLl9tYWtlbG9hZFNwcml0ZUZyYW1lUmVzcmdzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIG8gPSBlLmJ1bmRsZSxcbiAgICAgICAgYSA9IGUucGF0aCxcbiAgICAgICAgcyA9IGUuY2FsbGJhY2ssXG4gICAgICAgIHUgPSBlLnNhdmVLZXksXG4gICAgICAgIHAgPSByLlRpbWVVdGlscy5HZXRUaW1lQnlTZWNvbmQoKSArIDg2NDAwLFxuICAgICAgICBnID0gYy5SZXNDYWNoZU1nci5nZXRJbnN0YW5jZSgpLmdldEFzc2V0cyhvLCBhLCBjYy5TcHJpdGVGcmFtZSk7XG4gICAgICAgIGlmIChnICYmIGcuYXNzZXQpIHJldHVybiBnLmFzc2V0LmFkZFJlZigpLFxuICAgICAgICBnLmNhY2hlVGltZSA9IHAsXG4gICAgICAgIHZvaWQgcyhnLmFzc2V0KTtcbiAgICAgICAgdmFyIGQgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKG8pLFxuICAgICAgICBoID0gbmV3IGwobywgYSwgcCwgZS5jYWNoZVRtZSwgY2MuU3ByaXRlRnJhbWUpO1xuICAgICAgICBudWxsID09IGQgPyB0LmdldEluc3RhbmNlKCkubG9hZEJ1bmRsZShvLFxuICAgICAgICBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICB0LmxvYWQoYSwgY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgICAgICAgICAgdCA/IG4uTG9nTWdyLmdldEluc3RhbmNlKCkuZXJyb3IoXCJsb2FkcmVzIGVycm9yIHBhdGg6XCIgKyBhICsgXCIgIGVycm9yOlwiLCB0Lm1lc3NhZ2UpIDogKGkuYWRkUmVmKCksIGguYXNzZXQgPSBpLCBjLlJlc0NhY2hlTWdyLmdldEluc3RhbmNlKCkuYWRkQXNzZXRzKGgsIGUuYXV0b1JlbGVzZSksIHUgJiYgYy5SZXNDYWNoZU1nci5nZXRJbnN0YW5jZSgpLmFkZEFzc2V0S2V5VG9NYXAodSwgbywgYSwgY2MuU3ByaXRlRnJhbWUpLCBzICYmIHMoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSA6IGQubG9hZChhLCBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgdCA/IG4uTG9nTWdyLmdldEluc3RhbmNlKCkuZXJyb3IoXCJsb2FkcmVzIGVycm9yIHBhdGg6XCIgKyBhICsgXCIgIGVycm9yOlwiICsgdCkgOiAoaS5hZGRSZWYoKSwgaC5hc3NldCA9IGksIGMuUmVzQ2FjaGVNZ3IuZ2V0SW5zdGFuY2UoKS5hZGRBc3NldHMoaCwgZS5hdXRvUmVsZXNlKSwgdSAmJiBjLlJlc0NhY2hlTWdyLmdldEluc3RhbmNlKCkuYWRkQXNzZXRLZXlUb01hcCh1LCBvLCBhLCBjYy5TcHJpdGVGcmFtZSksIHMgJiYgcyhpKSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmxvYWRSZW1vdGVTcHJpdGVGcmFtZSA9IGZ1bmN0aW9uKHQsIGUsIG8sIGkpIHtcbiAgICAgICAgdm9pZCAwID09PSBvICYmIChvID0gITEpLFxuICAgICAgICB2b2lkIDAgPT09IGkgJiYgKGkgPSAxMCk7XG4gICAgICAgIHZhciBuID0gci5UaW1lVXRpbHMuR2V0VGltZUJ5U2Vjb25kKCkgKyA4NjQwMCxcbiAgICAgICAgdSA9IGMuUmVzQ2FjaGVNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRBc3NldHMoXCJcIiwgdCwgY2MuVGV4dHVyZTJEKTtcbiAgICAgICAgaWYgKHUgJiYgdS5hc3NldCkgcmV0dXJuIHUuYXNzZXQuYWRkUmVmKCksXG4gICAgICAgIHZvaWQgZSh1LmFzc2V0KTtcbiAgICAgICAgdmFyIHAgPSBuZXcgbChcIlwiLCB0LCBuLCBpLCBjYy5UZXh0dXJlMkQpO1xuICAgICAgICB0LnN0YXJ0c1dpdGgoXCJodHRwXCIpICYmIChzLlBsYXRmb3JtTWFuYWdlci5jdXJyZW50UGxhdGZvcm0gPT0gYS5QbGF0Zm9ybS5CWVRFREFOQ0UgPyBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh0LCB7XG4gICAgICAgICAgICBleHQ6IFwiLmhlYWRcIlxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbih0LCBhKSB7XG4gICAgICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICAgICAgICBhLmFkZFJlZigpLFxuICAgICAgICAgICAgICAgIHAuYXNzZXQgPSBhLFxuICAgICAgICAgICAgICAgIGMuUmVzQ2FjaGVNZ3IuZ2V0SW5zdGFuY2UoKS5hZGRBc3NldHMocCwgbyk7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBuZXcgY2MuU3ByaXRlRnJhbWUoYSk7XG4gICAgICAgICAgICAgICAgZShpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSA6IGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHQsXG4gICAgICAgIGZ1bmN0aW9uKHQsIGEpIHtcbiAgICAgICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgICAgIGEuYWRkUmVmKCksXG4gICAgICAgICAgICAgICAgcC5hc3NldCA9IGEsXG4gICAgICAgICAgICAgICAgYy5SZXNDYWNoZU1nci5nZXRJbnN0YW5jZSgpLmFkZEFzc2V0cyhwLCBvKTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IG5ldyBjYy5TcHJpdGVGcmFtZShhKTtcbiAgICAgICAgICAgICAgICBlKGkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUubG9hZFJlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZSA9IGkuQXJnc1BhcnNlVXRpbHMuX21ha2VMb2FkUmVzQXJncy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICBvID0gZS5idW5kbGUsXG4gICAgICAgIGEgPSBlLnBhdGgsXG4gICAgICAgIHMgPSBlLnR5cGUsXG4gICAgICAgIHUgPSBlLmNhbGxiYWNrLFxuICAgICAgICBwID0gZS5zYXZlS2V5O1xuICAgICAgICBpZiAoXCJjYy5Bc3NldFwiICE9IGNjLmpzLmdldENsYXNzTmFtZShzKSkge1xuICAgICAgICAgICAgdmFyIGcgPSByLlRpbWVVdGlscy5HZXRUaW1lQnlTZWNvbmQoKSArIDg2NDAwLFxuICAgICAgICAgICAgZCA9IGMuUmVzQ2FjaGVNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRBc3NldHMobywgYSwgcyk7XG4gICAgICAgICAgICBpZiAoZCAmJiBkLmFzc2V0KSByZXR1cm4gZC5hc3NldC5hZGRSZWYoKSxcbiAgICAgICAgICAgIHZvaWQgdShkLmFzc2V0KTtcbiAgICAgICAgICAgIHZhciBoID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShvKSxcbiAgICAgICAgICAgIGYgPSBuZXcgbChvLCBhLCBnLCBlLmNhY2hlVG1lLCBzKTtcbiAgICAgICAgICAgIG51bGwgPT0gaCA/IHQuZ2V0SW5zdGFuY2UoKS5sb2FkQnVuZGxlKG8sXG4gICAgICAgICAgICBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdC5sb2FkKGEsIHMsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB0ID8gbi5Mb2dNZ3IuZ2V0SW5zdGFuY2UoKS5lcnJvcihcImxvYWRyZXMgZXJyb3IgcGF0aDpcIiArIGEgKyBcIiAgZXJyb3I6XCIsIHQubWVzc2FnZSkgOiAoaS5hZGRSZWYoKSwgZi5hc3NldCA9IGksIGMuUmVzQ2FjaGVNZ3IuZ2V0SW5zdGFuY2UoKS5hZGRBc3NldHMoZiwgZS5hdXRvUmVsZXNlKSwgcCAmJiBjLlJlc0NhY2hlTWdyLmdldEluc3RhbmNlKCkuYWRkQXNzZXRLZXlUb01hcChwLCBvLCBhLCBzKSwgdSAmJiB1KGkpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSA6IGgubG9hZChhLCBzLFxuICAgICAgICAgICAgZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgICAgIHQgPyBuLkxvZ01nci5nZXRJbnN0YW5jZSgpLmVycm9yKFwibG9hZHJlcyBlcnJvciBwYXRoOlwiICsgYSArIFwiICBlcnJvcjpcIiArIHQpIDogKGkuYWRkUmVmKCksIGYuYXNzZXQgPSBpLCBjLlJlc0NhY2hlTWdyLmdldEluc3RhbmNlKCkuYWRkQXNzZXRzKGYsIGUuYXV0b1JlbGVzZSksIHAgJiYgYy5SZXNDYWNoZU1nci5nZXRJbnN0YW5jZSgpLmFkZEFzc2V0S2V5VG9NYXAocCwgbywgYSwgcyksIHUgJiYgdShpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmVycm9yKFwi6K+35Lyg5YWl5YW35L2T6LWE5rqQ57G75Z6L77yM5LiN6IO95piv5Z+657G7YXNzZXQs6Lev5b6EOlwiLCBvICsgXCIvXCIgKyBhKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUubG9hZERpciA9IGZ1bmN0aW9uKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIGEgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKHQpO1xuICAgICAgICBudWxsID09IGEgPyBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZSh0LFxuICAgICAgICBmdW5jdGlvbih0LCBhKSB7XG4gICAgICAgICAgICBhLmxvYWREaXIoZSwgY2MuQXNzZXQsXG4gICAgICAgICAgICBmdW5jdGlvbih0LCBhKSB7XG4gICAgICAgICAgICAgICAgdCA/IG4uTG9nTWdyLmdldEluc3RhbmNlKCkuZXJyb3IoXCJsb2FkcmVzIGVycm9yIHBhdGg6XCIgKyBlICsgXCIgIGVycm9yOlwiICsgdCkgOiBvICYmIG8oYSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pIDogYS5sb2FkRGlyKGUsIGNjLkFzc2V0LFxuICAgICAgICBmdW5jdGlvbih0LCBhKSB7XG4gICAgICAgICAgICB0ID8gbi5Mb2dNZ3IuZ2V0SW5zdGFuY2UoKS5lcnJvcihcImxvYWRyZXMgZXJyb3IgcGF0aDpcIiArIGUgKyBcIiAgZXJyb3I6XCIgKyB0KSA6IG8gJiYgbyhhKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUucmVsZWFzZUJ5QnVuZGxlID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB0LnJlbGVhc2UoZSlcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnJlbGVhc2VCeUJuYW1lID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB2YXIgbyA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUodCk7XG4gICAgICAgIG8gJiYgby5yZWxlYXNlKGUpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5yZWxlYXNlQnVuZGxlID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUodCk7XG4gICAgICAgIGUgJiYgY2MuYXNzZXRNYW5hZ2VyLnJlbW92ZUJ1bmRsZShlKVxuICAgIH0sXG4gICAgdC5pbnN0YW5jZSA9IG51bGwsXG4gICAgdFxufSAoKTtcbm8uUmVzb3VyY2VNZ3IgPSB1Il19