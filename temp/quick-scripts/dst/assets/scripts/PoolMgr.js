
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PoolMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20ec7h/8G9PQZ8e/5M6Hnno', 'PoolMgr');
// scripts/PoolMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.PoolMgr = o.PoolNode = void 0;

var a = function () {
  function t() {
    this._isReady = !1, this._createCount = 0, this._warterMark = 50, this._node = null, this._nodes = new cc.NodePool();
  }

  return t.prototype.init = function (t, e) {
    this._node = t, this._isReady = !0;

    for (var o = 0; o < e; o++) {
      var a = cc.instantiate(t);
      this._createCount++, this._nodes.put(a);
    }
  }, t.prototype.getNode = function () {
    return this._nodes.size() > 0 ? this._nodes.get() : (this._createCount++, cc.instantiate(this._node));
  }, t.prototype.freeNode = function (t) {
    t && cc.isValid(t) ? this._warterMark < this._nodes.size() ? (this._createCount--, t.destroy()) : this._nodes.put(t) : this._createCount--;
  }, t.prototype.setWaterMark = function (t) {
    this._warterMark = t;
  }, t.prototype.destory = function () {
    this._createCount -= this._nodes.size();

    for (var t = 0; t < this._nodes.size(); t++) {
      var e = this._nodes.get(t);

      e && e.destroy();
    }

    this._nodes.clear();
  }, t;
}();

o.PoolNode = a;

