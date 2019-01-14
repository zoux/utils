"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loadJsSync_1 = __importDefault(require("./module/loadJsSync"));
exports.loadJsSync = loadJsSync_1.default;
var preloadImg_1 = __importDefault(require("./module/preloadImg"));
exports.preloadImg = preloadImg_1.default;
var utils = { loadJsSync: loadJsSync_1.default, preloadImg: preloadImg_1.default };
if (window && !window.utils) {
    window.utils = utils;
}
exports.default = utils;
