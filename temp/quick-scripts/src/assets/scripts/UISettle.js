"use strict";
cc._RF.push(module, '49098CaatdJRLvAKReU+eOq', 'UISettle');
// scripts/UISettle.js

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

var n = t("BasePlatform"),
    s = t("BaseUI"),
    c = t("AudioMgr"),
    l = t("PlatformManager"),
    u = t("ResourceMgr"),
    p = t("SdkMgr"),
    g = t("TweenMgr"),
    d = t("UIMgr"),
    h = t("TimeUtils"),
    f = t("Main"),
    m = t("Config"),
    y = t("TrackDataEvent"),
    v = t("DataMgr"),
    I = t("GameDataMgr"),
    k = t("GoodsManager"),
    C = t("PlayerMgr"),
    S = t("UIGuide"),
    M = cc._decorator,
    _ = M.ccclass,
    b = M.property,
    D = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    return e.NodeRewardItem = null, e.BtnBack = null, e.BtnFreeGet = null, e.BtnVideoGet = null, e.NodePass = null, e.SpTitlePass = null, e.SpBgPass = null, e.NodeFail = null, e.SpTitleFail = null, e.SpBgFail = null, e.LayoutReward = null, e.NodeBtn = null, e.NodeStrategy = null, e.NodeBar = null, e.SpLevelBar = null, e.LabLevelNum = null, e.callback = function () {}, e.isWin = !0, e.curSec = 1, e.curLevel = 1, e;
  }

  return i(e, t), e.prototype.init = function (t, e, o, a) {
    this.callback = t || function () {}, this.isWin = e, this.curSec = o || 1, this.curLevel = a || 1, C.PlayerMgr.getInstance().getShareData().stopRecord(!1);
  }, e.prototype.onLoad = function () {
    this.guideData();
  }, e.prototype.start = function () {
    this.registerBtnEvent(), this.shareRecord(), l.PlatformManager.getInstance().showBlockAd(1), p.SdkMgr.getInstance().showInsert(p.AdType.FreeLotty), this.carryCallback(), this.initData(), this.initView();
  }, e.prototype.shareRecord = function () {
    if (1 != this.curSec) {
      var t = C.PlayerMgr.getInstance().getShareData();
      t.stopRecord(!1), t.getCanShare() && p.SdkMgr.getInstance().getShare() && l.PlatformManager.currentPlatform == n.Platform.BYTEDANCE && d.UIMgr.getInstance().openUI(m.UIID.UIShareVideo, -1);
    }
  }, e.prototype.guideData = function () {
    var t = C.PlayerMgr.getInstance().geUserData();

    if (this.isWin && 2 == t.getCurSec() && 1 == t.getEnterFirstSecCount()) {
      var e = C.PlayerMgr.getInstance().getGuideData();
      e.getGuideEnd() || e.getCurrentId() == 7 + e.putGuideNum && (this.guideCfg = new S.GuildCfg());
    }
  }, e.prototype.guideShow = function () {
    var t = C.PlayerMgr.getInstance().geUserData();

    if (this.isWin && 2 == t.getCurSec() && 1 == t.getEnterFirstSecCount()) {
      var e = C.PlayerMgr.getInstance().getGuideData();
      e.getGuideEnd() || e.getCurrentId() == 7 + e.putGuideNum && this.guideCfg && (this.guideCfg.distNode = this.BtnFreeGet, this.openUICallBack(m.UIID.UIGuide, function () {
        e.addCurrentId();
      }, this.guideCfg));
    }
  }, e.prototype.carryCallback = function () {
    this.callback && this.callback();
  }, e.prototype.registerBtnEvent = function () {
    var t = this;
    this.BtnBack.on(cc.Node.EventType.TOUCH_END, function () {
      t.closeView();
    }), this.BtnFreeGet.on(cc.Node.EventType.TOUCH_END, function () {
      C.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.guide8);
      var e = I["default"].getInstance().getDropGoodsList();
      k["default"].getInstance().getReward(e), t.closeView();
    }), this.BtnVideoGet.on(cc.Node.EventType.TOUCH_END, function () {
      var e = h.TimeUtils.GetTimeBySecond(),
          o = h.TimeUtils.GetTimeByHours2();
      p.SdkMgr.getInstance().playVideo(1, function () {
        var a = h.TimeUtils.GetTimeBySecond(),
            i = h.TimeUtils.GetTimeByHours2();
        C.PlayerMgr.getInstance().getTrackData().testTrackTime("doubleaward", o, i, e, a), C.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.doubleaward), C.PlayerMgr.getInstance().getTrackData().youmengTrackNew("doubleaward_b");
        var r = I["default"].getInstance().getDropGoodsList();
        k["default"].getInstance().getRewardDouble(r), t.scheduleOnce(function () {
          t.closeView();
        }, .01);
      });
    });
  }, e.prototype.initData = function () {
    I["default"].getInstance().setGameState(m.EnumGameState.GamePrePare), this.initNodeProp();
  }, e.prototype.initNodeProp = function () {
    this.SpBgPass.opacity = 0, this.SpBgPass.scale = 1.5, this.SpTitlePass.opacity = 0, this.SpTitlePass.scale = 1.5, this.SpBgFail.opacity = 0, this.SpBgFail.scale = 1.5, this.SpTitleFail.opacity = 0, this.SpTitleFail.scale = 1.5, this.NodeBar.opacity = 0, this.NodeStrategy.opacity = 0, this.NodeBtn.opacity = 0;
  }, e.prototype.initView = function () {
    this.initPassAndFailView(), this.initBarView(), this.settleAnim();
  }, e.prototype.settleAnim = function () {
    var t = this;
    this.isWin ? (cc.tween(this.SpTitlePass).parallel(cc.tween().to(.3, {
      scale: 1
    }), cc.tween().to(.3, {
      opacity: 255
    })).start(), cc.tween(this.NodeBar).to(.3, {
      opacity: 255
    }).call(function () {
      var e = v.DataMgr.getInstance().getSecCfg(t.curSec).levelCount;
      g.TweenMgr.getInstance().rollBarAnim(!0, t.SpLevelBar, 0, t.curLevel / e, function () {
        cc.tween(t.SpBgPass).parallel(cc.tween().to(.3, {
          scale: 1
        }), cc.tween().to(.3, {
          opacity: 255
        })).call(function () {
          t.initRewardView(function () {
            cc.tween(t.NodeBtn).to(.5, {
              opacity: 255
            }).call(function () {
              t.playVideoBtnAnim(), t.guideShow();
            }).start();
          });
        }).start();
      });
    }).start()) : (cc.tween(this.SpTitleFail).parallel(cc.tween().to(.3, {
      scale: 1
    }), cc.tween().to(.3, {
      opacity: 255
    })).start(), cc.tween(this.NodeBar).to(.3, {
      opacity: 255
    }).call(function () {
      var e = v.DataMgr.getInstance().getSecCfg(t.curSec).levelCount;
      g.TweenMgr.getInstance().rollBarAnim(!0, t.SpLevelBar, 0, t.curLevel / e, function () {
        cc.tween(t.SpBgFail).parallel(cc.tween().to(.3, {
          scale: 1
        }), cc.tween().to(.3, {
          opacity: 255
        })).call(function () {
          t.initRewardView(function () {
            cc.tween(t.NodeStrategy).to(.5, {
              opacity: 255
            }).call(function () {
              cc.tween(t.NodeBtn).to(.5, {
                opacity: 255
              }).call(function () {
                t.playVideoBtnAnim();
              }).start();
            }).start();
          });
        }).start();
      });
    }).start());
  }, e.prototype.initPassAndFailView = function () {
    this.isWin ? c.AudioMgr.getInstance().playMusic(m.AudioId.Sound_Victory, "bg", !1) : c.AudioMgr.getInstance().playMusic(m.AudioId.Sound_Fail, "bg", !1), this.NodePass.active = this.isWin, this.NodeFail.active = !this.isWin, this.NodeStrategy.active = !this.isWin;
  }, e.prototype.initBarView = function () {
    var t = v.DataMgr.getInstance().getSecCfg(this.curSec).levelCount;
    this.LabLevelNum.string = this.curLevel + "/" + t;
  }, e.prototype.initRewardView = function (t) {
    var e = this;
    void 0 === t && (t = function t() {});
    var o = I["default"].getInstance().getDropGoodsList();
    (!o || o.length <= 0) && t && t();

    for (var a = function a(_a2) {
      i.scheduleOnce(function () {
        var i = cc.instantiate(e.NodeRewardItem);
        i.parent = e.LayoutReward, i.position = cc.Vec3.ZERO;
        var r,
            n = v.DataMgr.getInstance().getGoodsCfg(o[_a2].id);

        switch (u.ResourceMgr.getInstance().loadSpriteframe(n.bundleQuality, n.iconQuality, function (t) {
          i.getComponent(cc.Sprite).spriteFrame = t;
        }), i.getChildByName("LabName").color = k["default"].getInstance().seleColor(n.goodsQualityId), o[_a2].goodsType) {
          case "gold":
          case "inGot":
          case "power":
            r = v.DataMgr.getInstance().getGoodsCfg(o[_a2].goodsId), u.ResourceMgr.getInstance().loadSpriteframe(r.bundle, r.goodsGameIcon, function (t) {
              i.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t;
            }), i.getChildByName("LabCount").getComponent(cc.Label).string = "x" + o[_a2].iCount, i.getChildByName("LabName").getComponent(cc.Label).string = "" + r.goodsName;
            break;

          case "equip":
            r = v.DataMgr.getInstance().getEquipCfg(o[_a2].goodsId), u.ResourceMgr.getInstance().loadSpriteframe(r.bundle, r.equipIcon, function (t) {
              i.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t;
            }), i.getChildByName("LabCount").active = !1, i.getChildByName("LabName").getComponent(cc.Label).string = "" + r.equipName;
            break;

          case "skillBook":
            r = v.DataMgr.getInstance().getSkillBook(o[_a2].goodsId), v.DataMgr.getInstance().getSkillQuality(r.qualityId), i.getChildByName("LabSkillBookName").getComponent(cc.Label).string = r.name, i.getChildByName("SpIcon").scale = .75, e.loadSpriteFrame("iconImg", r.SkillIcon, function (t) {
              i.getChildByName("SpIcon").getComponent(cc.Sprite).spriteFrame = t;
            }), i.getChildByName("LabSkillBookName").active = !1, i.getChildByName("LabCount").active = !1, i.getChildByName("LabName").getComponent(cc.Label).string = "" + r.name;
        }

        _a2 >= o.length - 1 && t && t();
      }, .3 * _a2);
    }, i = this, r = 0; r < o.length; r++) {
      a(r);
    }
  }, e.prototype.playVideoBtnAnim = function () {}, e.prototype.closeView = function () {
    var t = this;
    f["default"].instance.openPetTimer(), I["default"].getInstance().resetDropGoodsData(), l.PlatformManager.getInstance().hideBlockAd(1);
    var e = m.UIID.UIHomeNew;
    d.UIMgr.getInstance().openUIOfCallback(e, -1, function () {
      p.SdkMgr.getInstance().showInsert(p.AdType.FreeLotty), (C.PlayerMgr.getInstance().getGuideData().getGuideEnd() || 2 == t.curSec) && p.SdkMgr.getInstance().toAppStore();
    }), c.AudioMgr.getInstance().playMusic(m.AudioId.BGM_Main, "bg"), this.closeUI();
  }, r([b({
    type: cc.Prefab,
    tooltip: "奖励item"
  })], e.prototype, "NodeRewardItem", void 0), r([b(cc.Node)], e.prototype, "BtnBack", void 0), r([b(cc.Node)], e.prototype, "BtnFreeGet", void 0), r([b(cc.Node)], e.prototype, "BtnVideoGet", void 0), r([b(cc.Node)], e.prototype, "NodePass", void 0), r([b(cc.Node)], e.prototype, "SpTitlePass", void 0), r([b(cc.Node)], e.prototype, "SpBgPass", void 0), r([b(cc.Node)], e.prototype, "NodeFail", void 0), r([b(cc.Node)], e.prototype, "SpTitleFail", void 0), r([b(cc.Node)], e.prototype, "SpBgFail", void 0), r([b(cc.Node)], e.prototype, "LayoutReward", void 0), r([b(cc.Node)], e.prototype, "NodeBtn", void 0), r([b(cc.Node)], e.prototype, "NodeStrategy", void 0), r([b(cc.Node)], e.prototype, "NodeBar", void 0), r([b(cc.Sprite)], e.prototype, "SpLevelBar", void 0), r([b(cc.Label)], e.prototype, "LabLevelNum", void 0), r([_], e);
}(s["default"]);

o["default"] = D;

cc._RF.pop();