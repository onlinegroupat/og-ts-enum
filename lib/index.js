"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enum = (function () {
    function Enum() {
    }
    Enum.fromArray = function (o) {
        return o.reduce(function (res, key) {
            res[key] = key;
            return res;
        }, Object.create(Enum));
    };
    Enum.fromObject = function (definition) {
        return definition;
    };
    Enum.keys = function (enumObj) {
        return Object.keys(enumObj);
    };
    return Enum;
}());
exports.Enum = Enum;
