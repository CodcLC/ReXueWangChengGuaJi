"use strict";
cc._RF.push(module, '5e70aRZ275JpJ9JcQMRK3uj', 'TrackDataEvent');
// scripts/TrackDataEvent.js

"use strict";

var t = require;
var e = module;
var o = exports;
var a, i;
Object.defineProperty(o, "__esModule", {
  value: !0
}), o.EventCF = o.TrackId = void 0, function (t) {
  t[t.dau = 0] = "dau", t[t.guide1 = 1] = "guide1", t[t.guide1_1 = 2] = "guide1_1", t[t.guide2 = 3] = "guide2", t[t.guide2_1 = 4] = "guide2_1", t[t.guide2_2 = 5] = "guide2_2", t[t.guide3_1 = 6] = "guide3_1", t[t.guide3 = 7] = "guide3", t[t.guide4_1 = 8] = "guide4_1", t[t.guide4 = 9] = "guide4", t[t.guide5 = 10] = "guide5", t[t.guide6_1 = 11] = "guide6_1", t[t.guide6 = 12] = "guide6", t[t.guide7_1 = 13] = "guide7_1", t[t.guide7 = 14] = "guide7", t[t.guide8 = 15] = "guide8", t[t.guide9 = 16] = "guide9", t[t.guide10 = 17] = "guide10", t[t.guide11 = 18] = "guide11", t[t.guide12 = 19] = "guide12", t[t.guide13 = 20] = "guide13", t[t.guide14 = 21] = "guide14", t[t.guide15 = 22] = "guide15", t[t.guide16 = 23] = "guide16", t[t.guide17 = 24] = "guide17", t[t.guide18 = 25] = "guide18", t[t.guide19 = 26] = "guide19", t[t.guide20 = 27] = "guide20", t[t.guide21 = 28] = "guide21", t[t.guide22 = 29] = "guide22", t[t.click_signin = 30] = "click_signin", t[t.click_speed = 31] = "click_speed", t[t.click_skillswitch = 32] = "click_skillswitch", t[t.click_equip_quicksale = 33] = "click_equip_quicksale", t[t.click_equip_title = 34] = "click_equip_title", t[t.click_equip_unfix = 35] = "click_equip_unfix", t[t.click_equip_sale = 36] = "click_equip_sale", t[t.click_equip_slide = 37] = "click_equip_slide", t[t.click_getrefreshtime = 38] = "click_getrefreshtime", t[t.click_task = 39] = "click_task", t[t.click_mainlinetask = 40] = "click_mainlinetask", t[t.click_store = 41] = "click_store", t[t.click_buff_1 = 42] = "click_buff_1", t[t.click_buff_2 = 43] = "click_buff_2", t[t.click_buff_3 = 44] = "click_buff_3", t[t.click_refine = 45] = "click_refine", t[t.click_lock = 46] = "click_lock", t[t.onhookreward_click = 47] = "onhookreward_click", t[t.onhookreward_get = 48] = "onhookreward_get", t[t.onhookreward_getdouble = 49] = "onhookreward_getdouble", t[t.pet_appear = 50] = "pet_appear", t[t.pet_click = 51] = "pet_click", t[t.pet_get = 52] = "pet_get", t[t.pet_cancel = 53] = "pet_cancel", t[t.quickarrive_appear = 54] = "quickarrive_appear", t[t.quickarrive_get = 55] = "quickarrive_get", t[t.quickarrive_restart = 56] = "quickarrive_restart", t[t.getall_appear = 57] = "getall_appear", t[t.getall_get = 58] = "getall_get", t[t.chapter_start_X = 59] = "chapter_start_X", t[t.chapter_pass_X = 60] = "chapter_pass_X", t[t.chapter_fail_X = 61] = "chapter_fail_X", t[t.chapter_lv_X_Y = 62] = "chapter_lv_X_Y", t[t.chapter2_fetter_X = 63] = "chapter2_fetter_X", t[t.chapter2_skill2 = 64] = "chapter2_skill2", t[t.chapter2_skill3 = 65] = "chapter2_skill3", t[t.skill_upgrade_X_Y = 66] = "skill_upgrade_X_Y", t[t.equip_upgrade_X_Y = 67] = "equip_upgrade_X_Y", t[t.mainlinetask_X = 68] = "mainlinetask_X", t[t.refine_time_X = 69] = "refine_time_X", t[t.refine_equip_X = 70] = "refine_equip_X", t[t.refine_equip_lv_X = 71] = "refine_equip_lv_X", t[t.refine_equip_lv_time_X = 72] = "refine_equip_lv_time_X", t[t.box_time_X_Y = 73] = "box_time_X_Y", t[t.box2_chaptertime_X_Y = 74] = "box2_chaptertime_X_Y", t[t.box3_chaptertime_X_Y = 75] = "box3_chaptertime_X_Y", t[t.speed_X = 76] = "speed_X", t[t.quickarrive_X_Y = 77] = "quickarrive_X_Y", t[t.pet_X = 78] = "pet_X", t[t.store_time_X = 79] = "store_time_X", t[t.store_skill_X = 80] = "store_skill_X", t[t.store_quip_X = 81] = "store_quip_X", t[t.refine_equip_get_X = 82] = "refine_equip_get_X", t[t.strength = 83] = "strength", t[t.ingot = 84] = "ingot", t[t.coin = 85] = "coin", t[t.pet = 86] = "pet", t[t.quickarrive = 87] = "quickarrive", t[t.combatspeed = 88] = "combatspeed", t[t.getrefreshtime = 89] = "getrefreshtime", t[t.getallskill = 90] = "getallskill", t[t.doubleaward = 91] = "doubleaward", t[t.upgradeskill = 92] = "upgradeskill", t[t.skillbox = 93] = "skillbox", t[t.equipbox = 94] = "equipbox", t[t.equipvacancy = 95] = "equipvacancy", t[t.upgradeequip = 96] = "upgradeequip", t[t.signin = 97] = "signin", t[t.offlineaward = 98] = "offlineaward", t[t.task_doubleaward = 99] = "task_doubleaward", t[t.store_refresh = 100] = "store_refresh", t[t.store_getskill = 101] = "store_getskill", t[t.store_getequip = 102] = "store_getequip", t[t.refine_getequip = 103] = "refine_getequip", t[t.time_1 = 104] = "time_1", t[t.time_3 = 105] = "time_3", t[t.time_5 = 106] = "time_5", t[t.time_7 = 107] = "time_7", t[t.time_10 = 108] = "time_10", t[t.time_12 = 109] = "time_12", t[t.time_15 = 110] = "time_15", t[t.time_20 = 111] = "time_20";
}(i = o.TrackId || (o.TrackId = {})), o.EventCF = ((a = {})[i.dau] = {
  eventKey: "dau",
  eventValue: "dau",
  info: "日活人数",
  onlyOne: !0
}, a[i.guide1] = {
  eventKey: "guide",
  eventValue: "guide1",
  info: "[引导] 到达loading界面的人数",
  onlyOne: !0
}, a[i.guide1_1] = {
  eventKey: "guide",
  eventValue: "guide1_1",
  info: "[引导] 结束loading的人数",
  onlyOne: !0,
  preEvent: "guideguide1"
}, a[i.guide2] = {
  eventKey: "guide",
  eventValue: "guide2",
  info: "[引导] 点击“开始游戏”的人数",
  onlyOne: !0,
  preEvent: "guideguide1_1"
}, a[i.guide2_1] = {
  eventKey: "guide",
  eventValue: "guide2_1",
  info: "[引导] 出现“长按暴走”说明界面的人数",
  onlyOne: !0,
  preEvent: "guideguide2"
}, a[i.guide2_2] = {
  eventKey: "guide",
  eventValue: "guide2_2",
  info: "[引导] 点击“暴走”按钮的人数",
  onlyOne: !0,
  preEvent: "guideguide2_1"
}, a[i.guide3_1] = {
  eventKey: "guide",
  eventValue: "guide3_1",
  info: "[引导] 第1次 到达技能选择界面的人数",
  onlyOne: !0,
  preEvent: "guideguide2"
}, a[i.guide3] = {
  eventKey: "guide",
  eventValue: "guide3",
  info: "[引导] 选技能界面,点击“技能书”的人数(第1次,选择)",
  onlyOne: !0,
  preEvent: "guideguide3_1"
}, a[i.guide4_1] = {
  eventKey: "guide",
  eventValue: "guide4_1",
  info: "[引导] 第2次 到达技能选择界面的人数",
  onlyOne: !0,
  preEvent: "guideguide3"
}, a[i.guide4] = {
  eventKey: "guide",
  eventValue: "guide4",
  info: "[引导] 选技能界面,点击“技能书”的人数(第2次,凑羁绊)",
  onlyOne: !0,
  preEvent: "guideguide4_1"
}, a[i.guide5] = {
  eventKey: "guide",
  eventValue: "guide5",
  info: "[引导] 出现“羁绊达成”说明面，点击关闭页面的人数",
  onlyOne: !0,
  preEvent: "guideguide4"
}, a[i.guide6_1] = {
  eventKey: "guide",
  eventValue: "guide6_1",
  info: "[引导] 第3次 到达技能选择界面的人数",
  onlyOne: !0,
  preEvent: "guideguide5"
}, a[i.guide6] = {
  eventKey: "guide",
  eventValue: "guide6",
  info: "[引导] 选技能界面,点击“技能书”的人数(第3次,技能升星)",
  onlyOne: !0,
  preEvent: "guideguide6_1"
}, a[i.guide7_1] = {
  eventKey: "guide",
  eventValue: "guide7_1",
  info: "[引导] 第4次 到达技能选择界面的人数",
  onlyOne: !0,
  preEvent: "guideguide6"
}, a[i.guide7] = {
  eventKey: "guide",
  eventValue: "guide7",
  info: "[引导] 选技能界面,点击“技能书”的人数(第4次,技能升星)",
  onlyOne: !0,
  preEvent: "guideguide7_1"
}, a[i.guide8] = {
  eventKey: "guide",
  eventValue: "guide8",
  info: "[引导] 到达结算界面,点击“直接领取”的人数",
  onlyOne: !0
}, a[i.guide9] = {
  eventKey: "guide",
  eventValue: "guide9",
  info: "[引导] 主界面,点击“装备”的人数",
  onlyOne: !0
}, a[i.guide10] = {
  eventKey: "guide",
  eventValue: "guide10",
  info: "[引导] 装备界面,点击“一键换装”的人数",
  onlyOne: !0,
  preEvent: "guideguide9"
}, a[i.guide11] = {
  eventKey: "guide",
  eventValue: "guide11",
  info: "[引导] 装备界面,点击“返回”的人数",
  onlyOne: !0,
  preEvent: "guideguide10"
}, a[i.guide12] = {
  eventKey: "guide",
  eventValue: "guide12",
  info: "[引导] 主界面,点击“技能”的人数",
  onlyOne: !0,
  preEvent: "guideguide11"
}, a[i.guide13] = {
  eventKey: "guide",
  eventValue: "guide13",
  info: "[引导] 技能书界面,点击“技能书”的人数",
  onlyOne: !0,
  preEvent: "guideguide12"
}, a[i.guide14] = {
  eventKey: "guide",
  eventValue: "guide14",
  info: "[引导] 技能书界面,点击“升级”的人数",
  onlyOne: !0,
  preEvent: "guideguide13"
}, a[i.guide15] = {
  eventKey: "guide",
  eventValue: "guide15",
  info: "[引导] 技能书界面,点击关闭详情页面的人数",
  onlyOne: !0,
  preEvent: "guideguide14"
}, a[i.guide16] = {
  eventKey: "guide",
  eventValue: "guide16",
  info: "[引导] 技能书界面,点击“宝箱”前往商城的人数",
  onlyOne: !0,
  preEvent: "guideguide15"
}, a[i.guide17] = {
  eventKey: "guide",
  eventValue: "guide17",
  info: "[引导] 商城界面,点击购买经典装备宝箱的人数",
  onlyOne: !0
}, a[i.guide18] = {
  eventKey: "guide",
  eventValue: "guide18",
  info: "[引导] 经典装备宝箱开启界面,点击“确认”的人数",
  onlyOne: !0,
  preEvent: "guideguide17"
}, a[i.guide19] = {
  eventKey: "guide",
  eventValue: "guide19",
  info: "[引导] 商城界面,点击购买经典技能宝箱的人数",
  onlyOne: !0,
  preEvent: "guideguide18"
}, a[i.guide20] = {
  eventKey: "guide",
  eventValue: "guide20",
  info: "[引导] 经典技能宝箱开启界面,点击“确认”的人数",
  onlyOne: !0,
  preEvent: "guideguide19"
}, a[i.guide21] = {
  eventKey: "guide",
  eventValue: "guide21",
  info: "[引导] 从商城界面返回主界面的人数",
  onlyOne: !0
}, a[i.guide22] = {
  eventKey: "guide",
  eventValue: "guide22",
  info: "[引导] 第二次点击“开始游戏”的人数",
  onlyOne: !0,
  preEvent: "guideguide2"
}, a[i.click_signin] = {
  eventKey: "guide",
  eventValue: "click_signin",
  info: "[点击] 首次点击“签到”按钮",
  onlyOne: !0
}, a[i.click_speed] = {
  eventKey: "guide",
  eventValue: "click_speed",
  info: "[点击] 首次点击局内“倍速”按钮",
  onlyOne: !0
}, a[i.click_skillswitch] = {
  eventKey: "guide",
  eventValue: "click_skillswitch",
  info: "[点击] 首次点击技能详情界面切换“局内属性”",
  onlyOne: !0
}, a[i.click_equip_quicksale] = {
  eventKey: "guide",
  eventValue: "click_quicksale",
  info: "[点击] 首次点击“装备”界面“快速出售”按钮",
  onlyOne: !0
}, a[i.click_equip_title] = {
  eventKey: "guide",
  eventValue: "click_equip_title",
  info: "[点击] 首次点击“装备”界面“称号”",
  onlyOne: !0
}, a[i.click_equip_unfix] = {
  eventKey: "guide",
  eventValue: "click_equip_unfix",
  info: "[点击] 首次点击“装备”界面,装备详情页面“卸下”",
  onlyOne: !0
}, a[i.click_equip_sale] = {
  eventKey: "guide",
  eventValue: "click_equip_sale",
  info: "[点击] 首次点击“装备”界面,装备详情页面“出售”",
  onlyOne: !0
}, a[i.click_equip_slide] = {
  eventKey: "guide",
  eventValue: "click_equip_slide",
  info: "[点击] 首次点击“装备”界面,滑动装备栏操作换页",
  onlyOne: !0
}, a[i.click_getrefreshtime] = {
  eventKey: "guide",
  eventValue: "click_getrefreshtime",
  info: "[点击] 首次点击“免费刷新”刷新技能",
  onlyOne: !0
}, a[i.click_task] = {
  eventKey: "guide",
  eventValue: "click_task",
  info: "[点击] 首次点击“任务”按钮",
  onlyOne: !0
}, a[i.click_mainlinetask] = {
  eventKey: "guide",
  eventValue: "click_mainlinetask",
  info: "[点击] 首次点击“主线任务”按钮",
  onlyOne: !0
}, a[i.click_store] = {
  eventKey: "guide",
  eventValue: "click_store",
  info: "[点击] 首次点击“神秘商人”按钮",
  onlyOne: !0
}, a[i.click_buff_1] = {
  eventKey: "guide",
  eventValue: "click_buff_1",
  info: "[点击] 首次点击“暴走”按钮（排除新手引导）",
  onlyOne: !0,
  preEvent: "guideguide2_2"
}, a[i.click_buff_2] = {
  eventKey: "guide",
  eventValue: "click_buff_2",
  info: "[点击] 首次长按“暴走”按钮（排除新手引导）",
  onlyOne: !0,
  preEvent: "guideguide2_2"
}, a[i.click_buff_3] = {
  eventKey: "guide",
  eventValue: "click_buff_3",
  info: "[点击] 首次长按“暴走”按钮将能力条用空",
  onlyOne: !0
}, a[i.click_refine] = {
  eventKey: "guide",
  eventValue: "click_refine",
  info: "[点击] 首次点击“装备”界面,装备详情页面“合成”",
  onlyOne: !0
}, a[i.click_lock] = {
  eventKey: "guide",
  eventValue: "click_lock",
  info: "[点击] 首次点击“装备”界面,装备详情页面“锁”",
  onlyOne: !0
}, a[i.onhookreward_click] = {
  eventKey: "guide",
  eventValue: "onhookreward_click",
  info: "[离线奖励] 首次点击离线奖励宝箱出现弹窗的人数",
  onlyOne: !0
}, a[i.onhookreward_get] = {
  eventKey: "guide",
  eventValue: "onhookreward_get",
  info: "[离线奖励] 获取离线收益的人数",
  onlyOne: !0,
  preEvent: "guideonhookreward_click",
  condition: "guideonhookreward_getdouble"
}, a[i.onhookreward_getdouble] = {
  eventKey: "guide",
  eventValue: "onhookreward_getdouble",
  info: "[离线奖励] 双倍获取离线收益的人数",
  onlyOne: !0,
  preEvent: "guideonhookreward_click",
  condition: "guideonhookreward_get"
}, a[i.pet_appear] = {
  eventKey: "guide",
  eventValue: "pet_appear",
  info: "[宠物] 首次出现宠物的人数",
  onlyOne: !0
}, a[i.pet_click] = {
  eventKey: "guide",
  eventValue: "pet_click",
  info: "[宠物] 首次点击宠物的人数",
  onlyOne: !0,
  preEvent: "guidepet_appear"
}, a[i.pet_get] = {
  eventKey: "guide",
  eventValue: "pet_get",
  info: "[宠物] 首次点击获取宠物的人数",
  onlyOne: !0,
  preEvent: "guidepet_click",
  condition: "guidepet_cancel"
}, a[i.pet_cancel] = {
  eventKey: "guide",
  eventValue: "pet_cancel",
  info: "[宠物] 首次点击关闭的人数",
  onlyOne: !0,
  preEvent: "guidepet_click",
  condition: "guidepet_get"
}, a[i.quickarrive_appear] = {
  eventKey: "guide",
  eventValue: "quickarrive_appear",
  info: "[快速到达] 首次触发快速到达界面的人数",
  onlyOne: !0
}, a[i.quickarrive_get] = {
  eventKey: "guide",
  eventValue: "quickarrive_get",
  info: "[快速到达] 首次触发快速到达界面,点击“快速到达”的人数",
  onlyOne: !0,
  preEvent: "guidequickarrive_appear",
  condition: "guidequickarrive_restart"
}, a[i.quickarrive_restart] = {
  eventKey: "guide",
  eventValue: "quickarrive_restart",
  info: "[快速到达] 首次触发快速到达界面,点击“重新开始”的人数",
  onlyOne: !0,
  preEvent: "guidequickarrive_appear",
  condition: "guidequickarrive_get"
}, a[i.getall_appear] = {
  eventKey: "guide",
  eventValue: "getall_appear",
  info: "[全都要] 首次触发“全都要”的人数",
  onlyOne: !0
}, a[i.getall_get] = {
  eventKey: "guide",
  eventValue: "getall_get",
  info: "[全都要] 获取“全都要”的人数",
  onlyOne: !0,
  preEvent: "guidegetall_appear"
}, a[i.chapter_start_X] = {
  eventKey: "lv",
  eventValue: "chapter_start_",
  info: "章节：开启章节X的人数情况（X=章节id）",
  onlyOne: !0
}, a[i.chapter_pass_X] = {
  eventKey: "lv",
  eventValue: "chapter_pass_",
  info: "章节：章节X首局对局“成功”的人数情况（X=章节id）",
  onlyOne: !0,
  preEvent: "lvchapter_start_",
  condition: "lvchapter_fail_"
}, a[i.chapter_fail_X] = {
  eventKey: "lv",
  eventValue: "chapter_fail_",
  info: "章节：章节X首局对局“失败”的人数情况（X=章节id）",
  onlyOne: !0,
  preEvent: "lvchapter_start_",
  condition: "lvchapter_pass_"
}, a[i.chapter_lv_X_Y] = {
  eventKey: "lv",
  eventValue: "chapter_lv_",
  info: "关卡数：各章节到达关卡数情况,每5关打一次点（X=章节id,Y=关卡数，仅打点5的倍数）x仅统计到6",
  onlyOne: !0
}, a[i.chapter2_fetter_X] = {
  eventKey: "lv",
  eventValue: "chapter2_fetter_",
  info: "羁绊：在第2章中羁绊达成X种的人数（X=种类数）",
  onlyOne: !0
}, a[i.chapter2_skill2] = {
  eventKey: "lv",
  eventValue: "chapter2_skill2",
  info: "技能书：在第2章中任意技能达成2星的人数",
  onlyOne: !0
}, a[i.chapter2_skill3] = {
  eventKey: "lv",
  eventValue: "chapter2_skill3",
  info: "技能书：在第2章中任意技能达成3星的人数",
  onlyOne: !0
}, a[i.skill_upgrade_X_Y] = {
  eventKey: "lv",
  eventValue: "skill_upgrade_",
  info: "技能书：各技能书的升级情况（X=技能书id，Y=等级）y仅统计到3",
  onlyOne: !0
}, a[i.equip_upgrade_X_Y] = {
  eventKey: "lv",
  eventValue: "equip_upgrade_",
  info: "装备：各装备的升级情况（X=装备id，Y=等级）y仅统计到3",
  onlyOne: !0
}, a[i.mainlinetask_X] = {
  eventKey: "lv",
  eventValue: "mainlinetask_",
  info: "任务：各任务的完成情况统计（X=任务id，x仅统计到30）",
  onlyOne: !0
}, a[i.refine_time_X] = {
  eventKey: "lv",
  eventValue: "refine_time_",
  info: "合成：成功合成装备的次数统计（X=次数，x仅统计到10）",
  onlyOne: !0
}, a[i.refine_equip_X] = {
  eventKey: "lv",
  eventValue: "refine_equip_",
  info: "合成：成功合成装备的情况统计（X=装备id）",
  onlyOne: !1
}, a[i.refine_equip_lv_X] = {
  eventKey: "lv",
  eventValue: "refine_equip_lv_",
  info: "合成：成功合成装备时，装备星级的情况统计（X=星级，1/2/3/4/5）",
  onlyOne: !1
}, a[i.refine_equip_lv_time_X] = {
  eventKey: "lv",
  eventValue: "refine_equip_lv_time_",
  info: "装备：各装备的升级次数情况（X=装备id，Y=升级次数）y仅统计到5",
  onlyOne: !0
}, a[i.box_time_X_Y] = {
  eventKey: "iaa",
  eventValue: "box_time_",
  info: "宝箱：各宝箱开启的次数情况（X=宝箱id，Y=开启次数，Y仅统计到20）",
  onlyOne: !0
}, a[i.box2_chaptertime_X_Y] = {
  eventKey: "iaa",
  eventValue: "box2_chaptertime_",
  info: "宝箱：在第X章节，开启付费装备宝箱Y次的情况（X=章节id，x仅统计到5，Y=次数，y仅统计到5）",
  onlyOne: !1
}, a[i.box3_chaptertime_X_Y] = {
  eventKey: "iaa",
  eventValue: "box3_chaptertime_",
  info: "宝箱：在第X章节，开启付费技能书宝箱Y次的情况（X=章节id，x仅统计到5，Y=次数，y仅统计到5）",
  onlyOne: !1
}, a[i.speed_X] = {
  eventKey: "iaa",
  eventValue: "speed_",
  info: "倍速：获取各倍数的人数情况（X=倍速id，2=2倍速，3=3倍速……）",
  onlyOne: !0
}, a[i.quickarrive_X_Y] = {
  eventKey: "iaa",
  eventValue: "quickarrive_",
  info: "快速到达：成功使用快速到达时所在的章节及关卡节点（X=章节id,Y=关卡数，仅打点5的倍数）",
  onlyOne: !1
}, a[i.pet_X] = {
  eventKey: "iaa",
  eventValue: "pet_",
  info: "宠物：获取宠物时所在的章节（X=章节id，x仅统计到5）",
  onlyOne: !0
}, a[i.store_time_X] = {
  eventKey: "iaa",
  eventValue: "store_time_",
  info: "神秘商人：在神秘商人购买的次数情况统计（X=次数，x仅统计到10）",
  onlyOne: !0
}, a[i.store_skill_X] = {
  eventKey: "iaa",
  eventValue: "store_skill_",
  info: "神秘商人：购买“技能书”情况统计（X=技能书id）",
  onlyOne: !1
}, a[i.store_quip_X] = {
  eventKey: "iaa",
  eventValue: "store_quip_",
  info: "神秘商人：购买“装备”情况统计（X=装备id）",
  onlyOne: !1
}, a[i.refine_equip_get_X] = {
  eventKey: "iaa",
  eventValue: "refine_equip_get_",
  info: "合成：视频获得装备的情况统计（X=装备id）",
  onlyOne: !1
}, a[i.strength] = {
  eventKey: "video",
  eventValue: "strength",
  info: "体力——免费补充",
  onlyOne: !1
}, a[i.ingot] = {
  eventKey: "video",
  eventValue: "ingot",
  info: "元宝——免费获取",
  onlyOne: !1
}, a[i.coin] = {
  eventKey: "video",
  eventValue: "coin",
  info: "金币——免费获取",
  onlyOne: !1
}, a[i.pet] = {
  eventKey: "video",
  eventValue: "pet",
  info: "宠物——免费获取",
  onlyOne: !1
}, a[i.quickarrive] = {
  eventKey: "video",
  eventValue: "quickarrive",
  info: "开局——根据当前最高关卡进度，快速到达第XX关",
  onlyOne: !1
}, a[i.combatspeed] = {
  eventKey: "video",
  eventValue: "combatspeed",
  info: "局内——解锁战斗速度",
  onlyOne: !1
}, a[i.getrefreshtime] = {
  eventKey: "video",
  eventValue: "getrefreshtime",
  info: "局内——获取刷新技能次数",
  onlyOne: !1
}, a[i.getallskill] = {
  eventKey: "video",
  eventValue: "getallskill",
  info: "局内——选择技能书——“全都要”",
  onlyOne: !1
}, a[i.doubleaward] = {
  eventKey: "video",
  eventValue: "doubleaward",
  info: "结算——双倍领取奖励",
  onlyOne: !1
}, a[i.upgradeskill] = {
  eventKey: "video",
  eventValue: "upgradeskill",
  info: "技能——免费升级",
  onlyOne: !1
}, a[i.skillbox] = {
  eventKey: "video",
  eventValue: "skillbox",
  info: "商城——技能宝箱——免费获取",
  onlyOne: !1
}, a[i.equipbox] = {
  eventKey: "video",
  eventValue: "equipbox",
  info: "商城——装备宝箱——免费获取",
  onlyOne: !1
}, a[i.equipvacancy] = {
  eventKey: "video",
  eventValue: "equipvacancy",
  info: "装备——解锁仓库空位",
  onlyOne: !1
}, a[i.upgradeequip] = {
  eventKey: "video",
  eventValue: "upgradeequip",
  info: "装备——免费强化",
  onlyOne: !1
}, a[i.signin] = {
  eventKey: "video",
  eventValue: "signin",
  info: "签到——补签",
  onlyOne: !1
}, a[i.offlineaward] = {
  eventKey: "video",
  eventValue: "offlineaward",
  info: "离线收益——双倍获取",
  onlyOne: !1
}, a[i.task_doubleaward] = {
  eventKey: "video",
  eventValue: "task_doubleaward",
  info: "任务——双倍领取",
  onlyOne: !1
}, a[i.store_refresh] = {
  eventKey: "video",
  eventValue: "store_refresh",
  info: "神秘商人——刷新",
  onlyOne: !1
}, a[i.store_getskill] = {
  eventKey: "video",
  eventValue: "store_getskill",
  info: "神秘商人——获取技能",
  onlyOne: !1
}, a[i.store_getequip] = {
  eventKey: "video",
  eventValue: "store_getequip",
  info: "神秘商人——获取装备",
  onlyOne: !1
}, a[i.refine_getequip] = {
  eventKey: "video",
  eventValue: "refine_getequip",
  info: "合成——免费获得装备",
  onlyOne: !1
}, a[i.time_1] = {
  eventKey: "time",
  eventValue: "time_1",
  info: "在线时长达到1m",
  onlyOne: !0
}, a[i.time_3] = {
  eventKey: "time",
  eventValue: "time_3",
  info: "在线时长达到3m",
  onlyOne: !0
}, a[i.time_5] = {
  eventKey: "time",
  eventValue: "time_5",
  info: "在线时长达到5m",
  onlyOne: !0
}, a[i.time_7] = {
  eventKey: "time",
  eventValue: "time_7",
  info: "在线时长达到7m",
  onlyOne: !0
}, a[i.time_10] = {
  eventKey: "time",
  eventValue: "time_10",
  info: "在线时长达到10m",
  onlyOne: !0
}, a[i.time_12] = {
  eventKey: "time",
  eventValue: "time_12",
  info: "在线时长达到12m",
  onlyOne: !0
}, a[i.time_15] = {
  eventKey: "time",
  eventValue: "time_15",
  info: "在线时长达到15m",
  onlyOne: !0
}, a[i.time_20] = {
  eventKey: "time",
  eventValue: "time_20",
  info: "在线时长达到20m",
  onlyOne: !0
}, a);

cc._RF.pop();