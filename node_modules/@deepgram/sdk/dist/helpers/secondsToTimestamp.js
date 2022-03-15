"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondsToTimestamp = void 0;
function secondsToTimestamp(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 12);
}
exports.secondsToTimestamp = secondsToTimestamp;
//# sourceMappingURL=secondsToTimestamp.js.map