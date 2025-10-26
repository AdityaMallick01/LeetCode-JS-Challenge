/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = 0;
    return function() {
        let st = n + count;
        count = count + 1;
        return st;
    };
};
