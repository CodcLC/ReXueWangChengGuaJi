
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BasePlatform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99a91f+tQxEWIiBgY/dL3bP', 'BasePlatform');
// scripts/BasePlatform.js

"use strict";

var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.Platform = void 0, function (t) {
  t.EDITOR = "editor", t.KUAIKAN = "h5_kuaikan", t.WECHAT = "h5_wechat", t.BYTEDANCE = "h5_bytedance", t.VIVO = "h5_vivo", t.BAIDU = "h5_baidu", t.OPPO = "h5_oppo", t.QQ = "h5_qq", t.ANDROID_233 = "android_233", t.ANDROID_XIAOMI = "android_xiaomi", t.ANDROID_VIVO = "android_vivo", t.ANDROID_OPPO = "android_oppo", t.ANDROID_oyahoo = "android_ohayoo", t.ANDROID_MMY = "android_mmy", t.ANDROID_4399 = "android_4399", t.ANDROID_DOUYIN = "android_bytedance", t.GOOGLE = "Google", t.Ios = "ios", t.KuaiShou = "kuaishou", t.HUAWEI_QUICK = "huawei", t.WEB_LINK = "weblink", t.ANDROID_TAP = "android_tap";
}(o.Platform || (o.Platform = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFzZVBsYXRmb3JtLmpzIl0sIm5hbWVzIjpbInQiLCJyZXF1aXJlIiwiZSIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlBsYXRmb3JtIiwiRURJVE9SIiwiS1VBSUtBTiIsIldFQ0hBVCIsIkJZVEVEQU5DRSIsIlZJVk8iLCJCQUlEVSIsIk9QUE8iLCJRUSIsIkFORFJPSURfMjMzIiwiQU5EUk9JRF9YSUFPTUkiLCJBTkRST0lEX1ZJVk8iLCJBTkRST0lEX09QUE8iLCJBTkRST0lEX295YWhvbyIsIkFORFJPSURfTU1ZIiwiQU5EUk9JRF80Mzk5IiwiQU5EUk9JRF9ET1VZSU4iLCJHT09HTEUiLCJJb3MiLCJLdWFpU2hvdSIsIkhVQVdFSV9RVUlDSyIsIldFQl9MSU5LIiwiQU5EUk9JRF9UQVAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxPQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxNQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFSO0FBQ0FDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7RUFDbkNJLEtBQUssRUFBRSxDQUFDO0FBRDJCLENBQXZDLEdBR0FKLENBQUMsQ0FBQ0ssUUFBRixHQUFhLEtBQUssQ0FIbEIsRUFJQSxVQUFTVCxDQUFULEVBQVk7RUFDUkEsQ0FBQyxDQUFDVSxNQUFGLEdBQVcsUUFBWCxFQUNBVixDQUFDLENBQUNXLE9BQUYsR0FBWSxZQURaLEVBRUFYLENBQUMsQ0FBQ1ksTUFBRixHQUFXLFdBRlgsRUFHQVosQ0FBQyxDQUFDYSxTQUFGLEdBQWMsY0FIZCxFQUlBYixDQUFDLENBQUNjLElBQUYsR0FBUyxTQUpULEVBS0FkLENBQUMsQ0FBQ2UsS0FBRixHQUFVLFVBTFYsRUFNQWYsQ0FBQyxDQUFDZ0IsSUFBRixHQUFTLFNBTlQsRUFPQWhCLENBQUMsQ0FBQ2lCLEVBQUYsR0FBTyxPQVBQLEVBUUFqQixDQUFDLENBQUNrQixXQUFGLEdBQWdCLGFBUmhCLEVBU0FsQixDQUFDLENBQUNtQixjQUFGLEdBQW1CLGdCQVRuQixFQVVBbkIsQ0FBQyxDQUFDb0IsWUFBRixHQUFpQixjQVZqQixFQVdBcEIsQ0FBQyxDQUFDcUIsWUFBRixHQUFpQixjQVhqQixFQVlBckIsQ0FBQyxDQUFDc0IsY0FBRixHQUFtQixnQkFabkIsRUFhQXRCLENBQUMsQ0FBQ3VCLFdBQUYsR0FBZ0IsYUFiaEIsRUFjQXZCLENBQUMsQ0FBQ3dCLFlBQUYsR0FBaUIsY0FkakIsRUFlQXhCLENBQUMsQ0FBQ3lCLGNBQUYsR0FBbUIsbUJBZm5CLEVBZ0JBekIsQ0FBQyxDQUFDMEIsTUFBRixHQUFXLFFBaEJYLEVBaUJBMUIsQ0FBQyxDQUFDMkIsR0FBRixHQUFRLEtBakJSLEVBa0JBM0IsQ0FBQyxDQUFDNEIsUUFBRixHQUFhLFVBbEJiLEVBbUJBNUIsQ0FBQyxDQUFDNkIsWUFBRixHQUFpQixRQW5CakIsRUFvQkE3QixDQUFDLENBQUM4QixRQUFGLEdBQWEsU0FwQmIsRUFxQkE5QixDQUFDLENBQUMrQixXQUFGLEdBQWdCLGFBckJoQjtBQXNCSCxDQXZCRCxDQXVCRzNCLENBQUMsQ0FBQ0ssUUFBRixLQUFlTCxDQUFDLENBQUNLLFFBQUYsR0FBYSxFQUE1QixDQXZCSCxDQUpBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCA9IHJlcXVpcmU7XG52YXIgZSA9IG1vZHVsZTtcbnZhciBvID0gZXhwb3J0cztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiAhMFxufSksXG5vLlBsYXRmb3JtID0gdm9pZCAwLFxuZnVuY3Rpb24odCkge1xuICAgIHQuRURJVE9SID0gXCJlZGl0b3JcIixcbiAgICB0LktVQUlLQU4gPSBcImg1X2t1YWlrYW5cIixcbiAgICB0LldFQ0hBVCA9IFwiaDVfd2VjaGF0XCIsXG4gICAgdC5CWVRFREFOQ0UgPSBcImg1X2J5dGVkYW5jZVwiLFxuICAgIHQuVklWTyA9IFwiaDVfdml2b1wiLFxuICAgIHQuQkFJRFUgPSBcImg1X2JhaWR1XCIsXG4gICAgdC5PUFBPID0gXCJoNV9vcHBvXCIsXG4gICAgdC5RUSA9IFwiaDVfcXFcIixcbiAgICB0LkFORFJPSURfMjMzID0gXCJhbmRyb2lkXzIzM1wiLFxuICAgIHQuQU5EUk9JRF9YSUFPTUkgPSBcImFuZHJvaWRfeGlhb21pXCIsXG4gICAgdC5BTkRST0lEX1ZJVk8gPSBcImFuZHJvaWRfdml2b1wiLFxuICAgIHQuQU5EUk9JRF9PUFBPID0gXCJhbmRyb2lkX29wcG9cIixcbiAgICB0LkFORFJPSURfb3lhaG9vID0gXCJhbmRyb2lkX29oYXlvb1wiLFxuICAgIHQuQU5EUk9JRF9NTVkgPSBcImFuZHJvaWRfbW15XCIsXG4gICAgdC5BTkRST0lEXzQzOTkgPSBcImFuZHJvaWRfNDM5OVwiLFxuICAgIHQuQU5EUk9JRF9ET1VZSU4gPSBcImFuZHJvaWRfYnl0ZWRhbmNlXCIsXG4gICAgdC5HT09HTEUgPSBcIkdvb2dsZVwiLFxuICAgIHQuSW9zID0gXCJpb3NcIixcbiAgICB0Lkt1YWlTaG91ID0gXCJrdWFpc2hvdVwiLFxuICAgIHQuSFVBV0VJX1FVSUNLID0gXCJodWF3ZWlcIixcbiAgICB0LldFQl9MSU5LID0gXCJ3ZWJsaW5rXCIsXG4gICAgdC5BTkRST0lEX1RBUCA9IFwiYW5kcm9pZF90YXBcIlxufSAoby5QbGF0Zm9ybSB8fCAoby5QbGF0Zm9ybSA9IHt9KSkiXX0=