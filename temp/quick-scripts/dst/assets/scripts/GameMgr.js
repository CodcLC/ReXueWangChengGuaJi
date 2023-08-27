
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c4ecmtvD9H5a+Ua2aqA4F9', 'GameMgr');
// scripts/GameMgr.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
});

var a = t("UIMgr"),
    i = t("Utils"),
    r = t("Config"),
    n = t("DataMgr"),
    s = t("GoodsManager"),
    c = t("PlayerMgr"),
    l = function () {
  function t() {
    this.isAdddUp = !1, this.trudgeCount = 0;
  }

  return t.getInstance = function () {
    return null == this.instance && (this.instance = new t()), this.instance;
  }, t.prototype.openHomeUI = function () {
    var t = r.UIID.UIHomeNew;
    a.UIMgr.getInstance().openUI(t, -1);
  }, t.prototype.refreshMysticalShopData = function () {
    for (var t = 0; t < 9; t++) {
      for (var e = [], o = n.DataMgr.getInstance().getMysticalShopCfg(), a = 0; a < o.length; a++) {
        if (o[a].Position == t + 1) {
          var r = {
            id: o[a].ID,
            weight: o[a].RefreshWeight
          };
          e.push(r);
        }
      }

      var l = i.Utils.weight_rand(e),
          u = n.DataMgr.getInstance().getMysticalShop(l.id),
          p = s["default"].getInstance().getGoodsCfgForGoodsType(u.GoodsID),
          g = {
        id: u.ID,
        itemId: Number(p[1]),
        isBuy: !1,
        videoCount: 0
      };
      c.PlayerMgr.getInstance().getMysticalShopData().refreshMysticalShopList(t, g);
    }
  }, t;
}();

