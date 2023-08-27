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
s = cc._decorator,
c = s.ccclass,
l = s.property,
u = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.LabTitle = null,
        e.LabDec = null,
        e.BtnFalse = null,
        e.BtnTrue = null,
        e.labTitle = "温馨提示",
        e.labDec = "<color = #000000>切换装备或退出界面\n当前进度将</c><color = #ff0000>不予保存</c>噢！",
        e.btnFalseCallback = function() {},
        e.btnTrueCallback = function() {},
        e.labBtnFalse = "取消",
        e.labBtnTrue = "确定",
        e
    }
    return i(e, t),
    e.prototype.init = function(t, e, o, a, i) {
        this.labTitle = t || this.labTitle,
        this.labDec = e || this.labDec,
        this.btnFalseCallback = o ||
        function() {},
        this.btnTrueCallback = a ||
        function() {},
        this.labBtnFalse = i ? i[0] : this.labBtnFalse,
        this.labBtnTrue = i ? i[1] : this.labBtnTrue
    },
    e.prototype.start = function() {
        this.registerBtnEvent(),
        this.initView()
    },
    e.prototype.initView = function() {
        this.LabTitle.string = this.labTitle,
        this.LabDec.string = this.labDec,
        this.BtnFalse.getChildByName("LabDec").getComponent(cc.Label).string = this.labBtnFalse,
        this.BtnTrue.getChildByName("LabDec").getComponent(cc.Label).string = this.labBtnTrue
    },
    e.prototype.registerBtnEvent = function() {
        var t = this;
        this.BtnFalse.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.btnFalseCallback && t.btnFalseCallback(),
            t.closeView()
        }),
        this.BtnTrue.on(cc.Node.EventType.TOUCH_END,
        function() {
            t.btnTrueCallback && t.btnTrueCallback(),
            t.closeView()
        })
    },
    e.prototype.closeView = function() {
        this.closeUI()
    },
    r([l(cc.Label)], e.prototype, "LabTitle", void 0),
    r([l(cc.RichText)], e.prototype, "LabDec", void 0),
    r([l(cc.Node)], e.prototype, "BtnFalse", void 0),
    r([l(cc.Node)], e.prototype, "BtnTrue", void 0),
    r([c], e)
} (n.default);
o.default = u