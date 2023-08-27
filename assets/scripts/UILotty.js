var t = require;
var e = module;
var o = exports;
var a, i = this && this.__extends || (a = function(t, e) {
    return (a = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array &&
    function(t, e) {
        t.__proto__ = e
    } ||
    function(t, e) {
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
    })(t, e)
},
function(t, e) {
    function o() {
        this.constructor = t
    }
    a(t, e),
    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
}),
r = this && this.__decorate ||
function(t, e, o, a) {
    var i, r = arguments.length,
    n = r < 3 ? e: null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, a);
    else for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (n = (r < 3 ? i(n) : r > 3 ? i(e, o, n) : i(e, o)) || n);
    return r > 3 && n && Object.defineProperty(e, o, n),
    n
};
Object.defineProperty(o, "__esModule", {
    value: !0
});
var n = t("BaseUI"),
s = t("Appcfg"),
c = t("AudioMgr"),
l = t("LogMgr"),
u = t("SdkMgr"),
p = t("Utils"),
g = t("CommonCfg"),
d = t("ComDataMgr"),
h = t("ComPlayerMgr"),
f = cc._decorator,
m = f.ccclass,
y = f.property,
v = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.quanNum = null,
        e.rewardLayout = null,
        e.startLuck = null,
        e.freeStart = null,
        e.quanStart = null,
        e.starting = null,
        e.btnClose = null,
        e.startingSpriteFrame = null,
        e.normalSpriteFrame = null,
        e.state = 0,
        e.itemNodes = [],
        e.index = 4,
        e.repeat = 3,
        e.i = 0,
        e.finishNum = 0,
        e.passed_time = 0,
        e.walk_time = .2,
        e.needSecond = !1,
        e.girdIndexNum = 1,
        e.totalNum = 0,
        e.oneRepetNum = 10,
        e.isRuning = !1,
        e.showGetNumText = !1,
        e.playNum = 0,
        e.gildReward = [],
        e.isFree = !1,
        e.needplayVideo = !1,
        e.totalFreeNum = 0,
        e
    }
    return i(e, t),
    e.prototype.onLoad = function() {
        this.addEvent(s.BaseEventName.CloseUI, this.eventCloseUI),
        this.addEvent(g.CommonEventName.GetRewardEnd, this.refreshRewardEnd),
        this.addEvent(g.CommonEventName.RefreshTickNum, this.refreshTickNum)
    },
    e.prototype.refreshTickNum = function() {
        this.quanNum.string = this.lottyData.getLottyTickNum() + ""
    },
    e.prototype.start = function() {
        var t = this;
        this.lottyData = h.ComPlayerMgr.getInstance().getLottyData(),
        this.normalSpriteFrame = this.startLuck.getComponent(cc.Sprite).spriteFrame,
        this.playNum = this.lottyData.getLottyNum(),
        this.quanNum.string = this.lottyData.getLottyTickNum() + "",
        this.totalFreeNum = d.ComDataMgr.getInstance().getCommonParam(d.CommonParamType.freeLottyNum),
        this.checkCurrentFree(),
        this.btnClose.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.closeUI()
        });
        for (var e = 0,
        o = function(o) {
            var i = d.ComDataMgr.getInstance().getLottyGoodsByGirldId(o);
            null == i && l.LogMgr.getInstance().error("cfg is null GirldId:", o);
            var r = i[a.lottyData.getGirldIdIndex(o)].id,
            n = d.ComDataMgr.getInstance().getLottyGoodsById(r);
            a.gildReward.push(n);
            var s = a.rewardLayout.children[o - 1];
            a.itemNodes.push(s),
            a.scheduleOnce(function() {
                cc.tween(s).to(.2, {
                    eulerAngles: new cc.Vec3(0, 180, 0)
                }).call(function() {
                    s.eulerAngles = new cc.Vec3(0, 0, 0);
                    var e = d.ComDataMgr.getInstance().getGoodsById(n.goodId);
                    t.loadSpriteFrame(e.bundleName, e.rewardIcon,
                    function(t) {
                        s.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t
                    }),
                    s.getChildByName("num").getComponent(cc.Label).string = "x" + n.rewardNum;
                    var o = s.getChildByName("numGet");
                    if (t.showGetNumText) {
                        var a = t.lottyData.getInDontMust(n.id);
                        if (n.mustNum > 0 && !a) {
                            var i = t.itemNodes[n.girdId - 1].getChildByName("numGet"),
                            r = t.lottyData.getLottyIdOutNum(n.id),
                            c = n.mustNum - r;
                            i.getComponent(cc.Label).string = c + 1 + "次必得",
                            i.active = !0
                        } else o.active = !1
                    } else o.active = !1
                }).start()
            },
            .1 + e),
            e += .1
        },
        a = this, i = 1; i < 11; i++) o(i);
        this.initBtnListener()
    },
    e.prototype.initBtnListener = function() {
        var t = this;
        this.startLuck.on(cc.Node.EventType.TOUCH_START,
        function() {
            c.AudioMgr.getInstance().playEffect(g.ComAudioId.lottyDown),
            t.startLuck.getComponent(cc.Sprite).spriteFrame = t.startingSpriteFrame,
            t.checkCurrentFree(),
            t.freeStart.active = !1,
            t.quanStart.active = !1,
            1 == t.state || t.isRuning || (t.playNum < t.totalFreeNum && (t.isFree = !0), !t.isFree && t.lottyData.getLottyTickNum() <= 0 ? u.SdkMgr.getInstance().playVideo(u.AdType.FreeLotty,
            function() {
                t.needplayVideo = !0,
                t.isRuning = !0,
                t.startLotty()
            }) : (t.needplayVideo = !1, t.isRuning = !0, t.startLotty()))
        }),
        this.startLuck.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.checkCurrentFree(),
            t.startLuck.getComponent(cc.Sprite).spriteFrame = t.normalSpriteFrame
        }),
        this.startLuck.on(cc.Node.EventType.TOUCH_CANCEL,
        function() {
            t.startLuck.getComponent(cc.Sprite).spriteFrame = t.normalSpriteFrame
        })
    },
    e.prototype.startLotty = function() {
        var t = this;
        if (this.curNode && this.curNode.stopAllActions(), this.index = this.getCurentReward() - 1, 0 == this.i) this.totalNum = (this.repeat - 1) * this.oneRepetNum + this.index + 1;
        else {
            var e;
            e = this.i > this.index ? this.oneRepetNum - this.i + this.index: this.i == this.index ? this.oneRepetNum: this.index - this.i,
            this.totalNum = (this.repeat - 1) * this.oneRepetNum + e
        }
        this.index < 5 ? this.needSecond = !0 : this.needSecond = !1,
        this.refreshState(),
        this.scheduleOnce(function() {
            t.state = 1
        }),
        this.isFree || this.needplayVideo || (this.lottyData.refreshTickNum(1, !1), this.quanNum.string = this.lottyData.getLottyTickNum() + "")
    },
    e.prototype.checkCurrentFree = function() {
        this.playNum < this.totalFreeNum ? (this.freeStart.active = !1, this.quanStart.active = !1, this.isFree = !0, this.needplayVideo = !1) : this.lottyData.getLottyTickNum() <= 0 ? (this.freeStart.active = !0, this.quanStart.active = !1, this.needplayVideo = !0, this.isFree = !1) : (this.freeStart.active = !1, this.quanStart.active = !0, this.needplayVideo = !1, this.isFree = !1)
    },
    e.prototype.refreshState = function() {
        this.girdIndexNum = 1,
        this.finishNum = 0,
        this.passed_time = 0,
        this.walk_time = .2,
        this.curNode && (this.curNode.eulerAngles = new cc.Vec3(0, 0, 0));
        for (var t = 0; t < this.itemNodes.length; t++) {
            var e = this.itemNodes[t];
            e.getChildByName("bg").active = !1,
            e.getChildByName("buttonLight").active = !1
        }
    },
    e.prototype.update = function(t) {
        if (0 != this.state) {
            if (1 == this.state && (this.passed_time += t, this.passed_time >= this.walk_time)) {
                this.i >= this.itemNodes.length && (this.i = 0),
                this.girdIndexNum % this.oneRepetNum == 0 && this.finishNum++,
                0 == this.i || 3 == this.i || 6 == this.i || 9 == this.i ? c.AudioMgr.getInstance().playMusic(g.ComAudioId.ding, "lottyRun1", !1) : 1 == this.i || 4 == this.i || 7 == this.i || 10 == this.i ? c.AudioMgr.getInstance().playMusic(g.ComAudioId.ding, "lottyRun2", !1) : c.AudioMgr.getInstance().playMusic(g.ComAudioId.ding, "lottyRun3", !1);
                var e = this.itemNodes[this.i];
                e.getChildByName("bg").active = !0,
                e.getChildByName("buttonLight").active = !0;
                var o = void 0,
                a = (o = this.i - 1 < 0 ? this.itemNodes[this.itemNodes.length - 1] : this.itemNodes[this.i - 1]).getChildByName("bg");
                cc.tween(a).to(.4, {
                    opacity: 0
                }).call(function() {
                    a.active = !1,
                    a.opacity = 255
                }).start();
                var i = o.getChildByName("buttonLight");
                if (cc.tween(a).to(.2, {
                    opacity: 0
                }).call(function() {
                    i.active = !1,
                    i.opacity = 255
                }).start(), this.girdIndexNum > this.totalNum - 2 && this.i == this.index) return this.state = 2,
                void this.selectNode();
                this.passed_time = 0,
                this.walk_time = .1,
                this.girdIndexNum < 3 ? this.walk_time = .5 : this.girdIndexNum < 4 ? this.walk_time = .4 : this.girdIndexNum < 6 ? this.walk_time = .3 : this.girdIndexNum > this.totalNum - 1 ? this.walk_time = .8 : this.girdIndexNum > this.totalNum - 2 ? this.walk_time = .6 : this.girdIndexNum > this.totalNum - 3 ? this.walk_time = .5 : this.girdIndexNum > this.totalNum - 4 && (this.walk_time = .3),
                this.i++,
                this.girdIndexNum += 1
            }
            2 == this.state && (this.state = 0)
        }
    },
    e.prototype.selectNode = function() {
        var t = this;
        this.curNode = this.itemNodes[this.index],
        this.selectNodeTween = cc.tween(this.curNode).to(1, {
            scale: 1.15
        }).to(1, {
            scale: 1
        }).union().repeatForever(),
        this.selectNodeTween.start(),
        this.curNode.getChildByName("bg").active = !0;
        var e = this.curNode.getChildByName("icon"),
        o = e.scale;
        cc.tween(e).parallel(cc.tween(e).by(.2, {
            position: new cc.Vec3(0, 20, 0)
        }).by(.2, {
            position: new cc.Vec3(0, -20, 0)
        }).start(), cc.tween(e).to(.2, {
            scale: 1.02
        }).to(.2, {
            scale: o
        }).start()).by(.2, {
            position: new cc.Vec3(0, 10, 0)
        }).by(.2, {
            position: new cc.Vec3(0, -10, 0)
        }).call(function() {
            t.finishEnd()
        }).start()
    },
    e.prototype.getCurentReward = function() {
        for (var t = [], e = 0; e < this.gildReward.length; e++) if ((n = this.gildReward[e]).mustNum > 0) {
            var o = this.lottyData.getLottyIdOutNum(n.id),
            a = this.lottyData.getInDontMust(n.id);
            if (n.mustNum <= o && !a) return this.goodId = n.goodId,
            this.goodNum = n.rewardNum,
            this.lottyGoodCfg = n,
            e + 1
        } else {
            var i = new s.WeightObject;
            i.id = n.id,
            i.weight = n.weight,
            t.push(i)
        }
        if (t.length > 0) {
            var r = p.Utils.weight_rand(t),
            n = d.ComDataMgr.getInstance().getLottyGoodsById(r.id);
            return this.goodId = n.goodId,
            this.goodNum = n.rewardNum,
            this.lottyGoodCfg = n,
            n.girdId
        }
    },
    e.prototype.finishEnd = function() {
        var t = this;
        this.scheduleOnce(function() {
            var e = t.curNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
            h.ComPlayerMgr.getInstance().checkOpenReward(t.goodId + g.CommonCfg.splitNum + t.goodNum, e)
        },
        .2)
    },
    e.prototype.refreshRewardEnd = function() {
        this.eventCloseUI(g.ComUIID.UIReward)
    },
    e.prototype.eventCloseUI = function(t) {
        var e = this;
        if (t == g.ComUIID.UIReward) {
            this.selectNodeTween && this.selectNodeTween.stop(),
            cc.tween(this.curNode).to(.1, {
                scale: 1
            }).start();
            for (var o = 0; o < this.gildReward.length; o++) {
                var a = this.gildReward[o];
                if (this.lottyData.addLottyIdOutNum(a.id), this.showGetNumText && a.mustNum > 0) {
                    var i = this.itemNodes[a.girdId - 1].getChildByName("numGet"),
                    r = this.lottyData.getLottyIdOutNum(a.id),
                    n = a.mustNum - r;
                    i.getComponent(cc.Label).string = n + 1 + "次必得"
                }
            }
            this.playNum++,
            this.lottyData.addLottyNum(),
            this.startLuck.active = !0,
            this.starting.active = !1,
            this.checkCurrentFree();
            var s = this.lottyGoodCfg.girdId,
            c = this.lottyData.getGirldIdIndex(s),
            u = d.ComDataMgr.getInstance().getLottyGoodsByGirldId(s),
            p = c;
            c < u.length - 1 && (p += 1),
            this.lottyGoodCfg.mustNum > 0 && this.lottyData.addInDontMust(this.lottyGoodCfg.id);
            var h = this.itemNodes[this.lottyGoodCfg.girdId - 1],
            f = h.getChildByName("numGet");
            if (1 == this.lottyGoodCfg.replace && p != c) {
                this.lottyData.setGirldReward(s, p),
                a = u[p];
                var m = d.ComDataMgr.getInstance().getGoodsById(a.goodId);
                this.loadSpriteFrame(m.bundleName, m.rewardIcon,
                function(t) {
                    h.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t
                }),
                h.getChildByName("num").getComponent(cc.Label).string = "x" + a.rewardNum,
                this.showGetNumText && a.mustNum > 0 ? (f.getComponent(cc.Label).string = a.mustNum + "次必得", f.active = !0) : f.active = !1,
                this.gildReward[this.lottyGoodCfg.girdId - 1] = a,
                cc.tween(this.curNode).to(.4, {
                    eulerAngles: new cc.Vec3(0, 180, 0)
                }).call(function() {
                    e.curNode.eulerAngles = new cc.Vec3(0, 0, 0)
                }).start()
            } else l.LogMgr.getInstance().debug("没有可替换的"),
            f.active = !1;
            this.isRuning = !1
        }
    },
    e.prototype.onClose = function() {
        c.AudioMgr.getInstance().stopMusic("lottyMusic")
    },
    r([y({
        type: cc.Label,
        displayName: "券的数量"
    })], e.prototype, "quanNum", void 0),
    r([y({
        type: cc.Node
    })], e.prototype, "rewardLayout", void 0),
    r([y(cc.Node)], e.prototype, "startLuck", void 0),
    r([y(cc.Node)], e.prototype, "freeStart", void 0),
    r([y(cc.Node)], e.prototype, "quanStart", void 0),
    r([y(cc.Node)], e.prototype, "starting", void 0),
    r([y(cc.Node)], e.prototype, "btnClose", void 0),
    r([y(cc.SpriteFrame)], e.prototype, "startingSpriteFrame", void 0),
    r([m], e)
} (n.default);
o.default = v