
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/NodeSkillBook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f2f93g/yxDJIIYN0TRLrDi', 'NodeSkillBook');
// scripts/NodeSkillBook.js

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
}),
    r = void 0 && (void 0).__decorate || function (t, e, o, a) {
  var i,
      r = arguments.length,
      n = r < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, a);else for (var s = t.length - 1; s >= 0; s--) {
    (i = t[s]) && (n = (r < 3 ? i(n) : r > 3 ? i(e, o, n) : i(e, o)) || n);
  }
  return r > 3 && n && Object.defineProperty(e, o, n), n;
};

Object.defineProperty(o, "__esModule", {
  value: !0
});

var n = t("EventMgr"),
    s = t("UIMgr"),
    c = t("Utils"),
    l = t("Config"),
    u = t("GameDataMgr"),
    p = cc._decorator,
    g = p.ccclass,
    d = p.property,
    h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.NodeGrade = null, e.LabCount = null, e.skillBookId = 1, e;
  }

  return i(e, t), e.prototype.onLoad = function () {}, e.prototype.start = function () {}, e.prototype.registerEvent = function () {
    n.EventMgr.getInstance().on(l.EventName.RefreshSkillBookShow, this, this.refreshSkillBookShow);
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.node.on(cc.Node.EventType.TOUCH_END, function () {
      var e = c.Utils.posTransform(t.node.parent, t.node.getPosition(), s.UIMgr.getInstance().getUIRoot(l.UIID.UIGame));
      s.UIMgr.getInstance().openUI(l.UIID.UISkillBookInfo, -1, t.skillBookId, e);
    });
  }, e.prototype.initData = function (t) {
    this.skillBookId = t, this.registerEvent(), this.registerBtnEvent();
  }, e.prototype.refreshSkillBookShow = function (t) {
    this.skillBookId === t && this.refreshStarNum(t);
  }, e.prototype.refreshStarNum = function (t) {
    var e = u["default"].getInstance().getStarNumForSkillBookId(t);
    3 != e[0] ? this.LabCount.string = "（" + e[1] + "/" + e[2] + "）" : this.LabCount.node.active = !1;

    for (var o = 0; o < this.NodeGrade.children.length; o++) {
      var a = this.NodeGrade.getChildByName("SpStarBg" + (o + 1));
      e[0] >= o + 1 ? a.getChildByName("SpStar").active = !0 : a.getChildByName("SpStar").active = !1;
    }
  }, e.prototype.onDestroy = function () {
    n.EventMgr.getInstance().off(l.EventName.RefreshSkillBookShow, this, this.refreshSkillBookShow);
  }, r([d(cc.Node)], e.prototype, "NodeGrade", void 0), r([d(cc.Label)], e.prototype, "LabCount", void 0), r([g], e);
}(cc.Component);

