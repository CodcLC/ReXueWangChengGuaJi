var t = require;
var e = module;
var o = exports;
var a, i;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.CommonCfg = o.CommonEventName = o.ComAudioCF = o.ComAudioId = o.ComUICF = o.ComUIID = void 0;
var r, n, s = t("Appcfg"); (function(t) {
    t.UISign = "com_UISign",
    t.UIReward = "com_UIReward",
    t.UILotty = "com_UILotty",
    t.UICollection = "com_UICollection",
    t.UIFreeTime = "com_UIFreeTime"
})(r = o.ComUIID || (o.ComUIID = {})),
o.ComUICF = ((a = {})[r.UISign] = {
    prefab: "ui/UISign",
    name: "UISign",
    showTop: !0,
    zIndex: s.OrderLayer.pop2,
    bundleName: "comprefabs"
},
a[r.UIReward] = {
    prefab: "ui/UIReward",
    name: "UIReward",
    showTop: !0,
    zIndex: s.OrderLayer.pop2,
    bundleName: "comprefabs"
},
a[r.UILotty] = {
    prefab: "ui/UILotty",
    name: "UILotty",
    showTop: !0,
    zIndex: s.OrderLayer.pop,
    bundleName: "comprefabs"
},
a[r.UICollection] = {
    prefab: "ui/UICollection",
    name: "UICollection",
    showTop: !0,
    zIndex: s.OrderLayer.pop,
    bundleName: "comprefabs"
},
a[r.UIFreeTime] = {
    prefab: "ui/UIFreeTime",
    name: "UIFreeTime",
    showTop: !0,
    zIndex: s.OrderLayer.pop,
    bundleName: "comprefabs"
},
a),
function(t) {
    t.btnClick = "Sound_Click",
    t.success = "common_success",
    t.reward = "common_reward",
    t.lottyRun = "common_lottyRun",
    t.lottyDown = "common_lottyDown",
    t.ding = "common_ding",
    t.lottyMusic = "common_lottyMusic",
    t.goldEffect = "common_goldEffect"
} (n = o.ComAudioId || (o.ComAudioId = {})),
o.ComAudioCF = ((i = {})[n.btnClick] = {
    path: "Sound_Click",
    bundle: "audio"
},
i[n.success] = {
    path: "success",
    bundle: "comaudio"
},
i[n.reward] = {
    path: "reward",
    bundle: "comaudio"
},
i[n.lottyRun] = {
    path: "lottyRun",
    bundle: "comaudio"
},
i[n.lottyDown] = {
    path: "lottyDown",
    bundle: "comaudio"
},
i[n.ding] = {
    path: "ding",
    bundle: "comaudio"
},
i[n.lottyMusic] = {
    path: "lotty_music",
    bundle: "comaudio"
},
i[n.goldEffect] = {
    path: "goldEffect",
    bundle: "comaudio"
},
i),
function(t) {
    t.RefreshGold = "CommonRefreshGold",
    t.RefreshSignRed = "CommonRefreshSignRed",
    t.RefreshTickNum = "CommonRefreshTickNum",
    t.callRefreshTick = "CommoncallRefreshTick",
    t.RefreshCollection = "CommonRefreshCollection",
    t.RefreshCollectionRed = "CommonRefreshCollectionRed",
    t.AddCollection = "AddCollection",
    t.GetReward = "GetReward",
    t.GetRewardEnd = "GetRewardEnd"
} (o.CommonEventName || (o.CommonEventName = {}));
var c = function() {
    function t() {}
    return t.splitCount = "|",
    t.splitNum = ";",
    t.signBundle = "comimgs",
    t
} ();
o.CommonCfg = c