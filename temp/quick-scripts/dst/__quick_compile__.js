
(function () {
var scripts = [{"deps":{"./assets/scripts/ArgsParseUtils":1,"./assets/scripts/AudioMgr":2,"./assets/scripts/BaseCtrl":5,"./assets/scripts/BasePlatform":3,"./assets/scripts/BaseUI":17,"./assets/scripts/BaseButton":7,"./assets/scripts/BaseData":8,"./assets/scripts/BaseMgr":4,"./assets/scripts/CameraMgr":13,"./assets/scripts/CacheUtils":6,"./assets/scripts/CardMgr":9,"./assets/scripts/ByteDanceManager":10,"./assets/scripts/ComFreeTimeData":20,"./assets/scripts/ComCollectionData":11,"./assets/scripts/CityMgr":18,"./assets/scripts/ComLottyData":12,"./assets/scripts/ComPlayerMgr":15,"./assets/scripts/ComGameData":14,"./assets/scripts/ComDataMgr":16,"./assets/scripts/CommonBirge":22,"./assets/scripts/CommonModel":19,"./assets/scripts/EditorManager":21,"./assets/scripts/DataMgr":27,"./assets/scripts/EffectMgr":29,"./assets/scripts/EventMgr":28,"./assets/scripts/CommonCfg":25,"./assets/scripts/ComSignData":23,"./assets/scripts/EquipMgr":24,"./assets/scripts/FetterMgr":31,"./assets/scripts/GameDataMgr":33,"./assets/scripts/GoodsManager":35,"./assets/scripts/GuideData":34,"./assets/scripts/GameMgr":32,"./assets/scripts/GameData":30,"./assets/scripts/HttpMgr":39,"./assets/scripts/Config":26,"./assets/scripts/KSManager":41,"./assets/scripts/LadleWordMgr":38,"./assets/scripts/IosManager":37,"./assets/scripts/LabelPlus":42,"./assets/scripts/LabPlatform":36,"./assets/scripts/ListItem":44,"./assets/scripts/Loading":48,"./assets/scripts/Monster":51,"./assets/scripts/LogMgr":47,"./assets/scripts/MysticalShopData":46,"./assets/scripts/MainTaskData":43,"./assets/scripts/LanguageMgr":40,"./assets/scripts/NodeDropGoods":49,"./assets/scripts/NodeCurrency":53,"./assets/scripts/List":45,"./assets/scripts/Main":52,"./assets/scripts/NodeEquip":54,"./assets/scripts/NodeFetter":55,"./assets/scripts/NodeMainTask":62,"./assets/scripts/NodeSkillBook":56,"./assets/scripts/NodeSkill":58,"./assets/scripts/NodeTask":64,"./assets/scripts/NodeEquipComposite":50,"./assets/scripts/NodeUISkillBookNew":59,"./assets/scripts/ObjectsParent":61,"./assets/scripts/NodeWearEquip":70,"./assets/scripts/NodeUISkillBook":66,"./assets/scripts/PetMgr":93,"./assets/scripts/ObjectMgr":63,"./assets/scripts/OppoManager":57,"./assets/scripts/PlayerMgr":103,"./assets/scripts/PlatformManager":69,"./assets/scripts/Player":60,"./assets/scripts/PoolMgr":68,"./assets/scripts/RedDotMgr":67,"./assets/scripts/ScrollCard":75,"./assets/scripts/ResCacheMgr":71,"./assets/scripts/SdkMgr":79,"./assets/scripts/ResourceMgr":73,"./assets/scripts/TaskMgr":72,"./assets/scripts/SkillMgr":82,"./assets/scripts/ShareData":76,"./assets/scripts/SpineUtils":74,"./assets/scripts/TimeMgr":78,"./assets/scripts/TranstaLabel":83,"./assets/scripts/TipsMgr":84,"./assets/scripts/TimeUtils":81,"./assets/scripts/TrackData":77,"./assets/scripts/TrackDataEvent":80,"./assets/scripts/TweenMgr":87,"./assets/scripts/UIBecoming":90,"./assets/scripts/TranstanImg":85,"./assets/scripts/UICollection":88,"./assets/scripts/UICompositeEnd":86,"./assets/scripts/UIFastPass":89,"./assets/scripts/UIEquip":96,"./assets/scripts/UIExit":91,"./assets/scripts/UIEquipInfo":100,"./assets/scripts/UIGeneralWindow1":101,"./assets/scripts/UIFreeTime":98,"./assets/scripts/UIDrawCard":94,"./assets/scripts/UIEquipComposite":92,"./assets/scripts/UIGeneralWindow":95,"./assets/scripts/UIFetterInfo":97,"./assets/scripts/UIGame":106,"./assets/scripts/UILotty":104,"./assets/scripts/UIGuide":131,"./assets/scripts/UIHome":99,"./assets/scripts/UIMgr":105,"./assets/scripts/UIMainTask":102,"./assets/scripts/UIPause":114,"./assets/scripts/UIOnlineReward":107,"./assets/scripts/UINotBagIndex":110,"./assets/scripts/UIPet":109,"./assets/scripts/UIReward":112,"./assets/scripts/UIRealName":115,"./assets/scripts/UISellView":113,"./assets/scripts/UIMysticalShop":108,"./assets/scripts/UISalutation":116,"./assets/scripts/UISetting":120,"./assets/scripts/UISettle":118,"./assets/scripts/UIShareVideo":111,"./assets/scripts/UIShop":117,"./assets/scripts/UISign":122,"./assets/scripts/UITask":124,"./assets/scripts/UISkillInfo":121,"./assets/scripts/UISkillBook":119,"./assets/scripts/RoleMgr":65,"./assets/scripts/UITips":126,"./assets/scripts/UISkillBookInfo":128,"./assets/scripts/UIUtils":129,"./assets/scripts/UITouch":125,"./assets/scripts/VivoManager":134,"./assets/scripts/Utils":132,"./assets/scripts/UserData":130,"./assets/scripts/WebLinkManager":135,"./assets/scripts/AndroidManager":133,"./assets/scripts/UITop":123,"./assets/scripts/WechatManager":137,"./assets/scripts/Weapon":127,"./assets/scripts/Appcfg":136},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ArgsParseUtils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AudioMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BasePlatform.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BaseMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BaseCtrl.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CacheUtils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BaseButton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BaseData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CardMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ByteDanceManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ComCollectionData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ComLottyData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CameraMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ComGameData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ComPlayerMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ComDataMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BaseUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CityMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CommonModel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ComFreeTimeData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/EditorManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CommonBirge.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ComSignData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/EquipMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CommonCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Config.js"},{"deps":{},"path":"preview-scripts/assets/scripts/DataMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/EventMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/EffectMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/FetterMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameDataMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GuideData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GoodsManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LabPlatform.js"},{"deps":{},"path":"preview-scripts/assets/scripts/IosManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LadleWordMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/HttpMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LanguageMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/KSManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LabelPlus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MainTaskData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ListItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/List.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MysticalShopData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/LogMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Loading.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeDropGoods.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeEquipComposite.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Monster.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Main.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeCurrency.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeEquip.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeFetter.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeSkillBook.js"},{"deps":{},"path":"preview-scripts/assets/scripts/OppoManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeSkill.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeUISkillBookNew.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Player.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ObjectsParent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeMainTask.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ObjectMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeTask.js"},{"deps":{},"path":"preview-scripts/assets/scripts/RoleMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeUISkillBook.js"},{"deps":{},"path":"preview-scripts/assets/scripts/RedDotMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/PoolMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/PlatformManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/NodeWearEquip.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ResCacheMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TaskMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ResourceMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SpineUtils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ScrollCard.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ShareData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TrackData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TimeMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SdkMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TrackDataEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TimeUtils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SkillMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TranstaLabel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TipsMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TranstanImg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UICompositeEnd.js"},{"deps":{},"path":"preview-scripts/assets/scripts/TweenMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UICollection.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIFastPass.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIBecoming.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIExit.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIEquipComposite.js"},{"deps":{},"path":"preview-scripts/assets/scripts/PetMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIDrawCard.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIGeneralWindow.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIEquip.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIFetterInfo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIFreeTime.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIHome.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIEquipInfo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIGeneralWindow1.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIMainTask.js"},{"deps":{},"path":"preview-scripts/assets/scripts/PlayerMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UILotty.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIOnlineReward.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIMysticalShop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIPet.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UINotBagIndex.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIShareVideo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIReward.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UISellView.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIPause.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIRealName.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UISalutation.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIShop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UISettle.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UISkillBook.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UISetting.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UISkillInfo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UISign.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UITop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UITask.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UITouch.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UITips.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Weapon.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UISkillBookInfo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIUtils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UserData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UIGuide.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Utils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AndroidManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/VivoManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/WebLinkManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Appcfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/WechatManager.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    