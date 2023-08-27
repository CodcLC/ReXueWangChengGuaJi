var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.PlayerMgr = o.ABTestType = void 0;
var a = t("CommonModel"),
i = t("Appcfg"),
r = t("EventMgr"),
n = t("LogMgr"),
s = t("Config"),
c = t("GuideData"),
l = t("MainTaskData"),
u = t("MysticalShopData"),
p = t("ShareData"),
g = t("TrackData"),
d = t("UserData"),
h = t("DataMgr"); (function(t) {
    t[t.NO_AB = 0] = "NO_AB",
    t[t.AB_Test = 1] = "AB_Test",
    t[t.ABD_Test = 2] = "ABD_Test",
    t[t.A_fixed = 3] = "A_fixed",
    t[t.B_fixed = 4] = "B_fixed",
    t[t.D_fixed = 5] = "D_fixed",
    t[t.AD_Test = 6] = "AD_Test"
})(o.ABTestType || (o.ABTestType = {}));
var f = function() {
    function t() {
        this.isLoaded = !1
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t, this.instance.initData()),
        this.instance
    },
    t.prototype.initData = function() {
        a.CommonModel.Instance().setGameBrige(this)
    },
    t.prototype.preload = function() {
        this.isLoaded || (this.isLoaded = !0, this.guideData = new c.GuideData, this.guideData.getData(), this.udata = new d.UserData, this.udata.getData(), this.trackData = new g.TrackData, this.trackData.getData(), this.trackData.getSdkAbName(s.GameConfig.abTestType,
        function(t) {
            n.LogMgr.getInstance().debug("用户类型：" + t, ""),
            h.DataMgr.getInstance().reloadConfig(t,
            function() {
                r.EventMgr.getInstance().emit(i.BaseEventName.Loading, i.LoadingProcess.PlayerCfg)
            })
        }), this.shareData = new p.ShareData, this.shareData.getData(), this.mysticalShopData = new u.MysticalShopData, this.mysticalShopData.getData(), this.mainTaskData = new l.MainTaskData, this.mainTaskData.getData())
    },
    t.prototype.getAbType = function() {
        return this.trackData.getAbType()
    },
    t.prototype.getGuideData = function() {
        return this.guideData
    },
    t.prototype.geUserData = function() {
        return this.udata
    },
    t.prototype.getTrackData = function() {
        return this.trackData
    },
    t.prototype.getShareData = function() {
        return this.shareData
    },
    t.prototype.getMysticalShopData = function() {
        return this.mysticalShopData
    },
    t.prototype.getMainTaskData = function() {
        return this.mainTaskData
    },
    t.prototype.addRewards = function(t, e) {
        void 0 === e && (e = 1);
        for (var o = t.split(s.GameConfig.splitCount), i = 0; i < o.length; i++) if (! (o[i].length <= 0)) {
            var r = o[i].split(s.GameConfig.splitNum),
            n = Number(r[0]),
            c = Number(r[1]) * e;
            a.CommonModel.Instance().addReward(n, c, !0)
        }
    },
    t.prototype.addComReward = function(t, e) {
        void 0 === e && (e = 1)
    },
    t.prototype.subGoodsNum = function(e, o) {
        var a = t.getInstance().geUserData();
        if (1 == e) return a.subGoldNum(o)
    },
    t
} ();
o.PlayerMgr = f