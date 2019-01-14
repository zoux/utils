"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 图片预加载
 *
 * @param {Array} imgSrcList 预加载的图片地址列表
 * @returns {Promise<void>}
 */
var preloadImg = function (imgSrcList) {
    return new Promise(function (resolve) {
        var loadedCount = 0;
        var totalCount = imgSrcList.length;
        imgSrcList.forEach(function (path) {
            var img = new Image();
            img.src = path;
            // 如果图片被缓存，则直接返回缓存数据
            if (img.complete) {
                if (++loadedCount === totalCount) {
                    resolve();
                }
            }
            img.onerror = img.onload = function () {
                if (++loadedCount === totalCount) {
                    resolve();
                }
            };
        });
    });
};
exports.default = preloadImg;
