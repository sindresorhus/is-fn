'use strict';

module.exports = x => {
    if (x instanceof Function) {
        return true;
    }
    return false;
};
