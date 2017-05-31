"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Enum {
    static fromArray(o) {
        return o.reduce((res, key) => {
            res[key] = key;
            return res;
        }, Object.create(null));
    }
    static fromObject(definition) {
        return definition;
    }
}
exports.Enum = Enum;
