
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/EventMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1679c2ub2tJ4L/kArQZViBz', 'EventMgr');
// scripts/EventMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.EventMgr = o.Listener = void 0;

var a = function () {
  function t(t, e) {
    this.mListener = e, this.mtarget = t;
  }

  return Object.defineProperty(t.prototype, "listener", {
    get: function get() {
      return this.mListener;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "target", {
    get: function get() {
      return this.mtarget;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}();

o.Listener = a;

var i = function () {
  function t() {
    this.global_event_list = new Array();
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.on = function (t, e, o, i) {
    if (void 0 === i && (i = !1), null != t && null != o) {
      if (null == this.global_event_list[t] && (this.global_event_list[t] = new Array()), !i && this.global_event_list[t]) for (var r = 0; r < this.global_event_list[t].length; r++) {
        if (this.global_event_list[t][r].listener == o && this.global_event_list[t][r].target == e) return;
      }
      var n = new a(e, o);
      this.global_event_list[t].push(n);
    } else console.error("RegistEvent Error");
  }, t.prototype.off = function (t, e, o) {
    if (null != t && null != o && null != this.global_event_list[t]) for (var a = 0; a < this.global_event_list[t].length; a++) {
      this.global_event_list[t][a].listener == o && this.global_event_list[t][a].target == e && this.global_event_list[t].splice(a, 1);
    }
  }, t.prototype.removeAll = function () {
    this.global_event_list = new Array();
  }, t.prototype.emit = function (t, e, o, a, i, r, n) {
    if (null != t) {
      if (null != this.global_event_list[t]) for (var s = 0; s < this.global_event_list[t].length; s++) {
        var c = this.global_event_list[t][s];
        c && c.listener.call(c.target, e, o, a, i, r, n);
      }
    } else console.error("FireEvent Error");
  }, t.instance = null, t;
}();

o.EventMgr = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXZlbnRNZ3IuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiRXZlbnRNZ3IiLCJMaXN0ZW5lciIsImEiLCJtTGlzdGVuZXIiLCJtdGFyZ2V0IiwicHJvdG90eXBlIiwiZ2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImkiLCJnbG9iYWxfZXZlbnRfbGlzdCIsIkFycmF5IiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsIm9uIiwiciIsImxlbmd0aCIsImxpc3RlbmVyIiwidGFyZ2V0IiwibiIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJvZmYiLCJzcGxpY2UiLCJyZW1vdmVBbGwiLCJlbWl0IiwicyIsImMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXlCLFlBQXpCLEVBQXVDO0VBQ25DSSxLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2QyxHQUdBSixDQUFDLENBQUNLLFFBQUYsR0FBYUwsQ0FBQyxDQUFDTSxRQUFGLEdBQWEsS0FBSyxDQUgvQjs7QUFJQSxJQUFJQyxDQUFDLEdBQUcsWUFBVztFQUNmLFNBQVNYLENBQVQsQ0FBV0EsQ0FBWCxFQUFjRSxDQUFkLEVBQWlCO0lBQ2IsS0FBS1UsU0FBTCxHQUFpQlYsQ0FBakIsRUFDQSxLQUFLVyxPQUFMLEdBQWViLENBRGY7RUFFSDs7RUFDRCxPQUFPTSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JQLENBQUMsQ0FBQ2MsU0FBeEIsRUFBbUMsVUFBbkMsRUFBK0M7SUFDbERDLEdBQUcsRUFBRSxlQUFXO01BQ1osT0FBTyxL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dGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSksXG5vLkV2ZW50TWdyID0gby5MaXN0ZW5lciA9IHZvaWQgMDtcbnZhciBhID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCh0LCBlKSB7XG4gICAgICAgIHRoaXMubUxpc3RlbmVyID0gZSxcbiAgICAgICAgdGhpcy5tdGFyZ2V0ID0gdFxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLCBcImxpc3RlbmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1MaXN0ZW5lclxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgIH0pLFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSwgXCJ0YXJnZXRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubXRhcmdldFxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgIH0pLFxuICAgIHRcbn0gKCk7XG5vLkxpc3RlbmVyID0gYTtcbnZhciBpID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfZXZlbnRfbGlzdCA9IG5ldyBBcnJheVxuICAgIH1cbiAgICByZXR1cm4gdC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0aGlzLmluc3RhbmNlICYmICh0aGlzLmluc3RhbmNlID0gbmV3IHQpLFxuICAgICAgICB0aGlzLmluc3RhbmNlXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKHQsIGUsIG8sIGkpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSAmJiAoaSA9ICExKSwgbnVsbCAhPSB0ICYmIG51bGwgIT0gbykge1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XSAmJiAodGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XSA9IG5ldyBBcnJheSksICFpICYmIHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3RbdF0pIGZvciAodmFyIHIgPSAwOyByIDwgdGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XS5sZW5ndGg7IHIrKykgaWYgKHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3RbdF1bcl0ubGlzdGVuZXIgPT0gbyAmJiB0aGlzLmdsb2JhbF9ldmVudF9saXN0W3RdW3JdLnRhcmdldCA9PSBlKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgbiA9IG5ldyBhKGUsIG8pO1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XS5wdXNoKG4pXG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmVycm9yKFwiUmVnaXN0RXZlbnQgRXJyb3JcIilcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKHQsIGUsIG8pIHtcbiAgICAgICAgaWYgKG51bGwgIT0gdCAmJiBudWxsICE9IG8gJiYgbnVsbCAhPSB0aGlzLmdsb2JhbF9ldmVudF9saXN0W3RdKSBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3RbdF0ubGVuZ3RoOyBhKyspIHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3RbdF1bYV0ubGlzdGVuZXIgPT0gbyAmJiB0aGlzLmdsb2JhbF9ldmVudF9saXN0W3RdW2FdLnRhcmdldCA9PSBlICYmIHRoaXMuZ2xvYmFsX2V2ZW50X2xpc3RbdF0uc3BsaWNlKGEsIDEpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfZXZlbnRfbGlzdCA9IG5ldyBBcnJheVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHQsIGUsIG8sIGEsIGksIHIsIG4pIHtcbiAgICAgICAgaWYgKG51bGwgIT0gdCkge1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5nbG9iYWxfZXZlbnRfbGlzdFt0XSkgZm9yICh2YXIgcyA9IDA7IHMgPCB0aGlzLmdsb2JhbF9ldmVudF9saXN0W3RdLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmdsb2JhbF9ldmVudF9saXN0W3RdW3NdO1xuICAgICAgICAgICAgICAgIGMgJiYgYy5saXN0ZW5lci5jYWxsKGMudGFyZ2V0LCBlLCBvLCBhLCBpLCByLCBuKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgY29uc29sZS5lcnJvcihcIkZpcmVFdmVudCBFcnJvclwiKVxuICAgIH0sXG4gICAgdC5pbnN0YW5jZSA9IG51bGwsXG4gICAgdFxufSAoKTtcbm8uRXZlbnRNZ3IgPSBpIl19