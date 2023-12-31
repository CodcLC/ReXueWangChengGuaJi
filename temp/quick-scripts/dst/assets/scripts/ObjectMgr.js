
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ObjectMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d1dfg4Zg5Av6dI2J+ehAav', 'ObjectMgr');
// scripts/ObjectMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ObjectPro = void 0;
var a = t("Utils"),
    i = t("ObjectsParent"),
    r = t("DataMgr"),
    n = t("PlayerMgr");

o.ObjectPro = function () {};

var s = function () {
  function t() {}

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.proTableExchangeProMonster = function (t) {
    var e = n.PlayerMgr.getInstance().geUserData(),
        o = e.getCurSec(),
        i = e.getCurLevel(),
        s = r.DataMgr.getInstance().getSecFactorForLevelToAtk(t.monsterType, o, i),
        c = r.DataMgr.getInstance().getSecFactorForLevelToHp(t.monsterType, o, i),
        l = a.Utils.getTabelArr(t.atk),
        u = a.Utils.randomRang(Number(l[0]), Number(l[1]));
    return {
      hp_total: Math.ceil(t.hp * c),
      hp: Math.ceil(t.hp * c),
      attack_min: Math.ceil(u * s),
      attack_max: Math.ceil(u * s),
      speed: t.moveSpped,
      atkDis: t.atkDis,
      atkInterval: t.atkInterval,
      atkSpeed: 0,
      atkCrazyProb: 0,
      atkCrazyHurt: 0,
      subHurt: 0,
      dodgeHurtProb: 0
    };
  }, t.prototype.getColorForAtkType = function (t) {
    var e = cc.color();

    switch (t) {
      case i.EnumLadleWordType.Atk_Normal:
        e = cc.color(255, 255, 255);
        break;

      case i.EnumLadleWordType.Atk_CrazyHurt:
        e = cc.color(255, 44, 44);
        break;

      case i.EnumLadleWordType.Atk_CrazyName:
        e = cc.color(255, 252, 30);
        break;

      case i.EnumLadleWordType.Atk_SkillHurt:
        e = cc.color(198, 44, 255);
        break;

      case i.EnumLadleWordType.Atk_SkillName:
        e = cc.color(255, 44, 44);
        break;

      case i.EnumLadleWordType.Hp_Recover:
        e = cc.color(64, 255, 55);
        break;

      case i.EnumLadleWordType.Miss:
        e = cc.color(55, 196, 255);
    }

    return e;
  }, t;
}();

