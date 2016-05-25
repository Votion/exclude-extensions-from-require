'use strict';

const Module = require('module');

/**
 * @param {string|array} exts
 */
function excludeExtensionsFromRequire(exts) {
    if (typeof exts === 'string') {
        exts = [exts];
    }

    exts.filter(function(ext) {
        return ext !== 'js' && ext !== 'json' && ext !== 'node';
    });

    exts.forEach(function(ext) {
        Module._extensions['.' + ext] = function(module) {};
    });
}

module.exports = excludeExtensionsFromRequire;