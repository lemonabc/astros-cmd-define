'use strict';

var nodePath = require('path');
var nodeFs = require('fs');
var nodeUtil = require('util');

var util = require('lang-utils');

// 支持CMD
// 分析依赖列表

var defCode = nodeFs.readFileSync(nodePath.join(__dirname, 'define.js'));

module.exports = new astro.Middleware({
    modType: 'page',
    fileType: 'js'
}, function(asset, next) {
    asset.data = defCode + asset.data;
    next(asset);
})