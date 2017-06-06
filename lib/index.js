"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enum = (function () {
    function Enum() {
    }
    Enum.fromArray = function (o) {
        return o.reduce(function (res, key) {
            res[key] = key;
            return res;
        }, Object.create(null));
    };
    Enum.fromObject = function (definition) {
        return definition;
    };
    return Enum;
}());
exports.Enum = Enum;
