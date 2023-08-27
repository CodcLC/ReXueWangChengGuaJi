var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.Utils = void 0;
var a = function() {
    function t() {}
    return t.formatStr = function(t) {
        for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
        return cc.js.formatStr(t, e)
    },
    t.StringFormat = function(t) {
        for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
        for (var a = 0; a < e.length; a++) {
            var i = new RegExp("\\{" + a + "\\}", "gm");
            t = t.replace(i, arguments[a + 1])
        }
        return t
    },
    t.formatGold = function(t) {
        return (t + "").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,")
    },
    t.randomRang = function(t, e) {
        return Math.floor(Math.random() * (e - t)) + t
    },
    t.getRange = function(t, e) {
        for (var o = [], a = t; a < e + 1; a++) o.push(a);
        return o
    },
    t.weight_randSingle = function(t) {
        return ! (t <= 0) && (t >= 100 || Math.floor(100 * Math.random()) <= t)
    },
    t.weight_rand = function(t) {
        for (var e, o = 0,
        a = !1,
        i = function(t, e) {
            var o = Math.min(t, e),
            a = Math.max(t, e),
            i = 1;
            if (0 === t || 0 === e) return a;
            for (var r = o; r >= 1; r--) if (o % r == 0 && a % r == 0) {
                i = r;
                break
            }
            return i
        },
        r = new Array, n = 0; n < t.length; n++) void 0 !== t[n].weight ? -1 !== t[n].weight.toString().indexOf("%") ? (e = Math.floor(t[n].weight.toString().replace("%", "")), a = !0) : e = Math.floor(100 * t[n].weight) : e = 0,
        r[n] = e,
        o = i(o, e);
        var s = new Array,
        c = 0,
        l = 0;
        if (a) {
            for (n = 0; n < t.length; n++) {
                l = r[n];
                for (var u = 0; u < l && !(c >= 100); u++) s.push(n),
                c++
            }
            for (; c < 100;) s.push(t.length - 1),
            c++
        } else for (n = 0; n < t.length; n++) {
            for (l = r[n] / o, u = 0; u < l; u++) s.push(n);
            c += l
        }
        return t[s[Math.floor(Math.random() * c)]]
    },
    t.encrypt = function(t, e) {
        if (null == e || e.length <= 0) return null;
        for (var o = "",
        a = 0; a < e.length; a++) o += e.charCodeAt(a).toString();
        var i = Math.floor(o.length / 5),
        r = parseInt(o.charAt(i) + o.charAt(2 * i) + o.charAt(3 * i) + o.charAt(4 * i) + o.charAt(5 * i)),
        n = Math.ceil(e.length / 2),
        s = Math.pow(2, 31) - 1;
        if (r < 2) return null;
        var c = Math.round(1e9 * Math.random()) % 1e8;
        for (o += c; o.length > 10;) o = (parseInt(o.substring(0, 10)) + parseInt(o.substring(10, o.length))).toString();
        o = (r * o + n) % s;
        var l = "",
        u = "";
        for (a = 0; a < t.length; a++) {
            var p = (t.charCodeAt(a) ^ Math.floor(o / s * 255)) + "";
            u += (l = parseInt(p)) < 16 ? "0" + l.toString(16) : l.toString(16),
            o = (r * o + n) % s
        }
        for (c = c.toString(16); c.length < 8;) c = "0" + c;
        return u + c
    },
    t.decrypt = function(t, e) {
        if (! (null == t || t.length < 8 || null == e || e.length <= 0)) {
            for (var o = "",
            a = 0; a < e.length; a++) o += e.charCodeAt(a).toString();
            var i = Math.floor(o.length / 5),
            r = parseInt(o.charAt(i) + o.charAt(2 * i) + o.charAt(3 * i) + o.charAt(4 * i) + o.charAt(5 * i)),
            n = Math.round(e.length / 2),
            s = Math.pow(2, 31) - 1,
            c = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), o += c; o.length > 10;) o = (parseInt(o.substring(0, 10)) + parseInt(o.substring(10, o.length))).toString();
            o = (r * o + n) % s;
            var l = "",
            u = "";
            for (a = 0; a < t.length; a += 2) l = parseInt((parseInt(t.substring(a, a + 2), 16) ^ Math.floor(o / s * 255)) + ""),
            u += String.fromCharCode(l),
            o = (r * o + n) % s;
            return u
        }
    },
    t.randomDiffIndex = function(t, e, o) {
        var a = this.randomRang(0, t);
        this.checkExist(a, o) ? this.randomDiffIndex(t, e, o) : (o.push(a), o.length < e && this.randomDiffIndex(t, e, o))
    },
    t.checkExist = function(t, e) {
        for (var o = 0; o < e.length; o++) if (e[o] == t) return ! 0;
        return ! 1
    },
    t.mapToJson = function(t) {
        return this.MapTOJson(t)
    },
    t.jsonToMap = function(t) {
        for (var e = JSON.parse(t), o = new Map, a = 0, i = Object.keys(e); a < i.length; a++) {
            var r = i[a];
            o.set(Number(r), Number(e[r]))
        }
        return o
    },
    t.MapTOJson = function(t) {
        var e = "{",
        o = 1;
        return t.forEach(function(t, a, i) {
            i.size == o ? e += "\"" + a + "\":\"" + t + "\"": e += "\"" + a + "\":\"" + t + "\",",
            o++
        }),
        e += "}"
    },
    t.isCardID = function(t) {
        var e = 0;
        if (!/^\d{17}(\d|x)$/i.test(t))return-1;if(t=t.replace(/x$/i,"a"),null=={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[parseInt(t.substr(0,2))])return-2;var o=t.substr(6,4)+"-"+Number(t.substr(10,2))+"-"+Number(t.substr(12,2)),a=new Date(o.replace(/-/g, "/"));
        if (o != a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate()) return - 3;
        for (var i = 17; i >= 0; i--) e += Math.pow(2, i) % 11 * parseInt(t.charAt(17 - i), 11);
        return e % 11 != 1 ? -4 : 0
    },
    t.checkAdult = function(t) {
        var e = parseInt(t.substring(6, 14)) + 18e4,
        o = new Date,
        a = o.getFullYear(),
        i = o.getMonth() + 1,
        r = o.getDate();
        return parseInt(a + this.getFormatDate(i) + this.getFormatDate(r)) >= e
    },
    t.getFormatDate = function(t) {
        if (void 0 === t || "" === t) return "";
        var e = t + "";
        return e.length < 2 && (e = "0" + e),
        e
    },
    t.guid = function() {
        function t() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        return t() + t() + "" + t() + t() + t() + t() + t() + t()
    },
    t.getShortestDistance = function(t, e) {
        if (void 0 === e && (e = []), t && e) {
            for (var o = 1e3,
            a = e[0][0], i = 0; i < e.length; i++) {
                var r = cc.Vec2.distance(t, cc.v2(e[i][1], e[i][2]));
                r < o && (o = r, a = e[i][0])
            }
            return a
        }
    },
    t.getTabelArr = function(t) {
        if (!t) return [];
        for (var e = [], o = "", a = 0; a < t.length; a++)"[" != t[a] && ("," == t[a] || "]" == t[a] ? (e.push(o), o = "") : o += t[a]);
        return e
    },
    t.getTabelArr1 = function(t) {
        if (!t) return [];
        var e = [],
        o = "",
        a = 0;
        e[a] = [];
        for (var i = 0; i < t.length; i++)"[" != t[i] && ("," == t[i] || "]" == t[i] ? (e[a].push(o), o = "") : ";" == t[i] ? (e[a].push(o), o = "", e[a += 1] = []) : o += t[i]);
        return e
    },
    t.typingAni = function(t, e, o, a) {
        var i = t,
        r = "",
        n = o.split(""),
        s = n.length,
        c = 0,
        l = function() {
            r += n[c],
            e.string = r,
            ++c == s && (i.unschedule(l), a && a())
        };
        i.schedule(l, .05, cc.macro.REPEAT_FOREVER, 0)
    },
    t.unitConvert = function(t) {
        for (var e = ["", "万", "亿", "万亿", "京"], o = t, a = e[0], i = 0; i < 5 && (a = e[i], !(this.strNumSize(o) < 5)); i++) o /= 1e4;
        var r = {
            num: 0,
            unit: ""
        };
        return o = Math.floor(o),
        r.num = o,
        r.unit = a,
        "京" == a && (o = Math.floor(1e4 * o), a = "万亿"),
        o.toFixed(0) + a
    },
    t.unitConvert2 = function(t) {
        for (var e = ["", "万", "亿", "万亿"], o = t, a = e[0], i = 0; i < 4 && (a = e[i], !(this.strNumSize(o) < 5)); i++) o /= 1e4;
        var r = {
            num: 0,
            unit: ""
        };
        return r.num = Math.floor(o),
        r.unit = a,
        r
    },
    t.convertToNum = function(t) {
        return "" == t.unit ? t.num: "万" == t.unit ? 1e4 * t.num: "亿" == t.unit ? 1e8 * t.num: "万亿" == t.unit ? 1e12 * t.num: void 0
    },
    t.convertToNum2 = function(t) {
        return t.match("") ? Number(t.substring(0, t.length - 1)) : t.match("万") ? 1e4 * Number(t.substring(0, t.length - 1)) : t.match("亿") ? 1e8 * Number(t.substring(0, t.length - 1)) : t.match("万亿") ? 1e12 * Number(t.substring(0, t.length - 2)) : Number(t)
    },
    t.convert2SameUnit = function(t, e) {
        var o = t;
        switch (e) {
            case "":
                o = t;
            break;
            case "万":
                o = t / 1e4;
            break;
            case "亿":
                o = t / 1e8;
            break;
            case "万亿":
                o = t / 1e12;
        }
        return Math.floor(o)
    },
    t.strNumSize = function(t) {
        var e = t.toString(),
        o = e.indexOf("."),
        a = e;
        return - 1 != o && (a = e.substring(0, o)),
        a.length
    },
    t.posTransformCamera = function(t, e, o) {
        if (!cc.isValid(t) || !cc.isValid(o)) return cc.Vec2.ZERO;
        var a = t.getScreenToWorldPoint(e),
        i = o.getWorldToScreenPoint(a);
        return cc.v2(i.x, i.y)
    },
    t.posTransform = function(t, e, o) {
        if (!cc.isValid(parent) || !cc.isValid(o)) return cc.Vec2.ZERO;
        var a = t.convertToWorldSpaceAR(e),
        i = o.convertToNodeSpaceAR(a);
        return cc.v2(i.x, i.y)
    },
    t
} ();
o.Utils = a