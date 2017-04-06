"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function $partial(func) {
    var bindArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bindArgs[_i - 1] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return func.apply(this, bindArgs.concat(args));
    };
}
exports.$partial = $partial;
