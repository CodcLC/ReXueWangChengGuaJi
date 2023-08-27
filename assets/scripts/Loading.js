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
var n = t("CommonModel"),
s = t("Appcfg"),
c = t("AudioMgr"),
l = t("EventMgr"),
u = t("PlatformManager"),
p = t("PoolMgr"),
g = t("ResCacheMgr"),
d = t("ResourceMgr"),
h = t("SdkMgr"),
f = t("UIMgr"),
m = t("Config"),
y = t("TrackDataEvent"),
v = t("CardMgr"),
I = t("DataMgr"),
k = t("PlayerMgr"),
C = cc._decorator,
S = C.ccclass,
M = C.property,
_ = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.uiRoot = null,
        e.tips = null,
        e.progressBar = null,
        e.process = 0,
        e.sceneName = "Main",
        e
    }
    return i(e, t),
    e.prototype.onLoad = function() {
        cc.director.preloadScene(this.sceneName)
    },
    e.prototype.start = function() {
        var t = this;
        cc.game.addPersistRootNode(this.uiRoot),
        this.progressBar.progress = 0,
        this.tips.string = "资源加载中...",
        u.PlatformManager.getInstance().init(),
        l.EventMgr.getInstance().on(s.BaseEventName.GoGame, this, this.goGame),
        g.ResCacheMgr.getInstance().init(),
        this.preloadUI(),
        f.UIMgr.getInstance().addUICnf(m.UICF),
        f.UIMgr.getInstance().Init(this.uiRoot),
        c.AudioMgr.getInstance().init(m.AudioCF),
        l.EventMgr.getInstance().on(s.BaseEventName.Loading, this, this.setProcessLoad),
        h.SdkMgr.getInstance().requestCheckVersion(function() {
            t.setProcessLoad(s.LoadingProcess.StartLoading)
        })
    },
    e.prototype.trackEvent = function() {
        k.PlayerMgr.getInstance().getTrackData().youmengTrack(y.TrackId.guide1)
    },
    e.prototype.setProcessLoad = function(t) {
        var e = this;
        switch (this.process = t / 100, t) {
            case s.LoadingProcess.StartLoading:
                I.DataMgr.getInstance().preload();
            break;
            case s.LoadingProcess.ExcelCfg:
                k.PlayerMgr.getInstance().preload();
            break;
            case s.LoadingProcess.PlayerCfg:
                n.CommonModel.Instance().initCommon(function() {
                e.setProcessLoad(s.LoadingProcess.EndLoading)
            });
            break;
            case s.LoadingProcess.EndLoading:
                h.SdkMgr.getInstance().hasVerify() ? (v.default.getInstance().isWCN() && f.UIMgr.getInstance().openUI(m.UIID.UIExit, -1), v.default.getInstance().isVerify() ? v.default.getInstance().toGame(function() {
                e.goGame()
            }) : f.UIMgr.getInstance().openUI(m.UIID.UIRealName, -1,
            function() {
                e.goGame()
            })) : this.goGame();
        }
        this.progressBar.progress = this.process
    },
    e.prototype.goGame = function() {
        cc.director.loadScene(this.sceneName),
        this.trackEvent()
    },
    e.prototype.preloadUI = function() {
        d.ResourceMgr.getInstance().preload("prefabs", ["UIHome", "UIHomeNew", "UITop", "UIGuide"]),
        d.ResourceMgr.getInstance().loadRes("objects", "player/Player", cc.Prefab,
        function(t) {
            p.PoolMgr.getInstance().creatrePool("Player", cc.instantiate(t), 2)
        })
    },
    r([M(cc.Node)], e.prototype, "uiRoot", void 0),
    r([M(cc.Label)], e.prototype, "tips", void 0),
    r([M(cc.ProgressBar)], e.prototype, "progressBar", void 0),
    r([S], e)
} (cc.Component);
o.default = _