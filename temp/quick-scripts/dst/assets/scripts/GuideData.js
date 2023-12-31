
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GuideData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ef9eLCRs1PY6Q8jW+I/UGk', 'GuideData');
// scripts/GuideData.js

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
}), o.GuideData = void 0;

var r = t("BaseData"),
    n = t("Config"),
    s = function s() {
  this.currentId = 1;
},
    c = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.ecrypt = !1, e.gameKey = n.GameConfig.AppCacheName + "guide", e.endId = 20, e.putGuideNum = 0, e;
  }

  return i(e, t), e.prototype.initAbTypeData = function () {
    this.endId = 20, this.putGuideNum = 0;
  }, e.prototype.createData = function () {
    return this.data = new s(), this.saveData(), this.data;
  }, e.prototype.getCurrentId = function () {
    return this.data.currentId;
  }, e.prototype.setCurrentId = function (t) {
    this.data.currentId = t;
  }, e.prototype.addCurrentId = function (t, e) {
    void 0 === t && (t = !0), void 0 === e && (e = 1), this.data.currentId += e, t && this.saveData();
  }, e.prototype.getGuideEnd = function () {
    return this.data.currentId >= this.endId;
  }, e;
}(r.BaseData);

o.GuideData = c;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3VpZGVEYXRhLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiYSIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiR3VpZGVEYXRhIiwiciIsIm4iLCJzIiwiY3VycmVudElkIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZWNyeXB0IiwiZ2FtZUtleSIsIkdhbWVDb25maWciLCJBcHBDYWNoZU5hbWUiLCJlbmRJZCIsInB1dEd1aWRlTnVtIiwiaW5pdEFiVHlwZURhdGEiLCJjcmVhdGVEYXRhIiwiZGF0YSIsInNhdmVEYXRhIiwiZ2V0Q3VycmVudElkIiwic2V0Q3VycmVudElkIiwiYWRkQ3VycmVudElkIiwiZ2V0R3VpZGVFbmQiLCJCYXNlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUdDLE9BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE1BQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLE9BQVI7O0FBQ0EsSUFBSUMsRUFBSjtBQUFBLElBQU9DLENBQUMsR0FBRyxVQUFRLFNBQUtDLFNBQWIsS0FBMkJGLEVBQUMsR0FBRyxXQUFTTixDQUFULEVBQVlFLENBQVosRUFBZTtFQUNyRCxPQUFPLENBQUNJLEVBQUMsR0FBR0csTUFBTSxDQUFDQyxjQUFQLElBQXlCO0lBQ2pDQyxTQUFTLEVBQUU7RUFEc0IsYUFHMUJDLEtBSDBCLElBSXJDLFVBQVNaLENBQVQsRUFBWUUsQ0FBWixFQUFlO0lBQ1hGLENBQUMsQ0FBQ1csU0FBRixHQUFjVCxDQUFkO0VBQ0gsQ0FOVyxJQU9aLFVBQVNGLENBQVQsRUFBWUUsQ0FB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WCxLQUFpQkEsQ0FBQyxHQUFHLENBQXJCLENBREEsRUFFQSxLQUFLa0MsSUFBTCxDQUFVWixTQUFWLElBQXVCdEIsQ0FGdkIsRUFHQUYsQ0FBQyxJQUFJLEtBQUtxQyxRQUFMLEVBSEw7RUFJSCxDQXJCTSxFQXNCUG5DLENBQUMsQ0FBQ1csU0FBRixDQUFZNEIsV0FBWixHQUEwQixZQUFXO0lBQ2pDLE9BQU8sS0FBS0wsSUFBTCxDQUFVWixTQUFWLElBQXVCLEtBQUtRLEtBQW5DO0VBQ0gsQ0F4Qk0sRUF5QlA5QixDQXpCQTtBQTBCSCxDQW5DRyxDQW1DRG1CLENBQUMsQ0FBQ3FCLFFBbkNELENBTEo7O0FBeUNBdEMsQ0FBQyxDQUFDZ0IsU0FBRixHQUFjSyxDQUFkIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbnZhciBhLCBpID0gdGhpcyAmJiB0aGlzLl9fZXh0ZW5kcyB8fCAoYSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICByZXR1cm4gKGEgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwge1xuICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgfVxuICAgIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHQuX19wcm90b19fID0gZVxuICAgIH0gfHxcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gaW4gZSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIG8pICYmICh0W29dID0gZVtvXSlcbiAgICB9KSh0LCBlKVxufSxcbmZ1bmN0aW9uKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdFxuICAgIH1cbiAgICBhKHQsIGUpLFxuICAgIHQucHJvdG90eXBlID0gbnVsbCA9PT0gZSA/IE9iamVjdC5jcmVhdGUoZSkgOiAoby5wcm90b3R5cGUgPSBlLnByb3RvdHlwZSwgbmV3IG8pXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSksXG5vLkd1aWRlRGF0YSA9IHZvaWQgMDtcbnZhciByID0gdChcIkJhc2VEYXRhXCIpLFxubiA9IHQoXCJDb25maWdcIiksXG5zID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jdXJyZW50SWQgPSAxXG59LFxuYyA9IGZ1bmN0aW9uKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIHJldHVybiBlLmVjcnlwdCA9ICExLFxuICAgICAgICBlLmdhbWVLZXkgPSBuLkdhbWVDb25maWcuQXBwQ2FjaGVOYW1lICsgXCJndWlkZVwiLFxuICAgICAgICBlLmVuZElkID0gMjAsXG4gICAgICAgIGUucHV0R3VpZGVOdW0gPSAwLFxuICAgICAgICBlXG4gICAgfVxuICAgIHJldHVybiBpKGUsIHQpLFxuICAgIGUucHJvdG90eXBlLmluaXRBYlR5cGVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZW5kSWQgPSAyMCxcbiAgICAgICAgdGhpcy5wdXRHdWlkZU51bSA9IDBcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmNyZWF0ZURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSA9IG5ldyBzLFxuICAgICAgICB0aGlzLnNhdmVEYXRhKCksXG4gICAgICAgIHRoaXMuZGF0YVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUuZ2V0Q3VycmVudElkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuY3VycmVudElkXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5zZXRDdXJyZW50SWQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMuZGF0YS5jdXJyZW50SWQgPSB0XG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5hZGRDdXJyZW50SWQgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHZvaWQgMCA9PT0gdCAmJiAodCA9ICEwKSxcbiAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gMSksXG4gICAgICAgIHRoaXMuZGF0YS5jdXJyZW50SWQgKz0gZSxcbiAgICAgICAgdCAmJiB0aGlzLnNhdmVEYXRhKClcbiAgICB9LFxuICAgIGUucHJvdG90eXBlLmdldEd1aWRlRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuY3VycmVudElkID49IHRoaXMuZW5kSWRcbiAgICB9LFxuICAgIGVcbn0gKHIuQmFzZURhdGEpO1xuby5HdWlkZURhdGEgPSBjIl19