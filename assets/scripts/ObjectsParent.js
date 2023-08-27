var t = require;
var e = module;
var o = exports;
var a = this && this.__decorate ||
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
}),
o.EnumLadleWordType = o.EnumObjectState = void 0;
var i, r, n = t("PoolMgr"),
s = t("Utils"),
c = t("Main"),
l = t("GameMgr"),
u = t("ObjectMgr"),
p = t("PlayerMgr"),
g = t("LadleWordMgr"),
d = cc._decorator,
h = d.ccclass,
f = (d.property,
function() {
    function t() {
        this.objectProperty = {
            hp_total: 100,
            hp: 100,
            attack_min: 100,
            attack_max: 100,
            speed: 5,
            atkDis: 100,
            atkInterval: 0,
            atkSpeed: 100,
            atkCrazyProb: 100,
            atkCrazyHurt: 100,
            subHurt: 0,
            dodgeHurtProb: 0
        },
        this.object = null,
        this.skeleton = null,
        this.scale_object = 1,
        this.scale_hpBar = 1,
        this.timeScale_object = 1,
        this.addUpSpeed = .7,
        this.gameSpeedArr = [1, 1.5, 2, 2.5, 3],
        this.curGameMultiply = 1,
        this.objectState = i.Alive,
        this.isPlayer = !1,
        this.objectId = 1,
        this.isCrazyAtk = !1,
        this.isDodgeHurt = !1
    }
    return t.prototype.isPauseSkeleton = function(t) {
        this.skeleton && this.object.active && (this.skeleton.paused = t)
    },
    t.prototype.initObject = function() {
        this.timeScale_object = this.objectProperty.atkSpeed ? this.objectProperty.atkSpeed / 100 : 1,
        this.setGameMutiply(),
        this.skeleton.timeScale = this.timeScale_object * this.gameSpeedArr[this.curGameMultiply - 1] + (l.default.getInstance().isAdddUp ? this.addUpSpeed: 0)
    },
    t.prototype.setGameMutiply = function() {
        this.curGameMultiply = p.PlayerMgr.getInstance().geUserData().getCurGameMultiply()
    },
    t.prototype.refreshObject = function() {
        var t = this.object.getChildByName("SpHpBarBg");
        t.active = !0,
        t.getChildByName("SpHpBar").getComponent(cc.Sprite).fillRange = this.objectProperty.hp / this.objectProperty.hp_total,
        t.getChildByName("LabHp").getComponent(cc.Label).string = Math.ceil(this.objectProperty.hp) + ""
    },
    t.prototype.initObjectProperty = function() {},
    t.prototype.getNodeEff = function() {
        return cc.isValid(this.object) ? this.object.getChildByName("NodeEff") : null
    },
    t.prototype.recycleNodeEff = function() {
        for (var t = this.getNodeEff(), e = 0; e < t.childrenCount; e++) {
            var o = t.children[e];
            cc.isValid(o) && n.PoolMgr.getInstance().freeNode(o.name, o)
        }
    },
    t.prototype.getHpBarNode = function() {
        var t = this.object.getChildByName("SpHpBarBg");
        return cc.isValid(t) ? t: this.object
    },
    t.prototype.isFullHp = function() {
        return this.objectProperty.hp_total == this.objectProperty.hp
    },
    t.prototype.subHp = function() {},
    t.prototype.addHp = function(t) {
        this.objectProperty.hp += t,
        this.objectProperty.hp > this.objectProperty.hp_total && (this.objectProperty.hp = this.objectProperty.hp_total),
        this.refreshObject()
    },
    t.prototype.setHp = function(t) {
        this.objectProperty.hp = t
    },
    t.prototype.fullHp = function() {
        this.objectProperty.hp = this.objectProperty.hp_total
    },
    t.prototype.initObjectsState = function() {
        this.objectState = i.Alive
    },
    t.prototype.setWaitDieState = function() {
        this.objectState = i.WaitDie
    },
    t.prototype.setDieState = function() {
        this.objectState = i.Die
    },
    t.prototype.setDie = function() {
        this.object.active = !1
    },
    t.prototype.isTriggerCrazyAtk = function(t) {
        return void 0 === t && (t = 0),
        s.Utils.randomRang(1, 100) <= this.objectProperty.atkCrazyProb + t && (this.isCrazyAtk = !0, !0)
    },
    t.prototype.isTriggerDodgeHurt = function() {
        return s.Utils.randomRang(1, 100) <= this.objectProperty.dodgeHurtProb && (this.isDodgeHurt = !0, g.default.LabLoad(c.default.instance.node, s.Utils.posTransform(this.object, this.getHpBarNode().getPosition(), c.default.instance.node), "闪避", g.default.height_ladleWord.height_number, void 0, u.default.getInstance().getColorForAtkType(r.Miss)), !0)
    },
    t.prototype.resetAtkState = function() {
        this.isCrazyAtk = !1,
        this.isDodgeHurt = !1
    },
    a([h], t)
} ());
o.default = f,
function(t) {
    t[t.Alive = 0] = "Alive",
    t[t.WaitDie = 1] = "WaitDie",
    t[t.Die = 2] = "Die"
} (i = o.EnumObjectState || (o.EnumObjectState = {})),
function(t) {
    t[t.Atk_Normal = 0] = "Atk_Normal",
    t[t.Atk_SkillHurt = 1] = "Atk_SkillHurt",
    t[t.Atk_SkillName = 2] = "Atk_SkillName",
    t[t.Atk_CrazyHurt = 3] = "Atk_CrazyHurt",
    t[t.Atk_CrazyName = 4] = "Atk_CrazyName",
    t[t.Hp_Recover = 5] = "Hp_Recover",
    t[t.Miss = 6] = "Miss"
} (r = o.EnumLadleWordType || (o.EnumLadleWordType = {}))