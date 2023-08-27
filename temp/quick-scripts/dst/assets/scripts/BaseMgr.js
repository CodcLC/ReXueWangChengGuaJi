
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BaseMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b26fp4xRlDqIrlgM98Byc9', 'BaseMgr');
// scripts/BaseMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("EventMgr"),
    i = function () {
  function t() {
    this.resArray = [], this.eventList = [], this.isDestroy = !1;
  }

  return t.prototype.addEvent = function (t, e) {
    a.EventMgr.getInstance().on(t, this, e);
    var o = new Map();
    o.set(t, e), this.eventList.push(o);
  }, t.prototype.sendEvent = function (t, e, o, i, r, n) {
    a.EventMgr.getInstance().emit(t, e, o, i, r, n);
  }, t.prototype.addRes = function () {}, t.prototype.release = function () {}, t.prototype.setListenerUI = function () {}, t.prototype.offEvents = function () {
    var t = this;

    if (this.eventList && this.eventList.length > 0) {
      for (var e = 0; e < this.eventList.length; e++) {
        this.eventList[e].forEach(function (e, o) {
          a.EventMgr.getInstance().off(o, t, e);
        });
      }

      this.eventList = null;
    }
  }, t.prototype.onDestroy = function () {
    this.isDestroy = !0, this.release();
  }, t;
}();

