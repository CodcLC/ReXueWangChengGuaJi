var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.TipsData = void 0;
var a = t("PoolMgr"),
i = t("ResourceMgr"),
r = t("TweenMgr"),
n = t("Utils"),
s = t("DataMgr"),
c = t("PlayerMgr"),
l = t("RoleMgr"),
u = function() {
    function t() {
        this.curTipsList = [],
        this.isExistTips = !1
    }
    return t.getInstance = function() {
        return null == this.instance && (this.instance = new t),
        this.instance
    },
    t.prototype.addTipsToTipsList = function(t, e, o, a) {
        var i = {
            type: t,
            parent: e,
            position: cc.Vec3.ZERO,
            id: o,
            count: a
        };
        this.isExistTips ? this.curTipsList.push(i) : (this.isExistTips = !0, 0 == i.type ? this.labTipsChangeFetter(i) : 1 == i.type && this.labTipsChangeSkillBook(i))
    },
    t.prototype.againPlayTips = function() {
        if (this.curTipsList.length > 0 && !this.isExistTips) {
            var t = this.curTipsList[0];
            this.curTipsList.splice(0, 1),
            this.isExistTips = !0,
            0 == t.type ? this.labTipsChangeFetter(t) : 1 == t.type && this.labTipsChangeSkillBook(t)
        }
    },
    t.prototype.playTips = function(t, e, o) {
        var r = this,
        n = a.PoolMgr.getInstance().getNode("NodeTips");
        n ? (n.parent = t, n.active = !0, n.position = e, n.getChildByName("LayoutTips").active = !0, n.getChildByName("NodeFightUpTips").active = !1, n.getChildByName("LayoutTips").getChildByName("LabTips").getComponent(cc.RichText).string = o, this.tipsEff(n)) : i.ResourceMgr.getInstance().loadRes("prefabs", "widget/NodeTips", cc.Prefab,
        function(a) { (n = cc.instantiate(a)).active = !0,
            n.getChildByName("LayoutTips").active = !0,
            n.getChildByName("NodeFightUpTips").active = !1,
            n.parent = t,
            n.position = e,
            n.getChildByName("LayoutTips").getChildByName("LabTips").getComponent(cc.RichText).string = o,
            r.tipsEff(n)
        })
    },
    t.prototype.tipsEff = function(t) {
        var e = this;
        cc.isValid(t) && (t.opacity = 255, cc.tween(t).by(1, {
            y: 10
        }).delay(1).parallel(cc.tween().by(1, {
            y: 10
        }), cc.tween().to(1, {
            opacity: 0
        })).call(function() {
            e.isExistTips = !1,
            e.tipsPool("NodeTips", t),
            e.againPlayTips()
        }).start())
    },
    t.prototype.tipsPool = function(t, e) {
        cc.isValid(e) && a.PoolMgr.getInstance().freeNode(t, e)
    },
    t.prototype.labTipsChangeSkillBook = function(t) {
        if (2 === t.count || 3 === t.count) {
            var e = s.DataMgr.getInstance().getSkillBook(t.id),
            o = c.PlayerMgr.getInstance().geUserData().getSkillBookForId(e.id),
            a = s.DataMgr.getInstance().getSkillBookLevelCfg1(e.StartLevelID, o.level),
            i = n.Utils.getTabelArr(a["addProp" + t.count]),
            r = n.Utils.getTabelArr(a["starProp" + t.count]),
            l = "" + a.skillBookDec;
            l = l.replace("%s", "<color = #fce445 >" + i[1] + "</color>");
            var u = "" + a["skillBookDec" + t.count + "Star"],
            p = r[1];
            0 == Number(r[0]) && (p = e.name),
            u = u.replace("%s", "<color = #fce445 >" + p + "</color>");
            var g = e.name + "<color = #fce445 >升至" + t.count + "星</color>，" + l + "\n" + u;
            this.playTips(t.parent, cc.v3(0, -100, 0), g)
        }
    },
    t.prototype.labTipsChangeFetter = function(t) {
        var e = s.DataMgr.getInstance().getFetter(t.id),
        o = n.Utils.getTabelArr(e.fetterCount),
        a = n.Utils.getTabelArr(e.fetterFun),
        i = "" + e.fetterDec;
        i = i.replace("%s", "" + a[t.count - 1]);
        var r = "获得新羁绊 <color = #fce445 >" + e.name + ">" + o[t.count - 1] + "</color>\n<color = #fce445 >" + i + "</color>";
        this.playTips(t.parent, cc.v3(0, -100, 0), r)
    },
    t.prototype.resetData = function() {
        this.isExistTips = !1,
        this.curTipsList = []
    },
    t.prototype.playFightnChangTips = function(t, e, o, r) {
        var n = this,
        s = a.PoolMgr.getInstance().getNode("NodeTips");
        s ? this.loadFightTipInfo(s, t, e, o, r) : i.ResourceMgr.getInstance().loadRes("prefabs", "widget/NodeTips", cc.Prefab,
        function(a) {
            s = cc.instantiate(a),
            n.loadFightTipInfo(s, t, e, o, r)
        })
    },
    t.prototype.loadFightTipInfo = function(t, e, o, a, i) {
        var n = this,
        s = i - a > 0;
        t.parent = e,
        t.active = !0,
        t.position = o,
        t.getChildByName("LayoutTips").active = !1;
        var c = t.getChildByName("NodeFightUpTips");
        c.active = !0;
        var l = c.getChildByName("NodeFight"),
        u = l.getChildByName("LabFightNum");
        u.getComponent(cc.Label).string = "" + a;
        var p = l.getChildByName("NodeUp");
        p.x = u.x + u.getContentSize().width + 30,
        p.getChildByName("LabUp").getComponent(cc.Label).string = "" + Math.abs(i - a),
        p.getChildByName("LabUp").color = s ? cc.color(76, 220, 47) : cc.color(255, 0, 0),
        p.getChildByName("SpUp").active = s,
        p.getChildByName("SpDown").active = !s,
        c.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED,
        function() {
            n.animMove(p,
            function() {
                r.TweenMgr.getInstance().rollLabAnim(s, l.getChildByName("LabFightNum").getComponent(cc.Label), a, i,
                function() {
                    setTimeout(function() {
                        cc.isValid(t) && n.tipsPool("NodeTips", t)
                    },
                    500)
                })
            })
        })
    },
    t.prototype.animMove = function(t, e) {
        cc.isValid(t) && (t.opacity = 255, cc.tween(t).delay(1).parallel(cc.tween().to(.5, {
            x: 30
        }), cc.tween().to(.5, {
            opacity: 0
        })).call(function() {
            e && e()
        }).start())
    },
    t.prototype.playFightTips = function(e) {
        var o = l.default.getInstance().curFightNumForPlayer,
        a = l.default.getInstance().getPlayerFightNum();
        o != a && t.getInstance().playFightnChangTips(e, cc.v3(0, 450), o, a)
    },
    t
} ();
o.default = u;
o.TipsData = function() {}