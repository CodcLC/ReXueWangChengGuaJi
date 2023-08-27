
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LanguageMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4129gp1IZPuLMnmeyFSgVu', 'LanguageMgr');
// scripts/LanguageMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.LanguageMgr = void 0;

var a = t("DataMgr"),
    i = t("Appcfg"),
    r = function () {
  function t() {
    this.currentLan = i.LanguageType.zh;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.setCurrentLanguage = function (t) {
    this.currentLan = t;
  }, t.prototype.getCurrentLanguage = function () {
    return this.currentLan;
  }, t.prototype.getImgstr = function (t) {
    var e = this.currentLan;
    return e == i.LanguageType.en ? t + "-y" : e == i.LanguageType.jp ? t + "-r" : e == i.LanguageType.zh_tw ? t + "-f" : t;
  }, t.prototype.T = function (t) {
    return a.DataMgr.getInstance().T(t, this.currentLan);
  }, t;
}();

o.LanguageMgr = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTGFuZ3VhZ2VNZ3IuanMiXSwibmFtZXMiOlsidCIsInJlcXVpcmUiLCJlIiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiTGFuZ3VhZ2VNZ3IiLCJhIiwiaSIsInIiLCJjdXJyZW50TGFuIiwiTGFuZ3VhZ2VUeXBlIiwiemgiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwicHJvdG90eXBlIiwic2V0Q3VycmVudExhbmd1YWdlIiwiZ2V0Q3VycmVudExhbmd1YWdlIiwiZ2V0SW1nc3RyIiwiZW4iLCJqcCIsInpoX3R3IiwiVCIsIkRhdGFNZ3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNJLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDLEdBR0FKLENBQUMsQ0FBQ0ssV0FBRixHQUFnQixLQUFLLENBSHJCOztBQUlBLElBQUlDLENBQUMsR0FBR1YsQ0FBQyxDQUFDLFNBQUQsQ0FBVDtBQUFBLElBQ0FXLENBQUMsR0FBR1gsQ0FBQyxDQUFDLFFBQUQsQ0FETDtBQUFBLElBRUFZLENBQUMsR0FBRyxZQUFXO0VBQ1gsU0FBU1osQ0FBVCxHQUFhO0lBQ1QsS0FBS2EsVUFBTCxHQUFrQkYsQ0FBQyxDQUFDRyxZQUFGLENBQWVDLEVBQWpDO0VBQ0g7O0VBQ0QsT0FBT2YsQ0FBQyxDQUFDZ0IsV0FBRixHQUFnQixZQUFXO0lBQzlCLE9BQU8sUUFBUSxLQUFLQyxRQUFiLEtBQTBCLEtBQUtBLFFBQUwsR0FBZ0IsSUFBSWpCLENBQUosRUFBMUMsR0FDUCxLQUFLaUIsUUFETDtFQUVILENBSE0sRUFJUGpCLENBQUMsQ0FBQ2tCLFNBQUYsQ0FBWUMsa0JBQVosR0FBaUMsVUFBU25CLENBQVQsRUFBWTtJQUN6QyxLQUFLYSxVQUFMLEdBQWtCYixDQUFsQjtFQUNILENBTk0sRUFPUEEsQ0FBQyxDQUFDa0IsU0FBRixDQUFZRSxrQkFBWixHQUFpQyxZQUFXO0lBQ3hDLE9BQU8sS0FBS1AsVUFBWjtFQUNILENBVE0sRUFVUGIsQ0FBQyxDQUFDa0IsU0FBRixDQUFZRyxTQUFaLEdBQXdCLFVBQVNyQixDQUFULEVBQVk7SUFDaEMsSUFBSUUsQ0FBQyxHQUFHLEtBQUtXLFVBQWI7SUFDQSxPQUFPWCxDQUFDLElBQUlTLENBQUMsQ0FBQ0csWUFBRixDQUFlUSxFQUFwQixHQUF5QnRCLENBQUMsR0FBRyxJQUE3QixHQUFtQ0UsQ0FBQyxJQUFJUyxDQUFDLENBQUNHLFlBQUYsQ0FBZVMsRUFBcEIsR0FBeUJ2QixDQUFDLEdBQUcsSUFBN0IsR0FBbUNFLENBQUMsSUFBSVMsQ0FBQyxDQUFDRyxZQUFGLENBQWVVLEtBQXBCLEdBQTRCeEIsQ0FBQyxHQUFHLElBQWhDLEdBQXNDQSxDQUFuSDtFQUNILENBYk0sRUFjUEEsQ0FBQyxDQUFDa0IsU0FBRixDQUFZTyxDQUFaLEdBQWdCLFVBQVN6QixDQUFULEVBQVk7SUFDeEIsT0FBT1UsQ0FBQyxDQUFDZ0IsT0FBRixDQUFVVixXQUFWLEdBQXdCUyxDQUF4QixDQUEwQnpCLENBQTFCLEVBQTZCLEtBQUthLFVBQWxDLENBQVA7RUFDSCxDQWhCTSxFQWlCUGIsQ0FqQkE7QUFrQkgsQ0F0QkcsRUFGSjs7QUF5QkFJLENBQUMsQ0FBQ0ssV0FBRixHQUFnQkcsQ0FBaEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ID0gcmVxdWlyZTtcbnZhciBlID0gbW9kdWxlO1xudmFyIG8gPSBleHBvcnRzO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KSxcbm8uTGFuZ3VhZ2VNZ3IgPSB2b2lkIDA7XG52YXIgYSA9IHQoXCJEYXRhTWdyXCIpLFxuaSA9IHQoXCJBcHBjZmdcIiksXG5yID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGFuID0gaS5MYW5ndWFnZVR5cGUuemhcbiAgICB9XG4gICAgcmV0dXJuIHQuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdGhpcy5pbnN0YW5jZSAmJiAodGhpcy5pbnN0YW5jZSA9IG5ldyB0KSxcbiAgICAgICAgdGhpcy5pbnN0YW5jZVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuc2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRMYW4gPSB0XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExhblxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUuZ2V0SW1nc3RyID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuY3VycmVudExhbjtcbiAgICAgICAgcmV0dXJuIGUgPT0gaS5MYW5ndWFnZVR5cGUuZW4gPyB0ICsgXCIteVwiOiBlID09IGkuTGFuZ3VhZ2VUeXBlLmpwID8gdCArIFwiLXJcIjogZSA9PSBpLkxhbmd1YWdlVHlwZS56aF90dyA/IHQgKyBcIi1mXCI6IHRcbiAgICB9LFxuICAgIHQucHJvdG90eXBlLlQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiBhLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5UKHQsIHRoaXMuY3VycmVudExhbilcbiAgICB9LFxuICAgIHRcbn0gKCk7XG5vLkxhbmd1YWdlTWdyID0gciJdfQ==