o["default"] = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1nci5qcyJdLCJuYW1lcyI6WyJ0IiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJhIiwiaSIsInIiLCJuIiwicyIsImMiLCJsIiwiaXNBZGRkVXAiLCJ0cnVkZ2VDb3VudCIsImdldEluc3RhbmNlIiwiaW5zdGFuY2UiLCJwcm90b3R5cGUiLCJvcGVuSG9tZVVJIiwiVUlJRCIsIlVJSG9tZU5ldyIsIlVJTWdyIiwib3BlblVJIiwicmVmcmVzaE15c3RpY2FsU2hvcERhdGEiLCJEYXRhTWdyIiwiZ2V0TXlzdGljYWxTaG9wQ2ZnIiwibGVuZ3RoIiwiUG9zaXRpb24iLCJpZCIsIklEIiwid2VpZ2h0IiwiUmVmcmVzaFdlaWdodCIsInB1c2giLCJVdGlscyIsIndlaWdodF9yYW5kIiwidSIsImdldE15c3RpY2FsU2hvcCIsInAiLCJnZXRHb29kc0NmZ0Zvckdvb2RzVHlwZSIsIkdvb2RzSUQiLCJnIiwiaXRlbUlkIiwiTnVtYmVyIiwiaXNCdXkiLCJ2aWRlb0NvdW50IiwiUGxheWVyTWdyIiwiZ2V0TXlzdGljYWxTaG9wRGF0YSIsInJlZnJlc2hNeXN0aWNhbFNob3BMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsT0FBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsTUFBUjtBQUNBLElBQUlDLENBQUMsR0FBR0MsT0FBUjtBQUNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXlCLFlBQXpCLEVBQXVDO0VBQ25DSSxLQUFLLEVBQUUsQ0FBQztBQUQyQixDQUF2Qzs7QUFHQSxJQUFJQyxDQUFDLEdBQUdULENBQUMsQ0FBQyxPQUFELENBQVQ7QUFBQSxJQUNBVSxDQUFDLEdBQUdWLENBQUMsQ0FBQyxPQUFELENBREw7QUFBQSxJQUVBVyxDQUFDLEdBQUdYLENBQUMsQ0FBQyxRQUFELENBRkw7QUFBQSxJQUdBWSxDQUFDLEdBQUdaLENBQUMsQ0FBQyxTQUFELENBSEw7QUFBQSxJQUlBYSxDQUFDLEdBQUdiLENBQUMsQ0FBQyxjQUFELENBSkw7QUFBQSxJQUtBYyxDQUFDLEdBQUdkLENBQUMsQ0FBQyxXQUFELENBTEw7QUFBQSxJQU1BZSxDQUFDLEdBQUcsWUFBVztFQUNYLFNBQVNmLENBQVQsR0FBYTtJQUNULEtBQUtnQixRQUFMLEdBQWdCLENBQUMsQ0FBakIsRUFDQSxLQUFLQyxXQUFMLEdBQW1CLENBRG5CO0VBRUg7O0VBQ0QsT0FBT2pCLENBQUMsQ0FBQ2tCLFdBQUYsR0FBZ0IsWUFBVztJQUM5QixPQUFPLFFBQVEsS0FBS0MsUUFBYixLQUEwQixLQUFLQSxRQUFMLEdBQWdCLElBQUluQixDQUFKLEVBQTFDLEdBQ1AsS0FBS21CLFFBREw7RUFFSCxDQUhNLEVBSVBuQixDQUFDLENBQUNvQixTQUFGLENBQVlDLFVBQVosR0FBeUIsWUFBVztJQUNoQyxJQUFJckIsQ0FBQyxHQUFHVyxDQUFDLENBQUNXLElBQUYsQ0FBT0MsU0FBZjtJQUNBZCxDQUFDLENBQUNlLEtBQUYsQ0FBUU4sV0FBUixHQUFzQk8sTUFBdEIsQ0FBNkJ6QixDQUE3QixFQUFnQyxDQUFDLENBQWpDO0VBQ0gsQ0FQTSxFQVFQQSxDQUFDLENBQUNvQixTQUFGLENBQVlNLHVCQUFaLEdBQXNDLFlBQVc7SUFDN0MsS0FBSyxJQUFJMUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtNQUN4QixLQUFLLElBQUlFLENBQUMsR0FBRyxFQUFSLEVBQVlFLENBQUMsR0FBR1EsQ0FBQyxDQUFDZSxPQUFGLENBQVVULFdBQVYsR0FBd0JVLGtCQUF4QixFQUFoQixFQUE4RG5CLENBQUMsR0FBRyxDQUF2RSxFQUEwRUEsQ0FBQyxHQUFHTCxDQUFDLENBQUN5QixNQUFoRixFQUF3RnBCLENBQUMsRUFBekY7UUFBNkYsSUFBSUwsQ0FBQyxDQUFDSyxDQUFELENBQUQsQ0FBS3FCLFFBQUwsSUFBaUI5QixDQUFDLEdBQUcsQ0FBekIsRUFBNEI7VUFDckgsSUFBSVcsQ0FBQyxHQUFHO1lBQ0pvQixFQUFFLEVBQUUzQixDQUFDLENBQUNLLENBQUQsQ0FBRCxDQUFLdUIsRUFETDtZQUVKQyxNQUFNLEVBQUU3QixDQUFDLENBQUNLLENBQUQsQ0FBRCxDQUFLeUI7VUFGVCxDQUFSO1VBSUFoQyxDQUFDLENBQUNpQyxJQUFGLENBQU94QixDQUFQO1FBQ0g7TUFORDs7TUFPQSxJQUFJSSxDQUFDLEdBQUdMLENBQUMsQ0FBQzBCLEtBQUYsQ0FBUUMsV0FBUixDQUFvQm5DLENBQXBCLENBQVI7TUFBQSxJQUNBb0MsQ0FBQyxHQUFHMUIsQ0FBQyxDQUFDZSxPQUFGLENBQVVULFdBQVYsR0FBd0JxQixlQUF4QixDQUF3Q3hCLENBQUMsQ0FBQ2dCLEVBQTFDLENBREo7TUFBQSxJQUVBUyxDQUFDLEdBQUczQixDQUFDLFdBQUQsQ0FBVUssV0FBVixHQUF3QnVCLHVCQUF4QixDQUFnREgsQ0FBQyxDQUFDSSxPQUFsRCxDQUZKO01BQUEsSUFHQUMsQ0FBQyxHQUFHO1FBQ0FaLEVBQUUsRUFBRU8sQ0FBQyxDQUFDTixFQUROO1FBRUFZLE1BQU0sRUFBRUMsTUFBTSxDQUFDTCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBRmQ7UUFHQU0sS0FBSyxFQUFFLENBQUMsQ0FIUjtRQUlBQyxVQUFVLEVBQUU7TUFKWixDQUhKO01BU0FqQyxDQUFDLENBQUNrQyxTQUFGLENBQVk5QixXQUFaLEdBQTBCK0IsbUJBQTFCLEdBQWdEQyx1QkFBaEQsQ0FBd0VsRCxDQUF4RSxFQUEyRTJDLENBQTNFO0lBQ0g7RUFDSixDQTVCTSxFQTZCUDNDLENBN0JBO0FBOEJILENBbkNHLEVBTko7O0FBMENBSSxDQUFDLFdBQUQsR0FBWVcsQ0FBWiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHQgPSByZXF1aXJlO1xudmFyIGUgPSBtb2R1bGU7XG52YXIgbyA9IGV4cG9ydHM7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogITBcbn0pO1xudmFyIGEgPSB0KFwiVUlNZ3JcIiksXG5pID0gdChcIlV0aWxzXCIpLFxuciA9IHQoXCJDb25maWdcIiksXG5uID0gdChcIkRhdGFNZ3JcIiksXG5zID0gdChcIkdvb2RzTWFuYWdlclwiKSxcbmMgPSB0KFwiUGxheWVyTWdyXCIpLFxubCA9IGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuaXNBZGRkVXAgPSAhMSxcbiAgICAgICAgdGhpcy50cnVkZ2VDb3VudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIHQuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gdGhpcy5pbnN0YW5jZSAmJiAodGhpcy5pbnN0YW5jZSA9IG5ldyB0KSxcbiAgICAgICAgdGhpcy5pbnN0YW5jZVxuICAgIH0sXG4gICAgdC5wcm90b3R5cGUub3BlbkhvbWVVSSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHIuVUlJRC5VSUhvbWVOZXc7XG4gICAgICAgIGEuVUlNZ3IuZ2V0SW5zdGFuY2UoKS5vcGVuVUkodCwgLTEpXG4gICAgfSxcbiAgICB0LnByb3RvdHlwZS5yZWZyZXNoTXlzdGljYWxTaG9wRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDk7IHQrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IFtdLCBvID0gbi5EYXRhTWdyLmdldEluc3RhbmNlKCkuZ2V0TXlzdGljYWxTaG9wQ2ZnKCksIGEgPSAwOyBhIDwgby5sZW5ndGg7IGErKykgaWYgKG9bYV0uUG9zaXRpb24gPT0gdCArIDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG9bYV0uSUQsXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogb1thXS5SZWZyZXNoV2VpZ2h0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBlLnB1c2gocilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsID0gaS5VdGlscy53ZWlnaHRfcmFuZChlKSxcbiAgICAgICAgICAgIHUgPSBuLkRhdGFNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRNeXN0aWNhbFNob3AobC5pZCksXG4gICAgICAgICAgICBwID0gcy5kZWZhdWx0LmdldEluc3RhbmNlKCkuZ2V0R29vZHNDZmdGb3JHb29kc1R5cGUodS5Hb29kc0lEKSxcbiAgICAgICAgICAgIGcgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IHUuSUQsXG4gICAgICAgICAgICAgICAgaXRlbUlkOiBOdW1iZXIocFsxXSksXG4gICAgICAgICAgICAgICAgaXNCdXk6ICExLFxuICAgICAgICAgICAgICAgIHZpZGVvQ291bnQ6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjLlBsYXllck1nci5nZXRJbnN0YW5jZSgpLmdldE15c3RpY2FsU2hvcERhdGEoKS5yZWZyZXNoTXlzdGljYWxTaG9wTGlzdCh0LCBnKVxuICAgICAgICB9XG4gICAgfSxcbiAgICB0XG59ICgpO1xuby5kZWZhdWx0ID0gbCJdfQ==