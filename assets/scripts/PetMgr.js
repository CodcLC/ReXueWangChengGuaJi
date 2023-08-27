var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
});
var a = t("Utils"),
i = t("TrackDataEvent"),
r = t("PlayerMgr"),
n = t("TimeMgr"),
s = function() {
    function t() {
        this.isOwnedPet = !1,
        this.twenMap = new Map,
        this.moveSpeedPet = 150,
        this.enterPosX = -1e3,
        this.leftPosX = -250,
        this.rightPosX = 250,
        this.idleTime = 3
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.initPetData = function() {
        r.PlayerMgr.getInstance().geUserData().isExistPetFotId(1) && (this.isOwnedPet = !0)
    },
    t.prototype.getTween = function(t) {
        this.twenMap.has(t.uuid) && this.stopTween(t);
        var e = cc.tween(t);
        return this.twenMap.set(t.uuid, e),
        e
    },
    t.prototype.stopTween = function(t) {
        this.twenMap.has(t.uuid) && (this.twenMap.get(t.uuid).stop(), this.twenMap.delete(t.uuid))
    },
    t.prototype.petEnterAnim = function(t) {
        var e = this;
        if (cc.isValid(t)) {
            var o = Math.abs(t.x - this.leftPosX);
            t.getChildByName("pet").getComponent(sp.Skeleton).setAnimation(0, "move", !0),
            this.getTween(t).to(o / this.moveSpeedPet, {
                x: this.leftPosX
            }).call(function() {
                r.PlayerMgr.getInstance().getTrackData().youmengTrack(i.TrackId.pet_appear),
                e.petIdleAnim(t)
            }).start()
        }
    },
    t.prototype.petGoOutAnim = function(t) {
        var e = this;
        if (cc.isValid(t)) {
            t.zIndex = 0,
            t.scaleX = 1;
            var o = Math.abs(t.x - this.enterPosX);
            t.getChildByName("pet").getComponent(sp.Skeleton).setAnimation(0, "move", !0),
            this.getTween(t).to(o / this.moveSpeedPet, {
                x: this.enterPosX
            }).call(function() {
                e.petIdleAnim(t)
            }).start()
        }
    },
    t.prototype.petIdleAnim = function(t) {
        var e = this;
        if (cc.isValid(t)) {
            var o = t.getChildByName("pet").getComponent(sp.Skeleton),
            i = 0 == Math.floor(a.Utils.randomRang(0, 2)) ? "idle": "idle2";
            o.setAnimation(0, i, !0),
            this.getTween(t).delay(this.idleTime).call(function() {
                e.isOwnedPet ? t.x > 0 ? e.petBackAnim(t) : e.petGoAnim(t) : n.TimeMgr.getInstance().isOpenTimer_pet ? t.x > 0 ? e.petBackAnim(t) : e.petGoAnim(t) : e.petGoOutAnim(t)
            }).start()
        }
    },
    t.prototype.petGoAnim = function(t) {
        var e = this;
        if (cc.isValid(t)) {
            t.zIndex = 2,
            t.scaleX = -1;
            var o = Math.abs(t.x - this.rightPosX);
            t.getChildByName("pet").getComponent(sp.Skeleton).setAnimation(0, "move", !0),
            this.getTween(t).to(o / this.moveSpeedPet, {
                x: this.rightPosX
            }).call(function() {
                e.petIdleAnim(t)
            }).start()
        }
    },
    t.prototype.petBackAnim = function(t) {
        var e = this;
        if (cc.isValid(t)) {
            t.zIndex = 0,
            t.scaleX = 1;
            var o = Math.abs(t.x - this.leftPosX);
            t.getChildByName("pet").getComponent(sp.Skeleton).setAnimation(0, "move", !0),
            this.getTween(t).to(o / this.moveSpeedPet, {
                x: this.leftPosX
            }).call(function() {
                e.petIdleAnim(t)
            }).start()
        }
    },
    t
} ();
o.default = s