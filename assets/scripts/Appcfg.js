var t = require;
var e = module;
var o = exports;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.BaseEventName = o.ObjectWeightValue = o.ObjectValue = o.WeightObject = o.LoadingProcess = o.OrderLayer = o.LanguageType = void 0,
function(t) {
    t.zh = "zh",
    t.zh_tw = "fz",
    t.en = "en",
    t.jp = "jp"
} (o.LanguageType || (o.LanguageType = {})),
function(t) {
    t[t.main0 = -1] = "main0",
    t[t.main = 0] = "main",
    t[t.main1 = 10] = "main1",
    t[t.special = 50] = "special",
    t[t.pop = 100] = "pop",
    t[t.top = 200] = "top",
    t[t.pop2 = 300] = "pop2",
    t[t.tip = 400] = "tip",
    t[t.guide = 900] = "guide",
    t[t.touch = 1e3] = "touch",
    t[t.Log = 2e3] = "Log"
} (o.OrderLayer || (o.OrderLayer = {})),
function(t) {
    t[t.StartLoading = 5] = "StartLoading",
    t[t.ExcelCfg = 10] = "ExcelCfg",
    t[t.PlayerCfg = 20] = "PlayerCfg",
    t[t.ResCfg = 40] = "ResCfg",
    t[t.AudioCfg = 60] = "AudioCfg",
    t[t.OtherCfg = 80] = "OtherCfg",
    t[t.EndLoading = 100] = "EndLoading"
} (o.LoadingProcess || (o.LoadingProcess = {}));
o.WeightObject = function() {};
o.ObjectValue = function() {};
o.ObjectWeightValue = function() {},
function(t) {
    t.Loading = "Loading",
    t.OpenUI = "openUi",
    t.CloseUI = "CloseUI",
    t.ShowTopUI = "ShowTopUI",
    t.blocktouch = "blocktouch",
    t.GoGame = "GoGame"
} (o.BaseEventName || (o.BaseEventName = {}))