var i = function () {
  function t() {
    this.poolMap = new Map();
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.creatrePool = function (t, e, o) {
    if (void 0 === o && (o = 1), this.poolMap.has(t)) {
      var i = this.poolMap.get(t);
      i.destory(), i = null;
    }

    var r = new a();
    e && r.init(e, o), this.poolMap.set(t, r);
  }, t.prototype.getNode = function (t) {
    return this.poolMap.has(t) ? this.poolMap.get(t).getNode() : null;
  }, t.prototype.freeNode = function (t, e) {
    this.poolMap.has(t) ? this.poolMap.get(t).freeNode(e) : e.destroy();
  }, t.prototype.clearPool = function (t) {
    this.poolMap.has(t) && (this.poolMap.get(t).destory(), this.poolMap["delete"](t));
  }, t.instance = null, t;
}();

o.PoolMgr = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUG9vbE1nci5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJQb29sTWdyIiwiUG9vbE5vZGUiLCJhIiwiX2lzUmVhZHkiLCJfY3JlYXRlQ291bnQiLCJfd2FydGVyTWFyayIsIl9ub2RlIiwiX25vZGVzIiwiY2MiLCJOb2RlUG9vbCIsInByb3RvdHlwZSIsImluaXQiLCJpbnN0YW50aWF0ZSIsInB1dCIsImdldE5vZGUiLCJzaXplIiwiZ2V0IiwiZnJlZU5vZGUiLCJpc1ZhbGlkIiwiZGVzdHJveSIsInNldFdhdGVyTWFyayIsImRlc3RvcnkiLCJjbGVhciIsImkiLCJwb29sTWFwIiwiTWFwIiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsImNyZWF0cmVQb29sIiwiaGFzIiwiciIsInNldCIsImNsZWFyUG9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUdDLE9BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE1BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE9BQVI7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCSCxDQUF0QixFQUF5QixZQUF6QixFQUF1QztFQUNuQ0ksS0FBSyxFQUFFLENBQUM7QUFEMkIsQ0FBdkMsR0FHQUosQ0FBQyxDQUFDSyxPQUFGLEdBQVlMLENBQUMsQ0FBQ00sUUFBRixHQUFhLEtBQUssQ0FIOUI7O0FBSUEsSUFBSUMsQ0FBQyxHQUFHLFlBQVc7RUFDZixTQUFTWCxDQUFULEdBQWE7SUFDVCxLQUFLWSxRQUFMLEdBQWdCLENBQUMsQ0FBakIsRUFDQSxLQUFLQyxZQUFMLEdBQW9CLENBRHBCLEVBRUEsS0FBS0MsV0FBTCxHQUFtQixFQUZuQixFQUdBLEtBQUtDLEtBQUwsR0FBYSxJQUhiLEVBSUEsS0FBS0MsTUFBTCxHQUFjLElBQUlDLEVB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RDtFQUNILENBdEJNLEVBdUJQQSxDQUFDLENBQUNvQyxRQUFGLEdBQWEsSUF2Qk4sRUF3QlBwQyxDQXhCQTtBQXlCSCxDQTdCTyxFQUFSOztBQThCQUksQ0FBQyxDQUFDSyxPQUFGLEdBQVl1QixDQUFaIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSksXG5vLlBvb2xNZ3IgPSBvLlBvb2xOb2RlID0gdm9pZCAwO1xudmFyIGEgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLl9pc1JlYWR5ID0gITEsXG4gICAgICAgIHRoaXMuX2NyZWF0ZUNvdW50ID0gMCxcbiAgICAgICAgdGhpcy5fd2FydGVyTWFyayA9IDUwLFxuICAgICAgICB0aGlzLl9ub2RlID0gbnVsbCxcbiAgICAgICAgdGhpcy5fbm9kZXMgPSBuZXcgY2MuTm9kZVBvb2xcbiAgICB9XG4gICAgcmV0dXJuIHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHRoaXMuX25vZGUgPSB0LFxuICAgICAgICB0aGlzLl9pc1JlYWR5ID0gITA7XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZTsgbysrKSB7XG4gICAgICAgICAgICB2YXIgYSA9IGNjLmluc3RhbnRpYXRlKHQpO1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlQ291bnQrKyxcbiAgICAgICAgICAgIHRoaXMuX25vZGVzLnB1dChhKVxuICAgICAgICB9XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXROb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2Rlcy5zaXplKCkgPiAwID8gdGhpcy5fbm9kZXMuZ2V0KCkgOiAodGhpcy5fY3JlYXRlQ291bnQrKywgY2MuaW5zdGFudGlhdGUodGhpcy5fbm9kZSkpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5mcmVlTm9kZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdCAmJiBjYy5pc1ZhbGlkKHQpID8gdGhpcy5fd2FydGVyTWFyayA8IHRoaXMuX25vZGVzLnNpemUoKSA/ICh0aGlzLl9jcmVhdGVDb3VudC0tLCB0LmRlc3Ryb3koKSkgOiB0aGlzLl9ub2Rlcy5wdXQodCkgOiB0aGlzLl9jcmVhdGVDb3VudC0tXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zZXRXYXRlck1hcmsgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMuX3dhcnRlck1hcmsgPSB0XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5kZXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUNvdW50IC09IHRoaXMuX25vZGVzLnNpemUoKTtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLl9ub2Rlcy5zaXplKCk7IHQrKykge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl9ub2Rlcy5nZXQodCk7XG4gICAgICAgICAgICBlICYmIGUuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbm9kZXMuY2xlYXIoKVxuICAgIH0sXG4gICAgdFxufSAoKTtcbm8uUG9vbE5vZGUgPSBhO1xudmFyIGkgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLnBvb2xNYXAgPSBuZXcgTWFwXG4gICAgfVxuICAgIHJldHVybiB0LmdldEluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IHRoaXMuaW5zdGFuY2UgJiYgKHRoaXMuaW5zdGFuY2UgPSBuZXcgdCksXG4gICAgICAgIHRoaXMuaW5zdGFuY2VcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmNyZWF0cmVQb29sID0gZnVuY3Rpb24odCwgZSwgbykge1xuICAgICAgICBpZiAodm9pZCAwID09PSBvICYmIChvID0gMSksIHRoaXMucG9vbE1hcC5oYXModCkpIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5wb29sTWFwLmdldCh0KTtcbiAgICAgICAgICAgIGkuZGVzdG9yeSgpLFxuICAgICAgICAgICAgaSA9IG51bGxcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IG5ldyBhO1xuICAgICAgICBlICYmIHIuaW5pdChlLCBvKSxcbiAgICAgICAgdGhpcy5wb29sTWFwLnNldCh0LCByKVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0Tm9kZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9vbE1hcC5oYXModCkgPyB0aGlzLnBvb2xNYXAuZ2V0KHQpLmdldE5vZGUoKSA6IG51bGxcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLmZyZWVOb2RlID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB0aGlzLnBvb2xNYXAuaGFzKHQpID8gdGhpcy5wb29sTWFwLmdldCh0KS5mcmVlTm9kZShlKSA6IGUuZGVzdHJveSgpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5jbGVhclBvb2wgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMucG9vbE1hcC5oYXModCkgJiYgKHRoaXMucG9vbE1hcC5nZXQodCkuZGVzdG9yeSgpLCB0aGlzLnBvb2xNYXAuZGVsZXRlKHQpKVxuICAgIH0sXG4gICAgdC5pbnN0YW5jZSA9IG51bGwsXG4gICAgdFxufSAoKTtcbm8uUG9vbE1nciA9IGkiXX0=