"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _String = String;
exports.default = _String.fromCodePoint ||
    function stringFromCodePoint() {
        var MAX_SIZE = 0x4000;
        var codeUnits = [];
        var highSurrogate;
        var lowSurrogate;
        var index = -1;
        var length = arguments.length;
        if (!length) {
            return "";
        }
        var result = "";
        while (++index < length) {
            var codePoint = Number(arguments[index]);
            if (!isFinite(codePoint) ||
                codePoint < 0 ||
                codePoint > 0x10ffff ||
                Math.floor(codePoint) != codePoint) {
                throw RangeError("Invalid code point: " + codePoint);
            }
            if (codePoint <= 0xffff) {
                codeUnits.push(codePoint);
            }
            else {
                codePoint -= 0x10000;
                highSurrogate = (codePoint >> 10) + 0xd800;
                lowSurrogate = (codePoint % 0x400) + 0xdc00;
                codeUnits.push(highSurrogate, lowSurrogate);
            }
            if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += String.fromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
//# sourceMappingURL=stringFromCodePoint.js.map