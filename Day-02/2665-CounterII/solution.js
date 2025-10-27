/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init;
    const initial = init;
    let increment = function(){
        current++;
        return current;
    };
    let reset = function() {
        current = initial;
        return current;
    };
    let decrement = function(){
        current--;
        return current;
    };
    return {increment,reset,decrement};
};
