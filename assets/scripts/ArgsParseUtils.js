var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.ArgsParseUtils = void 0;
var a = function() {
    function t() {}
    return t._makeLoadResArgs = function() {
        if (arguments.length < 1 || "string" != typeof arguments[0]) return console.error("_makeLoadResArgs error " + arguments),
        null;
        for (var t = {
            bundle: arguments[0],
            path: arguments[1],
            type: arguments[2],
            callback: arguments[3],
            autoRelese: !1,
            cacheTme: 10,
            saveKey: null
        },
        e = 4; e < arguments.length; ++e) 4 == e && "boolean" == typeof arguments[e] && (t.autoRelese = arguments[e]),
        5 == e && "number" == typeof arguments[e] ? t.cacheTme = arguments[e] : e == arguments.length - 1 && "string" == typeof arguments[e] && (t.saveKey = arguments[e]);
        return t
    },
    t._makeloadSpriteFrameResrgs = function() {
        if (arguments.length < 1 || "string" != typeof arguments[0]) return console.error("_makeloadSpriteFrameResrgs error " + arguments),
        null;
        for (var t = {
            bundle: arguments[0],
            path: arguments[1],
            callback: arguments[2],
            autoRelese: !1,
            cacheTme: 10,
            saveKey: null
        },
        e = 3; e < arguments.length; ++e) 3 == e && "boolean" == typeof arguments[e] && (t.autoRelese = arguments[e]),
        4 == e && "number" == typeof arguments[e] ? t.cacheTme = arguments[e] : e == arguments.length - 1 && "string" == typeof arguments[e] && (t.saveKey = arguments[e]);
        return t
    },
    t
} ();
o.ArgsParseUtils = a