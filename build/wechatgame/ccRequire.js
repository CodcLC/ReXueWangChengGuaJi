let moduleMap = {
'assets/internal/index.js' () { return require('assets/internal/index.js') },
'assets/anim/index.js' () { return require('assets/anim/index.js') },
'assets/comaudio/index.js' () { return require('assets/comaudio/index.js') },
'assets/comconfig/index.js' () { return require('assets/comconfig/index.js') },
'assets/comimgs/index.js' () { return require('assets/comimgs/index.js') },
'assets/commonImg/index.js' () { return require('assets/commonImg/index.js') },
'assets/comparticle/index.js' () { return require('assets/comparticle/index.js') },
'assets/comprefabs/index.js' () { return require('assets/comprefabs/index.js') },
'assets/configs/index.js' () { return require('assets/configs/index.js') },
'assets/configsB/index.js' () { return require('assets/configsB/index.js') },
'assets/configsD/index.js' () { return require('assets/configsD/index.js') },
// tail
};

window.__cocos_require__ = function (moduleName) {
    let func = moduleMap[moduleName];
    if (!func) {
        throw new Error(`cannot find module ${moduleName}`);
    }
    return func();
};