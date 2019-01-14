"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * js 同步加载
 *
 * @param {String} jsSrc      同步加载的 js 地址
 * @param {Boolean} attrAsync  是否启用 sync
 * @returns {Promise<void>}
 */
var loadJsSync = function (jsSrc, attrAsync) {
    if (attrAsync === void 0) { attrAsync = true; }
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = jsSrc;
        script.async = !!attrAsync;
        script.onload = function () {
            resolve();
        };
        script.onerror = function () {
            reject("\u52A0\u8F7D\u5931\u8D25\uFF1A" + jsSrc);
        };
        document.head.appendChild(script);
    });
};
exports.default = loadJsSync;
