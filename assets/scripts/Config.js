var t = require;
var e = module;
var o = exports;
var a, i;
Object.defineProperty(o, "__esModule", {
    value: !0
}),
o.EnumEffID = o.SkillBookClassData = o.DropGoodsData = o.SkillBookData = o.EnumParams = o.GeneralWindowType = o.EnumMonsterType = o.CountData = o.EnumObjectProp = o.WeightData = o.EnumGameState = o.GameConfig = o.EventName = o.AudioCF = o.AudioId = o.UICF = o.UIID = void 0;
var r, n, s = t("Appcfg"),
c = t("PlayerMgr"); (function(t) {
    t[t.UIHome = 0] = "UIHome",
    t[t.UITop = 1] = "UITop",
    t[t.UITips = 2] = "UITips",
    t[t.UITouch = 3] = "UITouch",
    t[t.UIGuide = 4] = "UIGuide",
    t[t.UICacheExample = 5] = "UICacheExample",
    t[t.UIRealName = 6] = "UIRealName",
    t[t.UIGameExist = 7] = "UIGameExist",
    t[t.UIGame = 8] = "UIGame",
    t[t.UIDrawCard = 9] = "UIDrawCard",
    t[t.UISettle = 10] = "UISettle",
    t[t.UIFetterInfo = 11] = "UIFetterInfo",
    t[t.UISkillBookInfo = 12] = "UISkillBookInfo",
    t[t.UISkillInfo = 13] = "UISkillInfo",
    t[t.UIEquip = 14] = "UIEquip",
    t[t.UIEquipInfo = 15] = "UIEquipInfo",
    t[t.UISellView = 16] = "UISellView",
    t[t.UIFastPass = 17] = "UIFastPass",
    t[t.UIShop = 18] = "UIShop",
    t[t.UISkillBook = 19] = "UISkillBook",
    t[t.UIMysticalShop = 20] = "UIMysticalShop",
    t[t.UISetting = 21] = "UISetting",
    t[t.UIPause = 22] = "UIPause",
    t[t.UIGeneralWindow = 23] = "UIGeneralWindow",
    t[t.UISalutation = 24] = "UISalutation",
    t[t.UIOnlineReward = 25] = "UIOnlineReward",
    t[t.UITask = 26] = "UITask",
    t[t.UINotBagIndex = 27] = "UINotBagIndex",
    t[t.UIPet = 28] = "UIPet",
    t[t.UIShareVideo = 29] = "UIShareVideo",
    t[t.UIExit = 30] = "UIExit",
    t[t.UIBecoming = 31] = "UIBecoming",
    t[t.UIMainTask = 32] = "UIMainTask",
    t[t.UIHomeNew = 33] = "UIHomeNew",
    t[t.UIEquipInfoNew = 34] = "UIEquipInfoNew",
    t[t.UIEquipComposite = 35] = "UIEquipComposite",
    t[t.UICompositeEnd = 36] = "UICompositeEnd",
    t[t.UIGeneralWindow1 = 37] = "UIGeneralWindow1"
})(r = o.UIID || (o.UIID = {})),
o.UICF = ((a = {})[r.UIHome] = {
    prefab: "ui/UIHome",
    name: "UIHome",
    showTop: !0,
    showMult: !1,
    zIndex: s.OrderLayer.main0,
    bundleName: "prefabs"
},
a[r.UIHomeNew] = {
    prefab: "ui/UIHomeNew",
    name: "UIHomeNew",
    showTop: !0,
    showMult: !1,
    zIndex: s.OrderLayer.main,
    bundleName: "prefabs"
},
a[r.UITop] = {
    prefab: "ui/UITop",
    name: "UITop",
    showTop: !0,
    showMult: !1,
    zIndex: s.OrderLayer.top,
    bundleName: "prefabs"
},
a[r.UITips] = {
    prefab: "ui/UITips",
    name: "UITips",
    showTop: !0,
    showMult: !0,
    zIndex: s.OrderLayer.tip,
    bundleName: "prefabs"
},
a[r.UITouch] = {
    prefab: "ui/UITouch",
    name: "UITouch",
    showTop: !0,
    zIndex: s.OrderLayer.touch,
    bundleName: "prefabs"
},
a[r.UIGuide] = {
    prefab: "ui/UIGuide",
    name: "UIGuide",
    showTop: !0,
    zIndex: s.OrderLayer.guide,
    bundleName: "prefabs"
},
a[r.UIRealName] = {
    prefab: "ui/UIRealName",
    name: "UIRealName",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.pop,
    bundleName: "prefabs"
},
a[r.UIGameExist] = {
    prefab: "UIGameExist",
    name: "UIGameExist",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.touch,
    bundleName: "prefabs"
},
a[r.UIExit] = {
    prefab: "ui/UIExit",
    name: "UIExit",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.pop2,
    bundleName: "prefabs"
},
a[r.UIBecoming] = {
    prefab: "ui/UIBecoming",
    name: "UIBecoming",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.pop2,
    bundleName: "prefabs"
},
a[r.UICacheExample] = {
    prefab: "ui/UICacheExample",
    name: "UICacheExample",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.touch,
    bundleName: "prefabs"
},
a[r.UIGame] = {
    prefab: "ui/UIGame",
    name: "UIGame",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main,
    bundleName: "prefabs"
},
a[r.UIDrawCard] = {
    prefab: "ui/UIDrawCard",
    name: "UIDrawCard",
    showTop: !0,
    showMult: !0,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UISettle] = {
    prefab: "ui/UISettle",
    name: "UISettle",
    showTop: !0,
    showMult: !1,
    zIndex: s.OrderLayer.main,
    bundleName: "prefabs"
},
a[r.UIFetterInfo] = {
    prefab: "ui/UIFetterInfo",
    name: "UIFetterInfo",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UISkillBookInfo] = {
    prefab: "ui/UISkillBookInfo",
    name: "UISkillBookInfo",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UISkillInfo] = {
    prefab: "ui/UISkillInfo",
    name: "UISkillInfo",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UIEquip] = {
    prefab: "ui/UIEquip",
    name: "UIEquip",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main,
    bundleName: "prefabs"
},
a[r.UIEquipInfo] = {
    prefab: "ui/UIEquipInfo",
    name: "UIEquipInfo",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UISellView] = {
    prefab: "ui/UISellView",
    name: "UISellView",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UIFastPass] = {
    prefab: "ui/UIFastPass",
    name: "UIFastPass",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UIShop] = {
    prefab: "ui/UIShop",
    name: "UIShop",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main,
    bundleName: "prefabs"
},
a[r.UISkillBook] = {
    prefab: "ui/UISkillBook",
    name: "UISkillBook",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main,
    bundleName: "prefabs"
},
a[r.UISetting] = {
    prefab: "ui/UISetting",
    name: "UISetting",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.pop2,
    bundleName: "prefabs"
},
a[r.UIPause] = {
    prefab: "ui/UIPause",
    name: "UIPause",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main,
    bundleName: "prefabs"
},
a[r.UIGeneralWindow] = {
    prefab: "ui/UIGeneralWindow",
    name: "UIGeneralWindow",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.pop2,
    bundleName: "prefabs"
},
a[r.UISalutation] = {
    prefab: "ui/UISalutation",
    name: "UISalutation",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UIOnlineReward] = {
    prefab: "ui/UIOnlineReward",
    name: "UIOnlineReward",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.pop2,
    bundleName: "prefabs"
},
a[r.UITask] = {
    prefab: "ui/UITask",
    name: "UITask",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.pop2,
    bundleName: "prefabs"
},
a[r.UINotBagIndex] = {
    prefab: "ui/UINotBagIndex",
    name: "UINotBagIndex",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.pop2,
    bundleName: "prefabs"
},
a[r.UIPet] = {
    prefab: "ui/UIPet",
    name: "UIPet",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.pop2,
    bundleName: "prefabs"
},
a[r.UIShareVideo] = {
    prefab: "ui/UIShareVideo",
    name: "UIShareVideo",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.pop2,
    bundleName: "prefabs"
},
a[r.UIMysticalShop] = {
    prefab: "ui/UIMysticalShop",
    name: "UIMysticalShop",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UIMainTask] = {
    prefab: "ui/UIMainTask",
    name: "UIMainTask",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UIEquipInfoNew] = {
    prefab: "ui/UIEquipInfoNew",
    name: "UIEquipInfoNew",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UIEquipComposite] = {
    prefab: "ui/UIEquipComposite",
    name: "UIEquipComposite",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UICompositeEnd] = {
    prefab: "ui/UICompositeEnd",
    name: "UICompositeEnd",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a[r.UIGeneralWindow1] = {
    prefab: "ui/UIGeneralWindow1",
    name: "UIGeneralWindow1",
    showTop: !1,
    showMult: !1,
    zIndex: s.OrderLayer.main1,
    bundleName: "prefabs"
},
a),
function(t) {
    t.btnClick = "Sound_Click",
    t.BGM_Main = "BGM_Main",
    t.BGM_Battle = "BGM_Battle",
    t.Sound_Victory = "Sound_Victory",
    t.Sound_Fail = "Sound_Fail",
    t.BattleSound_Mobile = "BattleSound_Mobile",
    t.BattleSound_Drop = "BattleSound_Drop",
    t.BattleSound_Die = "BattleSound_Die",
    t.BattleSound_MonsterDeath = "BattleSound_MonsterDeath",
    t.BattleSound_PickUpThings = "BattleSound_PickUpThings",
    t.BattleSound_BossWarn = "BattleSound_BossWarn",
    t.BattleSound_skills1 = "BattleSound_skills1",
    t.BattleSound_skills2 = "BattleSound_skills2",
    t.BattleSound_skills3 = "BattleSound_skills3",
    t.BattleSound_skills4 = "BattleSound_skills4",
    t.BattleSound_skills5 = "BattleSound_skills5",
    t.BattleSound_skills6 = "BattleSound_skills6",
    t.BattleSound_skills7 = "BattleSound_skills7",
    t.BattleSound_skills8 = "BattleSound_skills8",
    t.BattleSound_skills9 = "BattleSound_skills9",
    t.BattleSound_Attack01 = "BattleSound_Attack01",
    t.BattleSound_Attack02 = "BattleSound_Attack02",
    t.BattleSound_Attack03 = "BattleSound_Attack03",
    t.BattleSound_Attack04 = "BattleSound_Attack04",
    t.Sound_WearEquip = "Sound_WearEquip",
    t.Sound_LuckDraw = "Sound_LuckDraw",
    t.Sound_SellEquip = "Sound_SellEquip",
    t.Sound_Upgrade = "Sound_Upgrade"
} (n = o.AudioId || (o.AudioId = {})),
o.AudioCF = ((i = {})[n.btnClick] = {
    path: "Sound_Click",
    bundle: "audio"
},
i[n.BGM_Main] = {
    path: "BGM_Main",
    bundle: "audio"
},
i[n.BGM_Battle] = {
    path: "BGM_Battle",
    bundle: "audio"
},
i[n.Sound_Victory] = {
    path: "Sound_Victory",
    bundle: "audio"
},
i[n.Sound_Fail] = {
    path: "Sound_Fail",
    bundle: "audio"
},
i[n.BattleSound_Mobile] = {
    path: "BattleSound_Mobile",
    bundle: "audio"
},
i[n.BattleSound_Drop] = {
    path: "BattleSound_Drop",
    bundle: "audio"
},
i[n.BattleSound_Die] = {
    path: "BattleSound_Die",
    bundle: "audio"
},
i[n.BattleSound_MonsterDeath] = {
    path: "BattleSound_MonsterDeath",
    bundle: "audio"
},
i[n.BattleSound_PickUpThings] = {
    path: "BattleSound_PickUpThings",
    bundle: "audio"
},
i[n.BattleSound_BossWarn] = {
    path: "BattleSound_BossWarn",
    bundle: "audio"
},
i[n.BattleSound_skills1] = {
    path: "BattleSound_skills1",
    bundle: "audio"
},
i[n.BattleSound_skills2] = {
    path: "BattleSound_skills2",
    bundle: "audio"
},
i[n.BattleSound_skills3] = {
    path: "BattleSound_skills3",
    bundle: "audio"
},
i[n.BattleSound_skills4] = {
    path: "BattleSound_skills4",
    bundle: "audio"
},
i[n.BattleSound_skills5] = {
    path: "BattleSound_skills5",
    bundle: "audio"
},
i[n.BattleSound_skills6] = {
    path: "BattleSound_skills6",
    bundle: "audio"
},
i[n.BattleSound_skills7] = {
    path: "BattleSound_skills7",
    bundle: "audio"
},
i[n.BattleSound_skills8] = {
    path: "BattleSound_skills8",
    bundle: "audio"
},
i[n.BattleSound_skills9] = {
    path: "BattleSound_skills9",
    bundle: "audio"
},
i[n.BattleSound_Attack01] = {
    path: "BattleSound_Attack01",
    bundle: "audio"
},
i[n.BattleSound_Attack02] = {
    path: "BattleSound_Attack02",
    bundle: "audio"
},
i[n.BattleSound_Attack03] = {
    path: "BattleSound_Attack03",
    bundle: "audio"
},
i[n.BattleSound_Attack04] = {
    path: "BattleSound_Attack04",
    bundle: "audio"
},
i[n.Sound_WearEquip] = {
    path: "Sound_WearEquip",
    bundle: "audio"
},
i[n.Sound_LuckDraw] = {
    path: "Sound_LuckDraw",
    bundle: "audio"
},
i[n.Sound_SellEquip] = {
    path: "Sound_SellEquip",
    bundle: "audio"
},
i[n.Sound_Upgrade] = {
    path: "Sound_Upgrade",
    bundle: "audio"
},
i),
function(t) {
    t.RefreshPower = "RefreshPower",
    t.RefreshGold = "RefreshGold",
    t.RefreshInGot = "RefreshInGot",
    t.showText = "showText",
    t.RefreshLevel = "RefreshLevel",
    t.RefreshMonsterCount = "RefreshMonsterCount",
    t.ShowUITop = "ShowUITop",
    t.AddSkillBook = "AddSkillBook",
    t.RefreshFetterShow = "RefreshFetterShow",
    t.RefreshLight = "RefreshLight",
    t.RefreshSkillBookShow = "RefreshSkillBookShow",
    t.ControlDrawCardView = "ControlDrawCardView",
    t.ControlBackSelectSkill = "ControlBackSelectSkill",
    t.GameLayerTouch = "GameLayerTouch",
    t.RefreshUISkillBookShow = "RefreshUISkillBookShow",
    t.RefreshOnlineTime = "RefreshOnlineTime",
    t.RefreshTaskList = "RefreshTaskList",
    t.RefreshRedDot = "RefreshRedDot",
    t.RefreshPowerTime = "RefreshPowerTime",
    t.GameGuideShow = "GameGuideShow",
    t.RefreshPetViewTime = "RefreshPetViewTime",
    t.RefreshSalutationRedDot = "RefreshSalutationRedDot",
    t.RefreshShopRedDot = "RefreshShopRedDot",
    t.RefreshGoldNumAndShow = "RefreshGoldNumAndShow",
    t.RefreshInGotNumAndShow = "RefreshInGotNumAndShow",
    t.SkillBookGuideShow = "SkillBookGuideShow",
    t.RefreshEquipViewInfo = "RefreshEquipViewInfo",
    t.RefreshBagIndexCount = "RefreshBagIndexCount",
    t.WearEquip = "WearEquip",
    t.UnloadEquip = "UnloadEquip",
    t.SellEquip = "SellEquip",
    t.ReplaceEquip = "ReplaceEquip",
    t.SellQuickEquip = "SellQuickEquip",
    t.RefreshStrengthenLv = "RefreshStrengthenLv",
    t.UnlockEquip = "UnlockEquip",
    t.EquipGuideShow = "EquipGuideShow",
    t.RefreshSalutation = "RefreshSalutation",
    t.GoGame = "GoGame",
    t.RefreshMysticalShopTime = "RefreshMysticalShopTime",
    t.RefreshMainTask = "RefreshMainTask",
    t.RefreshMainTaskDec = "RefreshMainTaskDec",
    t.RefreshMainTaskFinished = "RefreshMainTaskFinished",
    t.OpenRecoverTrudge = "OpenRecoverTrudge",
    t.PlaceCompositeEquip = "PlaceCompositeEquip"
} (o.EventName || (o.EventName = {}));
var l = function() {
    function t() {}
    return t.AppCacheName = "KaiJuYiBaDao:",
    t.splitCount = "|",
    t.splitNum = ";",
    t.PreBundle = ["iconImg"],
    t.ecrypt = !1,
    t.abTestType = c.ABTestType.ABD_Test,
    t
} ();
o.GameConfig = l,
function(t) {
    t[t.GamePrePare = 0] = "GamePrePare",
    t[t.GameDoing = 1] = "GameDoing",
    t[t.GamePause = 2] = "GamePause",
    t[t.GameBuffer = 3] = "GameBuffer",
    t[t.GameOver = 4] = "GameOver"
} (o.EnumGameState || (o.EnumGameState = {}));
o.WeightData = function() {},
function(t) {
    t[t.SkillProp = 0] = "SkillProp",
    t[t.AtkProp = 1] = "AtkProp",
    t[t.HpProp = 2] = "HpProp",
    t[t.AtkSpeed = 3] = "AtkSpeed",
    t[t.AtkCrazyProp = 4] = "AtkCrazyProp",
    t[t.AtkCrazyHurtProp = 5] = "AtkCrazyHurtProp",
    t[t.SubHurtProp = 6] = "SubHurtProp",
    t[t.DodgeHurtProbProp = 7] = "DodgeHurtProbProp",
    t[t.AtkProp_value = 8] = "AtkProp_value",
    t[t.HpProp_value = 9] = "HpProp_value"
} (o.EnumObjectProp || (o.EnumObjectProp = {}));
o.CountData = function() {},
function(t) {
    t[t.NormalMonster = 1] = "NormalMonster",
    t[t.EliteMonster = 2] = "EliteMonster",
    t[t.BossMonster = 3] = "BossMonster"
} (o.EnumMonsterType || (o.EnumMonsterType = {})),
function(t) {
    t[t.PowerWindow = 1] = "PowerWindow",
    t[t.GoldWindow = 2] = "GoldWindow",
    t[t.InGotWindow = 3] = "InGotWindow"
} (o.GeneralWindowType || (o.GeneralWindowType = {})),
function(t) {
    t[t.StartGold = 1] = "StartGold",
    t[t.StartIngot = 2] = "StartIngot",
    t[t.StartPower = 3] = "StartPower",
    t[t.LimitPower = 4] = "LimitPower",
    t[t.AddPowerTime = 5] = "AddPowerTime",
    t[t.LevelCostPowerNum = 6] = "LevelCostPowerNum",
    t[t.OnHookMaxTime = 7] = "OnHookMaxTime",
    t[t.SkillBookRefreshCount = 8] = "SkillBookRefreshCount",
    t[t.SkillBookRefreshCountForVideo = 9] = "SkillBookRefreshCountForVideo",
    t[t.AddSkillBookRefreshCount = 10] = "AddSkillBookRefreshCount",
    t[t.TrudgeMaxValue = 11] = "TrudgeMaxValue",
    t[t.TrudgeCostValue = 12] = "TrudgeCostValue",
    t[t.TrudgeRecoverValue = 13] = "TrudgeRecoverValue",
    t[t.TrudgeSpeedValue = 14] = "TrudgeSpeedValue"
} (o.EnumParams || (o.EnumParams = {}));
o.SkillBookData = function() {};
o.DropGoodsData = function() {};
o.SkillBookClassData = function() {
    this.NClass = [],
    this.RClass = [],
    this.SRClass = [],
    this.SSRClass = [],
    this.SSSRClass = []
},
function(t) {
    t[t.EffGoodEquip1 = 1] = "EffGoodEquip1",
    t[t.EffGoodEquip2 = 2] = "EffGoodEquip2",
    t[t.EffGoodEquip3 = 3] = "EffGoodEquip3",
    t[t.EffPropUp = 4] = "EffPropUp",
    t[t.EffTaskGet = 5] = "EffTaskGet",
    t[t.EffUpLv = 6] = "EffUpLv"
} (o.EnumEffID || (o.EnumEffID = {}))