
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ComFreeTimeData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c53c4wNRmZJ5pF+TzXYBDsy', 'ComFreeTimeData');
// scripts/ComFreeTimeData.js

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
});

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ComFreeTimeData = o.FreeData = void 0;

var r = t("BaseData"),
    n = t("Config"),
    s = t("ComDataMgr"),
    c = function c() {
  this.index = 0;
};

o.FreeData = c;

var l = function l() {},
    u = function u() {},
    p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.ecrypt = !1, e.gameKey = n.GameConfig.AppCacheName + "FreeTime", e.currentGoodsIds = [], e;
  }

  return i(e, t), e.prototype.createData = function () {
    this.data = new u(), this.data.itemData = [];

    for (var t = s.ComDataMgr.getInstance().getAllFreeTimeCfg(), e = 0; e < t.length; e++) {
      var o = t[e],
          a = new c();
      a.id = o.id, a.index = 0;
      var i = o.itemIds.split(n.GameConfig.splitNum),
          r = Number(i[0]);
      a.itemId = r;
      var l = s.ComDataMgr.getInstance().getFreeTimeItemById(r);
      a.isTarget = !1, a.adNum = 0, this.currentGoodsIds.push(l.goodsId), a.goodsId = l.goodsId, this.data.itemData.push(a);
    }

    return this.checkSame(), this.saveData(), this.data;
  }, e.prototype.checkSame = function () {
    for (var t = [], e = 0; e < this.data.itemData.length; e++) {
      for (var o = this.data.itemData[e], a = 0; a < t.length; a++) {
        if (t[a] == o.goodsId) {
          var i = this.check(o.id, o.index, o.goodsId, o.index);
          o.index = i.index, o.goodsId = i.goodId;
        } else t.push(o.goodsId);
      }
    }

    t.splice(0, t.length);
  }, e.prototype.check = function (t, e, o, a) {
    e++;
    var i = s.ComDataMgr.getInstance().getFreeTimeById(t).itemIds.split(n.GameConfig.splitNum);
    if (e == i.length && (e = 0), a == e) return (r = new l()).goodId = o, r.index = e, r;
    var r,
        c = s.ComDataMgr.getInstance().getFreeTimeItemById(Number(i[e]));
    if (c.goodsId != o) return (r = new l()).goodId = c.goodsId, r.index = e, r;
    this.check(t, e, o, a);
  }, e.prototype.changleFreeTimedata = function (t) {
    var e = this.getDataById(t),
        o = s.ComDataMgr.getInstance().getFreeTimeById(t).itemIds.split(n.GameConfig.splitNum),
        a = e.index + 1;
    a >= o.length && (a = 0);
    var i = Number(o[a]);
    e.adNum = 0;
    var r = s.ComDataMgr.getInstance().getFreeTimeItemById(i);
    e.goodsId = r.goodsId, e.index = a, e.itemId = r.id, e.isTarget = !1, this.checkSame(), this.saveData();
  }, e.prototype.addAdNum = function (t) {
    var e = this.getDataById(t);
    return e.adNum++, this.saveData(), e;
  }, e.prototype.addAdNumByData = function (t) {
    return t.adNum += 1, this.saveData(), t;
  }, e.prototype.initData = function () {}, e.prototype.getDataById = function (t) {
    for (var e = 0; e < this.data.itemData.length; e++) {
      var o = this.data.itemData[e];
      if (Number(o.id) == t) return o;
    }

    return null;
  }, e;
}(r.BaseData);