o["default"] = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFzZU1nci5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJhIiwiaSIsInJlc0FycmF5IiwiZXZlbnRMaXN0IiwiaXNEZXN0cm95IiwicHJvdG90eXBlIiwiYWRkRXZlbnQiLCJFdmVudE1nciIsImdldEluc3RhbmNlIiwib24iLCJNYXAiLCJzZXQiLCJwdXNoIiwic2VuZEV2ZW50IiwiciIsIm4iLCJlbWl0IiwiYWRkUmVzIiwicmVsZWFzZSIsInNldExpc3RlbmVyVUkiLCJvZmZFdmVudHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwib2ZmIiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXlCLFlBQXpCLEVBQXVDO0VBQ25DSSxLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2Qzs7QUFHQSxJQUFJQyxDQUFDLEdBQUdULENBQUMsQ0FBQyxVQUFELENBQVQ7QUFBQSxJQUNBVSxDQUFDLEdBQUcsWUFBVztFQUNYLFNBQVNWLENBQVQsR0FBYTtJQUNULEtBQUtXLFFBQUwsR0FBZ0IsRUFBaEIsRUFDQSxLQUFLQyxTQUFMLEdBQWlCLEVBRGpCLEVBRUEsS0FBS0MsU0FBTCxHQUFpQixDQUFDLENBRmxCO0VBR0g7O0VBQ0QsT0FBT2IsQ0FBQyxDQUFDYyxTQUFGLENBQVlDLFFBQVosR0FBdUIsVUFBU2YsQ0FBVCxFQUFZRSxDQUFaLEVBQWU7SUFDekNPLENBQUMsQ0FBQ08sUUFBRixDQUFXQyxXQUFYLEdBQXlCQyxFQUF6QixDQUE0QmxCLENBQTVCLEVBQStCLElBQS9CLEVBQXFDRSxDQUFyQztJQUNBLElBQUlFLENBQUMsR0FBRyxJQUFJZSxHQUFKLEVBQVI7SUFDQWYsQ0FBQyxDQUFDZ0IsR0FBRixDQUFNcEIsQ0FBTixFQUFTRSxDQUFULEdBQ0EsS0FBS1UsU0FBTCxDQUFlUyxJQUFmLENBQW9CakIsQ0FBcEIsQ0FEQTtFQUVILENBTE0sRUFNUEosQ0FBQyxDQUFDYyxTQUFGLENBQVlRLFNBQVosR0FBd0IsVUFBU3RCLENBQVQsRUFBWUUsQ0FBWixFQUFlRSxDQUFmLEVBQWtCTSxDQUFsQixFQUFxQmEsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCO0lBQy9DZixDQUFDLENBQUNPLFFBQUYsQ0FBV0MsV0FBWCxHQUF5QlEsSUFBekIsQ0FBOEJ6QixDQUE5QixFQUFpQ0UsQ0FBakMsRUFBb0NFLENBQXBDLEVBQXVDTSxDQUF2QyxFQUEwQ2EsQ0FBMUMsRUFBNkNDLENBQTdDO0VBQ0gsQ0FSTSxFQVNQeEIsQ0FBQyxDQUFDYyxTQUFGLENBQVlZLE1BQVosR0FBcUIsWUFBVyxDQUFFLENBVDNCLEVBVVAxQixDQUFDLENBQUNjLFNBQUYsQ0FBWWEsT0FBWixHQUFzQixZQUFXLENBQUUsQ0FWNUIsRUFXUDNCLENBQUMsQ0FBQ2MsU0FBRixDQUFZYyxhQUFaLEdBQTRCLFlBQVcsQ0FBRSxDQVhsQyxFQVlQNUIsQ0FBQyxDQUFDYyxTQUFGLENBQVllLFNBQVosR0FBd0IsWUFBVztJQUMvQixJQUFJN0IsQ0FBQyxHQUFHLElBQVI7O0lBQ0EsSUFBSSxLQUFLWSxTQUFMLElBQWtCLEtBQUtBLFNBQUwsQ0FBZWtCLE1BQWYsR0FBd0IsQ0FBOUMsRUFBaUQ7TUFDN0MsS0FBSyxJQUFJNUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLVSxTQUFMLENBQWVrQixNQUFuQyxFQUEyQzVCLENBQUMsRUFBNUM7UUFBZ0QsS0FBS1UsU0FBTCxDQUFlVixDQUFmLEVBQWtCNkIsT0FBbEIsQ0FBMEIsVUFBUzdCLENBQVQsRUFBWUUsQ0FBWixFQUFlO1VBQ3JGSyxDQUFDLENBQUNPLFFBQUYsQ0FBV0MsV0FBWCxHQUF5QmUsR0FBekIsQ0FBNkI1QixDQUE3QixFQUFnQ0osQ0FBaEMsRUFBbUNFLENBQW5DO1FBQ0gsQ0FGK0M7TUFBaEQ7O01BR0EsS0FBS1UsU0FBTCxHQUFpQixJQUFqQjtJQUNIO0VBQ0osQ0FwQk0sRUFxQlBaLENBQUMsQ0FBQ2MsU0FBRixDQUFZbUIsU0FBWixHQUF3QixZQUFXO0lBQy9CLEtBQUtwQixTQUFMLEdBQWlCLENBQUMsQ0FBbEIsRUFDQSxLQUFLYyxPQUFMLEVBREE7RUFFSCxDQXhCTSxFQXlCUDNCLENBekJBO0FBMEJILENBaENHLEVBREo7O0FBa0NBSSxDQUFDLFdBQUQsR0FBWU0sQ0FBWiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHQgPSByZXF1aXJlO1xudmFyIGUgPSBtb2R1bGU7XG52YXIgbyA9IGV4cG9ydHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogITBcbn0pO1xudmFyIGEgPSB0KFwiRXZlbnRNZ3JcIiksXG5pID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5yZXNBcnJheSA9IFtdLFxuICAgICAgICB0aGlzLmV2ZW50TGlzdCA9IFtdLFxuICAgICAgICB0aGlzLmlzRGVzdHJveSA9ICExXG4gICAgfVxuICAgIHJldHVybiB0LnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgYS5FdmVudE1nci5nZXRJbnN0YW5jZSgpLm9uKHQsIHRoaXMsIGUpO1xuICAgICAgICB2YXIgbyA9IG5ldyBNYXA7XG4gICAgICAgIG8uc2V0KHQsIGUpLFxuICAgICAgICB0aGlzLmV2ZW50TGlzdC5wdXNoKG8pXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5zZW5kRXZlbnQgPSBmdW5jdGlvbih0LCBlLCBvLCBpLCByLCBuKSB7XG4gICAgICAgIGEuRXZlbnRNZ3IuZ2V0SW5zdGFuY2UoKS5lbWl0KHQsIGUsIG8sIGksIHIsIG4pXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5hZGRSZXMgPSBmdW5jdGlvbigpIHt9LFxuICAgIHQucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbigpIHt9LFxuICAgIHQucHJvdG90eXBlLnNldExpc3RlbmVyVUkgPSBmdW5jdGlvbigpIHt9LFxuICAgIHQucHJvdG90eXBlLm9mZkV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50TGlzdCAmJiB0aGlzLmV2ZW50TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuZXZlbnRMaXN0Lmxlbmd0aDsgZSsrKSB0aGlzLmV2ZW50TGlzdFtlXS5mb3JFYWNoKGZ1bmN0aW9uKGUsIG8pIHtcbiAgICAgICAgICAgICAgICBhLkV2ZW50TWdyLmdldEluc3RhbmNlKCkub2ZmKG8sIHQsIGUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ID0gbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3kgPSAhMCxcbiAgICAgICAgdGhpcy5yZWxlYXNlKClcbiAgICB9LFxuICAgIHRcbn0gKCk7XG5vLmRlZmF1bHQgPSBpIl19