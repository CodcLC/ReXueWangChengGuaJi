
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TweenMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0af6vJW8VNUp73n+Lz+E7o', 'TweenMgr');
// scripts/TweenMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.TweenMgr = void 0;

var a = function () {
  function t() {
    this.twenMap = new Map();
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.getTween = function (t) {
    this.twenMap.has(t.uuid) && this.stopTween(t);
    var e = cc.tween(t);
    return this.twenMap.set(t.uuid, e), e;
  }, t.prototype.stopTween = function (t) {
    this.twenMap.has(t.uuid) && (this.twenMap.get(t.uuid).stop(), this.twenMap["delete"](t.uuid));
  }, t.prototype.playHeartAni = function (t) {
    var e = this.getTween(t);
    this.heartani(e);
  }, t.prototype.heartani = function (t) {
    t.to(.3, {
      scale: 1.04
    }).to(.2, {
      scale: .98
    }).delay(.4).to(.1, {
      scale: 1.05
    }).to(.2, {
      scale: .95
    }).union().repeatForever().start();
  }, t.prototype.popOpenAin = function (t, e) {
    t.to(.1, {
      scale: .9
    }).to(.05, {
      scale: 1.1
    }).to(.1, {
      scale: 1
    }).call(function () {
      e && e();
    }).start();
  }, t.prototype.popCloseAin = function (t, e) {
    t.stop(), t.to(.1, {
      scale: 0
    }).call(function () {
      e && e();
    }).start();
  }, t.prototype.stampAni = function (t) {
    t.scale = t.scale + 1, cc.tween(t).to(.2, {
      scale: 1
    }).start();
  }, t.prototype.anglesAni = function (t, e) {
    void 0 === e && (e = 1);
    var o = this.getTween(t);
    o.by(.5, {
      angle: 20
    }).by(.5, {
      angle: -20
    }).delay(.5).by(.2, {
      angle: 10
    }).by(.2, {
      angle: -10
    }).delay(.1).union(), -1 == e ? o.repeatForever() : o.repeat(e), o.start();
  }, t.prototype.jumpAniForever = function (t, e) {
    void 0 === e && (e = .2);
    var o = this.getTween(t);
    o.by(.2, {
      position: new cc.Vec3(0, -10, 0)
    }).by(.2, {
      position: new cc.Vec3(0, 10, 0)
    }).delay(e).union().repeatForever(), o.start();
  }, t.prototype.sharkAni = function (t, e) {
    void 0 === e && (e = 1);
    var o = this.getTween(t);
    o.by(.01, {
      position: new cc.Vec3(2, 2, 0)
    }).by(.01, {
      position: new cc.Vec3(-2, -2, 0)
    }).union(), -1 == e ? o.repeatForever() : o.repeat(e), o.start();
  }, t.prototype.quickBigAndSmallAni = function (t, e) {
    void 0 === e && (e = function e() {}), t.scale = 1, this.getTween(t).to(.15, {
      scale: 1.3
    }).to(.08, {
      scale: 1
    }).call(function () {
      e && e();
    }).start();
  }, t.prototype.rollLabAnim = function (t, e, o, a, i) {
    if (void 0 === i && (i = function i() {}), cc.isValid(e)) {
      var r = Math.abs(a - o),
          n = Math.ceil(r / 10),
          s = r / n;
      e.string = "" + o;
      var c = o;
      this.getTween(e.node).call(function () {
        t ? (c += n) >= a && (c = a) : (c -= n) <= a && (c = a), e.string = "" + c;
      }).delay(.05).union().repeat(s).call(function () {
        i && i();
      }).start();
    }
  }, t.prototype.rollBarAnim = function (t, e, o, a, i) {
    if (void 0 === i && (i = function i() {}), cc.isValid(e)) {
      var r = Math.abs(a - o) / .1;
      e.fillRange = o;
      var n = o;
      this.getTween(e.node).call(function () {
        t ? (n += .1) >= a && (n = a) : (n -= .1) <= a && (n = a), e.fillRange = n;
      }).delay(.05).union().repeat(r).call(function () {
        i && i();
      }).start();
    }
  }, t.prototype.animUpLv = function (t) {
    cc.isValid(t) && cc.tween(t).repeatForever(cc.tween().by(.1, {
      y: 3
    }).by(.2, {
      y: -6
    }).by(.1, {
      y: 3
    })).start();
  }, t.prototype.newHeartAnim = function (t) {
    var e = t.scale;
    this.getTween(t).to(.3, {
      scale: 1.04 * e
    }).to(.2, {
      scale: .98 * e
    }).delay(.4).to(.1, {
      scale: 1.05 * e
    }).to(.2, {
      scale: .95 * e
    }).union().repeatForever().start();
  }, t.prototype.playLightAni = function (t, e, o) {
    var a = e || 360,
        i = o || 10;
    this.getTween(t).by(i, {
      angle: a
    }).repeatForever().start();
  }, t.prototype.playBlinkAnim = function (t) {
    this.getTween(t).to(.5, {
      opacity: 0
    }).to(.5, {
      opacity: 255
    }).union().repeatForever().start();
  }, t;
}();

o.TweenMgr = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVHdlZW5NZ3IuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiVHdlZW5NZ3IiLCJhIiwidHdlbk1hcCIsIk1hcCIsImdldEluc3RhbmNlIiwiaW5zdGFuY2UiLCJwcm90b3R5cGUiLCJnZXRUd2VlbiIsImhhcyIsInV1aWQiLCJzdG9wVHdlZW4iLCJjYyIsInR3ZWVuIiwic2V0IiwiZ2V0Iiwic3RvcCIsInBsYXlIZWFydEFuaSIsImhlYXJ0YW5pIiwidG8iLCJzY2FsZSIsImRlbGF5IiwidW5pb24iLCJyZXBlYXRGb3JldmVyIiwic3RhcnQiLCJwb3BPcGVuQWluIiwiY2FsbCIsInBvcENsb3NlQWluIiwic3RhbXBBbmkiLCJhbmdsZXNBbmkiLCJieSIsImFuZ2xlIiwicmVwZWF0IiwianVtcEFuaUZvcmV2ZXIiLCJwb3NpdGlvbiIsIlZlYzMiLCJzaGFya0FuaSIsInF1aWNrQmlnQW5kU21hbGxBbmkiLCJyb2xsTGFiQW5pbSIsImkiLCJpc1ZhbGlkIiwiciIsIk1hdGgiLCJhYnMiLCJuIiwiY2VpbCIsInMiLCJzdHJpbmciLCJjIiwibm9kZSIsInJvbGxCYXJBbmltIiwiZmlsbFJhbmdlIiwiYW5pbVVwTHYiLCJ5IiwibmV3SGVhcnRBbmltIiwicGxheUxpZ2h0QW5pIiwicGxheUJsaW5rQW5pbSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNJLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDLEdBR0FKLENBQUMsQ0FBQ0ssUUFBRixH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Um9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSksXG5vLlR3ZWVuTWdyID0gdm9pZCAwO1xudmFyIGEgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLnR3ZW5NYXAgPSBuZXcgTWFwXG4gICAgfVxuICAgIHJldHVybiB0LmdldEluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IHRoaXMuaW5zdGFuY2UgJiYgKHRoaXMuaW5zdGFuY2UgPSBuZXcgdCksXG4gICAgICAgIHRoaXMuaW5zdGFuY2VcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmdldFR3ZWVuID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLnR3ZW5NYXAuaGFzKHQudXVpZCkgJiYgdGhpcy5zdG9wVHdlZW4odCk7XG4gICAgICAgIHZhciBlID0gY2MudHdlZW4odCk7XG4gICAgICAgIHJldHVybiB0aGlzLnR3ZW5NYXAuc2V0KHQudXVpZCwgZSksXG4gICAgICAgIGVcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnN0b3BUd2VlbiA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhpcy50d2VuTWFwLmhhcyh0LnV1aWQpICYmICh0aGlzLnR3ZW5NYXAuZ2V0KHQudXVpZCkuc3RvcCgpLCB0aGlzLnR3ZW5NYXAuZGVsZXRlKHQudXVpZCkpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5wbGF5SGVhcnRBbmkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5nZXRUd2Vlbih0KTtcbiAgICAgICAgdGhpcy5oZWFydGFuaShlKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuaGVhcnRhbmkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHQudG8oLjMsIHtcbiAgICAgICAgICAgIHNjYWxlOiAxLjA0XG4gICAgICAgIH0pLnRvKC4yLCB7XG4gICAgICAgICAgICBzY2FsZTogLjk4XG4gICAgICAgIH0pLmRlbGF5KC40KS50byguMSwge1xuICAgICAgICAgICAgc2NhbGU6IDEuMDVcbiAgICAgICAgfSkudG8oLjIsIHtcbiAgICAgICAgICAgIHNjYWxlOiAuOTVcbiAgICAgICAgfSkudW5pb24oKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUucG9wT3BlbkFpbiA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdC50byguMSwge1xuICAgICAgICAgICAgc2NhbGU6IC45XG4gICAgICAgIH0pLnRvKC4wNSwge1xuICAgICAgICAgICAgc2NhbGU6IDEuMVxuICAgICAgICB9KS50byguMSwge1xuICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfSkuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGUgJiYgZSgpXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnBvcENsb3NlQWluID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB0LnN0b3AoKSxcbiAgICAgICAgdC50byguMSwge1xuICAgICAgICAgICAgc2NhbGU6IDBcbiAgICAgICAgfSkuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGUgJiYgZSgpXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLnN0YW1wQW5pID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0LnNjYWxlID0gdC5zY2FsZSArIDEsXG4gICAgICAgIGNjLnR3ZWVuKHQpLnRvKC4yLCB7XG4gICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5hbmdsZXNBbmkgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IDEpO1xuICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0VHdlZW4odCk7XG4gICAgICAgIG8uYnkoLjUsIHtcbiAgICAgICAgICAgIGFuZ2xlOiAyMFxuICAgICAgICB9KS5ieSguNSwge1xuICAgICAgICAgICAgYW5nbGU6IC0yMFxuICAgICAgICB9KS5kZWxheSguNSkuYnkoLjIsIHtcbiAgICAgICAgICAgIGFuZ2xlOiAxMFxuICAgICAgICB9KS5ieSguMiwge1xuICAgICAgICAgICAgYW5nbGU6IC0xMFxuICAgICAgICB9KS5kZWxheSguMSkudW5pb24oKSxcbiAgICAgICAgLTEgPT0gZSA/IG8ucmVwZWF0Rm9yZXZlcigpIDogby5yZXBlYXQoZSksXG4gICAgICAgIG8uc3RhcnQoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuanVtcEFuaUZvcmV2ZXIgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IC4yKTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmdldFR3ZWVuKHQpO1xuICAgICAgICBvLmJ5KC4yLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IGNjLlZlYzMoMCwgLTEwLCAwKVxuICAgICAgICB9KS5ieSguMiwge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBjYy5WZWMzKDAsIDEwLCAwKVxuICAgICAgICB9KS5kZWxheShlKS51bmlvbigpLnJlcGVhdEZvcmV2ZXIoKSxcbiAgICAgICAgby5zdGFydCgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zaGFya0FuaSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gMSk7XG4gICAgICAgIHZhciBvID0gdGhpcy5nZXRUd2Vlbih0KTtcbiAgICAgICAgby5ieSguMDEsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgY2MuVmVjMygyLCAyLCAwKVxuICAgICAgICB9KS5ieSguMDEsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgY2MuVmVjMyggLSAyLCAtMiwgMClcbiAgICAgICAgfSkudW5pb24oKSxcbiAgICAgICAgLTEgPT0gZSA/IG8ucmVwZWF0Rm9yZXZlcigpIDogby5yZXBlYXQoZSksXG4gICAgICAgIG8uc3RhcnQoKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUucXVpY2tCaWdBbmRTbWFsbEFuaSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gZnVuY3Rpb24oKSB7fSksXG4gICAgICAgIHQuc2NhbGUgPSAxLFxuICAgICAgICB0aGlzLmdldFR3ZWVuKHQpLnRvKC4xNSwge1xuICAgICAgICAgICAgc2NhbGU6IDEuM1xuICAgICAgICB9KS50byguMDgsIHtcbiAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlICYmIGUoKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5yb2xsTGFiQW5pbSA9IGZ1bmN0aW9uKHQsIGUsIG8sIGEsIGkpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSAmJiAoaSA9IGZ1bmN0aW9uKCkge30pLCBjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgICAgICB2YXIgciA9IE1hdGguYWJzKGEgLSBvKSxcbiAgICAgICAgICAgIG4gPSBNYXRoLmNlaWwociAvIDEwKSxcbiAgICAgICAgICAgIHMgPSByIC8gbjtcbiAgICAgICAgICAgIGUuc3RyaW5nID0gXCJcIiArIG87XG4gICAgICAgICAgICB2YXIgYyA9IG87XG4gICAgICAgICAgICB0aGlzLmdldFR3ZWVuKGUubm9kZSkuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0ID8gKGMgKz0gbikgPj0gYSAmJiAoYyA9IGEpIDogKGMgLT0gbikgPD0gYSAmJiAoYyA9IGEpLFxuICAgICAgICAgICAgICAgIGUuc3RyaW5nID0gXCJcIiArIGNcbiAgICAgICAgICAgIH0pLmRlbGF5KC4wNSkudW5pb24oKS5yZXBlYXQocykuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpICYmIGkoKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5yb2xsQmFyQW5pbSA9IGZ1bmN0aW9uKHQsIGUsIG8sIGEsIGkpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSAmJiAoaSA9IGZ1bmN0aW9uKCkge30pLCBjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgICAgICB2YXIgciA9IE1hdGguYWJzKGEgLSBvKSAvIC4xO1xuICAgICAgICAgICAgZS5maWxsUmFuZ2UgPSBvO1xuICAgICAgICAgICAgdmFyIG4gPSBvO1xuICAgICAgICAgICAgdGhpcy5nZXRUd2VlbihlLm5vZGUpLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdCA/IChuICs9IC4xKSA+PSBhICYmIChuID0gYSkgOiAobiAtPSAuMSkgPD0gYSAmJiAobiA9IGEpLFxuICAgICAgICAgICAgICAgIGUuZmlsbFJhbmdlID0gblxuICAgICAgICAgICAgfSkuZGVsYXkoLjA1KS51bmlvbigpLnJlcGVhdChyKS5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGkgJiYgaSgpXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmFuaW1VcEx2ID0gZnVuY3Rpb24odCkge1xuICAgICAgICBjYy5pc1ZhbGlkKHQpICYmIGNjLnR3ZWVuKHQpLnJlcGVhdEZvcmV2ZXIoY2MudHdlZW4oKS5ieSguMSwge1xuICAgICAgICAgICAgeTogM1xuICAgICAgICB9KS5ieSguMiwge1xuICAgICAgICAgICAgeTogLTZcbiAgICAgICAgfSkuYnkoLjEsIHtcbiAgICAgICAgICAgIHk6IDNcbiAgICAgICAgfSkpLnN0YXJ0KClcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLm5ld0hlYXJ0QW5pbSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0LnNjYWxlO1xuICAgICAgICB0aGlzLmdldFR3ZWVuKHQpLnRvKC4zLCB7XG4gICAgICAgICAgICBzY2FsZTogMS4wNCAqIGVcbiAgICAgICAgfSkudG8oLjIsIHtcbiAgICAgICAgICAgIHNjYWxlOiAuOTggKiBlXG4gICAgICAgIH0pLmRlbGF5KC40KS50byguMSwge1xuICAgICAgICAgICAgc2NhbGU6IDEuMDUgKiBlXG4gICAgICAgIH0pLnRvKC4yLCB7XG4gICAgICAgICAgICBzY2FsZTogLjk1ICogZVxuICAgICAgICB9KS51bmlvbigpLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5wbGF5TGlnaHRBbmkgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgIHZhciBhID0gZSB8fCAzNjAsXG4gICAgICAgIGkgPSBvIHx8IDEwO1xuICAgICAgICB0aGlzLmdldFR3ZWVuKHQpLmJ5KGksIHtcbiAgICAgICAgICAgIGFuZ2xlOiBhXG4gICAgICAgIH0pLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5wbGF5QmxpbmtBbmltID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLmdldFR3ZWVuKHQpLnRvKC41LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLnRvKC41LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSkudW5pb24oKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKVxuICAgIH0sXG4gICAgdFxufSAoKTtcbm8uVHdlZW5NZ3IgPSBhIl19