o["default"] = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTm9kZVNraWxsQm9vay5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsImEiLCJpIiwiX19leHRlbmRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiciIsIl9fZGVjb3JhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJjIiwibCIsInUiLCJwIiwiY2MiLCJfZGVjb3JhdG9yIiwiZyIsImNjY2xhc3MiLCJkIiwicHJvcGVydHkiLCJoIiwiYXBwbHkiLCJOb2RlR3JhZGUiLCJMYWJDb3VudCIsInNraWxsQm9va0lkIiwib25Mb2FkIiwic3RhcnQiLCJyZWdpc3RlckV2ZW50IiwiRXZlbnRNZ3IiLCJnZXRJbnN0YW5jZSIsIm9uIiwiRXZlbnROYW1lIiwiUmVmcmVzaFNraWxsQm9va1Nob3ciLCJyZWZyZXNoU2tpbGxCb29rU2hvdyIsInJlZ2lzdGVyQnRuRXZlbnQiLCJub2RlIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsIlV0aWxzIiwicG9zVHJhbnNmb3JtIiwicGFyZW50IiwiZ2V0UG9zaXRpb24iLCJVSU1nciIsImdldFVJUm9vdCIsIlVJSUQiLCJVSUdhbWUiLCJvcGVuVUkiLCJVSVNraWxsQm9va0luZm8iLCJpbml0RGF0YSIsInJlZnJlc2hTdGFyTnVtIiwiZ2V0U3Rhck51bUZvclNraWxsQm9va0lkIiwic3RyaW5nIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJnZXRDaGlsZEJ5TmFtZSIsIm9uRGVzdHJveSIsIm9mZiIsIkxhYmVsIiwiQ29tcG9uZW50Il0sIm1hcHBp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Q0FBQ3lCLFFBQUYsQ0FBV0MsV0FBWCxHQUF5QjRCLEdBQXpCLENBQTZCOUMsQ0FBQyxDQUFDb0IsU0FBRixDQUFZQyxvQkFBekMsRUFBK0QsSUFBL0QsRUFBcUUsS0FBS0Msb0JBQTFFO0VBQ0gsQ0FoQ00sRUFpQ1BsQyxDQUFDLENBQUMsQ0FBQ21CLENBQUMsQ0FBQ0osRUFBRSxDQUFDc0IsSUFBSixDQUFGLENBQUQsRUFBZXJELENBQUMsQ0FBQ1csU0FBakIsRUFBNEIsV0FBNUIsRUFBeUMsS0FBSyxDQUE5QyxDQWpDTSxFQWtDUEssQ0FBQyxDQUFDLENBQUNtQixDQUFDLENBQUNKLEVBQUUsQ0FBQzRDLEtBQUosQ0FBRixDQUFELEVBQWdCM0UsQ0FBQyxDQUFDVyxTQUFsQixFQUE2QixVQUE3QixFQUF5QyxLQUFLLENBQTlDLENBbENNLEVBbUNQSyxDQUFDLENBQUMsQ0FBQ2lCLENBQUQsQ0FBRCxFQUFNakMsQ0FBTixDQW5DRDtBQW9DSCxDQTVDRyxDQTRDRCtCLEVBQUUsQ0FBQzZDLFNBNUNGLENBUko7O0FBcURBMUUsQ0FBQyxXQUFELEdBQVltQyxDQUFaIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbnZhciBhLCBpID0gdGhpcyAmJiB0aGlzLl9fZXh0ZW5kcyB8fCAoYSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICByZXR1cm4gKGEgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwge1xuICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgfVxuICAgIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHQuX19wcm90b19fID0gZVxuICAgIH0gfHxcbiAgICBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gaW4gZSkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIG8pICYmICh0W29dID0gZVtvXSlcbiAgICB9KSh0LCBlKVxufSxcbmZ1bmN0aW9uKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdFxuICAgIH1cbiAgICBhKHQsIGUpLFxuICAgIHQucHJvdG90eXBlID0gbnVsbCA9PT0gZSA/IE9iamVjdC5jcmVhdGUoZSkgOiAoby5wcm90b3R5cGUgPSBlLnByb3RvdHlwZSwgbmV3IG8pXG59KSxcbnIgPSB0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSB8fFxuZnVuY3Rpb24odCwgZSwgbywgYSkge1xuICAgIHZhciBpLCByID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICBuID0gciA8IDMgPyBlOiBudWxsID09PSBhID8gYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgbykgOiBhO1xuICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBSZWZsZWN0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSkgbiA9IFJlZmxlY3QuZGVjb3JhdGUodCwgZSwgbywgYSk7XG4gICAgZWxzZSBmb3IgKHZhciBzID0gdC5sZW5ndGggLSAxOyBzID49IDA7IHMtLSkoaSA9IHRbc10pICYmIChuID0gKHIgPCAzID8gaShuKSA6IHIgPiAzID8gaShlLCBvLCBuKSA6IGkoZSwgbykpIHx8IG4pO1xuICAgIHJldHVybiByID4gMyAmJiBuICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBvLCBuKSxcbiAgICBuXG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6ICEwXG59KTtcbnZhciBuID0gdChcIkV2ZW50TWdyXCIpLFxucyA9IHQoXCJVSU1nclwiKSxcbmMgPSB0KFwiVXRpbHNcIiksXG5sID0gdChcIkNvbmZpZ1wiKSxcbnUgPSB0KFwiR2FtZURhdGFNZ3JcIiksXG5wID0gY2MuX2RlY29yYXRvcixcbmcgPSBwLmNjY2xhc3MsXG5kID0gcC5wcm9wZXJ0eSxcbmggPSBmdW5jdGlvbih0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSBudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICByZXR1cm4gZS5Ob2RlR3JhZGUgPSBudWxsLFxuICAgICAgICBlLkxhYkNvdW50ID0gbnVsbCxcbiAgICAgICAgZS5za2lsbEJvb2tJZCA9IDEsXG4gICAgICAgIGVcbiAgICB9XG4gICAgcmV0dXJuIGkoZSwgdCksXG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24oKSB7fSxcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge30sXG4gICAgZS5wcm90b3R5cGUucmVnaXN0ZXJFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBuLkV2ZW50TWdyLmdldEluc3RhbmNlKCkub24obC5FdmVudE5hbWUuUmVmcmVzaFNraWxsQm9va1Nob3csIHRoaXMsIHRoaXMucmVmcmVzaFNraWxsQm9va1Nob3cpXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5yZWdpc3RlckJ0bkV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZSA9IGMuVXRpbHMucG9zVHJhbnNmb3JtKHQubm9kZS5wYXJlbnQsIHQubm9kZS5nZXRQb3NpdGlvbigpLCBzLlVJTWdyLmdldEluc3RhbmNlKCkuZ2V0VUlSb290KGwuVUlJRC5VSUdhbWUpKTtcbiAgICAgICAgICAgIHMuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkobC5VSUlELlVJU2tpbGxCb29rSW5mbywgLTEsIHQuc2tpbGxCb29rSWQsIGUpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBlLnByb3RvdHlwZS5pbml0RGF0YSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdGhpcy5za2lsbEJvb2tJZCA9IHQsXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpLFxuICAgICAgICB0aGlzLnJlZ2lzdGVyQnRuRXZlbnQoKVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUucmVmcmVzaFNraWxsQm9va1Nob3cgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHRoaXMuc2tpbGxCb29rSWQgPT09IHQgJiYgdGhpcy5yZWZyZXNoU3Rhck51bSh0KVxuICAgIH0sXG4gICAgZS5wcm90b3R5cGUucmVmcmVzaFN0YXJOdW0gPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gdS5kZWZhdWx0LmdldEluc3RhbmNlKCkuZ2V0U3Rhck51bUZvclNraWxsQm9va0lkKHQpO1xuICAgICAgICAzICE9IGVbMF0gPyB0aGlzLkxhYkNvdW50LnN0cmluZyA9IFwi77yIXCIgKyBlWzFdICsgXCIvXCIgKyBlWzJdICsgXCLvvIlcIjogdGhpcy5MYWJDb3VudC5ub2RlLmFjdGl2ZSA9ICExO1xuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHRoaXMuTm9kZUdyYWRlLmNoaWxkcmVuLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuTm9kZUdyYWRlLmdldENoaWxkQnlOYW1lKFwiU3BTdGFyQmdcIiArIChvICsgMSkpO1xuICAgICAgICAgICAgZVswXSA+PSBvICsgMSA/IGEuZ2V0Q2hpbGRCeU5hbWUoXCJTcFN0YXJcIikuYWN0aXZlID0gITAgOiBhLmdldENoaWxkQnlOYW1lKFwiU3BTdGFyXCIpLmFjdGl2ZSA9ICExXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGUucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBuLkV2ZW50TWdyLmdldEluc3RhbmNlKCkub2ZmKGwuRXZlbnROYW1lLlJlZnJlc2hTa2lsbEJvb2tTaG93LCB0aGlzLCB0aGlzLnJlZnJlc2hTa2lsbEJvb2tTaG93KVxuICAgIH0sXG4gICAgcihbZChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIk5vZGVHcmFkZVwiLCB2b2lkIDApLFxuICAgIHIoW2QoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwiTGFiQ291bnRcIiwgdm9pZCAwKSxcbiAgICByKFtnXSwgZSlcbn0gKGNjLkNvbXBvbmVudCk7XG5vLmRlZmF1bHQgPSBoIl19