o.ComFreeTimeData = p;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tRnJlZVRpbWVEYXRhLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiYSIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQ29tRnJlZVRpbWVEYXRhIiwiRnJlZURhdGEiLCJyIiwibiIsInMiLCJjIiwiaW5kZXgiLCJsIiwidSIsInAiLCJhcHBseSIsImFyZ3VtZW50cyIsImVjcnlwdCIsImdhbWVLZXkiLCJHYW1lQ29uZmlnIiwiQXBwQ2FjaGVOYW1lIiwiY3VycmVudEdvb2RzSWRzIiwiY3JlYXRlRGF0YSIsImRhdGEiLCJpdGVtRGF0YSIsIkNvbURhdGFNZ3IiLCJnZXRJbnN0YW5jZSIsImdldEFsbEZyZWVUaW1lQ2ZnIiwibGVuZ3RoIiwiaWQiLCJpdGVtSWRzIiwic3BsaXQiLCJzcGxpdE51bSIsIk51bWJlciIsIml0ZW1JZCIsImdldEZyZWVUaW1lSXRlbUJ5SWQiLCJpc1RhcmdldCIsImFkTnVtIiwicHVzaCIsImdvb2RzSWQiLCJjaGVja1NhbWUiLCJzYXZlRGF0YSIsImNoZWNrIiwiZ29vZElkIiwic3BsaWNlIiwiZ2V0RnJlZVRpbWVCeUlkIiwiY2hhbmdsZUZyZWVUaW1lZGF0YSIsImdldERhdGFCeUlkIiwiYWRkQWROdW0iLCJhZGRBZE51bUJ5RGF0YSIsImluaXREYXRhIiwiQmFzZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSOztBQUNBLElBQUlDLEVBQUo7QUFBQSxJQUFP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b0QsUUFBWixHQUF1QixZQUFXLENBQUUsQ0FyRTdCLEVBc0VQL0QsQ0FBQyxDQUFDVyxTQUFGLENBQVlpRCxXQUFaLEdBQTBCLFVBQVM5RCxDQUFULEVBQVk7SUFDbEMsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtvQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJJLE1BQXZDLEVBQStDekMsQ0FBQyxFQUFoRCxFQUFvRDtNQUNoRCxJQUFJRSxDQUFDLEdBQUcsS0FBS2tDLElBQUwsQ0FBVUMsUUFBVixDQUFtQnJDLENBQW5CLENBQVI7TUFDQSxJQUFJOEMsTUFBTSxDQUFDNUMsQ0FBQyxDQUFDd0MsRUFBSCxDQUFOLElBQWdCNUMsQ0FBcEIsRUFBdUIsT0FBT0ksQ0FBUDtJQUMxQjs7SUFDRCxPQUFPLElBQVA7RUFDSCxDQTVFTSxFQTZFUEYsQ0E3RUE7QUE4RUgsQ0F0RkcsQ0FzRkRvQixDQUFDLENBQUM0QyxRQXRGRCxDQUZKOztBQXlGQTlELENBQUMsQ0FBQ2dCLGVBQUYsR0FBb0JTLENBQXBCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbnZhciBhLCBpID0gdGhpcyAmJiB0aGlzLl9fZXh0ZW5kcyB8fCAoYSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICByZXR1cm4gKGEgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwge1xuICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgfVxuICAgIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHQuX19wcm90b19fID0gZVxuICAgIH0gfHxcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gaW4gZSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIG8pICYmICh0W29dID0gZVtvXSlcbiAgICB9KSh0LCBlKVxufSxcbmZ1bmN0aW9uKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdFxuICAgIH1cbiAgICBhKHQsIGUpLFxuICAgIHQucHJvdG90eXBlID0gbnVsbCA9PT0gZSA/IE9iamVjdC5jcmVhdGUoZSkgOiAoby5wcm90b3R5cGUgPSBlLnByb3RvdHlwZSwgbmV3IG8pXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSksXG5vLkNvbUZyZWVUaW1lRGF0YSA9IG8uRnJlZURhdGEgPSB2b2lkIDA7XG52YXIgciA9IHQoXCJCYXNlRGF0YVwiKSxcbm4gPSB0KFwiQ29uZmlnXCIpLFxucyA9IHQoXCJDb21EYXRhTWdyXCIpLFxuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5kZXggPSAwXG59O1xuby5GcmVlRGF0YSA9IGM7XG52YXIgbCA9IGZ1bmN0aW9uKCkge30sXG51ID0gZnVuY3Rpb24oKSB7fSxcbnAgPSBmdW5jdGlvbih0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICByZXR1cm4gZS5lY3J5cHQgPSAhMSxcbiAgICAgICAgZS5nYW1lS2V5ID0gbi5HYW1lQ29uZmlnLkFwcENhY2hlTmFtZSArIFwiRnJlZVRpbWVcIixcbiAgICAgICAgZS5jdXJyZW50R29vZHNJZHMgPSBbXSxcbiAgICAgICAgZVxuICAgIH1cbiAgICByZXR1cm4gaShlLCB0KSxcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyB1LFxuICAgICAgICB0aGlzLmRhdGEuaXRlbURhdGEgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgdCA9IHMuQ29tRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEFsbEZyZWVUaW1lQ2ZnKCksIGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIG8gPSB0W2VdLFxuICAgICAgICAgICAgYSA9IG5ldyBjO1xuICAgICAgICAgICAgYS5pZCA9IG8uaWQsXG4gICAgICAgICAgICBhLmluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gby5pdGVtSWRzLnNwbGl0KG4uR2FtZUNvbmZpZy5zcGxpdE51bSksXG4gICAgICAgICAgICByID0gTnVtYmVyKGlbMF0pO1xuICAgICAgICAgICAgYS5pdGVtSWQgPSByO1xuICAgICAgICAgICAgdmFyIGwgPSBzLkNvbURhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRGcmVlVGltZUl0ZW1CeUlkKHIpO1xuICAgICAgICAgICAgYS5pc1RhcmdldCA9ICExLFxuICAgICAgICAgICAgYS5hZE51bSA9IDAsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHb29kc0lkcy5wdXNoKGwuZ29vZHNJZCksXG4gICAgICAgICAgICBhLmdvb2RzSWQgPSBsLmdvb2RzSWQsXG4gICAgICAgICAgICB0aGlzLmRhdGEuaXRlbURhdGEucHVzaChhKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrU2FtZSgpLFxuICAgICAgICB0aGlzLnNhdmVEYXRhKCksXG4gICAgICAgIHRoaXMuZGF0YVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuY2hlY2tTYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSBbXSwgZSA9IDA7IGUgPCB0aGlzLmRhdGEuaXRlbURhdGEubGVuZ3RoOyBlKyspIGZvciAodmFyIG8gPSB0aGlzLmRhdGEuaXRlbURhdGFbZV0sIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGErKykgaWYgKHRbYV0gPT0gby5nb29kc0lkKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuY2hlY2soby5pZCwgby5pbmRleCwgby5nb29kc0lkLCBvLmluZGV4KTtcbiAgICAgICAgICAgIG8uaW5kZXggPSBpLmluZGV4LFxuICAgICAgICAgICAgby5nb29kc0lkID0gaS5nb29kSWRcbiAgICAgICAgfSBlbHNlIHQucHVzaChvLmdvb2RzSWQpO1xuICAgICAgICB0LnNwbGljZSgwLCB0Lmxlbmd0aClcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24odCwgZSwgbywgYSkge1xuICAgICAgICBlKys7XG4gICAgICAgIHZhciBpID0gcy5Db21EYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0RnJlZVRpbWVCeUlkKHQpLml0ZW1JZHMuc3BsaXQobi5HYW1lQ29uZmlnLnNwbGl0TnVtKTtcbiAgICAgICAgaWYgKGUgPT0gaS5sZW5ndGggJiYgKGUgPSAwKSwgYSA9PSBlKSByZXR1cm4gKHIgPSBuZXcgbCkuZ29vZElkID0gbyxcbiAgICAgICAgci5pbmRleCA9IGUsXG4gICAgICAgIHI7XG4gICAgICAgIHZhciByLCBjID0gcy5Db21EYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0RnJlZVRpbWVJdGVtQnlJZChOdW1iZXIoaVtlXSkpO1xuICAgICAgICBpZiAoYy5nb29kc0lkICE9IG8pIHJldHVybiAociA9IG5ldyBsKS5nb29kSWQgPSBjLmdvb2RzSWQsXG4gICAgICAgIHIuaW5kZXggPSBlLFxuICAgICAgICByO1xuICAgICAgICB0aGlzLmNoZWNrKHQsIGUsIG8sIGEpXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5jaGFuZ2xlRnJlZVRpbWVkYXRhID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0RGF0YUJ5SWQodCksXG4gICAgICAgIG8gPSBzLkNvbURhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRGcmVlVGltZUJ5SWQodCkuaXRlbUlkcy5zcGxpdChuLkdhbWVDb25maWcuc3BsaXROdW0pLFxuICAgICAgICBhID0gZS5pbmRleCArIDE7XG4gICAgICAgIGEgPj0gby5sZW5ndGggJiYgKGEgPSAwKTtcbiAgICAgICAgdmFyIGkgPSBOdW1iZXIob1thXSk7XG4gICAgICAgIGUuYWROdW0gPSAwO1xuICAgICAgICB2YXIgciA9IHMuQ29tRGF0YU1nci5nZXRJbnN0YW5jZSgpLmdldEZyZWVUaW1lSXRlbUJ5SWQoaSk7XG4gICAgICAgIGUuZ29vZHNJZCA9IHIuZ29vZHNJZCxcbiAgICAgICAgZS5pbmRleCA9IGEsXG4gICAgICAgIGUuaXRlbUlkID0gci5pZCxcbiAgICAgICAgZS5pc1RhcmdldCA9ICExLFxuICAgICAgICB0aGlzLmNoZWNrU2FtZSgpLFxuICAgICAgICB0aGlzLnNhdmVEYXRhKClcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmFkZEFkTnVtID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0RGF0YUJ5SWQodCk7XG4gICAgICAgIHJldHVybiBlLmFkTnVtKyssXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKSxcbiAgICAgICAgZVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuYWRkQWROdW1CeURhdGEgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0LmFkTnVtICs9IDEsXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKSxcbiAgICAgICAgdFxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuaW5pdERhdGEgPSBmdW5jdGlvbigpIHt9LFxuICAgIGUucHJvdG90eXBlLmdldERhdGFCeUlkID0gZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuZGF0YS5pdGVtRGF0YS5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmRhdGEuaXRlbURhdGFbZV07XG4gICAgICAgICAgICBpZiAoTnVtYmVyKG8uaWQpID09IHQpIHJldHVybiBvXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9LFxuICAgIGVcbn0gKHIuQmFzZURhdGEpO1xuby5Db21GcmVlVGltZURhdGEgPSBwIl19