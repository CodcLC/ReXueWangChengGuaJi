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
s = t("SdkMgr"),
c = t("TweenMgr"),
l = t("TimeUtils"),
u = t("CommonCfg"),
p = t("ComDataMgr"),
g = t("ComPlayerMgr"),
d = cc._decorator,
h = d.ccclass,
f = d.property,
m = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.btnClose = null,
        e.timeNode = null,
        e.itemLayout = null,
        e.spriteBar = null,
        e.processNum = null,
        e.giftNode = null,
        e.tipNode = null,
        e.tipText = null,
        e.rootAddClick = !1,
        e
    }
    return i(e, t),
    e.prototype.start = function() {
        this.addEvent(u.CommonEventName.RefreshCollection, this.refreshItemData),
        this.collectionData = g.ComPlayerMgr.getInstance().getCollectionData(),
        this.initBtnListener(),
        this.initTimeData(),
        this.initData(),
        this.initBottomData(),
        this.giftLayoutPos = this.giftNode.getPosition()
    },
    e.prototype.initTimeData = function() {
        var t = this,
        e = this.collectionData.getEndtime();
        if ( - 1 == e) this.timeNode.active = !1;
        else {
            var o = e - l.TimeUtils.GetTimeBySecond(),
            a = this.timeNode.getChildByName("timeLable").getComponent(cc.Label);
            o <= 0 ? (a.string = "00:00:00", this.collectionData.refreData()) : (a.string = l.TimeUtils.SecondToHours(o), a.schedule(function() {
                var o = e - l.TimeUtils.GetTimeBySecond();
                o > 0 ? a.string = l.TimeUtils.SecondToHours(o) : (a.unscheduleAllCallbacks(), a.string = "00:00:00", t.collectionData.refreData(), t.refreshItemData())
            },
            1, cc.macro.REPEAT_FOREVER))
        }
    },
    e.prototype.initData = function(t) {
        var e = this;
        void 0 === t && (t = !0);
        for (var o = function(o) {
            var i = a.itemLayout.children[o],
            r = a.collectionData.getCollectionData(o);
            if (null == r) return i.getChildByName("empty").active = !0,
            "continue";
            i.getChildByName("empty").active = !1,
            i.name = r.id + "";
            var n = i.getChildByName("btnOk");
            c.TweenMgr.getInstance().stopTween(n);
            var s = void 0;
            r.isGet ? s = "button/btn_finished": r.finished && !r.isGet ? (s = "button/btn_submit", c.TweenMgr.getInstance().playHeartAni(n)) : r.adTip ? (s = "button/btn_adtips", r.isTips && (s = "button/btn_tips")) : s = "button/btn_adget";
            var l = i.getChildByName("icon"),
            u = i.getChildByName("process").getComponent(cc.Label),
            g = p.ComDataMgr.getInstance().getCollectionItemById(r.itemId);
            u.string = r.num + "/" + g.needNum;
            var d = p.ComDataMgr.getInstance().getGoodsById(r.goodId);
            a.loadSpriteFrame(d.bundleName, d.rewardIcon,
            function(t) {
                l.getComponent(cc.Sprite).spriteFrame = t
            }),
            a.loadSpriteFrame("comimgs", s,
            function(t) {
                n.getComponent(cc.Sprite).spriteFrame = t
            }),
            t && n.on(cc.Node.EventType.TOUCH_END,
            function() {
                e.clickItem(r.id, i)
            })
        },
        a = this, i = 0; i < this.itemLayout.childrenCount; i++) o(i)
    },
    e.prototype.initBottomData = function() {
        var t = this,
        e = this.collectionData.getProcess(),
        o = this.collectionData.getAllCollectionData();
        this.processNum.string = e + "/" + o.length,
        this.spriteBar.fillRange = e / o.length,
        this.collectionData.data.isGet ? this.giftNode.active = !1 : (this.giftNode.targetOff(cc.Node.EventType.TOUCH_END), c.TweenMgr.getInstance().stopTween(this.giftNode), this.spriteBar.fillRange >= 1 && (c.TweenMgr.getInstance().jumpAniForever(this.giftNode), this.giftNode.on(cc.Node.EventType.TOUCH_END,
        function() {
            c.TweenMgr.getInstance().stopTween(t.giftNode);
            var e = t.collectionData.getCurrentReward();
            e && cc.tween(t.giftNode).to(.8, {
                position: new cc.Vec3(0, 400)
            }).call(function() {
                t.openUI(u.ComUIID.UIReward, e),
                t.giftNode.setPosition(t.giftLayoutPos),
                t.collectionData.receiveTaskReward(function(e) {
                    e ? t.refreshItemData() : t.giftNode.active = !1
                })
            }).start()
        })))
    },
    e.prototype.clickItem = function(t, e) {
        var o = this,
        a = this.collectionData.getCollectionData(t);
        if (!a.isGet) {
            var i = e.getChildByName("btnOk"),
            r = p.ComDataMgr.getInstance().getCollectionItemById(a.itemId);
            if (a.finished) {
                if (r && r.comit) {
                    var n = e.convertToWorldSpaceAR(cc.Vec2.ZERO);
                    g.ComPlayerMgr.getInstance().checkOpenReward(r.comit, n, !1)
                }
                return this.collectionData.finishData(t),
                this.loadSpriteFrame("comimgs", "button/btn_finished",
                function(t) {
                    i.getComponent(cc.Sprite).spriteFrame = t
                }),
                c.TweenMgr.getInstance().stopTween(i),
                void this.initBottomData()
            }
            a.isTips && a.adTip ? this.popTips(e, t, r.tips) : s.SdkMgr.getInstance().playVideo(s.AdType.Collection,
            function() {
                a.adTip ? (o.collectionData.addAdTips(t), o.loadSpriteFrame("comimgs", "button/btn_tips",
                function(t) {
                    i.getComponent(cc.Sprite).spriteFrame = t
                }), o.popTips(e, t, r.tips)) : o.collectionData.addData(a.goodId, r.getNum, !0)
            })
        }
    },
    e.prototype.popTips = function(t, e, o) {
        var a = this;
        this.tipText.unscheduleAllCallbacks();
        var i = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
        r = this.tipNode.parent.convertToNodeSpaceAR(i);
        this.tipNode.setPosition(r);
        var n = !0;
        2 == e || 5 == e ? (n = !1, this.tipNode.scaleX = -1, this.tipText.node.scaleX = -.5) : (n = !0, this.tipNode.scaleX = 1, this.tipText.node.scaleX = .5),
        this.tipText.string = o,
        this.tipNode.active = !0;
        var s = this.node.getChildByName("root");
        this.rootAddClick || (this.rootAddClick = !0, s.on(cc.Node.EventType.TOUCH_START,
        function() {
            a.tipNode.active = !1
        })),
        n ? this.popRightTween ? this.popRightTween.start() : (this.popRightTween = cc.tween(this.tipNode).to(.1, {
            scaleX: .9
        }).to(.05, {
            scaleX: 1.1
        }).to(.1, {
            scaleX: 1
        }), this.popRightTween.start()) : this.popLeftTween ? this.popLeftTween.start() : (this.popLeftTween = cc.tween(this.tipNode).to(.1, {
            scaleX: -.9
        }).to(.05, {
            scaleX: -1.1
        }).to(.1, {
            scaleX: -1
        }), this.popLeftTween.start()),
        this.tipText.scheduleOnce(function() {
            a.popDis = cc.tween(a.tipNode).to(.5, {
                opacity: 122
            }).call(function() {
                a.tipNode.active = !1,
                a.tipNode.opacity = 255
            }).start()
        },
        2)
    },
    e.prototype.refreshItemData = function() {
        this.initData(!1),
        this.initBottomData(),
        this.initTimeData()
    },
    e.prototype.initBtnListener = function() {
        var t = this;
        this.btnClose.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.closeUI()
        })
    },
    e.prototype.onClose = function() {
        this.unscheduleAllCallbacks()
    },
    r([f(cc.Node)], e.prototype, "btnClose", void 0),
    r([f(cc.Node)], e.prototype, "timeNode", void 0),
    r([f(cc.Node)], e.prototype, "itemLayout", void 0),
    r([f(cc.Sprite)], e.prototype, "spriteBar", void 0),
    r([f(cc.Label)], e.prototype, "processNum", void 0),
    r([f(cc.Node)], e.prototype, "giftNode", void 0),
    r([f(cc.Node)], e.prototype, "tipNode", void 0),
    r([f(cc.Label)], e.prototype, "tipText", void 0),
    r([h], e)
} (n.default);
o.default = m