o["default"] = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcT2JqZWN0TWdyLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIk9iamVjdFBybyIsImEiLCJpIiwiciIsIm4iLCJzIiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsInByb3RvdHlwZSIsInByb1RhYmxlRXhjaGFuZ2VQcm9Nb25zdGVyIiwiUGxheWVyTWdyIiwiZ2VVc2VyRGF0YSIsImdldEN1clNlYyIsImdldEN1ckxldmVsIiwiRGF0YU1nciIsImdldFNlY0ZhY3RvckZvckxldmVsVG9BdGsiLCJtb25zdGVyVHlwZSIsImMiLCJnZXRTZWNGYWN0b3JGb3JMZXZlbFRvSHAiLCJsIiwiVXRpbHMiLCJnZXRUYWJlbEFyciIsImF0ayIsInUiLCJyYW5kb21SYW5nIiwiTnVtYmVyIiwiaHBfdG90YWwiLCJNYXRoIiwiY2VpbCIsImhwIiwiYXR0YWNrX21pbiIsImF0dGFja19tYXgiLCJzcGVlZCIsIm1vdmVTcHBlZCIsImF0a0RpcyIsImF0a0ludGVydmFsIiwiYXRrU3BlZWQiLCJhdGtDcmF6eVByb2IiLCJhdGtDcmF6eUh1cnQiLCJzdWJIdXJ0IiwiZG9kZ2VIdXJ0UHJvYiIsImdldENvbG9yRm9yQXRrVHlwZSIsImNjIiwiY29sb3IiLCJFbnVtTGFkbGVXb3JkVHlwZSIsIkF0a19Ob3JtYWwiLCJBdGtfQ3JhenlIdXJ0IiwiQXRrX0NyYXp5TmFtZSIsIkF0a19Ta2lsbEh1cnQiLCJBdGtfU2tpbGxOYW1lIiwiSHBfUmVjb3ZlciIsIk1pc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNJLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDLEdBR0FKLENBQUMsQ0FBQ0ssU0FBRixHQUFjLEtBQUssQ0FIbkI7QUFJQSxJQUFJQyxDQUFDLEdBQUdWLENBQUMsQ0FBQyxPQUFELENBQVQ7QUFBQSxJQUNBVyxDQUFDLEdBQUdYLENBQUMsQ0FBQyxlQUFELENBREw7QUFBQSxJQUVBWSxDQUFDLEdBQUdaLENBQUMsQ0FBQyxTQUFELENBRkw7QUFBQSxJQUdBYSxDQUFDLEdBQUdiLENBQUMsQ0FBQyxXQUFELENBSEw7O0FBSUFJLENBQUMsQ0FBQ0ssU0FBRixHQUFjLFlBQVcsQ0FBRSxDQUEzQjs7QUFDQSxJQUFJSyxDQUFDLEdBQUcsWUFBVztFQUNmLFNBQVNkLENBQVQsR0FBYSxDQUFFOztFQUNmLE9BQU9BLENBQUMsQ0FBQ2UsV0FBRixHQUFnQixZQUFXO0lBQzlCLE9BQU8sUUFBUSxLQUFLQyxRQUFiLEtBQTBCLEtBQUtBLFFBQUwsR0FBZ0IsSUFBSWhCLENBQUosRUFBMUMsR0FDUCxLQUFLZ0IsUUFETDtFQUVILENBSE0sRUFJUGhCLENBQUMsQ0FBQ2lCLFNBQUYsQ0FBWUMsMEJBQVosR0FBeUMsVUFBU2xCLENBQVQsRUFBWTtJQUNqRCxJQUFJRSxDQUFDLEdBQUdXLENBQUMsQ0FBQ00sU0FBRixDQUFZSixXQUFaLEdBQTBCSyxVQUExQixFQUFSO0lBQUEsSUFDQWhCLENBQUMsR0FBR0YsQ0FBQyxDQUFDbUIsU0FBRixFQURKO0lBQUEsSUFFQVYsQ0FBQyxHQUFHVCxDQUFDLENBQUNvQixXQUFGLEVBRko7SUFBQSxJQUdBUixDQUFDLEdBQUdGLENBQUMsQ0FBQ1csT0FBRixDQUFVUixXQUFWLEdBQXdCUyx5QkFBeEIsQ0FBa0R4QixDQUFDLENBQUN5QixXQUFwRCxFQUFpRXJCLENBQWpFLEVBQW9FTyxDQUFwRSxDQUhKO0lBQUEsSUFJQWUsQ0FBQyxHQUFHZCxDQUFDLENBQUNXLE9BQUYsQ0FBVVIsV0FBVixHQUF3Qlksd0JBQXhCLENBQWlEM0IsQ0FBQyxDQUFDeUIsV0FBbkQsRUFBZ0VyQixDQUFoRSxFQUFtRU8sQ0FBbkUsQ0FKSjtJQUFBLElBS0FpQixDQUFDLEdBQUdsQixDQUFDLENBQUNtQixLQUFGLENBQVFDLFdBQVIsQ0FBb0I5QixDQUFDLENBQUMrQixHQUF0QixDQUxKO0lBQUEsSUFNQUMsQ0FBQyxHQUFHdEIsQ0FBQyxDQUFDbUIsS0FBRixDQUFRSSxVQUFSLENBQW1CQyxNQUFNLENBQUNOLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBekIsRUFBaUNNLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUF2QyxDQU5KO0lBT0EsT0FBTztNQUNITyxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsSUFBTCxDQUFVckMsQ0FBQyxDQUFDc0MsRUFBRixHQUFPWixDQUFqQixDQURQO01BRUhZLEVBQUUsRUFBRUYsSUFBSSxDQUFDQyxJQUFMLENBQVVyQyxDQUFDLENBQUNzQyxFQUFGLEdBQU9aLENBQWpCLENBRkQ7TUFHSGEsVUFBVSxFQUFFSCxJQUFJLENBQUNDLElBQUwsQ0FBVUwsQ0FBQyxHQUFHbEIsQ0FBZCxDQUhUO01BSUgwQixVQUFVLEVBQUVKLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxDQUFDLEdBQUdsQixDQUFkLENBSlQ7TUFLSDJCLEtBQUssRUFBRXpDLENBQUMsQ0FBQzBDLFNBTE47TUFNSEMsTUFBTSxFQUFFM0MsQ0FBQyxDQUFDMkMsTUFOUDtNQU9IQyxXQUFXLEVBQUU1QyxDQUFDLENBQUM0QyxXQVBaO01BUUhDLFFBQVEsRUFBRSxDQVJQO01BU0hDLFlBQVksRUFBRSxDQVRYO01BVUhDLFlBQVksRUFBRSxDQVZYO01BV0hDLE9BQU8sRUFBRSxDQVhOO01BWUhDLGFBQWEsRUFBRTtJQVpaLENBQVA7RUFjSCxDQTFCTSxFQTJCUGpELENBQUMsQ0FBQ2lCLFNBQUYsQ0FBWWlDLGtCQUFaLEdBQWlDLFVBQVNsRCxDQUFULEVBQVk7SUFDekMsSUFBSUUsQ0FBQyxHQUFHaUQsRUFBRSxDQUFDQyxLQUFILEVBQVI7O0lBQ0EsUUFBUXBELENBQVI7TUFDSSxLQUFLVyxDQUFDLENBQUMwQyxpQkFBRixDQUFvQkMsVUFBekI7UUFDSXBELENBQUMsR0FBR2lELEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLENBQUo7UUFDSjs7TUFDQSxLQUFLekMsQ0FBQyxDQUFDMEMsaUJBQUYsQ0FBb0JFLGFBQXpCO1FBQ0lyRCxDQUFDLEdBQUdpRCxFQUFFLENBQUNDLEtBQUgsQ0FBUyxHQUFULEVBQWMsRUFBZCxFQUFrQixFQUFsQixDQUFKO1FBQ0o7O01BQ0EsS0FBS3pDLENBQUMsQ0FBQzBDLGlCQUFGLENBQW9CRyxhQUF6QjtRQUNJdEQsQ0FBQyxHQUFHaUQsRUFBRSxDQUFDQyxLQUFILENBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsRUFBbkIsQ0FBSjtRQUNKOztNQUNBLEtBQUt6QyxDQUFDLENBQUMwQyxpQkFBRixDQUFvQkksYUFBekI7UUFDSXZELENBQUMsR0FBR2lELEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEdBQWxCLENBQUo7UUFDSjs7TUFDQSxLQUFLekMsQ0FBQyxDQUFDMEMsaUJBQUYsQ0FBb0JLLGFBQXpCO1FBQ0l4RCxDQUFDLEdBQUdpRCxFQUFFLENBQUNDLEtBQUgsQ0FBUyxHQUFULEVBQWMsRUFBZCxFQUFrQixFQUFsQixDQUFKO1FBQ0o7O01BQ0EsS0FBS3pDLENBQUMsQ0FBQzBDLGlCQUFGLENBQW9CTSxVQUF6QjtRQUNJekQsQ0FBQyxHQUFHaUQsRUFBRSxDQUFDQyxLQUFILENBQVMsRUFBVCxFQUFhLEdBQWIsRUFBa0IsRUFBbEIsQ0FBSjtRQUNKOztNQUNBLEtBQUt6QyxDQUFDLENBQUMwQyxpQkFBRixDQUFvQk8sSUFBekI7UUFDSTFELENBQUMsR0FBR2lELEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLEVBQVQsRUFBYSxHQUFiLEVBQWtCLEdBQWxCLENBQUo7SUFwQlI7O0lBc0JBLE9BQU9sRCxDQUFQO0VBQ0gsQ0FwRE0sRUFxRFBGLENBckRBO0FBc0RILENBeERPLEVBQVI7O0FBeURBSSxDQUFDLFdBQUQsR0FBWVUsQ0FBWiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHQgPSByZXF1aXJlO1xudmFyIGUgPSBtb2R1bGU7XG52YXIgbyA9IGV4cG9ydHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogITBcbn0pLFxuby5PYmplY3RQcm8gPSB2b2lkIDA7XG52YXIgYSA9IHQoXCJVdGlsc1wiKSxcbmkgPSB0KFwiT2JqZWN0c1BhcmVudFwiKSxcbnIgPSB0KFwiRGF0YU1nclwiKSxcbm4gPSB0KFwiUGxheWVyTWdyXCIpO1xuby5PYmplY3RQcm8gPSBmdW5jdGlvbigpIHt9O1xudmFyIHMgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KCkge31cbiAgICByZXR1cm4gdC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSB0aGlzLmluc3RhbmNlICYmICh0aGlzLmluc3RhbmNlID0gbmV3IHQpLFxuICAgICAgICB0aGlzLmluc3RhbmNlXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5wcm9UYWJsZUV4Y2hhbmdlUHJvTW9uc3RlciA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSBuLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdlVXNlckRhdGEoKSxcbiAgICAgICAgbyA9IGUuZ2V0Q3VyU2VjKCksXG4gICAgICAgIGkgPSBlLmdldEN1ckxldmVsKCksXG4gICAgICAgIHMgPSByLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRTZWNGYWN0b3JGb3JMZXZlbFRvQXRrKHQubW9uc3RlclR5cGUsIG8sIGkpLFxuICAgICAgICBjID0gci5EYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0U2VjRmFjdG9yRm9yTGV2ZWxUb0hwKHQubW9uc3RlclR5cGUsIG8sIGkpLFxuICAgICAgICBsID0gYS5VdGlscy5nZXRUYWJlbEFycih0LmF0ayksXG4gICAgICAgIHUgPSBhLlV0aWxzLnJhbmRvbVJhbmcoTnVtYmVyKGxbMF0pLCBOdW1iZXIobFsxXSkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHBfdG90YWw6IE1hdGguY2VpbCh0LmhwICogYyksXG4gICAgICAgICAgICBocDogTWF0aC5jZWlsKHQuaHAgKiBjKSxcbiAgICAgICAgICAgIGF0dGFja19taW46IE1hdGguY2VpbCh1ICogcyksXG4gICAgICAgICAgICBhdHRhY2tfbWF4OiBNYXRoLmNlaWwodSAqIHMpLFxuICAgICAgICAgICAgc3BlZWQ6IHQubW92ZVNwcGVkLFxuICAgICAgICAgICAgYXRrRGlzOiB0LmF0a0RpcyxcbiAgICAgICAgICAgIGF0a0ludGVydmFsOiB0LmF0a0ludGVydmFsLFxuICAgICAgICAgICAgYXRrU3BlZWQ6IDAsXG4gICAgICAgICAgICBhdGtDcmF6eVByb2I6IDAsXG4gICAgICAgICAgICBhdGtDcmF6eUh1cnQ6IDAsXG4gICAgICAgICAgICBzdWJIdXJ0OiAwLFxuICAgICAgICAgICAgZG9kZ2VIdXJ0UHJvYjogMFxuICAgICAgICB9XG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5nZXRDb2xvckZvckF0a1R5cGUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gY2MuY29sb3IoKTtcbiAgICAgICAgc3dpdGNoICh0KSB7XG4gICAgICAgICAgICBjYXNlIGkuRW51bUxhZGxlV29yZFR5cGUuQXRrX05vcm1hbDpcbiAgICAgICAgICAgICAgICBlID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgaS5FbnVtTGFkbGVXb3JkVHlwZS5BdGtfQ3JhenlIdXJ0OlxuICAgICAgICAgICAgICAgIGUgPSBjYy5jb2xvcigyNTUsIDQ0LCA0NCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgaS5FbnVtTGFkbGVXb3JkVHlwZS5BdGtfQ3JhenlOYW1lOlxuICAgICAgICAgICAgICAgIGUgPSBjYy5jb2xvcigyNTUsIDI1MiwgMzApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGkuRW51bUxhZGxlV29yZFR5cGUuQXRrX1NraWxsSHVydDpcbiAgICAgICAgICAgICAgICBlID0gY2MuY29sb3IoMTk4LCA0NCwgMjU1KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBpLkVudW1MYWRsZVdvcmRUeXBlLkF0a19Ta2lsbE5hbWU6XG4gICAgICAgICAgICAgICAgZSA9IGNjLmNvbG9yKDI1NSwgNDQsIDQ0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBpLkVudW1MYWRsZVdvcmRUeXBlLkhwX1JlY292ZXI6XG4gICAgICAgICAgICAgICAgZSA9IGNjLmNvbG9yKDY0LCAyNTUsIDU1KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBpLkVudW1MYWRsZVdvcmRUeXBlLk1pc3M6XG4gICAgICAgICAgICAgICAgZSA9IGNjLmNvbG9yKDU1LCAxOTYsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVcbiAgICB9LFxuICAgIHRcbn0gKCk7XG5vLmRlZmF1bHQgPSBzIl19