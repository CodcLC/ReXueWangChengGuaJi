
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CommonModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6fa0r5epZCha9FIIqEM9Af', 'CommonModel');
// scripts/CommonModel.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.CommonModel = void 0;

var a = t("AudioMgr"),
    i = t("UIMgr"),
    r = t("CommonBirge"),
    n = t("CommonCfg"),
    s = t("ComDataMgr"),
    c = t("ComPlayerMgr"),
    l = function () {
  function t() {}

  return t.Instance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.initCommon = function (t) {
    i.UIMgr.getInstance().addUICnf(n.ComUICF), a.AudioMgr.getInstance().addAdConf(n.ComAudioCF), s.ComDataMgr.getInstance().preload(function () {
      c.ComPlayerMgr.getInstance().preload(function () {
        t && t();
      });
    });
  }, t.prototype.setGameBrige = function (t) {
    r.CommonBrige.Instance().setGameBrige(t);
  }, t.prototype.addReward = function (t, e, o) {
    void 0 === o && (o = !0), o && c.ComPlayerMgr.getInstance().addCollection(t, e);
  }, t;
}();

o.CommonModel = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tbW9uTW9kZWwuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQ29tbW9uTW9kZWwiLCJhIiwiaSIsInIiLCJuIiwicyIsImMiLCJsIiwiSW5zdGFuY2UiLCJpbnN0YW5jZSIsInByb3RvdHlwZSIsImluaXRDb21tb24iLCJVSU1nciIsImdldEluc3RhbmNlIiwiYWRkVUlDbmYiLCJDb21VSUNGIiwiQXVkaW9NZ3IiLCJhZGRBZENvbmYiLCJDb21BdWRpb0NGIiwiQ29tRGF0YU1nciIsInByZWxvYWQiLCJDb21QbGF5ZXJNZ3IiLCJzZXRHYW1lQnJpZ2UiLCJDb21tb25CcmlnZSIsImFkZFJld2FyZCIsImFkZENvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNJLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDLEdBR0FKLENBQUMsQ0FBQ0ssV0FBRixHQUFnQixLQUFLLENBSHJCOztBQUlBLElBQUlDLENBQUMsR0FBR1YsQ0FBQyxDQUFDLFVBQUQsQ0FBVDtBQUFBLElBQ0FXLENBQUMsR0FBR1gsQ0FBQyxDQUFDLE9BQUQsQ0FETDtBQUFBLElBRUFZLENBQUMsR0FBR1osQ0FBQyxDQUFDLGFBQUQsQ0FGTDtBQUFBLElBR0FhLENBQUMsR0FBR2IsQ0FBQyxDQUFDLFdBQUQsQ0FITDtBQUFBLElBSUFjLENBQUMsR0FBR2QsQ0FBQyxDQUFDLFlBQUQsQ0FKTDtBQUFBLElBS0FlLENBQUMsR0FBR2YsQ0FBQyxDQUFDLGNBQUQsQ0FMTDtBQUFBLElBTUFnQixDQUFDLEdBQUcsWUFBVztFQUNYLFNBQVNoQixDQUFULEdBQWEsQ0FBRTs7RUFDZixPQUFPQSxDQUFDLENBQUNpQixRQUFGLEdBQWEsWUFBVztJQUMzQixPQUFPLFFBQVEsS0FBS0MsUUFBYixLQUEwQixLQUFLQSxRQUFMLEdBQWdCLElBQUlsQixDQUFKLEVBQTFDLEdBQ1AsS0FBS2tCLFFBREw7RUFFSCxDQUhNLEVBSVBsQixDQUFDLENBQUNtQixTQUFGLENBQVlDLFVBQVosR0FBeUIsVUFBU3BCLENBQVQsRUFBWTtJQUNqQ1csQ0FBQyxDQUFDVSxLQUFGLENBQVFDLFdBQVIsR0FBc0JDLFFBQXRCLENBQStCVixDQUFDLENBQUNXLE9BQWpDLEdBQ0FkLENBQUMsQ0FBQ2UsUUFBRixDQUFXSCxXQUFYLEdBQXlCSSxTQUF6QixDQUFtQ2IsQ0FBQyxDQUFDYyxVQUFyQyxDQURBLEVBRUFiLENBQUMsQ0FBQ2MsVUFBRixDQUFhTixXQUFiLEdBQTJCTyxPQUEzQixDQUFtQyxZQUFXO01BQzFDZCxDQUFDLENBQUNlLFlBQUYsQ0FBZVIsV0FBZixHQUE2Qk8sT0FBN0IsQ0FBcUMsWUFBVztRQUM1QzdCLENBQUMsSUFBSUEsQ0FBQyxFQUFOO01BQ0gsQ0FGRDtJQUdILENBSkQsQ0FGQTtFQU9ILENBWk0sRUFhUEEsQ0FBQyxDQUFDbUIsU0FBRixDQUFZWSxZQUFaLEdBQTJCLFVBQVMvQixDQUFULEVBQVk7SUFDbkNZLENBQUMsQ0FBQ29CLFdBQUYsQ0FBY2YsUUFBZCxHQUF5QmMsWUFBekIsQ0FBc0MvQixDQUF0QztFQUNILENBZk0sRUFnQlBBLENBQUMsQ0FBQ21CLFNBQUYsQ0FBWWMsU0FBWixHQUF3QixVQUFTakMsQ0FBVCxFQUFZRSxDQUFaLEVBQWVFLENBQWYsRUFBa0I7SUFDdEMsS0FBSyxDQUFMLEtBQVdBLENBQVgsS0FBaUJBLENBQUMsR0FBRyxDQUFDLENBQXRCLEdBQ0FBLENBQUMsSUFBSVcsQ0FBQyxDQUFDZSxZQUFGLENBQWVSLFdBQWYsR0FBNkJZLGFBQTdCLENBQTJDbEMsQ0FBM0MsRUFBOENFLENBQTlDLENBREw7RUFFSCxDQW5CTSxFQW9CUEYsQ0FwQkE7QUFxQkgsQ0F2QkcsRUFOSjs7QUE4QkFJLENBQUMsQ0FBQ0ssV0FBRixHQUFnQk8sQ0FBaEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KSxcbm8uQ29tbW9uTW9kZWwgPSB2b2lkIDA7XG52YXIgYSA9IHQoXCJBdWRpb01nclwiKSxcbmkgPSB0KFwiVUlNZ3JcIiksXG5yID0gdChcIkNvbW1vbkJpcmdlXCIpLFxubiA9IHQoXCJDb21tb25DZmdcIiksXG5zID0gdChcIkNvbURhdGFNZ3JcIiksXG5jID0gdChcIkNvbVBsYXllck1nclwiKSxcbmwgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KCkge31cbiAgICByZXR1cm4gdC5JbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0aGlzLmluc3RhbmNlICYmICh0aGlzLmluc3RhbmNlID0gbmV3IHQpLFxuICAgICAgICB0aGlzLmluc3RhbmNlXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5pbml0Q29tbW9uID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpLlVJTWdyLmdldEluc3RhbmNlKCkuYWRkVUlDbmYobi5Db21VSUNGKSxcbiAgICAgICAgYS5BdWRpb01nci5nZXRJbnN0YW5jZSgpLmFkZEFkQ29uZihuLkNvbUF1ZGlvQ0YpLFxuICAgICAgICBzLkNvbURhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5wcmVsb2FkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYy5Db21QbGF5ZXJNZ3IuZ2V0SW5zdGFuY2UoKS5wcmVsb2FkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHQgJiYgdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuc2V0R2FtZUJyaWdlID0gZnVuY3Rpb24odCkge1xuICAgICAgICByLkNvbW1vbkJyaWdlLkluc3RhbmNlKCkuc2V0R2FtZUJyaWdlKHQpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5hZGRSZXdhcmQgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgIHZvaWQgMCA9PT0gbyAmJiAobyA9ICEwKSxcbiAgICAgICAgbyAmJiBjLkNvbVBsYXllck1nci5nZXRJbnN0YW5jZSgpLmFkZENvbGxlY3Rpb24odCwgZSlcbiAgICB9LFxuICAgIHRcbn0gKCk7XG5vLkNvbW1vbk1vZGVsID0gbCJdfQ==